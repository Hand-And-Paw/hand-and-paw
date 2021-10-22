/* @param - array of objects containing pictures of an animal
   @returns - name of the picture to be main profile picture
*/
const getAvatarHandler = (array) => {
  let mainPicture
  if (array.length === 0) {
    mainPicture = null
  } else {
    mainPicture = array
      .map((item) => (item.isPrincipal ? item.image : null))
      .filter((item) => item)[0]
  }
  return mainPicture
}

module.exports = getAvatarHandler
