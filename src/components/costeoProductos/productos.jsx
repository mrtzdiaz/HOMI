import { useEffect, useState } from "react"

const Productos = function ({ nombre, distribuidor, tienda, ventaFinal, almacen, fijos, editFunction}) {
    //Función para colocar formato de dinero
    const money = (numero) => { return Number.parseFloat(numero).toFixed(2) }

    //Función para colocar filas en la tabla de información
    const InfoRow = function ({ primera, segunda, tercera, children }) {
        return (
            <div className="table-row grid grid-cols-10">
                <div className={`table-cell col-span-4 ${children}`}>{primera}</div>
                <div className="table-cell col-span-3">{segunda}</div>
                <div className="table-cell col-span-3">{tercera}</div>
            </div>
        )
    }

    //UseState para contraer y desplegar información del producto
    const [showInfo, changeShowInfo] = useState(false);
    const showInfoClass = showInfo ? 'max-h-72 sm:max-h-40' : 'max-h-0';
    const handleShowInfo = function () {
        changeShowInfo(!showInfo);
    }
    
    //Get Object of Productos from storage
    const recetasJSON = localStorage.getItem("recetas");
    let recetas = recetasJSON ? JSON.parse(recetasJSON) : [];
    
    //Use State y Effect para calcular el costo total
    const [costo, setCosto] = useState(0);
    useEffect(() => {
        let acc = 0;
        recetas.map(({producto, costo, cantidad}) => {
            if(nombre === producto){
                acc += costo * cantidad;
            }
        });
        setCosto(acc);
    }, []);

    return (
        <div className="odd:bg-gray-100 even:bg-gray-50 hover:bg-sky-100">
            <div className='table-row group/row grid grid-cols-7 h-10' onClick={handleShowInfo}>
                <div className='table-cell col-span-8 sm:col-span-2 place-content-center'>{nombre}</div>
                <div className='product_cell_responsive'>${money(costo)}</div>
                <div className='product_cell_responsive'>${money(distribuidor)}</div>
                <div className='product_cell_responsive'>${money(tienda)}</div>
                <div className='product_cell_responsive'>${money(ventaFinal)}</div>
                <div className='product_cell_responsive'>{almacen} pzas</div>
            </div>

            <div className={`transition-max-height duration-300 overflow-hidden  ${showInfoClass}`}>
                <div className='table-row group/row sm:hidden grid grid-cols-2 h-12'>
                    <div className='info_product_cell text-blackH font-bold'>Costo<p>${money(costo)}</p></div>
                    <div className='info_product_cell text-blackH font-bold'>Almacen<p>{almacen} pzas</p></div>
                </div>
                <div className='table-row group/row sm:hidden grid grid-cols-3 h-12'>
                    <div className='info_product_cell text-redH font-bold'>Tercero<p className="text-blackH">${money(distribuidor)}</p></div>
                    <div className='info_product_cell text-yellowH font-bold'>Tienda<p className="text-blackH">${money(tienda)}</p></div>
                    <div className='info_product_cell text-blueH font-bold'>Final<p className="text-blackH">${money(ventaFinal)}</p></div>
                </div>
                <div className='table-row group/row grid grid-cols-1 h-28 font-bold'>
                    <div className="table m-2 border border-black rounded">
                        <div className="table-header-group bg-blackH text-white">
                            <InfoRow primera={`Indirecto ${fijos}%`} segunda="Ganancia" tercera="Fijos" />
                        </div>
                        <InfoRow primera="Tercero" segunda={`$${money(distribuidor * 100 / (100 + fijos))}`} tercera={`$${money(distribuidor * fijos / (100 + fijos))}`}>text-redH</InfoRow>
                        <InfoRow primera="Tienda" segunda={`$${money(tienda * 100 / (100 + fijos))}`} tercera={`$${money(tienda * fijos / (100 + fijos))}`}>text-yellowH</InfoRow>
                        <InfoRow primera="Final" segunda={`$${money(ventaFinal * 100 / (100 + fijos))}`} tercera={`$${money(ventaFinal * fijos / (100 + fijos))}`}>text-blueH</InfoRow>
                    </div>
                </div>
                <button className="my-1 p-1 rounded-lg bg-blackH text-white font-bold" name={nombre} onClick={(e) => {editFunction(e)}}>
                    Editar
                </button>
            </div>
        </div>
    );
}

export default Productos;