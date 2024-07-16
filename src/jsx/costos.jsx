import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Navbar from '../components/navbar/navbar';
import MateriaPrima from '../components/materiaPrima/materiaPrima';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <section>
        <Navbar />
        <div className='grid place-content-center min-h-18 bg-black text-3xl text-white [text-shadow:_2.5px_2.5px_teal]'>
            <strong>Costos Básicos</strong>
        </div>
        <div className='grid place-content-center mx-20 mt-5'>
            <table className='w-full table-fixed border rounded-2xl border-slate-200 box-shadow text-center'>
                <thead>
                    <tr className='min-h-80 bg-blue-200'>
                        <th>Nombre</th>
                        <th>Costo</th>
                        <th>Unidad</th>
                        <th>Almacen</th>
                        <th>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-slate-300">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </th>
                    </tr>
                </thead>
                    <tbody>
                    <MateriaPrima nombre='Daniel' costo='100' unidad='pza' almacen='1' />
                    <MateriaPrima nombre='Daniel' costo='100' unidad='pza' almacen='1' />
                    <MateriaPrima nombre='Daniel' costo='100' unidad='pza' almacen='1' />
                    <MateriaPrima nombre='Daniel' costo='100' unidad='pza' almacen='1' />
                    </tbody>
            </table>
        </div>
    </section>
);