import Productos from './productos';
import { useState } from 'react';

const TablaProductos = function () {

    let costosBasicos = JSON.parse(localStorage.getItem("productosBasicos"));

    //----------------------------------- ESTADOS ----------------------------------------

    //Mostrar y ocultar la forma de productos
    const [stateModalForm, changeState] = useState(false);
    const visibility = stateModalForm ? "visible" : "invisible"
    const handleModalForm = function () {
        changeState(!stateModalForm)
    }

    const [stateDeleteButton, changeVisibility] = useState(false);
    const visibilityButton = stateDeleteButton ? "visible" : "hidden"
    const handleDeleteButton = function () {
        changeVisibility(!stateDeleteButton)
    }

    //Mostrar y ocultar la ventana para agragar o modificar productos
    const [typeModalForm, changeForm] = useState(false);
    const type = typeModalForm == "add_producto" ? "Agregar" : "Editar"
    const handleTypeForm = function (event) {
        const buttonClick = event.currentTarget.id;
        changeForm(buttonClick);

        if (buttonClick != "add_producto") {
            costosBasicos.map((producto) => {
                if (producto.id == buttonClick) {
                    const indexProducto = costosBasicos.indexOf(producto);
                    handleIdState(indexProducto);
                    document.getElementById("nombre").value = costosBasicos[indexProducto].nombre;
                    document.getElementById("costo").value = costosBasicos[indexProducto].costo;
                    document.getElementById("unidad").value = costosBasicos[indexProducto].unidad;
                    document.getElementById("almacen").value = costosBasicos[indexProducto].almacen;
                }
            })
            handleDeleteButton();
        }

        handleModalForm();
    }

    //Cambiar el estado del elemento a Editar
    const [idState, changeId] = useState(undefined);
    const handleIdState = function (idProducto) {
        changeId(idProducto);
    }

    //----------------------------------- FUNCIONES DE CONTROL ----------------------------------------

    // Cerrar ventana y borrar cambios
    const cancelForm = function () {
        document.getElementById("nombre").value = "";
        document.getElementById("costo").value = "";
        document.getElementById("almacen").value = "";
        if (visibilityButton == "visible") handleDeleteButton();
        handleModalForm();
    }

    // Agregar producto
    const saveForm = function () {
        let nombreProducto = document.getElementById("nombre");
        let costoProducto = document.getElementById("costo");
        let unidadProducto = document.getElementById("unidad");
        let almacenProducto = document.getElementById("almacen");
        let bandera = true;
        costosBasicos.map((producto) => {
            if (producto.nombre == nombreProducto.value) {
                bandera = false;
            }
        })
        if (bandera) {
            costosBasicos.push({ id: costosBasicos.length, nombre: nombreProducto.value, costo: costoProducto.value, unidad: unidadProducto.value, almacen: almacenProducto.value })
            localStorage.setItem("productosBasicos", JSON.stringify(costosBasicos));
        }
        cancelForm();
    }

    // Guardar cambios en un producto
    const editForm = function () {
        let nombreProducto = document.getElementById("nombre");
        let costoProducto = document.getElementById("costo");
        let unidadProducto = document.getElementById("unidad");
        let almacenProducto = document.getElementById("almacen");
        costosBasicos[idState].nombre = nombreProducto.value;
        costosBasicos[idState].costo = costoProducto.value;
        costosBasicos[idState].unidad = unidadProducto.value;
        costosBasicos[idState].almacen = almacenProducto.value;
        localStorage.setItem("productosBasicos", JSON.stringify(costosBasicos));
        cancelForm();
    }

    const deleteProducto = function () {
        costosBasicos.splice(idState, 1);
        localStorage.setItem("productosBasicos", JSON.stringify(costosBasicos));
        cancelForm();
    }

    return (
        <div className='flex justify-center my-20'>
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
            </div>

            <div className={`absolute ${visibility} z-20 flex flex-col w-80 rounded-lg border-2 border-black bg-gray-100`}>
                <h1 id='form-title' className='w-full p-2 text-white text-center font-bold bg-black'>{type} Producto</h1>
                <div className='flex items-center justify-between my-2'>
                    <label className='ml-5 mr-2 font-bold' htmlFor="">Nombre:</label>
                    <input className='mr-5 p-2 rounded-lg' type="text" placeholder="Tarros 300gr" id='nombre' />
                </div>
                <div className='flex items-center justify-between mb-2'>
                    <label className='ml-5 mr-2 font-bold' htmlFor="">Costo:</label>
                    <input className='mr-5 p-2 rounded-lg' type="number" placeholder='100.00' id='costo' />
                </div>
                <div className='flex items-center justify-between mb-2'>
                    <label className='ml-5 mr-2 font-bold' htmlFor="">Unidad:</label>
                    <select className='w-full mr-5 ml-3 rounded-lg p-2' name="unidad" id='unidad'>
                        <option value="kg">Kilogramo</option>
                        <option value="gr">Gramo</option>
                        <option value="pza">Pieza</option>
                        <option value="lt">Litro</option>
                        <option value="ml">Mililitro</option>
                    </select>
                </div>
                <div className='flex items-center justify-between mb-2'>
                    <label className='ml-5 mr-2 font-bold' htmlFor="">Almacen:</label>
                    <input className='mr-5 rounded-lg p-2' type="number" placeholder='10' id='almacen' />
                </div>
                <div className={`${type == "Agregar" ? "grid-cols-2" : "grid-cols-3"} mx-3 mb-2 grid`}>
                    <button className='m-2 rounded-lg border-2 border-blueH font-bold hover:bg-blueH hover:text-white' onClick={type == "Agregar" ? saveForm : editForm}>Guardar</button>
                    <button className='m-2 rounded-lg border-2 border-redH font-bold hover:bg-redH hover:text-white' onClick={cancelForm}>Cancelar</button>
                    <button className={`${visibilityButton} m-2 rounded-lg border-2 border-blackH font-bold hover:bg-blackH hover:text-white`} onClick={deleteProducto}>Borrar</button>
                </div>
            </div>
            <div className={`${visibility} bg-gray-100 absolute inset-0  opacity-50 z-10`}></div>
        </div>
    )
}

export default TablaProductos;