import { sortMe, sortMe2, genero, hechizos } from './data.js';
import data from './data/harrypotter/data.js';
document.getElementById("btnsMenu").style.display = "none";
document.getElementById("charactersP").style.display = "none";
document.getElementById("pantallaPrincipal").style.display = "block";
document.getElementById("housesP").style.display = "none";
document.getElementById("novelsP").style.display = "none";
document.getElementById("potionsP").style.display = "none";
document.getElementById("spellsP").style.display = "none";
// al dar clic en el botón houses me debe mostrar la pagina de houses
document.querySelector("#houses").addEventListener("click", housesPage);
document.querySelector("#housesMenu").addEventListener("click", housesPage);
function housesPage() {
  document.getElementById("btnsMenu").style.display = "block";
  document.getElementById("housesP").style.display = "block";
  document.getElementById("pantallaPrincipal").style.display = "none";
  document.getElementById("charactersP").style.display = "none";
  document.getElementById("novelsP").style.display = "none";
  document.getElementById("potionsP").style.display = "none";
  document.getElementById("spellsP").style.display = "none";
}
// al dar clic en el botón characters me debe mostrar la pagina de characters
document.querySelector("#characters").addEventListener("click", charactersPage);
document.querySelector("#charactersMenu").addEventListener("click", charactersPage);
function charactersPage() {
  document.getElementById("btnsMenu").style.display = "block";
  document.getElementById("charactersP").style.display = "block";
  document.getElementById("pantallaPrincipal").style.display = "none";
  document.getElementById("housesP").style.display = "none";
  document.getElementById("novelsP").style.display = "none";
  document.getElementById("potionsP").style.display = "none";
  document.getElementById("spellsP").style.display = "none";
}
// al dar clic en el botón novels me debe mostrar la pagina de novels
document.querySelector("#novels").addEventListener("click", novelsPage);
document.querySelector("#novelsMenu").addEventListener("click", novelsPage);
function novelsPage() {
  document.getElementById("btnsMenu").style.display = "block";
  document.getElementById("novelsP").style.display = "block";
  document.getElementById("pantallaPrincipal").style.display = "none";
  document.getElementById("housesP").style.display = "none";
  document.getElementById("charactersP").style.display = "none";
  document.getElementById("potionsP").style.display = "none";
  document.getElementById("spellsP").style.display = "none";
}
// al dar clic en el botón potions me debe mostrar la pagina de potions
document.querySelector("#potions").addEventListener("click", potionsPage);
document.querySelector("#potionsMenu").addEventListener("click", potionsPage);
function potionsPage() {
  document.getElementById("btnsMenu").style.display = "block";
  document.getElementById("potionsP").style.display = "block";
  document.getElementById("pantallaPrincipal").style.display = "none";
  document.getElementById("housesP").style.display = "none";
  document.getElementById("charactersP").style.display = "none";
  document.getElementById("novelsP").style.display = "none";
  document.getElementById("spellsP").style.display = "none";
}
// al dar clic en el botón spells me debe mostrar la pagina de spells
document.querySelector("#spells").addEventListener("click", spellsPage);
document.querySelector("#spellsMenu").addEventListener("click", spellsPage);
function spellsPage() {
  document.getElementById("btnsMenu").style.display = "block";
  document.getElementById("spellsP").style.display = "block";
  document.getElementById("pantallaPrincipal").style.display = "none";
  document.getElementById("housesP").style.display = "none";
  document.getElementById("charactersP").style.display = "none";
  document.getElementById("novelsP").style.display = "none";
  document.getElementById("potionsP").style.display = "none";
}
//Función para traer información a pantalla (innerHTML hace el proceso de mostrar en pantalla)
const dataCharacters = data.characters
function paintData(dataCharacters) {
  let contentCharacters = ''

  for (let index = 0; index < dataCharacters.length; index++) {
    const element = `<div class="contenedor_personajes"> 
    <div class="name"> <p> <b>Name: </b>${dataCharacters[index].name}<p>
    <div> <p> <b> Birth: </b> ${dataCharacters[index].birth}<p> </div>
    <div> <p> <b> Death: </b>${dataCharacters[index].death}<p> </div>
    <div> <p> <b> Species: </b> ${dataCharacters[index].species}<p> </div>
    <div> <p> <b> Gender: </b>${dataCharacters[index].gender}<p> </div>
    <div> <p> <b> Patronus:</b>${dataCharacters[index].patronus}<p> </div>
    <div> <p> <b> House: </b>${dataCharacters[index].house}<p> </div>
    <div> <p> <b> Books: </b>${dataCharacters[index].books_featured_in}<p> </div></div></div>`;
    contentCharacters = contentCharacters + element;
  }
  return contentCharacters
}
document.getElementById("casilla_characters").innerHTML = paintData(dataCharacters)


//Filtro para ordenar el listado de A-Z
document.getElementById("filtro_ascendente").addEventListener("click", function () {
  const orderedArrayAZ = sortMe(dataCharacters)
  document.getElementById("casilla_characters").innerHTML = paintData(orderedArrayAZ)
})

//Filtro para ordenar el listado de Z-A
document.getElementById("filtro_descendente").addEventListener("click", function () {
  const orderedArrayZA = sortMe2(dataCharacters)
  document.getElementById("casilla_characters").innerHTML = paintData(orderedArrayZA)
})

