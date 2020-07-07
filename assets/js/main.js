var inputSearchValue;
// var products = [
//     {
//         id: 0,
//         productName: "Play Station 5", 
//         model: "OVNI", 
//         firstDescription: "Tecnología Anti Gravity - VR",
//         secondDescription:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste beatae sequi vero assumenda in. ", 
//         price: 20325,
//         img: "assets/img/ps5-lanzamiento.jpg"
//     },
//     {
//         id: 1, 
//         productName: "Play Station 5", 
//         model: "SNOW", 
//         firstDescription: "Tecnología  White Anti Gravity - VR", 
//         secondDescription:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste beatae sequi vero assumenda in. ",
//         price: 16325,
//         img: "assets/img/ps5_7.jpg"
//     },
//     {
//         id: 2, 
//         productName: "Play Station 5", 
//         model: "SPACE", 
//         firstDescription: "Tecnología Responsive Anti Gravity - VR", 
//         secondDescription:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste beatae sequi vero assumenda in. ",
//         price: 26325,
//         img: "assets/img/ps5_3.jpg"
//     },
//     {
//         id: 3, 
//         productName: "Play Station 5", 
//         model: "CLASSIC", 
//         firstDescription: "camera VR integrada", 
//         secondDescription:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste beatae sequi vero assumenda in. ",
//         price: 30225,
//         img: "assets/img/ps5_8.jpg"
//     },
//     {
//         id: 4, 
//         productName: "JoyStick PS5", 
//         model: "Touch", 
//         firstDescription: "Retina Touch pad integrada - VR", 
//         secondDescription:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste beatae sequi vero assumenda in. ",
//         price: 26025,
//         img: "assets/img/joystick_ps5.jpg"
//     },
//     {
//         id: 5, 
//         productName: "Play Station 5", 
//         model: "SQUARE", 
//         firstDescription: "Unbreakable - VR", 
//         secondDescription:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste beatae sequi vero assumenda in. ",
//         price: 22325,
//         img: "assets/img/ps5_6.jpg"
//     }
// ]
var order = [];
function addOrder(index){
    order.push(products[index]);
    localStorage.setItem('order', JSON.stringify(order));
    showOrder();
}

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
//  showModal(); 
})
// Mostrar mensaje de Ã©️xito:
function mostrarOK(texto) {
    // Por las dudas, cerrar alert previo:
    $(".alert").alert('close');
    var html_alert = "";
    html_alert += '<div class="alert alert-success alert-dismissible" role="alert">';
    html_alert += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">Ã—</span></button>';
    html_alert += texto;
    html_alert += '</div>';
    // Mostrar alert luego del #content:
    $("#alert-text").after(html_alert);
}
///////
// function showOrder(){
//     order = (localStorage.getItem('order')) ? JSON.parse(localStorage.getItem('order')) : [];
//     orderContainer.empty();
//     order.forEach(function(order, index){
//         orderContainer.append(`
//                 <li class="item">
//                     <div class="row">
//                         <div class="col-10"> ${order.productName}  U$s${order.price} </div>
//                         <div class="col-2"><button type="button" id="${index}" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
//                     </div>
//                 </li>
//         `)
//         total = total + order.price;
//         totalOrderPrice.empty();
//         totalOrderPrice.append(`<p><strong>Total: USD ${total} </strong></p>`); 
//     })
//     $('.close').click(function () {
//         let indice = $(this).attr('id')
//         $(this).parent().parent().parent().remove()
//         order.splice(indice,1)
//         localStorage.setItem('order', JSON.stringify(order));
//     })
// }