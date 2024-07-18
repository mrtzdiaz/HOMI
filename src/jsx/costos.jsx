import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Navbar from '../components/navbar/navbar';
import TablaMateriaPrima from '../components/materiaPrima/tablaMateriaPrima';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <section>
        <Navbar />
        <div className='text-center min-h-18 bg-black text-3xl text-white [text-shadow:_2.5px_2.5px_teal]'>
            <strong>Costos Básicos</strong>
        </div>
        <TablaMateriaPrima/>
    </section>
);