import { useEffect, useState, useRef } from "react";
import { useLocation, Outlet, Link } from "react-router-dom";

// Reusable SVG Component
const PolygonSVG = ({ translateX, translateY }) => (
    <svg height="1000" width="1000" className="absolute opacity-20 pointer-events-none">
        <polygon
            points="120,10 40,220 180,78 20,98 120,200"
            fill="white"
            transform={`translate(${translateX}, ${translateY}) scale(3) translate(-60, -100)`}
        />
    </svg>
);

const Nav = () => {
    const circleClass = "w-96 aspect-square rounded-full border-4 border-circle flex items-center justify-center";
    const location = useLocation();
    const currentPath = location.pathname;

    const [showAutoSVG, setShowAutoSVG] = useState(false);
    const [showAngelnSVG, setShowAngelnSVG] = useState(false);

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [circleTransforms, setCircleTransforms] = useState({
        leftCircle: { x: 0, y: 0 },
        rightCircle: { x: 0, y: 0 }, // Removed centerCircle since no effect is applied
    });

    // Refs for circles
    const leftCircleRef = useRef(null);
    const centerCircleRef = useRef(null);
    const rightCircleRef = useRef(null);

    // Track cursor position
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Update SVG visibility based on route
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

    // Magnet effect calculation
    useEffect(() => {
        const calculateMagnetEffect = (elementRef) => {
            if (!elementRef.current) return { x: 0, y: 0 };

            const rect = elementRef.current.getBoundingClientRect(); // Get exact position
            const elementX = rect.left + rect.width / 2;
            const elementY = rect.top + rect.height / 2;

            const dx = cursorPosition.x - elementX;
            const dy = cursorPosition.y - elementY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            const maxEffectDistance = 400; // Maximum distance to feel the effect
            const pullStrength = Math.max(0, maxEffectDistance - distance) / maxEffectDistance;

            return {
                x: dx * 0.2 * pullStrength,
                y: dy * 0.2 * pullStrength,
            };
        };

        setCircleTransforms({
            leftCircle: calculateMagnetEffect(leftCircleRef),
            rightCircle: calculateMagnetEffect(rightCircleRef), // Skip centerCircle
        });
    }, [cursorPosition]);

    return (
        <>
            <nav className="w-screen absolute h-1/2 overflow-hidden">
                <div className="h-20 border-b-2 border-circle z-0 mb-4"></div>
                <div className="relative grid grid-cols-3 gap-4">

                    {/* Left Circle - Fotografie */}
                    <div
                        ref={leftCircleRef}
                        className="absolute left-1/4 transform -translate-x-2/3 -translate-y-1/3 flex items-center justify-center"
                        style={{
                            transform: `translate(${circleTransforms.leftCircle.x}px, ${circleTransforms.leftCircle.y}px) translate(-66%, -33%)`,
                        }}
                    >

                        <div className={circleClass}>
                            <Link to="/auto" className="text-text-white text-3xl font-bold">Fotografie</Link>
                        </div>
                        {showAutoSVG && <PolygonSVG translateX={410} translateY={450} />}
                    </div>

                    {/* Center Circle - Meine Hobbys */}
                    <div
                        ref={centerCircleRef}
                        className="absolute top-1/3 left-2/4 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className={circleClass}>
                            <p className="text-text-white font-bold text-5xl">Meine Hobbys</p>
                        </div>
                    </div>

                    {/* Right Circle - Angeln */}
                    <div
                        ref={rightCircleRef}
                        className="absolute top-1/3 left-3/4 transform -translate-x-1/2 -translate-y-1/3 flex items-center justify-center"
                        style={{
                            transform: `translate(${circleTransforms.rightCircle.x}px, ${circleTransforms.rightCircle.y}px) translate(-50%, -33%)`,
                        }}
                    >

                        <div className={circleClass}>
                            <Link to="/angeln" className="text-text-white text-3xl font-bold">Angeln</Link>
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
