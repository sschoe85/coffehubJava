import espressoIcon from "../../assets/espresso.svg"
import rightArrow from "../../assets/right.svg";
import cappucinoIcon from "../../assets/cappuccino.svg";
import latteIcon from "../../assets/macchiato.svg";
import mocchaIcon from "../../assets/mocha.svg";
import { createElement, createCoffeelistElement } from "../../utils/elements";

export const createList = () =>{

    const coffeeList = () => {
        test = createCoffeelistElement(espressoIcon, "espresso", "Espresso");
        return test;
    }

    return coffeeList;
}