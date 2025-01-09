"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Card from "../components/card";
import { useSwipeable } from "react-swipeable"; // Importiere die Swipe-Funktionalität

export default function Fishing() {
    const [showContent, setShowContent] = useState(false);
    const [cardData, setCardData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Der Index der aktuell angezeigten Karte

    // Trigger transition when the page is loaded
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching data...");
                const { data, error } = await supabase
                    .from("CarCards")
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

    const handleNextCard = () => {
        if (currentIndex < cardData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNextCard,  // Swipe nach links
        onSwipedRight: handlePrevCard, // Swipe nach rechts
    });

    if (!cardData.length) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div
                    className={`w-[80vw] h-[80vh] transition-transform duration-1000 transform ${
                        showContent ? "translate-y-0 opacity-100" : "translate-y-80 opacity-0"
                    }`}
                    {...swipeHandlers} // Swipe-Handler hinzufügen
                >
                    <div className="card-glass">
                        <Card
                            textLeft={cardData[currentIndex].leftText}
                            textMiddle={cardData[currentIndex].middleText}
                            textRight={cardData[currentIndex].rightText}
                            imgLeft={cardData[currentIndex].leftImg}
                            imgMiddle={cardData[currentIndex].middleImg}
                            imgRight={cardData[currentIndex].rightImg}
                        />
                    </div>
                </div>
            </div>

            {/* Navigation Pfeile */}
            <div
                className="absolute top-1/2 left-4 z-10 cursor-pointer"
                onClick={handlePrevCard}
            >
                <span className="text-3xl text-white dark:text-black transition-colors duration-300">&larr;</span> {/* Linker Pfeil */}
            </div>
            <div
                className="absolute top-1/2 right-4 z-10 cursor-pointer"
                onClick={handleNextCard}
            >
                <span className="text-3xl text-dark dark:text-light transition-colors duration-300">&rarr;</span> {/* Rechter Pfeil */}
            </div>

        </>
    );
}
