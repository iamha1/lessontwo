import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');

//3. tell react to take control of that element
const root = ReactDom.createRoot(el);

//5. show component on screen
root.render(<App />)
