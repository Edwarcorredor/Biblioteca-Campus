import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Logo } from "./components/home/Logo";
import Cookies from 'js-cookie';
import ProductUser from "./components/user/ProductUser";
import { useState, useEffect } from "react";
import handleSubmit from "./services/peticionFetchProduct.js";

export default function AppUser() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.10.10.10:5030/inventory/list?name", {
      headers: {
        "Authorization": "Bearer " + Cookies.get("authToken")
      },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []); 

  return (
    <div className="h-screen">
      <Navbar>
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">Biblioteca</p>
        </NavbarBrand>   
        <NavbarContent justify="center">
          <form className="hidden sm:flex gap-4" onSubmit={(e)=> handleSubmit(e, setProducts)}>
          <NavbarItem>
            <Input type="text" placeholder="Search" name="" />
          </NavbarItem>
          <NavbarItem>
          <Button color="success"  variant="flat" type="submit">
            🔍
          </Button>
          </NavbarItem>
          </form>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button color="danger"  variant="flat" onClick={()=>Cookies.remove('authToken', 'role')}>
            <Link to ="/">Log Out</Link>  
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {products.map((product) => (
        <ProductUser
          key={product._id}
          name={product.name}
          photo={product.image}
        />
      ))}
    </div> 
  );
}
