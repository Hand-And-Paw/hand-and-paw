/** 
  @param -  Array of objects containing pictures of an animal.
  @returns - Name of the picture to be main profile picture.
 */

const getAvatarHandler = (array) => {
  const mainPicture = array.find(
    (item) => JSON.parse(item.isPrincipal) === true
  );

  return mainPicture;
};

export default getAvatarHandler;
