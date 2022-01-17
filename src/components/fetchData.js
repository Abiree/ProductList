const axios = require('axios');
//fetch Products
export const fetchProducts = (callback) => {
    axios.get('https://fakestoreapi.com/products',)
      .then(function (response) {
       
        console.log(response.data)
        callback(response.data)
      })
      .catch(function (error) {
        alert(error);
      })
}
//fetch Category
export const fetchProductsCategory = (callback) => {
    axios.get('https://fakestoreapi.com/products/categories',)
      .then(function (response) {
       
        console.log(response.data)
        callback(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        alert(error);
      })
}