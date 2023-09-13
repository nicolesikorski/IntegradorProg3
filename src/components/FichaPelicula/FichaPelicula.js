/* recibir array de elemntos e iterar y mostrar una tarjeta por cada elemento */

import { Component } from "react"
import { Link } from "react-router-dom"
import './styles.css'

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

         
          <article className="movie-card" >



<div >
              
                
         
             

              <img className="movie-image" src = { `https://image.tmdb.org/t/p/w342/${this.props.poster_path} `} alt="" />
              <h2 >{this.props.title}</h2 >
              <Link to={`/detalle/pelicula/${this.props.id}`}>
              <h4 >Ir al detalle</h4>
              </Link> 

            {this.state.boton !== false?
            <div className="divBoton">
            <button onClick={()=>this.verMenos()} >Ver menos</button>
                <p> Descripcion: {this.props.overview}</p>
            </div>
            : 
            <div className="divBoton">
            <button  onClick= {()=> this.verMas()}> Ver mas</button></div>
                     }
              

              
              
              
              
              

              
              
              
              {
              
            }
          </div>



          </article>
       
        
        )
    }
}

export default FichaPelicula