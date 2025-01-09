import Image from 'next/image';

export default function CardWithVideo({ textLeft, textMiddle, textRight, imgLeft, imgMiddle, imgRight }) {
    const trimmedImgLeft = imgLeft.trim();
    const trimmedImgMiddle = imgMiddle.trim();
    const trimmedImgRight = imgRight.trim();


    const renderMedia = (src, alt, width, height) => {
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

    };

    const renderVideo = (src, alt, width, height) => {
        return (
            <video controls width={width} height={height}>
                <source src={src} type="video/mp4"/>
                <source src={src.replace('.mp4', '.webm')} type="video/webm"/>
                Dein Browser unterstützt das Video-Tag nicht.
            </video>
        );
    }

return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-card h-full text-balance gap-8 p-8 h-[80vh]">
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
                <div className="m-auto row-span-3">
                    {renderVideo(trimmedImgRight, "Right Media", 500, 300)}
                </div>
            </div>
        </div>

    );
}
