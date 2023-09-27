import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import handleSubmit from "../../services/peticionFetch.js";
// eslint-disable-next-line react/prop-types
function Inventory({hidden, url, titule, metodo}){

    return(

        <form className="flex flex-col justify-center items-center px-8 pt-6 pb-8"
        onSubmit={(event) => handleSubmit(event, url, metodo)}>
            <h1 className="text-4xl font-extrabold text-center mb-6">
                {titule}
            </h1>

            {hidden ? 
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
                 : null}
            <Input
            isRequired
            type="number"
            name="id_product"
            min="0"
            label="Id Product"
            className="max-w-xs mb-4"
            placeholder="123"
            variant="bordered"
            />
            <Input
            isRequired
            type="number"
            min="0"
            name="quantity_inventory"
            label="Quantity inventory"
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
            <SelectItem key="In stock" value="In stock">
                In stock
            </SelectItem>
            <SelectItem key="Out of stock" value="Out of stock">
                Out of stock
            </SelectItem>
            </Select>
            <Input
            isRequired
            type="date"
            name="entryDate_inventory"
            label="Date inventory"
            className="max-w-xs mb-4"
            variant="bordered"
            />
            <Input
            isRequired
            type="text"
            name="supplier_inventory"
            label="Supplier inventory"
            className="max-w-xs mb-4"
            placeholder="Name Example"
            variant="bordered"
            />
            <Button color="primary" variant="shadow" type="submit">
            Save
            </Button>

        </form>
        
    )
}


export default Inventory;