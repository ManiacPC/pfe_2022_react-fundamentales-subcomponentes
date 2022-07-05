import React, { useState, useEffect } from 'react'
import Articuno from '../assets/images/pokemon1_articuno.jpeg'
import Kabutops from '../assets/images/pokemon2_kabutops.jpeg'
import PokemonFragment from "./Fragments/PokemonFragment"

const Pokemon = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Pokedex!</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <PokemonFragment
                            textoDescripcion="A legendary bird POKéMON that is said to appear to doomed people who are lost in icy mountains."
                            imagen={Articuno}
                            titulo="Articuno"
                        />
                    </div>
                    <div className="col-4">
                        <PokemonFragment
                            textoDescripcion="Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids."
                            imagen={Kabutops}
                            titulo="Kabuto"
                        />
                    </div>
                    <div className="col-4">Pokemon 3</div>
                </div>
            </div>
        </>
    )
}
export default Pokemon