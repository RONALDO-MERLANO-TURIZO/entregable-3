import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import MortyRick from './MortyRick';

const ResidentInfo = () => {

    const [ morty, setMorty ] = useState({})
    const [ typeName, setTypeName ] = useState("")

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 126 ) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`) 
            .then( res => setMorty( res.data ))
    }, [])

    console.log(morty)

    const searchId = () => {

        axios.get(`https://rickandmortyapi.com/api/location/${typeName}`) 
            .then( res => setMorty( res.data ))
    }

    return (
        <div>
            <div>
                <div className='container-rick'></div>
                <input type="text" value={typeName} placeholder='Search of 1 - 126' onChange={e => setTypeName( e.target.value )}/>
                <button onClick={searchId}>Search</button>
                <div className='container-info'>
                <p><b>Name:</b> {morty.name}</p>
                <p><b>Type:</b> {morty.type}</p>
                <p><b>Dimension:</b> {morty.dimension}</p>
                <p><b>Population:</b> {morty.residents?.length}</p>
                </div>
            </div>
            <br />
            <div className='container-cards'>
                {
                    morty.residents?.map((mor) => 
                        <MortyRick url={mor} key={mor}/>
                    )
                }
            </div>
        </div>
    );
};

export default ResidentInfo;