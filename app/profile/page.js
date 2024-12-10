"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../context/AuthUserContext";

export default function Profile() {
    const { authUser, loading } = useAuth();
    const router = useRouter();

    // Listen for changes on loading and authUser, redirect if needed
    useEffect(() => {
        if (!authUser) {
            router.push("/login");
        }
    }, [authUser, loading, router]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
            <section className="container mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl mb-8">Profile</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <p>Email: {authUser.email}</p>
                        <p>UID: {authUser.uid}</p>
                    </div>
                )}
            </section>
        </div>
    );
}
