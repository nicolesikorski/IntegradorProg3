import React, { Component } from 'react'
import {options} from "../../utils/constants"
import './styles.css'
import PeliculasContainer from '../../components/PeliculasContainer/PeliculasContainer'
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'
import { Link } from 'react-router-dom'

class index extends Component {

  constructor(props){
    super(props)
    this.state = {
      Peliculas: [],
      Series : []
    }
  }

  componentDidMount() {

    //Peliculas mas populares
    fetch('https://api.themoviedb.org/3/movie/popular' , options)
    .then(resp => resp.json())
    .then(data => this.setState({
      Peliculas: data.results
  
    } )
    )
    .catch(err=> console.log(err))


    //Series mas populares
    fetch('https://api.themoviedb.org/3/tv/popular' , options)
    .then(resp => resp.json())
    .then(data => this.setState({
      Series: data.results
    } )
    )
    .catch(err=> console.log(err))

 }




    render() {
      return (
          <div>
           <h2>Peliculas mas populares</h2>

<Link to="/TodasPeliculas">
<h2 >Ver todas</h2>
</Link>
          <PeliculasContainer Pelicula= {this.state.Peliculas}>

          </PeliculasContainer>


          <h2>Series mas populares</h2>
          
          <Link to="/TodasSeries">
          <h2 >Ver todas</h2>
          </Link>

          <SeriesContainer Serie= {this.state.Series}>

          </SeriesContainer>
          
        </div>
      )
    }
  }


    
  

    
  
  export default index