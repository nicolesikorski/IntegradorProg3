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
                  <div className='header'> 

                  <ul className='nav-ul'>
                  {
                navegacion.map((elm) => 
                <li className='nav-li'>
                    <Link to = {elm.ruta} className='nav-link'>
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