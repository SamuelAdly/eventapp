"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthUserContext";
export default function NavBar() {
    const { authUser, loading, signOut } = useAuth();

    return (
        <header className="fixed w-full px-6 py-4 border-0 flex justify-between items-center bg-gradient-to-b from-blue-700 to-blue-600 text-white shadow-lg">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full">
                <Link legacyBehavior href="/" className="text-2xl font-bold hover:text-gray-300">
                    <a className="text-2xl font-bold hover:text-gray-300">Eventure</a>
                </Link>
                <nav className="space-x-6">
                    <Link
                        href="/explore"
                        className="text-white text-xl font-semibold hover:text-gray-300"
                    >
                        Events
                    </Link>
                    <Link
                        href="/marketplace"
                        className="text-white text-xl font-semibold hover:text-gray-300"
                    >
                        Marketplace
                    </Link>
                </nav>
                {authUser ? (
                    <div className="space-x-4">
                        <Link
                            href="/profile"
                            className="px-4 py-2 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-300"
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
                            className="px-4 py-2 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-300"
                        >
                            Log In
                        </Link>
                        <Link
                            href="/sign-up"
                            className="px-4 py-2 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-300"
                        >
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
