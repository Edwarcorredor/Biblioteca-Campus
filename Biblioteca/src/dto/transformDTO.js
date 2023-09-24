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
        id_product: "productId",
        dateStart_loan: "startDate",
        dateEnd_loan: "endDate",
        status_loan: "status"
    },
    reservations:{
        id_user: "userId",
        id_product: "productId",
        date_reservation: "reservationDate",
        status_loan: "status" 
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
