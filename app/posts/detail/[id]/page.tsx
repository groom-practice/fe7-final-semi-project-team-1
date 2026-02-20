"use client";

import PostDeleteButton from "@/components/posts/PostDeleteButton";
import PostDetail from "@/components/posts/PostDetail";
import { classNames } from "@/lib/classNames/login/classNames";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PostDetailPage() {
    const { id } = useParams();

    const postId = parseInt(id as string, 10);

    if (isNaN(postId)) return <p>유효하지 않은 게시글 ID입니다.</p>;

    return (
        <div className="max-w-2xl mx-auto mt-8 flex flex-col gap-4">
            <PostDetail postId={postId} />

            <div className="flex gap-2 justify-end">
                <Link
                    href={`/posts/edit/${postId}`}
                    className={classNames.formButton}
                >
                    수정
                </Link>
                <PostDeleteButton postId={postId} />
            </div>
        </div>
    );
}
