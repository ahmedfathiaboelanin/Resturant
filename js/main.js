
let slideMealName = document.querySelectorAll(".slideMealName");
let slideMealDiscreption = document.querySelectorAll(".slideMealDiscreption");
let slideMealBtn = document.querySelectorAll(".slideMealBtn");
let slideMealImg = document.querySelectorAll(".slideMealImg");
let fetchRandom1 = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(data => data.json()).then(result => {
        slideMealName[0].innerHTML = result.meals[0].strMeal;
        slideMealImg[0].src = result.meals[0].strMealThumb;
    });
}
let fetchRandom2 = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(data => data.json()).then(result => {
        slideMealName[1].innerHTML = result.meals[0].strMeal;
        slideMealImg[1].src = result.meals[0].strMealThumb;
    });
}
let fetchRandom3 = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(data => data.json()).then(result => {
        slideMealName[2].innerHTML = result.meals[0].strMeal;
        slideMealImg[2].src = result.meals[0].strMealThumb;
    });
}
fetchRandom1();
fetchRandom2();
fetchRandom3();
for (let i = 0; i < slideMealBtn.length; i++){
    slideMealBtn[i].addEventListener("click", () => {
        console.log("hello");
    })
}