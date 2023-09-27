import Cookies from 'js-cookie';

const handleSubmit = (event, url) => {
    event.preventDefault();
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
          Cookies.set('authToken', authToken, { expires: 1 }); // 'authToken' es el nombre de la cookie
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

export default handleSubmit;