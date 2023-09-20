import  { useState } from "react";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { EyeFilledIcon } from "../login/EyeFilledIcon.jsx";
import { EyeSlashFilledIcon } from "../login/EyeSlashFilledIcon.jsx";

export default function Register() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const roles = [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://127.10.10.10:5030/auth/register";
    const query = Object.fromEntries(new window.FormData(event.target));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
        name="name_user"
        label="Name"
        className="max-w-xs mb-4"
        placeholder="Name Example"
        variant="bordered"
      />
      <Input
        isRequired
        name="phone_user"
        type="number"
        label="Phone"
        className="max-w-xs mb-4"
        placeholder="123456789"
        variant="bordered"
        min="0"
      />
      <Input
        isRequired
        name="address_user"
        type="text"
        label="Address"
        className="max-w-xs mb-4"
        placeholder="Cra 123 #45-67"
        variant="bordered"
      />
      <Input
        isRequired
        name="DNI_user"
        type="number"
        label="DNI"
        className="max-w-xs mb-4"
        placeholder="123456789"
        variant="bordered"
        min="0"
      />
      <Select
        isRequired
        label="Role"
        name="role_user"
        placeholder="Select a role"
        variant="bordered"
        className="max-w-xs mb-4"
      >
        {roles.map((role) => (
          <SelectItem key={role.value} value={role.value}>
            {role.label}
          </SelectItem>
        ))}
      </Select>
      <Input
        isRequired
        name="email_user"
        type="email"
        label="Email"
        className="max-w-xs mb-4"
        placeholder="Email@example.com"
        variant="bordered"
      />
      <Input
        key="password"
        name="password_user"
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
        Register
      </Button>
    </form>
  );
}
