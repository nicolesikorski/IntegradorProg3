import React, { Component } from 'react'
import {options} from "../../utils/constants"
import { Link } from 'react-router-dom'

class DetalleSerie extends Component {

    constructor(props){
        super(props)
        this.state = {
            Detalle: null
          }
    }

    componentDidMount() {

        //Detalle
        fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}` , options)
        .then(resp => resp.json())
        .then(data => this.setState({
            Detalle: data
        
          } ) 
        )

        
        .catch(err=> console.log(err))
   
    
        
    
     }

    render(){
        return(

            <> 
        {
          this.state.Detalle !== null? 
          <div> 
           <h4 className="titulo">{this.state.Detalle.title}</h4>
              <img className="" src = { `https://image.tmdb.org/t/p/w342/${this.state.Detalle.poster_path} `} alt="" />
              <p className=""> Sinopsis: {this.state.Detalle.overview}</p>
              <p className=""> Fecha de estreno: {this.state.Detalle.release_date}</p>
              <p className=""> Duracion: {this.state.Detalle.runtime}</p>
              <p className=""> Rating: {this.state.Detalle.vote_average}</p>
              
              <p className=""> Genero 1: {this.state.Detalle.genres[0].name }</p>
              <p className=""> Genero 2: {this.state.Detalle.genres[1].name }</p>
              <p className=""> Genero 3: {this.state.Detalle.genres[1].name }</p>
              

              
              
              
          </div>
          :
          <h1>Cargando Serie...</h1>
        }




      </>
            

          
         
        


          
        
        )
    }


}

export default DetalleSerie

