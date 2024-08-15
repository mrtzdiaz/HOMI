import { useState } from 'react';

const AddProducto = function () {

    const costosBasicos = JSON.parse(localStorage.getItem("productosBasicos"));
    let materiasPrimas = [];
    let costosMateriasPrimas = []
    costosBasicos.map(({ nombre, costo }) => {
        materiasPrimas.push(nombre);
        costosMateriasPrimas.push(costo);
    })

    const [costoTotal, setCostoTotal] = useState(0);
    const calcularCostoTotal = function () {
        const materiasPrimas = document.getElementsByClassName('materiaPrima');
        let suma = 0;
        for (let index = 0; index < costosMateriasPrimas.length; index++) {
            suma += materiasPrimas.item(index).value * costosMateriasPrimas[index];
        }
        setCostoTotal(parseFloat(suma).toFixed(2));
    }

    const [utilidadesNetas, setUtilidadesNetas] = useState([0,0,0]);
    const [gastosFijos, setGastosFijos] = useState([0,0,0]);
    const calculoGanancia = function(){
        const precioVenta = document.getElementsByClassName('precio-a-vender');
        const porcentajeGF = document.getElementById('gastos-fijos');
        let tempUtilidades = [0, 0, 0];
        let tempGastosFijos = [0, 0, 0];
        for (let index = 0; index < 3; index++) {
            tempUtilidades[index] = precioVenta.item(index).value * 100 / (100 + Number(porcentajeGF.value));
            tempGastosFijos[index] = precioVenta.item(index).value - tempUtilidades[index];
        }
        setUtilidadesNetas(tempUtilidades);
        setGastosFijos(tempGastosFijos);
    }

    return (
        // Form para agregar un nuevo producto
        <div className="absolute flex flex-col overflow-hidden w-11/12 md:w-3/6 pb-2 border-2 border-blackH rounded-lg bg-white text-center font-bold">
            <h1 className="bg-blackH text-white">AÑADIR PRODUCTO</h1>

            <label htmlFor="" className="m-2">Nombre</label>
            <input type="text" className="mx-2 border border-blackH rounded-md text-center" placeholder="Original 300gr" />

            <label htmlFor="" className="m-2">Costo del Producto</label>
            <div className="table overflow-hidden mx-2 border border-blackH rounded-md">
                <div className="table-header-group">
                    <div className="table-row grid grid-cols-10 bg-blackH text-white">
                        <div className="table-cell col-span-5 border-r border-blackH"> Producto </div>
                        <div className="table-cell col-span-3 border-blackH"> Cantidad </div>
                        <div className="table-cell col-span-2 border-blackH"> Unidad </div>
                    </div>
                </div>
                <div>
                    {
                        costosBasicos.map(({ nombre, unidad }) => {
                            return (
                                <div className="table-row grid grid-cols-10 even:bg-gray-200 odd:bg-gray-100">
                                    <div className="table-cell col-span-5 border-r border-blackH">{nombre}</div>
                                    <input type="number" className='materiaPrima table-cell col-span-3 border-r outline-none bg-transparent border-blackH text-center' placeholder="0" onChange={calcularCostoTotal} />
                                    <div className="table-cell place-content-center col-span-2 border-r border-blackH">{unidad}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='table-row bg-blackH text-white'>Total: ${costoTotal}</div>
            </div>

            <label htmlFor="" className="m-2">Precio a vender</label>
            <div className="table  overflow-hidden mx-2 border border-blackH rounded-md">
                <div className="table-header-group">
                    <div className="table-row grid grid-cols-3">
                        <div className="table-cell border-r border-blackH bg-redH text-white"> Tercero </div>
                        <div className="table-cell border-r border-blackH bg-yellowH text-white"> Tienda </div>
                        <div className="table-cell bg-blueH text-white"> Final </div>
                    </div>
                    <div className="table-row grid grid-cols-3">
                        <input type="Number" className="precio-a-vender border-r border-blackH outline-none text-center" placeholder="100.00" onChange={calculoGanancia}/>
                        <input type="Number" className="precio-a-vender border-r border-blackH outline-none text-center" placeholder="100.00" onChange={calculoGanancia}/>
                        <input type="Number" className="precio-a-vender outline-none text-center" placeholder="100.00" onChange={calculoGanancia}/>
                    </div>
                    <div className="grid grid-cols-3">
                        <label htmlFor="" className="col-span-2 border-blackH bg-blackH text-white">% Para gastos fijos</label>
                        <input type="Number" className="col-span-1 outline-none border-t border-blackH text-center" placeholder="30" id='gastos-fijos' onChange={calculoGanancia}/>
                        <label htmlFor="" className="col-span-2 border-blackH bg-blackH text-white">En almacen</label>
                        <input type="Number" className="almacen col-span-1 outline-none border-t border-blackH text-center" placeholder="80" />
                    </div>
                </div>
            </div>

            <label htmlFor="" className="m-2">Utilidades y Gastos Fijos</label>
            <div className="table  overflow-hidden mx-2 border border-blackH rounded-md">
                <div className="table-header-group">
                    <div className="table-row grid grid-cols-4">
                        <div className="table-cell border-r border-b border-blackH bg-blackH"></div>
                        <div className="table-cell border-r border-b border-blackH bg-redH text-white"> Tercero </div>
                        <div className="table-cell border-r border-b border-blackH bg-yellowH text-white"> Tienda </div>
                        <div className="table-cell bg-blueH text-white"> Final </div>
                    </div>
                    <div className="table-row grid grid-cols-4">
                        <div className="table-cell border-r border-blackH bg-blackH text-white"> Utilidad Neta </div>
                        {
                            utilidadesNetas.map((utilidad) => {
                                return(<div className="utilidad-neta table-cell border-b border-blackH">${parseFloat(utilidad).toFixed(2)}</div>)
                            })
                        }
                    </div>
                    <div className="table-row grid grid-cols-4">
                        <div className="table-cell border-blackH bg-blackH text-white"> Gastos Fijos </div>
                        {
                            gastosFijos.map((gastoFijo) => {
                                return(<div className="table-cell border-blackH">${parseFloat(gastoFijo).toFixed(2)}</div>)
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddProducto;