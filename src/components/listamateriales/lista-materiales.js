import React from "react";
import './lista-materiales.css'
import 'bootstrap/dist/css/bootstrap.min.css';




const ListaMateriales = props =>{

    console.log(props.materiales) 

    return (
    <select className='lista-de-materiales' >

      {props.materiales.map(material =>{
          return <option value={material.valor}>
              {material.Text}      <span className="c-pill c-pill--warning"> $ {material.valor} </span> </option>
      })}
    </select>
    )
}

export default  ListaMateriales;