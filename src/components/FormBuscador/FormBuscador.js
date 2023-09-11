import { Component } from "react";
import './styles.css'

class FormBuscador extends Component{
    constructor (props){ 
        super(props)
        this.state={
            valor: ""
        }

    }

    evitarSubmit(event){
        event.preventDefault() 


    }
    guardarValor(event){ 
        this.setState(
            {
                valor: event.target.value
            },
            () => this.props.buscadorPeliculas(this.state.valor)
        )
    }


    render(){
        return(
            <>
                <form onSubmit={(event)=> this.evitarSubmit(event)}>
                    <input onChange={(event)=> this.guardarValor(event)} value={this.state.valor}/>
                    <button>Buscar peliculas</button>
                </form>
            </>
        )
    }

} 

export default FormBuscador 