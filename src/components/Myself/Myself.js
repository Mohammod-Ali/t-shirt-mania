import React from 'react';
import Special from '../Special/Special';

const Myself = ({house, ring}) => {
    return (
        <div>
            <h2>Myself</h2>
            <p><small>House: {house} </small></p>
            <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;