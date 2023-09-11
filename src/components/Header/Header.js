import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

const navegacion = [
    {
        nombre: 'Home',
        ruta:'/'
    },
    {
        nombre: 'Favoritos',
        ruta:'/favoritos'
    },
    {
        nombre: 'Populares',
        ruta: '/Populares'
    },
    {
        nombre: 'Upcoming',
        ruta: '/Upcoming'
    }
]
export default function Header() {
  return (
      <header> 
      

          <div>
              <h1>POCHOCLOS </h1>
          </div>

          <div>

              <nav>
                  <div > 

                  <ul className="main-nav" >
                  {
                navegacion.map((elm) => 
                <li>
                    <Link to = {elm.ruta}>
                        {elm.nombre}
                    </Link>
                
                </li>)
                
                }

                  </ul>

                  </div>

              </nav>


          </div>

    
    
    </header>
  )
}