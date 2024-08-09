const axios = require('axios'); // Importamos Axios para hacer solicitudes HTTP

/**
 * getProductsSortedByTitle
 * 
 * Esta función realiza una solicitud a la API externa de Fake Store y
 * obtiene la lista de productos. Luego, ordena los productos
 * alfabéticamente por el campo "title" y devuelve el array ordenado.
 * 
 * @returns {Promise<Array>} Array de productos ordenados alfabéticamente por título.
 */
async function getProductsSortedByTitle() {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;

    // Ordenar productos alfabéticamente por el campo "title"
    return products.sort((a, b) => a.title.localeCompare(b.title));
}

/**
 * getProductsByRating
 * 
 * Esta función realiza una solicitud a la API externa de Fake Store y
 * obtiene la lista de productos. Luego, filtra los productos para
 * retornar solo aquellos cuyo rating es mayor a 3.
 * 
 * @returns {Promise<Array>} Array de productos con un rating mayor a 3.
 */
async function getProductsByRating() {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;

    // Filtrar productos donde el rating es mayor a 3
    return products.filter(product => product.rating.rate > 3);
}

/**
 * getProductsByCategory
 * 
 * Esta función realiza una solicitud a la API externa de Fake Store y
 * obtiene la lista de productos. Luego, filtra los productos para
 * retornar solo aquellos que pertenecen a la categoría "electronics".
 * 
 * @returns {Promise<Array>} Array de productos de la categoría "electronics".
 */
async function getProductsByCategory() {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;

    // Filtrar productos que pertenecen a la categoría "electronics"
    return products.filter(product => product.category === 'electronics');
}

/**
 * testFunctions
 * 
 * Esta función se encarga de ejecutar y probar las funciones definidas
 * anteriormente. Muestra en la consola los resultados de cada una de las
 * funciones para verificar que se están comportando correctamente.
 */
async function testFunctions() {
    const sortedProducts = await getProductsSortedByTitle();
    console.log("Productos ordenados por título:");
    console.log(sortedProducts);

    const productsByRating = await getProductsByRating();
    console.log("\nProductos con rating mayor a 3:");
    console.log(productsByRating);

    const productsByCategory = await getProductsByCategory();
    console.log("\nProductos de la categoría electronics:");
    console.log(productsByCategory);
}

// Llamamos a la función testFunctions para ejecutar las pruebas
testFunctions();
