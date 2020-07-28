import {useEffect} from "@storybook/client-api";

export default{
    title: "Pages/Details",
    };

export const basic = () => {
    useEffect (()=>{
       const button= document.querySelector(".btn");
       button.addEventListener("click",()=>{
           button.innerHTML="neu!"
       } )
       
    });
    return "<button class='btn'>Hallo Fische</button>"; //quotes inside of quotes: Einmal double und einmal single quotes verwenden
};
/*const constNumber = 15;
const message = `Hello ${constNumber} fishes`; //backticks erlauben die Einbindung von externen Elementen in einen String
alert (message);*/