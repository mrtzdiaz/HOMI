import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Navbar from '../components/navbar/navbar';
import TablaProductos from '../components/costeoProductos/tablaProductos';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <section>
    <Navbar/>
    <TablaProductos/>
  </section>
);