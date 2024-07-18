import MateriaPrima from './materiaPrima';
import { useState } from 'react';

const TablaMateriaPrima = function () {

    const [stateModalForm, changeState] = useState(false);

    const visibility = stateModalForm ? "visible" : "invisible"

    const handleModalForm = function () {
        changeState(!stateModalForm)
    }

    return (
        <div className='flex justify-center my-20 drop-shadow-2xl'>
            <div className='table rounded-lg  w-11/12 md:w-9/12 lg:w-8/12 text-center bg-white'>
                <div className='table-header-group'>
                    <div className='table-row font-bold bg-black h-10 text-white'>
                        <div className='table-cell md:w-3/12 align-middle rounded-tl-lg'>Nombre</div>
                        <div className='table-cell md:w-2/12 align-middle'>Costo</div>
                        <div className='table-cell md:w-2/12 align-middle'>Unidad</div>
                        <div className='table-cell md:w-2/12 align-middle'>Almacén</div>
                        <div className='table-cell md:w-2/12 lg:w-2/12 align-middle rounded-tr-lg'>
                            <div className="group/add flex justify-center">
                                <button onClick={handleModalForm} className="flex items-center justify-center bg-white group-hover/add:bg-cyan-600 rounded-xl w-11/12 md:w-10/12 lg:w-7/12">
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
            <div className={`${visibility} flex flex-col w-80 mt-20 border-2 border-black bg-gray-100 rounded-lg absolute z-20`}>
                <div className='relative w-full bg-black p-2 text-center'>
                    <h1 className='text-white font-bold'>Agregar Producto</h1>
                    <button onClick={handleModalForm} className='absolute top-0 right-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 fill-red-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    </button>
                </div>
                <div className='flex items-center justify-between my-2'>
                    <label className='ml-5 mr-2 font-bold' htmlFor="">Nombre:</label>
                    <input className='mr-5 rounded-lg p-2' type="text" placeholder="Tarros 300gr" />
                </div>
                <div className='flex items-center justify-between mb-2'>
                    <label className='ml-5 mr-2 font-bold' htmlFor="">Costo:</label>
                    <input className='mr-5 rounded-lg p-2' type="number" placeholder='100.00' />
                </div>
                <div className='flex items-center justify-between mb-2'>
                    <label className='ml-5 mr-2 font-bold' htmlFor="">Unidad:</label>
                    <input className='mr-5 rounded-lg p-2' type="number" placeholder='100.00' />
                </div>
                <div className='flex items-center justify-between mb-2'>
                    <label className='ml-5 mr-2 font-bold' htmlFor="">Almacen:</label>
                    <input className='mr-5 rounded-lg p-2' type="number" placeholder='100.00' />
                </div>
            </div>
            <div className={`${visibility} bg-gray-100 absolute inset-0  opacity-50 z-10`}></div>
        </div>
    )
}

export default TablaMateriaPrima;