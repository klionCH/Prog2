import React from 'react';
import '../pages/style/NeonTextBanner.css';

const TextBanner = ({ texts = ["Text 1", "Text 2", "Text 3"] }) => {
    return (
        <div className="banner-container">
            <div className="banner-content">
                {texts.map((text, index) => (
                    <span key={index} className="banner-text">{text}</span>
                ))}
                {/* Texte ein zweites Mal für endlose Schleife */}
                {texts.map((text, index) => (
                    <span key={`duplicate-${index}`} className="banner-text">{text}</span>
                ))}
            </div>
        </div>
    );
};

export default TextBanner;
