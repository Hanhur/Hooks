import React from 'react';
import MainList from './MainList';
import Alert from './Alert/Alert';
import AlertProvider from './Alert/AlertContext';

const App = () => {
    return (
        <AlertProvider>
            <div className="container">
                <Alert />
                <MainList toggle={() => {}} />
            </div>
        </AlertProvider>
    );
}

export default App;