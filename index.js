// MODAL...
var myModal = document.getElementById("myModal");
var myBtn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
const formId = document.getElementById("formId")

myBtn.onclick = function() {
  myModal.style.display = "flex";
  ;containerCardId.style.display = "none";
}

span.onclick = function() {
  myModal.style.display = "none";
  containerCardId.style.display = "flex";
}

window.onclick = function(event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
    containerCardId.style.display = "flex";
  }
}

// FUNCION PARA MOSTRAR DATOS...
// function getPerson() {
//   let containerCardId = document.getElementById("containerCardId");
//   const Person = JSON.parse(localStorage.getItem("person"));

//   var html = ""
//   if (Person !== null) {
//     for (let i = 0; i < Person.length; i++) {
//       html = `
//         <div class="cardDiv" id="${Person[i].nameObj}" >
  
//           <div class="card">
//             <img class="cardImg" src="${Person[i].imgUrl}" alt="link de la foto..." style="width:100%">
//           </div>
  
//           <div class="backCard">
//           <h2>Información</h2>
  
//           <label class="backCardResult" for="">
//             <strong>Nombre:</strong>
//             <span>${Person[i].nameObj}</span>
//           </label>
//           <label class="backCardResult" for="">
//             <strong>Edad:</strong>
//             <span>${Person[i].age}</span>
//           </label>
//           <label class="backCardResult" for="">
//             <strong>Sexo:</strong>
//             <span>${Person[i].gene}</span>
//           </label>
//           <label class="backCardResult" for="">
//             <strong>Nacionalidad:</strong>
//             <span>${Person[i].nac}</span>
//           </label>
//           <label class="backCardResult" for="">
//             <strong>Profesion:</strong>
//             <span>${Person[i].selectCat}</span>
//           </label>
//           <button class="btnEliminar" id="btnDelete" >Eliminar</button>
//         </div>`;
      
//       containerCardId.innerHTML += html;
//     }
//   }else{
//     containerCardId.innerHTML = "<h2>HOLA, POR FAVOR AGREGUE A SU PERSONAJE FAVORITO....</h2>"
//   }
// }

// PRESENTANDO LOS DATOS...
// getPerson()

// AQUI PONDREMOS LAS OPCIONES DEL FORMULARIO.

function addPerson(personValue) {
  if (localStorage.getItem("person") === null) {
    let per = [];
    per.push(personValue)

    localStorage.setItem("person", JSON.stringify(per));

  }else{
    let per = JSON.parse(localStorage.getItem("person"));
    per.push(personValue);
    localStorage.setItem("person", JSON.stringify(per));
  }
}

formId.addEventListener('submit', ()=> {
  const Person = {
    nameObj: document.getElementById("nameObj").value,
    age: document.getElementById("age").value,
    gene: document.getElementById("gene").value,
    nac: document.getElementById("nac").value,
    imgUrl: document.getElementById("imgUrl").value,
    selectCat: document.getElementById("selectCat").value
  };

  addPerson(Person)
  
  myModal.style.display = "none";
  containerCardId.style.display = "flex";
  
});

// FUNCION PARA BORRAR LOS DATOS...

let containerCardId = document.getElementById("containerCardId");
containerCardId.addEventListener('click', (e)=>{
  // console.log(e.target)
  if (e.target.id === "btnDelete") {
    if (confirm("¿Seguro que deseas 'Eliminar a esta persona'?")) {
      const newArray = e.target.parentElement.parentElement.id;
      const local = JSON.parse(localStorage.getItem("person"));
      
      if(e.target.id === "btnDelete"){
        for (let i = 0; i < newArray.length; i++) {
          
          if (local[i].nameObj === newArray || e.target.id === "btnDelete") {
            console.log(local[i]);
            var resultado = local.filter(p => p.nameObj != newArray);
            // console.log(resultado);
  
            localStorage.setItem("person", JSON.stringify(resultado))
            location.reload();
          }
        }
      }
    } else {
      console.log(" Eliminada...");
    }
  }
});

