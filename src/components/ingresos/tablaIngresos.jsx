import { useEffect, useState } from "react";
import Ingreso from "./ingreso";

const TablaIngresos = function () {
    const productosJSON = localStorage.getItem('productos');
    const productos = productosJSON ? JSON.parse(productosJSON) : [];

    const ingresosJSON = localStorage.getItem('ingresos');
    const ingresos = ingresosJSON ? JSON.parse(ingresosJSON) : [];

    const [showAddForm, setShowAddForm] = useState(false);
    const isShowed = showAddForm ? 'sm:max-h-40 md:max-h-14' : 'max-h-0 overflow-hidden';
    const controlForm = showAddForm ? 'translate-x-1/3 sm:translate-x-3/4 md:translate-x-full' : '';

    const [cantidad, setCantidad] = useState('0');
    const [nombreProducto, setNombreProducto] = useState(productos[0].nombre);
    const [tipoVenta, setTipoVenta] = useState(2);
    const [costo, setCosto] = useState(0);

    useEffect(() => {
        const productoEncontrado = productos.find((producto) => producto.nombre === nombreProducto);
        if (productoEncontrado) {
            setCosto(productoEncontrado.precios[tipoVenta]);
        }
    }, [nombreProducto, tipoVenta]);

    const saveData = function (e) {
        e.preventDefault();
        const formSubmit = e.target;
        const ingreso = {
            fecha: formSubmit.fecha.value,
            canal: formSubmit.canal.value,
            producto: formSubmit.producto.value,
            cantidad: formSubmit.cantidad.value,
            tipoVenta: formSubmit.tipoVenta.value,
            precio: formSubmit.precio.value,
            total: parseFloat(cantidad * costo).toFixed(2)
        }
        ingresos.push(ingreso);
        localStorage.setItem('ingresos', JSON.stringify(ingresos));
        formSubmit.fecha.value = '';
        formSubmit.canal.value = '';
        formSubmit.producto.value = productos[0].nombre;
        formSubmit.cantidad.value = '';
        formSubmit.tipoVenta.value = 2;
        setCosto(productos[0].precios[2])
        setShowAddForm(false);
    }



    return (
        <section className="flex justify-center mx-10 md:mx-24 my-10">
            <div className="table w-full">
                <div className="table-header-group">
                    <div className="table-row grid grid-cols-12 h-10 place-content-center rounded-t-lg bg-blackH text-center text-white font-bold">
                        <div className="table-cell block md:hidden col-span-12">Registros</div>
                        <div className="table-cell hidden md:block col-span-2">Fecha</div>
                        <div className="table-cell hidden md:block col-span-2">Canal</div>
                        <div className="table-cell hidden md:block col-span-2">Producto</div>
                        <div className="table-cell hidden md:block col-span-1">Cantidad</div>
                        <div className="table-cell hidden md:block col-span-2">Tipo</div>
                        <div className="table-cell hidden md:block col-span-1">Precio</div>
                        <div className="table-cell hidden md:block col-span-2">Total</div>
                    </div>
                    {
                        ingresos.map((ingreso) => {
                            return (
                                <Ingreso fecha={ingreso.fecha} canal={ingreso.canal} producto={ingreso.producto} cantidad={ingreso.cantidad} tipoVenta={ingreso.tipoVenta} precio={ingreso.precio} total={ingreso.total} />
                            )
                        })
                    }
                    <form onSubmit={saveData} className={`transition-max-height duration-300 delay-100 ${isShowed} table-row grid grid-cols-2 sm:grid-cols-6 md:grid-cols-12 place-content-center bg-blackH text-center font-bold`}>
                        <div className="table-cell col-span-2">
                            <div className="block md:hidden text-white">Fecha</div>
                            <input name="fecha" type="date" className="p-1 my-1 md:my-2 w-3/4 rounded-lg text-center" />
                        </div>
                        <div className="table-cell col-span-2">
                            <div className="block md:hidden text-white">Canal</div>
                            <input name="canal" type="text" className="p-1 my-2 w-3/4 rounded-lg text-center" placeholder="Nombre" />
                        </div>

                        <div className="table-cell col-span-2 place-content-center">
                            <div className="block md:hidden text-white">Producto</div>
                            <select name="producto" id="" className="p-1 my-2 w-3/4 rounded-lg text-center" onChange={(e) => { setNombreProducto(e.target.value) }}>
                                {
                                    productos.map(({ nombre }) => {
                                        return (
                                            <option value={nombre}>{nombre}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className="table-cell col-span-2 sm:col-span-1">
                            <div className="block md:hidden text-white">Cantidad</div>
                            <input name="cantidad" type="Number" className="p-1 my-2 w-3/4 rounded-lg text-center" placeholder="0" onChange={(e) => setCantidad(e.target.value)} />
                        </div>
                        <div className="table-cell col-span-2">
                            <div className="block md:hidden text-white">Tipo</div>
                            <select name="tipoVenta" id="" className="p-1 my-2 w-3/4 rounded-lg text-center" onChange={(e) => { setTipoVenta(e.target.value) }}>
                                <option value="2">Final</option>
                                <option value="1">Tienda</option>
                                <option value="0">Tercero</option>
                            </select></div>
                        <div className="table-cell col-span-2 sm:col-span-1">
                            <div className="block md:hidden text-white">Costo</div>
                            <input name="precio" type="Number" className="p-1 my-2 w-3/4 rounded-lg text-center" placeholder="0" value={costo || ''} onChange={(e) => setCosto(e.target.value)} />
                        </div>

                        <div className="relative table-cell grid col-span-2 place-content-center text-white">
                            <div className="block md:hidden">Total</div>
                            ${parseFloat(cantidad * costo).toFixed(2)}
                            <div className={`${controlForm} absolute transition-transform duration-300 delay-300 right-0 flex flex-col justify-center items-center w-1/4 h-full`}>
                                <button type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-greenH">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className={"table-row grid place-content-center rounded-b-lg h-8 bg-blackH"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-greenH" onClick={() => { setShowAddForm(!showAddForm) }}>
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TablaIngresos;