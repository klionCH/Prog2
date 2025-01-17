'use client';
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Card from "../components/card";
import CardWithVideo from "../components/cardWithVideo";
import { useSwipeable } from "react-swipeable";
import { setTimeout } from 'timers';

export default function Cars() {
    const [showContent, setShowContent] = useState(false);
    const [cardData, setCardData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Der Index der aktuell angezeigten Karte
    const [swipeDirection, setSwipeDirection] = useState(0); // Richtung der Animation (-1 für links, 1 für rechts)

    // Trigger transition when the page is loaded
    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching data...");
                const { data, error } = await supabase
                    .from("CarCards")
                    .select("leftText, middleText, rightText, leftImg, middleImg, rightImg, containsVideo");
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
            setSwipeDirection(1); // Setze die Richtung nach rechts
            setCurrentIndex(currentIndex + 1); // Zeige die nächste Karte
        }
    };

    const handlePrevCard = () => {
        if (currentIndex > 0) {
            setSwipeDirection(-1);
            setCurrentIndex(currentIndex - 1);
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNextCard,
        onSwipedRight: handlePrevCard,
    });

    if (!cardData.length) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="text-2xl">Loading...</span>
            </div>
        );
    }


    const currentCard = cardData[currentIndex];
    const isVideo = currentCard.containsVideo;

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div
                    className={`w-[80vw] transition-transform duration-1000 transform${
                        showContent
                            ? `translate-x-${swipeDirection * 100} opacity-100`
                            : "translate-y-80 opacity-0"
                    }`}
                    {...swipeHandlers}
                >
                    <div className="card-glass lg:mt-[8vh] md:mt-10 lg:min-h-[80vh]">
                        {isVideo ? (
                            <CardWithVideo
                                textLeft={currentCard.leftText}
                                textMiddle={currentCard.middleText}
                                imgLeft={currentCard.leftImg}
                                imgMiddle={currentCard.middleImg}
                                imgRight={currentCard.rightImg}

                            />
                        ) : (
                            <Card
                                textLeft={currentCard.leftText}
                                textMiddle={currentCard.middleText}
                                textRight={currentCard.rightText}
                                imgLeft={currentCard.leftImg}
                                imgMiddle={currentCard.middleImg}
                                imgRight={currentCard.rightImg}
                                w3={400}
                            />
                        )}
                    </div>
                </div>
            </div>

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

            <div className="rounded-full w-2/3 aspect-square transition-global-inverse fixed z-[-1] -left-1/4 top-1/3"></div>
        </>
    );
}
