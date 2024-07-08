import React, { useState } from 'react';
import './AddSuperHero.css';
import ShowCards from './ShowCards';


const initialValue = {
    name: "",
    height: "",
    weight: "",
    powerlevel: ""
};

const AddSuperHero = () => {
    const [addhero, setAddhero] = useState(initialValue);
    const [heroes, setHeroes] = useState([]);
    const [showCards, setShowCards] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setAddhero(prevState => ({
            ...prevState, [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setHeroes(prevHeroes => [...prevHeroes, addhero]);
        setAddhero(initialValue);
    };

    const handleShowCards = () => {
        setShowCards(!showCards);
    };

    return (
        <div className='input'>
            <h1 className='titile'>Add Super Hero</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-text'>
                    <input type="text" name='name' value={addhero.name} onChange={handleChange} placeholder='Add Super Hero name' required /><br /><br />
                    <input type="text" name='height' value={addhero.height} onChange={handleChange} placeholder='Add Height' required /><br /><br />
                    <input type="text" name='weight' value={addhero.weight} onChange={handleChange} placeholder='Add Weight' required /><br /><br />
                    <input type="text" name='powerlevel' value={addhero.powerlevel} onChange={handleChange} placeholder='Add PowerLevel' required /><br /><br />
                </div>
                <br />
                <button type='submit' className='button'>Submit</button>
            </form>
            <br />

            <button onClick={handleShowCards} className='button'>
                {showCards ? 'Hide Cards' : 'Show Cards'}
            </button>
            <br />
            <br />

            {showCards && <ShowCards heroes={heroes} />}
        </div>
    );
};

export default AddSuperHero;