// FILTRAR POR EL INPUT
function searchPerson() {

  // Declare variables
  var filter, span, txtValue = '';
  var searchInput = document.getElementById("searchInput");
  filter = searchInput.value.toUpperCase();
  var containerCardId = document.getElementById("containerCardId");
  var cardDiv = containerCardId.getElementsByClassName('cardDiv');

  for (var i = 0; i < cardDiv.length; i++) {
    span = cardDiv[i].getElementsByTagName("span")[0];
    txtValue = span.textContent || span.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      cardDiv[i].style.display = "";
    } else {
      cardDiv[i].style.display = "none";
    }
  }
}

// PAGINACION....

//const plantillaArticulo = document.querySelector("#plantilla-articulo").content.firstElementChild;

const containerCardIdPage = document.getElementById("containerCardId");
const backButton = document.getElementById("backButton");
const infoPage = document.getElementById("infoPage");
const nextButton = document.getElementById("nextButton");
const elementByPage = 6;
let currenPage = 1;
var personList = [];

// SIMULANDO UNA BASE DE DATOS...
const personDb = JSON.parse(localStorage.getItem("person"));

function nextPage() {
  currenPage = currenPage + 1;
  viewPages();
}

function backPage() {
  currenPage = currenPage - 1;
  viewPages();
}

function GetPage(page = 1) {
  const cutPageStart = (page - 1) * elementByPage;
  const finalCut = cutPageStart + elementByPage;
  
  const Person = JSON.parse(localStorage.getItem("person"));
  
  var html = ""
  if (Person !== null) {
    for (let i = 0; i < Person.length; i++) {
      html = `
        <div class="cardDiv" id="${Person[i].nameObj}" >
  
          <div class="card">
            <img class="cardImg" src="${Person[i].imgUrl}" alt="link de la foto..." style="width:100%">
          </div>
  
          <div class="backCard">
          <h2>Información</h2>
  
          <label class="backCardResult" for="">
            <strong>Nombre:</strong>
            <span>${Person[i].nameObj}</span>
          </label>
          <label class="backCardResult" for="">
            <strong>Edad:</strong>
            <span>${Person[i].age}</span>
          </label>
          <label class="backCardResult" for="">
            <strong>Sexo:</strong>
            <span>${Person[i].gene}</span>
          </label>
          <label class="backCardResult" for="">
            <strong>Nacionalidad:</strong>
            <span>${Person[i].nac}</span>
          </label>
          <label class="backCardResult" for="">
            <strong>Profesion:</strong>
            <span>${Person[i].selectCat}</span>
          </label>
          <button class="btnEliminar" id="btnDelete" >Eliminar</button>
          </div>`;
          
          // containerCardId.innerHTML += html;
          personList.push(html);
        }
        return personList.slice(cutPageStart, finalCut);
  }else{
    containerCardId.innerHTML = "<h2>HOLA, POR FAVOR AGREGUE A SU PERSONAJE FAVORITO....</h2>"
  }
}

function getTotalPage() {
  return Math.ceil(personDb.length / elementByPage);
}

function buttonWorking() {
  if (currenPage === 1) {
    backButton.setAttribute("disabled", true);
  }else{
    backButton.removeAttribute("disabled");
  }

  if (currenPage === getTotalPage()) {
    nextButton.setAttribute("disabled", true);
  }else{
    nextButton.removeAttribute("disabled");
  }
}

function viewPages() {
  containerCardIdPage.innerHTML = "";
  const cutterData = GetPage(currenPage);
  buttonWorking();
  infoPage.textContent = `${currenPage}/${getTotalPage()}`;
  cutterData.forEach(data => {
    containerCardId.innerHTML += data;
    // containerCardId.appendChild(data);
  })
}

backButton.addEventListener('click', backPage);
nextButton.addEventListener('click', nextPage);

// console.log(GetPage());
viewPages();

// VALIDACION DE LOS INPUT
// SOLO LETRAS
function soloLetras(e) {
  var key = e.keyCode || e.which,
    tecla = String.fromCharCode(key).toLowerCase(),
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
    especiales = [8, 37, 39, 46],
    tecla_especial = false;

  for (var i in especiales) {
    if (key == especiales[i]) {
      tecla_especial = true;
      break;
    }
  }

  if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
  }
}

// SOLO NUMEROS
function SoloNumeros(event) {
  if ((event.keyCode < 48) || (event.keyCode > 57)) 
   event.returnValue = false;
}