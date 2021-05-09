import React, { useState } from 'react';
import Checkbox from '../partials/Checkbox';

const Item = ({ item, onclick, todos }) => {

    const isClicked = item.checked

    function toggleClick() {
        item.checked = !item.checked;
        onclick([...todos])
    }

    return (
        <div
            id='item'
            className={isClicked ? 'disabled' : ''}
            onClick={toggleClick}
        >
            <Checkbox check={item.checked} />
            <p>{item.value}</p>
        </div>
    );
};
export default Item;
