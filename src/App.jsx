import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Home } from "./pages/HOME/home.jsx";
import { ItemListContainer } from "./pages/itemListContainer/ItemListContainer.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer
        greeting={"MIRA DISTRIBUCIONES. Bienvenido a nuestra tienda online"}
      />
      <Home />
    </div>
  );
}

export default App;
