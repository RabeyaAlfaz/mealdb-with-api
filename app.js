function searchField() {
    const searchField = document.querySelector('.search-field');
     const searchFieldText = searchField.value;
     loadMeals(searchFieldText);
}

const loadMeals = (searchFieldText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`
    fetch(url)
    .then(res => res.json())
    .then(meals => displayMeals(meals.meals));
}
const mealsConatiner = document.querySelector('.meals-container');
const displayMeals = (meals) => {
meals.forEach(meal => {
    // console.log(meal);
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col');
    mealDiv.innerHTML = `
        <div onclick="loadMealDetailById(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
            </div>
        </div>
    `
    mealsConatiner.appendChild(mealDiv);
});
}
const loadMealDetailById = (idMeal) =>{
   const url = `
   https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}
   `
    fetch(url)
   .then(res => res.json())
   .then(mealdetail => showMealDetail(mealdetail.meals[0]));
}

const showMealDetail = (meal) =>{
console.log(meal);
const mealDetailContainer = document.querySelector('.meal-detail-container');
    // console.log(meal);
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col');
    mealDetailContainer.innerHTML = '';
    mealDiv.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
            </div>
        </div>
    `
    mealDetailContainer.appendChild(mealDiv);
    mealsConatiner.innerHTML = ' ';
}