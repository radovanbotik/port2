import { displayCat } from "./displayCat.js";
import { displayDate } from "./displayDate.js";
import { spotify } from "./spotify.js";
import { displayProjects } from "./displayProjects.js";

const init = () => {
  displayCat();
  spotify();
  setInterval(displayCat, 5000);
  setInterval(displayDate, 1000);
};

window.addEventListener("DOMContentLoaded", init);
