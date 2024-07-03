class Producto {
    static idCounter = 0;

    constructor(name, typeCod, img_source, price, height, width, weight) {
        this.id = ++Producto.idCounter;
        this.name = name;
        this.typeCod = typeCod;
        this.img_source = img_source;
        this.price = price;
        this.height = height;
        this.width = width;
        this.weight = weight;
        this.quantity = 1;
    }
}

let catalogo = [];

let product01 = new Producto('Remera 01', 'Remeras', "../images/remera_0001.png", 2500, 'L', 'L', 800);
    catalogo.push(product01);
let product02 = new Producto('Remera 02', 'Remeras', '../images/remera_0002.png', 2500, 'L', 'L', 800);
    catalogo.push(product02);
let product03 = new Producto('Remera 03', 'Remeras', '../images/remera_0003.png', 2500, 'L', 'L', 800);
    catalogo.push(product03);
let product04 = new Producto('Remera 04', 'Remeras', '../images/remera_0004.png', 2500, 'L', 'L', 800);
    catalogo.push(product04);
let product05 = new Producto('Remera 05', 'Remeras', '../images/remera_0005.png', 2500, 'L', 'L', 800);
    catalogo.push(product05);
let product06 = new Producto('Remera 06', 'Remeras', '../images/remera_0006.png', 2500, 'L', 'L', 800);
    catalogo.push(product06);
let product07 = new Producto('Print 01', 'Prints', '../images/Print_0001.png', 900, 60, 40, 50);
    catalogo.push(product07);
let product08 = new Producto('Print 02', 'Prints', '../images/Print_0002.png', 900, 60, 40, 50);
    catalogo.push(product08);
let product09 = new Producto('Print 03', 'Prints', '../images/Print_0003.png', 900, 60, 40, 50);
    catalogo.push(product09);
let product10 = new Producto('Print 04', 'Prints', '../images/Print_0004.png', 900, 60, 40, 50);
    catalogo.push(product10);
let product11 = new Producto('Print 05', 'Prints', '../images/Print_0005.png', 900, 60, 40, 50);
    catalogo.push(product11);
let product12 = new Producto('Print 06', 'Prints', '../images/Print_0006.png', 900, 60, 40, 50);
    catalogo.push(product12);
let product13 = new Producto('Print 07', 'Prints', '../images/Print_0007.png', 900, 60, 40, 50);
    catalogo.push(product13);
let product14 = new Producto('Agenda 01', 'Agendas', '../images/Agenda_001.png', 1000, 20, 15, 150);
    catalogo.push(product14);
let product15 = new Producto('Agenda 02', 'Agendas', '../images/Agenda_002.png', 1000, 20, 15, 150);
    catalogo.push(product15);
let product17 = new Producto('Agenda 03', 'Agendas', '../images/Agenda_003.png', 1000,  20, 15, 150);
    catalogo.push(product17);
let product16 = new Producto('Agenda 04', 'Agendas', '../images/Agenda_004.png', 1000,  20, 15, 150);
    catalogo.push(product16);
let product18 = new Producto('Agenda 05', 'Agendas', '../images/Agenda_005.png', 1000,  20, 15, 150);
    catalogo.push(product18);
let product19 = new Producto('Agenda 06', 'Agendas', '../images/Agenda_006.png', 1000, 20, 15, 150);
    catalogo.push(product19);
let product20 = new Producto('Agenda 07', 'Agendas', '../images/Agenda_007.png', 1000, 20, 15, 150);
    catalogo.push(product20);
let product21 = new Producto('Agenda 08', 'Agendas', '../images/Agenda_008.png', 1000,  20, 15, 150);
    catalogo.push(product21);
