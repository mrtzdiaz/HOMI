import Productos from './productos';
import AddProducto from './addProducto';
import { useState } from 'react';



const TablaProductos = function () {

    const [showAddProducto, setShowAddProducto] = useState(false);
    const productosJSON = localStorage.getItem("productos");
    const productos = productosJSON ? JSON.parse(productosJSON) : [];

    return (
        <div className='flex flex-col items-center'>
            <div className='mt-5 min-h-18 text-center text-5xl text-redH [text-shadow:_2.5px_2.5px_black]'>
                <strong>Costeo Productos</strong>
            </div>
            <button className='my-5 p-1 rounded-lg bg-blackH text-white font-bold hover:bg-redH' onClick={() => { setShowAddProducto(true) }}>Añadir Producto</button>
            <div className='table w-11/12 md:w-9/12 text-center bg-white shadow-2xl'>
                <div className='table-header-group'>
                    <div className='table-row grid grid-cols-7 h-10 font-bold text-white bg-black rounded-t-lg'>
                        <div className='table-cell sm:hidden place-content-center col-span-8'>Productos</div>
                        <div className='product_cell col-span-2'>Nombre</div>
                        <div className='product_cell col-span-1'>Costo</div>
                        <div className='product_cell col-span-1 bg-redH'>Tercero</div>
                        <div className='product_cell col-span-1 bg-yellowH'>Tienda</div>
                        <div className='product_cell col-span-1 bg-blueH'>Final</div>
                        <div className='product_cell col-span-1'>Almacén</div>
                    </div>
                </div>
                {
                    productos.map(({nombre, precios, gastosFijos, almacen}) => {
                        return(
                            <Productos nombre={nombre} distribuidor={precios[0]} tienda={precios[1]} ventaFinal={precios[2]} almacen={almacen} fijos={gastosFijos} />
                        )
                    })
                }
            </div>
            {showAddProducto && <AddProducto state={setShowAddProducto} />}
        </div>
    )
}

export default TablaProductos;