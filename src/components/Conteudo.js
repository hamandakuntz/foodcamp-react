import Pratos from "./Pratos";
import Bebidas from "./Bebidas"
import Sobremesas from "./Sobremesas"

export default function Conteudo() {
    return (
        <body>
        <div class="conteudo">
            <Pratos />
            <Bebidas />
            <Sobremesas />                                
            <div class="base">
                <button class = "selecionar-pedido" onclick="fecharPedido()" disabled>Selecione os 3 itens para fechar o pedido</button>                            
            </div>            
        </div> 
        </body>
    );
}