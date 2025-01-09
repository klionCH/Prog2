"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Card from "../components/card";

export default function Cars() {
    const [showContent, setShowContent] = useState(false);
    const [cardData, setCardData] = useState(null);

    // Trigger transition when the page is loaded
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching data...");
                const { data, error } = await supabase
                    .from("cards")
                    .select("leftText, middleText, rightText, leftImg, middleImg, rightImg");
                if (error) {
                    console.error("Error fetching data:", error);
                } else {
                    console.log("Fetched data:", data);
                    // Übernehme nur den ersten Eintrag (falls die Tabelle mehrere hat)
                    setCardData(data.length > 0 ? data[0] : null);
                    // Setze showContent nach einer kurzen Verzögerung
                    setTimeout(() => setShowContent(true), 100); // Verzögerung von 100ms
                }
            } catch (err) {
                console.error("Unexpected error:", err);
            }
        };

        fetchData();
    }, []);

    if (!cardData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div
                    className={`w-[80vw] h-[80vh]  
                        transition-transform duration-1000 transform ${
                        showContent ? "translate-y-0 opacity-100" : "translate-y-80 opacity-0"
                    }`}>
                    <div className="card-glass">
                        <Card
                            textLeft={cardData.leftText}
                            textMiddle={cardData.middleText}
                            textRight={cardData.rightText}
                            imgLeft={cardData.leftImg}
                            imgMiddle={cardData.middleImg}
                            imgRight={cardData.rightImg}
                        />
                    </div>
                </div>
            </div>

            <div className="rounded-full w-2/3 aspect-square transition-global-inverse fixed z-[-1] -left-1/4 top-1/3"></div>
        </>
    );
}
