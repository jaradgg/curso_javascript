// nodo no es igual a una etiqueta de html
// cada nodo es un tipo de etiqueta
// usamos los nodos de tipo elemento y los tipo documento

console.log(document.getElementsByTagName("li"))
console.log(document.getElementsByClassName("card"))
console.log(document.getElementsByName("nombre"))
console.log(document.getElementById("menu"))
console.log(document.querySelectorAll("a"))
console.log(document.querySelectorAll("a").length)
document.querySelectorAll("a").forEach((e)=>console.log(e))
console.log(document.querySelectorAll("#menu li"))

// utilizamos estos selectores con el DOM

/* console.log(document.getElementById("menu"))// id
console.log(document.querySelector()) // para css
console.log(document.querySelectorAll("a")) 
console.log(document.querySelectorAll("a").length)
document.querySelectorAll("a").forEach((e)=>console.log(e))
console.log(document.querySelectorAll("#menu li")) */

// trabajar con los atributos de las etiquetas
// <a></a> tiene atributos como class="" href="" y atributos data-description=""
console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))

document.documentElement.lang="en"
document.documentElement.setAttribute("lang", "es_AR")

// guardamos en variables const con $<variable> de elementos del DOM
//const $linkDOM = document.querySelector(".link-dom")


//$linkDOM.setAttribute("target","_blank")
//$linkDOM1.setAttribute("href","https://youtube.com/jonmircha")

//$linkDOM para CSS
const $linkDOM1 = document.querySelector(".link-dom")
console.log($linkDOM1.style)
console.log($linkDOM1.getAttribute("style"))
