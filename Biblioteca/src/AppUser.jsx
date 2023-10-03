import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Logo } from "./components/home/Logo";
import Cookies from 'js-cookie';

export default function AppAdmin() {
  const location = useLocation();
  const [HScreen, setHScreen] = useState(true); // Inicialmente, aplicamos la clase h-screen

  useEffect(() => {
    // Verificamos si el pathname es "/admin" para aplicar la clase h-screen
    if (location.pathname === "/user") {
      setHScreen(true);
    } else {
      setHScreen(false); // Quitamos la clase h-screen
    }
  }, [location.pathname]);

  return (
    <div className={HScreen ? "h-screen" : ""}>
      <Navbar>
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">Biblioteca</p>
        </NavbarBrand>   
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button color="danger"  variant="flat" onClick={()=>Cookies.remove('authToken', 'role')}>
            <Link to ="/">Log Out</Link>  
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Outlet />
    </div> 
  );
}
