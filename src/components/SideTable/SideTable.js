import React from 'react';
import './SideTable.css';

import SideTableItem from './SideTableItem/SideTableItem'

const SideTable = () => {
    
    const sideTableObjects = [ 
        {
            title: 'Conversions',
            count: 1.5,
            amount: 6177,
        },
        {
            title: 'Abandoned Carts',
            count: 0,
            amount: 0,
        }
    ];
    
    
    const addSideTabelItems = sideTableObjects.map( (item) => <SideTableItem title={item.title} count={item.count} amount={item.amount} />);
    
    return(
        <div className="side-table">
            {addSideTableItems}
        </div>
    );
};

export default SideTable;