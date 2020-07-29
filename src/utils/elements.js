import rightArrow from "../../assets/right.svg";

export const createElement = (tagName, props)=>{
    const element = document.createElement(tagName);
    Object.assign(element,props);
    return element;
    
}

export const createImage = (imageSrc, altText)=>{
    const image = createElement("img", {
        src: imageSrc,
        alt: altText,
      });
      return image;
}

export const createCoffeelistElement = (listImage, altText, listTag)=>{
    const coffeeListElement = createImage (listImage, altText);
    const coffeeListTag = createElement ("span", {
        innerText: listTag
    });
   const rightArrowImage = createImage (rightArrow, "right Arrow");
   coffeeListElement.append(coffeeListTag);
   coffeeListElement.append(rightArrowImage);

return coffeeListElement; 
}
