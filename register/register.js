// Funcion que Optiene los datos del input y los envia a la base de datos atraves de una Peticion HTTP Post
//Creamos una funcion que tome los valores de los inputs con ID nombre, apellidos, correo y contraseña
const getData = function (){
    let nombre = document.getElementById('nombres').value;
    let apellido = document.getElementById('apellidos').value;
    let email = document.getElementById('correo').value;
    let password = document.getElementById('contraseña').value;

    //Creamos la peticcion http post para crear un nuevo usuario
    //Pasamos la URL que hace referencia a la peticion post en nuestra api
    axios.post('http://127.0.0.1:8000/api/usuarios',{ 
      //Hacemos referencia a los campos de la base de datos y el valor alamacena en las variables 
        name: nombre,
        apellido: apellido,
        email: email,
        password: password,
        rol: 'usuario' //Por defecto un nuevo usuario tiene el rol de usuario
    })
    .then(function (response) { //Esperamos la respuesta del BackEnd
    console.log(response.data); //Y la mostramos por pantalla
    })
    .catch(function (error) { // Si lo anterior no funciona capturamos el error 
    console.log(error); // Y lo mostramos por pantalla
    });

    
}
  //Creamos la peticion para obtener los datos 
  //Usamos la URL de nuestra api para traer los datos
axios.get('http://127.0.0.1:8000/api/usuarios', {
  })
  .then(function (response) { // Esperamos la respuesta del BackEnd
    console.log(response.data); // Y lo imprimimos por consola 
  })
  .catch(function (error) { //Si ocurre un error lo atrapamos 
    console.log(error); // Y lo imprimimos en consola
  });
