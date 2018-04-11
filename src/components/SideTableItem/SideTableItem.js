import React from 'react';
import './SideTableItem.css';

const SideTableItem = (props) => {
    return(
        <div className="side-table-item">
            <p className="title">{props.title}</p>
            <span className="count">{`${props.count}k`}</span>
            <span className="amount">{`$${props.amount}`}</span>
        </div>
    );
};

export default SideTableItem;