import "./quantitySelector.css";
import quantitySelector from "./quantitySelector.html";
import { useEffect } from "@storybook/client-api";

export default { title: "Quantity Selector" };

export const coffeeSelector = () => {
  useEffect(() => {
    const buttonMinus = document.querySelector(".btnMinus");
    const quantity = document.querySelector(".quantity");
    const buttonPlus = document.querySelector(".btnPlus");
    buttonMinus.addEventListener("click", () => {
      if (Number(quantity.innerHMTL) < 1) {
        buttonMinus.disabled = true;
      } else {
        quantity.innerHTML = Number(quantity.innerHTML) - 1;
      }
    });

    buttonPlus.addEventListener("click", () => {
      quantity.innerHTML = parseInt(quantity.innerHTML, 10) + 1;
      buttonMinus.disabled = false;
    });
  });

  return quantitySelector;
};
