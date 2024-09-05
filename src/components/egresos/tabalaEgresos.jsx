import { useState } from "react";
import Egreso from "./egreso";

const TabalaEgresos = function () {

    const [showInfo, setShowInfo] = useState(false);
    const showInfoClass = showInfo ? 'max-h-10' : 'max-h-0 overflow-hidden';
    const showConfirm = showInfo ? 'translate-x-full' : '';

    const egresosJSON = localStorage.getItem('egresos');
    const egresos = egresosJSON? JSON.parse(egresosJSON):[];

    const saveEgreso = function(e){
        e.preventDefault();
        const formSubmit = e.target;
        const egreso = {
            fecha: formSubmit.fecha.value,
            concepto: formSubmit.concepto.value,
            cantidad: formSubmit.cantidad.value,
            pagado: formSubmit.pagado.checked,
        }
        egresos.push(egreso);
        localStorage.setItem('egresos',JSON.stringify(egresos));
        setShowInfo(false)

        formSubmit.fecha.value = '';
        formSubmit.concepto.value = '';
        formSubmit.cantidad.value = '';
        formSubmit.pagado.checked = false;
    }

    return (
        <section className="flex justify-center m-10">
            <div className="table w-3/5">
                <div className="table-header-group">
                    <div className="table-row grid grid-cols-9 rounded-t-lg h-10 bg-blackH text-white text-center font-bold">
                        <div className="table-cell col-span-2 py-1 px-2">Fecha</div>
                        <div className="table-cell col-span-4 py-1 px-2">Concepto</div>
                        <div className="table-cell col-span-2 py-1 px-2">Total</div>
                        <div className="table-cell col-span-1 py-1 px-2">Pagado</div>
                    </div>
                </div>
                {
                    egresos.map((egreso) => {
                        return(
                            <Egreso fecha={egreso.fecha} concepto={egreso.concepto} cantidad={egreso.cantidad} pagado={egreso.pagado} />
                        )
                    })
                }
                <form onSubmit={saveEgreso} className={`${showInfoClass} transition-max-height duration-300 table-row grid grid-cols-9 bg-blackH  text-center font-bold`}>
                    <div className="table-cell col-span-2 py-1 px-2"><input name="fecha" type="date" className="rounded-lg p-1 w-5/6 text-center" /></div>
                    <div className="table-cell col-span-4 py-1 px-2"><input name="concepto" type="text" className="rounded-lg p-1 w-5/6 text-center" placeholder="Concepto" /></div>
                    <div className="table-cell col-span-2 py-1 px-2"><input name="cantidad" type="number" className="rounded-lg p-1 w-5/6 text-center" placeholder="30" /></div>
                    <div className="table-cell relative place-content-center col-span-1 py-1 px-2">
                        <input name="pagado" type="checkbox" className="size-4 appearance-none bg-gray-100 accent-yellowH checked:appearance-auto" />
                        <button type="submit" className={`${showConfirm} absolute transform-translate duration-300 top-0 left-0 grid place-content-center ${showConfirm} absolute transform-translate duration-300 w-full h-full`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-greenH">
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </form>

                <div className="table-row grid place-content-center rounded-b-lg h-10 bg-blackH text-center" onClick={() => setShowInfo(!showInfo)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-yellowH">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default TabalaEgresos;