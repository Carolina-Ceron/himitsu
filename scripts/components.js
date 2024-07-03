function loadComponents() {
    loadHeader();
    loadFooter();
    cartCounter();
}; 

function loadHeader(){
    document.getElementById("header-container").innerHTML = '';
    document.getElementById("header-container").innerHTML = code_header;
}

function loadFooter(){
    document.getElementById("footer-container").innerHTML = '';
    document.getElementById("footer-container").innerHTML = code_footer;
}

var currentPage = window.location.pathname.split("/").pop();

// HEADER
let code_header = 
`<nav>
<a href="${(currentPage === "index.html") ? "index.html" : "/index.html"}"><img src="/images/logo.png"></a>
<div class="nav-links" id="navLinks">
    <i class="bi bi-x-lg menu_icon" onclick="hideMenu()" style="text-align: right;"></i>
    <ul>
        <li><a href="${(currentPage === "index.html") ? "index.html" : "/index.html"}">INICIO</a></li>
        <li><a href="${(currentPage === "about-us.html") ? "#": (currentPage === "index.html") ? "pages/about-us.html" : "/pages/about-us.html"}">SOBRE NOSOTROS</a></li>
        <li><a href="${(currentPage === "contact.html") ? "#" : (currentPage === "index.html") ? "pages/contact.html" : "/pages/contact.html"}">CONTACTO</a></li>
        <li><a href="${(currentPage === "cart.html") ? "#" : (currentPage === "index.html") ? "pages/cart.html" : "/pages/cart.html"}" class="bi bi-cart4 nav-cart"></a></li>
    </ul>
</div>
<i class="bi bi-list menu_icon" onclick="showMenu()"></i>
</nav>`;


// FOOTER
let code_footer = `<p> GRUPO 15 | CODO A CODO | 2024 </p>`;


// CARGAR CATALOGO
if(currentPage === 'index.html'){
    loadCatalog();
}
else if(currentPage === 'check-out.html'){
    cartCounter();
    console.log("Aqui en checkout!");
    loadCheckOut();
}
else if(currentPage === 'cart.html'){
    cartCounter();
    loadCartPage();
}

