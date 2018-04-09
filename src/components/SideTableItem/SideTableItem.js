import React from 'react';
import './SideTableItem.css';

const SideTableItem = (props) => {
    return(
        <div>
            <p>{props.title}</p>
            <tr>
                <td>{props.count}</td>
                <td>{props.amount}</td>
            </tr>
        </div>
    );
};

export default SideTableItem;