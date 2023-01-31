export const genero = (data,gender) => {
  const datosGenero = data.characters.filter(characters => (characters.gender === gender));
  return datosGenero
}
export function sortMe(data) {
  const dataOrdenadaAZ = data.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if(nameA < nameB){
      return -1;
    }
    if(nameA > nameB){
      return 1;
    }
    return 0;
  });
  return dataOrdenadaAZ
}
export function sortMe2(data) {
  const dataOrdenadaZA = data.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if(nameA < nameB){
      return 1;
    }
    if(nameA > nameB){
      return -1;
    }
    return 0;
  });
  return dataOrdenadaZA
}


// Filtro para página hechizos
export const hechizos = (data,spell_type) => {
  const datosSpells = data.spells.filter(spells => (spells.spell_type === spell_type));
  return datosSpells
   }