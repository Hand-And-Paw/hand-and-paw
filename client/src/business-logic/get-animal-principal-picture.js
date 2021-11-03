/** 
  @param -  Array of objects containing pictures of an animal.
  @returns - Name of the picture to be main profile picture, if there is no principal return the first image found.
 */

const getAnimalPrincipalPicture = (array) => {
  let mainPicture = array.find(
    (picture) => JSON.parse(picture.isPrincipal) === true
  );

  if (!mainPicture) {
    mainPicture = array.find(
      (picture) => JSON.parse(picture.isPrincipal) === false
    );
  }
  return mainPicture;
};

export default getAnimalPrincipalPicture;
