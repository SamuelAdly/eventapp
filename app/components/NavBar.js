"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../context/AuthUserContext";
export default function NavBar() {
    const { authUser, loading, signOut } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!authUser && !loading) {
            router.push("/login");
        }
    });

    return (
        <header className="fixed w-full px-6 py-4 border-0 flex justify-between items-center bg-gradient-to-b from-blue-700 to-blue-600 text-white shadow-lg  text-white">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full">
                <Link legacyBehavior href="/">
                    <a className="text-2xl font-bold">EventApp</a>
                </Link>
                <nav className="space-x-6">
                    <Link
                        href="/explore"
                        className="text-white font-medium hover:text-gray-200"
                    >
                        Events
                    </Link>
                    <Link
                        href="/marketplace"
                        className="text-white font-medium hover:text-gray-200"
                    >
                        Marketplace
                    </Link>
                </nav>
                {authUser ? (
                    <div className="space-x-4">
                        <Link
                            href="/profile"
                            className="px-4 py-2 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-100"
                        >
                            Profile
                        </Link>
                        <button
                            onClick={signOut}
                            className="px-4 py-1.5 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="space-x-4">
                        <Link
                            href="/login"
                            className="px-4 py-2 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-100"
                        >
                            Log In
                        </Link>
                        <Link
                            href="/sign-up"
                            className="px-4 py-2 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-100"
                        >
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
