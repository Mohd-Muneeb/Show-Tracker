import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from './terminal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NavBar />
        <div className="break"></div>
        <App />
    </React.StrictMode>
);
