import Nav from "../components/nav.jsx";
import mitsubishi from "../img/mit-edited.jpg";

const Auto = () => {
    const circle = "w-72 aspect-square rounded-full border-2 border-circle flex items-center justify-center opacity-25 bg-circle";

    return (
        <div className="bg-background h-screen relative overflow-hidden">
            <Nav />
            <div className="absolute inset-0 pointer-events-none">
                <div className={`${circle} absolute top-10 left-10`} />
                <div className={`${circle} absolute top-1/4 left-1/4`} />
                <div className={`${circle} absolute top-2/3 left-1/2`} />
                <div className={`${circle} absolute top-1/2 left-3/4`} />
            </div>

            <div className="text-text-white h-fit mt-56 relative z-0">
                <img className="absolute left-2/4 w-1/4 z-0" src={mitsubishi} alt="Mitsubishi" />
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
