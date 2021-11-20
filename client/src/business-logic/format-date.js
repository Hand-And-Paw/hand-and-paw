export const formatDate = (animalDate) => {
  const transformAnimalDate = new Date(animalDate);
  const transformDateArray = transformAnimalDate.toDateString().split(" ");
  return `${transformDateArray[2]} ${transformDateArray[1]} ${transformDateArray[3]} `;
};
