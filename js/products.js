// Array de productos
const products = [
    /* Ojos */
    /*Producto 1*/
    {
        images: [
            '../imagenes/productos/1.jpg', '../imagenes/productos/3.jpg', '../imagenes/productos/4.jpg'
        ],
        title: 'Máscara De Pestañas Maybelline The Falsies X 9ml Color Negro Washable', price: '$ 18.570',
        category: 'ojos',
        subcategory: 'mascara',
        link: 'productos/producto1.html'
    },

    /*Producto 2*/
    {
        images: [
            '../imagenes/productos/7.jpg', '../imagenes/productos/9.jpg', '../imagenes/productos/10.jpg'],
        title: 'Máscara De Pestañas Maybelline The Falsies X 9ml Color Negro Waterproof', price: '$ 18.570',
        category: 'ojos', subcategory: 'mascara'
    },
    /*Producto 3*/
    {
        images: [
            '../imagenes/productos/13.jpg', '../imagenes/productos/14.jpg', '../imagenes/productos/15.jpg'],
        title: 'Base de maquillaje líquida Maybelline Super Stay Lumi Matte 35mL', price: '$ 34.208',
        category: 'rostro', subcategory: 'base'
    },
    /*Producto 4*/
    {
        images: [
            '../imagenes/productos/22.jpg', '../imagenes/productos/23.jpg'],
        title: 'Sexteto De Sombras Compactas, Music Collection, Maybelline Salsa', price: '$ 22.408',
        category: 'ojos', subcategory: 'sombra-ojos'
    },
    /*Producto 5*/
    {
        images: [
            '../imagenes/productos/28.jpg', '../imagenes/productos/30.jpg', '../imagenes/productos/31.jpg'],
        title: 'Máscara de Pestañas Maybelline Colossal Volum Express Black The Colossal', price: '$ 19.700',
        category: 'ojos', subcategory: 'mascara'
    },
    /*Producto 6*/
    {
        images: [
            '../imagenes/productos/34.jpg'],
        title: 'Máscara de Pestañas Maybelline Falsies Surreal Wtp Very Black', price: '$ 27.412',
        category: 'ojos', subcategory: 'mascara'
    },
    /*Producto 7*/
    {
        images: [
            '../imagenes/productos/40.jpg'],
        title: 'Máscara de Pestañas Maybelline Falsies Surreal Very Black', price: '$ 27.412',
        category: 'ojos', subcategory: 'mascara'
    },
    /*Producto 8*/
    {
        images: [
            '../imagenes/productos/46.jpg', '../imagenes/productos/47.jpg', '../imagenes/productos/48.jpg'],
        title: 'Delineador De Ojos Maybelline Master Precise Skinny Gel Color Negro Efecto Mate', price: '$ 19.340',
        category: 'ojos', subcategory: 'delineador-ojos'
    },
    /*Producto 9*/
    {
        images: [
            '../imagenes/productos/52.jpg', '../imagenes/productos/53.jpg'],
        title: 'Labial Líquido Maybelline Music Collection Mate Tono Founder', price: '$ 20.519',
        category: 'labios', subcategory: 'labiales'
    },
    /*Producto 10*/
    {
        images: [
            '../imagenes/productos/57.jpg', '../imagenes/productos/58.jpg', '../imagenes/productos/59.jpg'],
        title: 'Corrector de Ojeras Maybelline Instant Age Rewind x 6 ml', price: '$ 22.532',
        category: 'ojos', subcategory: 'corrector'
    },
    /*Producto 11*/
    {
        images: [
            '../imagenes/productos/60.jpg', '../imagenes/productos/61.jpg', '../imagenes/productos/62.jpg'],
        title: 'Base de Maquillaje Maybelline Super Stay Active Wear 30hs', price: '$ 34.209',
        category: 'rostro', subcategory: 'base'
    },
    /*Producto 12*/
    {
        images: [
            '../imagenes/productos/64.jpg', '../imagenes/productos/65.jpg'],
        title: 'Máscara de Pestañas Maybelline Sensational Sky High Very Black Washable', price: '$ 27.412',
        category: 'ojos', subcategory: 'mascara'
    },
    /*Producto 13*/
    {
        images: [
            '../imagenes/productos/68.jpg', '../imagenes/productos/69.jpg'],
        title: 'Máscara de Pestañas Maybelline Lash Sensational Sky High Cosmic', price: '$ 27.412',
        category: 'ojos', subcategory: 'mascara'
    },
    /*Producto 14*/
    {
        images: [
            '../imagenes/productos/74.jpg', '../imagenes/productos/75.jpg'],
        title: 'Delineador De Ojos Liquido Maybelline Tattoo Liner Dip-In 48H', price: '$ 18.768',
        category: 'ojos', subcategory: 'delineador-ojos'
    },
    /*Producto 15*/
    {
        images: [
            '../imagenes/productos/79.jpg', '../imagenes/productos/80.jpg'],
        title: 'Delineador De Ojos Maybelline Tattoo Liner 48h Liquid Pen', price: '$ 20.643',
        category: 'ojos', subcategory: 'delineador-ojos'
    },
    /*Producto 16*/
    {
        images: [
            '../imagenes/productos/84.jpg', '../imagenes/productos/85.jpg'],
        title: 'Delineador De Ojos Retráctil Tatto Liner Smokey Gel Pencil', price: '$ 19.676',
        category: 'ojos', subcategory: 'delineador-ojos'
    },
    /*Producto 17*/
    {
        images: [
            '../imagenes/productos/91.jpg', '../imagenes/productos/92.jpg', '../imagenes/productos/93.jpg'],
        title: 'Delineador De Cejas Maybelline Tattoo Studio Color Soft Brown', price: '$ 16.807',
        category: 'ojos', subcategory: 'cejas'
    },
    /*Producto 18*/
    {
        images: [
            '../imagenes/productos/97.jpg', '../imagenes/productos/98.jpg', '../imagenes/productos/99.jpg'],
        title: 'Base de Maquillaje en Polvo Maybelline Fit Me', price: '$ 29.011',
        category: 'rostro', subcategory: 'polvos'
    },
    /*Producto 19*/
    {
        images: [
            '../imagenes/productos/100.jpg', '../imagenes/productos/101.jpg'],
        title: 'Labial Líquido Maybelline SuperStay Vinyl Ink x 4,2 ml', price: '$ 21.339',
        category: 'labios', subcategory: 'labiales'
    },
    /*Producto 20*/
    {
        images: [
            '../imagenes/productos/104.jpg', '../imagenes/productos/105.jpg', '../imagenes/productos/106.jpg'],
        title: 'Rubor Maybelline Fit Me x 4.5 g', price: '$ 18.344',
        category: 'rostro', subcategory: 'rubor'
    },
    /*Producto 22*/
    {
        images: [
            '../imagenes/productos/108.jpg', '../imagenes/productos/109.jpg', '../imagenes/productos/110.jpg'],
        title: 'Polvo de Maquillaje Maybelline City Bronzer x 8 g', price: '$ 17.970',
        category: 'rostro', subcategory: 'rubor'
    },
    /*Producto 23*/
    {
        images: [
            '../imagenes/productos/111.jpg', '../imagenes/productos/112.jpg', '../imagenes/productos/113.jpg'],
        title: 'Brillo Maybelline Lifter Gloss Acido Hialuronico 5.4ml', price: '$ 19.504',
        category: 'labios', subcategory: 'brillo'
    },
    /*Producto 24*/
    {
        images: [
            '../imagenes/productos/115.jpg', '../imagenes/productos/116.jpg', '../imagenes/productos/117.jpg'],
        title: 'Iluminador Facial Maybelline Master Chrome Metallic 6.7g', price: '$ 17.548',
        category: 'rostro', subcategory: 'contouring'
    },
    /* Rostro */
    /*Producto 25*/
    {
        images: [
            '../imagenes/productos/120.jpg', '../imagenes/productos/121.jpg'],
        title: 'Paleta De Maquillaje Master Contour Maybelline', price: '$ 31.287',
        category: 'rostro', subcategory: 'contouring'
    },
    /*Producto 26*/
    {
        images: [
            '../imagenes/productos/128.jpg', '../imagenes/productos/127.jpg', '../imagenes/productos/126.jpg'],
        title: 'Paleta de Sombras Maybelline The Nudes x 9,6 g', price: '$ 27.613',
        category: 'ojos', subcategory: 'correctores'
    },
    /*Producto 27*/
    {
        images: [
            '../imagenes/productos/129.jpg', '../imagenes/productos/130.jpg'],
        title: 'Sexteto De Sombras Compactas, Music Collection, Maybelline Reggaeton', price: '$ 22.408',
        category: 'ojos', subcategory: 'sombra-ojos'
    },
    /*Producto 28*/
    {
        images: [
            '../imagenes/productos/137.jpg', '../imagenes/productos/136.jpg', '../imagenes/productos/135.jpg'],
        title: 'Paleta de Sombras Maybelline The Blushed Nudes x 9,6 g', price: '$ 27.613',
        category: 'ojos', subcategory: 'sombra-ojos'
    },
    /*Producto 29*/
    {
        images: [
            '../imagenes/productos/138.jpg', '../imagenes/productos/139.jpg', '../imagenes/productos/140.jpg'],
        title: 'Paleta de Sombras Maybelline The Nudes x 9,6 g', price: '$ 27.613',
        category: 'ojos', subcategory: 'sombra-ojos'
    },
    /*Producto 30*/
    {
        images: [
            '../imagenes/productos/144.jpg', '../imagenes/productos/145.jpg', '../imagenes/productos/146.jpg'],
        title: 'Gel para Cejas Maybelline Tatoo Brow 3D Gel x 6 ml', price: '$ 18.237',
        category: 'ojos', subcategory: 'cejas'
    },
    /*Producto 31*/
    {
        images: [
            '../imagenes/productos/153.jpg', '../imagenes/productos/154.jpg'],
        title: 'Lapiz de Cejas Maybelline Express Brow Satin Duo', price: '$ 17.646',
        category: 'ojos', subcategory: 'cejas'
    },
    /*Producto 32*/
    {
        images: [
            '../imagenes/productos/159.jpg'],
        title: 'Corrector facial líquido Maybelline Super Stay Superstay Active Wear 30hs', price: '$ 26.722',
        category: 'rostro', subcategory: 'corrector'
    },
    /*Producto 33*/
    {
        images: [
            '../imagenes/productos/162.jpg', '../imagenes/productos/161.jpg', '../imagenes/productos/163.jpg'],
        title: 'Corrector De Ojeras Fit Me Maybelline New York 30ml', price: '$ 17.589',
        category: 'rostro', subcategory: 'corrector'
    },
    /*Producto 34*/
    {
        images: [
            '../imagenes/productos/164.jpg', '../imagenes/productos/165.jpg', '../imagenes/productos/166.jpg'],
        title: 'Mascara de Pestañas Maybelline Great Lash Clear x 13 ml', price: '$ 15.986',
        category: 'ojos', subcategory: 'mascara'
    },
    /*Producto 35*/
    {
        images: [
            '../imagenes/productos/168.jpg', '../imagenes/productos/169.jpg', '../imagenes/productos/170.jpg'],
        title: 'Máscara de Pestañas Maybelline The Falsies Lash Lift Waterproof x 8,6 ml', price: '$ 24.502',
        category: 'ojos', subcategory: 'mascara'
    },
    /*Producto 36*/
    {
        images: [
            '../imagenes/productos/173.jpg', '../imagenes/productos/174.jpg'],
        title: 'Máscara de Pestañas Maybelline Colossal 36h Waterproof', price: '$ 19.700',
        category: 'ojos', subcategory: 'mascara'
    },
    /*Producto 37*/
    {
        images: [
            '../imagenes/productos/179.jpg', '../imagenes/productos/180.jpg', '../imagenes/productos/181.jpg'],
        title: 'Máscara De Pestañas Maybelline Colossal Volum Express Waterproof', price: '$ 18.569',
        category: 'ojos', subcategory: 'mascara'
    },
    /* Labios*/
    /*Producto 38*/
    {
        images: [
            '../imagenes/productos/183.jpg', '../imagenes/productos/184.jpg', '../imagenes/productos/185.jpg'],
        title: 'Máscara de Pestañas Maybelline Great Lash Big Blackest Black x 10 ml', price: '$ 15.986',
         category: 'ojos', subcategory: 'mascara'
    },
    /*Producto 39*/
    {
        images: [
            '../imagenes/productos/187.jpg', '../imagenes/productos/188.jpg'],
        title: 'Base Líquida de Maquillaje Maybelline Fit Me Matte Poreless Foundation x 30 ml', price: '$ 28.207',
        category: 'rostro', subcategory: 'base'
    },
    /*Producto 40*/
    {
        images: [
            '../imagenes/productos/190.jpg', '../imagenes/productos/191.jpg', '../imagenes/productos/192.jpg'],
        title: 'Base Fit Me Maybelline Fresh Tint Con Vitamina C X 30ml', price: '$ 26.015',
        category: 'rostro', subcategory: 'base'
    },
    /*Producto 41*/
    {
        images: [
            '../imagenes/productos/195.jpg'],
        title: 'Pre Base de Maquillaje Maybelline Fit Me Hydratante y Luminosidad Spf 20 x 30 ml', price: '$ 17.653',
        category: 'rostro', subcategory: 'pre-base'
    },
    /* Cejas*/
    /*Producto 42*/
    {
        images: [
            '../imagenes/productos/201.jpg'],
        title: 'Pre Base de Maquillaje Maybelline Fit Me Mate y Poreless Spf 20 x 30 ml', price: '$ 17.653',
        category: 'rostro', subcategory: 'pre-base'
    },
    /*Producto 43*/
    {
        images: [
            '../imagenes/productos/207.jpg', '../imagenes/productos/208.jpg', '../imagenes/productos/209.jpg'],
        title: 'Delineador de Ojos Maybelline Lasting Drama Gel x 3 g', price: '$ 18.791',
        category: 'ojos', subcategory: 'delineador-ojos'
    },
    /*Producto 44*/
    {
        images: [
            '../imagenes/productos/211.jpg', '../imagenes/productos/212.jpg', '../imagenes/productos/213.jpg'],
        title: 'Delineador de Ojos Liquido Maybelline Line Stiletto x 1,5 ml', price: '$ 18.794',
        category: 'ojos', subcategory: 'delineador-ojos'
    },
    /*Producto 45*/
    {
        images: [
            '../imagenes/productos/215.jpg', '../imagenes/productos/216.jpg', '../imagenes/productos/217.jpg'],
        title: 'Delineador de Ojos Maybelline Hyper Precise All Day Black x 1 g', price: '$ 20.630',
        category: 'ojos', subcategory: 'delineador-ojos'
    },
    /*Producto 46*/
    {
        images: [
            '../imagenes/productos/218.jpg', '../imagenes/productos/219.jpg'],
        title: 'Delineador de Ojos en Lapiz Maybelline Tattoo Liner Studio x 1,3 g', price: '$ 17.813',
        category: 'ojos', subcategory: 'delineador-ojos'
    },
    /*Producto 47*/
    {
        images: [
            '../imagenes/productos/222.jpg', '../imagenes/productos/223.jpg', '../imagenes/productos/224.jpg'],
        title: 'Labial Liquido Superstay 24hs Smile Brightener Maybelline Acabado Satinado', price: '$ 18.806',
        category: 'labios', subcategory: 'labiales'
    },
    /*Producto 48*/
    {
        images: [
            '../imagenes/productos/227.jpg', '../imagenes/productos/229.jpg', '../imagenes/productos/230.jpg'],
        title: 'Labial Liquido Superstay 24hs Super Impact Maybelline Acabado Satinado', price: '$ 18.806',
        category: 'labios', subcategory: 'labiales'
    },
    /*Producto 49*/
    {
        images: [
            '../imagenes/productos/231.jpg', '../imagenes/productos/232.jpg', '../imagenes/productos/233.jpg'],
        title: 'Labial Maybelline Matte Ink Coffe Edition SuperStay', price: '$ 20.519',
        category: 'labios', subcategory: 'labiales'
    },
    /*Producto 50*/
    {
        images: [
            '../imagenes/productos/235.jpg', '../imagenes/productos/236.jpg'],
        title: 'Labial Maybelline Super Stay Ink Crayon Mate', price: '$ 20.559',
        category: 'labios', subcategory: 'labiales'
    },
    /*Producto 51*/
    {
        images: [
            '../imagenes/productos/238.jpg', '../imagenes/productos/240.jpg', '../imagenes/productos/241.jpg'],
        title: 'Labial Liquido Superstay 24hs', price: '$ 18.806',
        category: 'labios', subcategory: 'labiales'
    },
    /*Producto 52*/
    {
        images: [
            '../imagenes/productos/243.jpg', '../imagenes/productos/244.jpg'],
        title: 'Maybelline Fit Me Matte Polvos Matificantes + Alisadores de Poros', price: '$ 14.211',
        category: 'rostro', subcategory: 'polvos'
    },
    // Añade más productos según sea necesario
];

