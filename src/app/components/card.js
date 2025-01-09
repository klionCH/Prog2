import Image from 'next/image';

export default function Card({ textLeft, textMiddle, textRight, imgLeft, imgMiddle, imgRight, w3 }) {
    const trimmedImgLeft = imgLeft.trim();
    const trimmedImgMiddle = imgMiddle.trim();
    const trimmedImgRight = imgRight.trim();

    // Funktion, um zu prüfen, ob es sich um ein Video handelt
    const isVideo = (url) => {
        return url && (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.avi')); // Beispiel für Video-Formate
    };

    const renderMedia = (src, alt, width, height) => {
        if (isVideo(src)) {
            return (
                <video controls width={width} height={height}>
                    <source src={src} type="video/mp4" />
                    <source src={src.replace('.mp4', '.webm')} type="video/webm" />
                    Dein Browser unterstützt das Video-Tag nicht.
                </video>
            );
        } else {
            return (
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="max-w-full"
                    priority
                />
            );
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-card  text-balance gap-8 p-8 h-[80vh]">
            {/* Left Section */}
            <div className="grid grid-cols-1 grid-rows-3 w-full h-full">
                <div className="text-center flex items-center">{textLeft}</div>
                <div className="m-auto row-span-2">
                    {renderMedia(trimmedImgLeft, "Left Media", 500, 500)}
                </div>
            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 grid-rows-3 w-full h-full">
                <div className="m-auto row-span-2">
                    {renderMedia(trimmedImgMiddle, "Middle Media", 500, 200)}
                </div>
                <div className="m-auto w-full text-center">{textMiddle}</div>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-1 grid-rows-3 w-full h-full">
                <div className="m-auto w-full text-center">{textRight}</div>
                <div className="m-auto row-span-2">
                    {renderMedia(trimmedImgRight, "Right Media", w3, 300)}
                </div>
            </div>
        </div>
    );
}
