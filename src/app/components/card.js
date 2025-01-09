import Image from 'next/image';

export default function Card({ textLeft, textMiddle, textRight, imgLeft, imgMiddle, imgRight }) {
    const trimmedImgLeft = imgLeft.trim();
    const trimmedImgMiddle = imgMiddle.trim();
    const trimmedImgRight = imgRight.trim();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-card h-full text-balance gap-8 p-8">
            {/* Left Section */}
            <div className="grid grid-cols-1 grid-rows-3 w-full h-full">
                <div className="text-center flex items-center">{textLeft}</div>
                <div className="m-auto row-span-2">
                    <Image
                        src={trimmedImgLeft} // Stelle sicher, dass imgLeft eine gültige URL ist
                        alt="Left Image"
                        width={500}
                        height={200}
                    />
                </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 grid-rows-3 w-full h-full">
                <div className="m-auto row-span-2">
                    <Image
                        src={trimmedImgMiddle} // Gültige URL für imgMiddle sicherstellen
                        alt="Middle Image"
                        width={500}
                        height={200}
                    />
                </div>
                <div className="m-auto w-full text-center">{textMiddle}</div>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-1 grid-rows-3 w-full h-full">
                <div className="m-auto w-full text-center">{textRight}</div>
                <div className="m-auto row-span-2">
                    <Image
                        src={trimmedImgRight} // Gültige URL für imgRight sicherstellen
                        alt="Right Image"
                        width={500}
                        height={200}
                    />
                </div>
            </div>
        </div>
    );
}
