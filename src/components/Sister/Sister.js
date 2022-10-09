import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = ({house}) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Sister</h3>
            <p><small>House: {house}</small></p>
            <p><small>Money: {money}</small></p>
            <button onClick={() => setMoney(money + 100)}>Add 100</button>
        </div>
    );
};

export default Sister;