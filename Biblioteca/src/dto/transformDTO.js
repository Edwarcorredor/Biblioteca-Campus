const mapping = {
    user: {
        nombre_usuario: "nombre",
        email_usuario: "email",
        password_usuario: "password",
        telefono_usuario: "telefono",
        roles_usuario: "roles"
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
