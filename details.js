// refaire un call d'api en passant le nom de la recette
const getData = (recipe) => {
  const menu = document.querySelector(".detailsContainer");
  fetch(
    `https://api.edamam.com/search?q=${recipe}&app_id=a45406ec&app_key=b397ce28f04c7433ea698cbf94b2a1e1`
  )
    .then((res) => res.json())
    .then((data) => {
      /*const recipeData = data.hits((element) => element.recipe.label === recipe)
        if (recipeData) {
            const template = `
         <div class="card">
         <img src=${data.hits[0].recipe.image} alt="recet">
         <p>${data.hits[0].recipe.label}</p>
         <p>${data.hits[0].recipe.labelcuisineType}</p>
         <a href="recipedetails.html?param1=${element.recipe.label}}"><button>Voir la recette</button></a>
         </div>
         `;
        menu.innerHTML += template;
        }*/
      // data.hits[0].recipe.label;
      console.log(data.hits[0].recipe.ingredients[0]);
      const template = `
          <div class="card">
          <p>${data.hits[0].recipe.label}</p>
          <img src=${data.hits[0].recipe.image} alt="recet">
          <div class="card-detail">
          <p>Plat</p>
          <p>Diffculté</p>
          <p>$52</p>
          <p>Temps</p>
           <div class="person">
            <div class="number-person">
            <div> + </div><span>5</span> <div>-</div>
            <img src="/assests/user.svg" alt="use">
            </div>
           </div>
           <div class= "heart">Like</div>
          </div>
          <div class="add-btn"> <button> Ajouter au Planning</button></div>
         </div>
         <h3>Ingrédients</h3>
         <div class="infredient">
         <div class="infredient-left">
         <div class="ingredient-items">
         <div class="ingredient-one">
         <img src=${data.hits[0].recipe.ingredients[0].image} alt="use">
         </div>
         <div> <p> ${data.hits[0].recipe.ingredients[0].text}</p></div>
         </div>
         <div class="ingredient-items">
         <div class="ingredient-one">
         <img src=${data.hits[0].recipe.ingredients[1].image} alt="use">
         </div>
         <div> <p> ${data.hits[0].recipe.ingredients[1].text}</p></div>
         </div>
         <div class="ingredient-items">
         <div class="ingredient-one">
         <img src=${data.hits[0].recipe.ingredients[2].image} alt="use">
         </div>
         <div> <p> ${data.hits[0].recipe.ingredients[2].text}</p></div>
         </div>
         <div class="ingredient-items">
         <div class="ingredient-one">
         <img src=${data.hits[0].recipe.ingredients[3].image} alt="use">
         </div>
         <div> <p> ${data.hits[0].recipe.ingredients[3].text}</p></div>
         </div>
         </div>
         <div class="infredient-right">
         <div class="ingredient-items">
         <div class="ingredient-one">
         <img src=${data.hits[0].recipe.ingredients[1].image} alt="use">
         </div>
         <div> <p> ${data.hits[0].recipe.ingredients[1].text}</p></div>
         </div>
         <div class="ingredient-items">
         <div class="ingredient-one">
         <img src=${data.hits[0].recipe.ingredients[3].image} alt="use">
         </div>
         <div> <p> ${data.hits[0].recipe.ingredients[3].text}</p></div>
         </div>
         </div>
         </div>
         <div class="preparation">
         <div>
          <h3>Préparation</h3>
          <div classs="steps">
          <p>Step1: </p>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random textLorem Ipsum is not simply random text</p>
          <p>professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>
          </div>
          <div classs="steps">
          <p>Step2: </p>
          <p>professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>
          <p>professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>
          </div>
          <div classs="steps">
          <p>Step3: </p>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random textLorem Ipsum is not simply random text</p>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random textLorem Ipsum is not simply random text</p>
          </div>
          <div classs="steps">
          <p>Step4: </p>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random textLorem Ipsum is not simply random text</p>
          <p>professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>
          </div>
          <div classs="steps">
          <p>Step5: </p>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random textLorem Ipsum is not simply random text</p>
          <p>professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>
          </div>
          </div>
         </div>
        `;
      menu.innerHTML += template;
      /*
      data.hits.forEach((element) => {
        const template = `
         <div class="card">
         <img src=${element.recipe.image} alt="recet">
         <p>${element.recipe.label}</p>
         <p>${element.recipe.cuisineType}</p>
         <a href="recipedetails.html?param1=${element.recipe.label}"><button>Voir la recette</button></a>
         </div>
         `;
        menu.innerHTML += template;
      });*/
    });
};
let urlParams = new URLSearchParams(window.location.search);

let recipeName = urlParams.get("param1");
console.log(recipeName);
getData(recipeName);
