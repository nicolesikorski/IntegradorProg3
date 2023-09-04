import React, { Component } from 'react'
import {options} from "../../utils/constants"
import './styles.css'
import FichaPelicula from '../../components/FichaPelicula/FichaPelicula'
import FichaSerie from '../../components/FichaSerie/FichaSerie'
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
          <h1>My App in React</h1>

          <section> 
          <h2>Peliculas mas populares</h2>

          {this.state.Peliculas.map((elm,idx)=> < FichaPelicula key={elm + idx} data={elm} title={elm.title} poster_path = {elm.poster_path} overview = {elm.overview} release_date = {elm.release_date} /> )}
    

          </section>


          <h2>Series mas populares</h2>
          {this.state.Series.map((elm,idx)=> < FichaSerie key={elm + idx} data={elm} title={elm.title} poster_path = {elm.poster_path} overview = {elm.overview}  release_date = {elm.release_date} /> )}
          
        </div>
      )
    }
  }


    
  

    
  
  export default index