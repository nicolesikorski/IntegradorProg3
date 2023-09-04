import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer  from "./components/Footer/Footer";
import Detalle from "./screens/Detalle/index"
import Home from "./screens/Home/index"
import Favoritos from "./screens/Favoritos/index"
import NotFound from "./screens/NotFound"
import TodasPeliculas from "./screens/TodasPeliculas/index"

function App() {
  return(
    <>

    <Switch>
    <Route path={'/'} exact={true} component={Home} />
    </Switch>
     
      {/* <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/detalle/id/:id'} component={Detalle} />
        <Route path={'/favoritos'} component={Favoritos} />
        <Route component={NotFound}/>
      </Switch> */}
     
    </>
  )
}

export default App;
