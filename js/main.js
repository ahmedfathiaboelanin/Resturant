// Slider random meals & popUp
let pop = document.querySelector(".popUp");
let popLayer =document.querySelector(".backLayer")
let slideMealName = document.querySelectorAll(".slideMealName");
let slideMealDiscreption = document.querySelectorAll(".slideMealDiscreption");
let slideMealBtn = document.querySelectorAll(".slideMealBtn");
let slideMealImg = document.querySelectorAll(".slideMealImg");
let fetchRandom1 = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(data => data.json()).then(result => {
        slideMealName[0].innerHTML = result.meals[0].strMeal;
        slideMealImg[0].src = result.meals[0].strMealThumb;
        slideMealBtn[0].addEventListener("click", () => {
            togglePop()
            pop.children[0].src = result.meals[0].strMealThumb;
            pop.children[2].href = result.meals[0].strYoutube;
            pop.children[1].innerHTML = result.meals[0].strInstructions;
        })
    });
}
let fetchRandom2 = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(data => data.json()).then(result => {
        slideMealName[1].innerHTML = result.meals[0].strMeal;
        slideMealImg[1].src = result.meals[0].strMealThumb;
         slideMealBtn[1].addEventListener("click", () => {
           togglePop();
           pop.children[0].src = result.meals[0].strMealThumb;
           pop.children[2].href = result.meals[0].strYoutube;
           pop.children[1].innerHTML = result.meals[0].strInstructions;
         });
    });
}
let fetchRandom3 = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(data => data.json()).then(result => {
        slideMealName[2].innerHTML = result.meals[0].strMeal;
        slideMealImg[2].src = result.meals[0].strMealThumb;
         slideMealBtn[2].addEventListener("click", () => {
           togglePop();
           pop.children[0].src = result.meals[0].strMealThumb;
           pop.children[2].href = result.meals[0].strYoutube;
           pop.children[1].innerHTML = result.meals[0].strInstructions;
         });
    });
}
fetchRandom1();
fetchRandom2();
fetchRandom3();
function togglePop() {
    pop.classList.toggle("none")
    popLayer.classList.toggle("none")
}
