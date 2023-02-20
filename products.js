class Products {
    constructor (){
        this.products = [];
    }
    addProduct(item) {
        const products = this.getProducts();
        const agregadoConExito = 'Producto agregado con exito'
        if(products.length){
            products.find(element => {
                if(element.code === item.code){
                    return console.log('El producto ya a sido agregado');
                } else {
                    let lastIndex = products.length - 1
                    let lastId = products[lastIndex].id;
                    item.id = lastId + 1;
                    let id = item.id;
                    this.products.push(item);
                    console.log(agregadoConExito)
                    return id;
                    }
            })
        } else {
            item.id = 1;
            this.products.push(item);
            console.log(agregadoConExito)
        }
        }
    getProducts() {
        const products = this.products;
        return products;

    }
    getProductById(id){
        const products = this.getProducts();
        let productsById;
        const notFound = 'No Funciona'
        products.map(el => {
            el.id === id && (productsById = el);
        });
        return productsById ? console.log(productsById) : console.log(notFound);
    }
}

const almacenarProducts = new Products();

console.log(almacenarProducts.getProducts())

almacenarProducts.addProduct({
    title:'Hoddie black',
    description:'Corte y diseño OVERSIZED EXTRA , esta hoodie provee el ajuste extra holgado en las mangas, hombros y pecho del usuario, aportando un aspecto relajado y sutil urbano, ideal para combinar con shorts, mallas o pantalones.',
    price:200,
    thumbnail:'',
    code:'02',
    stock:10
});

console.log(almacenarProducts.getProducts());

almacenarProducts.addProduct({
    title:'Remera Blanca',
    description:'Corte y diseño OVERSIZED, esta camiseta provee el ajuste extra holgado en las mangas, hombros y pecho del usuario, aportando un aspecto relajado y sutil urbano.',
    price:200,
    thumbnail:'',
    code:'02',
    stock: 10
});

almacenarProducts.getProductById(2);