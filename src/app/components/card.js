import Image from 'next/image';

export default function Card({ textLeft, textMiddle, textRight, imgLeft, imgMiddle, imgRight, w3 }) {
    const trimmedImgLeft = imgLeft.trim();
    const trimmedImgMiddle = imgMiddle.trim();
    const trimmedImgRight = imgRight.trim();

    const renderMedia = (src, alt) => {
            return (
                <Image
                    src={src}
                    alt={alt}
                    layout="fill"
                    className="object-contain"
                    priority
                />
            );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-card text-balance gap-8 p-8 h-[80vh]">
            {/* Left Section */}
            <div className="grid grid-cols-1 grid-rows-3 w-full h-full relative">
                <div className="m-auto w-full text-center">{textLeft}</div>
                <div className="relative row-span-2 w-full h-full">
                    {renderMedia(trimmedImgLeft, "Left Media")}
                </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 grid-rows-3 w-full h-full relative">
                <div className="relative row-span-2 w-full h-full">
                    {renderMedia(trimmedImgMiddle, "Middle Media")}
                </div>
                <div className="m-auto w-full text-center">{textMiddle}</div>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-1 grid-rows-3 w-full h-full relative">
                <div className="m-auto w-full text-center">{textRight}</div>
                <div className="relative row-span-2 w-full h-full">
                    {renderMedia(trimmedImgRight, "Right Media")}
                </div>
            </div>
        </div>
    );
}
