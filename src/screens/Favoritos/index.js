import React, { Component } from 'react'
import PeliculasContainer from '../../components/PeliculasContainer/PeliculasContainer'
import {options} from "../../utils/constants"

export default class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      favoritos: []
    }
  }

  componentDidMount(){
    let storageFavs = localStorage.getItem('favoritos')

    if(storageFavs !== null){
      let favsParseados = JSON.parse(storageFavs)
      Promise.all(
        favsParseados.map( id => 
            fetch('https://api.themoviedb.org/3/movie/' + id, options)
            .then( resp => resp.json())
          )
      )
      .then( data => this.setState({favoritos: data}))
      .catch(err => console.log(err))
    }
  }

  actualizarState(id){
    let stateActualizado = this.state.favoritos.filter(elm => elm.id !== id)
    this.setState({
      favoritos: stateActualizado
    })
  }

  render() {
    console.log(this.state.favoritos)
    return (

      
      <div>
      <h1> Favoritos: </h1>
      <PeliculasContainer actualizarState = {(id) => this.actualizarState(id)} Pelicula = {this.state.favoritos}       />
     
      
    </div>

     
    )
  }
}