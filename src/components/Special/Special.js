import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h3>Special</h3>
            <p>Gift: {ring}</p>
            <p><small>Gift: {house}</small></p>
            <button onClick={() => setHouse (house + 1)}>Increase</button>
        </div>
    );
};

export default Special;