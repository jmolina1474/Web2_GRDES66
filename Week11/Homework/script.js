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
        "Kitten3.jpg"
    ]

let images3 = [
        "Quokka1.jpg",
        "Quokka2.jpg",
        "Quokka3.jpg"
    ]

let counter = 0;


let imgChange = function(){
        counter++;
        if(counter === 3) {counter = 0}
        carouselIMG.src = images[counter];
        if(subSelect.value === "Kittens"){
            carouselIMG.src = images2[counter];
        }
        else if(subSelect.value === "Puppies"){
            carouselIMG.src = images[counter];
        }
        else if(subSelect.value === "Quokkas"){
            carouselIMG.src = images3[counter];
        }
    }

window.addEventListener("load", function(){
        categoryUpdate();
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
subSelect.addEventListener("change", function(){
    counter = 0;
})