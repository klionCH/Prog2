'use client';
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Card from "../components/card";
import CardWithVideo from "../components/cardWithVideo";
import { useSwipeable } from "react-swipeable";
import { setTimeout } from 'timers';

export default function Fishing() {
    const [showContent, setShowContent] = useState(false);
    const [cardData, setCardData] = useState([]);

    // Trigger transition when the page is loaded
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching data...");
                const { data, error } = await supabase
                    .from("FishCards")
                    .select("leftText, middleText, rightText, leftImg, middleImg, rightImg");
                if (error) {
                    console.error("Error fetching data:", error);
                } else {
                    console.log("Fetched data:", data);
                    setCardData(data); // Speichere alle Karten in einem Array
                    setTimeout(() => setShowContent(true), 100); // Verzögerung von 100ms
                }
            } catch (err) {
                console.error("Unexpected error:", err);
            }
        };

        fetchData();
    }, []);

    if (!cardData.length) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="text-2xl">Loading...</span> {/* Besseren Ladeindikator */}
            </div>
        );
    }


    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div
                    className={`w-[80vw] transition-transform duration-1000 transform ${
                        showContent
                            ? `translate-x-0 opacity-100`
                            : "translate-y-80 opacity-0"
                    }`}
                >
                    <div className="card-glass lg:mt-[8vh] md:mt-10 lg:min-h-[80vh]">
                            <Card
                                textLeft={cardData[0].leftText}
                                textMiddle={cardData[0].middleText}
                                textRight={cardData[0].rightText}
                                imgLeft={cardData[0].leftImg}
                                imgMiddle={cardData[0].middleImg}
                                imgRight={cardData[0].rightImg}
                                w3={500}
                            />
                    </div>
                </div>
            </div>

            <div className="rounded-full w-2/3 aspect-square transition-global-inverse fixed z-[-1] -left-1/4 top-1/3"></div>
        </>
    );
}
