import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Store} from "./pages/Store"
import {Navbar} from "./components/Navbar"
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext"

function App(){
  return <ShoppingCartProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Store />} />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<Home />} />
    </Routes>
  </ShoppingCartProvider> 
  
}
export default App
