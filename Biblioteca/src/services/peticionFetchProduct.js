import Cookies from "js-cookie";
const handleSubmit = (event, setProducts, offset) => {
    event.preventDefault();
    const query = Object.fromEntries(new window.FormData(event.target));
    event.target.reset();
    const name_product = query.name_product;
    console.log(name_product);
    const url = `http://192.168.129.72:5210/inventory/list?name=${name_product}&offset=${offset}`
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + Cookies.get("authToken")
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        
        setProducts(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

export default handleSubmit;