// Image Carousel

let carousel = document.getElementById("carousel");
let carouselIMG = document.getElementById("carouselIMG");

let images = [
    "Puppy1.jpg",
    "Puppy2.jpg",
    "Puppy3.jpg"
]
let images2 = [
    "Kitten1.jpg",
    "Kitten2.jpg",
    "Puppy3.jpg"
]
let images3 = [
    "QUokka1.jpg",
    "Quokka2.jpg",
    "Quokka3.jpg"
]
let counter = 0;

let imgChange = function(){
    counter++;
    if(carouselIMG.alt === "Pup1"){
        carouselIMG.src = images[1];
        carouselIMG.alt = "Pup2";
    }
    else if(carouselIMG.alt === "Pup2"){
        carouselIMG.src = images[2];
        carouselIMG.alt = "Pup3";
    }
    else if(carouselIMG.alt === "Pup3"){
        carouselIMG.src = images[0];
        carouselIMG.alt = "Pup1";
    }
}

let imgChange = function(){
    counter++;
    if(carouselIMG.alt === "Kit1"){
        carouselIMG.src = images2[1];
        carouselIMG.alt = "Kit2";
    }
    else if(carouselIMG.alt === "Kit2"){
        carouselIMG.src = images2[2];
        carouselIMG.alt = "Kit3";
    }
    else if(carouselIMG.alt === "Kit3"){
        carouselIMG.src = images2[0];
        carouselIMG.alt = "Kit1";
    }
}

let imgChange = function(){
    counter++;
    if(carouselIMG.alt === "Quok1"){
        carouselIMG.src = images3[1];
        carouselIMG.alt = "Quok2";
    }
    else if(carouselIMG.alt === "Quok2"){
        carouselIMG.src = images3[2];
        carouselIMG.alt = "Quok3";
    }
    else if(carouselIMG.alt === "Quok3"){
        carouselIMG.src = images3[0];
        carouselIMG.alt = "Quok1";
    }
}

window.addEventListener("load", function(){
    setInterval(imgChange, 3000);
})
// Drop Down Menu

let catSelect = document.getElementById("category");
let subSelect = document.getElementById("subcategory");

let categoryUpdate = function(){
    let foodSubcats = ["Bread", "Flour", "Sugar"];
    let animalSubcats = ["Puppies", "Kittens", "Quokkas"];
    subSelect.innerHTML = "";

    if(catSelect.value === "food"){
        console.log("food");
        foodSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
    else if(catSelect.value === "animal"){
        console.log("animals");
        animalSubcats.forEach(function(elem){
            let opt = document.createElement("option");
            opt.value = elem;
            opt.innerText = elem;
            subSelect.appendChild(opt);
        })
    }
}

catSelect.addEventListener("change", categoryUpdate);