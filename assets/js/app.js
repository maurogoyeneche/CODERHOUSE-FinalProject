
 

///////ruben
var inputSearch;
var formSearch;
var btnAnimation;
var products;
var ShoppingCart;
//obtener valor deL buscador
function getInputSearchValue() {
    var inputSearchValue = inputSearch.value;
    if (inputSearchValue.trim() !== '') {
        searchKeyValue(inputSearchValue);
    }
}
//INSERTAR EL VALOR DEL BUSCADOR EN EL HTML
function searchKeyValue(key) {
    var searchKey = document.querySelector("#search-key");
    searchKey.innerHTML = key;
}
// funcion para darle color cuando pasa el mouse
function mouseOver() {

    btnAnimation.classList.remove("btn-dark");
    btnAnimation.classList.add("btn-success");
};
//funcion para quietarle el color cuando el mouse salga del elemento
function mouseOut() {
  
    btnAnimation.classList.remove("btn-success");
    btnAnimation.classList.add("btn-dark");
}
// function addToCart(id) {
//     var product = products.getById(id)[0];
//     ShoppingCart.add(product);
// }

window.onload = function () {
    //llamar al elemento con id="input-search"
    inputSearch = document.querySelector("#input-search");
    //llamar al formulario  
    formSearch = document.getElementById("form-search"); 
    //ANULAR EL SUBMIT DEL FORM POR DEFECTO/// se me rompió      
    formSearch.addEventListener("submit", function (event) {   
        event.preventDefault();
        getInputSearchValue();
    
    })
//Animacion en el boton Comprar
    btnAnimation = document.querySelector("#btn-buy");
    btnAnimation.addEventListener("mouseover", function () {  
        mouseOver();   
    })
    btnAnimation.addEventListener("mouseout", function () {
        mouseOut();
    })

//crear Producto y mostrarlos en el html 
    products = new Products();
    products.init(this.data);
    products.buildList('#products-container', 'data');

    //crear el objeto carrito y poblarlo en su contendedor
    // ShoppingCart = new ShoppingCart();
    // ShoppingCart.populate();
    // ShoppingCart.buildCart('#cart-container');

    // searchKey = document.querySelector("#search-key");
    // searchResultLength = document.querySelector("#search-result-length");

    // searchButton = document.querySelector("#search-button");
    // searchButton.disabled = true;
    // searchButton.addEventListener("click", getSearchBoxValue);

  
}




