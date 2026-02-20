"use client";

import { createPost, updatePost } from "@/api/posts";
import type { Post } from "@/types/posts";
import { classNames } from "@/lib/classNames/login/classNames";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

type PostEditorProps = {
    initialPost?: Post;
};

export default function PostEditor({ initialPost }: PostEditorProps) {
    const router = useRouter();
    const isEdit = !!initialPost;
    const [title, setTitle] = useState(initialPost?.title || "");
    const [body, setBody] = useState(initialPost?.body || "");
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (post: Post | Omit<Post, "id">) =>
            isEdit ? updatePost(post as Post) : createPost(post as Omit<Post, "id">),

        onSuccess: () => {
            alert(isEdit ? "수정 성공!" : "작성 성공!");
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            router.push("/posts");
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (isEdit && initialPost) {
            mutation.mutate({
                ...initialPost,
                title,
                body,
            });
        } else {
            mutation.mutate({
                userId: 1,
                title,
                body,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className={classNames.formContainer}>
            <div className={classNames.formField}>
                <label htmlFor="post-title" className={classNames.formLabel}>
                    제목
                </label>
                <input
                    id="post-title"
                    type="text"
                    className={classNames.formInput}
                    placeholder="제목을 입력하세요"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className={classNames.formField}>
                <label htmlFor="post-body" className={classNames.formLabel}>
                    내용
                </label>
                <textarea
                    id="post-body"
                    className={`${classNames.formInput} min-h-[180px] resize-y`}
                    placeholder="내용을 입력하세요"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    rows={6}
                />
            </div>

            {mutation.error && (
                <p className={classNames.formError} role="alert">
                    {(mutation.error as Error).message}
                </p>
            )}

            <button
                type="submit"
                disabled={mutation.isPending}
                className={classNames.formButton}
            >
                {mutation.isPending
                    ? "처리 중..."
                    : isEdit
                        ? "수정하기"
                        : "작성하기"}
            </button>
        </form>
    );
}
