import React, { useEffect } from "react";
import carData from "../data/carData.json";
import Marquee from "react-fast-marquee";
import Nav from "../components/nav.jsx";
import "../style/style.css"

const Auto = () => {
    const top = carData.marqueeItems; 

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("ease-in"); 
                        observer.unobserve(entry.target); 
                    }
                });
            },
            { threshold: 0.5 } 
        );

        const elements = document.querySelectorAll(".fade-in");
        elements.forEach(element => observer.observe(element));

        return () => {
            elements.forEach(element => observer.unobserve(element));
        };
    }, []);

    return (
        <div className="bg-background min-h-screen relative overflow-x-hidden">
            {/* Marquee Banner */}
            <div className="flex justify-center top-0 z-20 pl-5 pr-5  pt-2 rounded-full">
                <div className="w-full p-3 marquee-banner-border ">
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
            <Nav className="z-30 fixed top-0 w-full" />

            {/* Cars Section */}
            <div className="relative z-10 pt-40 pb-16 space-y-40 mt-64">
                {carData.cars.map((car, index) => (
                    <div key={car.id} className={`relative grid grid-cols-5 items-center ${index % 2 === 0 ? "" : "mt-64"}`}>
                        {index % 2 === 0 ? (
                            <>
                                <div className="col-span-2 relative text-text-white z-20 px-8 left-3/4 fade-in">
                                    <div className="text-text-orange font-rokkitt lg:text-2xl text-1xl tracking-widest leading-loose mb-8">
                                        {car.description.text}
                                    </div>
                                    <div className="text-text-pink font-rokkitt lg:text-2xl text-xl tracking-widest leading-loose">
                                        {car.details.map((detail, i) => (
                                            <p key={i} className="pt-1 pb-1">{detail}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-span-1"></div>
                                <div className="col-span-2 relative fade-in">
                                    <img
                                        className="w-3/5 relative z-10 mx-auto right-1/4"
                                        src={`${process.env.PUBLIC_URL}${car.image}`}
                                        alt={car.alt}
                                        loading={"lazy"}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="col-span-2 relative fade-in">
                                    <img
                                        className="w-3/5 relative z-10 mx-auto left-1/4"
                                        src={`${process.env.PUBLIC_URL}${car.image}`} 
                                        alt={car.alt}
                                        loading={"lazy"}
                                    />
                                </div>
                                <div className="col-span-1"></div>
                                <div className="col-span-2 relative text-text-white z-20 px-8 right-3/4 fade-in">
                                    <div className="text-text-orange font-rokkitt xl:text-2xl text-1xl tracking-widest leading-loose mb-8 text-right">
                                        {car.description.text}
                                    </div>
                                    <div className="text-text-pink font-rokkitt xl:text-2xl text-1xl tracking-widest leading-loose text-right">
                                        {car.details.map((detail, i) => (
                                            <p key={i} className="pt-1 pb-1">{detail}</p>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>


            {/* Decorative Rings (with no hitbox) */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-auto">
                {/* Ring 1 */}
                <div className="absolute w-[450px] h-[450px] border-[6px] border-circle opacity-50 top-[13%] left-[9%] rounded-full animate-ring"></div>
                {/* Ring 2 */}
                <div className="absolute w-[600px] h-[600px] border-[6px] border-circle opacity-50 top-[15%] left-[60%] rounded-full animate-ring delay-2000"></div>
                {/* Ring 3 */}
                <div className="absolute w-[550px] h-[550px] border-[6px] border-circle opacity-50 top-[30%] left-[25%] rounded-full animate-ring delay-4000"></div>
                {/* Ring 4 */}
                <div className="absolute w-[700px] h-[700px] border-[6px] border-circle opacity-50 top-[45%] left-[50%] rounded-full animate-ring delay-1000"></div>
                {/* Ring 5 */}
                <div className="absolute w-[650px] h-[650px] border-[6px] border-circle opacity-50 top-[60%] left-[75%] rounded-full animate-ring delay-3000"></div>
                {/* Ring 6 */}
                <div className="absolute w-[650px] h-[650px] border-[6px] border-circle opacity-50 top-[42%] left-[4%] rounded-full animate-ring delay-3000"></div>
                {/* Ring 7 */}
                <div className="absolute w-[800px] h-[800px] border-[6px] border-circle opacity-50 top-[70%] left-[20%] rounded-full animate-ring delay-5000"></div>
                {/* Ring 8 */}
                <div className="absolute w-[750px] h-[750px] border-[6px] border-circle opacity-50 top-[25%] left-[80%] rounded-full animate-ring delay-6000"></div>
                {/* Ring 9 */}
                <div className="absolute w-[500px] h-[500px] border-[6px] border-circle opacity-50 top-[85%] left-[40%] rounded-full animate-ring delay-7000"></div>
                
            </div>
        </div>
    );
};

export default Auto;
