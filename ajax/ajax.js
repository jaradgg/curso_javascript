//   https://jsonplaceholder.typicode.com/users es una API Rest falsa para pruebas y prototipos

(() => {
  //1ºpaso crear variable como instancia de xhr
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
})();