// Mapa de categorías y subcategorías
const categorySubcategoryMap = {
    'ojos': ['sombras', 'delineadores', 'máscaras'],
    'rostro': ['bases', 'polvos', 'rubores'],
    'labios': ['labiales', 'brillos'],
    'cejas': ['lápices', 'gel']
};

// Carrito de compras
let carrito = [];

// Función para añadir producto al carrito
function addToCart(product) {
    carrito.push(product);
    updateCartUI();
    showNotification(`${product.title} ha sido añadido al carrito.`);
}

// Función para actualizar la UI del carrito
function updateCartUI() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cartCount");
    cartItems.innerHTML = ""; // Limpia la lista de items del carrito
    let total = 0;

    if (carrito.length === 0) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = "Tu carrito está vacío.";
        cartItems.appendChild(li);
        cartCount.textContent = "0"; // Actualiza el contador
    } else {
        carrito.forEach((product, index) => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";
            li.textContent = product.title;
            const span = document.createElement("span");
            span.textContent = `$${product.price.toFixed(2)}`;
            li.appendChild(span);

            // Botón para eliminar producto
            const removeButton = document.createElement("button");
            removeButton.textContent = "Eliminar";
            removeButton.className = "btn btn-danger btn-sm ms-2";
            removeButton.addEventListener("click", () => {
                carrito.splice(index, 1); // Elimina el producto del carrito
                updateCartUI(); // Actualiza la interfaz del carrito
            });
            li.appendChild(removeButton);

            cartItems.appendChild(li);
            total += product.price;
        });
        cartCount.textContent = carrito.length; // Actualiza el contador
    }

    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Función para mostrar notificaciones
