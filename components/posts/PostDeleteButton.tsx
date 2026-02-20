import { deletePost } from "@/api/posts";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function PostDeleteButton({ postId }: { postId: number }) {
    const queryClient = useQueryClient();
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: () => deletePost(postId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            alert("삭제되었습니다.");
            router.push("/posts");
        },
    });

    return (
        <button className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => mutation.mutate()}> 삭제</button>
    );
}