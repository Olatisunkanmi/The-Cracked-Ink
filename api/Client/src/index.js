import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './Component/context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <ContextProvider>
          <App />
        </ContextProvider>
  
 
);


