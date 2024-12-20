"use client";
import { useState, useEffect } from "react";

export default function Cars() {
    const [showContent, setShowContent] = useState(false);

    // Trigger transition when the page is loaded
    useEffect(() => {
        setShowContent(true);
    }, []);


    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div
                    className={`w-[80vw] h-[80vh] card-glass rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 
                        transition-transform duration-1000 ease-out transform ${
                        showContent ? "translate-y-0 opacity-100" : "translate-y-80 opacity-0"
                    }`}>
                </div>
            </div>

            <div className="rounded-full w-2/3 aspect-square transition-global-inverse fixed z-[-1] -left-1/4 top-1/3"></div>


        </>
    );
}
