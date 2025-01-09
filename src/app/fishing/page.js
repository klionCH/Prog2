"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import Card from "../components/card";

export default function Fishing() {
    const [showContent, setShowContent] = useState(false);

    // Trigger transition when the page is loaded
    useEffect(() => {
        setShowContent(true);
        console.log("animation triggered")
    }, []);




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
                            textLeft="Der Mercedes-AMG GT Black Series ist das Spitzenmodell der AMG GT-Reihe, ausgestattet mit einem 4,0-Liter-V8-Biturbo-Motor, der 730 PS und 800 Nm liefert. Mit einer Beschleunigung von 0 auf 100 km/h in 3,2 Sekunden und einer Höchstgeschwindigkeit von 325 km/h bietet er pure Performance. Sein aggressives Design und die Rennsporttechnologie machen ihn zu einem Meisterwerk für Straße und Rennstrecke. Exklusiv und kompromisslos – ein Traum für Motorsport-Enthusiasten."
                            textMiddle="Der BMW M3 F80 ist eine Ikone unter den Sportlimousinen, angetrieben von einem 3,0-Liter-Reihensechszylinder mit TwinPower Turbo, der 431 PS und 550 Nm Drehmoment liefert. Er beschleunigt in 4,1 Sekunden von 0 auf 100 km/h und kombiniert Dynamik mit Alltagstauglichkeit. Mit präzisem Handling, sportlichem Design und einer aggressiven Frontpartie bietet der M3 F80 ein unvergleichliches Fahrerlebnis. Ein perfekter Mix aus Performance, Komfort und Rennsport-DNA."
                            textRight="This is the right "
                            imgLeft="/5X8A3118-Edit.png"
                            imgMiddle="/good%20quali.jpg"
                            imgRight="/instaf12.jpg"
                        />
                    </div>

                </div>
            </div>

            <div className="rounded-full w-2/3 aspect-square transition-global-inverse fixed z-[-1] -left-1/4 top-1/3"></div>


        </>
    );
}
