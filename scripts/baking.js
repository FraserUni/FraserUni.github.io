// Baking & Desserts
const baking = [
    {
        name: "Granny's Victoria Sponge",
        image: "sources/images/recipes-baking-and-desserts/granny's-victoria-sponge.webp",
        tagline: "The classic Victoria sandwich is always a teatime winner",
        ingredients: ["200g unsalted butter, softened, plus extra for greasing",
        "200g caster sugar",
        "1 tsp vanilla extract",
        "4 medium eggs",
        "200g self-raising flour, plus extra for dusting",
        "about 6 tbsp raspberry jam",
        "250ml double cream, whipped",
        "icing sugar, for dusting"],
        method: ["Heat oven to 190C/170C fan/gas 5. Grease and flour two 20cm sandwich tins.",
        "Place 200g softened unsalted butter, 200g caster sugar and 1 tsp vanilla extract into a bowl " +
        "and beat well to a creamy consistency.",
        "Slowly beat in 4 medium eggs, one by one, then fold in 200g self-raising flour and mix well.",
        "Divide the mix between the cake tins, place into the oven and bake for about 20 mins " +
        "until risen and golden brown. The cakes should spring back when gently pushed in the middle.",
        "When ready, remove from the oven and allow to cool for 5 mins in the tin, " +
        "before turning out onto a wire rack and cooling completely.",
        "Spread about 6 tbsp raspberry jam onto one cake and top with 250ml whipped double cream. " +
        "Sandwich the cakes together and dust with icing sugar."]
    },
    {
        name: "Yummy Golden Syrup Flapjacks",
        image: "sources/images/recipes-baking-and-desserts/yummy-golden-syrup-flapjacks.webp",
        tagline: "These 4-ingredient flapjacks are easy to make and ready in half an hour",
        ingredients: ["250g jumbo porridge oats",
        "125g butter, plus extra for the tin",
        "125g light brown sugar",
        "2-3 tbsp golden syrup (depending on how gooey you want it)"],
        method: ["Heat the oven to 200C/180C fan/gas 6. Put the oats, butter, sugar and golden syrup in a food " +
        "processor and pulse until mixed – be careful not to overmix or the oats may lose their texture.",
        "Lightly butter a 20 x 20cm baking tin and add the mixture. Press into the corners with the back of a " +
        "spoon so the mixture is flat and score into 12 squares. Bake for around 15 mins until golden brown."]
    },
    {
        name: "Chocolate Tiffin",
        image: "sources/images/recipes-baking-and-desserts/chocolate-tiffin.webp",
        tagline: "Go all out and treat yourself to these chocolate tiffin slices",
        ingredients: ["150g butter, cubed, plus extra for the tin",
        "3 tbsp caster sugar",
        "3 tbsp golden syrup",
        "6 tsp cocoa powder",
        "225g biscuits, crushed",
        "handful of raisins",
        "110g milk chocolate",
        "110g dark chocolate"],
        method: ["Butter and line a 15-20cm tin with baking parchment. In a large saucepan, melt the butter, sugar, " +
        "syrup and cocoa. Stir through the biscuits and raisins.",
        "Pour the mixture into the prepared tin and press down, then smooth the top with the back of a spoon. " +
        "Microwave both chocolates in short 20 second bursts, stirring frequently, until melted. " +
        "Pour them over the mixture in the tin. Use a palette knife or spoon to smooth over, " +
        "so it's completely coated in chocolate.",
        "Put the tin into the fridge and leave for about 2 hrs to set, or overnight. " +
        "Run a kitchen knife under the hot tap then cut into squares."]
    },
    {
        name: "Peanut Butter Cookies",
        image: "sources/images/recipes-baking-and-desserts/peanut-butter-cookies.webp",
        tagline: "With just three ingredients, these simple peanut butter cookies are delightful",
        ingredients: ["200g peanut butter (crunchy or smooth is fine)",
        "175g golden caster sugar",
        "¼ tsp fine table salt",
        "1 large egg"],
        method: ["Heat oven to 180C/160C fan/gas 4 and line 2 large baking trays with baking parchment.",
        "Measure the peanut butter and sugar into a bowl. Add ¼ tsp fine table salt and mix well with a wooden spoon. " +
        "Add the egg and mix again until the mixture forms a dough.",
        "Break off cherry tomato sized chunks of dough and place, well spaced apart, on the trays. " +
        "Press the cookies down with the back of a fork to squash them a little. " +
        "The cookies can now be frozen for 2 months, cook from frozen adding an extra min or 2 to the cooking time.",
        "Bake for 12 mins, until golden around the edges and paler in the centre. Cool on the trays for 10 mins, " +
        "then transfer to a wire rack and cool completely. Store in a cookie jar for up to 3 days."]
    },
    {
        name: "Flat Apple & Vanilla Tart",
        image: "sources/images/recipes-baking-and-desserts/flat-apple-and-vanilla-tart.webp",
        tagline: "A gorgeous looking tart that is fantastic for any occasion",
        ingredients: ["375g pack puff pastry, preferably all-butter",
        "5 large eating apples - Cox's, russets or Elstar",
        "juice of 1 lemon",
        "25g butter, cut into small pieces",
        "3 tsp vanilla sugar or 1 tsp vanilla extract",
        "1 tbsp caster sugar",
        "3 rounded tbsp apricot conserve"],
        method: ["Heat oven to 220C/fan 200C/gas 7. Roll out the pastry and trim to a round about 35cm across. " +
        "Transfer to a baking sheet lined with parchment paper.",
        "Peel, core and thinly slice the apples and toss in the lemon juice. " +
        "Spread over the pastry to within 2cm of the edges. Curl up the edges slightly to stop the juices running off.",
        "Dot the top with the butter and sprinkle with vanilla and caster sugar. " +
        "Bake for 15-20 mins until the apples are tender and the pastry crisp.",
        "Warm the conserve and brush over the apples and pastry edge. " +
        "Serve hot with vanilla ice cream or crème fraîche."]
    },
    {
        name: "Fruit Scones",
        image: "sources/images/recipes-baking-and-desserts/fruit-scones.webp",
        tagline: "Make these easy fruit scones in just 15 minutes, perfect for an elegant afternoon tea",
        ingredients: ["350g self-raising flour, plus more for dusting\n" +
        "¼ tsp salt",
        "1 tsp baking powder",
        "85g butter, cut into cubes",
        "3 tbsp caster sugar",
        "175ml milk",
        "1 tsp vanilla extract",
        "squeeze of lemon juice",
        "100g sultanas",
        "beaten egg to glaze",
        "jam and clotted cream, to serve"],
        method: ["Heat oven to 220C/200C fan/gas 7. Tip the flour into a large bowl with the salt and baking powder, " +
        "then mix. Add the butter, then rub in with your fingers until the mix looks like fine crumbs. " +
        "Stir in the sugar.",
        "Put the milk into a jug and heat in the microwave for about 30 secs until warm, but not hot. " +
        "Add the vanilla and lemon juice, then set aside for a moment. Put a baking sheet in the oven.",
        "Make a well in the dry mix, then add the liquid and sultanas and combine it quickly with a cutlery knife – " +
        "it will seem pretty wet at first. Scatter some flour onto the work surface and tip the dough out. " +
        "Dredge the dough and your hands with a little more flour, then fold the dough over 2-3 times until " +
        "it’s a little smoother. Pat into a round about 4cm deep.",
        "Take a 5cm cutter (smooth-edged cutters tend to cut more cleanly, giving a better rise) and dip it " +
        "into some flour. Plunge into the dough, then repeat until you have four scones. " +
        "You may need to press what’s left of the dough back into a round to cut out another four.",
        "Brush the tops with beaten egg, then carefully place onto the hot baking tray.",
        "Bake for 10 mins until risen and golden on the top. Eat warm or cold on the day of baking, " +
        "generously topped with jam and clotted cream. If freezing, freeze once cool. " +
        "Defrost, then put in a low oven (about 160C/140C fan/gas 3) for a few mins to refresh."]
    }
]


// Variable assignment
let name = baking[sessionStorage.getItem("recipesBakingIndex")].name;
let image = baking[sessionStorage.getItem("recipesBakingIndex")].image;
let tagline = baking[sessionStorage.getItem("recipesBakingIndex")].tagline;
let ingredients = baking[sessionStorage.getItem("recipesBakingIndex")].ingredients;
let method = baking[sessionStorage.getItem("recipesBakingIndex")].method;

let ingredientssection = document.getElementById("ingredients-section");
let methodsection = document.getElementById("method-section");


/**
 * setEveryDayIndex
 * Creates key and value in local storage
 * @param index, Index of recipe details to display
 */
function setBakingIndex(index) {
    sessionStorage.setItem("recipesBakingIndex", index);
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