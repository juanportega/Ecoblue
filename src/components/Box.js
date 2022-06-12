import React, { useState } from "react";
//  import BotonMaterial from "./nuevo materiales/boton-mas-material.js";
import ListaMateriales from "./listamateriales/lista-materiales.js";
import './Box.css'
import NewMaterial from "./nuevo materiales/nuevomaterial.js";
// import { AddnewMaterial } from "./nuevo materiales/nuevomaterial.js";
import { MaterialesListados } from "./Listadomateriales.js";



const Box = () =>{



const [show,setShow]=useState(true)
    return( 
        <React.Fragment>
            <div className='Container' id='contenedor'>
                    <div className='titulos'>  
                         <p className='Titulo'>Calculadora de ganancias</p>
                         <p className='Subtitulo'>Esto podrías ganar con tus residuos</p>

                        <div className="cajamateriales">
                            {
                            show?<div className="cajaMateriales">
                                    <p className="subcaja">Material</p> <p className="peso">Peso</p> <p className="subtotal">Sub total</p>
                                    <div className="linea"/>
                                    <div className="linea2"/>
                                    <p className="Total">Total</p> <p className="valorseleccionado">{ListaMateriales}</p>
                                   <button  type='menu' className='Cotizacion' onClick={()=>setShow(false)} > Solicitar cotizacion </button>
                                </div>:null
                            }           
                        </div>
                         <p className='TituloMateriales'><span className='material'>Material</span> Selecciona para empezar</p>
                             <ListaMateriales materiales={MaterialesListados}/>
                             {/* <ListaMateriales /> */}
                         <p className='subtitulomateriales'>Los precios pueden variar segun el mercado </p>
                         <p className='TituloInput'>Peso Escribe el valor en Kilogramos </p>

                        {/* <NewMaterial onNewMaterial  = {AddnewMaterial}/> */}
                        <NewMaterial/>
                        

                    </div>

                     <button className='Agregar-material' onClick={()=>setShow(true)}>Agregar material</button>

            </div>
        </React.Fragment>
    )

};

export default Box