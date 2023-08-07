import React, { useState, useEffect } from 'react';

const App = () => {
    const [type, setType] = useState('users');
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    });

    const mouseMoveHandle = (event) => {
        setPos({
            x: event.clientX,
            y: event.clientY
        });
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type]);

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandle);
        return () => {window.removeEventListener('mousemove', mouseMoveHandle)}
    }, []);

    return (
        <div>
           <h1>Ресурс: {type}</h1>
           <button onClick={() => setType('users')}>Пользователь</button>
           <button onClick={() => setType('todos')}>Todos</button>
           <button onClick={() => setType('posts')}>Посты</button>
           <pre>{JSON.stringify(data, null, 2)}</pre>
           <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
}

export default App;