export const position = (btn, bottom, left) => {
    
    const positionBtn = (btn, bottom, left) => {
        btn.style.position = "absolute";
        btn.style.transition = "all .07s ease";
        btn.style.bottom = `${bottom}px`;
        btn.style.left = `${left}px`;
    };

    return positionBtn(btn, bottom, left);
};