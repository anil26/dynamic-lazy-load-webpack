import { red, blue } from "./button-styles"
import "./footer.css"
import "./button.css"
//import css from "./footer.css"
//console.log("css", css)
const top = document.createElement("div")
top.innerText = "Top it is"
top.style=red;
const bottom = document.createElement("div")
bottom.innerText = "Bottom it is"
bottom.style = blue
const footer = document.createElement("div")
footer.id="footer"
footer.innerText = "Myself footer"
footer.appendChild(top)
footer.appendChild(bottom)
export { top, bottom, footer };
