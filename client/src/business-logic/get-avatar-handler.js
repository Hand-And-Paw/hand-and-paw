/** 
  @param -  Array of objects containing pictures of an animal.
  @returns - Name of the picture to be main profile picture.
 */

const getAvatarHandler = (array) => {
  const mainPicture = array.find(
    // needs to be equal to true, now set to false to work with one picture
    (item) => JSON.parse(item.isPrincipal) === false
  );

  return mainPicture;
};

export default getAvatarHandler;
