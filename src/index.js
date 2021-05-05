import ReactDOM from "react-dom";
import Topo from "./components/Topo";
import Conteudo from "./components/Conteudo";

function App() {
  return (
    <>
      <Topo />
      <Conteudo />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));