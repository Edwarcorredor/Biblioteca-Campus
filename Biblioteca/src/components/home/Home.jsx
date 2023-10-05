import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo.jsx";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar className="mb-4 lg:mb-10"> {/* Clase lg:mb-10 para márgenes en pantallas grandes */}
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">Biblioteca</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link to="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary" variant="flat">
              <Link to="/register">Sign Up</Link>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <h1 className="text-5xl lg:text-9xl font-serif text-center mb-6"> {/* Clase lg:text-9xl para tamaño de texto en pantallas grandes */}
        Biblioteca
      </h1>
    </div>
  );
}
