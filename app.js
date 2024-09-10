function toggleIngredients(recipeId) {
    const ingredientsList = document.getElementById(`ingredients-${recipeId}`);
    if (ingredientsList.style.display === 'none' || ingredientsList.style.display === '') {
        ingredientsList.style.display = 'block';
    } else {
        ingredientsList.style.display = 'none';
    }
}
