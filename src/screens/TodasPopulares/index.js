import React, { Component } from 'react'
import {options} from "../../utils/constants"
import PeliculasContainer from '../../components/PeliculasContainer/PeliculasContainer'
import FormFiltro from '../../components/FormFiltro/FormFiltro'

class TodasPopulares extends Component {

  constructor(props){
    super(props)
    this.state = {
      Populares: [],
      backupPop: [],
      page: 1
    }
  }

  componentDidMount() {

    //Peliculas populares todas
    fetch('https://api.themoviedb.org/3/movie/popular' , options)
    .then(resp => resp.json())
    .then(data => this.setState({
      Populares: data.results,
      backupPop: data.results
  
    } )
    )
    .catch(err=> console.log(err))


    

 }

 traerMasPeliculas(){
  fetch(`https://api.themoviedb.org/3/movie/popular?page=${this.state.page + 1}`, options)
  .then(resp => resp.json())
  .then(data => this.setState({
      Populares: this.state.Populares.concat(data.results),
      backupPop: this.state.backupPop.concat(data.results),
      page: this.state.page + 1
  }))
}

filtrarPeliculas(nombre){
  let peliculasFiltrados = this.state.backupPop.filter((elm) => elm.title.toLowerCase().includes(nombre.toLowerCase()))
  this.setState({
      Populares: peliculasFiltrados
  })
}



    render() {
      return (
          <div>
          
          <section> 
          <h2>Todas las populares</h2>
          <FormFiltro filtrarPeliculas = {(nombre) => this.filtrarPeliculas(nombre)}/>
            <button onClick={()=> this.traerMasPeliculas()}>Traer más películas</button>
          <PeliculasContainer Pelicula= {this.state.Populares}>

          </PeliculasContainer>
          </section>


          
        </div>
      )
    }
  }

export default TodasPopulares