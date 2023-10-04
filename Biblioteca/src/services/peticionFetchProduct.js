import Cookies from "js-cookie";
const handleSubmit = (event, setProducts) => {
    event.preventDefault();
    event.reset();
    const query = Object.fromEntries(new window.FormData(event.target));
    const name_product = query.name_product;
    const url = `http://127.10.10.10:5030/inventory/list?name=${name_product}`
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + Cookies.get("authToken")
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
        setProducts(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

export default handleSubmit;