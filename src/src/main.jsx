import React from 'react';
import ReactDOM from 'react-dom/client';
//import { TuMama } from './tuMama';
// import { PrimerTarea } from './PrimerTarea';
import { CounterApp } from './contenidoApp'


import './styles.css'
import { PrimerTarea } from './PrimerTarea';



ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <PrimerTarea />
    </React.StrictMode>
);