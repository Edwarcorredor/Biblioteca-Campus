import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Input, Image, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Logo } from "./components/home/Logo";
import Cookies from 'js-cookie';
import { useState, useEffect } from "react";
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
              <Input type="text" placeholder="Search" name="" />
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
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> 
    </div> 
  );
}
