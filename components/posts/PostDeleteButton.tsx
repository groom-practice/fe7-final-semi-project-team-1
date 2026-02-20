import { deletePost } from "@/api/posts";
import { classNames } from "@/lib/classNames/login/classNames";
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
        <button className={classNames.formButton} onClick={() => mutation.mutate()}> 삭제</button>
    );
}