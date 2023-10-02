import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon.jsx";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon.jsx";
import  useLogin  from "../../hooks/useLogin.js";
import handleSubmit from "../../services/peticionFetchUser.js";


// eslint-disable-next-line react/prop-types
export default function Login({url}) {
    const {
      setEmail,
      isVisible,
      toggleVisibility,
      isInvalid,
    } = useLogin();
  
    

  return (
    <form
      className="flex flex-col justify-center items-center h-screen"
      onSubmit={(event) => handleSubmit(event, url)}
    >
      <h1 className="text-4xl font-extrabold text-center mb-6">
        Login User
      </h1>

      <Input
        key="email"
        name="email"
        type="email"
        label="Email"
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
