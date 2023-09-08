import React, { Component } from 'react'
import {options} from "../../utils/constants"
import './styles.css'
import PeliculasContainer from '../../components/PeliculasContainer/PeliculasContainer'
import { Link } from 'react-router-dom'
import Form from '../../components/Form/Form'

class index extends Component {

  constructor(props){
    super(props)
    this.state = {
      Populares: [],
      backupPop: [],
      Upcoming : [],
      backupUp: [],
      page: 1
         
    }
  }

  componentDidMount() {

    //Peliculas mas populares
    fetch('https://api.themoviedb.org/3/movie/popular' , options)
    .then(resp => resp.json())
    .then(data => this.setState({
      Populares: data.results.slice(0,5),
      backupPop: data.results.slice(0,5)
  
    } )
    )
    .catch(err=> console.log(err))


    //Peliculas en cartel
    fetch('https://api.themoviedb.org/3/movie/now_playing' , options)
    .then(resp => resp.json())
    .then(data => this.setState({
      Upcoming: data.results.slice(0,5),
      backupUp: data.results.slice(0,5)
    } )
    )
    .catch(err=> console.log(err))

 }

 filtrarPeliculas(nombre){
    let popFiltrados = this.state.backupPop.filter((elm) => elm.title.toLowerCase().includes(nombre.toLowerCase()))
    let UpFiltrados = this.state.backupUp.filter((elm) => elm.title.toLowerCase().includes(nombre.toLowerCase()))
    this.setState({
        Populares: popFiltrados , 
        Upcoming: UpFiltrados
    })
}

 

    render() {
      return (
          <div>

  <Form filtrarPeliculas = {(nombre) => this.filtrarPeliculas(nombre)}/>

           <h2>Peliculas mas populares</h2>

<Link to="/TodasPeliculas">
<h2 >Ver todas</h2>
</Link>
          <PeliculasContainer Pelicula= {this.state.Populares}>

          </PeliculasContainer>


          <h2>Peliculas en cartel</h2>
          
        
          <PeliculasContainer Pelicula= {this.state.Upcoming}>

          </PeliculasContainer>
          
        </div>
      )
    }
  }


    
  

    
  
  export default index