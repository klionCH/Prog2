import React, { useEffect } from "react";
import mitsubishi from "../img/redMitsubishiEvo.jpg";
import bmw from "../img/bmw.png";
import secondCarImage from "../img/redMitsubishiEvo.jpg";
import Marquee from "react-fast-marquee";
import Nav from "../components/nav.jsx";

const Auto = () => {
    const top = ["HWA EVO", "|", "Mitsubishi Lancer Evo 8", "|"];

    // Intersection Observer to add the "ease-in" class when elements are in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("ease-in");
                        observer.unobserve(entry.target); // Stop observing after animation triggers
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the element is in view
        );

        const elements = document.querySelectorAll(".fade-in");
        elements.forEach(element => observer.observe(element));

        return () => {
            // Cleanup observer on component unmount
            elements.forEach(element => observer.unobserve(element));
        };
    }, []);

    return (
        <div className="bg-background min-h-screen relative overflow-x-hidden">
            {/* Sticky Marquee Banner */}
            <div className="flex justify-center top-0 z-20">
                <div className="w-full p-3 marquee-banner-border">
                    <Marquee gradient={false} speed={40} className="marquee-banner" autoFill={true}>
                        {top.map((item, index) => (
                            <span key={index} className="marquee-item">
                                {item}
                            </span>
                        ))}
                    </Marquee>
                </div>
            </div>

            {/* Navigation Bar */}
            <Nav className="z-30" />

            <div className="relative z-10 pt-40 pb-16 space-y-40 mt-64">
                {/* First Car Section */}
                <div className="relative grid grid-cols-5 items-center">
                    <div className="col-span-2 relative text-text-white z-20 px-8 left-3/4 fade-in">
                        <div className="text-text-orange font-rokkitt lg:text-2xl text-1xl tracking-widest leading-loose mb-8">
                            Der Mitsubishi Lancer Evo 8 ist ein leistungsstarker, allradgetriebener Sportwagen, der
                            durch seine Turboaufladung und aggressive Optik bekannt wurde. Er gilt als Ikone des
                            Rallyesports und bietet beeindruckende Fahreigenschaften auf der Straße und abseits davon.
                        </div>
                        <div className="text-text-pink font-rokkitt lg:text-2xl text-xl tracking-widest leading-loose">
                            <p className="pt-1 pb-1">Canon eos r</p>
                            <p className="pt-1 pb-1">F1/150</p>
                            <p className="pt-1 pb-1">Mitsubishi Lancer Evo 8</p>
                        </div>
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-2 relative fade-in">
                        <img
                            className="w-3/5 relative z-10 mx-auto right-1/4"
                            src={mitsubishi}
                            alt="Mitsubishi"
                            loading={"lazy"}
                        />
                    </div>
                </div>

                {/* Second Car Section */}
                <div className="mt-64 relative grid grid-cols-5 items-center">
                    <div className="col-span-2 relative fade-in">
                        <img
                            className="w-3/5 relative z-10 mx-auto left-1/4"
                            src={bmw}
                            alt="Second Mitsubishi"
                            loading={"lazy"}
                        />
                    </div>
                    <div className="col-span-1"></div>
                    <div className="col-span-2 relative text-text-white z-20 px-8 right-3/4 fade-in">
                        <div className="text-text-orange font-rokkitt xl:text-2xl text-1xl tracking-widest leading-loose mb-8 text-right">
                            Der BMW 7er E38 (1994–2001) verbindet zeitlose Eleganz mit fortschrittlicher Technik und bietet Motoren vom Reihensechszylinder bis zum V12. Als erste Limousine mit integriertem Navigationssystem setzte er neue Maßstäbe in der Oberklasse. Sein Auftritt in Filmen wie „James Bond – Der Morgen stirbt nie“ unterstreicht seinen Kultstatus bis heute.                        </div>
                        <div
                            className="text-text-pink font-rokkitt xl:text-2xl text-1xl tracking-widest leading-loose text-right">
                            <p className="pt-1 pb-1">Canon eos r</p>
                            <p className="pt-1 pb-1">F1/150</p>
                            <p className="pt-1 pb-1">BMW E38</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auto;
