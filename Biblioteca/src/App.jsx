import Login from './components/login/Login.jsx';
//import Register from './components/register/Register.jsx';
import Inventory from './components/inventory/Inventory.jsx'
import Product from './components/product/Product.jsx';
import './index.css'

export default function App(){
   return (
    <div className="flex justify-center items-center h-screen">
            
            <Product  titule= "Agregar Producto" url = "http://127.10.10.10:5030/inventory/crear" metodo="POST"/>            

    </div>
   )
}

