export const addButton = (text) =>{
    const button=document.createElement('button');
    button.classList.add("btn"); // der Button hat jetzt die Klasse btn
    button.innerText = text;
    return button;

 }

 export const addClickEvent = (element) => {
     
    element.addEventListener("click", () => {
        alert("button was clicked!");
    })
    return element;
}