import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MortyRick = ({ url }) => {

    const [ cardsRick, setCardsRick ] = useState({})

    useEffect(() => {
        axios.get(url)
            .then( (res) => setCardsRick( res.data ))
    }, [])

    console.log(cardsRick)


    return (
        <div className='container-location'>
            <>
                <h3>
                    {cardsRick.name}
                </h3>
                <div>
                    <small><b className={`status-${cardsRick.status}`}><i className='bx bxs-circle bx-ms'></i> {cardsRick.status}</b></small>
                    <img src={cardsRick.image} alt="Loading..." />
                </div>
                <div className='info-card'>
                    <p><span>Specie:</span> {cardsRick.species}</p>
                    <p><span>Gender:</span> {cardsRick.gender}</p>
                    <p><span>Origin:</span> {cardsRick.origin?.name}</p>
                    <p><span>Episode:</span> {cardsRick.episode?.length}</p>
                </div>
            </>
        </div>
    );
};

export default MortyRick;