import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import handleSubmit from "../../services/peticionFetch.js";
// eslint-disable-next-line react/prop-types
function Loan({hidden, url, titule, metodo}){

    const status = [
        { label: "Active", value: "active" },
        { label: "Expired", value: "expired" },
        { label: "Returned", value: "returned" },
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
                    name="status_loan"
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
            type="number"
            name="id_user"
            label="Id User"
            className="max-w-xs mb-4"
            placeholder="123"
            variant="bordered"
            />
            <Input
            type="number"
            name="id_reservation"
            label="Id Reservation"
            className="max-w-xs mb-4"
            placeholder="123"
            variant="bordered"
            />
            <Input
            isRequired
            type="text"
            name="id_products"
            label="Id Products"
            className="max-w-xs mb-4"
            placeholder="1, 2, 3"
            variant="bordered"
            />
            <Input
            isRequired
            type="date"
            name="dateStart_loan"
            label="Date Start Loan"
            className="max-w-xs mb-4"
            variant="bordered"
            />
            <Input
            isRequired
            type="date"
            name="dateEnd_loan"
            label="Date End Loan"
            className="max-w-xs mb-4"
            variant="bordered"
            />
            <Button color="primary" variant="shadow" type="submit">
            Save
            </Button>

        </form>
        
    )
}


export default Loan;