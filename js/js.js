let arrayObjects = [
  {
    productImage: 'Assets/img1.jpg', 
    productTitle: 'Wig, Golden Blond #14/DB3',
    productPrice: '$10,000.00',
    productDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores officia numquam, qui, ratione, dolore unde praesentium ducimus',
    productUrl: 'https://chavivhair.dsquared.digital/products/wig-golden-blond-14-db3/'  
  },
  {
    productImage: 'Assets/img2.jpg', 
    productTitle: 'Wig, Platinum Blonde #12',
    productDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores officia numquam, qui, ratione, dolore unde praesentium ducimus',
    productPrice: '$8,000.00',
    productUrl: 'https://chavivhair.dsquared.digital/products/wig-platinum-blonde-12/'
  },
  {
    productImage: 'Assets/img3.jpg', 
    productTitle: 'Wig, Dark Blond #8/14',
    productDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores officia numquam, qui, ratione, dolore unde praesentium ducimus',
    productPrice: '$8,000.00',
    productUrl: 'https://chavivhair.dsquared.digital/products/wig-dark-blond-8-14-2/'
  },
  {
    productImage: 'Assets/img4.jpg', 
    productTitle: 'Wig, Dark Blond #8/16',
    productDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maiores officia numquam, qui, ratione, dolore unde praesentium ducimus',
    productPrice: '$8,000.00',
    productUrl: 'https://chavivhair.dsquared.digital/products/wig-dark-blond-8-14/'
  },
] 
let productData = '';

// will loop through the object arrays 
arrayObjects.forEach(products => {
  // will pass through the data to the productData variable
  // created a html structred template
    productData += `<div class="product-item-container">
                          <div class="img-container">
                                <img src="${products.productImage}" alt="">
                          </div>
                          <img class="img-star" src="Assets/star.png" alt="img-star">
                          <h3 class="product-title">${products.productTitle}</h3>
                          <p class="product-description">
                            ${products.productDescription}
                          </p>
                          <a href="${products.productUrl}" class="product-link">BUY NOW</a>
                    </div>`;

});

document.querySelector('.container').innerHTML = productData;