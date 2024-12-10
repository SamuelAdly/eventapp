import Link from "next/link";
export default function NavBar() {
    return (
    <header className="fixed w-full px-6 py-4 border-0 flex justify-between items-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full">
            <Link legacyBehavior href="/">
                <a className="text-2xl font-bold">EventApp</a>
            </Link>
            <nav className="space-x-6">
                <a href="/explore" className="text-white font-medium hover:text-gray-200">
                    Events
                </a>
                <a href="/marketplace" className="text-white font-medium hover:text-gray-200">
                    Marketplace
                </a>
            </nav>
            <div className="space-x-4">
                <a href="/Login" className="px-4 py-2 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-100">
                    Log In
                </a>
                <a href="/Signup" className="px-4 py-2 bg-white text-blue-500 font-semibold rounded shadow hover:bg-gray-100">
                    Sign Up
                </a>
            </div>
        </div>
    </header>
    );
}