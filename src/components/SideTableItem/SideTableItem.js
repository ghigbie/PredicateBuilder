import React from 'react';
import './SideTableItem.css';

const SideTableItem = (props) => {
    return(
        <table>
            <p>{props.title}</p>
            <tr>
                <td>{`${props.count}k`}</td>
                <td>{`$${props.amount}`}</td>
            </tr>
        </table>
    );
};

export default SideTableItem;