import React, { Component } from 'react'
import {options} from "../../utils/constants"
import PeliculasContainer from '../../components/PeliculasContainer/PeliculasContainer'
import { Link } from 'react-router-dom'
import FormBuscador from '../../components/FormBuscador/FormBuscador'
import './styles.css'

class index extends Component {

  constructor(props){
    super(props)
    this.state = {
      Populares: [],
      backupPop: [],
      Upcoming : [],
      backupUp: [],
      valorFormulario: '',
      resultadoBusqueda : [],
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

 buscadorPeliculas(nombre){
    fetch(`https://api.themoviedb.org/3/search/movie?query=${nombre}` , options)
    .then(response => response.json())
            .then(data => this.setState(
                {
                  resultadoBusqueda: data.results
                }

            ))
            .catch(error => console.log(error))
}

render(){
  return(

    <div>
  

<FormBuscador buscadorPeliculas = {(nombre) => this.buscadorPeliculas(nombre)}/>

{this.state.resultadoBusqueda.length !== 0 ?
  <main>
<article>
                <h2> Resultado de busqueda </h2>
               
                <PeliculasContainer Pelicula= {this.state.resultadoBusqueda}>

              </PeliculasContainer>
                
              
              </article> </main> :

<main>
<article >
<h2>Peliculas mas populares</h2>
<Link  to="/Populares">
  <h2 >Ver todas</h2>
  </Link>



<PeliculasContainer Pelicula= {this.state.Populares}>

</PeliculasContainer>



<h2>Peliculas en cartel</h2>
<Link to="/Upcoming">
  <h2 >Ver todas</h2>
  </Link>


<PeliculasContainer Pelicula= {this.state.Upcoming}>

</PeliculasContainer>

</article>
</main>

}



    </div>


  )
}

}
 export default index