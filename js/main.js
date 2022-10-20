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
            pop.children[1].innerHTML = result.meals[0].strMeal;
            pop.children[3].classList.remove("none");
            pop.children[3].href = result.meals[0].strYoutube;
            pop.children[2].innerHTML = result.meals[0].strInstructions;
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
           pop.children[1].innerHTML = result.meals[0].strMeal;
             pop.children[3].href = result.meals[0].strYoutube;
             pop.children[3].classList.remove("none");
           pop.children[2].innerHTML = result.meals[0].strInstructions;
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
            pop.children[1].innerHTML = result.meals[0].strMeal;
            pop.children[3].classList.remove("none"); 
           pop.children[3].href = result.meals[0].strYoutube;
           pop.children[2].innerHTML = result.meals[0].strInstructions;
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
// owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  center: true,
  autoWidth: true,
  slideBy: 2,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
let owlItem = document.querySelectorAll(".cat-item");
let catList = document.getElementById("catList");
let mealList = document.getElementById("mealList");
let mealOption = document.querySelectorAll("#mealList option");
let fetchCat = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(data => data.json()).then(res => {
        let cat = res.categories;
        for (let i = 0; i < cat.length; i++){
            owlItem[i].children[0].src = cat[i].strCategoryThumb;
            owlItem[i].children[1].innerHTML = cat[i].strCategory;
            let option = document.createElement("option");
            option.innerHTML = cat[i].strCategory;
            option.value = cat[i].strCategory;
            catList.appendChild(option)
            owlItem[i].children[2].addEventListener("click", () => {
                console.log(pop);
                togglePop()
                pop.children[0].src = cat[i].strCategoryThumb;
                pop.children[1].innerHTML = cat[i].strCategory;
                pop.children[2].innerHTML = cat[i].strCategoryDescription;
                pop.children[3].classList.add("none")
            })
        }
    });
}
fetchCat();
catList.onchange= () => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catList.value}`
    )
      .then((data) => data.json())
        .then((res) => {
            console.log(res.meals);
            let resLength = res.meals.length;
            for (let j = 0; j < mealList.children.length; j++) {
                mealList.children[j].setAttribute("style","display:none")
            }
            for (let i = 0; i < resLength; i++){
                let option = document.createElement("option");
                option.innerHTML = res.meals[i].strMeal;
                option.value = res.meals[i].strMeal;
                mealList.appendChild(option)  
            }
            mealList.value=mealList.children[0]
        });
}
let mealSec = document.querySelector(".mealSec");
mealList.onchange = () => {
     fetch(
       `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealList.value}`
     ).then((data) => data.json()).then(res => {
         console.log(res.meals);
         let result = res.meals;
         for (let j = 0; j < mealSec.children.length; j++){
             mealSec.children[j].setAttribute("style","display:none")
         }
         for (let i = 0; i < result.length; i++){
             let meal = document.createElement("div");
             meal.classList.add("meal");
             let img = document.createElement("img");
             img.classList.add("img-fluid");
             img.alt = "meal";
             let h4 = document.createElement("h4");
             let btn = document.createElement("button");
             btn.innerHTML = "Show Details";
             img.src = result[0].strMealThumb;
             h4.innerHTML = result[0].strMeal;
             meal.appendChild(img);
             meal.appendChild(h4);
             meal.appendChild(btn);
             mealSec.appendChild(meal)
         }
     });
}
