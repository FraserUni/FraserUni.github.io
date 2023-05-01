// Dishes
const dishes = [
    {
        name: "Chicken Pasta Bake",
        image: "sources/images/recipes-dishes/chicken-pasta-bake.webp",
        tagline: "Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner",
        ingredients: ["4 tbsp olive oil",
        "1 onion, finely chopped",
        "2 garlic cloves, crushed",
        "¼ tsp chilli flakes",
        "2 x 400g cans chopped tomatoes",
        "1 tsp caster sugar",
        "6 tbsp mascarpone",
        "4 skinless chicken breasts, sliced into strips",
        "300g penne",
        "70g mature cheddar, grated",
        "50g grated mozzarella",
        "½ small bunch of parsley, finely chopped"],
        method: ["Heat 2 tbsp of the oil in a pan over a medium heat and fry the onion gently for 10-12 mins. " +
        "Add the garlic and chilli flakes and cook for 1 min. Tip in the tomatoes and sugar and season to taste. " +
        "Simmer uncovered for 20 mins or until thickened, then stir through the mascarpone. ",
        "Heat 1 tbsp of oil in a non-stick frying pan. " +
        "Season the chicken and fry for 5-7 mins or until the chicken is cooked through.",
        "Heat the oven to 220C/200C fan/gas 7. Cook the penne following pack instructions. " +
        "Drain and toss with the remaining oil. Tip the pasta into a medium sized ovenproof dish. " +
        "Stir in the chicken and pour over the sauce. Top with the cheddar, mozzarella and parsley. " +
        "Bake for 20 mins or until golden brown and bubbling."]
    },
    {
        name: "Spicy Sausage & Bean Casserole",
        image: "sources/images/recipes-dishes/spicy-sausage-and-bean-casserole.webp",
        tagline: "A saucy, warming casserole with Cumberland sausages, chilli gravy and kidney beans",
        ingredients: ["1 tbsp vegetable oil",
        "1 onion, thickly sliced",
        "8 Cumberland sausages",
        "1 fat garlic clove, crushed",
        "2 x 400g cans kidney beans in chilli sauce",
        "2-3 sprigs curly parsley, chopped"],
        method: ["Heat the oil in a large frying pan. Cook the onion and sausages over a fairly high heat for " +
        "8-10 mins, turning the sausages often so they brown all over.",
        "Add the garlic to the pan with the kidney beans and their sauce. Half-fill one of the cans with water, " +
        "swirl and then add this to the pan. Stir everything together and bring to the boil. " +
        "Turn down to simmer and cook for 10 mins, or until the sausages are cooked through. " +
        "Season and sprinkle with the parsley."]
    },
    {
        name: "Creamy Salmon Traybake",
        image: "sources/images/recipes-dishes/creamy-salmon-traybake.webp",
        tagline: "Nestle leeks, potato and capers around salmon fillets to make this easy traybake",
        ingredients: ["50g baby potatoes, thickly sliced",
        "2 tbsp olive oil",
        "1 leek, halved, washed and sliced",
        "1 garlic clove, crushed",
        "70ml double cream",
        "1 tbsp capers, plus extra to serve",
        "1 tbsp chives, plus extra to serve",
        "2 skinless salmon fillets"],
        method: ["Heat the oven to 200C/180C fan/gas 6. Bring a medium pan of water to the boil. " +
        "Add the potatoes and cook for 8 mins. Drain and leave to steam-dry in a colander for a few minutes. " +
        "Toss the potatoes with ½ of the oil and plenty of seasoning in a baking tray. Put in the oven for 20 mins, " +
        "tossing halfway through the cooking time.",
        "Meanwhile, heat the remaining oil in a frying pan over a medium heat. Add the leek and fry for 5 mins, " +
        "or until beginning to soften. Stir through the garlic for 1 min, then add the cream, " +
        "capers and 75ml hot water, then bring to the boil. Stir through the chives.",
        "Heat the grill to high. Pour the creamy leek mixture over the potatoes, then sit the salmon fillets on top. " +
        "Grill for 7-8 mins, or until just cooked through. " +
        "Serve topped with extra chives and capers and a salad on the side, if you like."]
    },
    {
        name: "Vegetarian Chilli-Stuffed Peppers",
        image: "sources/images/recipes-dishes/vegetarian-chilli-stuffed-peppers.webp",
        tagline: "A satisfying vegetarian supper that packs in 4 of your 5-a-day",
        ingredients: ["2 large peppers, halved, deseeded but stalks left on",
        "1 tsp ground cumin",
        "1 tsp ground coriander",
        "400g can chopped tomatoes",
        "1 red onion, halved and sliced",
        "1 garlic clove, finely grated",
        "1 red chilli, deseeded and finely chopped",
        "1 small aubergine, cut into small cubes",
        "220g can kidney beans (not drained)",
        "small bunch of coriander, chopped",
        "1 large egg",
        "25g low-fat feta cheese, finely grated",
        "50g low-fat fromage frais",
        "2 handfuls rocket",
        "lime wedges, for squeezing over"],
        method: ["Heat oven to 190C/170C fan/gas 5. Place the pepper halves in a shallow baking dish, skin-side up, " +
        "and roast for 15-20 mins.",
        "Meanwhile, tip the spices into a pan and warm briefly to release their flavour. " +
        "Tip in the tomatoes and stir in the onion, garlic, chilli, aubergine and kidney beans with their juice. " +
        "Cover the pan and cook for 20 mins, stirring occasionally. Try not to add any extra liquid; " +
        "the mixture should be quite dry. Stir in the coriander.",
        "Meanwhile, beat the egg with the feta and fromage frais. " +
        "Turn the peppers over and pile the aubergine mixture into each one, packing it down as much as you can. " +
        "Top with the feta mixture and return to the oven for 10 mins more until the topping has lightly set. " +
        "Don’t worry if some of it flows off, as it will just set in the dish. " +
        "Serve the peppers on the rocket with lime wedges for squeezing over."]
    },
    {
        name: "Creamy Courgette Lasagne",
        image: "sources/images/recipes-dishes/creamy-courgette-lasagne.webp",
        tagline: "Serve this quick, creamy courgette & ricotta lasagne for a last-minute dinner party",
        ingredients: ["9 dried lasagne sheets",
        "1 tbsp sunflower oil",
        "1 onion, finely chopped",
        "700g courgette (about 6), coarsely grated",
        "2 garlic cloves, crushed",
        "250g tub ricotta",
        "50g cheddar",
        "350g jar tomato sauce for pasta"],
        method: ["Heat oven to 220C/fan 200C/gas 7. Put a pan of water on to boil, " +
        "then cook the lasagne sheets for about 5 mins until softened, but not cooked through. Rinse in cold water, " +
        "then drizzle with a little oil to stop them sticking together.",
        "Meanwhile, heat the oil in a large frying pan, then fry the onion. After 3 mins, " +
        "add the courgettes and garlic and continue to fry until the courgette has softened and turned bright green. " +
        "Stir in 2/3 of both the ricotta and the cheddar, then season to taste. " +
        "Heat the tomato sauce in the microwave for 2 mins on High until hot.",
        "In a large baking dish, layer up the lasagne, starting with half the courgette mix, then pasta, " +
        "then tomato sauce. Repeat, top with blobs of the remaining ricotta, " +
        "then scatter with the rest of the cheddar. " +
        "Bake on the top shelf for about 10 mins until the pasta is tender and the cheese is golden."]
    },
    {
        name: "Slow-Cooker Beef Stew",
        image: "sources/images/recipes-dishes/slow-cooker-beef-stew.webp",
        tagline: "Cook braising steak in the slow cooker for really tender meat",
        ingredients: ["1 onion, chopped",
        "2 celery sticks, finely chopped",
        "2 tbsp rapeseed oil",
        "3 carrots, halved and cut into chunks",
        "2 bay leaves",
        "½ pack thyme",
        "2 tbsp tomato purée",
        "2 tbsp Worcestershire sauce",
        "2 beef stock cubes or stock pots",
        "900g beef for braising such as skirt",
        "2 tsp cornflour (optional)",
        "½ small bunch parsley, chopped",
        "buttery mash, to serve (optional)"],
        method: ["Fry the onion and celery in 1 tbsp oil over a low heat until they start to soften – about 5 mins. " +
        "Add the carrots, bay and thyme, fry for 2 mins, stir in the purée and Worcestershire sauce, " +
        "add 600ml boiling water, stir and tip everything into a slow cooker. " +
        "Crumble over the stock cubes or add the stock pots and stir, " +
        "then season with pepper (don’t add salt as the stock may be salty).",
        "Clean out the frying pan and fry the beef in the remaining oil in batches until it is well browned, " +
        "then tip each batch into the slow cooker. Cook on low for 8-10 hrs, or on high for 4 hrs.",
        "If you want to thicken the gravy, mix the cornflour with a splash of cold water to make a paste, " +
        "then stir in 2 tbsp of the liquid from the slow cooker. Tip back into the slow cooker, " +
        "stir and cook for a further 30 mins on high. Stir in the parsley and season again to taste. " +
        "Serve with mash, if you like. Leave to cool before freezing."]
    }
]


// Variable assignment
let name = dishes[sessionStorage.getItem("recipesDishesIndex")].name;
let image = dishes[sessionStorage.getItem("recipesDishesIndex")].image;
let tagline = dishes[sessionStorage.getItem("recipesDishesIndex")].tagline;
let ingredients = dishes[sessionStorage.getItem("recipesDishesIndex")].ingredients;
let method = dishes[sessionStorage.getItem("recipesDishesIndex")].method;

let ingredientssection = document.getElementById("ingredients-section");
let methodsection = document.getElementById("method-section");


/**
 * setEveryDayIndex
 * Creates key and value in local storage
 * @param index, Index of recipe details to display
 */
function setDishesIndex(index) {
    sessionStorage.setItem("recipesDishesIndex", index);
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