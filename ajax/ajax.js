//   https://jsonplaceholder.typicode.com/users es una API Rest falsa para pruebas y prototipos

/*(() => {

/*   //1ºpaso crear variable como instancia de xhr
  const xhr = new XMLHttpRequest(),
  //variable referencia a dom
  $xhr = document.getElementById("xhr"),
  // fragmento del dom
  $fragment = document.createDocumentFragment();

  //console.log(xhr);

  //2º asiganar el evento y ejecutar un evento como addEventListener para escuchar
  xhr.addEventListener("readystatechange", (e) => {
    //muestra su estado
    //validaciones con los if
    if (xhr.readyState != 4){
        return;
    } 
    if (xhr.status >= 200 && xhr.status < 300) {  
        //console.log(xhr);
        console.log("éxito")
        console.log(xhr.responseText)
        //$xhr.innerHTML =xhr.responseText
        let json = JSON.parse(xhr.responseText)
        console.log(json)

        json.forEach(el => {
            const $li = document.createElement("li")
            $li.innerHTML = `${el.name}--${el.email}--${el.phone}`
            $fragment.appendChild($li)
        })

        $xhr.appendChild($fragment)
    }else{
        console.log("error")
        let message = xhr.statusText || "Ocurrió un error de url"
        $xhr.innerHTML = `Error ${xhr.status}:  ${message}`
    }
    console.log("Ese mensaje se cargará de cualquier manera")
  });

  // 3º abre la petición y con las respuestas verbos HTTP con GET
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  //xhr.open("GET", "/assets/ajax.json")

  //4º enviar la peticion
  xhr.send();
 */

/* **********     Curso JavaScript: 107. AJAX: API Fetch - #jonmircha     ********** */
/*
(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  //fetch("assets/users.json")
  fetch("https://jsonplaceholder.typicode.com/users")
    /* .then((res) => {
      console.log(res);
      return res.ok ? res.json() : Promise.reject(res);
    }) */
/*   .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      //console.log(json);
      //$fetch.innerHTML = json;
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      //console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $fetch.innerHTML = `Error ${err.status}: ${message}`;
    })
    .finally(() => {
      //console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch")
    });
})(); */

//* **********     Curso JavaScript: 108. AJAX: API Fetch + Async-Await - #jonmircha     ********** */
/*
;(() => {
  const $fetchAsync = document.getElementById('fetch-async'),
    $fragment = document.createDocumentFragment() //para hacer una sola iteracion

  // invoca a la solicitud
  async function getData () {
    try {
      //manejo de errores camino correcto
      let res = await fetch('https://jsonplaceholder.typicode.com/users'),
        json = await res.json()

      console.log(res, json);

      //if (!res.ok) throw new Error("Ocurrio un Error al solicitar los Datos");
      if (!res.ok) throw { status: res.status, statusText: res.statusText }

      json.forEach(el => {
        const $li = document.createElement('li')
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        $fragment.appendChild($li)
      })

      $fetchAsync.appendChild($fragment)

    } catch (err) {
      // captura de errores
      console.log(err);
      let message = err.statusText || 'Ocurrió un error'
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`

    } finally {
      //console.log("Esto se ejecutará independientemente del try... catch");
    }
  }

  getData()

})()
*/

/* **********     Curso JavaScript: 109. AJAX: Librería Axios - #jonmircha     ********** */
// basada en promesas
/* (() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment(); //insercion mediante el fragment

  axios //variable principal
    //.get("assets/users.json")
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res);
      let json = res.data;

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((err) => {
      console.log("Estamos en el catch", err.response);
      let message = err.response.statusText || "Ocurrió un error";
      $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
      console.log("Esto se ejecutará independientemente del resultado Axios");
    });
})();
 */

/* **********     Curso JavaScript: 110. AJAX: Librería Axios + Async-Await - #jonmircha     ********** */
(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = await res.data; //data es el objeto parseado

      // console.log(res, json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
        //console.log(err.response);
        let message = err.response.statusText || "Ocurrió un error";
        $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
        console.log("Esto se ejecutará independientemente del try... catch");
    }
  }

  getData();
})();
