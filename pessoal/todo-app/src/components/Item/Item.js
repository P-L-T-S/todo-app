import React, { useState } from 'react';
import Checkbox from '../partials/Checkbox';

const Item = ({ value }) => {
    const [isClicked, setIsClicked] = useState(false);

    function toggleClick() {
        setIsClicked(!isClicked);
    }

    return (
        <div
            id='item'
            className={isClicked ? 'disabled' : ''}
            onClick={toggleClick}
        >
            <Checkbox check={isClicked} />
            <p>{value}</p>
        </div>
    );
};
export default Item;
