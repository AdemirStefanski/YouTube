import { useState } from "react";
import Header from "./components/header/indexHeader";
import Menu from "./components/menu/indexMenu";

function App() {

  //simulação de estado global para abrir e fechar menu.
  //como o estado do menu se resume entre aberto e fechado, podemos usar um boolean para isso, aberto(true) e fechado(false).
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div className="App">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <div style={{ width: "100%" , display: "flex"}}>
        {/* passamos indicando se esta aberto ou fechado dentro da variável openMenu. */}
        <Menu openMenu={openMenu} />
        <div style={{ backgroundColor: "#f3f3f3", width: "100%"}}>

        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
