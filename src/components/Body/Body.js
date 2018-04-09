import React from 'react';
import './Body.css';

const Body = (props) => {
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

export default Body;