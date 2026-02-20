"use client";

import Modal from "@/components/common/modal";
import PostDetail from "@/components/posts/PostDetail";
import { useParams } from "next/navigation";

export default function PhotoModalPage() {
    const { id } = useParams();
    const postId = Number(id);
    return (
        <Modal>
            <PostDetail postId={postId} />
        </Modal>
    );
}