'use client';
import Link from 'next/link';  // Import the Link component from Next.js
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';  // Import to track the pathname

export default function Navbar() {
    const pathname = usePathname();  // Track the current pathname

    const [isMorphed, setIsMorphed] = useState(pathname !== "/");  // Initialize based on current path

    useEffect(() => {
        // Automatically update morph state based on the current pathname
        setIsMorphed(pathname !== "/");
    }, [pathname]);  // Run this effect every time the pathname changes

    return (
        <nav
            role="navigation"
            className={`fixed w-full transition-all duration-500 ease-out-in text-dark dark:text-light ${isMorphed ? "top-0 h-16 flex items-center justify-center" : "top-1/2 left-0 right-0 transform -translate-y-1/2 h-24 absolute flex items-center justify-center text-4xl"}`}
        >
            <ul className={`flex items-center space-x-4 transition-all duration-500 ease-out-in ${isMorphed ? "gap-7" : "gap-10"}`}>
                <li
                    key="home"
                    className={`cursor-pointer hover:underline ${pathname === "/" ? "underline font-bold" : ""}`}
                >
                    <Link href="/">Home</Link>
                </li>
                <span className="mx-2">|</span>
                <li
                    key="project"
                    className={`cursor-pointer hover:underline ${pathname === "/project" ? "underline font-bold" : ""}`}
                >
                    <Link href="/project">Project</Link>
                </li>
                <span className="mx-2">|</span>
                <li
                    key="cars"
                    className={`cursor-pointer hover:underline ${pathname === "/cars" ? "underline font-bold" : ""}`}
                >
                    <Link href="/cars">Cars</Link>
                </li>
                <span className="mx-2">|</span>
                <li
                    key="fishing"
                    className={`cursor-pointer hover:underline ${pathname === "/fishing" ? "underline font-bold" : ""}`}
                >
                    <Link href="/fishing">Fishing</Link>
                </li>
            </ul>
        </nav>
    );
}
