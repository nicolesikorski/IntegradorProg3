/* recibir array de elemntos e iterar y mostrar una tarjeta por cada elemento */

import { Component } from "react"
import { Link } from "react-router-dom"

class FichaPelicula extends Component{
    constructor(props){
        super(props)
        

    } render(){
        return(
        <div className="pelicula-principal ">
              
                
         
              <h4 className="titulo">{this.props.title}</h4>
              <img className="" src = { `https://image.tmdb.org/t/p/w342/${this.props.poster_path} `} alt="" />
              <p className=""> Descripcion: {this.props.overview}</p>
              <p className="">   Fecha de estreno: {this.props.release_date}</p>
              <Link to ="/">  Ver todas </Link> 
              {
              
            }
          </div>
        )
    }
}

export default FichaPelicula