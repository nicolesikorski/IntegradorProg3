/* recibir array de elemntos e iterar y mostrar una tarjeta por cada elemento */

import { Component } from "react"
import { Link } from "react-router-dom"

class Ficha extends Component{
    constructor(props){
        super(props)
        

    } render(){
        return(
        <div className="pelicula-principal ">
              
                
         
              <h4 className="titulo">{this.props.title}</h4>
              <img className="" src = { `https://image.tmdb.org/t/p/w342/${this.props.poster_path} `} alt="" />
              <p className=""> Descripcion: {this.props.overview}</p>
              <Link to="">
              <h2 >Ver más</h2>
              </Link>
              /* <Link to={`/detalle/${this.props.id}`}>
              <h2 >Ir al detalle</h2>
              </Link> */
              
              

              
              
              
              {
              
            }
          </div>
        )
    }
}

export default Ficha