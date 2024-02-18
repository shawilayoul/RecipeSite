const getData = (text = Chicken) => {
  const menu = document.querySelector(".bottom-right");
  fetch(
    `https://api.edamam.com/search?q=${text}&app_id=a45406ec&app_key=b397ce28f04c7433ea698cbf94b2a1e1`
  )
    .then((res) => res.json())
    .then((data) => {
      //console.log(data.hits[2].recipe);
      data.hits.forEach((element) => {
        const template = `
       <div class="card">
        <h3 class="card-title">${element.recipe.label}</h3>
            <div class="img-container">
              <img class="plat-img" src=${element.recipe.image} alt="recette">
            </div>
            <div class="tags-container">
              <div class="tag">
              <p style="margin: 0;">${element.recipe.cuisineType}</p>
              </div>
              <div class="tag">
              <p style="margin: 0;">${element.recipe.mealType}</p>
              </div>
              <div class="tag">
                $$
              </div>
              <div class="tag">
                ${element.recipe.totalTime}
              </div>
            </div>
            <div class="bottom-card-container">
              
              <a href="recipedetails.html?param1=${element.recipe.label}" class="card-btn"><button style="width: 100%; height: 100%">Voir la recette</button></a>
                <div class="like-btn">
                  <img class="like-img" src="assests/like.svg">
                </div>
            </div>
        </div>
       `;
        menu.innerHTML += template;
      });
    });
};

// search for recipe from search bar
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  const inputValueText = document.querySelector("input[type='text']");
  if (inputValueText.ariaValueMax.length > 0) {
    e.preventDefault();
    getData(inputValueText.value);
    inputValueText = "";
  }
});
const Chicken = "Chicken";
getData(Chicken);
