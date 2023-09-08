import React, {Component} from "react";
import FichaPelicula from "../FichaPelicula/FichaPelicula";
import './styles.css'


export default class PeliculasContainer extends Component {

render(){
    return ( 

<section> 
         
          


          {this.props.Pelicula.map((elm,idx)=> < FichaPelicula key={elm + idx} data={elm} title={elm.title} poster_path = {elm.poster_path} overview = {elm.overview} id = {elm.id} actualizarState = {this.props.actualizarState? (id) => this.props.actualizarState(id) : false} /> )}
    

          </section>
          )

}
}
