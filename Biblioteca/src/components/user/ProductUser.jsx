
import {Image} from "@nextui-org/react";
import '../../index.css';
// eslint-disable-next-line react/prop-types
function ProductUser ({photo, name}){
    return (
        <div className="m-8">
            <Image
            width={300}
            alt={name}
            src={photo}
            onClick={()=> alert("Tocado")}
        />
        </div>
        
    )
}

export default ProductUser;