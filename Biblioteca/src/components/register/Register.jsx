import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "../login/EyeFilledIcon.jsx";
import { EyeSlashFilledIcon } from "../login/EyeSlashFilledIcon.jsx";
import { useState } from "react";

export default function Register() {

  const [isVisible, setIsVisible] = useState(false);


  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = Object.fromEntries(new window.FormData(event.target));
    console.log(query);
  };

  return (
    <form
      className="flex flex-col justify-center items-center shadow-md rounded px-8 pt-6 pb-8"
      onSubmit={handleSubmit}
    >
      <h1 className="text-4xl font-extrabold text-center mb-6">
        Register User
      </h1>

        <Input
            isRequired
            type="text"
            label="Name"
            className="max-w-xs mb-4"
            placeholder="Name Example"
            variant="bordered"
        />    
        <Input
            isRequired
            type="number"
            label="Phone"
            className="max-w-xs mb-4"
            placeholder="123456789"
            variant="bordered"
            min="0"
        />
        <Input
            isRequired
            type="text"
            label="Address"
            className="max-w-xs mb-4"
            placeholder="Cra 123 #45-67"
            variant="bordered"
        />
        <Input
            isRequired
            type="number"
            label="DNI"
            className="max-w-xs mb-4"
            placeholder="123456789"
            variant="bordered"
            min="0"
        /> 
        <Input
            isRequired
            type="email"
            label="Email"
            className="max-w-xs mb-4"
            placeholder="Email@example.com"
            variant="bordered"
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
