console.log(products.avion.nbPieces);
console.log(products.length);

//Liste de tous les produits présent dans products.js ['avion','dinosaure',...]
const listProducts = [];
for (const product in products) {
    listProducts.push(product);
};

//Liste de tous les produits favories présent dans products.js (fav:true) ['dinosaure', 'licorne', 'moto']
const listProductsFav = [];
for (const product in products) {
    if(products[product]['fav']){
        listProductsFav.push(product);
    }
};

//balise de la page produit
const mainProduct = document.getElementById("mainProduct");
const containerProduct = document.getElementById("containerProduct");
const containerGrid = document.getElementById("containerGrid");
//liste des div productFav
const productFav = document.querySelectorAll(".productFav");

function createProductInfo(){
    const fav = products['avion'];

    let newH = document.createElement("h2");
    newH.setAttribute("id", `containerProductName`);
    newH.innerHTML = fav.nom;

    let newImg = document.createElement("img");
    newImg.setAttribute("id", `imgContainerProduct`);
    newImg.setAttribute("src", `img/${fav.img}`);

    let newOl = document.createElement("ol");

    let newItemNom = document.createElement("li");
    newItemNom.setAttribute("id", `containerProductNom`);
    newItemNom.innerHTML = fav.nom;
    newOl.appendChild(newItemNom);

    let newItemNomCreator = document.createElement("li");
    newItemNomCreator.setAttribute("id", `containerProductNomCreator`);
    newItemNomCreator.innerHTML = `Creator: ${fav.nomCreator}`;
    newOl.appendChild(newItemNomCreator);

    let newItemNbPieces = document.createElement("li");
    newItemNbPieces.setAttribute("id", `containerProductNbPieces`);
    newItemNbPieces.innerHTML = `Pieces: ${fav.nbPieces}`;
    newOl.appendChild(newItemNbPieces);

    let newItemPrice = document.createElement("li");
    newItemPrice.setAttribute("id", `containerProductPrice`);
    newItemPrice.innerHTML = `Price: ${fav.price}`;
    newOl.appendChild(newItemPrice);

    let newBtnCommande = document.createElement("button");
    newBtnCommande.setAttribute("id", `containerBtn`);
    newBtnCommande.innerHTML = `Commander`;

    containerProduct.appendChild(newH);
    containerProduct.appendChild(newImg);
    containerProduct.appendChild(newOl);
    containerProduct.appendChild(newBtnCommande);
}
//création du code html pour les produits favoris, n fois
function createFav(n){
    if(n===0) return;

    //return l'objet fav d'indice n-1
    const fav = products[listProductsFav[n-1]];

    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", `product${n}`);
    newDiv.setAttribute("class", "productFav");

    let newH = document.createElement("h2");
    newH.innerHTML = fav.nom;

    let newImg = document.createElement("img");
    newImg.setAttribute("id", `img_product${n}`);
    newImg.setAttribute("src", `img/${fav.img}`);

    let newOl = document.createElement("ol");
    let newItemNom = document.createElement("li");
    newItemNom.innerHTML = fav.nom;
    newOl.appendChild(newItemNom);
    let newItemNomCreator = document.createElement("li");
    newItemNomCreator.innerHTML = `Creator: ${fav.nomCreator}`;
    newOl.appendChild(newItemNomCreator);
    let newItemNbPieces = document.createElement("li");
    newItemNbPieces.innerHTML = `Pieces: ${fav.nbPieces}`;
    newOl.appendChild(newItemNbPieces);
    let newItemPrice = document.createElement("li");
    newItemPrice.innerHTML = `Price: ${fav.price}`;
    newOl.appendChild(newItemNom);

    let newBtnCommande = document.createElement("button");
    newBtnCommande.setAttribute("id", `FavBtn${n}`);
    newBtnCommande.innerHTML = `Commander`;

    newDiv.appendChild(newH);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newOl);
    newDiv.appendChild(newBtnCommande);
    mainProduct.appendChild(newDiv);

    createFav(n-1);
};

//creation des 3 produits phares
createFav(3);
//creation du produit selectionné
createProductInfo();

//création de la grille d'image
for (const product in products) {
    let newCell = document.createElement("div");
    newCell.setAttribute("class", "cell");
    let newCellImg = document.createElement("img");
    newCellImg.setAttribute("src", `img/${products[product].img}`);
    newCellImg.setAttribute("alt", product);
    //newCellImg.setAttribute("onclick", "changeSelectProduct()");

    containerGrid.appendChild(newCell).appendChild(newCellImg);
};

//on stocke le produit sélectionné pour une gestion ultérieur lors du clic sur le bouton commande.
let selectedProduct;
//fonction appelé sur le clic d'une image, actualise le produit visualisé par l'utilisateur.
function changeSelectProduct(e){
    let selection = e.target.alt;
    selectedProduct = selection;

    console.log(products[selection].img);
    document.getElementById("containerProductName").innerHTML = products[selection].nom;
    document.getElementById("imgContainerProduct").src = `img/${products[selection].img}`;
    document.getElementById("containerProductNom").innerHTML = `Produit: ${products[selection].nom}`;
    document.getElementById("containerProductNomCreator").innerHTML = `Creator: ${products[selection].nomCreator}`;
    document.getElementById("containerProductNbPieces").innerHTML = `Pieces: ${products[selection].nbPieces}`;
    document.getElementById("containerProductPrice").innerHTML = `Price: ${products[selection].price}`;
};


const listCell = document.querySelectorAll(".cell");
console.log(listCell);

for(let item in listCell){
    document.addEventListener("click", function(e) {
        changeSelectProduct(e)
    })
}