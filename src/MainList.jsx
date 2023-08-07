import React from 'react';
import { useAlert } from './Alert/AlertContext';

const MainList = () => {
    const {show} = useAlert();

    return (
        <div>
            <h1>Привет в примере с Context</h1>
            <button onClick={() => show('Это текст из MainList.jsx')}>Показать alert</button>
        </div>
    );
}

export default MainList;
