import React from 'react';
import { useAlert } from './AlertContext';

const Alert = () => {
    const alert = useAlert();

    if(!alert.visible)
    {
        return null;
    }

    return (
        <div onClick={alert.hide}>
            <p>{alert.text}</p>
        </div>
    );
}

export default Alert;
