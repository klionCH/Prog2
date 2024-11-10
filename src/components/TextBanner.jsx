import React from 'react';
import '../style/NeonTextBanner.css'; // Ensure this file has the right styles

const NeonBanner = ({ items , height, width}) => {
    return (
        <div className="p-4 rounded-lg w-4/5 sm:w-3/4 md:w-1/2 lg:w-1/3 h-2" style={{height: height}}>
            <div id="container">
                <div className="scroll" id="scroll-one">
                    {items.map((item, index) => (
                        <div className="item" key={`item-one-${index}`}>
                            {item}
                        </div>
                    ))}
                </div>
                <div className="scroll" id="scroll-two">
                    {items.map((item, index) => (
                        <div className="item" key={`item-two-${index}`}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
            );
            };

            export default NeonBanner;
