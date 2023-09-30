const mapping = {
    users: {
        name_user: "name",
        email_user: "email",
        password_user: "password",
        phone_user: "phone",
        role_user: "role",
        DNI_user: "idNumber",
        address_user: "address"
    },
    loans: {
        id_user: "userId",
        id_products: "productsId",
        id_reservation: "reservationId",
        dateStart_loan: "startDate",
        dateEnd_loan: "endDate",
        status_loan: "status"
    },
    reservations:{
        id_user: "userId",
        id_product: "productId",
        date_reservation: "reservationDate",
        status_loan: "status",
        quantity_loan: "quantity"
    },
    inventory:{
        name_inventory: "name",
        serial_inventory: "serial",
        stock_inventory: "stock",
        description_product: "description",
        status_inventory: "status",
        entryDate_inventory: "entryDate",
        supplier_inventory: "supplier",
        quantity_inventory: "quantity",
        image_inventory: "image"
    },
    products: {
        name_product: "name",
        serial_product: "serial",
        price_product: "price",
        available_product: "available"
    }
}  
    

const funMapping = (validatedData, collection) => {
    // Realiza la transformación de nombres de campo
    const transformedData = {};
    for (const original in mapping[collection]) {
        const copy = mapping[collection][original];
        transformedData[copy] = validatedData[original];
    }
    return transformedData;
}


export default funMapping;
