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
        <div className='flex justify-center my-10 drop-shadow-2xl'>
            <div className='table rounded-lg  w-11/12 md:w-9/12 lg:w-8/12 text-center bg-white'>
                <div className='table-header-group'>
                    <div className='table-row font-bold bg-black h-10 text-white'>
                        <div className='table-cell md:w-3/12 align-middle rounded-tl-lg'>Nombre</div>
                        <div className='table-cell md:w-2/12 align-middle'>Costo</div>
                        <div className='table-cell md:w-2/12 align-middle'>Unidad</div>
                        <div className='table-cell md:w-2/12 align-middle'>Almacén</div>
                        <div className='table-cell md:w-2/12 lg:w-2/12 align-middle rounded-tr-lg'>
                            <div className="group/add flex justify-center">
                                <button href="" className="flex items-center justify-center bg-white group-hover/add:bg-cyan-600 rounded-xl w-11/12 md:w-10/12 lg:w-7/12">
                                    <p className="text-sm text-black group-hover/add:text-white">Añadir</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 fill-black group-hover/edit:fill-white">
                                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table-row-group">
                    <MateriaPrima nombre='Daniel Martínez Díaz' costo='100' unidad='pza' almacen='1' />
                    <MateriaPrima nombre='Daniel' costo='100' unidad='pza' almacen='1' />
                    <MateriaPrima nombre='Daniel' costo='100' unidad='pza' almacen='1' />
                    <MateriaPrima nombre='Daniel' costo='100' unidad='pza' almacen='1' />
                    <MateriaPrima nombre='Daniel' costo='100' unidad='pza' almacen='1' />
                    <MateriaPrima nombre='Daniel' costo='100' unidad='pza' almacen='1' />
                    <MateriaPrima nombre='Daniel' costo='100' unidad='pza' almacen='1' />
                    <MateriaPrima nombre='Daniel' costo='100' unidad='pza' almacen='1' />
                    <MateriaPrima nombre='Daniel' costo='100' unidad='pza' almacen='1' />
                </div>
            </div>
        </div>
    </section>
);