function showNotification(message) {
    const toastEl = document.getElementById('notificationToast');
    const toast = new bootstrap.Toast(toastEl, {
        autohide: true,
        delay: 3000
    });
    const toastBody = toastEl.querySelector('.toast-body');
    toastBody.textContent = message;
    toast.show();
}

// Función para filtrar productos
function filterProducts(products, filters) {
    return products.filter(product => {
        // Normalizar categoría y subcategoría del producto
        const productCategory = product.category ? product.category.toLowerCase().trim() : '';
        const productSubcategory = product.subcategory ? product.subcategory.toLowerCase().trim() : '';

        // Verificar coincidencia de categoría
        const categoryMatch = filters.category.length === 0 || filters.category.includes(productCategory);

        // Verificar coincidencia de subcategoría
        const subcategoryMatch = filters.subcategory.length === 0 || filters.subcategory.includes(productSubcategory);

        // Normalizar y filtrar precio
        const productPrice = parseFloat(product.price.replace(/[^0-9,]/g, '').replace(',', '.')) || 0;
        const priceMatch = productPrice >= filters.priceRange.min && productPrice <= filters.priceRange.max;

        // Debugging: Mostrar información de coincidencia
        console.log(`Producto: ${product.title}, Categoría: ${productCategory}, Subcategoría: ${productSubcategory}, Precio: ${productPrice}`);
        console.log(`Coincide con Categoría: ${categoryMatch}, Subcategoría: ${subcategoryMatch}, Precio: ${priceMatch}`);

        return categoryMatch && subcategoryMatch && priceMatch;
    });
}

