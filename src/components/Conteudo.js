import Pratos from "./Pratos";
import Bebidas from "./Bebidas";
import Sobremesas from "./Sobremesas";
import FinalizarPedido from "./FinalizarPedido";

export default function Conteudo() {
  return (
    <body>
      <div class="conteudo">
        <Pratos />
        <Bebidas />
        <Sobremesas />
        <FinalizarPedido />
      </div>
    </body>
  );
}
