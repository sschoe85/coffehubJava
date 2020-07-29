import rightArrow from "../assets/right.svg";

export const createElement = (tagName, props)=>{
    const element = document.createElement(tagName);
    Object.assign(element,props);
    return element;
    
}

export const createCoffeelistElement = (listImage, altText, listTag)=>{
    const li = createElement("li");
    const coffeeListElement = createElement("img", {
        src: listImage,
        alt: altText,
        className: "list-item-icon"
      });
    const coffeeListTag = createElement ("span", {
        innerText: listTag
    });
   const rightArrowImage = createElement("img", {
    src: rightArrow,
    alt: "Right Arrow",
    className: "list-item-more"
  });
   li.append(coffeeListElement);
   coffeeListElement.after(coffeeListTag);
   coffeeListTag.after(rightArrowImage);

return li; 
}

