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
            new Producto(1, "A01-1", 1000, 10, "../assets/accesorios/A01-1.png", "Hecho en cuero", "a01-1"),
            new Producto(2, "A02-1", 1000, 10, "../assets/accesorios/A02-1.png", "Hecho en cuero", "a02-1"),
            new Producto(3, "A03-1", 1000, 10, "../assets/accesorios/A03-1.png", "Hecho en cuero", "a03-1"),
            new Producto(4, "A04-1", 1000, 10, "../assets/accesorios/A04.png", "Hecho en cuero", "a04-1"),
            new Producto(5, "A05-1", 1000, 10, "../assets/accesorios/A05.png", "Hecho en cuero", "a05-1"),
            new Producto(6, "A06-1", 1000, 10, "../assets/accesorios/A06.png", "Hecho en cuero", "a06-1"),
            new Producto(7, "A07-1", 1000, 10, "../assets/accesorios/A07.png", "Hecho en cuero", "a07-1"),
            new Producto(8, "A08-1", 1000, 10, "../assets/accesorios/A08.png", "Hecho en cuero", "a08-1"),
            new Producto(9, "A09-1", 1000, 10, "../assets/accesorios/A09-1.png", "Hecho en cuero", "a09-1"),
            new Producto(10, "A10-1", 1000, 10, "../assets/accesorios/A010-1.png", "Hecho en cuero", "a010-1"),
            new Producto(11, "A11-1", 1000, 10, "../assets/accesorios/A011-1.png", "Hecho en cuero", "a011-1"),
            new Producto(12, "A12-1", 1000, 10, "../assets/accesorios/A012-1.png", "Hecho en cuero", "a012-1"),
            new Producto(13, "A13-1", 1000, 10, "../assets/accesorios/A013-1.png", "Hecho en cuero", "a013-1"),
            new Producto(14, "A14-1", 1000, 10, "../assets/accesorios/A014-1.png", "Hecho en cuero", "a014-1"),
            new Producto(15, "A15-1", 1000, 10, "../assets/accesorios/A015-1.png", "Hecho en cuero", "a015-1"),
            new Producto(16, "A16-1", 1000, 10, "../assets/accesorios/A016-1.png", "Hecho en cuero", "a016-1"),
            new Producto(17, "A17-1", 34000, 10, "../assets/accesorios/A017-1.png", "Hecho en cuero", "a017-1"),
            new Producto(18, "A18-1", 1000, 10, "../assets/accesorios/A018-1.png", "Hecho en cuero", "a018-1"),
            new Producto(19, "A19-1", 1000, 10, "../assets/accesorios/A019-1.png", "Hecho en cuero", "a019-1"),
            new Producto(20, "A20-1", 1000, 10, "../assets/accesorios/A020-1.png", "Hecho en cuero", "a021-1"),
            new Producto(21, "A21-1", 1000, 10, "../assets/accesorios/A021-1.png", "Hecho en cuero", "a022-1"),
            new Producto(22, "A22-1", 1000, 10, "../assets/accesorios/A022-1.png", "Hecho en cuero", "a023-1"),
            new Producto(23, "A23-1", 1000, 10, "../assets/accesorios/A023-1.png", "Hecho en cuero", "a024-1"),
            new Producto(24, "A24-1", 1000, 10, "../assets/accesorios/A024-1.png", "Hecho en cuero", "a025-1"),
            new Producto(26, "A25-1", 14500, 10, "../assets/accesorios/A025-1.png", "Hecho en cuero", "a026-1"),
            new Producto(27, "A26-1", 19000, 10, "../assets/accesorios/A026-1.png", "Hecho en cuero", "a027-1"),
            new Producto(28, "A27-1", 1000, 10, "../assets/accesorios/A027-1.png", "Hecho en cuero", "a028-1"),
            new Producto(29, "A28-1", 1000, 10, "../assets/accesorios/A028-1.png", "Hecho en cuero", "a029-1"),
            new Producto(30, "A29-1", 22500, 10, "../assets/accesorios/A029-1.png", "Hecho en cuero", "a030-1"),
            new Producto(31, "A30-1", 1000, 10, "../assets/accesorios/A030-1.png", "Hecho en cuero", "a031-1"),
            new Producto(32, "A31-1", 34000, 10, "../assets/accesorios/A031-1.png", "Hecho en cuero", "a032-1"),
            new Producto(33, "A32-1", 22500, 10, "../assets/accesorios/A032-1.png", "Hecho en cuero", "a033-1"),
            new Producto(34, "A33-1", 22500, 10, "../assets/accesorios/A033-1.png", "Hecho en cuero", "a034-1"),
            new Producto(35, "A34-1", 1000, 10, "../assets/accesorios/A034-1.png", "Hecho en cuero", "a035-1"),
            new Producto(36, "A35-1", 1000, 10, "../assets/accesorios/A035-1XL.png", "Hecho en cuero", "a035-1XL"),
            new Producto(37, "A35-1", 1000, 10, "../assets/accesorios/A035-2XL.png", "Hecho en cuero", "a035-2XL"),
            new Producto(38, "A36-1", 1000, 10, "../assets/accesorios/A036-1.png", "Hecho en cuero", "a036-1"),
            new Producto(39, "A37-1", 14500, 10, "../assets/accesorios/A037-1.png", "Hecho en cuero", "a037-1"),
            new Producto(40, "A38-1", 14500, 10, "../assets/accesorios/A038-1.png", "Hecho en cuero", "a038-1"),

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
                  <!--  <a href="#" id="Accesorio N°-${producto.id}" class="btn btn-primary botonespecial">Añadir al carrito</a> --!>
                </div>
                </div>`
        })
    }



















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

