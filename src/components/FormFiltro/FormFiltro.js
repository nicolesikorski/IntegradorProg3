import { Component } from "react";


class FormFiltro extends Component{
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
            () => this.props.filtrarPeliculas(this.state.valor)
        )
    }


    render(){
        return(
            <>
                <form onSubmit={(event)=> this.evitarSubmit(event)}>
                    <input onChange={(event)=> this.guardarValor(event)} value={this.state.valor}/>
                    <button>Filtrar peliculas</button>
                </form>
            </>
        )
    }

} 

export default FormFiltro 