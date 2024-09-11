import { Outlet, Link } from "react-router-dom";
import "./style/style.css";
import Nav from "../components/nav.jsx";
import mitsubishi from "../img/mit-edited.jpg";

const Auto = () => {
    return (
        <div className="bg-background h-screen relative overflow-hidden"> {/* Ensure overflow-hidden is applied */}
            <Nav />

            {/* Circle spread across the screen */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-circle opacity-25 bg-circle" />
                <div className="absolute top-1/4 left-1/2 w-48 h-48 rounded-full border-2 border-circle opacity-25 bg-circle" />
                <div className="absolute top-2/3 left-1/4 w-64 h-64 rounded-full border-2 border-circle opacity-25 bg-circle" />
                <div className="absolute top-1/2 left-3/4 w-40 h-40 rounded-full border-2 border-circle opacity-25 bg-circle" />
                {/* Add more circles with different positions and sizes as needed */}
            </div>

            <div className="text-text-white h-fit mt-56 relative z-0"> {/* Ensure relative is set for correct positioning */}
                <img className="absolute left-2/4 w-1/4 z-0 " src={mitsubishi} alt="Mitsubishi" />
                <div className="relative w-1/3 left-1/4 pt-40">
                    <div className="text-text-orange h-fit font-rokkitt text-2xl tracking-widest leading-loose mb-8">
                        Der Mitsubishi Lancer Evo 8 ist ein leistungsstarker, allradgetriebener Sportwagen, der durch seine Turboaufladung und aggressive Optik bekannt wurde. Er gilt als Ikone des Rallyesports und bietet beeindruckende Fahreigenschaften auf der Straße und abseits davon.
                    </div>
                    <div className="text-text-pink h-fit font-rokkitt text-2xl tracking-widest leading-loose">
                        Canon eos r
                        <br />
                        F1/150
                        <br />
                        Mitsubishi Lancer Evo 8
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auto;
