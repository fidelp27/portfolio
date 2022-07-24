import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

const postData = (uriApi, data) => {
  const response = fetch(uriApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
};

const data = {
  title: 'Producto Fidel',
  price: 1000,
  description: 'un poco de esto, un poco de aquello',
  categoryId: 1,
  images: [
    'https://cdn.pixabay.com/photo/2016/11/29/04/31/caffeine-1867326_960_720.jpg',
  ],
};

postData(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
