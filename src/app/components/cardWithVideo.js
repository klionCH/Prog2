import Image from 'next/image';

export default function CardWithVideo({ textLeft, textMiddle, textRight, imgLeft, imgMiddle, imgRight }) {
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

    const renderVideo = (src, alt) => {
        return (
            <video controls className="w-full h-full object-contain">
                <source src={src} type="video/mp4" />
                <source src={src.replace('.mp4', '.webm')} type="video/webm" />
                Dein Browser unterstützt das Video-Tag nicht.
            </video>
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
                <div className="relative row-span-3 w-full h-full">
                    {renderVideo(trimmedImgRight, "Right Media")}
                </div>
            </div>
        </div>
    );
}
