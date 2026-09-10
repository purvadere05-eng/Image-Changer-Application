let image = document.querySelector("#foodImage");
let imageTitle = document.querySelector("#imageTitle");

let foods = [
    {
        image: "Images/South Indian Thali.jpg",
        title: "South Indian Thali"
    },
    {
        image: "Images/gujrati thali.jpg",
        title: "Gujrati Thali"
    },
    {
        image: "Images/Karnataka thali.jpg",
        title: "Karnataka Thali"
    },
    {
        image: "Images/North Indian Thali.jpg",
        title: "North Indian Thali"
    },
    {
        image: "Images/panjabi thali.jpg",
        title: "panjabi Thali"
    },
    {
        image: "Images/Rajasthani Thali.jpg",
        title: " Rajasthani Thali"
    },

];

let index = 0;

image.addEventListener("mouseover", () => {

    index++;

    if (index >= foods.length) {
        index = 0;
    }

    image.src = foods[index].image;
    imageTitle.textContent = foods[index].title;

});
