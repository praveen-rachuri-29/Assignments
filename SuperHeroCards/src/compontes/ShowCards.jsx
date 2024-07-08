import React from 'react';
import './ShowCards.css';

const ShowCards = ({ heroes = [] }) => {
    return (
        <div className='hero-cards-container'>
            {heroes.map((hero, index) => (
                <div key={index} className='hero-card'>
                    <h2>{hero.name}</h2>
                    <p>Height: {hero.height}</p>
                    <p>Weight: {hero.weight}</p>
                    <p>Power Level: {hero.powerlevel}</p>
                </div>
            ))}
        </div>
    );
};

export default ShowCards;
