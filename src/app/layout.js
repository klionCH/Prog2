`use client`;
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ThemeToggle from './components/ToggleSwitchDarkMode';
import Navbar from './components/Navbar';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "My App",
    description: "An awesome app built with Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased transition-global`}
        >
        <div className="min-h-screen flex flex-col">

                <Navbar/>

            <main className="flex-grow">
                {children}
            </main>
        </div>

        <footer className="fixed bottom-0 left-0 w-full flex items-center justify-end p-6">
            <ThemeToggle/>
        </footer>


        </body>
        </html>
    );
}
