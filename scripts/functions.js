document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("shop-select").addEventListener("change", loadCatalog);
    loadCatalog();
});

// MENUs
function showMenu() {

    let navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";

}

function hideMenu() {
    let navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-100%";
}

function loadCatalog() {
    let card_container = document.getElementById("home-shop");
    let selectedCategory = document.getElementById("shop-select").value;

    card_container.innerHTML = "";
    console.log(selectedCategory);


    catalogo.forEach(product => {
        if (selectedCategory === "Todos" || product.typeCod === selectedCategory) {
            let card = document.createElement("div");
            card.classList.add("shop-card");


            let card_productId = document.createElement("span");
            card_productId.classList.add("card-product-id");
            card_productId.innerHTML = product.id;

            // console.log(card_productId.innerHTML);

            let card_productname = document.createElement("h2");
            card_productname.classList.add("card-product-name");
            card_productname.textContent = product.name;

            let card_imagenContainer = document.createElement('div');
            card_imagenContainer.classList.add('card-img-container');
            card_imagenContainer.title = 'Ver detalle';

            let card_imagen = document.createElement('img');
            card_imagen.src = product.img_source;
            card_imagen.alt = product.name;

            card_imagenContainer.appendChild(card_imagen);

            let card_precio = document.createElement('p');
            card_precio.classList.add("product-price");
            card_precio.textContent = product.price;
            card_precio.title = "Precio ARS";

            let card_btnAddCart = document.createElement('button');
            card_btnAddCart.classList.add('card-btn', 'btn-add-cart', 'bi', 'bi-cart-check-fill');
            card_btnAddCart.title = 'Añadir al carrito';
            card_btnAddCart.onclick = function () {
                addToCart(product.id);
            };

            let card_btnBuyNow = document.createElement('button');
            card_btnBuyNow.classList.add('card-btn', 'btn-buy-now', 'bi', 'bi-wallet2');
            card_btnBuyNow.title = 'Comprar ahora';
            card_btnBuyNow.onclick = function () {
                buyNow(product.id);
            };


            card.appendChild(card_productname);
            card.appendChild(card_imagenContainer);
            card.appendChild(card_precio);
            card.appendChild(card_btnAddCart);
            card.appendChild(card_btnBuyNow);
            // card.appendChild(card_productId);

            card.addEventListener('click', function (event) {
                handleCardClick(event, product.id);
            });

            card_container.appendChild(card);
        }
    });
}

// BUSCAR EN CATALOGO
function searchCatalog() {
    let card_container = document.getElementById("home-shop");
    let searchValue = document.getElementById("shop-search").value;
    console.log(searchValue);

    card_container.innerHTML = "";


    catalogo.forEach(product => {
        if (product.name.toLowerCase().includes(searchValue) || product.price.toString().includes(searchValue)) {
            let card = document.createElement("div");
            card.classList.add("shop-card");


            let card_productId = document.createElement("span");
            card_productId.classList.add("card-product-id");
            card_productId.innerHTML = product.id;

            // console.log(card_productId.innerHTML);

            let card_productname = document.createElement("h2");
            card_productname.classList.add("card-product-name");
            card_productname.textContent = product.name;

            let card_imagenContainer = document.createElement('div');
            card_imagenContainer.classList.add('card-img-container');
            card_imagenContainer.title = 'Ver detalle';

            let card_imagen = document.createElement('img');
            card_imagen.src = product.img_source;
            card_imagen.alt = product.name;

            card_imagenContainer.appendChild(card_imagen);

            let card_precio = document.createElement('p');
            card_precio.classList.add("product-price");
            card_precio.textContent = product.price;
            card_precio.title = "Precio ARS";

            let card_btnAddCart = document.createElement('button');
            card_btnAddCart.classList.add('card-btn', 'btn-add-cart', 'bi', 'bi-cart-check-fill');
            card_btnAddCart.title = 'Añadir al carrito';
            card_btnAddCart.onclick = function () {
                addToCart(product.id);
            };

            let card_btnBuyNow = document.createElement('button');
            card_btnBuyNow.classList.add('card-btn', 'btn-buy-now', 'bi', 'bi-wallet2');
            card_btnBuyNow.title = 'Comprar ahora';
            card_btnBuyNow.onclick = function () {
                buyNow(product.id);
            };


            card.appendChild(card_productname);
            card.appendChild(card_imagenContainer);
            card.appendChild(card_precio);
            card.appendChild(card_btnAddCart);
            card.appendChild(card_btnBuyNow);
            // card.appendChild(card_productId);

            card.addEventListener('click', function (event) {
                handleCardClick(event, product.id);
            });

            card_container.appendChild(card);
        }
    });
}

