/* HTTP las respuestas se agrupan en 5 partes:
1- Respuestas informativas(100-199)
2- Respuestas sastifactorias(200-299)
3- Redirecciones(300-399)
4- Errores de clientes(400-499)
5- Errores de los servidores (500-599)

ReadyState
0- Es que aun no esta incializado.
1- Esta cargandose.
2- Se esta ejecutando.
3- Esta trabajando la solicitud.
4- Se completo.
*/

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const API = "https://api.escuelajs.co/api/v1";

//funcion principal que obtendrá la informacion del producto como un objeto
function fetchData(urlApi, callback) {
  //inicializar un objeto de tipo XMLHttpRequest
  let xhttp = new XMLHttpRequest();
  //El metodo .open realiza la petición de apertura de comunicación, el metodo puede ser 'GET' o 'POST', luego se envia la URL, si es asincrono (true o false), usuario y contraseña. En esta caso solo se utiliza el metodo, la url y async
  xhttp.open("GET", urlApi, true);
  //en este metodo Almacena el nombre de la función que se ejecutará cuando el objeto XMLHttpRequest cambie de estado
  xhttp.onreadystatechange = function (event) {
    //el atributo readyState define el estado del objeto XMLHttpRequest
    //0 No inicializado
    //1 Loading
    //2 ejecutado
    //3 interactuando
    //4 completado
    if (xhttp.readyState === 4) {
      //si la respuesta de la API es exitosa (200 Ok)
      if (xhttp.status === 200) {
        //se ejecuta el callback recibiendo como argumentos un objeto, como la respuesta de la API es un texto plano, el metodo JSON.parse tranformará este texto en un objeto.
        //El atributo devuelve un DOMString que contiene la  respuesta a la consulta como un texto o null si la consulta no tuvo exito o aun no ha sido completada.
        callback(null, JSON.parse(xhttp.responseText));
        //si la respuesta de la API no es exitosa se captura el error
      } else {
        const error = new Error("error" + urlApi);
        return callback(error, null);
      }
    }
  };
  // Envía la petición
  xhttp.send();
}

fetchData(`${API}/products`, function (error1, data1) {
  if (error1) {
    return console.error(error1);
  }
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(
      `${API}/categories/${data2?.category?.id}`,
      function (error3, data3) {
        if (error3) return console.error(error3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
      }
    );
  });
});
