"use client";

import PostButtonList from "@/components/posts/PostButtonList";
import PostScrollList from "@/components/posts/PostScrollList";
import { useState } from "react";

export default function Posts() {
    const [isScrollMode, setIsScrollMode] = useState(false);

    const handleScrollModeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsScrollMode(e.target.checked);
    };
    return (
        <div className="w-full flex flex-col items-center justify-center p-4 gap-4">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-2xl font-bold">Posts List</h1>

                <label htmlFor='checkbox' className="flex items-center gap-2">
                    <span className="text-sm">스크롤 모드 켜기</span>
                    <input type='checkbox' className="w-4 h-4" checked={isScrollMode} onChange={handleScrollModeChange} />
                </label>
            </div>

            <div className='max-w-5xl'>
                {isScrollMode ? <PostScrollList /> : <PostButtonList />}
            </div>
        </div>
    );
}