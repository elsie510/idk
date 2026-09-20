function toggleMenu() { //toggle: Open or close.
        var menu = document.getElementById("mobileMenu"); //(Variable menu).
        if (menu.style.display === "block") { //(Visible)
            menu.style.display = "none"; //Hide it.
        } else {
            menu.style.display = "block"; //Show it.
        }
}
function showCategory(category) {
    currentCategory = category;
    var buttons = document.querySelectorAll(".recipeCategory");
    buttons.forEach(function(button) { //.forEach Goes through each item.
        button.classList.remove("active");
    });
    buttons.forEach(function(button) {
        if (button.textContent.trim() === category) {
            button.classList.add("active");
        }
    });
    filterRecipes();
}
// AI-ASSISTED START | ID: AI-2026-001
function filterRecipes() { //Filter recipes.
    var recipes = document.querySelectorAll(".recipeCard"); //.querySelectorAll finds all the matching elements.
    var count = document.querySelector(".recipeCount"); //.querySelector finds one element.
    var searchText = document.getElementById("searchInput").value.toLowerCase(); //Gets what was typed.
    var recipeNumber = 0; //Starts the recipeCount at 0
    recipes.forEach(function(recipe) {
        var matchesCategory = (currentCategory === "All" || recipe.dataset.category === currentCategory); //recipe.dataset.category gets the category stored on the recipe.
        var title = recipe.querySelector("h4").textContent.toLowerCase(); //Makes text lowercase so it is not affected by capital letters.
        var description = recipe.querySelector(".p2").textContent.toLowerCase();
        var character = recipe.querySelector(".recipeImage span").textContent.toLowerCase();
        var matchesSearch = title.includes(searchText) || description.includes(searchText) || character.includes(searchText); //.includes checks if the search appears in the character name, food name, or description of the recipeInformation.
        if (matchesCategory && matchesSearch) { //If it matches.
            recipe.style.display = "flex"; //Shows it.
            recipeNumber++; //Adds 1.
        } else {
            recipe.style.display = "none"; //Hides it.
        }
    });
    if (recipeNumber === 1) {
        count.textContent = "1 recipe found";
    } else {
        count.textContent = recipeNumber + " recipes found";
    }
}
// AI-ASSISTED END | ID: AI-2026-001
// AI-ASSISTED START | ID: AI-2026-002
function setupCheckList(listId) { //Sets up a clickable checklist.
    var list = document.getElementById(listId);
    var items = list.querySelectorAll("li"); //Finds all the list items.
    items.forEach(function(item) { //.forEach Goes through each item.
        item.addEventListener("click", function() {
            item.classList.toggle("checked"); //Toggle.
        });
    });
}
setupCheckList("ingredientsList"); //Sets up the ingredients checklist.
setupCheckList("methodList"); //Sets up the method checklist.
// AI-ASSISTED END | ID: AI-2026-002