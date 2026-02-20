"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(stored === "true");
    }, [pathname]);

    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        router.replace("/login");
    };

    return (
        <div className="w-full bg-gray-300 flex justify-between items-center p-4">
            <div className="flex items-center gap-4">
                <Link href="/">Home</Link>
                <Link href="/photos">Photos</Link>
                <Link href="/posts">Posts</Link>
            </div>

            {isLoggedIn ? (
                <Link href="#" onClick={handleLogout}>
                    Logout
                </Link>
            ) : (
                <Link href="/login">Login</Link>
            )}
        </div>
    );
}