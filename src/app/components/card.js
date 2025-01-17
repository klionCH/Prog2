import Image from 'next/image';

export default function Card({ textLeft, textMiddle, textRight, imgLeft, imgMiddle, imgRight, w3 }) {
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
                className="max-w-full m-auto"
                priority
            />
        );

    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-card gap-8 p-8 h-fit">
            {/* Left Section */}
            <div className="w-full h-full grid gap-8 content-between">
                <div className="text-justify flex items-center pb-8">{textLeft}</div>
                <div className="m-auto">
                    {renderMedia(trimmedImgLeft, "Left Media", 500, 500)}
                </div>
            </div>

            {/* Middle Section */}
            <div className="w-full h-full grid content-between">
                <div className="m-auto">
                    {renderMedia(trimmedImgMiddle, "Middle Media", 500, 200)}
                </div>
                <div className="m-auto w-full text-justify">{textMiddle}</div>
            </div>

            {/* Right Section */}
            <div className="w-full h-full grid content-between">
                <div className="m-auto w-full text-justify pb-8">{textRight}</div>
                <div className="m-auto">
                    {renderMedia(trimmedImgRight, "Right Media", w3, 300)}
                </div>
            </div>
        </div>
    );
}
