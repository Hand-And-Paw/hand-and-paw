/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
export const publicAccessComponent = () => {
  const mainContainer = document.createElement("div");
  mainContainer.id = "public-access";
  mainContainer.className = "public-access-style";
  const monday = containerDay("monday-class");
  monday.appendChild(createDay("checkbox", "monday-access", "monday"));
  monday.appendChild(createHour("text", "monday-hours", "8:00 - 18:00"));
  mainContainer.appendChild(monday);

  const tuesday = containerDay("day-class");
  tuesday.appendChild(createDay("checkbox", "tuesday-access", "tuesday"));
  tuesday.appendChild(createHour("text", "tuesday-hours", "8:00 - 18:00"));
  mainContainer.appendChild(tuesday);

  const wednesday = containerDay("wednesday-class");
  wednesday.appendChild(createDay("checkbox", "wednesday-access", "wednesday"));
  wednesday.appendChild(createHour("text", "wednesday-hours", "8:00 - 18:00"));
  mainContainer.appendChild(wednesday);

  const thursday = containerDay("thursday-class");
  thursday.appendChild(createDay("checkbox", "thursday-access", "thursday"));
  thursday.appendChild(createHour("text", "thursday-hours", "8:00 - 18:00"));
  mainContainer.appendChild(thursday);

  const friday = containerDay("friday-class");
  friday.appendChild(createDay("checkbox", "friday-access", "friday"));
  friday.appendChild(createHour("text", "friday-hours", "8:00 - 18:00"));
  mainContainer.appendChild(friday);

  const saturday = containerDay("saturday-class");
  saturday.appendChild(createDay("checkbox", "saturday-access", "saturday"));
  saturday.appendChild(createHour("text", "saturday-hours", "8:00 - 18:00"));
  mainContainer.appendChild(saturday);

  const sunday = containerDay("sunday-class");
  sunday.appendChild(createDay("checkbox", "sunday-access", "sunday"));
  sunday.appendChild(createHour("text", "sunday-hours", "8:00 - 18:00"));
  mainContainer.appendChild(sunday);

  return mainContainer;
};

function containerDay(id) {
  const containerEl = document.createElement("div");
  containerEl.className = "day-class";
  containerEl.id = id;
  return containerEl;
}

function createDay(type, name, day) {
  const dayEl = document.createElement("div");
  dayEl.className = `container-checkbox`;
  const checkbox = document.createElement("input");
  checkbox.type = type;
  checkbox.name = name;
  checkbox.id = `${day}-check`;
  checkbox.className = "check-class";
  dayEl.appendChild(checkbox);
  const label = document.createElement("label");
  label.htmlFor = `${day}-check`;
  label.innerHTML = day;
  dayEl.appendChild(label);

  return dayEl;
}
function createHour(type, name, hours) {
  const dayEl = document.createElement("input");
  dayEl.className = "hour-input";
  dayEl.type = type;
  dayEl.name = name;
  dayEl.placeholder = hours;
  return dayEl;
}
