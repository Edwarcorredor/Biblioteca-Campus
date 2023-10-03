import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Logo } from "./components/home/Logo";
import Cookies from 'js-cookie';

export default function AppAdmin() {
  const navigate = useNavigate();
 
  return (
    <div className="h-screen">
      <Navbar className="mb-6">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit">Biblioteca</p>
        </NavbarBrand>   
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="bordered" 
              >
                Product
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Action event example" 
              onAction={(key) => navigate(key)}
            >
              <DropdownItem key="product/create">Create</DropdownItem>
              <DropdownItem key="product/update">Update</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem> 
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="bordered" 
              >
                Inventory
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Action event example" 
              onAction={(key) => navigate(key)}
            >
              <DropdownItem key="inventory/create">Create</DropdownItem>
              <DropdownItem key="inventory/update">Update</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>  
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="bordered" 
              >
                Loan
              </Button>
            </DropdownTrigger>
            <DropdownMenu 
              aria-label="Action event example" 
              onAction={(key) => navigate(key)}
            >
              <DropdownItem key="loan/create">Create</DropdownItem>
              <DropdownItem key="loan/update">Update</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button color="danger"  variant="flat" onClick={()=>{Cookies.remove('authToken')
            Cookies.remove('role')}}>
            <Link to ="/">Log Out</Link>  
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Outlet />
    </div> 
  );
}
