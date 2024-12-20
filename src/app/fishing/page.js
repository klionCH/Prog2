"use client";
import { useState, useEffect } from "react";

export default function fishing (){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showContent, setShowContent] = useState(false);

    // Trigger transition when the page is loaded
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setShowContent(true);
    }, []);

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                {/* Glassmorphism effect container */}
                <div
                    className={`w-[80vw] h-[80vh] card-glass rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 
                        transition-transform duration-1000 ease-out transform ${
                        showContent ? "translate-y-0 opacity-100" : "translate-y-80 opacity-0"
                    }`}>
                    {/* Content */}
                </div>
            </div>

            {/* Background circle */}
            <div className="rounded-full w-2/3 aspect-square transition-global-inverse fixed z-[-1] -left-1/4 top-1/3"></div>


        </>
    );
}