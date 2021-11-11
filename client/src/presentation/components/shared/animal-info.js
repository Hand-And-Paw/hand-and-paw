/**
 * @param {object} animal object with information about 1 animal
 * @param {string} className info div class name
 * @returns div with animal's brief info
 */

const animalInfo = (animal, className) => {
  const { type, breed, gender, character, age, location } = animal;
  const info = document.createElement("div");
  info.className = className;
  info.innerHTML = `
    
    <div class="animal-name"> <h3>${animal.name}</h3> </div> <br>
    Type: <span> ${type} </span> <br>
    Breed: <span> ${breed} </span> <br>
    Gender: <span> ${gender}</span><br>
    Character: <span>${character}</span><br>
    Age: <span> ${age} </span><br>
    Location: <span> ${location}</span> <br>
    `;
  return info;
};

export default animalInfo;
