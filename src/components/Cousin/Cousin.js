import React, { useContext } from 'react';
import Friend from '../Friend/Friend';
import { RingContext } from '../Grandpa/Grandpa';

const Cousin = ({house}) => {
    const bank = useContext(RingContext)
    return (
        <div>
            <h4>Cousin</h4>
            <p><small>House: {house} </small></p>
            <p><small>Gift: {bank}</small></p>
            <section>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default Cousin;