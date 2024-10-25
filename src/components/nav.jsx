import { useEffect, useState } from "react";
import { useLocation, Outlet, Link } from "react-router-dom";
// Reusable SVG Component
const PolygonSVG = ({ translateX, translateY }) => (
    <svg height="1000" width="1000" className="absolute opacity-25 pointer-events-none">
        <polygon
            points="120,10 40,220 180,78 20,98 120,200"
            fill="white"
            transform={`translate(${translateX}, ${translateY}) scale(3) translate(-60, -100)`}
        />
    </svg>
);
const Nav = () => {
    const circle = "w-72 aspect-square rounded-full border-2 border-circle flex items-center justify-center";
    const location = useLocation(); // Get the current route
    const currentPath = location.pathname;
    const [showAutoSVG, setShowAutoSVG] = useState(false);
    const [showAngelnSVG, setShowAngelnSVG] = useState(false);
    useEffect(() => {
        if (currentPath === "/auto") {
            setShowAutoSVG(true);
            setShowAngelnSVG(false);
        } else if (currentPath === "/angeln") {
            setShowAutoSVG(false);
            setShowAngelnSVG(true);
        } else {
            setShowAutoSVG(false);
            setShowAngelnSVG(false);
        }
    }, [currentPath]);
    return (
        <>
            <nav className="bg-background h-screen overflow-hidden">
                <div className="h-20 border-b-2 border-circle z-0 mb-4"></div>
                <div className="relative grid grid-cols-3 gap-4">

                    {/* Left Circle - Fotografie */}
                    <div className="absolute left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                        <div className={circle}>
                            <Link to="/auto" className="text-text-white text-xl font-bold">Fotografie</Link>
                        </div>
                        {showAutoSVG && <PolygonSVG translateX={410} translateY={450} />}
                    </div>
                    {/* Center Circle - Meine Hobbys */}
                    <div className="absolute top-1/3 left-2/4 transform -translate-x-1/2 -translate-y-2/3">
                        <div className={circle}>
                            <p className="text-text-white font-bold text-3xl">Meine Hobbys</p>
                        </div>
                    </div>
                    {/* Right Circle - Angeln */}
                    <div className="absolute top-1/3 left-3/4 transform -translate-x-1/2 -translate-y-1/3 flex items-center justify-center">
                        <div className={circle}>
                            <Link to="/angeln" className="text-text-white text-2xl font-bold">Angeln</Link>
                        </div>
                        {showAngelnSVG && <PolygonSVG translateX={410} translateY={450} />}
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};
export default Nav;