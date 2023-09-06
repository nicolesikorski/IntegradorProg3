import React, { Component } from 'react'
import PeliculaContainer from '../../components/PeliculasContainer/PeliculasContainer'

class index extends Component {

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
            fetch('https://api.themoviedb.org/3/movie/' + id)
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
    return (
      <div>
        <h1>Favoritos: </h1>
       
        <PeliculaContainer actualizarState = {(id) => this.actualizarState(id)} Pelicula = {this.state.favoritos}       />
      </div>
    )
  }
}

export default index