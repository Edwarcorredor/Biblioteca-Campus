
import {Image} from "@nextui-org/react";
import '../../index.css';
function ProductUser ({photo, name}){
    return (
        <div className="m-8">
            <Image
            width={200}
            alt={name}
            src={photo}
            onClick={()=> alert("Tocado")}
        />
        </div>
        
    )
}

export default ProductUser;