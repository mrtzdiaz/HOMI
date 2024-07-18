const MateriaPrima = function ({ nombre, costo, unidad, almacen }) {
    return (
        <div className='group/row table-row h-10 odd:bg-gray-100 even:bg-gray-50 hover:bg-sky-100'>
            <div className='table-cell align-middle'>{nombre}</div>
            <div className='table-cell align-middle'>${Number.parseFloat(costo).toFixed(2)}</div>
            <div className='table-cell align-middle'>{unidad}</div>
            <div className='table-cell align-middle'>{almacen}</div>
            <div className='table-cell align-middle'>
                <div className="flex justify-center invisible group-hover/row:visible">
                <a href="" className="group/edit flex items-center justify-center hover:bg-black rounded-xl w-11/12 md:w-10/12 lg:w-7/12">
                <p className="text-sm text-black group-hover/edit:text-white">Editar</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 fill-black group-hover/edit:fill-white">
                        <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                        <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                    </svg>
                </a>
                </div>
            </div>
        </div>
    );
}

export default MateriaPrima;