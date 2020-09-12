import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {
    Link
} from "react-router-dom";

const DetalleItem = () => {

    const {id} = useParams(); //hook para obtener lo parametros de la props
    const [item, setItem] = useState([]);


    useEffect(()=>{
        fetch(`https://jsonfy.com/items/${id}`)
        .then(res => res.json())
        .then(
          (result) => {
            setItem(result);
          },
          // Nota: es importante manejar errores aquí y no en 
          // un bloque catch() para que no interceptemos errores
          // de errores reales en los componentes.
          (error) => {
            console.log('Hubo un problema con la petición Fetch:' + error.message);          }
        )
    },[id]);


    return (
        <>
            {
                item.map(i => (
                    <div className="row container">
                        <div className="col-sm-8">
                            <img src={i.photo_url} className="rounded img-fluid" alt=""/>
                        </div>
                        <div className="col-sm-4">
                            <h3>{i.name}</h3>
                            <p>{i.description}</p>
                            <p>${i.price}</p>
                            <p>Unidades disponibles: {i.stock}</p>
                            <small>Unidades vendidas: {i.sales}</small><br/>
                            
                            <Link to="#" className="btn btn-primary btn-block mt-3">Agregar al carrito</Link>
                        </div>

                    </div>
                ))
            }
        </>
    )
}

export default DetalleItem
