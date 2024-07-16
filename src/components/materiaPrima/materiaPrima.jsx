const MateriaPrima = function({nombre, costo, unidad, almacen}){
    return(
        <tr>
            <td>{nombre}</td>
            <td>{costo}</td>
            <td>{unidad}</td>
            <td>{almacen}</td>
        </tr>
    );
}

export default MateriaPrima;