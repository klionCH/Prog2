"use client";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import Card from "../components/card";

export default function Cars() {
    const [showContent, setShowContent] = useState(false);
    const [cardData, setCardData] = useState(null);

    // Fetch data from Supabase
    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from("cards").select("*");
            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setCardData(data[0]); // Nur die erste Karte verwenden
            }
        };

        fetchData();
        setShowContent(true);
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
                            textLeft={cardData.textLeft}
                            textMiddle={cardData.textMiddle}
                            textRight={cardData.textRight}
                            imgLeft={cardData.imgLeft}
                            imgMiddle={cardData.imgMiddle}
                            imgRight={cardData.imgRight}
                        />
                    </div>
                </div>
            </div>

            <div className="rounded-full w-2/3 aspect-square transition-global-inverse fixed z-[-1] -left-1/4 top-1/3"></div>
        </>
    );
}
