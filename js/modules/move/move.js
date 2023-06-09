import { getSize } from "./get-size/get-size.js";
import { position } from "./position-btn/position-btn.js";

export const move = () => {
    const btn = document.querySelector(".move");
    const size = getSize();

    const {width} = size[0];
    const {height} = size[1];

    const generationRandom = () => {
        const bottom = Math.floor(Math.random() * parseInt(height - 100));
        const left = Math.floor(Math.random() * parseInt(width - 200));
        position(btn, bottom, left)
    };

    return generationRandom();
};