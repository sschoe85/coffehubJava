import "./button.css";
import { addButton, addClickEvent } from "./button";
//import button from "./button.html";

export default { title: "Button" };
export const addToCart = () => {
    const button = addButton("Test");
    
    return addClickEvent(button); 
};
