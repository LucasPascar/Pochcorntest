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
            new Producto(1, "N01-1", 1000, 10, "../assets/zapatillasN/N01.png", "Hecho en cuero", "N01"),
            new Producto(2, "N02-1", 1000, 10, "../assets/zapatillasN/N02.png", "Hecho en cuero", "N02"),
            new Producto(3, "N03-1", 1000, 10, "../assets/zapatillasN/N03.png", "Hecho en cuero", "N03"),
            new Producto(4, "N04-1", 1000, 10, "../assets/zapatillasN/N04.png", "Hecho en cuero", "N04"),
            new Producto(5, "N05-1", 1000, 10, "../assets/zapatillasN/N05.png", "Hecho en cuero", "N05"),
            new Producto(6, "N06-1", 1000, 10, "../assets/zapatillasN/N06.png", "Hecho en cuero", "N06"),
            new Producto(7, "N07-1", 1000, 10, "../assets/zapatillasN/N07.png", "Hecho en cuero", "N07"),
            new Producto(8, "N08-1", 1000, 10, "../assets/zapatillasN/N08.png", "Hecho en cuero", "N08"),
            new Producto(9, "N09-1", 1000, 10, "../assets/zapatillasN/N09.png", "Hecho en cuero", "N09"),
            new Producto(10, "N10-1", 1000, 10, "../assets/zapatillasN/N010.png", "Hecho en cuero", "N10"),
            new Producto(11, "N11-1", 1000, 10, "../assets/zapatillasN/N011.png", "Hecho en cuero", "N11"),
            new Producto(12, "N12-1", 1000, 10, "../assets/zapatillasN/N012.png", "Hecho en cuero", "N12"),
            new Producto(13, "N13-1", 1000, 10, "../assets/zapatillasN/N013.png", "Hecho en cuero", "N013"),
            new Producto(14, "N14-1", 1000, 10, "../assets/zapatillasN/N014.png", "Hecho en cuero", "N014"),


        ]
    }

    mostrarEnDOM() {
        //Mostramos los productos en DOM de manera dinamica
        this.listaProductos.forEach(producto => {
            this.contenedor_productos.innerHTML +=
                `<div class="card cardP">
                    <img src="${producto.img}" alt="${producto.alt}">
                <div class="card-info cardInfoP">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p>$${producto.precio}</p>
                    <!--<a href="#" id="ZapatillasM N°-${producto.id}" class="btn btn-primary botonespecial">Añadir al carrito</a>--!>
                </div>
                </div>`
        })
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

