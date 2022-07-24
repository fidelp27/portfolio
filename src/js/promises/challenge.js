import fetch from 'node-fetch';
// se importa fetch para ejecutar en node porque fetch es nativo en navegadores únicamente
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (urlAPI) => {
  // fetch ya es una promesa, por eso no es necesario declarar el new Promise
  return fetch(urlAPI);
};

// todos los productos
// fetchData(`${API}/products`)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// todos los productos
fetchData(`${API}/products`)
  .then((response) => response.json())
  .then((products) => {
    // titulo del productos
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then((response) => response.json())
  .then((product) => {
    // categoria del producto
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then((response) => response.json())
  .then((category) => console.log(category.name))
  .catch((error) => console.log(error))
  .finally(() => console.log('Todo ejecutado'));
