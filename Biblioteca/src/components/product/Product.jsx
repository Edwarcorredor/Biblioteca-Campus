import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import handleSubmit from "../../services/peticionFetch.js";
// eslint-disable-next-line react/prop-types
function Product({hidden, url, titule, metodo}){

    const status = [
        { label: "Available", value: true },
        { label: "Not available", value: false },
      ];

    return(

        <form className="flex flex-col justify-center items-center"
        onSubmit={(event) => handleSubmit(event, url, metodo)}>
            <h1 className="text-4xl font-extrabold text-center mb-6">
                {titule}
            </h1>

            {hidden ? 
                <div>
                    <Input
                    isRequired
                    type="number"
                    name="ID"
                    min="0"
                    label="Id"
                    className="max-w-xs mb-4"
                    placeholder="123"
                    variant="bordered"
                    />
                    <Select
                    isRequired
                    label="Status"
                    name="status_inventory"
                    placeholder="Select a status"
                    variant="bordered"
                    className="max-w-xs mb-4"
                    >
                    {status.map((statu) => (
                    <SelectItem key={statu.value} value={statu.value}>
                        {statu.label}
                    </SelectItem>
                    ))}
                    </Select>
                </div>
                
                 : null}
            <Input
            isRequired
            type="text"
            name="name_product"
            label="Name Product"
            className="max-w-xs mb-4"
            placeholder="Name example"
            variant="bordered"
            />
            <Input
            isRequired
            type="text"
            name="serial_product"
            label="Serial Product"
            className="max-w-xs mb-4"
            placeholder="123ABC456DEF"
            variant="bordered"
            />
            <Input
            isRequired
            type="number"
            min="1"
            name="price_product"
            label="Price Product"
            className="max-w-xs mb-4"
            placeholder="123"
            variant="bordered"
            />
            
        
            <Button color="primary" variant="shadow" type="submit">
            Save
            </Button>

        </form>
        
    )
}


export default Product;