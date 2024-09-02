import { useState } from 'react';
import { useEffect } from 'react';

const AddProducto = function ({ state, form, receta }) {

    const [preciosVenta, setPreciosVenta] = useState([0, 0, 0]); //State of array of user's prices
    const [porcentajeFijos, setPorcentajeFijos] = useState(0); //State of pecentage of money allocated
    const [costo, setCosto] = useState(0);
    const [listaIngredientes, setListaIngredientes] = useState()

    //State for handle the function of AddProducto window
    const [step, setStep] = useState(false);
    const showStep = step ? '-translate-x-full' : '';
    const handleStep = (event) => {
        event.preventDefault();
        setStep(!step);
    }

    //Get Object of Ingredients from storage
    const costosBasicos = localStorage.getItem("productosBasicos");
    let ingredientes = costosBasicos ? JSON.parse(costosBasicos) : [];

    //Get Object of Productos from storage
    const productosJSON = localStorage.getItem("productos");
    let productos = productosJSON ? JSON.parse(productosJSON) : [];

    //Get Object of Productos from storage
    const recetasJSON = localStorage.getItem("recetas");
    let recetas = recetasJSON ? JSON.parse(recetasJSON) : [];


    //Function to get the values with the user's prices
    const calculoGanancia = function (event) {
        const input = event.target;
        const newPreciosVenta = [...preciosVenta];

        if (input.name === "precioTercero") {
            newPreciosVenta[0] = parseFloat(input.value) || 0;
        } else if (input.name === "precioTienda") {
            newPreciosVenta[1] = parseFloat(input.value) || 0;
        } else if (input.name === "precioFinal") {
            newPreciosVenta[2] = parseFloat(input.value) || 0;
        }
        setPreciosVenta(newPreciosVenta);
    }

    //Calcular costo total y modificar listaIngredientes
    const costoTotal = function (event) {
        const nombre = event.target.name;
        const cantidad = Number(event.target.value);
        const tmpLista = listaIngredientes
        tmpLista.forEach((ingrediente) => {
            if (ingrediente.nombre === nombre) {
                ingrediente.cantidad = cantidad;
            }
        })
        const suma = tmpLista.reduce((acc, ingrediente) => {
            return acc + ingrediente.cantidad * ingrediente.costo;
        }, 0);

        setCosto(parseFloat(suma).toFixed(2));
        setListaIngredientes(tmpLista);
    }

    //Function to save product name, prices, percent and stock
    const saveProducto = function (event) {
        event.preventDefault();
        const input = event.target;
        const nombre = input.nombre.value

        productos.push({
            nombre: nombre,
            precios: preciosVenta,
            gastosFijos: porcentajeFijos,
            almacen: input.almacen.value
        })

        listaIngredientes.map((ingrediente) => {
            ingrediente.producto = nombre;
        })

        localStorage.setItem("recetas", JSON.stringify(recetas.concat(listaIngredientes)));
        localStorage.setItem("productos", JSON.stringify(productos));
        state(false);
    }

    useEffect(() => {
        const tmpLista = ingredientes.map(({ nombre, costo }) => {
            const nombreIngrediente = nombre.split(" ").join('');
            return { nombre: nombreIngrediente, cantidad: 0, costo: Number(costo) }
        });
        setListaIngredientes(tmpLista)
    }, []);


    return (
        // Form para agregar un nuevo producto
        <div className='fixed flex justify-center w-full h-screen bg-gray-600/50'>
            <form onSubmit={saveProducto} className='relative flex flex-row w-11/12 md:w-2/6 h-96 my-10 border-2 border-blackH rounded-lg overflow-y-scroll no-scrollbar bg-white text-center font-bold'>
                <h1 className="absolute w-full bg-blackH text-white">AÑADIR PRODUCTO</h1>
                <section className={`transition-transform duration-700 ${showStep} flex flex-col min-w-fit mt-6`}>

                    <label htmlFor="" className="my-2">Nombre del producto</label>
                    <input name='nombre' type="text" className="mx-2 border border-blackH rounded-md text-center" placeholder="Original 300 gr" autoComplete='off' defaultValue={form.nombre} />

                    <label htmlFor="" className="mt-2">Precio a vender</label>
                    <div className="table  overflow-hidden mx-2 border border-blackH rounded-md">
                        <div className="table-header-group">
                            <div className="table-row grid grid-cols-3">
                                <div className="table-cell border-r border-blackH bg-redH text-white"> Tercero </div>
                                <div className="table-cell border-r border-blackH bg-yellowH text-white"> Tienda </div>
                                <div className="table-cell bg-blueH text-white"> Final </div>
                            </div>
                            <div className="table-row grid grid-cols-3" onChange={calculoGanancia} >
                                <input defaultValue={form.precios[0]} name='precioTercero' type="Number" className="precio-a-vender border-r border-blackH outline-none text-center" placeholder="100.00" />
                                <input defaultValue={form.precios[1]} name='precioTienda' type="Number" className="precio-a-vender border-r border-blackH outline-none text-center" placeholder="100.00" />
                                <input defaultValue={form.precios[2]} name='precioFinal' type="Number" className="precio-a-vender outline-none text-center" placeholder="100.00" />
                            </div>
                            <div className="grid grid-cols-3">
                                <label className="col-span-2 border-blackH bg-blackH text-white">% Para gastos fijos</label>
                                <input defaultValue={form.gastosFijos} name='porcentajeFijos' id='porcentajeFijos' type="Number" className="col-span-1 outline-none border-t border-blackH text-center" placeholder="30" onChange={(e) => { setPorcentajeFijos(Number(e.target.value)); }} />
                                <label className="col-span-2 border-blackH bg-blackH text-white">En almacen</label>
                                <input defaultValue={form.almacen} name='almacen' type="Number" className="almacen col-span-1 outline-none border-t border-blackH text-center" placeholder="80" />
                            </div>
                        </div>
                    </div>

                    <label htmlFor="" className="mt-2">Utilidades y Gastos Fijos</label>
                    <div className="table  overflow-hidden mx-2 border border-blackH rounded-md">
                        <div className="table-header-group">
                            <div className="table-row grid grid-cols-4">
                                <div className="table-cell border-r border-b border-blackH bg-blackH"></div>
                                <div className="table-cell border-r border-b border-blackH bg-redH text-white"> Tercero </div>
                                <div className="table-cell border-r border-b border-blackH bg-yellowH text-white"> Tienda </div>
                                <div className="table-cell bg-blueH text-white"> Final </div>
                            </div>
                            <div className="table-row grid grid-cols-4">
                                <div className="table-cell border-r border-blackH bg-blackH text-white"> Utilidad</div>
                                {
                                    preciosVenta.map((utilidad, index) => {
                                        return (<div key={index} className="table-cell border-b border-blackH">${parseFloat(utilidad * 100 / (100 + porcentajeFijos)).toFixed(2)}</div>)
                                    })
                                }
                            </div>
                            <div className="table-row grid grid-cols-4">
                                <div className="table-cell border-blackH bg-blackH text-white"> Fijos </div>
                                {
                                    preciosVenta.map((gastoFijo, index) => {
                                        return (<div key={index} className="table-cell border-blackH">${parseFloat(gastoFijo * Number(porcentajeFijos) / (100 + porcentajeFijos)).toFixed(2)}</div>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='my-2'>
                        <button className='mx-2 p-1 border-2 border-blueH rounded-lg hover:bg-blueH hover:text-white' onClick={handleStep}>Siguiente</button>
                        <button className='mx-2 p-1 border-2 border-redH rounded-lg hover:bg-redH hover:text-white' onClick={() => state(false)}>Cancelar</button>
                    </div>
                </section>

                <section className={`transition-transform duration-700 ${showStep} flex flex-col min-w-fit mt-6`}>

                    <div className="table overflow-hidden m-2 border border-blackH rounded-md">
                        <div className="table-header-group">
                            <div className="table-row grid grid-cols-10 bg-blackH text-white">
                                <div className="table-cell col-span-5 border-r border-blackH"> Producto </div>
                                <div className="table-cell col-span-3 border-blackH"> Cantidad </div>
                                <div className="table-cell col-span-2 border-blackH"> U </div>
                            </div>
                        </div>
                        <div>
                            {
                                ingredientes.map(({ nombre, unidad }) => {
                                    const nombreIngrediente = nombre.split(" ").join('');
                                    const cantidadIngrediente = receta.filter((producto) => producto.nombre === nombreIngrediente)[0];
                                    return (
                                        <div className="table-row grid grid-cols-10 even:bg-gray-200 odd:bg-gray-100" key={nombre}>
                                            <div className="table-cell col-span-5 border-r border-blackH">{nombre}</div>
                                            <input defaultValue={cantidadIngrediente ? cantidadIngrediente.cantidad : ''} name={nombreIngrediente} type="number" className='materiaPrima table-cell col-span-3 border-r outline-none bg-transparent border-blackH text-center' placeholder="0" onChange={(e) => costoTotal(e)} />
                                            <div className="table-cell place-content-center col-span-2 border-r border-blackH">{unidad}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='table-row bg-blackH text-white'>Total: ${costo}</div>
                    </div>
                    <div className='my-2'>
                        <button type='submit' className='mx-2 p-1 border-2 border-blueH rounded-lg hover:bg-blueH hover:text-white'>Agregar</button>
                        <button className='mx-2 p-1 border-2 border-redH rounded-lg hover:bg-redH hover:text-white' onClick={() => state(false)}>Cancelar</button>
                    </div>
                </section>
            </form>
        </div>
    )
}

export default AddProducto;