/* eslint-disable no-continue */
export const publicAccessHoursComponent = (obj, animalName) => {
  const divEl = document.createElement("div");
  divEl.id = "public-access-component";
  divEl.className = "animal-public-access";
  const titleEl = document.createElement("h3");
  titleEl.innerText = `More about ${animalName}'s owner`;
  const ulEl = document.createElement("ul");
  ulEl.className = "access-days-component";
  const liTitle = document.createElement("li");
  liTitle.innerText = "Public Access";
  liTitle.className = "li-public-access-hour";
  ulEl.appendChild(liTitle);
  for (const [key, values] of Object.entries(obj.publicAccess)) {
    if (!values.hours) {
      continue;
    }
    const liEl = document.createElement("li");
    liEl.id = `${key}-hours-access`;
    liEl.innerText = `${key} - ${values.hours}`;
    liEl.className = "access-day";
    ulEl.appendChild(liEl);
  }
  if (obj.website) {
    const liTitleWebsite = document.createElement("li");
    liTitleWebsite.innerText = "Website";
    liTitleWebsite.className = "li-webSite-hour";
    ulEl.appendChild(liTitleWebsite);
    const liWebsite = document.createElement("li");
    liWebsite.innerText = obj.website;
    ulEl.appendChild(liWebsite);
  }
  divEl.appendChild(titleEl);
  divEl.appendChild(ulEl);
  return divEl;
};
