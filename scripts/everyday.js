// Everyday Recipes
const everyday = [
    {
        name: "Easy Tomato Pasta",
        image: "sources/images/recipes-everyday/easy-tomato-pasta.webp",
        tagline: "Make this simple tomato pasta dish for a delicious, filling and budget-friendly supper",
        ingredients: [
            "1 tbsp olive oil",
            "1 onion, chopped",
            "1 garlic clove, crushed",
            "400g can cherry or chopped tomatoes",
            "100g pasta"],
        method: [
            "Heat the oil in a medium pan and fry the onion for 5 minutes until softened and lightly golden.",
            "Stir in the garlic and cook for a further minute.",
            "Mix in the tomatoes, bring to the boil and simmer for 20 minutes.",
            "Cook the pasta according to pack instructions.",
            "Drain the pasta and stir into the sauce.",
            "Season to taste and serve."]
    },
    {
        name: "Vegetable Ramen",
        image: "sources/images/recipes-everyday/vegetarian-ramen.webp",
        tagline: "Rustle up this warming veggie ramen in just 15 minutes",
        ingredients: [
            "80g pack flavoured instant noodles",
            "2 spring onions, finely chopped",
            "½ head pak choi",
            "1 egg",
            "1 tsp sesame seeds",
            "½ tbsp chilli sauce, to serve"],
        method: [
            "Cook the noodles with the sachet of flavouring provided.",
            "Add the spring onions and pak choi for the final minute.",
            "Meanwhile, simmer the egg for 6 minutes from boiling, run it under cold water to stop it cooking, then peel it.",
            "Toast the sesame seeds in a frying pan.",
            "Tip the noodles and greens into a deep bowl, halve the boiled egg and place on top.",
            "Sprinkle with sesame seeds and drizzle with the chilli sauce, if using."]
    },
    {
        name: "Pork Noodle Stir-Fry",
        image: "sources/images/recipes-everyday/pork-noodle-stir-fry.webp",
        tagline: "Throw together this filling pork noodle stir-fry for a quick and easy meal",
        ingredients: [
            "3 tbsp sesame oil",
            "350g lean pork mince",
            "350g egg noodles",
            "1½ tbsp ginger purée",
            "1 tbsp garlic purée",
            "320g stir-fry veg",
            "4 tbsp low-salt soy sauce",
            "2 tsp cornflour",
            "4 tbsp sweet chilli sauce"],
        method: [
            "Heat the oil in a wok or frying pan.",
            "Add the mince, break it up with a spoon and fry over a high heat for about 8 minutes until browning.",
            "While the meat cooks, pour the hot water over the noodles and set aside for 5-10 minutes to soften.",
            "Add the ginger, garlic and veg to the pan and stir-fry for 2-3 minutes.",
            "Mix 1 tbsp soy sauce with the cornflour to make a paste.",
            "Add the remaining soy sauce, the chilli sauce and 2 tbsp water.",
            "Drain the noodles and add to the pan with the sauce.",
            "Cook until the sauce coats the noodles, adding a splash of water if needed, then serve."]
    },
    {
        name: "Quick Chicken Caesar Salad",
        image: "sources/images/recipes-everyday/chicken-caesar-salad.webp",
        tagline: "Turn this favourite salad into a speedy meal with slices of bacon-wrapped chicken",
        ingredients: [
            "4 chicken breasts, skin on",
            "8 slices streaky bacon",
            "3 tbsp Caesar ",
            "50g parmesan, to serve",
            "2 small romaine lettuces"],
        method: [
            "Heat oven to 200C/180C fan/gas 6.",
            "Season the chicken and place in a roasting tin.",
            "Drape the bacon around the chicken and roast for 15-20 minutes until the bacon is crisp and the chicken just cooked through.",
            "Discard the outer leaves of the lettuce and tear the rest over a platter, mixing gently with the dressing.",
            "Shave over the Parmesan and serve with the chicken and crisp bacon."]
    },
    {
        name: "Sweet Potato Tortilla",
        image: "sources/images/recipes-everyday/sweet-potato-tortilla.webp",
        tagline: "Make this tortilla the night before for a quick and easy lunch",
        ingredients: [
            "3 sweet potatoes",
            "2 tbsp olive oil",
            "100g baby spinach",
            "6 large eggs",
            "100g feta, crumbled"],
        method: [
            "Pierce the potatoes a few times on each side.",
            "Microwave on high for 5-8 minutes until soft, then set aside to cool a little.",
            "Heat the oil in a 20cm ovenproof frying pan and wilt the spinach for a minute or two.",
            "Cut each potato in half lengthways and use a spoon to scoop out the flesh, keeping it in big chunks.",
            "Add the sweet potato to the pan and stir to combine with the spinach – don’t break it up too much.",
            "Whisk the eggs and pour them into the pan, swirl them around to fill any gaps.",
            "Scatter over the feta and cook for 4-5 minutes over a low heat until the bottom and sides are set.",
            "Place under the grill for 1-2 minutes to cook the top – poke a knife into the centre to ensure it’s cooked through.",
            "Cool before slicing into wedges and serve."]
    },
    {
        name: "Gnocchi Cacio e Pepe",
        image: "sources/images/recipes-everyday/gnocchi-cacio-e-pepe.webp",
        tagline: "Enjoy a comforting bowl of gnocchi with parmesan and black pepper",
        ingredients: [
            "300g gnocchi",
            "2 tbsp unsalted butter",
            "60g parmesan, finely grated",
            "2 tsp black pepper"],
        method: [
            "Cook the gnocchi in a large pan of lightly salted, boiling water.",
            "Drain and reserve 200ml of the cooking water.",
            "Heat the butter in a large frying pan.",
            "Add the gnocchi, cheese and pepper as well as 150ml of the cooking water.",
            "Raise the heat a little and stir vigorously until melted and the gnocchi is well coated.",
            "Pour in more of the reserved water if you like it saucier.",
            "Season with a little salt.",
            "Transfer the gnocchi to bowls and serve."]
    }
]


