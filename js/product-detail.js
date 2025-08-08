
function fetchProductData(id) {
  return axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then(response => {
      console.log("Products:", response.data);
      return response.data;
    })
    .catch(error => {
      console.error("Fetch error:", error);
      return null;
    });
}

/*function fetchSingleProduct(id) {
axios.get(`http://api.fakeapi.com/product/${id}`)	

}
*/



let params = new URLSearchParams(document.location.search);
const productid =  params.get("id");
console.log (productid)




fetchProductData (productid) 