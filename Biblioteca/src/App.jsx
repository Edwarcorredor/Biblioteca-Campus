import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
//import Inventory from './components/inventory/Inventory.jsx'
import Product from './components/product/Product.jsx';
import Loan from './components/loan/Loan.jsx';
import './index.css'

export default function App(){
   return (
    <div className="flex justify-center items-center h-screen">
            
          <Loan hidden titule="Crear Prestamo" url="http://127.10.10.10:5030/loan/actualizar" metodo= "PUT"/>        

    </div>
   )
}

