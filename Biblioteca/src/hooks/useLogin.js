import { useState, useMemo } from "react";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const validateEmail = (email) => email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const isInvalid = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  

  return {
    setEmail,
    isVisible,
    toggleVisibility,
    isInvalid,
  };
}
