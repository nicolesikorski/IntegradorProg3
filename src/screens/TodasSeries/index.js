import React, { Component } from 'react'
import {options} from "../../utils/constants"
import Ficha from '../../components/Ficha/Ficha'

class TodasSeries extends Component {

  constructor(props){
    super(props)
    this.state = {
      Series: []
    }
  }

  componentDidMount() {

    //Series todas
    fetch('https://api.themoviedb.org/3/discover/tv' , options)
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
          
          <section> 
          <h2>Todas las series</h2>
          {this.state.Series.map((elm,idx)=> < Ficha key={elm + idx} data={elm} title={elm.title} poster_path = {elm.poster_path} overview = {elm.overview} /> )}
          </section>


          
        </div>
      )
    }
  }

export default TodasSeries