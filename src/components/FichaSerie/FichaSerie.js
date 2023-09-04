import { Component } from "react"
import { Link } from "react-router-dom"

class FichaSerie extends Component{
    constructor(props){
        super(props)
        

    } render(){
        return(
        <div className="pelicula-principal ">
              
                
         
              <h4 className="titulo">{this.props.title}</h4>
              <img className="descripcion" src = { ` https://image.tmdb.org/t/p/w342/${this.props.poster_path} `} alt="" />
              <p className="descripcion">{this.props.overview}</p>
              <p className=""> Fecha de estreno: {this.props.release_date}</p>
              <a href="#">Ver todas </a>
              {
              
            }
          </div>
        )
    }
}

export default FichaSerie