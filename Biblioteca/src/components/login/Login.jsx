import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon.jsx";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon.jsx";
import  useLogin  from "../../hooks/useLogin.js";

export default function Login() {
  const {
    setEmail,
    isVisible,
    toggleVisibility,
    isInvalid,
  } = useLogin();

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://127.10.10.10:5030/auth/login"
    const query = Object.fromEntries(new window.FormData(event.target));
    fetch(url, {
      method: "POST", // Método HTTP POST
      headers: {
        "Content-Type": "application/json", // Tipo de contenido JSON
        // Otras cabeceras personalizadas si es necesario
      },
      body: JSON.stringify(query), // Los datos que deseas enviar en formato JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response);
        }
        return response.json(); // Si se espera una respuesta JSON
      })
      .then((responseData) => {
        // Manejar la respuesta exitosa aquí
        console.log(responseData);
      })
      .catch((error) => {
        // Manejar errores de red o respuestas no exitosas aquí
        console.error(...error);
      });
    
  };

  return (
    <form
      className="flex flex-col justify-center items-center shadow-md rounded px-8 pt-6 pb-8"
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl font-extrabold text-center mb-6">
        Login User
      </h1>

      <Input
        key="email"
        name="email"
        type="email"
        label="Email"
        variant="bordered"
        isInvalid={isInvalid}
        color={isInvalid ? "danger" : "success"}
        errorMessage={isInvalid && "Please enter a valid email"}
        onValueChange={setEmail}
        className="max-w-xs mb-4"
        isRequired
      />
      <Input
        key="password"
        name="password"
        label="Password"
        variant="bordered"
        isRequired
        placeholder="Enter your password"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className="max-w-xs mb-4"
      />
      <Button color="primary" variant="shadow" type="submit">
        Login
      </Button>
    </form>
  );
}
