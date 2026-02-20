"use client";

import { fetchPostById } from "@/api/posts";
import PostEditor from "@/components/posts/PostEditor";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Page() {
    const { id } = useParams();

    const postId = parseInt(id as string, 10);

    if (isNaN(postId)) return <p>유효하지 않은 게시글 ID입니다.</p>;

    const { data: post } = useQuery({
        queryKey: ["post", postId],
        queryFn: () => fetchPostById(postId),
    });

    return (
        <div className="w-full flex flex-col items-center justify-center p-4 gap-4">
            <h1>Post Edit</h1>

            <PostEditor initialPost={post} />
        </div>
    );
}
