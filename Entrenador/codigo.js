// Peticion HTTP GET para traer los datos
axios.get('http://127.0.0.1:8000/api/horario/') //URL a la que vamos a hacer la peticion
    .then(function (response){        //Recibimos la respuesta del BackEnd
        if(response.status==200){     //Si la solicutud ha tenido exito ejecute lo siguiente
            // 
            let data = response.data; // De la respuesta del BackEnd Solo queremos los datos entonces usamos response.data
            //Lo recorremos con un For
            for (let i = 0; i < data.length; i++ ) {
              // Guardamos cada recorrido 
            datosApiN = `${'ID de la clase:'} ${data[i].id} ${'Clase de:'} ${data[i].nombre} ${'Dia:'} ${data[i].dia} ${'Hora Inicio:'} ${data[i].hora_inicio} ${'Hora Fin:'} ${data[i].hora_fin}`;
            //Creamos un elemento div con document.createElement
                let Newdiv = document.createElement("div");
                //Creamos un nodo de texto con el contenido de la variable datosApiN
                NewContent = document.createTextNode(datosApiN);
                //Le insertamos el contenido al div
                Newdiv.appendChild(NewContent);
                //Le agregamos una clase para darle estilos 
                Newdiv.classList.add("div");
                //Lo insertamos antes del div que tiene un ID apis
                let divan = document.getElementById("apis")
                document.body.insertBefore(Newdiv, divan);
              //Probamos si trae los datos por consola
                console.log(data[i].id);
                console.log(data[i].nombre);
                console.log(data[i].dia);
                console.log(data[i].hora_inicio);
                console.log(data[i].hora_fin);
            
        }

        }
    })//Si no trae los datos atrapamos el error y lo mostramos por consola
    .catch(function (error){
    console.log(error)
    });


  //Crear una Nueva clase
  //Seleccionamos nuestro elemento con id Crear
    let crear = document.getElementById("Crear");
  //Creamos un evento de escucha
    crear.addEventListener("click", Crear);
    //Creamos la funcion crear que va a guardar los valores de cada prompt en una variable
    function Crear(){
      let nombreC = prompt("Ingrese El nombre de la clase");
      let diaC = prompt("Ingrese dia de la clase");
      let Hi = prompt("Hora de Inicio");
      let Hf = prompt("Hora Fin");
      //Peticion HTTP Post Para crear Clases
      axios.post('http://127.0.0.1:8000/api/horario/create', {
        //Hacemos referencia a los campos de mi base de datos y como valor lo adquirido en los prompt con su respectiva variable
          nombre: nombreC,
          dia: diaC,
          hora_inicio: Hi,
          hora_fin: Hf
        }).then(function (response) { //Accedemos a la respuesta 
          console.log(response.data); //Consultamos el valor por la consola
        })
        .catch(function (error) {  //Si lo anterior no funciona atrapamos el error y lo mostramos por consola
          console.log(error);
        });
    }

    //Peticion HTTP Delete para Eliminar Datos
    let borrar = document.getElementById("eliminar"); //Seleccionamos nuestro elemento con ID eliminar 
    borrar.addEventListener("click", Eliminar);       //Creamos un Evento de Escucha

        function Eliminar(){    //Creamos una Funcion para eliminar
          //En la variable id vamos a obtener el id del dato que se desea borrar
            let id = prompt("Ingrese el ID del dato a borrar")
            //Usamos la url de nuestra api para borrar y agregamos nuestra variable id Que contiene el id del dato a borrar
            axios.get(`http://127.0.0.1:8000/api/horario/${id}`, {
          })
          .then(function (response) { //Obtenemos la respuesta del BackEnd
            console.log(response.data); // Y la mostramos por consola
          })
          .catch(function (error) { // Si lo anterior no funciona atrapamos el error
            console.log(error); // Y lo mostramos por consola
          });
        }
        // Peticion HTTP GET para traer las Clases Apartadas 
        //Usamos la URL de nuestra api para traer todos los datos 
        axios.get('http://127.0.0.1:8000/api/apartar/')
        .then(function (response){  // Recibimos la respuesta del BackEnd
            if(response.status==200){ // Si la peticion se ejecuto correctamente Ejecutamos lo Siguiente
                // En la variable data vamos a almacenar los datos que trae el backend los cuales son response.data
                let data = response.data;
                //Recorremos data
                for (let i = 0; i < data.length; i++ ) {
                  //Almacenamos el contenido en una variable llamada datosApiN2
                datosApiN2 = `${'Nombre del usuario que reservo:'} ${data[i].nombre} ${'ID de la clase reservada:'} ${data[i].ID_Clase}`;
                //Luego Creamos un nuevo elemento con document.createElement
                    let Newdiv2 = document.createElement("div");
                    //Creamos un node de texto con la variable datosApiN2
                    NewContent2 = document.createTextNode(datosApiN2);
                    //Al nuevo elemento le insertamos newContent2 que almacena el contenido de la variable datosApiN2
                    Newdiv2.appendChild(NewContent2);
                    //Le agregamos una clase para darle los estilos
                    Newdiv2.classList.add("Apartado");
                    //Seleccionamos el elemento con ID a
                    let divan2 = document.getElementById("a")
                    //Y insertamos el nuevo elemento antes del elemento divan2
                    document.body.insertBefore(Newdiv2, divan2);
                    //Mostramos los datos por consola
                    console.log(data[i].id);
                    console.log(data[i].nombre);
                    console.log(data[i].ID_Clase);
                
            }
    
            }
        })
        .catch(function (error){ //Si lo anterior no funciona atrapamos el error 
        console.log(error)  // y lo mostramos por pantalla
        });
    
    
    
