import nav from "./nav";
//import { footer } from "./footer";
import makeButton from "./button";
import Image from "./webpacklogo.jpg"
import { makeColorStyle } from "./button-styles";
//import foo from "./foo.ts"
const getFooter = () => import("./footer")
const getLazyModule = () => import("./lazymodule")
console.log(
  nav(),
  makeButton("My first button!"),
  makeColorStyle("cyan")
);
const myButton  = makeButton("My first button!")
myButton.innerText = "1"

myButton.addEventListener("click", (event) => {
  const value = parseInt(event.target.innerText)
  if(value % 2 === 0) {
    getLazyModule().then((bundle) => {
      document.body.appendChild(bundle.default)
    })
    event.target.innerText = value + 1
    return
  }

  getFooter().then((bundle) => {
    document.body.appendChild(bundle.footer)
  })
  event.target.innerText = value + 1
}) 
//document.body.appendChild(footer)
const imageContainer = document.createElement("img")
imageContainer.src = Image
imageContainer.style.width = "100%";
document.body.appendChild(imageContainer)
document.body.appendChild(myButton)
