import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full bg-gray-300 flex justify-between items-center p-4">
            <div className="flex items-center gap-4">
                <Link href="/">Home</Link>
                <Link href="/photos">Photos</Link>
                <Link href="/posts">Posts</Link>
            </div>

            <Link href='/login'>Login</Link>
        </div>
    );
}