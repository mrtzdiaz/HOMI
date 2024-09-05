import { useState } from "react"

const Egreso = function ({ fecha, concepto, cantidad, pagado }) {

    const [statePagado, setStatePagado] = useState(pagado);


    return (
        <div className="table-row grid grid-cols-9 rounded-t-lg h-10 text-center font-bold">
            <div className="table-cell col-span-2 py-1 px-2">{fecha}</div>
            <div className="table-cell col-span-4 py-1 px-2">{concepto}</div>
            <div className="table-cell col-span-2 py-1 px-2">${cantidad}</div>
            <div className="table-cell col-span-1 py-1 px-2"><input onClick={() => setStatePagado(!statePagado)} checked={statePagado? true:false} name="pagado" type="checkbox" className="size-4 appearance-none bg-gray-100 accent-yellowH checked:appearance-auto" /></div>
        </div>
    )
}

export default Egreso