import React, { useState, useEffect, useRef } from 'react';

const App = () => {
    // const [renderCount, setRenderCount] = useState(1);
    const [value, setValue] = useState('initial');
    const renderCount = useRef(1);
    const inputRef = useRef(null);
    const prevValue = useRef('');

    useEffect(() => {
        renderCount.current++;
    });

    useEffect(() => {
        prevValue.current = value;
    }, [value]);

    const focus = () => inputRef.current.focus();
    
    return (
        <div>
           <h1>Количиство рендеров: {renderCount.current}</h1>
           <h2>Прошлое состояние: {prevValue.current}</h2>
           <input ref={inputRef} type='text' onChange={(event) => setValue(event.target.value)} value={value}/>
           <button onClick={focus}>Фокус</button>
        </div>
    );
}

export default App;