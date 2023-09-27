//import Login from './components/login/Login.jsx';
//import Register from './components/register/Register.jsx';
import Inventory from './components/inventory/Inventory.jsx'
import './index.css'

export default function App(){
   return (
    <div className="flex justify-center items-center h-screen">
            
            <Inventory hidden titule= "Agregar Inventario" url = "http://127.10.10.10:5030/inventory/actualizar" metodo="PUT"/>  

    </div>
   )
}

