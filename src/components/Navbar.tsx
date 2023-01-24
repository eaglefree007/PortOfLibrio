import {Container, Nav, Button, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import { useShoppingCart } from "../contexts/ShoppingCartContext"
export function Navbar() {
  const { openCart, cartQuantity} = useShoppingCart()
  return (
  <NavbarBs sticky="top" className="bg-white shadow-lg mb-5">
    <Container>
      <Nav className="me-auto">
        <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
        <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
        <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
      </Nav>
      {cartQuantity > 0 && (
      <Button 
      onClick={openCart} 
      style={{width: "3rem", 
      height:"3rem", 
      position: "relative"
      }} variant="outline-primary" className="rounded-circle">
        {/* <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> */}
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.5" cy="41.5" r="3.5" fill="#000000"/>
        <circle cx="37.5" cy="41.5" r="3.5" fill="#000000"/>
        <path d="M5 6L14 12L19 34H39L44 17H25" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25 26L32.2727 26L41 26" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right:0, transform: "tranaslate(50%, -50%", fontSize: 12}}>{cartQuantity}</div>
      </Button>
      )}
    </Container>
  </NavbarBs>
  )
}