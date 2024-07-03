const products = [
      { name: "T-Shirt", description: "A comfortable T-Shirt", image: "images/t-shirt.jpg", price: 19.99 },
      { name: "Hoodie", description: "A warm and cozy hoodie", image: "images/hoodie.jpg", price: 39.99 },
      { name: "Hoodie", description: "A warm and cozy hoodie", image: "images/hoodie.jpg", price: 39.99 }
    ];
    
    const productTemplate = document.getElementById("productTemplate");
    const productTbody = document.querySelector(".cart-table tbody");
    
    for (const product of products) {
      const productElement = productTemplate.content.cloneNode(true);
    
      //productElement.querySelector("img").src = product.image;
      productElement.querySelector("h4").textContent = product.name;
      productElement.querySelector("p").textContent = product.description;
      productElement.querySelector("td:nth-child(3)").textContent = `$${product.price.toFixed(2)}`; // Set price with 2 decimals
    
      productTbody.appendChild(productElement);
    }
    
  

