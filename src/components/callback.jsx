import React, { useCallback, useState } from 'react';
import ItemsList from './ItemsList';

const App = () => {
    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(1);

    const styles = {
        color: colored ? 'darkred' : 'black',
    }

    const generateItemsFormAPI = useCallback((indexNumber) => {
        return new Array(count).fill('').map((_, i) => `Элемент ${i + indexNumber}`);
    }, [count]);

    // const generateItemsFormAPI = () => {
    //     return new Array(count).fill('').map((_, i) => `Элемент ${i + 1}`);
    // }
    
    return (
        <div>
            <h1 style={styles}>Вычисляемое свойтсво: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Добавить</button>
            <button onClick={() => setColored(prev => !prev)}>Изменить</button>
            <ItemsList getItems={generateItemsFormAPI} />
        </div>
    );
}

export default App;