function clearSearch() {
    document.getElementById("shop-search").value = "";
}


// MENU
function showMenu() {

    let navLinks = document.getElementById("navLinks");
    navLinks.style.right = "0";

}

function hideMenu() {
    let navLinks = document.getElementById("navLinks");
    navLinks.style.right = "-100%";
}


// MODAL
function handleCardClick(event, productId) {
    if (event.target.tagName === 'BUTTON') {
        return;
    }
    const product = catalogo.find(product => product.id === productId);
    if (product) {
        openModal(product);
    } else {
        console.error("Producto no encontrado con el ID:", productId);
    }
}

function openModal(product) {
    if (event.target.tagName === 'BUTTON') {
        return;
    }


    // MODELO DEL MODAL
    // <section class="shop-modal" id="shop-modal">
    //     <div class="modal__container">
    //         <i class="bi bi-x modal__close" onclick="closeModal()"></i>
    //         <div class="modal__img">
    //             <img src="./images/Agenda_002.png">
    //         </div>
    //         <h2 class="modal_product_title" id="modal_product_title">Nombre del producto</h2>
    //         <ul id="product-detail">
    //             <li>Medidas: </li>
    //             <li>Peso: </li>
    //             <li>Valor: $</li>
    //         </ul>
    //         <div class="modal-btns">
    //             <button class="modal-btn bi bi-cart-check-fill" id="modal__btn-add-cart" title="Añadir al carrito" onclick="addToCart(this)"></button>
    //             <button class="modal-btn bi bi-wallet2" id="modal__btn-buy-now" title="Comprar ahora"></button>
    //         </div>

    //     </div>


    let modal = document.getElementById("shop-modal");
    let modalImage = modal.querySelector(".modal__img img");
    let productTitle = modal.querySelector(".modal_product_title");
    let productDetailList = modal.querySelector("#product-detail");
    let modal_btnAddToCart = modal.querySelector('#modal__btn-add-cart');
    let modal_btnBuyNow = modal.querySelector('#modal__btn-buy-now');

    modalImage.alt = "Imagen de " + product.name;
    modalImage.src = product.img_source;
    productTitle.textContent = product.name;

    productDetailList.innerHTML = "";
    createDetailList(product, productDetailList);

    modal_btnAddToCart.addEventListener("click", function (event) {
        addToCart(product.id);
    });
    modal_btnBuyNow.addEventListener("click", function (event) {
        buyNow(product.id);
        window.location.href = 'pages/check-out.html';
    });

    modal.classList.add("modal--show");
    document.getElementById("shop-modal").classList.add("modal--show");
}

