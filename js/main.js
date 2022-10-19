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
let fetchCat = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(data => data.json()).then(res => {
        let cat = res.categories;
        for (let i = 0; i < cat.length; i++){
            owlItem[i].children[0].src = cat[i].strCategoryThumb;
            owlItem[i].children[1].innerHTML = cat[i].strCategory;
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