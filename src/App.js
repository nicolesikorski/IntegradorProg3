import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home/index"
import Favoritos from "./screens/Favoritos/index"
import NotFound from "./screens/NotFound"
import TodasUpcoming from "./screens/TodasUpcoming";
import TodasPopulares from "./screens/TodasPopulares";
import DetallePelicula  from "./screens/DetallePelicula/index";
import Header from "./components/Header/Header";

function App() {
  return(
    <>
    <Header> </Header>
<main>
    <Switch>
    <Route path={'/'} exact={true} component={Home} />
    <Route path={'/Populares'} exact={true} component={TodasPopulares} />
    <Route path={'/Upcoming'} exact={true} component={TodasUpcoming} />
    <Route path={'/detalle/pelicula/:id'} component={DetallePelicula} />
    <Route path={'/favoritos'} component={Favoritos} />
    </Switch>
    </main>
    
    
     
    </>
  )
}

export default App;
