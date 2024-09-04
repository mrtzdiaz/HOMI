import { useState } from "react";

const Ingreso = function ({ fecha, canal, producto, cantidad, tipoVenta, precio, total }) {
    const tiposVenta = { 0: 'Tercero', 1: 'Tienda', 2: 'Final' }

    const [showInfo, setShowInfo] = useState(false);
    const showInfoClass = showInfo ? 'max-h-52' : 'max-h-0 md:max-h-14'

    return (
        <div onClick={() => { setShowInfo(!showInfo) }} className={`table-row odd:bg-gray-100 even:bg-gray-200`}>
            <div className="grid grid-cols-4 md:hidden place-content-center overflow-hidden text-center">
                <div className="table-cell col-span-2">
                    <div className="block md:hidden font-bold">Fecha</div>
                    {fecha}</div>
                <div className="table-cell col-span-2">
                    <div className="block md:hidden font-bold">Canal</div>
                    {canal}</div>
            </div>
            <div className={`${showInfoClass} transition-max-height grid grid-cols-4 md:grid-cols-12 place-content-center overflow-hidden text-center md:font-bold`}>
                <div className="table-cell col-span-2 hidden md:block">
                    <div className="block md:hidden font-bold">Fecha</div>
                    {fecha}</div>
                <div className="table-cell col-span-2 hidden md:block">
                    <div className="block md:hidden font-bold">Canal</div>
                    {canal}</div>
                <div className="table-cell col-span-2">
                    <div className="block md:hidden font-bold">Producto</div>
                    {producto}</div>
                <div className="table-cell col-span-2 md:col-span-1">
                    <div className="block md:hidden font-bold">Cantidad</div>
                    {cantidad}</div>
                <div className="table-cell col-span-2">
                    <div className="block md:hidden font-bold">Tipo</div>
                    {tiposVenta[tipoVenta]}</div>
                <div className="table-cell col-span-2 md:col-span-1">
                    <div className="block md:hidden font-bold">Costo</div>
                    ${precio}</div>
                <div className="table-cell col-span-4 md:col-span-2">
                    <div className="block md:hidden font-bold">Total</div>
                    ${total}</div>
            </div>
        </div>
    )
}

export default Ingreso;