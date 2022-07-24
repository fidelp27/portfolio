import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

const putPost = (uriApi, id, price) => {
  const response = fetch(`${uriApi}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      price,
    }),
  });
  return response;
};

putPost(`${API}/products`, 211, 5000)
  .then((response) => response.json())
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
