import React, { useState } from 'react';

function computeInitialCounter() 
{
    return Math.trunc(Math.random() * 20);
}

const App = () => {
    // const [counter, setCounter] = useState(0);
    // const [counter, setCounter] = useState(computeInitialCounter());
    const [counter, setCounter] = useState(() => {
        return computeInitialCounter();
    });

    const [state, setState] = useState({
        title: 'Счетчик',
        date: Date.now()
    })

    function increment()
    {
        //setCounter(counter + 1);
        setCounter((prevCounter) => {
            return prevCounter + 1;
        });
    }

    function decrement()
    {
        setCounter(counter - 1);
    }

    function updateTitle() 
    {
        setState(prev =>{
            return {
                ...prev,
                title: 'Новое название',
            }
        });
    }
    
    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment}>Добавить</button>
            <button onClick={decrement}>Убрать</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
            <button onClick={updateTitle}>Изменить название</button>
        </div>
    );
}

export default App;