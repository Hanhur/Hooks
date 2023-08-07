import React, { useEffect, useMemo, useState } from 'react';

function complexCompute(num) 
{
    let i = 0;
    while(i < 1000000000)
    {
        i++;
        return num * 2;
    }
}

const App = () => {
    const [number, setNumber] = useState(42);
    const [colored, setColored] = useState(false);

    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black',
    }), [colored]);

    const computed = useMemo(() => {
        return complexCompute(number);
    }, [number]);

    useEffect(() => {

    }, [styles]);

    return (
        <div>
            <h1 style={styles}>Вычисляемое свойтсво: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
            <button onClick={() => setColored(prev => !prev)}>Изменить</button>
        </div>
    );
}

export default App;