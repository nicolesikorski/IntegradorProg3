import React, { Component } from 'react'
import {options} from "../../utils/constants"
import PeliculasContainer from '../../components/PeliculasContainer/PeliculasContainer'

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
          <PeliculasContainer Pelicula= {this.state.Peliculas}>

          </PeliculasContainer>
          </section>


          
        </div>
      )
    }
  }

export default TodasPeliculas