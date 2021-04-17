import React from 'react';
import CheckIcon from '@material-ui/icons/Check';

const Checkbox = ({ check }) => {
    return (
        <button
            type='button'
            className={`checkbox ${check ? 'disabled' : ''}`}
            disable={check}
        >
            {check && <CheckIcon />}
        </button>
    );
};
export default Checkbox;
