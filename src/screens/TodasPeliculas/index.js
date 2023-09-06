import React, { Component } from 'react'
import {options} from "../../utils/constants"
import FichaPelicula from '../../components/FichaPelicula/FichaPelicula'

class TodasPeliculas extends Component {

  constructor(props){
    super(props)
    this.state = {
      Peliculas: []
    }
  }

  componentDidMount() {

    //Peliculas todas
    fetch('https://api.themoviedb.org/3/discover/movie' , options)
    .then(resp => resp.json())
    .then(data => this.setState({
      Peliculas: data.results
  
    } )
    )
    .catch(err=> console.log(err))


    

 }




    render() {
      return (
          <div>
          
          <section> 
          <h2>Todas las peliculas</h2>
          {this.state.Peliculas.map((elm,idx)=> < FichaPelicula key={elm + idx} data={elm} title={elm.title} poster_path = {elm.poster_path} overview = {elm.overview} id = {elm.id} /> )}
          </section>


          
        </div>
      )
    }
  }

export default TodasPeliculas