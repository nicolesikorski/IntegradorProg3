import React, {Component} from "react";
import FichaSerie from "../FichaSerie/FichaSerie";


export default class SeriesContainer extends Component {

render(){
    return ( 

<section> 
         
          


          {this.props.Serie.map((elm,idx)=> < FichaSerie key={elm + idx} data={elm} name={elm.name} poster_path = {elm.poster_path} overview = {elm.overview} id = {elm.id} actualizarState = {this.props.actualizarState? (id) => this.props.actualizarState(id) : false} /> )}
    

          </section>
          )

}
}
