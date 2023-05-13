export const btnYes = () => {
    const btn_yes = document.querySelector(".btn_yes");

    const event = () => {
        const img = document.querySelector("img");
            img.style.display = "block";
            img.style.animation = "open 2s linear";
        setTimeout(() => {
            img.style.width = "100%";
            img.style.height = "100vh" ;
        }, 1900);
    };
    
    return btn_yes.addEventListener("click", event);
};