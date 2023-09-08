import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer  from "./components/Footer/Footer";
import Home from "./screens/Home/index"
import Favoritos from "./screens/Favoritos/index"
import NotFound from "./screens/NotFound"
import TodasPeliculas from "./screens/TodasPopulares/index"
import DetallePelicula  from "./screens/DetallePelicula/index";

function App() {
  return(
    <>

    <Switch>
    <Route path={'/'} exact={true} component={Home} />
    <Route path={'/TodasPeliculas'} exact={true} component={TodasPeliculas} />
    <Route path={'/detalle/pelicula/:id'} component={DetallePelicula} />
    <Route path={'/favoritos'} component={Favoritos} />
    </Switch>
     
      
     
    </>
  )
}

export default App;
