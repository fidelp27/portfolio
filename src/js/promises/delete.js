import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

const deletePost = (uriApi, id) => {
  const response = fetch(`${uriApi}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

deletePost(`${API}/products`, 3)
  .then((response) => response.json())
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

parent.getElementsByClassName;
