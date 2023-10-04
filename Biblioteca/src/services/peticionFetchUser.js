import Cookies from 'js-cookie';

const handleSubmit = (event, url, navigate) => {
    event.preventDefault();
    event.reset();
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
        if(responseData.JWT){
          // Guardar un token de autenticación en una cookie
          const authToken = responseData.JWT;
          const role = responseData.role;
          Cookies.set('authToken', authToken, { expires: 1 });
          Cookies.set('role', role, { expires: 1 }); // 'authToken' es el nombre de la cookie
          if(role == "admin"){
            return  navigate("/admin"); 
          }
        return navigate("/user"); 
        }
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

export default handleSubmit;