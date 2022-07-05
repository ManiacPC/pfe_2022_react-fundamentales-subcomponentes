import React, { useState, useEffect } from 'react'
import Articuno from "../../assets/images/pokemon1_articuno.jpeg";

const PokemonFragment = ({ imagen, titulo, textoDescripcion }) => {

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{textoDescripcion}</p>
                </div>
            </div>
        </>
    )
}

export default PokemonFragment