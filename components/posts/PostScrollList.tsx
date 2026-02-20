// src/components/PostScrollList.tsx
import { fetchPosts } from "@/api/posts";
import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function PostScrollList() {
    const bottomRef = useRef<HTMLDivElement | null>(null);

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        error,
    } = useInfiniteQuery({
        queryKey: ["posts-scroll"],
        queryFn: fetchPosts,
        initialPageParam: 1,
        getNextPageParam: (_lastPage, allPages) => {
            const nextPage = allPages.length + 1;
            return nextPage <= 10 ? nextPage : undefined;
        },
    });

    useEffect(() => {
        if (!bottomRef.current || !hasNextPage) return;

        const observer = new window.IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchNextPage();
                }
            },
            { threshold: 1 }
        );
        observer.observe(bottomRef.current);

        return () => observer.disconnect();
    }, [bottomRef, hasNextPage, fetchNextPage]);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div className="space-y-4">
            {data?.pages.flat().map((post) => (
                <div key={post.id} className="p-4 border rounded shadow-sm bg-white">
                    <Link href={`/posts/detail/${post.id}`} className="font-semibold text-lg">{post.title}</Link>
                    <p className="text-sm text-gray-600">{post.body}</p>
                </div>
            ))}
            <div ref={bottomRef} className="h-10" />
            {isFetchingNextPage && <p>Loading more...</p>}
            {!hasNextPage && (
                <p className="text-center text-gray-400">No more posts</p>
            )}
        </div>
    );
}