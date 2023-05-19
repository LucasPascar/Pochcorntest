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
            new Producto(20, "Riñonera Mochila", 16000, 10, "../assets/accesorios/rinoneraMochila1.png" ,"Posee tiras regulables, 100% cuero vacuno trabajado artesanalmente a mano con excelente calidad de herrajes", "riñoneraMochila"),
            new Producto(21, "Riñonera con bolsillo Frontal", 16000, 10, "../assets/accesorios/rinoFrontal1.png", "Posee tiras regulables, 100% cuero vacuno trabajado artesanalmente a mano", "riñoneraFrontal"),
            new Producto(22, "Porta notebook de cuero floater 17 pulgadas", 17000, 10, "../assets/accesorios/portaNotebook1.png", "100% cuero vacuno trabajado artesanalmente a mano", "portaNotebook"),
            new Producto(23, "Manta de lana y porta manta en cuero", 11000, 10, "../assets/accesorios/portaManta1.png", "100% cuero vacuno trabajado artesanalmente a mano con excelentes herrajes", "portaManta"),
            new Producto(24, "Mochila grande", 23000, 10, "../assets/accesorios/mochilaH1.png", "Dos bolsillos frontales, tiras regulables, 100% cuero vacuno trabajado artesanalmente a mano con excelente calidad de herrajes", "MochilaEuropa"),
            new Producto(25, "Mochila pequeña", 23000, 10, "../assets/accesorios/mochilaM1.png", "Dos bolsillos frontales, tiras regulables, 100% cuero vacuno trabajado artesanalmente a mano con excelente calidad de herrajes", "MochilaEuropa"),
            new Producto(26, "Matero con doble cierre frontal", 34000, 10, "../assets/accesorios/matera1.png", "Con espacio para termo, mate, yerbera y azucarera ,100% cuero vacuno trabajado artesanalmente a mano con una excelente calidad de herrajes", "Matera"),
            new Producto(27, "Cartera Tote cierre con imán", 21000, 10, "../assets/accesorios/carteraTote1.png", "100% cuero vacuno trabajado artesanalmente a mano", "CarteraTote"),
            new Producto(28, "Cartera Con Monedero", 23000, 10, "../assets/accesorios/carteraMochila1.png", "Cartera convertible a mochila, con tiras desmontables y monedero incluido. 100% cuero vacuno, trabajado artesanalmente a mano, con excelente calidad de herrajes.", "CarteraMochila"),
            new Producto(29, "Cartera Bandolera", 23000, 10, "../assets/accesorios/carteraBandolera1.png", "Tiras de cuero de cocodrilo, 100% cuero vacuno trabajado artesanalmente a mano con Excelente calidad de herrajes", "carteraBandolera"),
            new Producto(30, "Bolso Tubular", 40000, 10, "../assets/accesorios/bolsoTubular1.png", "100% cuero vacuno trabajado artesanalmente a mano", "bolsoTubular"),
            new Producto(31, "Billetera Dólar", 6000, 10, "../assets/accesorios/billeteraH1.png", "100% cuero vacuno trabajado artesanalmente a mano", "billeteraH1"),
            new Producto(32, "Billetera con cierre", 6000, 10, "../assets/accesorios/billeteraCierre1.png", "100% cuero vacuno trabajado artesanalmente a mano", "billeteraCierre"),
            new Producto(33, "Bandolera doble cierre", 20000, 10, "../assets/accesorios/bandolera1.png", "100% cuero vacuno trabajado artesanalmente a mano con una excelente calidad de herrajes", "bandolera"),


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
            } else if (producto.nombre === "Mochila grande") {
                imgSrc = `../assets/accesorios/mochilaH${imgIndex}.png`;
            } else if (producto.nombre === "Mochila pequeña") {
                imgSrc = `../assets/accesorios/mochilaM${imgIndex}.png`;
            } else if (producto.nombre === "Matero con doble cierre frontal") {
                imgSrc = `../assets/accesorios/matera${imgIndex}.png`;
            } else if (producto.nombre === "Cartera Con Monedero") {
                imgSrc = `../assets/accesorios/carteraMochila${imgIndex}.png`;
            } else if (producto.nombre === "Cartera Bandolera") {
                imgSrc = `../assets/accesorios/carteraBandolera${imgIndex}.png`;
            } else if (producto.nombre === "Bolso Tubular") {
                imgSrc = `../assets/accesorios/bolsoTubular${imgIndex}.png`;
            } else if (producto.nombre === "Billetera con Cierre") {
                imgSrc = `../assets/accesorios/billeteraCierre${imgIndex}.png`;
            } else if (producto.nombre === "Bandolera doble cierre") {
                imgSrc = `../assets/accesorios/bandolera${imgIndex}.png`;
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
                    case "Mochila grande":
                        imgIndex = (imgIndex % 5) + 1;
                        img.src = `../assets/accesorios/mochilaH${imgIndex}.png`;
                        break;
                    case "Mochila pequeña":
                        imgIndex = (imgIndex % 2) + 1;
                        img.src = `../assets/accesorios/mochilaM${imgIndex}.png`;
                        break;
                    case "Matero con doble cierre frontal":
                        imgIndex = (imgIndex % 7) + 1;
                        img.src = `../assets/accesorios/matera${imgIndex}.png`;
                        break;
                    case "Cartera Con Monedero":
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
                    case "Billetera con Cierre":
                        imgIndex = (imgIndex % 4) + 1;
                        img.src = `../assets/accesorios/billeteraCierre${imgIndex}.png`;
                        break;
                    case "Bandolera doble cierre":
                        imgIndex = (imgIndex % 3) + 1;
                        img.src = `../assets/accesorios/bandolera${imgIndex}.png`;
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

