"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "../firebase";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const router = useRouter();

    const handleLogin = async e => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setError(null);
            router.push("/");
        } catch (err) {
            setError(err.message);
            setSuccess(null);
        }
    };
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-600 text-white">
            <section className="container mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl mb-8">Login</h1>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-4 py-2 text-black"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full px-4 py-2 text-black"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    {success && (
                        <p className="text-green-500 mb-4">{success}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full py-2 bg-indigo-700 hover:bg-indigo-800"
                    >
                        Login
                    </button>
                </form>
            </section>
        </div>
    );
}
