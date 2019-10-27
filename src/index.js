// index.js
import _ from "lodash";
import "../scss/style.scss";
import "../scss/base.scss";

function component() {
  const dragon = document.createElement("div");

  /* lodash is required for the next line to work */
  dragon.innerHTML = _.join(["Hello", "webpack"], " ");

  return dragon;
}

document.body.appendChild(component());
