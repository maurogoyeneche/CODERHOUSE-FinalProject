function Products() {

    this.data = [];
    this.results = [];

    this.init = function (data) {
        this.data = data;
    }

    this.getById = function (id) {
        return this.data.filter((product) => product.id === id)
    }

    this.buildHtmlProduct = function (product) {
        return `
                <div id="hackerDiv" class="col-md-4 ;">
                    <div id="card-product" class="card m-1">
                        <img src="${product.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.productName}</h5>
                            <p class="card-text">${product.firstDescription}</p>
                            <p class="price">USD <span class="dolar-price">USD <span class="dolar-price">${product.price}</span> </span> </p>
                            <p id="card-txt" class="card-text">
                            <!-- Button trigger modal -->
                                <button id="btn" type="button" class="btn btn-info btn-block btn-sm" data-toggle="modal" data-target="#modalDescription">+ Info</button>
                                <button type="button" class="btn btn-dark btn-block btn-sm">Agregar al Carrito +</button>
                            </p>
                        </div>
                    </div>
                </div> 
                <!-- Modal --> 
                    <div class="modal fade" id="modalDescription" tabindex="-1 " role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered " role="document">
                            <div class="modal-content ">
                            <div class="modal-header">    
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <!-- aqui van los productos del index pero con mas descripcion -->
                                <div id="hackerDiv" class="row ;">
                                <div id="card-product" class="card  m-1">
                                    <img src="${product.img}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${product.productName}</h5>
                                        <p class="card-text">${product.model}</p>
                                        <p class="card-text">${product.firstDescription}</p>
                                        <p class="card-text">${product.secondDescription}</p>
                                        <p class="price"> <span class="dolar-price">USD <span class="dolar-price">${product.price}</span> </span> </p>
                                        <p id="card-txt" class="card-text">
                                        <!-- Button trigger modal -->
                                            <!-- <button id="btn" type="button" class="btn btn-info btn-block btn-sm data-toggle="modal" data-target="#modalDescription">+ Info</button> -->
                                            <button type="button" class="btn btn-dark btn-block btn-sm">Agregar al Carrito +</button>
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

    this.buildList = function (containerId, sourceData) {
        var container = document.querySelector(containerId);
        container.innerHTML = "";
        var html = '';

        this[sourceData].forEach(product => {
            html = html + this.buildHtmlProduct(product);
        });

        container.innerHTML = html;
    }

    this.search = function (key) {
        this.results = [];
        this.data.forEach((product) => {
            if (product.title.toLowerCase().includes(key.toLowerCase())) {
                this.results.push(product);
            }
        });
        return this.results;
    }

}


// function Products() {
//     this.data = [];
//     this.results = [];
//     this.init = function (data) {
//         this.data = data;
//     }
//     this.getById = function (id) {
//         return this.data.filter((product) => product.id === id)
//     }
//     this.buildHtmlProduct = function (product) {
//         return `
//         <div class="col-md-4">
//         <div class="row justify-content-center">
//           <div id="products-container" class="card-deck">
//               <div class="card">
//                 <img src="assets/img/ps5-lanzamiento.jpg" class="card-img-top" alt="...">
//                 <div class="card-body">
//                   <h5 class="card-title">${product.productName}</h5>
//                     <p class="card-text">${product.firstDescription}</p>
//                     <p class="price">USD <span class="dolar-price">USD <span class="dolar-price">${product.price}</span> </span> </p>
//                     <p class="card-text">
//                       <button id="btn" type="button" class="btn btn-info btn-block btn-sm">+ Info</button>
//                         <button type="button" class="btn btn-dark btn-block btn-sm">Agregar al Carrito +</button>
//                     </p>
//                 </div>
//               </div>
//           </div>
//         </div>
//       </div>
//         `
//     }
//     this.buildList = function (containerId, sourceData) {
//         var container = document.querySelector(containerId);
//         container.innerHTML = "";
//         var html = '';
//         this[sourceData].forEach(product => {
//             html = html + this.buildHtmlProduct(product);
//         });
//         container.innerHTML = html;
//     }
//     this.search = function (key) {
//         this.results = [];
//         this.data.forEach((product) => {
//             if (product.title.toLowerCase().includes(key.toLowerCase())) {
//                 this.results.push(product);
//             }
//         });
//         return this.results;
//     }
// }