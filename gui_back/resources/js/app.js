import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ModList from './components/ModList';

const root = document.getElementById('app');

if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <ModList />
        </React.StrictMode>
    );
}
