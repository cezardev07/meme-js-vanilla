import { move } from "./modules/move/move.js";
import { btnYes } from "./modules/event-btn-yes/event-btn-yes.js";

export const App = () => {
    const btn = document.querySelector(".move");

    const clickBtnNot = () =>  move();
    btn.addEventListener("click", clickBtnNot);
    
    const moveBtnNot = () =>  move();
    btn.addEventListener("mouseenter", moveBtnNot);

    btnYes();
};