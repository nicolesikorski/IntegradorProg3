/* recibir array de elemntos e iterar y mostrar una tarjeta por cada elemento */

import { Component } from "react"
import { Link } from "react-router-dom"

class FichaPelicula extends Component{
    constructor(props){
        super(props)
        this.state={
         
          boton: false,
      }
        

    } 

  verMas(){
      this.setState({ boton:true})
  }
  verMenos(){
      this.setState({ boton:false})
     
  }
    
    
    render(){
        return(
        <div className="pelicula-principal ">
              
                
         
              <h4 className="titulo">{this.props.title}</h4>
              <img className="" src = { `https://image.tmdb.org/t/p/w342/${this.props.poster_path} `} alt="" />

            {this.state.boton !== false?
            <section>
            <button className="boton-ver" onClick={()=>this.verMenos()} >Ver menos</button>
                <p> Descripcion: {this.props.overview}</p>
            </section>
            : 
            <button className="boton-ver" onClick= {()=> this.verMas()}> Ver mas</button>
                     }
              

              
              
              <Link to={`/detalle/pelicula/${this.props.id}`}>
              <h2 >Ir al detalle</h2>
              </Link> 
              
              

              
              
              
              {
              
            }
          </div>
        )
    }
}

export default FichaPelicula