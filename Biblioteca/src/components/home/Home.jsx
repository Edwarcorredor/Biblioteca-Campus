import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo.jsx";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar className="mb-40">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">Biblioteca</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to ="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button color="primary"  variant="flat">
              <Link to ="/register">Sign Up</Link>  
              
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <h1 className="text-9xl font-serif text-center">
        Biblioteca
      </h1>
    </div>
  );
}
