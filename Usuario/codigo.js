// Uso de Axios Para Hacer la Peticion HTTP de GET
//URL de la ruta Api para hacer la peticion GET
axios.get('http://127.0.0.1:8000/api/horario/')
    .then(function (response){ // Esperamos la respuesta del BackEnd
        if(response.status==200){ //Si la peticion fue correcta Ejecutamos el siguiente codigo
            // de la respuesta (response) queremos la data (response.data) y la almacenamos en una variable 
            let data = response.data;
            //Ejecutamos un for para recorrer los datos
            for (let i = 0; i < data.length; i++ ) {
              //Almacenamos todos los datos en una variable llamada datosApiN
            datosApiN = `${'ID de la clase:'} ${data[i].id} ${'Clase de:'} ${data[i].nombre} ${'Dia:'} ${data[i].dia} ${'Hora Inicio:'} ${data[i].hora_inicio} ${'Hora Fin:'} ${data[i].hora_fin}`;
            //Creamos un nuevo elemento con document.createElement
                let Newdiv = document.createElement("div");
                //Creamos un nodo de texto y le damos el valor de datosApiN
                NewContent = document.createTextNode(datosApiN);
                //Y ahora al elemento creado le agregamos el NewContent
                Newdiv.appendChild(NewContent);
                //Ahora al div le agregamos una clase para darle estilos
                Newdiv.classList.add("div");
                // Seleccionamos el elemento con ID apis
                let divan = document.getElementById("apis")
                //Insertamos nuestro div antes del elemnto con variable divan
                document.body.insertBefore(Newdiv, divan);
              //Mostramos nuestro contenido por consola para probar si esto es correcto
                console.log(data[i].id);
                console.log(data[i].nombre);
                console.log(data[i].dia);
                console.log(data[i].hora_inicio);
                console.log(data[i].hora_fin);
            
        }

        }
    }) 
    .catch(function (error){ //En caso de que ocurra un error lo atrapamos 
    console.log(error) // Y lo mostramos por consola
    });


//Uso de Axios Para la Peticion HTTP GET de Apartar Clase      
    // URL de nuestra api para apartar clases 
    axios.get('http://127.0.0.1:8000/api/apartar/')
    .then(function (response){ //Respuesta del BackEnd
        if(response.status==200){ //Si la peticion se ejecuto correctamente ejecuta el siguiente codigo
            // almacenamos los datos que necesitamos de la respuesta (response.data)
            let data = response.data;
            //Usamos un for para recorrerlo 
            for (let i = 0; i < data.length; i++ ) {
            //Almacenamos los datos tratados en una variable
            datosApiN2 = `${'Id de la reserva:'} ${data[i].id} ${'Nombre:'} ${data[i].nombre} ${'ID de la clase reservada:'} ${data[i].ID_Clase}`;
            //Creamos un nuevo elemento document.createElement
                let Newdiv2 = document.createElement("div");
                //Creamos un nodo de texto y le agramos la variable datosApiN2
                NewContent2 = document.createTextNode(datosApiN2);
                //Al nuevo elemento le insertamos el nodo de texto
                Newdiv2.appendChild(NewContent2);
                //Al nuevo elemento le agregamos una clase para darle estilos
                Newdiv2.classList.add("Apartado");
                //Seleccionamos el elemento con ID x
                let divan2 = document.getElementById("x")
                //Insertamos el nuevo elemento antes del elemnto con el valor de divan2
                document.body.insertBefore(Newdiv2, divan2);
                //Mostramos los datos por consola
                console.log(data[i].id);
                console.log(data[i].nombre);
                console.log(data[i].ID_Clase);
            
        }

        }
    })
    .catch(function (error){ // Si lo anterior no se ejecuta atrapamos el error
    console.log(error) // Y lo imprimimos por consola
    });


  //Uso de Axios para la peticion HTTP POST Para crear la reserva de una clase
  //Obtenemos el elemento con ID Crear_C
    let Crear = document.getElementById("Crear_C");
  //Creamos un evento escucha
    Crear.addEventListener("click", crear);
  //Creamos una funcion 
    function crear(){
    //Almacenamos los datos pedidos por el prompt en la variable
    let nombreC = prompt("Ingrese Tu nombre");
    let idC = prompt("Ingresa el id de la clase que quieres agendar");

    //Usamos la ruta de la API para crear una reserva
    axios.post('http://127.0.0.1:8000/api/apartar/create', {
        //Hacemos referencia a los campos de la tabla y como valor lo capturado antes en la variable
        nombre: nombreC,
        ID_Clase: idC
      })
      .then(function (response) { // Esperamos la respuesta del BackEnd
        console.log(response.data); // Y la mostramos por consola
        if(response.status==200){ //Si la peticion se ejecuto correctamente ejecuta el siguiente codigo
          // almacenamos los datos que necesitamos de la respuesta (response.data)
          let data = response.data;
          //Usamos un for para recorrerlo 
          for (let i = 0; i < data.length; i++ ) {
          //Almacenamos los datos tratados en una variable
          datosApiN2 = `${'Id de la reserva:'} ${data[i].id} ${'Nombre:'} ${data[i].nombre} ${'ID de la clase reservada:'} ${data[i].ID_Clase}`;
          //Creamos un nuevo elemento document.createElement
              let Newdiv2 = document.createElement("div");
              //Creamos un nodo de texto y le agramos la variable datosApiN2
              NewContent2 = document.createTextNode(datosApiN2);
              //Al nuevo elemento le insertamos el nodo de texto
              Newdiv2.appendChild(NewContent2);
              //Al nuevo elemento le agregamos una clase para darle estilos
              Newdiv2.classList.add("Apartado");
              //Seleccionamos el elemento con ID x
              let divan2 = document.getElementById("x")
              //Insertamos el nuevo elemento antes del elemnto con el valor de divan2
              document.body.insertBefore(Newdiv2, divan2);
              //Mostramos los datos por consola
              console.log(data[i].id);
              console.log(data[i].nombre);
              console.log(data[i].ID_Clase);
          
      }

      }
      })
      .catch(function (error) { // Si ocurre un error lo capturamos 
        console.log(error); // Y lo mostramos por consola
      });
    }

    
   
// Uso de Axios para la Peticion HTTP delete para eliminar la reserva
      //Obtenemos el elemento con ID Eliminar_C
        let borrarC = document.getElementById("Eliminar_C");
        //Creamos un evento de escucha
        borrarC.addEventListener("click", Eliminar);
        //Creamos una funcion que guarde el id del dato a borrar
            function Eliminar(){
              //la variable id guarda el id de la reserva a eliminar
                let id = prompt("Ingrese el ID de la reserva a borrar")
                //Usamos nuestra ruta predefinida en nuestra API para borrar y le pasamos nuestra variable id
                axios.delete(`http://127.0.0.1:8000/api/apartar/${id}`, {
              })
              .then(function (response) { //Esperamos la respuesta del BackEnd
                console.log(response.data); // Y la mostramos por consola
              })
              .catch(function (error) { //Si ocurre un error lo capturamos 
                console.log(error); // Y lo mostramos por consola
              });
            }