//Filtro por genero -- Femenino/Females
document.getElementById("filtro_females").addEventListener("click", function () {
  const filtroFem = genero(data, "Female")
  document.getElementById("casilla_characters").innerHTML = paintData(filtroFem)
})

//Filtro por genero -- Masculino/Males
document.getElementById("filtro_males").addEventListener("click", function () {
  const filtroMasc = genero(data, "Male")
  document.getElementById("casilla_characters").innerHTML = paintData(filtroMasc)
})

//POTIONS

const dataPotions = data.potions
function paintDataPotions(dataPotions) {
  let contentPotions = ""
  for (let index = 0; index < dataPotions.length; index++) {
    const element2 = 
    ` 
    <table class="table">
      <thead class="thead_table">
      <tr>
        <th> Name </th>
        <th> Description </th> 
      </tr>
      </thead>
      <tr>
      <tbody class="tbody_table">
        <td class="name_table"> ${dataPotions[index].name} </td>
        <td class="description_table"> ${dataPotions[index].description} </td>
      
      </tr>
      </tbody>
    </table>`;
    contentPotions = contentPotions + element2;
  }
  return contentPotions
}
document.getElementById("casilla_potions").innerHTML = paintDataPotions(dataPotions)







//Función para traer información a pantalla HECHIZOS
const dataSpells = data.spells
function paintDataSpells(dataSpells) {
  let contentSpells = ''
  for (let index = 0; index < dataSpells.length; index++) {
    const element1 = `<div class="contenedor_spells">
     <div class="name_spells"> <p> <b>Name: </b>${dataSpells[index].name}<p>
     <div> <p> <b> Pronunciation : </b> ${dataSpells[index].pronunciation}<p> </div>
     <div> <p> <b> Spell Type: </b>${dataSpells[index].spell_type}<p> </div>
     <div> <p> <b> Description: </b> ${dataSpells[index].description}<p> </div>
     <div> <p> <b> Mention: </b>${dataSpells[index].mention}<p> </div>
     <div> <p> <b> Etymology: </b>${dataSpells[index].etymology}<p> </div> </div></div>`;
    contentSpells = contentSpells + element1;
  }
  return contentSpells
}
document.getElementById("casilla_spells").innerHTML = paintDataSpells(dataSpells)

//Filtro hechizo - Charm
document.getElementById("encantamiento").addEventListener("click", function () {
  const filtroCharm = hechizos(data, "Charm")
  document.getElementById("casilla_spells").innerHTML = paintDataSpells(filtroCharm)
})

//Filtro hechizo - Conjuration
document.getElementById("conjuracion").addEventListener("click", function () {
  const filtroConjuration = hechizos(data, "Conjuration")
  document.getElementById("casilla_spells").innerHTML = paintDataSpells(filtroConjuration)
})

//Filtro hechizo - Spell (deletrear)
document.getElementById("deletrear").addEventListener("click", function () {
  const filtroSpell = hechizos(data, "Spell")
  document.getElementById("casilla_spells").innerHTML = paintDataSpells(filtroSpell)
})
//Filtro hechizo - transfiguration
document.getElementById("transfiguracion").addEventListener("click", function () {
  const filtroTransfiguration = hechizos(data, "Transfiguration")
  document.getElementById("casilla_spells").innerHTML = paintDataSpells(filtroTransfiguration)
})

//Filtro hechizo - Vanishment
document.getElementById("desaparicion").addEventListener("click", function () {
  const filtroVanishment = hechizos(data, "Vanishment")
  document.getElementById("casilla_spells").innerHTML = paintDataSpells(filtroVanishment)
})
//Filtro hechizo - Hex
document.getElementById("maleficio").addEventListener("click", function () {
  const filtroHex = hechizos(data, "Hex")
  document.getElementById("casilla_spells").innerHTML = paintDataSpells(filtroHex)
})
//Filtro hechizo - Curse
document.getElementById("maldicion").addEventListener("click", function () {
  const filtroCurse = hechizos(data, "Curse")
  document.getElementById("casilla_spells").innerHTML = paintDataSpells(filtroCurse)
})
//Filtro hechizo - Transportation
document.getElementById("transportacion").addEventListener("click", function () {
  const filtroTransportation = hechizos(data, "Transportation")
  document.getElementById("casilla_spells").innerHTML = paintDataSpells(filtroTransportation)
})


//Función para traer información a pantalla NOVELS
const dataNovels = data.books
function paintDataNovels(dataNovels) {
  let contentNovels = ''
  for (let index = 0; index < dataNovels.length; index++) {
    const element = `<div class="contenedor_novels">
    <div class="title"> <p> <b>Titulo del Libro: </b>${dataNovels[index].title}<p>
    <div> <p> <b> Fecha de Lanzamiento: </b> ${dataNovels[index].releaseDay}<p> </div>
    <div> <p> <b> Autor: </b>${dataNovels[index].author}<p> </div>
    <div> <p> <b> Descripción: </b> ${dataNovels[index].description}<p> </div></div></div>`;
    contentNovels = contentNovels + element;
  }
  return contentNovels
}
document.getElementById("casilla_novels").innerHTML = paintDataNovels(dataNovels)

{/* <thead class= "thead_table">
<tbody class= "tbody_table"> */}