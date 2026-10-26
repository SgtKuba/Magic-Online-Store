const products = [
  {name: "Doenerspiess", price: 500, id: 492752, instock: false},
  {name: "Burgerpatties", price: 22, id: 364283, instock: true},
  {name: "Gurke", price: 2.50, id: 461288, instock: true},
  {name: "Entenleber", price: 32.61, id: 552440, instock: true},
  {name: "Kalbsleber", price: 71.50, id: 551007, instock: false},
  {name: "Froschbeine", price: 15.99, id: 334270, instock: true},
  {name: "Drachenherz", price: 6537.20, id: 777391, instock: true},
  {name: "Krähenfuss", price: 23014, id: 773455, instock: true},
  {name: "Büffelzunge", price: 84.30, id: 618204, instock: true},
  {name: "Haifischflosse", price: 349.99, id: 928174, instock: false},
  {name: "Trüffelbutter", price: 47.20, id: 183650, instock: true},
  {name: "Kamelsteak", price: 91.40, id: 602913, instock: false},
  {name: "Wildschweinrippe", price: 38.75, id: 771204, instock: true},
  {name: "Ochsenherz", price: 27.90, id: 402781, instock: true},
  {name: "PiranhaFilet", price: 64.50, id: 550238, instock: false},
  {name: "AdlerEi", price: 1337, id: 882014, instock: false},
  {name: "WasabiWurzel", price: 18.40, id: 194028, instock: true},
  {name: "BisonBurger", price: 26.99, id: 730451, instock: true},
  {name: "Kängurukeule", price: 54.60, id: 684103, instock: true},
  {name: "Tintenfischkopf", price: 19.30, id: 310942, instock: false},
  {name: "Seeteufel", price: 42.80, id: 520481, instock: true},
  {name: "MonsterGarnele", price: 29.99, id: 694203, instock: true},
  {name: "VulkanKaese", price: 111.11, id: 298451, instock: false},
  {name: "MammutSteak", price: 8950, id: 999201, instock: false},
  {name: "GoblinWurst", price: 14.60, id: 405922, instock: true},
  {name: "OrkSchinken", price: 43.25, id: 660314, instock: true},
  {name: "Elfenbrot", price: 28.90, id: 812304, instock: true},
  {name: "ZwergenSpeck", price: 37.80, id: 508312, instock: false},
  {name: "TrollFleisch", price: 79.50, id: 940821, instock: false},
  {name: "PhoenixEi", price: 12000, id: 777001, instock: true},
  {name: "HydraFilet", price: 760.40, id: 813492, instock: false},
  {name: "KrakenArm", price: 320.75, id: 620144, instock: true},
  {name: "EinhornMilch", price: 2500, id: 883220, instock: false},
  {name: "MinotaurusHack", price: 145.30, id: 730914, instock: true},
  {name: "BasiliskenEi", price: 880.90, id: 491037, instock: true},
  {name: "HexenPilz", price: 13.37, id: 374012, instock: false},
  {name: "GeisterPaprika", price: 8.99, id: 661209, instock: true},
  {name: "ZombieRippe", price: 44.44, id: 113820, instock: false},
  {name: "WerwolfSteak", price: 92.30, id: 409113, instock: true},
  {name: "VampirKnoblauch", price: 6.66, id: 902144, instock: true},
  {name: "DrachenZunge", price: 1730, id: 720384, instock: false},
  {name: "Riesenkalmar", price: 459.80, id: 663981, instock: true},
  {name: "SchlangenFilet", price: 36.40, id: 110384, instock: true},
  {name: "KrokodilBurger", price: 41.90, id: 288341, instock: false},
  {name: "StraussenEi", price: 28.50, id: 710233, instock: true},
  {name: "RentierKeule", price: 67.20, id: 390448, instock: true},
  {name: "YakSteak", price: 72.80, id: 551403, instock: false},
  {name: "AlpakaWurst", price: 24.70, id: 693284, instock: true},
  {name: "ElchSchinken", price: 58.30, id: 444017, instock: false},
  {name: "WalrossSpeck", price: 89.99, id: 703119, instock: true},
  {name: "SeeigelCreme", price: 21.75, id: 118904, instock: true},
  {name: "QuallenSalat", price: 12.40, id: 837201, instock: false},
  {name: "MondFisch", price: 201.50, id: 730008, instock: true},
  {name: "Lavahuhn", price: 88.80, id: 901734, instock: false},
  {name: "NebelSchinken", price: 49.95, id: 625103, instock: true},
  {name: "SumpfWurst", price: 17.60, id: 481720, instock: true},
  {name: "KristallKartoffel", price: 33.33, id: 302851, instock: false},
  {name: "GoldeneZwiebel", price: 420.69, id: 710420, instock: true},
  {name: "FischButter", price: 12.99, id: 772390, instock: true}
];

const productNames = products.map((product) => {
    return product.name;
}
)

const productPrices = products.map((product) => {
    return product.price;
}
)

const productInventory = products.map((product) => {
    return {
        name: product.name,
        instock: product.instock
    };
}
)

const expensiveProducts = products.filter(product => product.price >= 150);
const cheapProducts = products.filter(product => product.price < 150);
const instockProducts = products.filter(product => product.instock === true);
const outOfStockProducts = products.filter(product => product.instock === false);

const totalPriceInstock = products
   .filter(product => product.instock === true)
   .reduce((total, product) => {
    return total + product.price;
   }, 0);

    
function checkProduct(productName) {
    const product = products.find(product => product.name === productName);

if (!product) {
    console.log("Produkt nicht gefunden.");
} else if (product.instock) {
    console.log("Du kannst das Produkt kaufen!");
} else {
    console.log("Produkt ist leider nicht auf Lager.");
}
}

console.log(expensiveProducts);

console.log("INDEX JS GELADEN");

const productList = document.querySelector("#product-list");
const instockButton = document.querySelector("#instock-button");
const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm);
    })
    renderProducts(filteredProducts);
});

let showingInstockOnly = false;

instockButton.addEventListener("click", () => {
   if (showingInstockOnly) {
    renderProducts(products);
    instockButton.textContent = "Show only in-stock";
    showingInstockOnly = false;
}   else {
    renderProducts(instockProducts);
    instockButton.textContent = "Show all products";
    showingInstockOnly = true;
}
});

function renderProducts(productArray) {
    const productCards = productArray.map((product) => {
        return `
        <div class="product-card">
        <h2>${product.name}</h2>
        <p>Price: ${product.price} €</p>
        <p>${product.instock ? "Currently in Stock" : "Currently not in Stock"}</p>
        </div>
        `;
    });
    productList.innerHTML = productCards.join("");
};

renderProducts(products);



