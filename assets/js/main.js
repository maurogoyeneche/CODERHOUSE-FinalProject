var inputSearchValue;
var products;
var inputSearchValue;
var searchKey;
var productsContainer;

var order = [];
function addOrder(index){
    order.push(products[index]);
    localStorage.setItem('order', JSON.stringify(order));
    showOrder();
    mostrarOK("Se agregó el item al carrito");
}
//renderiza la Orden en el carrito
function showOrder(){
    order = (localStorage.getItem('order')) ? JSON.parse(localStorage.getItem('order')) : [];
    totalOrderPrice.show('slow');
    orderContainer.empty();
    var total = 0;
    order.forEach(function(order, index){
        orderContainer.append(`
                <li class="item" id="000${index}">
                    <div class="row">
                        <div class="col-md-10 d-inline"> ${order.productName}  U$s${order.price} </div>
                        <div class="col-md-2 d-inline"><button type="button" data-price="${order.price}" id="${index}" class="close" aria-label="Close"><span aria-hidden="true" style="font-size:10px"><i class="fas fa-minus-circle"></i></span></button></div>
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
//vacia el carrito y limpia el localstorage
$('#btn-destroyCart').click(function(){
    orderContainer.empty();
    order = [];
    totalOrderPrice.empty();
    localStorage.clear()
})
// Funcion que llama a renderProducts.js para inyectar el html de productos y el modal
function showProducts(products) {
    products.forEach(function(product, index){
        productsContainer.append(renderProducts(product, index))  
    })
    //evento que agrega los items segun id  al carrito
    var btnAddToCart = $('.add-to-cart');
    btnAddToCart.click(function(event){
        var indexSelection = $(event.target).data("id");
        addOrder(indexSelection);
    })
}

//inicio del documento
$(document).ready(() => {
        $.ajax({
            method: 'GET',
            url: "assets/js/data.json",
            dataType: 'json',
        }).done( function(response){
            // recibe el resultado y lo muestra en un elemento p
            products = response;
            showProducts(products);
            }).fail( function(){
            console.log('el llamado ajax falló');
        })

    productsContainer = $('#products-container');
    orderContainer = $('#order-container');
    totalOrderPrice = $('#total-order-price');
    showOrder();
    // mostrarOK();
    
    //evito que el form me haga submit por defecto
    formSearchValue = $('#form-submit');
    formSearchValue.on('submit', function(event){
        event.preventDefault();
    getInputSearchValue();
    })
    $('#btn-start').on('click', function(){
        $('#start').fadeOut('fast', function(){
            $('#start2').show('fast');
        });
        
    })

    $('#btn-buy').on('click', function(){
        $('#products-container-father').hide('fast');
        $('#search-advice').hide('fast');
        $('#btn-buy').hide('fast');
        $('#btn-buy2').show('fast');

        $('#search-section').hide('fast',function(){
            $('.show').show('fast');
           

        
        });

        $('#btn-buy2').on('click', function(){
            $('#products-container-father').show('fast');
            $('#search-advice').show('fast');
            $('#btn-buy2').hide('fast');
            $('#btn-buy').show('fast');
            $('.show').hide('fast');
            $('#search-section').show('fast')

        })
        
     


    })

})
// Mostrar mensaje de Ã©️xito:
function mostrarOK(texto) {
    // Por las dudas, cerrar alert previo:
    $(".alert").alert('close') 
    setTimeout(function() {
         $(".alert").fadeOut();           
    },400);;
    var html_alert = "";
    html_alert += '<div class="alert alert-success alert-dismissible" role="alert">';
    html_alert += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
    html_alert += texto;
    html_alert += '</div>';
    // Mostrar alert luego del #content:
    $(".alert-text").after(html_alert);
}


//testting filters
inputSearch = $('#input-search');
//obtener valor deL buscador
function getInputSearchValue() {
    var inputSearchValue = search(inputSearch.val());
    if (inputSearchValue == inputSearch.val()) {
       return searchKeyValue(inputSearchValue);
    }

}
// INSERTAR EL VALOR DEL BUSCADOR EN EL HTML
function searchKeyValue(key) {
    var searchKey = $('#search-key');
    searchKey.append(key);
   
}

function search(key) {
    results = [];
    products.forEach((product) => {
        if(product.productName.toLowerCase().includes(key.toLowerCase()) || product.model.toLowerCase().includes(key.toLowerCase())){
            results.push(product);
        }
    });
    productsContainer.empty()
    
    return  showProducts(results);
  
    
}

