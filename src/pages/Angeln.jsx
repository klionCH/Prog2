import "../style/style.css";
import Nav from "../components/nav.jsx";
import NeonBanner from "../components/TextBanner";

const Angeln = () => {
    const items = [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6",
        "Item 7",
        "Item 8",
        "Item 9",
        "Item 10"
    ];

    return (
        <div className="bg-background h-screen relative">
            <Nav/>
                <div className="absolute inset-0 pointer-events-none w-screen">
                    <NeonBanner items={items} height={"80px"}/>
                </div>


            <div className="text-text-white h-fit mt-56 z-0 flex justify-center">

            </div>
        </div>
    );
};

export default Angeln;
