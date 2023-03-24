import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./home";
import './scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
