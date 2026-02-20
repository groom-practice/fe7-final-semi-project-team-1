import { fetchPosts } from "@/api/posts";
import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function PostButtonList() {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ["posts-scroll"],
        queryFn: fetchPosts,
        initialPageParam: 1,
        getNextPageParam: (_lastPage, allPages) => {
            const nextPage = allPages.length + 1;
            return nextPage <= 10 ? nextPage : undefined;
        },
    });

    return (
        <div className="space-y-4 bg-gray-100 p-4 rounded shadow h-full overflow-y-auto">
            {data?.pages.flat().map((post) => (
                <div key={post.id} className="p-4 bg-white rounded shadow-sm">
                    <Link href={`/posts/detail/${post.id}`} className="font-semibold text-lg">{post.title}</Link>
                    <p className="text-sm text-gray-600">{post.body}</p>
                </div>
            ))}

            {hasNextPage && (
                <button
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                >
                    {isFetchingNextPage ? "Loading more..." : "더 보기"}
                </button>
            )}
        </div>
    );
}