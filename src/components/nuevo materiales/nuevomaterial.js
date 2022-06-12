import React  from "react"
import { MaterialesListados } from "../Listadomateriales";

import './nuevomaterial.css'


const NewMaterial  = props =>{
    const MaterialNuevo =event=>{
        event.preventDefault();

        const newMaterial=
        {
            id: Math.random().toString(),
            Text :''
        };

        console.log(newMaterial)

const AddnewMaterial = (NewMaterial) =>{
    MaterialesListados.push(NewMaterial);
    console.log(MaterialesListados)
}

        props.onNewMaterial( NewMaterial);

    }
    
    return<form className='formulario'  >
        
        <input  className="Input"type='number' placeholder=" - " />
        <button onClick={MaterialNuevo} type='menu' className='Cotizar' > Solicitar cotizacion </button>
        {/* <button type='menu' className='Cotizar' > Solicitar cotizacion </button> */}

        
    </form>
    
 
};


export default NewMaterial;