// Variable assignment
let name = everyday[sessionStorage.getItem("recipesEverydayIndex")].name;
let image = everyday[sessionStorage.getItem("recipesEverydayIndex")].image;
let tagline = everyday[sessionStorage.getItem("recipesEverydayIndex")].tagline;
let ingredients = everyday[sessionStorage.getItem("recipesEverydayIndex")].ingredients;
let method = everyday[sessionStorage.getItem("recipesEverydayIndex")].method;

let ingredientssection = document.getElementById("ingredients-section");
let methodsection = document.getElementById("method-section");


/**
 * setEveryDayIndex
 * Creates key and value in local storage
 * @param index, Index of recipe details to display
 */
function setEverydayIndex(index) {
    sessionStorage.setItem("recipesEverydayIndex", index);
}

if (document.getElementById("recipe-header-section") != null) {
    // Insert recipe name into page title
    document.title = `${name} | Recipes, Cooking & More - My Kitchen`;
    // Populate recipe-header-section
    document.getElementById("recipe-header-section").innerHTML = `
        <h1>${name}</h1>
        <img src="${image}" alt="${name} Image">
        <p>${tagline}</p>`;
    // Populate ingredients-section
    document.getElementById("ingredients-section").innerHTML = `
        <h3>Ingredients:</h3>`;
    // Populate method-section
    document.getElementById("method-section").innerHTML = `
        <h3>Method:</h3>`;
}


/**
 * arrToUl
 * Places each element of an array as a li in an ul
 * @param root, The element to at the ul to
 * @param arr, The array to turn into an ul
 */

/* Function sourced stackoverflow user Ori Drori's answer to 'JavaScript: How to create unordered list from array?'
    Available at: https://stackoverflow.com/questions/41352837/javascript-how-to-create-unordered-list-from-array */
function arrToUl(root, arr) {
    let ul = document.createElement('ul');
    let li;

    root.appendChild(ul); // append the created ul to the root

    arr.forEach(function(item) {
        li = document.createElement('li'); // create a new list item
        li.appendChild(document.createTextNode(item)); // append the text to the li
        ul.appendChild(li); // append the list item to the ul
    });
}

/**
 * arrToOl
 * Places each element of an array as a li in an ol
 * @param root, The element to add the ol to
 * @param arr, The array to turn into an ol
 */

/* Function adapted from stackoverflow user Ori Drori's answer to 'JavaScript: How to create unordered list from array?'
   Available at: https://stackoverflow.com/questions/41352837/javascript-how-to-create-unordered-list-from-array */
function arrToOl(root, arr) {
    let ol = document.createElement('ol');
    let li;

    root.appendChild(ol); // append the created ol to the root

    arr.forEach(function(item) {
        li = document.createElement('li'); // create a new list item
        li.appendChild(document.createTextNode(item)); // append the text to the li
        ol.appendChild(li); // append the list item to the ol
    });
}


// Calling functions to create lists from arrays
arrToUl(ingredientssection, ingredients);
arrToOl(methodsection, method);