function createDetailList(product, detailListElement) {

    let details = [
        { label: "Precio:", value: product.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' }) },
        { label: "Peso:", value: product.weight + " grs." },
        { label: "Alto:", value: (typeof product.height === 'number') ? product.height + " cms" : product.height },
        { label: "Ancho:", value: (typeof product.width === 'number') ? product.width + " cms" : product.width }
    ];


    details.forEach(detail => {
        let listItem = document.createElement("li");
        listItem.textContent = `${detail.label} ${detail.value}`;
        detailListElement.appendChild(listItem);
    });
}


function closeModal() {
    document.getElementById("shop-modal").classList.remove("modal--show");
}

// ADD TO CART
const carrito = [];

function addToCart(productId) {
    const product = catalogo.find(product => product.id === productId);
    if (product) {
        const existingProduct = carrito.find(p => p.id === productId);
        if (existingProduct) {
            existingProduct.quantity++;
            console.log(`Se ha aumentado la cantidad del producto ${existingProduct.id} ${existingProduct.name} ${existingProduct.quantity}`);
            document.getElementById('shop-alert-message').innerText = `"${product.name}" agregado al carrito correctamente!`;
            document.getElementById('shop-alert').style.display = 'block';
            console.log(carrito);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            cartCounter();
        } else {
            carrito.push(product);
            console.log(`Añadido correctamente al carrito: ${product.name}`);
            document.getElementById('shop-alert-message').innerText = `"${product.name}" agregado al carrito correctamente!`;
            document.getElementById('shop-alert').style.display = 'block';
            localStorage.setItem('carrito', JSON.stringify(carrito));
            cartCounter();

            // alert(`¡Producto: ${product.name} añadido al carrito correctamente!`);
        }
    } else {
        console.error("El producto no existe en el catálogo.");
    }
}



function cartCounter() {
    console.log("Estoy en cart counter");
    let cartQuantity = 0;
    const carritoStorage = localStorage.getItem('carrito');
    if (carritoStorage) {
        const carrito = JSON.parse(carritoStorage);
        carrito.forEach(p => {
            cartQuantity += p.quantity;
        });
    }
    console.log(cartQuantity);
    const navCartElement = document.querySelector(".nav-cart");
    console.log(navCartElement);
    if (navCartElement) {
       
        navCartElement.innerHTML = " " + cartQuantity;
    }
}

function closeShopAlert() {
    document.getElementById('shop-alert').style.display = 'none';
}

// BUY NOW
function buyNow(productId) {
    const product = catalogo.find(product => product.id === productId);
    if (product) {
        //  localStorage.setItem('carrito', JSON.stringify(product));
        localStorage.setItem('product', JSON.stringify(product));
        localStorage.setItem('buyNow', 'true');
        window.location.href = `pages/check-out.html`;
    }
    else {
        console.log("No se pudo ubicar el producto");
    }
}

// LOAD CHECK OUT
function loadCheckOut() {
    console.log("Buy now: " + localStorage.getItem('buyNow'));
    const bnProduct = localStorage.getItem('product');
    const buyNow = localStorage.getItem('buyNow');

    const carritoStorage = localStorage.getItem('carrito');
    console.log("Carrito: " + localStorage.getItem('carrito'));

    if (bnProduct != null) {
        console.log("Estoy en buy true");
        let product = JSON.parse(bnProduct);
        let purchaseResumeHTML = `<h3 class="ck_carrito_title"><i class="bi bi-cart4 nav-cart ck_purchase_icon"></i> Tu carrito</h3>`;
        let totalPrice = 0;
        purchaseResumeHTML += `
                    <div class="ck_carrito_item">
                        <div class="ck_carrito_item__img"><img src="${product.img_source}" alt="${product.name}"></div>
                        <h4 class="ck_carrito_item__name">${product.name}</h4>
                        <p class="ck_carrito_item_price">${product.price}</p>
                        <p class="ck_carrito_item_quantity">${product.quantity}</p>
                    </div>`;

        totalPrice += (product.price * product.quantity);

        purchaseResumeHTML += `<h3 class="ck_purchase_total">${totalPrice}</h3>
                <input type="submit" class="ck_btnFinalizar" value="Finalizar compra" onClick="endTransaction()"s>
                </input>`;

        document.querySelector('.ck_purchase_resume').innerHTML = purchaseResumeHTML;

    } else if (carritoStorage) {
        console.log("Estoy en el if else")
        const carrito = JSON.parse(carritoStorage);
            let purchaseResumeHTML = `<h3 class="ck_carrito_title"><i class="bi bi-cart4 nav-cart ck_purchase_icon"></i> Tu carrito</h3>`;
            let totalPrice = 0;

            carrito.forEach(product => {
                purchaseResumeHTML += `
                    <div class="ck_carrito_item">
                        <div class="ck_carrito_item__img"><img src="${product.img_source}" alt="${product.name}"></div>
                        <h4 class="ck_carrito_item__name">${product.name}</h4>
                        <p class="ck_carrito_item_price">${product.price}</p>
                        <p class="ck_carrito_item_quantity">${product.quantity}</p>
                    </div>`;

                totalPrice += (product.price * product.quantity);
            });

            purchaseResumeHTML += `<h3 class="ck_purchase_total">${totalPrice}</h3>
                <input type="submit" class="ck_btnFinalizar" value="Finalizar compra" onClick="endTransaction()"s>
                </input>`;

            document.querySelector('.ck_purchase_resume').innerHTML = purchaseResumeHTML;
        } else {
            console.log("El carrito está vacío");
            document.querySelector('.check-out__main').innerHTML = "";
            document.querySelector('.check-out__main').innerHTML = `
        <div class="ck_empty_cart">
        <p><i class="bi bi-minecart-loaded"></i></p>
        <h4>tu carrito está vacío</h4>
        <button class="ck_btn_goback"><a href="../index.html">regresar al inicio</a></button>
        </div>
        
        `
        }
    }


// END TRANSACTION
function endTransaction() {
        if(formValidation()){
            generateTicket();
        }
}

function formValidation() {
    let personalInfo = false;
    if(validatePersonalInfo()){
        personalInfo = true;
    }
    let shippingInfo = false;
    if(validateShippingInfo()){
        shippingInfo = true;
    }
    let paymentMethodSelected = false;
    if(validatePaymentMethodSelected()){
        paymentMethodSelected = true;
    }
    if(!validatePersonalInfo() || !validateShippingInfo()){
        event.preventDefault();
        alert("¡Revise los campos marcados en rojo!"); 
        return false;
    }
    if (!validatePaymentMethodSelected()) {
        event.preventDefault();
        alert("¡Elija un método de pago!"); 
        return false;
    }
    if(!validatePaymentFields()){
        event.preventDefault();
        alert("¡Complete la información de pago!"); 
        return false;
    }
    return true; // Agregué esta línea para devolver true cuando todas las validaciones sean exitosas
}

function validatePersonalInfo() {
    let ck_name = true;
    let ck_lastname = true;
    let ck_email = true;
    let ck_dni = true;
    let ck_phone = true;

    const nameInput = document.querySelector('#ck_name');
    const lastnameInput = document.querySelector('#ck_lastname');
    const emailInput = document.querySelector('#ck_email');
    const dniInput = document.querySelector('#ck_dni');
    const phoneInput = document.querySelector('#ck_phone');

    if (nameInput.value.trim() === '') {
        nameInput.style.border = "2px solid red";
        ck_name = false;
    }

    if (lastnameInput.value.trim() === '') {
        lastnameInput.style.border = "2px solid red";
        ck_lastname = false;
    }

    if (emailInput.value.trim() === '') {
        emailInput.style.border = "2px solid red";
        ck_email = false;
    }

    if (dniInput.value.trim() === '') {
        dniInput.style.border = "2px solid red";
        ck_dni = false;
    }

    if (phoneInput.value.trim() === '') {
        phoneInput.style.border = "2px solid red";
        ck_phone = false;
    }

    if (ck_name && ck_lastname && ck_email  && ck_dni && ck_phone){
        console.log("DEVUELVO TRUE")
        return true
    }
    return false;
}

function validateShippingInfo() {
    console.log("Estoy en validate shipping");
    let ck_postal_code = true;
    let ck_city = true;
    let ck_neighborhood = true;
    let ck_street = true;
    let ck_housenumber = true;

    const ckPostalCodeInput = document.querySelector('#ck_postal_code');
    const ckCityInput = document.querySelector('#ck_city');
    const ckNeighborhoodInput = document.querySelector('#ck_neighborhood');
    const ckStreetInput = document.querySelector('#ck_street');
    const ckHouseNumberInput = document.querySelector('#ck_housenumber');

    if (ckPostalCodeInput.value.trim() === '') {
        ckPostalCodeInput.style.border = "2px solid red";
        ck_postal_code = false;
    }

    if (ckCityInput.value.trim() === '') {
        ckCityInput.style.border = "2px solid red";
        ck_city = false;
    }

    if (ckNeighborhoodInput.value.trim() === '') {
        ckNeighborhoodInput.style.border = "2px solid red";
        ck_neighborhood = false;
    }

    if (ckStreetInput.value.trim() === '') {
        ckStreetInput.style.border = "2px solid red";
        ck_street = false;
    }

    if (ckHouseNumberInput.value.trim() === '') {
        ckHouseNumberInput.style.border = "2px solid red";
        ck_housenumber = false;
    }

    if (ck_postal_code && ck_city && ck_neighborhood  && ck_street && ck_housenumber){
        console.log("DEVUELVO TRUE SHIPPING")
        return true
    }
    return false;
}

function validatePaymentMethodSelected(){
    const paymentMethodRadios = document.querySelectorAll('input[name="ck_payment_method"]');
    let isPaymentMethodSelected = false;

    for (const radio of paymentMethodRadios) {
        if (radio.checked) {
            isPaymentMethodSelected = true;
            break;
        }
    }

    if (!isPaymentMethodSelected) {
        return false;
    }

  return true;
    

}

function validatePaymentFields() {
    console.log("ESTOY VALDANDO PAYMENT FIELDS")
    const paymentMethod = document.querySelector('input[name="ck_payment_method"]:checked').value;

    if (paymentMethod === 'debit') {
        const debitName = document.querySelector('input[name="ck_debit_card_name"]').value;
        const debitDni = document.querySelector('input[name="ck_debit_card_dni"]').value;
        const debitNumber = document.querySelector('input[name="ck_debit_card_number"]').value;
        const debitExp = document.querySelector('input[name="ck_debit_date_exp"]').value;
        const debitSecurityCode = document.querySelector('input[name="ck_debit_card_security_code"]').value;

        if (!debitName || !debitDni || !debitNumber || !debitExp || !debitSecurityCode) {
            console.log("Devolvi false por debito")
            return false; 
        }
    } else if (paymentMethod === 'credit') {
        const creditName = document.querySelector('input[name="ck_credit_card_name"]').value;
        const creditNumber = document.querySelector('input[name="ck_credit_card_number"]').value;
        const creditExp = document.querySelector('input[name="ck_credit_date_exp"]').value;
        const creditSecurityCode = document.querySelector('input[name="ck_credit_card_security_code"]').value;

        if (!creditName || !creditNumber || !creditExp || !creditSecurityCode) {
            return false; 
            console.log("Devolvi false por credito")
        }
    }
    console.log("DEvolvi true");
    return true; 
}

function closeCheckoutAlert(){
         localStorage.removeItem('buyNow');
         localStorage.removeItem('product');
        localStorage.removeItem('carrito');
        window.location.href = `../index.html`;
}

// GENERATE TICKET
function generateTicket(){
    event.preventDefault();

    const paymentMethod = document.querySelector('input[name="ck_payment_method"]:checked').value;

    const ticketContent = `
        <h2>Operación realizada con éxito</h2>
        <br>
        <p>A continuación, se muestra un resumen de la transacción:</p>
        <br>
        <ul>
            <li><strong>DATOS DE CONTACTO</strong></li>
            <li>Nombre: ${document.querySelector('#ck_name').value} ${document.querySelector('#ck_lastname').value}</strong></li>
            <li>Contacto: ${document.querySelector('#ck_email').value} | ${document.querySelector('#ck_phone').value}</li>
            <br>
            <li><strong>ENTREGA</strong></li>
            <li>Dirección: ${document.getElementById('ck_street').value} ${document.getElementById('ck_housenumber').value} CP  ${document.getElementById('ck_postal_code').value} ${document.getElementById('ck_neighborhood').value},  ${document.getElementById('ck_city').value}</li>
            <br>
            <li><strong>IMPORTE</strong></li>
            <li>Total $${document.querySelector('.ck_purchase_total').innerHTML} Facturado vía ${paymentMethod}</li>
            </ul>
            <br>
        <p>¡Gracias por tu compra!</p>
        <br>
    `;

    document.getElementById('checkout-alert-message').innerHTML = ticketContent;
    document.getElementById('checkout-alert').style.display = 'block';
    console.log(carrito);
}

// PAYMENT SECTION
function showPaymentSection(paymentMethod) {
    let paymentMethodContainer = document.querySelector('#payment_method_container');
    let paymentSectionHTML = '';

    if (paymentMethod === 'debit') {
        paymentSectionHTML = `
        <label for="ck_debit_name">Nombre que figura en la tarjeta:</label>
        <input type="text" name="ck_debit_card_name"  pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ]+"  required>


        <label for="ck_debitdni">DNI:</label>
        <input type="number" name="ck_debit_card_dni"  title="Por favor, ingrese solo números" required>

        <label for="ck_debitnumber">N&uacute;mero de tarjeta:</label>
        <input type="number" name="ck_debit_card_number" required>

        <label for="ck_debit_exp">Fecha de vencimiento:</label>
        <input type="date" name="ck_debit_date_exp" required>

        <label for="ck_debit_security_code">C&oacute;digo de seguridad:</label>
        <input type="number" name="ck_debit_card_security_code" required>
        `;
    } else if (paymentMethod === 'credit') {
        paymentSectionHTML = `
        <label for="ck_credit_name">Nombre que figura en la tarjeta:</label>
        <input type="text" name="ck_credit_card_name"  required>

        <label for="ck_creditdni">DNI:</label>
        <input type="number" name="ck_credit_card_dni" required>

        <label for="ck_creditnumber">N&uacute;mero de tarjeta:</label>
        <input type="number" name="ck_credit_card_number" required>

        <label for="ck_credit_exp">Fecha de vencimiento:</label>
        <input type="date" name="ck_credit_date_exp" required>

        <label for="ck_credit_security_code">C&oacute;digo de seguridad:</label>
        <input type="number" name="ck_credit_card_security_code" required>

        <label for="ck_credit_card_payment_quantity">Elija cantidad de cuotas:</label>
        <select for="ck_credit_card_payment_quantity" required>
            <option>1 cuota</option>
            <option>3 cuotas</option>
            <option>6 cuotas</option>
        </select>
        `;
    } else if (paymentMethod === 'mp') {
        paymentSectionHTML = `
            <div id="mercadopago_section">
                <!-- Contenido de la sección de pago Mercado Pago -->
            </div>
        `;
    }

    paymentMethodContainer.innerHTML = paymentSectionHTML;
}


document.getElementById("shop-search").addEventListener("keyup", function (event) {
    // Verificar si la tecla presionada es "Enter" (código 13)
    if (event.keyCode === 13) {
        // Llamar a la función de búsqueda
        searchCatalog();
    }
});

// CARGAR CART
function getCarrito() {
    // carrito = localStorage.getItem('carrito');
    carrito1 = localStorage.getItem('carrito');
    return carrito1;
    //  console.log("Este es el carrito desde getCarrito!" + localStorage.getItem('carrito'));
}

function updateCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cartCounter();
}

function loadCartPage() {
    console.log("Estoy en carrito!");
    getCarrito();
    cartCounter();
}

function btnEndTransaction() {
    carritoActual = getCarrito();
    localStorage.setItem("buyNow", "false");
    console.log("carrito desde end transaction:" + carritoActual);
    window.location.href = `check-out.html`;

}