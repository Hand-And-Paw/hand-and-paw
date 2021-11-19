/**
 * @param {object} Animal object with information about 1 animal.
 * @param {string} ClassName info div class name.
 * @returns A div with animal's brief info.
 */

const animalInfo = (animal, className) => {
  const { type, breed, gender, character, age, location, province } = animal;
  const info = document.createElement("div");
  info.className = className;

  info.innerHTML = `
    
    <div class="animal-name"> <h3>${animal.name}</h3> </div> <br>
    Type: <span>${type}</span> <br>
    Breed: <span>${breed}</span> <br>
    Gender: <span>${gender}</span><br>
    Character: <span>${character}</span><br>
    Age: <span>${age === 0 ? "less than 1 year" : age}</span><br>
    City: <span>${location}</span> <br>
    Province: <span>${
      province
        ? [...province][0].toUpperCase() + [...province].slice(1).join("")
        : ""
    }</span> <br>
    `;
  return info;
};
export default animalInfo;
