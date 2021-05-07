import ReactDOM from "react-dom";
import Topo from "./components/Topo";
import Conteudo from "./components/Conteudo";
import ConfirmarPedido from "./components/ConfirmarPedido";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topo />
      <Switch>
        <Route path="/" component={Conteudo} exact />
        <Route path="/confirmarpedido" component={ConfirmarPedido} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));