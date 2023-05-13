export const getSize = () => {
    const main = document.querySelector("main");
    const size = [];

    const getWidth = window.getComputedStyle(main).width;
    const width =  getWidth.split("px");

    const getHeight = window.getComputedStyle(main).height;
    const height =  getHeight.split("px");
    

    size.push(
        {
            width : width[0]
        },
        {
            height:height[0]
        }
    );

    return size;
};