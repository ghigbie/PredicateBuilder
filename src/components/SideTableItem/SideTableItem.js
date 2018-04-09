import React from 'react';
import './SideTableItem.css';

const SideTableItem = (props) => {
    return(
        <div>
            <p>{props.title}</p>
            <span>{`${props.count}k`}</span>
            <span>{`$${props.amount}`}</span>
            <br />
        </div>
    );
};

export default SideTableItem;