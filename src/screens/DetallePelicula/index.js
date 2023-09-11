import React, { Component } from 'react'
import {options} from "../../utils/constants"
import { Link } from 'react-router-dom'

class DetallePelicula extends Component {

    constructor(props){
        super(props)
        this.state = {
            Detalle: null,
            esFavorito: false
          }
    }

    componentDidMount() {

        //Detalle
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}` , options)
        .then(resp => resp.json())
        .then(data => this.setState({
            Detalle: data
        
          } , ()=> {

            let storageFav =  localStorage.getItem('favoritos')
            let arrParseado = JSON.parse(storageFav)
    
            if(arrParseado !== null){
              let estaMiPelicula= arrParseado.includes(this.state.Detalle.id)
    
              if(estaMiPelicula){
                this.setState({
                  esFavorito: true
                })
              }
            }
  
          }))
          .catch(err => console.log(err))
  
  
      }

      agregarAFavoritos(idPelicula){
        let storageFav = localStorage.getItem('favoritos')
        if(storageFav === null){
          let arrIds = [idPelicula]
          let arrStringificado = JSON.stringify(arrIds)
          localStorage.setItem('favoritos', arrStringificado)
        } else {
          let arrParseado = JSON.parse(storageFav)
          arrParseado.push(idPelicula)
          let arrStringificado = JSON.stringify(arrParseado)
          localStorage.setItem('favoritos', arrStringificado)
        }
  
        this.setState({
          esFavorito: true
        })
      }
  
      sacarDeFavoritos(idPelicula){
        let storageFav = localStorage.getItem('favoritos')
        let arrParseado = JSON.parse(storageFav)
        let favsFiltrados = arrParseado.filter((id) => id !== idPelicula)
        let arrStringificado = JSON.stringify(favsFiltrados)
        localStorage.setItem('favoritos', arrStringificado)
        this.setState({
          esFavorito: false
        })
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
              <p className=""> Genero : {this.state.Detalle.genres[0].name }</p> 
             
              
              {
              this.state.esFavorito ?
              <button onClick={()=> this.sacarDeFavoritos(this.state.Detalle.id)}>
                Sacar de favoritos
              </button>  
              :
              <button onClick={()=> this.agregarAFavoritos(this.state.Detalle.id)}>
                Agregar a favoritos
              </button>
            }

              
              
              
          </div>
          :
          <h1>Cargando Pelicula...</h1>
        }




      </>
            

          
         
        


          
        
        )
    }


}

export default DetallePelicula

