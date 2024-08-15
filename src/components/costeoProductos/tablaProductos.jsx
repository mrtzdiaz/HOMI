import Productos from './productos';
import AddProducto from './addProducto';

const TablaProductos = function () {

    return (
        <div className='flex flex-col items-center my-10'>
            <button className='mb-5 p-1 rounded-lg bg-blackH text-white font-bold hover:bg-redH'>Añadir Producto</button>
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
                <Productos nombre="Original" costo={29.15} distribuidor={65} tienda={80} ventaFinal={99} almacen={80} />
                <Productos nombre="Original" costo={29.15} distribuidor={65} tienda={80} ventaFinal={99} almacen={80} />
                <Productos nombre="Original" costo={29.15} distribuidor={65} tienda={80} ventaFinal={99} almacen={80} />
                <Productos nombre="Original" costo={29.15} distribuidor={65} tienda={80} ventaFinal={99} almacen={80} />
                <Productos nombre="Original" costo={29.15} distribuidor={65} tienda={80} ventaFinal={99} almacen={80} />
            </div>
            <AddProducto/>
        </div>
    )
}

export default TablaProductos;