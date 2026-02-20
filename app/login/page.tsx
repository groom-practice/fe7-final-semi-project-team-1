"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { classNames } from "@/lib/classNames/login/classNames";

const LOGIN_ID = "mandoo";
const LOGIN_PASSWORD = "mandoothelove";

export default function Page() {
    const router = useRouter();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (!id.trim() || !password.trim()) {
            setError("아이디와 비밀번호를 모두 입력해주세요.");
            return;
        }

        if (id !== LOGIN_ID || password !== LOGIN_PASSWORD) {
            setError("아이디 또는 비밀번호가 올바르지 않습니다.");
            return;
        }


        //로그인 성공
        localStorage.setItem("isLoggedIn", "true");
        router.push("/");
    };

    return (
        <div className={classNames.pageContainer}>
            <main className={classNames.card}>
                <h1 className={classNames.pageTitle}>로그인</h1>

                <form onSubmit={handleSubmit} className={classNames.formContainer}>
                    <div className={classNames.formField}>
                        <label htmlFor="id" className={classNames.formLabel}>
                            아이디
                        </label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            autoComplete="username"
                            className={classNames.formInput}
                            placeholder="아이디를 입력하세요"
                        />
                    </div>

                    <div className={classNames.formField}>
                        <label
                            htmlFor="password"
                            className={classNames.formLabel}
                        >
                            비밀번호
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            className={classNames.formInput}
                            placeholder="비밀번호를 입력하세요"
                        />
                    </div>

                    {error && (
                        <p
                            className={classNames.formError}
                            role="alert"
                        >
                            {error}
                        </p>
                    )}

                    <button type="submit" className={classNames.formButton}>
                        로그인
                    </button>
                </form>
            </main>
        </div>
    );
}
