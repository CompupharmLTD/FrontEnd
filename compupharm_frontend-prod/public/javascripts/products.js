console.log("in products.js")

$(document).ready(function () {
   console.log("here 1")
   $.ajax({
      url: 'https://compupharmbackendservice.azurewebsites.net/Api/product/ProductList?status=active',
      type: "GET",
      dataType: "json",
      success: async function (response) {
         let products = response.data
         let child = ""
         for (let index = 0; index < products.length; index++) {
            console.log("here 2")
            const product = products[index];
            console.log(product.productImage)
            child += `<div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <div class="container_main">
                   <img src="${product.productImage}" alt="Avatar" class="image">
                </div>
                <div class="item_info">
                   <div class="temper_text">
                      ${product.productName}  
                   </div>
                   <div class="temper_text">
                        -
                   </div>
                   <div class="temper_text">
                      $${product.productPrice}
                   </div>
                </div>
                <div>
                   <p class="dololr_text">${product.productfullDescription}</p>
                </div>
             </div>`
            console.log("here 3")
            $("#parent").html(child)
         }
      },
      error: function (error) {
         console.log(`Error ${error}`);
      }
   });
})