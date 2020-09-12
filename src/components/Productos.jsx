/**
 * Rodri, trata de hacer un Card que muestra la info del prodcuto,
 * toma de ejemplo este. Te cree esta rama para que puedas probar tranquilo
 */
import React, {useEffect, useState} from 'react';
import {
    Link
} from "react-router-dom";

const Productos = () => {


    const [productos, setProductos] = useState([]);


    useEffect(()=>{
        //console.log('useEffect');
        fetch('https://jsonfy.com/items')
            .then(res => res.json())
            .then(
                (result) => {
                    setProductos(result)
                },
                (error) => {
                    console.error(error);
                }
            )
        //obtenerDatos();
    }, []);

    /* const obtenerDatos = async () => {
        const data = await fetch('https://jsonfy.com/items');
        const items = await data.json();
        
        //console.log(items);

        setProductos(items);

    } */

    return (
        <div className="row row-cols-1 row-cols-md-3">
        {
            productos.map(item => (
                <div className="col mb-4" key={item.id}>
                    <div className="card">
                        <img src={item.photo_url} className="card-img-top img-fluid" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <Link to={`/productos/${item.id}`} className="btn btn-primary btn-block btn-lg">Ver más</Link>
                        </div>
                    </div> 
                </div>
                ))
            }
        </div>
    )
}

export default Productos;
