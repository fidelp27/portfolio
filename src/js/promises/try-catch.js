import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// Va por los datos y transforma la respuesta en un json
async function fetchData(uriApi) {
  const response = await fetch(uriApi);
  const data = await response.json();
  return data;
}

// Se espera a que se ejecute el llamado a la api para traer los resultados solicitados
const anotherFn = async (uriApi) => {
  try {
    // efectúa los llamados a medida que se cumple cada etapa
    const products = await fetchData(`${uriApi}/products`);
    const product = await fetchData(`${uriApi}/products/${products[0].id}`);
    const category = await fetchData(
      `${uriApi}/categories/${product.category.id}`
    );
    console.log(product);
    console.log(product.title);
    console.log(category.name);
  } catch (error) {
    console.error(error);
  }
};

anotherFn(API);
