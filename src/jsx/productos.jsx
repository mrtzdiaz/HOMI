import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Navbar from '../components/navbar/navbar';
import TablaProductos from '../components/costeoProductos/tablaProductos';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <section>
    <Navbar/>
    <div className='mt-10 min-h-18 text-center text-5xl text-redH [text-shadow:_2.5px_2.5px_black]'>
            <strong>Costeo Productos</strong>
    </div>
    <TablaProductos/>
  </section>
);