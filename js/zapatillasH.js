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
            new Producto(24, "Amalfitana", 18000, 10, "../assets/zapatillasH/amalfitana/amalfitana1.png", "Hecho en cuero 100% vacuno", "Amalfitana"),
            new Producto(25, "Catania", 18000, 10, "../assets/zapatillasH/catania/catania1.png", "Hecho en cuero 100% vacuno", "Catania"),
            new Producto(26, "Cinque Terre", 18000, 10, "../assets/zapatillasH/cinque/cinqueterre1.png", "Hecho en cuero 100% vacuno", "Cinque Terre"),
            new Producto(27, "Italia", 18000, 10, "../assets/zapatillasH/italia/italia1.png", "Hecho en cuero 100% vacuno", "Italia"),
            new Producto(28, "Milan", 18000, 10, "../assets/zapatillasH/milan/milan1.png", "Hecho en cuero 100% vacuno", "Milan"),
            new Producto(29, "Pisa", 18000, 10, "../assets/zapatillasH/pisa/pisa1.png", "Hecho en cuero 100% vacuno", "Pisa"),
            new Producto(30, "Pompeya", 18000, 10, "../assets/zapatillasH/pompeya/pompeya1.png", "Hecho en cuero 100% vacuno", "Pompeya"),
            new Producto(31, "Portofino", 18000, 10, "../assets/zapatillasH/portofino/portofino1.png", "Hecho en cuero 100% vacuno", "Portofino"),
            new Producto(32, "Positano", 18000, 10, "../assets/zapatillasH/positano/positano1.png", "Hecho en cuero 100% vacuno", "Positano"),
            new Producto(33, "Torino", 18000, 10, "../assets/zapatillasH/torino/torino1.png", "Hecho en cuero 100% vacuno", "Torino"),
            new Producto(34, "Venecia", 18000, 10, "../assets/zapatillasH/venecia/venecia1.png", "Hecho en cuero 100% vacuno", "Venecia"),

        ]
    }

    mostrarEnDOM() {
        // Mostramos los productos en DOM de manera dinámica
        this.listaProductos.forEach((producto) => {
            let imgSrc = producto.img; // Por defecto, utilizamos la imagen original
            let imgIndex = 1; // Índice de imagen actual

            // Verificamos si es "Capri" o "Roma" para cambiar la imagen
            if (producto.nombre === "Amalfitana") {
                imgSrc = `../assets/zapatillasH/amalfitana/amalfitana${imgIndex}.png`;
            } else if (producto.nombre === "Catania") {
                imgSrc = `../assets/zapatillasH/catania/catania${imgIndex}.png`;
            } else if (producto.nombre === "Cinque") {
                imgSrc = `../assets/zapatillasH/cinque/cinqueterre${imgIndex}.png`;
            } else if (producto.nombre === "Italia") {
                imgSrc = `../assets/zapatillasH/italia/italia${imgIndex}.png`;
            } else if (producto.nombre === "Milan") {
                imgSrc = `../assets/zapatillasH/milan/milan${imgIndex}.png`;
            } else if (producto.nombre === "Pisa") {
                imgSrc = `../assets/zapatillasH/pisa/pisa${imgIndex}.png`;
            } else if (producto.nombre === "Pompeya") {
                imgSrc = `../assets/zapatillasH/pompeya/pompeya${imgIndex}.png`;
            } else if (producto.nombre === "Portofino") {
                imgSrc = `../assets/zapatillasH/portofino/portofino${imgIndex}.png`;
            } else if (producto.nombre === "Positano") {
                imgSrc = `../assets/zapatillasH/positano/positano${imgIndex}.png`;
            } else if (producto.nombre === "Torino") {
                imgSrc = `../assets/zapatillasH/torino/torino${imgIndex}.png`;
            } else if (producto.nombre === "Venecia") {
                imgSrc = `../assets/zapatillasH/venecia/venecia${imgIndex}.png`;
            }

            const card = document.createElement('div');
            card.classList.add('card', 'cardP');

            const img = document.createElement('img');
            img.id = `product-image-${producto.id}`;
            img.src = imgSrc;
            img.alt = producto.alt;

            // Función para cambiar la imagen automáticamente
            const changeImage = () => {
                // Verificamos el producto y actualizamos la imagen según su nombre
                switch (producto.nombre) {
                    case "Amalfitana":
                        imgIndex = (imgIndex % 6) + 1; // Alternamos el índice de imagen de 1 a 8
                        img.src = `../assets/zapatillasH/amalfitana/amalfitana${imgIndex}.png`;
                        break;
                    case "Catania":
                        imgIndex = (imgIndex % 5) + 1;
                        img.src = `../assets/zapatillasH/catania/catania${imgIndex}.png`;
                        break;
                    // Agrega casos para los otros productos con hasta 8 imágenes
                    case "Cinque":
                        imgIndex = (imgIndex % 5) + 1;
                        img.src = `../assets/zapatillasH/cinque/cinqueterre${imgIndex}.png`;
                        break;
                    case "Italia":
                        imgIndex = (imgIndex % 4) + 1;
                        img.src = `../assets/zapatillasH/italia/italia${imgIndex}.png`;
                        break;
                    case "Milan":
                        imgIndex = (imgIndex % 4) + 1;
                        img.src = `../assets/zapatillasH/milan/milan${imgIndex}.png`;
                        break;
                    case "Pisa":
                        imgIndex = (imgIndex % 3) + 1;
                        img.src = `../assets/zapatillasH/pisa/pisa${imgIndex}.png`;
                        break;
                    case "Pompeya":
                        imgIndex = (imgIndex % 2) + 1;
                        img.src = `../assets/zapatillasH/pompeya/pompeya${imgIndex}.png`;
                        break;
                    case "Portofino":
                        imgIndex = (imgIndex % 6) + 1;
                        img.src = `../assets/zapatillasH/portofino/portofino${imgIndex}.png`;
                        break;
                    case "Positano":
                        imgIndex = (imgIndex % 5) + 1;
                        img.src = `../assets/zapatillasH/positano/positano${imgIndex}.png`;
                        break;
                    case "Torino":
                        imgIndex = (imgIndex % 4) + 1;
                        img.src = `../assets/zapatillasH/torino/torino${imgIndex}.png`;
                        break;
                    case "Venecia":
                        imgIndex = (imgIndex % 11) + 1;
                        img.src = `../assets/zapatillasH/venecia/venecia${imgIndex}.png`;
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


    darEventoClickAProductos(controladorCarrito) {
        this.listaProductos.forEach(producto => {

            const btnAP = document.getElementById(`zapatillaH-${producto.id}`)
            btnAP.addEventListener("click", () => {

                controladorCarrito.agregar(producto)
                controladorCarrito.guardarEnStorage()
                //TODO: que solo añada 1 producto al DOM. Que no recorra toda la lista.
                controladorCarrito.mostrarEnDOM()
            })
        })
    }
}



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

