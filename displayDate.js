const currentDayElement = document.querySelector("#current-date");
const currentTimeElement = document.querySelector("#current-time");

const displayDate = () => {
  const getdate = new Date();
  const currentDate = getdate.toLocaleDateString("sk-SK");
  const currentTime = getdate.toLocaleTimeString("sk-SK");
  currentDayElement.textContent = currentDate;
  currentTimeElement.textContent = currentTime;
};

export { displayDate };
