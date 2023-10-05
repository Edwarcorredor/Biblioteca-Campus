import { Input, Button } from "@nextui-org/react";
import handleSubmit from "../../services/peticionFetch";
// eslint-disable-next-line react/prop-types
function Reservation({ name_product, max, close}){

    return(
        <form className="flex flex-col justify-center items-center" onSubmit={(e) => {
            handleSubmit(e, "http://192.168.129.72:5210/reservation/create", "POST", close)
        }}>
            <Input
                isReadOnly
                type="text"
                name="name_product"
                className="max-w-xs mb-4"
                defaultValue={name_product}
            />     
            <Input
                isRequired
                type="date"
                name="date_reservation"
                label="Date Reservation"
                className="max-w-xs mb-4"
            />
            <Input
                isRequired
                type="number"
                name="quantity_loan"
                min="0"
                max={max}
                label="Quantity Product"
                className="max-w-xs mb-4"
            />
            <Button color="primary" variant="shadow" type="submit">
                Reserve
            </Button>
            
        </form>
    )
}

export default Reservation;