import React from "react";
import Nav from "../components/nav.jsx";
import Marquee from "react-fast-marquee"; // Import the Marquee component
import "../style/style.css"; // Import your custom CSS

const Angeln = () => {
    const top = ["HWA EVO", "|", "Mitsubishi Lancer Evo 8", "|"];

    return (
        <div className="bg-background h-screen">
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

            <div className="text-text-white h-fit mt-56 z-0 flex justify-center">

            </div>
        </div>
    );
};

export default Angeln;