// Función para mostrar productos
function displayProducts(products) {
    const productsContainer = document.getElementById('product-container');
    productsContainer.innerHTML = ""; // Limpiar el contenedor

    products.forEach(product => {
        const imagesHTML = product.images.map((img, index) =>
            `<img src="${img}" alt="Imagen ${index + 1}" class="product-thumbnail${index === 0 ? ' active' : ''}">`
        ).join('');

        const productHTML = `
    <div class="col-md-4 mb-4">
        <div class="card product-card">
            <div class="product-gallery">
                <img src="${product.images[0]}" alt="${product.title}" class="main-image">
                <div class="thumbnail-container">
                    ${imagesHTML}
                </div>
            </div>
            <div class="card-body">
                <h2 class="card-title">${product.title}</h2>
                <p class="card-text"><strong>${product.price}</strong></p>
                <div class="button-group">
                    <button class="btn btn-dark">Comprar</button>
                    <a href="${product.link}" class="btn btn-dark">Ver Producto</a>
                </div>
            </div>
        </div>
    </div>
`;

        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });

    // Asignar eventos a los botones de compra
    setTimeout(() => {
        const comprarButtons = document.querySelectorAll(".btn-dark");
        comprarButtons.forEach(button => {
            button.addEventListener("click", function () {
                const card = this.closest(".card");
                const title = card.querySelector(".card-title").textContent;
                const price = card.querySelector(".card-text strong").textContent;
                const product = {
                    title: title.trim(),
                    price: parseFloat(price.replace(/[^0-9,]/g, '').replace(',', '.'))
                };
                addToCart(product);
            });
        });

        // Asignar eventos a las miniaturas
        const thumbnails = document.querySelectorAll('.product-thumbnail');
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const mainImage = thumbnail.closest('.product-gallery').querySelector('.main-image');
                mainImage.src = thumbnail.src;
                thumbnails.forEach(img => img.classList.remove('active'));
                thumbnail.classList.add('active');
            });
        });
    }, 100);
}

