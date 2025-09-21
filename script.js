const recipeList = document.getElementById("recipeList");
const modal = document.getElementById("recipeModal");
const recipeTitle = document.getElementById("recipeTitle");
const recipeIngredients = document.getElementById("recipeIngredients");
const recipeSteps = document.getElementById("recipeSteps");
const closeBtn = document.getElementById("closeBtn");
const searchBar = document.getElementById("searchBar");
const categoryButtons = document.querySelectorAll(".categories button");

// Function to display recipe cards
function displayRecipes(list) {
  recipeList.innerHTML = ""; 
  list.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${r.image}" alt="${r.name}">
      <h3>${r.name}</h3>
      <p><strong>${r.category}</strong></p>
    `;
    card.addEventListener("click", () => openRecipe(r));
    recipeList.appendChild(card);
  });
}

// Open modal
function openRecipe(recipe) {
  recipeTitle.textContent = recipe.name;
  document.getElementById("recipeImage").src = recipe.image; // <-- NEW

  recipeIngredients.innerHTML = "";
  recipe.ingredients.forEach(ing => {
    const li = document.createElement("li");
    li.textContent = ing;
    recipeIngredients.appendChild(li);
  });

  recipeSteps.innerHTML = "";
  recipe.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    recipeSteps.appendChild(li);
  });

  modal.style.display = "flex";
}

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Search filter
searchBar.addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();
  const filtered = recipes.filter(r =>
    r.name.toLowerCase().includes(keyword) ||
    r.category.toLowerCase().includes(keyword)
  );
  displayRecipes(filtered);
});

// Category filter
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    if (category === "All") {
      displayRecipes(recipes);
    } else {
      const filtered = recipes.filter(r => r.category === category);
      displayRecipes(filtered);
    }
  });
});

// Initial load
displayRecipes(recipes);
