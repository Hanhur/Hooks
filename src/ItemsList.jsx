import React, { useEffect, useState } from 'react';

const ItemsList = ({getItems}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const newItems = getItems(0);
        setItems(newItems);
    }, [getItems]);

    return (
        <div>
            <ul>
                {items.map(i => <li key={i}>{i}</li>)}
            </ul>
        </div>
    );
}

export default ItemsList;