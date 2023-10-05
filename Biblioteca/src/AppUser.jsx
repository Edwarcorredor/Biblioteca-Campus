import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Input, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Logo } from "./components/home/Logo";
import Cookies from 'js-cookie';
import { useState, useEffect } from "react";
import Reservation from "./components/reservation/Reservation";
import handleSubmit from "./services/peticionFetchProduct.js";

export default function AppUser() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  
  useEffect(() => {
    fetch("http://127.10.10.10:5030/inventory/list?name", {
      headers: {
        "Authorization": "Bearer " + Cookies.get("authToken")
      },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []); 

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  console.log(products);

  return (
    <div className="min-h-screen ">
      <Navbar>
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">Biblioteca</p>
        </NavbarBrand>   
        <NavbarContent justify="center">
          <form className="sm:flex gap-4" onSubmit={(e)=> handleSubmit(e, setProducts)}>
            <NavbarItem>
              <Input type="text" placeholder="Search" name="name_product"  />
            </NavbarItem>
            <NavbarItem>
              <Button color="success" variant="flat" type="submit">
                🔍
              </Button>
            </NavbarItem>
          </form>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button color="danger" variant="flat" onClick={()=>{Cookies.remove('authToken'); Cookies.remove('role');}}>
              <Link to ="/">Log Out</Link>  
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product._id}  onClick={() => handleProductClick(product)} className="m-2">
              <Image
                width={300}
                alt={product.name}
                src={product.image}           
                />
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{selectedProduct.name}</ModalHeader>
              <ModalBody>
                <div className="flex">
                  {/* Parte izquierda (Imagen y Descripción) */}
                  <div className="w-1/2 pr-4">
                    <Image
                      width={300}
                      alt={selectedProduct.name}
                      src={selectedProduct.image}
                    />
                    <p className="mt-4">
                      {selectedProduct.description}
                    </p>
                  </div>
                  
                  {/* Parte derecha (Formulario) */}
                  <div className="w-1/2 pl-4">
                    <Reservation
                      name_product={selectedProduct.name}
                      max={selectedProduct.quantity}
                      close={onClose}
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> 
    </div> 
  );
}
