import Image from 'next/image';

export default function Card({ textLeft, textMiddle, textRight, imgLeft, imgMiddle, imgRight }) {
    return (
        <div className="grid grid-cols-3 text-global">
            <div className="">
                <Image src={imgLeft} alt="Left Image" width={500} height={200} />
                <div className="text-lg">{textLeft}</div>
            </div>
            <div>
                <Image src={imgMiddle} alt="Middle Image" width={300} height={200} />
                <div className="text-lg">{textMiddle}</div>
            </div>
            <div>
                <Image src={imgRight} alt="Right Image" width={300} height={200} />
                <div className="text-lg">{textRight}</div>
            </div>
        </div>
    );
}