// Función para aplicar filtros
function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('#category-form input[type="checkbox"]:checked')).map(checkbox => checkbox.value.trim().toLowerCase());
    const selectedSubcategories = Array.from(document.querySelectorAll('#subcategory-form input[type="checkbox"]:checked')).map(checkbox => checkbox.value.trim().toLowerCase());

    const minPrice = parseFloat(document.getElementById('min-price').value.replace(/[^0-9,]/g, '').replace(',', '.')) || 0;
    const maxPrice = parseFloat(document.getElementById('max-price').value.replace(/[^0-9,]/g, '').replace(',', '.')) || Infinity;

    const filters = {
        category: selectedCategories,
        subcategory: selectedSubcategories,
        priceRange: { min: minPrice, max: maxPrice }
    };

    console.log('Filtros aplicados:', filters);

    const filteredProducts = filterProducts(products, filters);

    if (selectedCategories.length === 0 && selectedSubcategories.length === 0 && minPrice === 0 && maxPrice === Infinity) {
        displayProducts(products);
    } else {
        displayProducts(filteredProducts);
    }
}

// Función para borrar filtros de precio y mostrar todos los productos
function clearPriceFilter() {
    // Limpiar los campos de precio
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';

    // Mostrar todos los productos sin aplicar el filtro de precio
    displayProducts(products);
}

// Evento para cargar productos y asignar eventos
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);

    // Añadir eventos a los filtros
    document.querySelectorAll('#category-form input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    document.querySelectorAll('#subcategory-form input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    document.getElementById('apply-price-filter').addEventListener('click', applyFilters);
    document.getElementById('delete-price-filter').addEventListener('click', clearPriceFilter);
});