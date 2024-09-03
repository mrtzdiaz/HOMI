const Ingreso = function ({fecha, canal, producto, cantidad, tipoVenta, precio, total}) {
    const tiposVenta = {0: 'Tercero', 1: 'Tienda', 2: 'Final'}
    return (
        <div className="table-row odd:bg-gray-100 even:bg-gray-200 grid grid-cols-12 h-10 place-content-center text-center font-bold">
            <div className="table-cell col-span-2">{fecha}</div>
            <div className="table-cell col-span-2">{canal}</div>
            <div className="table-cell col-span-2">{producto}</div>
            <div className="table-cell col-span-1">{cantidad}</div>
            <div className="table-cell col-span-2">{tiposVenta[tipoVenta]}</div>
            <div className="table-cell col-span-1">{precio}</div>
            <div className="table-cell col-span-2">{total}</div>
        </div>
    )
}

export default Ingreso;