import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ component: Component, role: Role, ...rest }) => {
    const navigate = useNavigate();
  
    useEffect(() => {
      const isAuthenticated = Cookies.get('authToken');
      const roleValid = Cookies.get('role');
  
      if (!isAuthenticated || roleValid !== Role) {
        navigate('/login');
        Cookies.remove('authToken');
        Cookies.remove('role');
      }
    }, [navigate, Role]);
  
    return <Component {...rest} />;
  };

export default ProtectedRoute;