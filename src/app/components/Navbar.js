'use client';
import Link from 'next/link';  // Import the Link component from Next.js
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMorphed, setIsMorphed] = useState(false);
    const [isHome, setIsHome] = useState(true);  // Track if we're on the Home page
    const [activeTab, setActiveTab] = useState("/");

    useEffect(() => {
        setActiveTab(window.location.pathname); // Update the active tab based on the current route
        if (window.location.pathname === "/") {
            setIsHome(true);
            setIsMorphed(false);
        } else {
            setIsHome(false);
            setIsMorphed(true);
        }
    }, []);

    const handleNavClick = (path) => {
        setActiveTab(path);
        setIsHome(path === "/");
        setIsMorphed(path !== "/");
    };

    return (
        <nav
            role="navigation"
            className={`fixed w-full transition-all duration-500 ease-out-in text-dark dark:text-light ${
                isMorphed
                    ? "top-0 h-16 flex items-center justify-center"
                    : "top-1/2 left-0 right-0 transform -translate-y-1/2 h-24 absolute flex items-center justify-center text-4xl"
            }`}
        >
            <ul className={`flex items-center space-x-4 transition-all duration-500 ease-out-in ${
                isMorphed
                    ? "gap-7"
                    : "gap-10"
            }`}>
                <li
                    key="home"
                    className={`cursor-pointer hover:underline ${
                        activeTab === "/" ? "underline font-bold" : ""
                    }`}
                    onClick={() => handleNavClick("/")}
                >
                    <Link href="/">Home</Link>
                </li>
                <span className="mx-2">|</span>
                <li
                    key="project"
                    className={`cursor-pointer hover:underline ${
                        activeTab === "/project" ? "underline font-bold" : ""
                    }`}
                    onClick={() => handleNavClick("/project")}
                >
                    <Link href="/project">Project</Link>
                </li>
                <span className="mx-2">|</span>
                <li
                    key="cars"
                    className={`cursor-pointer hover:underline ${
                        activeTab === "/cars" ? "underline font-bold" : ""
                    }`}
                    onClick={() => handleNavClick("/cars")}
                >
                    <Link href="/cars">Cars</Link>
                </li>
                <span className="mx-2">|</span>
                <li
                    key="fishing"
                    className={`cursor-pointer hover:underline ${
                        activeTab === "/fishing" ? "underline font-bold" : ""
                    }`}
                    onClick={() => handleNavClick("/fishing")}
                >
                    <Link href="/fishing">Fishing</Link>
                </li>
            </ul>
        </nav>
    );
}
