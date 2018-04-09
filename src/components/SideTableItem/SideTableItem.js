import React from 'react';
import './SideTableItem.css';

const SideTableItem = (props) => {
    return(
        <div>
            <p className="title">{props.title}</p>
            <span className="count">{`${props.count}k`}</span>
            <span className="amount">{`$${props.amount}`}</span>
            <hr />
        </div>
    );
};

export default SideTableItem;