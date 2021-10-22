import getAvatarHandler from '../../../handlers/get-avatar-handler.js'

export const animalCard = (animal, giver) => {
  const { type, breed, gender, character, dateBirth, pictures } = animal
  // create card
  const card = document.createElement('div')
  card.className = 'animal-card'
  // create photo div
  const photo = document.createElement('div')
  photo.className = 'card-photo'
  const img = document.createElement('img')
  img.src = `../../../public/animal-uploads/${getAvatarHandler(pictures)}`
  photo.appendChild(img)
  // create info div
  const info = document.createElement('div')
  info.className = 'card-info'
  info.innerHTML = `
  Name: <span> ${animal.name} </span> <br>
  Type: <span> ${type} </span> <br>
  Breed: <span> ${breed} </span> <br>
  Gender: <span> ${gender}</span><br>
  Character: <span>${character}</span><br>
  Date of Birth: <span> ${dateBirth} </span><br>
  Location: <span> ${giver.name},<br> ${giver.location}</span> <br>
  `
  // append divs
  card.appendChild(photo)
  card.appendChild(info)
  return card
}

module.exports = animalCard
