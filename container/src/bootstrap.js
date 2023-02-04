import { mount as mountProds } from "productsApp/ProductsIndex"
import { mount as mountCar } from "cartApp/CartIndex"

console.log("Container!")

mountProds(document.querySelector('#products-app'));
mountCar(document.querySelector('#cart-app'));