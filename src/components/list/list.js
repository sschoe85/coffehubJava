import espressoIcon from "../../assets/espresso.svg"
import cappucinoIcon from "../../assets/cappuccino.svg";
import latteIcon from "../../assets/macchiato.svg";
import macchiatoIcon from "../../assets/macchiato.svg";
import mocchaIcon from "../../assets/mocha.svg";
import { createElement, createCoffeelistElement } from "../../utils/elements";


export const createList = () =>{
    const fullWidth = createElement("div", {className: "fullWidth"});
    const uList = createElement("ul",{className: "list"});
          const espresso = createCoffeelistElement(espressoIcon, "espresso", "Espresso");
          const cappuccino = createCoffeelistElement(cappucinoIcon, "Cappucino", "Cappucino");
          const macchiato = createCoffeelistElement(macchiatoIcon, "Macchiato", "Macchiato");
          const moccha = createCoffeelistElement(mocchaIcon, "Moccha", "Moccha");
          const latte = createCoffeelistElement(latteIcon, "Latte", "Latte")
          fullWidth.append(uList);
          uList.append(espresso);
          espresso.after(cappuccino);
          cappuccino.after(macchiato);
          macchiato.after(moccha);
          moccha.after(latte);
            return fullWidth;
    

    
}

