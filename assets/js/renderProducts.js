function renderProducts(product, index){
    return  `
                <div id="hackerDiv" class="col-md-4 ;">
                    <div id="card-product" class="card m-1 ">
                        <img src="${product.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.productName}</h5>
                            <p class="card-text">${product.firstDescription}</p>
                            <p class="price"><span class="dolar-price">USD <span class="dolar-price">${product.price}</span> </span> </p>
                            <p id="card-txt" class="card-text">
                            <!-- Button trigger modal -->
                                <button id="btn" type="button" class="btn btn-info btn-block btn-sm" data-toggle="modal" data-target="#modalDescription">+ Info</button>
                            <!-- Button Add to Cart -->
                                <button id="add-to-cart" type="button" class="btn btn-dark btn-block btn-sm add-to-cart" data-id="${index}">Agregar al Carrito +</button>
                            </p>
                        </div>
                    </div>
                </div>  
    
                    <!-- Modal -->
                        <div class="modal fade" id="modalDescription" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <img src="${product.img}" class="card-img-top" alt="...">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                            <div class="modal-body">
                                <div id="hackerDiv" class="">
                                <div id="card-product" class="card m-1 ">
                                    <!-- <img src="${product.img}" id="img-modal" class="card-img-top" alt="..."> -->
                                    <div class="card-body">
                                        <h5 id="title-modal" class="card-title title-modal">${product.productName}</h5>
                                        <p id="model-modal" class="card-text model-modal">${product.model}</p>
                                        <p id="firstDescription-modal" class="card-text firstDescription-modal">${product.firstDescription}</p>
                                        <p id="secondDescription-modal" class="card-text secondDescription-modal">${product.secondDescription}</p>
                                        <p class="price-modal"><span class="dolar-price price-modal">USD <span class="dolar-price">${product.price}</span> </span> </p>
                                        <p id="card-txt" class="card-text">
                                            <!-- Button Add to Cart -->
                                            <button id="add-to-cart" type="button" class="btn btn-dark btn-block btn-sm add-to-cart" data-id="${index}">Agregar al Carrito +</button>
                                        <!-- Button trigger modal -->
                                            <button id="btn-modal" type="button" class="btn btn-red btn-block btn-sm" data-dismiss="modal">Cerrar</button>
                                        
                                        </p>
                                    </div>
                                </div>
                            </div> 
                            </div>
                            </div>
                        </div>
                        </div>
    
            `
    }