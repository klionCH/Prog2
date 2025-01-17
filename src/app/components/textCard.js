export default function TextCard({ textLeft, textMiddle, textRight}) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-card text-balance gap-8 p-8 h-fit">
            <div className="grid grid-cols-1  w-full h-full">
                <div className=" flex text-justify items-center">{textLeft}</div>

            </div>

            <div className="grid grid-cols-1 w-full h-full">

                <div className="m-auto w-full text-justify">{textMiddle}</div>
            </div>


            <div className="grid grid-cols-1 w-full h-full">
                <div className="m-auto w-full text-justify">{textRight}</div>
            </div>
        </div>
    );
}
