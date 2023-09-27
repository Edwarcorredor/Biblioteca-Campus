const mapping = {
    users: {
        ID: "_id",
        name_user: "name",
        email_user: "email",
        password_user: "password",
        phone_user: "phone",
        role_user: "role",
        DNI_user: "idNumber",
        address_user: "address"
    },
    loans: {
        ID: "_id",
        id_user: "userId",
        id_product: "productId",
        dateStart_loan: "startDate",
        dateEnd_loan: "endDate",
        status_loan: "status"
    },
    reservations:{
        ID: "_id",
        id_user: "userId",
        id_product: "productId",
        date_reservation: "reservationDate",
        status_loan: "status" 
    },
    inventory:{
        ID: "_id",
        id_product: "productId",
        quantity_inventory: "quantity",
        status_inventory: "status",
        entryDate_inventory: "entryDate",
        supplier_inventory: "supplier"
    },
    products: {
        ID: "_id",
        name_product: "name",
        description_product: "description",
        category_product: "category",
        price_product: "price",
        available_product: "available"
    }
}  
    

const funMapping = (validatedData, collection) => {
    // Realiza la transformación de nombres de campo
    const transformedData = {};
    Object.keys(validatedData).map((element) => {
        const copy = mapping[collection][element];
        transformedData[copy] = validatedData[element];
        return null; // Debes devolver algo dentro de la función de mapeo
    });
    return transformedData;
}


export default funMapping;
