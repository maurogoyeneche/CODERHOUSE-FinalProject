var inputSearchValue;

var order = [];
// agrega las ordenes al carrito
function addOrder(index){
    order.push(products[index]);
    localStorage.setItem('order', JSON.stringify(order));
    showOrder();
    mostrarOK("El producto se agregó al carrito");
}
//renderizar las ordenes en el carrito
function showOrder(){
    order = (localStorage.getItem('order')) ? JSON.parse(localStorage.getItem('order')) : [];
    totalOrderPrice.show('slow');
    orderContainer.empty();
    var total = 0;
    order.forEach(function(order, index){
        orderContainer.append(`
                <li class="item" id="000${index}">
                    <div class="row">
                        <div class="col-10"> ${order.productName}  U$s${order.price} </div>
                        <div class="col-2"><button type="button" data-price="${order.price}" id="${index}" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
                    </div>
                </li>
        `);
        total = total + order.price;
        totalOrderPrice.empty();
        totalOrderPrice.append(`<p><strong>Total: USD ${total} </strong></p>`); 
    })
    //borrar  elementos por su id de la lista de orders.  event.target = this
    $('.close').click(function () {
        
        //remueve un producto
        let indice = $(this).attr('id')
        var removeIndex = order.findIndex(x => x.indice === indice.indice);
        order.splice(removeIndex, 1);

        //calcula el precio
        let price = $(this).data('price');
        $(`#000${indice}`).remove()
        localStorage.setItem('order', JSON.stringify(order));
        total = total - price;
        totalOrderPrice.empty();
        totalOrderPrice.append(`<p><strong>Total: USD ${total} </strong></p>`); 
    })
}
//boton de vaciar el carrito
$('#btn-destroyCart').click(function(){
    orderContainer.empty();
    order = [];
    totalOrderPrice.empty().hide('slow');
    localStorage.clear()
})
// Funcion que llama a renderProducts.js para inyectar el html de productos y el modal
function showProducts(products) {
    products.forEach(function(product, index){
        productsContainer.append(renderProducts(product, index))  
    })
    var btnAddToCart = $('.add-to-cart');
    btnAddToCart.click(function(event){
        var indexSelection = $(event.target).data("id");
        addOrder(indexSelection);
    })
}

//obtener valor deL buscador
function getInputSearchValue() {
    var inputSearchValue = inputSearch.val();
    if (inputSearchValue.trim() !== '') {
        searchKeyValue(inputSearchValue);
    }
}
//INSERTAR EL VALOR DEL BUSCADOR EN EL HTML
function searchKeyValue(key) {
    var searchKey = $('#search-key');
    searchKey.html(key);
}
$(document).ready(() => {
        $.ajax({
            method: 'GET',
            url: "assets/js/data.json",
            dataType: 'json',
        }).done( function(products){
            // recibe el resultado y lo muestra en un elemento p
            showProducts(products);
            }).fail( function(){
            console.log('no ajax');
        })
    titleModal = $('.title-modal');
    productsContainer = $('#products-container');
    orderContainer = $('#order-container');
    // showProducts();
    totalOrderPrice = $('#total-order-price');
    showOrder();
    inputSearch = $('#input-search');
    formSearchValue = $('#form-submit');
    formSearchValue.on('submit', function(event){
        event.preventDefault();
        getInputSearchValue();
    })
    $("#input-search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        productsContainer.filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });

})
// Mostrar mensaje de Ã©️xito:
function mostrarOK(texto) {
    // Por las dudas, cerrar alert previo:
    $(".alert").alert('close').fadeIn();     
    setTimeout(function() {
         $(".alert").fadeOut();           
    },500);;
    var html_alert = "";
    html_alert += '<div class="alert alert-success alert-dismissible" role="alert">';
    html_alert += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
    html_alert += texto;
    html_alert += '</div>';
    // Mostrar alert luego del #content:
    $("#alert-text").after(html_alert);
}
