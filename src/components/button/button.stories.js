import "./button.css";
//import button from "./button.html";

export default { title: "Button" };
const addButton = (text) =>{
    const button=document.createElement('button');
    button.classList.add("btn"); // der Button hat jetzt die Klasse btn
    button.innerText = text;
    return button;

 }

 const addClickEvent = (element) => {
     
     element.addEventListener("click", () => {
         alert("button was clicked!");
     })
     return element;
 }

export const addToCart = () => {
    const button = addButton("Test");
    
    return addClickEvent(button); //Storybook ruft hier document.body.append(button) auf
};
