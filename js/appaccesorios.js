class Producto {
    constructor(id, nombre, precio, stock, img, descripcion, alt) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 1
        this.stock = stock
        this.img = img
        this.descripcion = descripcion
        this.alt = alt
    }
}

class ProductoController {
    constructor() {
        this.listaProductos = []
        this.contenedor_productos = document.getElementById("contenedor_productos")
    }

    levantarProductos() {
        this.listaProductos = [
            new Producto(1, "Riñonera Mochila", 16000, 10, "../assets/accesorios/rinoneraMochila1.png", "Riñonera mochila con excelente calidad de herrajes.Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "riñoneraMochila"),
            new Producto(2, "Riñonera con bolsillo Frontal", 16000, 10, "../assets/accesorios/rinoFrontal1.png", "Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "riñoneraFrontal"),
            new Producto(3, "Porta notebook de cuero floater 17 pulgadas", 17000, 10, "../assets/accesorios/portaNotebook1.png", "Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "portaNotebook"),
            new Producto(4, "Manta de lana y porta manta en cuero", 11000, 10, "../assets/accesorios/portaManta1.png", "Manta de lana y porta manda de cuero con excelente calidad de herrajes. Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "portaManta"),
            new Producto(5, "Mochila mediana", 23000, 10, "../assets/accesorios/mochilaH1.png", "Dos bolsillos frontales, tiras regulables con excelente calidad de herrajes .Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "MochilaEuropa"),
            new Producto(6, "Mochila pequeña", 23000, 10, "../assets/accesorios/mochilaM1.png", "Dos bolsillos frontales, tiras regulables con excelente calidad de herrajes .Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "MochilaEuropa"),
            new Producto(7, "Matero con doble cierre frontal", 34000, 10, "../assets/accesorios/matera1.png", "Matero con espacio para termo, mate, yerbera y azucarera .Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "Matera"),
            new Producto(8, "Cartera Tote cierre imantado", 21000, 10, "../assets/accesorios/carteraTote1.png", "Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "CarteraTote"),
            new Producto(9, "Cartera mochila con monedero", 23000, 10, "../assets/accesorios/carteraMochila1.png", "Cartera convertible a mochila con tiras desmontables y excelente calidad de herrajes. Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "CarteraMochila"),
            new Producto(10, "Cartera Bandolera", 23000, 10, "../assets/accesorios/carteraBandolera1.png", "Tiras de cuero de cocodrilo y excelente calidad de herrajes. Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "carteraBandolera"),
            new Producto(11, "Bolso Tubular", 40000, 10, "../assets/accesorios/bolsoTubular1.png", "Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano con excelente calidad de herrajes", "bolsoTubular"),
            new Producto(12, "Billetera Dólar", 6000, 10, "../assets/accesorios/billeteraH1.png", "Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "billeteraH1"),
            new Producto(13, "Billetera con cierre", 6000, 10, "../assets/accesorios/billeteraCierre1.png", "Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "billeteraCierre"),
            new Producto(14, "Bandolera Porta Celular con tira regulable", 16000, 10, "../assets/accesorios/bandoleraCelular1.png", "Bandolera con excelente calidad de herrajes. Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "bandoleraCelular"),
            new Producto(15, "Bandolera con tapa dura y cierre imantado", 17000, 10, "../assets/accesorios/bandoleraIman1.png", "Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "bandolera"),
            new Producto(16, "Billetera con elástico", 4000, 10, "../assets/accesorios/billeteraElastico1.png", "Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "billeteraElastico"),
            new Producto(17, "Mochila Bandolera", 25000, 10, "../assets/accesorios/mochilaBandolera1.png", "Mochila convertible a bandolera con bolsillo frontal y excelente calidad de herrajes. Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "mochilaBandolera"),
            new Producto(18, "Morral grande con tira regulable", 40000, 10, "../assets/accesorios/morralGrande1.png", "Morral grande con dos bolsillos delanteros y excelente calidad de herrajes.Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "morralGrande"),
            new Producto(19, "Riñonera con Dos Cierres y tira regulable", 15000, 10, "../assets/accesorios/rinoneraCierres1.png", "Excelente calidad de herrajes.Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "RinoneraCierre"),
            new Producto(20, "Riñonera tipo banana con tira regulable", 80000, 10, "../assets/accesorios/rinoneraBanana1.png", "Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "rinoneraBanana"),
            new Producto(21, "Bandolera Doble Cierre", 20000, 10, "../assets/accesorios/bandolera1.png", "Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "billeteraCierre"),
            new Producto(22, "Billetera de cuero floater con cierre", 9000, 10, "../assets/accesorios/billeteraLarga1.png", "Utilizable como sobre de fiesta y porta celular. Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "billeteraLarga"),
            new Producto(23, "Botinero doble cierre", 17000, 10, "../assets/accesorios/botinero1.png", "Fabricado con 100% cuero vacuno, trabajado artesanalmente a mano", "botinero"),



        ]
    }

    mostrarEnDOM() {
        // Mostramos los productos en DOM de manera dinámica
        this.listaProductos.forEach((producto) => {
            let imgSrc = producto.img; // Por defecto, utilizamos la imagen original
            let imgIndex = 1; // Índice de imagen actual

            // Verificamos si es "Capri" o "Roma" para cambiar la imagen
            if (producto.nombre === "Riñonera Mochila") {
                imgSrc = `../assets/accesorios/rinoneraMochila${imgIndex}.png`;
            } else if (producto.nombre === "Riñonera con bolsillo Frontal") {
                imgSrc = `../assets/accesorios/rinoFrontal${imgIndex}.png`;
            } else if (producto.nombre === "Porta notebook de cuero floater 17 pulgadas") {
                imgSrc = `../assets/accesorios/portaNotebook${imgIndex}.png`;
            } else if (producto.nombre === "Manta de lana y porta manta en cuero") {
                imgSrc = `../assets/accesorios/portaManta${imgIndex}.png`;
            } else if (producto.nombre === "Mochila mediana") {
                imgSrc = `../assets/accesorios/mochilaH${imgIndex}.png`;
            } else if (producto.nombre === "Mochila pequeña") {
                imgSrc = `../assets/accesorios/mochilaM${imgIndex}.png`;
            } else if (producto.nombre === "Matero con doble cierre frontal") {
                imgSrc = `../assets/accesorios/matera${imgIndex}.png`;
            } else if (producto.nombre === "Cartera Con Monedero") {
                imgSrc = `../assets/accesorios/carteraMochila${imgIndex}.png`;
            } else if (producto.nombre === "Cartera Tote cierre imantado") {
                imgSrc = `../assets/accesorios/carteraTote${imgIndex}.png`;
            } else if (producto.nombre === "Cartera Bandolera") {
                imgSrc = `../assets/accesorios/carteraBandolera${imgIndex}.png`;
            } else if (producto.nombre === "Bolso Tubular") {
                imgSrc = `../assets/accesorios/bolsoTubular${imgIndex}.png`;
            } else if (producto.nombre === "Billetera con cierre") {
                imgSrc = `../assets/accesorios/billeteraCierre${imgIndex}.png`;
            } else if (producto.nombre === "Bandolera Doble Cierre") {
                imgSrc = `../assets/accesorios/bandolera${imgIndex}.png`;
            } else if (producto.nombre === "Bandolera Porta Celular con tira regulable") {
                imgSrc = `../assets/accesorios/bandoleraCelular${imgIndex}.png`;
            } else if (producto.nombre === "Bandolera con tapa dura y cierre imantado") {
                imgSrc = `../assets/accesorios/bandoleraIman${imgIndex}.png`;
            } else if (producto.nombre === "Billetera con elástico") {
                imgSrc = `../assets/accesorios/bandoleraElastico${imgIndex}.png`;
            } else if (producto.nombre === "Mochila Bandolera") {
                imgSrc = `../assets/accesorios/mochilaBandolera${imgIndex}.png`;
            } else if (producto.nombre === "Morral grande con tira regulable") {
                imgSrc = `../assets/accesorios/morralGrande${imgIndex}.png`;
            } else if (producto.nombre === "Riñonera con Dos Cierres y tira regulable") {
                imgSrc = `../assets/accesorios/rinoneraCierres${imgIndex}.png`;
            } else if (producto.nombre === "Riñonera tipo banana con tira regulable") {
                imgSrc = `../assets/accesorios/rinoneraBanana${imgIndex}.png`;
            } else if (producto.nombre === "Billetera de cuero floater con cierre") {
                imgSrc = `../assets/accesorios/billeteraLarga${imgIndex}.png`;
            } else if (producto.nombre === "Botinero doble cierre") {
                imgSrc = `../assets/accesorios/botinero${imgIndex}.png`;
            }



            const card = document.createElement('div');
            card.classList.add('card', 'cardP');

            const img = document.createElement('img');
            img.id = `product-image-${producto.id}`;
            img.src = imgSrc;
            img.alt = producto.alt;

            // Función para cambiar la imagen automáticamente
            // Función para cambiar la imagen automáticamente
            const changeImage = () => {
                // Verificamos el producto y actualizamos la imagen según su nombre
                switch (producto.nombre) {
                    case "Riñonera Mochila":
                        imgIndex = (imgIndex % 4) + 1; // Alternamos el índice de imagen de 1 a 8
                        img.src = `../assets/accesorios/rinoneraMochila${imgIndex}.png`;
                        break;
                    case "Riñonera con bolsillo Frontal":
                        imgIndex = (imgIndex % 3) + 1;
                        img.src = `../assets/accesorios/rinoFrontal${imgIndex}.png`;
                        break;
                    // Agrega casos para los otros productos con hasta 8 imágenes
                    case "Porta notebook de cuero floater 17 pulgadas":
                        imgIndex = (imgIndex % 2) + 1;
                        img.src = `../assets/accesorios/portaNotebook${imgIndex}.png`;
                        break;
                    case "Manta de lana y porta manta en cuero":
                        imgIndex = (imgIndex % 3) + 1;
                        img.src = `../assets/accesorios/portaManta${imgIndex}.png`;
                        break;
                    case "Mochila mediana":
                        imgIndex = (imgIndex % 5) + 1;
                        img.src = `../assets/accesorios/mochilaH${imgIndex}.png`;
                        break;
                    case "Mochila pequeña":
                        imgIndex = (imgIndex % 2) + 1;
                        img.src = `../assets/accesorios/mochilaM${imgIndex}.png`;
                        break;
                    case "Cartera Tote cierre imantado":
                        imgIndex = (imgIndex % 2) + 1;
                        img.src = `../assets/accesorios/carteraTote${imgIndex}.png`;
                        break;
                    case "Matero con doble cierre frontal":
                        imgIndex = (imgIndex % 7) + 1;
                        img.src = `../assets/accesorios/matera${imgIndex}.png`;
                        break;
                    case "Cartera mochila con monedero":
                        imgIndex = (imgIndex % 2) + 1;
                        img.src = `../assets/accesorios/carteraMochila${imgIndex}.png`;
                        break;
                    case "Cartera Bandolera":
                        imgIndex = (imgIndex % 4) + 1;
                        img.src = `../assets/accesorios/carteraBandolera${imgIndex}.png`;
                        break;
                    case "Bolso Tubular":
                        imgIndex = (imgIndex % 4) + 1;
                        img.src = `../assets/accesorios/bolsoTubular${imgIndex}.png`;
                        break;
                    case "Billetera con cierre":
                        imgIndex = (imgIndex % 5) + 1;
                        img.src = `../assets/accesorios/billeteraCierre${imgIndex}.png`;
                        break;
                    case "Bandolera Doble Cierre":
                        imgIndex = (imgIndex % 3) + 1;
                        img.src = `../assets/accesorios/bandolera${imgIndex}.png`;
                        break;
                    case "Bandolera Porta Celular con tira regulable":
                        imgIndex = (imgIndex % 12) + 1;
                        img.src = `../assets/accesorios/bandoleraCelular${imgIndex}.png`;
                        break;
                    case "Bandolera con tapa dura y cierre imantado":
                        imgIndex = (imgIndex % 3) + 1;
                        img.src = `../assets/accesorios/bandoleraIman${imgIndex}.png`;
                        break;
                    case "Billetera con elástico":
                        imgIndex = (imgIndex % 2) + 1;
                        img.src = `../assets/accesorios/billeteraElastico${imgIndex}.png`;
                        break;
                    case "Mochila Bandolera":
                        imgIndex = (imgIndex % 4) + 1;
                        img.src = `../assets/accesorios/mochilaBandolera${imgIndex}.png`;
                        break;
                    case "Morral grande con tira regulable":
                        imgIndex = (imgIndex % 3) + 1;
                        img.src = `../assets/accesorios/morralGrande${imgIndex}.png`;
                        break;
                    case "Riñonera con Dos Cierres y tira regulable":
                        imgIndex = (imgIndex % 2) + 1;
                        img.src = `../assets/accesorios/rinoneraCierres${imgIndex}.png`;
                        break;
                    case "Riñonera tipo banana con tira regulable":
                        imgIndex = (imgIndex % 2) + 1;
                        img.src = `../assets/accesorios/rinoneraBanana${imgIndex}.png`;
                        break;
                    case "Billetera de cuero floater con cierre":
                        imgIndex = (imgIndex % 4) + 1;
                        img.src = `../assets/accesorios/billeteraLarga${imgIndex}.png`;
                        break;
                    case "Botinero doble cierre":
                        imgIndex = (imgIndex % 2) + 1;
                        img.src = `../assets/accesorios/botinero${imgIndex}.png`;
                        break;
                    default:
                        // Si el producto no coincide con ninguno de los casos anteriores, no se cambia la imagen
                        break;
                }
            };

            // Temporizador para cambiar la imagen cada 3 segundos (ajusta el tiempo según tus necesidades)
            setInterval(changeImage, 3000);

            const cardInfo = document.createElement('div');
            cardInfo.classList.add('card-info', 'cardInfoP');

            const h3 = document.createElement('h3');
            h3.textContent = producto.nombre;

            const p1 = document.createElement('p');
            p1.textContent = producto.descripcion;

            const p2 = document.createElement('p');
            p2.textContent = `$${producto.precio}`;

            cardInfo.appendChild(h3);
            cardInfo.appendChild(p1);
            cardInfo.appendChild(p2);

            card.appendChild(img);
            card.appendChild(cardInfo);

            this.contenedor_productos.appendChild(card);
        });
    }


    //** */
    darEventoClickAProductos(controladorCarrito) {
        this.listaProductos.forEach(producto => {

            const btnAP = document.getElementById(`accesorio-${producto.id}`)
            btnAP.addEventListener("click", () => {

                controladorCarrito.agregar(producto)
                controladorCarrito.guardarEnStorage()
                //TODO: que solo añada 1 producto al DOM. Que no recorra toda la lista.
                controladorCarrito.mostrarEnDOM()
            })
        })
    }
}
//


class CarritoController {
    constructor() {
        this.listaCarrito = []
        this.contenedor_carrito = document.getElementById("contenedor_carrito")
    }

    agregar(producto) {
        const index = this.listaCarrito.findIndex(p => p.id === producto.id);
        if (index !== -1) {
            this.listaCarrito[index].cantidad++;
        } else {
            this.listaCarrito.push(producto);
        }
    }


    guardarEnStorage() {
        let listaCarritoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito", listaCarritoJSON)
    }

    verificarExistenciaEnStorage() {
        this.listaCarrito = JSON.parse(localStorage.getItem('listaCarrito')) || []
        if (this.listaCarrito.length > 0) {
            this.mostrarEnDOM()
            this.darEventoClickACancelarCompra()
        }
    }

    limpiarContenedor_Carrito() {
        //limpio el contenedor para recorrer todo el arreglo y no se repita sin querer los productos.
        this.contenedor_carrito.innerHTML = ""
    }
    mostrarEnDOM() {
        this.limpiarContenedor_Carrito();
        if (this.listaCarrito.length === 0) {
            this.contenedor_carrito.innerHTML = "<p>El carrito está vacío</p>";
        } else {
            this.listaCarrito.forEach(producto => {
                contenedor_carrito.innerHTML +=
                    `<div class="card">
                        <img src="${producto.img}" alt="${producto.alt}">
                        <div class="card-info">
                            <h3>${producto.nombre}</h3>
                            <p>Cantidad: ${producto.cantidad}</p>
                            <p>Precio: $${producto.precio}</p>
                        </div>
                    </div>`;
            });
        }
    }
    //Borrar carrito al cancelar la compra
    limpiarCarrito() {
        this.listaCarrito = [];
        localStorage.removeItem("listaCarrito");
        this.mostrarEnDOM();
    }

    darEventoClickACancelarCompra() {
        const btnCancelarCompra = document.getElementById("btnCancelarCompra");
        btnCancelarCompra.addEventListener("click", () => {
            this.limpiarCarrito();
        });
    }
}
//
const controladorProductos = new ProductoController()
controladorProductos.levantarProductos()

const controladorCarrito = new CarritoController()

//Verifica en STORAGE y muestra en DOM si hay algo.
controladorCarrito.verificarExistenciaEnStorage()

//DOM
controladorProductos.mostrarEnDOM()

//EVENTOSf
controladorProductos.darEventoClickAProductos(controladorCarrito)

