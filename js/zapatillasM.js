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
            new Producto(12, "Capri", 18000, 10, "../assets/zapatillasM/capri1.png", "Colores disponibles: blanco-negro-aqqua-fucsia-crema", "Capri"),
            new Producto(13, "Florencia", 18000, 10, "../assets/zapatillasM/florencia1.png", "Colores disponibles: Negro, Blanco , Nude", "Florencia"),
            new Producto(14, "Roma", 18000, 10, "../assets/zapatillasM/roma1.png", "Colores disponibles: Animal Print con blanco- Zebra con plateado- Cambio de cordones", "Roma"),
            new Producto(15, "Venecia", 18000, 10, "../assets/zapatillasM/venecia.png", "Colores disponibles : Negro y blanco - Blanco y plateado, Negro y dorado, Plateado", "Venecia"),
            new Producto(16, "Genova", 18000, 10, "../assets/zapatillasM/genova1.png", "Colores disponibles : Negro y blanco - Blanco y plateado, Negro y dorado, Plateado", "Venecia"),
            new Producto(17, "Milan", 18000, 10, "../assets/zapatillasM/milan1.png", "Colores disponibles : Negro y blanco - Blanco y plateado, Negro y dorado, Plateado", "Venecia"),

        ]

    }
    mostrarEnDOM() {
        // Mostramos los productos en DOM de manera dinámica
        this.listaProductos.forEach((producto) => {
            let imgSrc = producto.img; // Por defecto, utilizamos la imagen original
            let imgIndex = 1; // Índice de imagen actual

            // Verificamos si es "Capri" o "Roma" para cambiar la imagen
            if (producto.nombre === "Capri") {
                imgSrc = `../assets/zapatillasM/capri${imgIndex}.png`;
            } else if (producto.nombre === "Roma") {
                imgSrc = `../assets/zapatillasM/roma${imgIndex}.png`;
            } else if (producto.nombre === "Florencia") {
                imgSrc = `../assets/zapatillasM/florencia${imgIndex}.png`;
            } else if (producto.nombre === "Milan") {
                imgSrc = `../assets/zapatillasM/milan${imgIndex}.png`;
            } else if (producto.nombre === "Genova") {
                imgSrc = `../assets/zapatillasM/genova${imgIndex}.png`;
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
                    case "Capri":
                        imgIndex = (imgIndex % 4) + 1; // Alternamos el índice de imagen de 1 a 8
                        img.src = `../assets/zapatillasM/capri${imgIndex}.png`;
                        break;
                    case "Florencia":
                        imgIndex = (imgIndex % 2) + 1;
                        img.src = `../assets/zapatillasM/florencia${imgIndex}.png`;
                        break;
                    // Agrega casos para los otros productos con hasta 8 imágenes
                    case "Genova":
                        imgIndex = (imgIndex % 2) + 1;
                        img.src = `../assets/zapatillasM/genova${imgIndex}.png`;
                        break;
                    case "Milan":
                        imgIndex = (imgIndex % 3) + 1;
                        img.src = `../assets/zapatillasM/milan${imgIndex}.png`;
                        break;
                    case "Roma":
                        imgIndex = (imgIndex % 2) + 1;
                        img.src = `../assets/zapatillasM/roma${imgIndex}.png`;
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

            const btnAP = document.getElementById(`zapatillaM-${producto.id}`)
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


// Roma

