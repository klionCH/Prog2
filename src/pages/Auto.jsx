import Nav from "../components/nav.jsx";
import mitsubishi from "../img/mit-edited.jpg";
import Marquee from "react-fast-marquee";
import React from "react";


const Auto = () => {
    const circle = "w-96 aspect-square rounded-full border-4 border-circle flex items-center justify-center";
    const top = ["HWA EVO", "|", "Mitsubishi Lancer Evo 8", "|"];
    const description1 = ["canon eos r", "|"]

    return (
        <div className="bg-background h-screen relative overflow-hidden">
            <div className="flex justify-center ">
                <div className="w-full absolute  mt-3 p-3 marquee-banner-border z-10">
                    {/* First Marquee with full-width */}
                    <Marquee gradient={false} speed={40} className="marquee-banner" autoFill={true}>
                        {top.map((item, index) => (
                            <span key={index} className="marquee-item">
                {item}
              </span>
                        ))}
                    </Marquee>
                </div>
            </div>
            <Nav/>
            <div className="absolute inset-0 pointer-events-none">
                <div className={`${circle} absolute top-2/4 left-1/4`}/>
                <div className={`${circle} absolute top-2/3 left-1/2`}/>
                <div className={`${circle} absolute top-1/2 left-3/4`}/>
            </div>

            <div className="text-text-white h-fit mt-56 relative z-0">
                <div>
                    <img className="absolute left-2/4 w-1/4 z-0" src={mitsubishi} alt="Mitsubishi"/>
                    <div className="flex justify-center w-1/4">
                        <div className="w-full absolute  mt-3 p-3 marquee-banner-border z-10">
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
                <div className="relative w-1/3 left-1/4 pt-40">
                    <div className="text-text-orange h-fit font-rokkitt text-2xl tracking-widest leading-loose mb-8">
                        Der Mitsubishi Lancer Evo 8 ist ein leistungsstarker, allradgetriebener Sportwagen, der durch
                        seine Turboaufladung und aggressive Optik bekannt wurde. Er gilt als Ikone des Rallyesports und
                        bietet beeindruckende Fahreigenschaften auf der Straße und abseits davon.
                    </div>
                    <div className="text-text-pink h-fit font-rokkitt text-2xl tracking-widest leading-loose">
                        Canon eos r
                        <br/>
                        F1/150
                        <br/>
                        Mitsubishi Lancer Evo 8
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Auto;
