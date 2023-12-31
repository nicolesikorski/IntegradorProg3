import React, { Component } from 'react'
import {options} from "../../utils/constants"
import PeliculasContainer from '../../components/PeliculasContainer/PeliculasContainer'
import FormFiltro from '../../components/FormFiltro/FormFiltro'
import './styles.css'

class TodasUpcoming extends Component {

  constructor(props){
    super(props)
    this.state = {
      Upcoming: [],
      backupUp: [],
      page: 1
    }
  }

  componentDidMount() {

    //Peliculas upcoming todas
    fetch('https://api.themoviedb.org/3/movie/now_playing' , options)
    .then(resp => resp.json())
    .then(data => this.setState({
        Upcoming: data.results,
        backupUp: data.results
  
    } )
    )
    .catch(err=> console.log(err))


    

 }

 traerMasPeliculas(){
  fetch(`https://api.themoviedb.org/3/movie/popular?page=${this.state.page + 1}`, options)
  .then(resp => resp.json())
  .then(data => this.setState({
    Upcoming: this.state.Upcoming.concat(data.results),
    backupUp: this.state.backupUp.concat(data.results),
      page: this.state.page + 1
  }))
}

filtrarPeliculas(nombre){
  let peliculasFiltrados = this.state.backupUp.filter((elm) => elm.title.toLowerCase().includes(nombre.toLowerCase()))
  this.setState({
    Upcoming: peliculasFiltrados
  })
}



    render() {
      return (
          <div>
          
          <section> 
          <h2>Todas las peliculas en cartel</h2>
          
          <div className='divForm'> 

          <FormFiltro filtrarPeliculas = {(nombre) => this.filtrarPeliculas(nombre)}/>
            <button  className='nav-link' onClick={()=> this.traerMasPeliculas()}>Traer más películas</button>

            </div>
          
          <PeliculasContainer Pelicula= {this.state.Upcoming}>

          </PeliculasContainer>
          </section>


          
        </div>
      )
    }
  }

export default TodasUpcoming