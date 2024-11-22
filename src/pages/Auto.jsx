import Nav from "../components/nav.jsx";
import mitsubishi from "../img/mit-edited.jpg";
import secondCarImage from "../img/mit-edited.jpg"; // Import the second car image
import Marquee from "react-fast-marquee";
import React from "react";

const Auto = () => {
    const top = ["HWA EVO", "|", "Mitsubishi Lancer Evo 8", "|"];
    const description1 = ["canon eos r", "|"];
    const description2 = ["nikon d850", "|"]; // Description for the second image

    return (
        <div className="bg-background min-h-screen relative overflow-x-hidden">
            <div className="flex justify-center sticky top-0 z-20">
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
            <Nav className="z-0"/>
            <div className="relative z-10 pt-40 pb-16 space-y-40">
                {/* First Image Section */}
                <div className="relative grid grid-cols-5 items-center">
                    {/* Text */}
                    <div className="col-span-2 relative text-text-white z-20 px-8 left-2/4">
                        <div className="text-text-orange font-rokkitt text-2xl tracking-widest leading-loose mb-8">
                            Der Mitsubishi Lancer Evo 8 ist ein leistungsstarker, allradgetriebener Sportwagen, der
                            durch
                            seine Turboaufladung und aggressive Optik bekannt wurde. Er gilt als Ikone des Rallyesports
                            und
                            bietet beeindruckende Fahreigenschaften auf der Straße und abseits davon.
                        </div>
                        <div className="text-text-pink font-rokkitt text-2xl tracking-widest leading-loose">
                            Canon eos r
                            <br/>
                            F1/150
                            <br/>
                            Mitsubishi Lancer Evo 8
                        </div>
                    </div>
                    {/* Spacer */}
                    <div className="col-span-1"></div>
                    {/* Image */}
                    <div className="col-span-2 relative">
                        <img
                            className="w-2/4 relative z-10 mx-auto right-2/4"
                            src={mitsubishi}
                            alt="Mitsubishi"
                        />
                        <div
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4/5 marquee-banner-border z-0">
                            <Marquee gradient={false} speed={40} className="marquee-banner" autoFill={true}>
                                {description1.map((item, index) => (
                                    <span key={index} className="marquee-item">
                                {item}
                            </span>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>
                {/* Second Image Section */}
                <div className="relative grid grid-cols-5 items-center">
                    {/* Text */}
                    <div className="col-span-2 relative text-text-white z-20 px-8 left-2/4">
                        <div className="text-text-orange font-rokkitt text-2xl tracking-widest leading-loose mb-8">
                            Der zweite Wagen ist ebenso beeindruckend, mit innovativer Technologie und einer markanten
                            Ästhetik. Er steht für Leistung, Eleganz und Präzision, perfekt für Liebhaber von
                            Hochleistungsfahrzeugen.
                        </div>
                        <div className="text-text-pink font-rokkitt text-2xl tracking-widest leading-loose">
                            Nikon d850
                            <br/>
                            F1/200
                            <br/>
                            Second Car Model
                        </div>
                    </div>
                    {/* Spacer */}
                    <div className="col-span-1"></div>
                    {/* Image */}
                    <div className="col-span-2 relative">
                        <img
                            className="w-2/4 relative z-10 mx-auto right-2/4"
                            src={secondCarImage}
                            alt="Second Car"
                        />
                        <div
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4/5 marquee-banner-border z-0">
                            <Marquee gradient={false} speed={40} className="marquee-banner" autoFill={true}>
                                {description2.map((item, index) => (
                                    <span key={index} className="marquee-item">
                                {item}
                            </span>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Auto;
