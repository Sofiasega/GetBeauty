// products.js

// Array de productos
const products = [
    /*Producto 1*/
    {
        images: [
            '../imagenes/productos/1.png', '../imagenes/productos/3.png', '../imagenes/productos/4.png'],
        title: 'Máscara De Pestañas Maybelline The Falsies X 9ml Color Negro Washable', 
        price: '$ 18.570',
        category: 'ojos',
        type: 'mascara',
        link: 'productos/producto1.html'
    },

    /*Producto 2*/
    {
        images: [
            '../imagenes/productos/7.png', '../imagenes/productos/9.png', '../imagenes/productos/10.png'],
        title: 'Máscara De Pestañas Maybelline The Falsies X 9ml Color Negro Waterproof', price: '$ 18.570',
        category: 'ojos', 
        type: 'mascara',
        link: 'productos/producto2.html'
    },
    /*Producto 3*/
    {
        images: [
            '../imagenes/productos/13.png', '../imagenes/productos/14.png', '../imagenes/productos/15.png'],
        title: 'Base de maquillaje líquida Maybelline Super Stay Lumi Matte 35mL', price: '$ 34.208',
        category: 'rostro', 
        type: 'base',
        link: 'productos/producto3.html'
    },
    /*Producto 4*/
    {
        images: [
            '../imagenes/productos/22.png', '../imagenes/productos/23.png'],
        title: 'Sexteto De Sombras Compactas, Music Collection, Maybelline Salsa', price: '$ 22.408',
        category: 'ojos', 
        type: 'sombra-ojos',
        link: 'productos/producto4.html'
        
    },
    /*Producto 5*/
    {
        images: [
            '../imagenes/productos/28.png', '../imagenes/productos/30.png', '../imagenes/productos/31.png'],
        title: 'Máscara de Pestañas Maybelline Colossal Volum Express Black The Colossal', price: '$ 19.700',
        category: 'ojos', 
        type: 'mascara',
         link: 'productos/producto5.html'
    },
    /*Producto 6*/
    {
        images: [
            '../imagenes/productos/34.png'],
        title: 'Máscara de Pestañas Maybelline Falsies Surreal Wtp Very Black', price: '$ 27.412',
        category: 'ojos', 
        type: 'mascara',
        link: 'productos/producto6.html'

    },
    /*Producto 7*/
    {
        images: [
            '../imagenes/productos/40.png'],
        title: 'Máscara de Pestañas Maybelline Falsies Surreal Very Black', price: '$ 27.412',
        category: 'ojos', 
        type: 'mascara',
        link: 'productos/producto7.html'
    },
    /*Producto 8*/
    {
        images: [
            '../imagenes/productos/46.png', '../imagenes/productos/47.png', '../imagenes/productos/48.png'],
        title: 'Delineador De Ojos Maybelline Master Precise Skinny Gel Color Negro Efecto Mate', price: '$ 19.340',
        category: 'ojos', 
        type: 'delineador-ojos',
        link: 'productos/producto8.html'
    },
    /*Producto 9*/
    {
        images: [
            '../imagenes/productos/52.png', '../imagenes/productos/53.png'],
        title: 'Labial Líquido Maybelline Music Collection Mate Tono Founder', price: '$ 20.519',
        category: 'labios', 
        type: 'labiales',
        link: 'productos/producto9.html'
    },
    /*Producto 10*/
    {
        images: [
            '../imagenes/productos/57.png', '../imagenes/productos/58.png', '../imagenes/productos/59.png'],
        title: 'Corrector de Ojeras Maybelline Instant Age Rewind x 6 ml', price: '$ 22.532',
        category: 'ojos', 
        type: 'corrector',
        link: 'productos/producto10.html'

    },
    /*Producto 11*/
    {
        images: [
            '../imagenes/productos/60.png', '../imagenes/productos/61.png', '../imagenes/productos/62.png'],
        title: 'Base de Maquillaje Maybelline Super Stay Active Wear 30hs', price: '$ 34.209',
        category: 'rostro', 
        type: 'base',
        link: 'productos/producto11.html'

    },
    /*Producto 12*/
    {
        images: [
            '../imagenes/productos/64.png', '../imagenes/productos/69.png'],
        title: 'Máscara de Pestañas Maybelline Sensational Sky High Very Black Washable', price: '$ 27.412',
        category: 'ojos', 
        type: 'mascara',
        link: 'productos/producto12.html'

    },
    /*Producto 13*/
    {
        images: [
            '../imagenes/productos/68.png', '../imagenes/productos/69.png'],
        title: 'Máscara de Pestañas Maybelline Lash Sensational Sky High Cosmic', price: '$ 27.412',
        category: 'ojos', 
        type: 'mascara',
        link: 'productos/producto13.html'

    },
    /*Producto 14*/
    {
        images: [
            '../imagenes/productos/74.png', '../imagenes/productos/75.png'],
        title: 'Delineador De Ojos Liquido Maybelline Tattoo Liner Dip-In 48H', price: '$ 18.768',
        category: 'ojos', 
        type: 'delineador-ojos',
        link: 'productos/producto14.html'

    },
    /*Producto 15*/
    {
        images: [
            '../imagenes/productos/79.png', '../imagenes/productos/80.png'],
        title: 'Delineador De Ojos Maybelline Tattoo Liner 48h Liquid Pen', price: '$ 20.643',
        category: 'ojos', 
        type: 'delineador-ojos',
        link: 'productos/producto15.html'
    },
    /*Producto 16*/
    {
        images: [
            '../imagenes/productos/84.png', '../imagenes/productos/85.png'],
        title: 'Delineador De Ojos Retráctil Tatto Liner Smokey Gel Pencil', price: '$ 19.676',
        category: 'ojos', 
        type: 'delineador-ojos',
        link: 'productos/producto16.html'
    },
    /*Producto 17*/
    {
        images: [
            '../imagenes/productos/91.png', '../imagenes/productos/92.png', '../imagenes/productos/93.png'],
        title: 'Delineador De Cejas Maybelline Tattoo Studio Color Soft Brown', price: '$ 16.807',
        category: 'ojos', 
        type: 'cejas',
        link: 'productos/producto17.html'
    },
    /*Producto 18*/
    {
        images: [
            '../imagenes/productos/97.png', '../imagenes/productos/98.png', '../imagenes/productos/99.png'],
        title: 'Base de Maquillaje en Polvo Maybelline Fit Me', price: '$ 29.011',
        category: 'rostro', 
        type: 'polvos',
        link: 'productos/producto18.html'
    },
    /*Producto 19*/
    {
        images: [
            '../imagenes/productos/100.png', '../imagenes/productos/101.png'],
        title: 'Labial Líquido Maybelline SuperStay Vinyl Ink x 4,2 ml', price: '$ 21.339',
        category: 'labios', 
        type: 'labiales',
        link: 'productos/producto19.html'
    },
    /*Producto 20*/
    {
        images: [
            '../imagenes/productos/104.png', '../imagenes/productos/105.png', '../imagenes/productos/106.png'],
        title: 'Rubor Maybelline Fit Me x 4.5 g', price: '$ 18.344',
        category: 'rostro', 
        type: 'rubor-bronceador',
        link: 'productos/producto20.html'
    },
    /*Producto 21*/
    {
        images: [
            '../imagenes/productos/64.png', '../imagenes/productos/69.png'],
        title: 'Máscara de Pestañas Maybelline Sensational Sky High Very Black Wtp', price: '$ 27.412',
        category: 'ojos', 
        type: 'mascara',
        link: 'productos/producto21.html'
    },
    /*Producto 22*/
    {
        images: [
            '../imagenes/productos/108.png', '../imagenes/productos/109.png', '../imagenes/productos/110.png'],
        title: 'Polvo de Maquillaje Maybelline City Bronzer x 8 g', price: '$ 17.970',
        category: 'rostro', 
        type: 'rubor-bronceador',
        link: 'productos/producto22.html'
    },
    /*Producto 23*/
    {
        images: [
            '../imagenes/productos/111.png', '../imagenes/productos/112.png', '../imagenes/productos/113.png'],
        title: 'Brillo Maybelline Lifter Gloss Acido Hialuronico 5.4ml', price: '$ 19.504',
        category: 'labios', 
        type: 'lip-gloss',
        link: 'productos/producto23.html'
    },
    /*Producto 24*/
    {
        images: [
            '../imagenes/productos/115.png', '../imagenes/productos/116.png', '../imagenes/productos/117.png'],
        title: 'Iluminador Facial Maybelline Master Chrome Metallic 6.7g', price: '$ 17.548',
        category: 'rostro', 
        type: 'contouring',
        link: 'productos/producto24.html'
    },
    /*Producto 25*/
    {
        images: [
            '../imagenes/productos/120.png', '../imagenes/productos/121.png'],
        title: 'Paleta De Maquillaje Master Contour Maybelline', price: '$ 31.287',
        category: 'rostro', 
        type: 'contouring',
        link: 'productos/producto25.html'
    },
    /*Producto 26*/
    {
        images: [
            '../imagenes/productos/128.png', '../imagenes/productos/127.png', '../imagenes/productos/126.png'],
        title: 'Paleta de Sombras Maybelline The Nudes x 9,6 g', price: '$ 27.613',
        category: 'ojos', 
        type: 'sombra-ojos',
        link: 'productos/producto26.html'
    },
    /*Producto 27*/
    {
        images: [
            '../imagenes/productos/129.png', '../imagenes/productos/130.png'],
        title: 'Sexteto De Sombras Compactas, Music Collection, Maybelline Reggaeton', price: '$ 22.408',
        category: 'ojos', 
        type: 'sombra-ojos',
        link: 'productos/producto27.html'
    },
    /*Producto 28*/
    {
        images: [
            '../imagenes/productos/137.png', '../imagenes/productos/136.png', '../imagenes/productos/135.png'],
        title: 'Paleta de Sombras Maybelline The Blushed Nudes x 9,6 g', price: '$ 27.613',
        category: 'ojos', 
        type: 'sombra-ojos',
        link: 'productos/producto28.html'
    },
    /*Producto 29*/
    {
        images: [
            '../imagenes/productos/138.png', '../imagenes/productos/139.png', '../imagenes/productos/140.png'],
        title: 'Paleta de Sombras Maybelline The Nudes x 9,6 g', price: '$ 27.613',
        category: 'ojos', 
        type: 'sombra-ojos',
        link: 'productos/producto29.html'
    },
    /*Producto 30*/
    {
        images: [
            '../imagenes/productos/144.png', '../imagenes/productos/145.png', '../imagenes/productos/146.png'],
        title: 'Gel para Cejas Maybelline Tatoo Brow 3D Gel x 6 ml', price: '$ 18.237',
        category: 'ojos', 
        type: 'cejas',
        link: 'productos/producto30.html'
    },
    /*Producto 31*/
    {
        images: [
            '../imagenes/productos/153.png', '../imagenes/productos/154.png'],
        title: 'Lapiz de Cejas Maybelline Express Brow Satin Duo', price: '$ 17.646',
        category: 'ojos', 
        type: 'cejas',
        link: 'productos/producto31.html'
    },
    /*Producto 32*/
    {
        images: [
            '../imagenes/productos/159.png'],
        title: 'Corrector facial líquido Maybelline Super Stay Superstay Active Wear 30hs', price: '$ 26.722',
        category: 'rostro', 
        type: 'corrector',
        link: 'productos/producto32.html'
    },
    /*Producto 33*/
    {
        images: [
            '../imagenes/productos/162.png', '../imagenes/productos/161.png', '../imagenes/productos/163.png'],
        title: 'Corrector De Ojeras Fit Me Maybelline New York 30ml', price: '$ 17.589',
        category: 'rostro', 
        type: 'corrector',
        link: 'productos/producto33.html'
    },
    /*Producto 34*/
    {
        images: [
            '../imagenes/productos/164.png', '../imagenes/productos/165.png', '../imagenes/productos/166.png'],
        title: 'Mascara de Pestañas Maybelline Great Lash Clear x 13 ml', price: '$ 15.986',
        category: 'ojos', 
        type: 'mascara',
        link: 'productos/producto34.html'
    },
    /*Producto 35*/
    {
        images: [
            '../imagenes/productos/168.png', '../imagenes/productos/169.png', '../imagenes/productos/170.png'],
        title: 'Máscara de Pestañas Maybelline The Falsies Lash Lift Waterproof x 8,6 ml', price: '$ 24.502',
        category: 'ojos', 
        type: 'mascara',
        link: 'productos/producto35.html'
    },
    /*Producto 36*/
    {
        images: [
            '../imagenes/productos/173.png', '../imagenes/productos/174.png'],
        title: 'Máscara de Pestañas Maybelline Colossal 36h Waterproof', price: '$ 19.700',
        category: 'ojos', 
        type: 'mascara',
        link: 'productos/producto36.html'
    },
    /*Producto 37*/
    {
        images: [
            '../imagenes/productos/179.png', '../imagenes/productos/180.png', '../imagenes/productos/181.png'],
        title: 'Máscara De Pestañas Maybelline Colossal Volum Express Waterproof', price: '$ 18.569',
        category: 'ojos', 
        type: 'mascara',
        link: 'productos/producto37.html'
    },
    /* Labios*/
    /*Producto 38*/
    {
        images: [
            '../imagenes/productos/183.png', '../imagenes/productos/184.png', '../imagenes/productos/185.png'],
        title: 'Máscara de Pestañas Maybelline Great Lash Big Blackest Black x 10 ml', price: '$ 15.986',
         category: 'ojos', 
         type: 'mascara',
         link: 'productos/producto38.html'
    },
    /*Producto 39*/
    {
        images: [
            '../imagenes/productos/187.png', '../imagenes/productos/188.png'],
        title: 'Base Líquida de Maquillaje Maybelline Fit Me Matte Poreless Foundation x 30 ml', price: '$ 28.207',
        category: 'rostro', 
        type: 'base',
        link: 'productos/producto39.html'
    },
    /*Producto 40*/
    {
        images: [
            '../imagenes/productos/190.png', '../imagenes/productos/191.png', '../imagenes/productos/192.png'],
        title: 'Base Fit Me Maybelline Fresh Tint Con Vitamina C X 30ml', price: '$ 26.015',
        category: 'rostro', 
        type: 'base',
        link: 'productos/producto40.html'
    },
    /*Producto 41*/
    {
        images: [
            '../imagenes/productos/195.png'],
        title: 'Pre Base de Maquillaje Maybelline Fit Me Hydratante y Luminosidad Spf 20 x 30 ml', price: '$ 17.653',
        category: 'rostro', 
        type: 'pre-base',
        link: 'productos/producto41.html'
    },
    /*Producto 42*/
    {
        images: ['../imagenes/productos/201.png'],
        title: 'Pre Base de Maquillaje Maybelline Fit Me Mate y Poreless Spf 20 x 30 ml', price: '$ 17.653',
        category: 'rostro', 
        type: 'pre-base',
        link: 'productos/producto42.html'
    },
    /*Producto 43*/
    {
        images: [
            '../imagenes/productos/207.png', '../imagenes/productos/208.png', '../imagenes/productos/209.png'],
        title: 'Delineador de Ojos Maybelline Lasting Drama Gel x 3 g', price: '$ 18.791',
        category: 'ojos', 
        type: 'delineador-ojos',
        link: 'productos/producto43.html'
    },
    /*Producto 44*/
    {
        images: [
            '../imagenes/productos/211.png', '../imagenes/productos/212.png', '../imagenes/productos/213.png'],
        title: 'Delineador de Ojos Liquido Maybelline Line Stiletto x 1,5 ml', price: '$ 18.794',
        category: 'ojos', 
        type: 'delineador-ojos',
        link: 'productos/producto44.html'
    },
    /*Producto 45*/
    {
        images: [
            '../imagenes/productos/215.png', '../imagenes/productos/216.png', '../imagenes/productos/217.png'],
        title: 'Delineador de Ojos Maybelline Hyper Precise All Day Black x 1 g', price: '$ 20.630',
        category: 'ojos', 
        type: 'delineador-ojos',
        link: 'productos/producto45.html'
    },
    /*Producto 46*/
    {
        images: [
            '../imagenes/productos/218.png', '../imagenes/productos/219.png'],
        title: 'Delineador de Ojos en Lapiz Maybelline Tattoo Liner Studio x 1,3 g', price: '$ 17.813',
        category: 'ojos', 
        type: 'delineador-ojos',
        link: 'productos/producto46.html'
    },
    /*Producto 47*/
    {
        images: [
            '../imagenes/productos/222.png', '../imagenes/productos/223.png', '../imagenes/productos/224.png'],
        title: 'Labial Liquido Superstay 24hs Smile Brightener Maybelline Acabado Satinado', price: '$ 18.806',
        category: 'labios', 
        type: 'labiales',
        link: 'productos/producto47.html'
    },
    /*Producto 48*/
    {
        images: [
            '../imagenes/productos/227.png', '../imagenes/productos/229.png', '../imagenes/productos/230.png'],
        title: 'Labial Liquido Superstay 24hs Super Impact Maybelline Acabado Satinado', price: '$ 18.806',
        category: 'labios', 
        type: 'labiales',
        link: 'productos/producto48.html'
    },
    /*Producto 49*/
    {
        images: [
            '../imagenes/productos/231.png', '../imagenes/productos/232.png', '../imagenes/productos/233.png'],
        title: 'Labial Maybelline Matte Ink Coffe Edition SuperStay', price: '$ 20.519',
        category: 'labios', 
        type: 'labiales',
        link: 'productos/producto49.html'
    },
    /*Producto 50*/
    {
        images: [
            '../imagenes/productos/235.png', '../imagenes/productos/236.png'],
        title: 'Labial Maybelline Super Stay Ink Crayon Mate', price: '$ 20.559',
        category: 'labios', 
        type: 'labiales',
        link: 'productos/producto50.html'
    },
    /*Producto 51*/
    {
        images: [
            '../imagenes/productos/238.png', '../imagenes/productos/240.png', '../imagenes/productos/241.png'],
        title: 'Labial Liquido Superstay 24hs', price: '$ 18.806',
        category: 'labios', 
        type: 'labiales',
        link: 'productos/producto51.html'
    },
    /*Producto 52*/
    {
        images: [
            '../imagenes/productos/243.png', '../imagenes/productos/244.png'],
        title: 'Maybelline Fit Me Matte Polvos Matificantes + Alisadores de Poros', price: '$ 14.211',
        category: 'rostro', 
        type: 'polvos',
        link: 'productos/producto52.html'
    },
    // Añade más productos según sea necesario
];
 
// Carrito de compras global
let carrito = [];

// Función para añadir un producto al carrito
function addToCart(product) {
    carrito.push(product);
    console.log("Producto añadido al carrito:", product);
    updateCartUI();
    showNotification(`${product.title} ha sido añadido al carrito.`);
    
    // Mostrar el modal del carrito
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
}

// Función para crear una tarjeta de producto
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('product-gallery');
    
    const mainImage = document.createElement('img');
    mainImage.classList.add('main-image');
    mainImage.src = product.images[0];
    imageContainer.appendChild(mainImage);

    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.classList.add('thumbnail-container');
    
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.classList.add('product-thumbnail');
        thumbnail.dataset.index = index;
        thumbnail.addEventListener('click', () => {
            mainImage.src = image;
            document.querySelectorAll('.product-thumbnail').forEach(thumbnail => thumbnail.classList.remove('active'));
            thumbnail.classList.add('active');
        });
        thumbnailContainer.appendChild(thumbnail);
    });

    imageContainer.appendChild(thumbnailContainer);
    card.appendChild(imageContainer);

    const title = document.createElement('h2');
    title.textContent = product.title;
    card.appendChild(title);

    const price = document.createElement('p');
    price.textContent = product.price;
    card.appendChild(price);

    const buyButton = document.createElement('button');
    buyButton.classList.add('btn', 'btn-dark');
    buyButton.textContent = 'Comprar';
    buyButton.addEventListener('click', () => {
        addToCart(product);
    });
    card.appendChild(buyButton);

    const link = document.createElement('a');
    link.href = product.link;
    link.textContent = 'Ver producto';
    card.appendChild(link);

    return card;
}

// Función para actualizar la cuadrícula de productos
function updateProductGrid(products) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = ''; // Limpia la cuadrícula existente

    products.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Función para aplicar filtros y ordenación
function applyFiltersAndSorting() {
    const category = document.getElementById('filter-category').value;
    const type = document.getElementById('filter-type').value;
    const sortOption = document.getElementById('sort-select').value;
    const searchQuery = document.getElementById('search-input').value;

    // Filtrar productos en función de la categoría, tipo seleccionados y búsqueda
    let filteredProducts = products.filter(product => {
        const matchesCategory = category === '' || product.category === category;
        const matchesType = type === '' || product.type === type;
        const matchesSearch = searchQuery === '' || product.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesType && matchesSearch;
    });

    // Ordenar productos según la selección
    if (sortOption === 'price-asc') {
        filteredProducts.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
    } else if (sortOption === 'price-desc') {
        filteredProducts.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
    } else if (sortOption === 'name-asc') {
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'name-desc') {
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    // Actualizar la visualización de los productos
    updateProductGrid(filteredProducts);
    closeSearchModal();
}

// Añadir eventos a los botones y selects
document.getElementById('apply-filters').addEventListener('click', () => {
    applyFiltersAndSorting();
});

document.querySelector('.btn-clear').addEventListener('click', () => {
    document.getElementById('filter-category').value = '';
    document.getElementById('filter-type').value = '';
    document.getElementById('sort-select').value = ''; // Ajusta a tu valor por defecto
    document.getElementById('search-input').value = ''; // Limpia el campo de búsqueda
    updateTypeOptions(); // Actualiza las opciones de tipo cuando se borra el filtro de categoría
    applyFiltersAndSorting();
});

document.getElementById('filter-category').addEventListener('change', () => {
    updateTypeOptions();
    applyFiltersAndSorting();
});

document.getElementById('filter-type').addEventListener('change', () => {
    applyFiltersAndSorting();
});

document.getElementById('sort-select').addEventListener('change', () => {
    applyFiltersAndSorting();
});

document.getElementById('search-input').addEventListener('input', () => {
    applyFiltersAndSorting();
});

document.getElementById('search-button').addEventListener('click', () => {
    applyFiltersAndSorting();
    closeSearchModal();
});

// Función para actualizar las opciones de tipo basadas en la categoría seleccionada
function updateTypeOptions() {
    const category = document.getElementById('filter-category').value;
    const typeSelect = document.getElementById('filter-type');
    typeSelect.innerHTML = ''; // Limpiar las opciones existentes

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Selecciona un tipo';
    typeSelect.appendChild(defaultOption);

    const types = new Set(products
        .filter(product => category === '' || product.category === category)
        .map(product => product.type));

    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typeSelect.appendChild(option);
    });

    applyFiltersAndSorting();
}

// Función para actualizar la vista del carrito
function updateCartUI() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cartCount");
    cartItems.innerHTML = "";
    let total = 0;

    if (carrito.length === 0) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = "Tu carrito está vacío.";
        cartItems.appendChild(li);
        cartCount.textContent = "0";
    } else {
        carrito.forEach((product, index) => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";
            li.textContent = product.title;
            const span = document.createElement("span");
            span.textContent = `$${product.price}`;
            li.appendChild(span);

            const removeButton = document.createElement("button");
            removeButton.textContent = "Eliminar";
            removeButton.className = "btn btn-danger btn-sm ms-2";
            removeButton.addEventListener("click", () => {
                carrito.splice(index, 1);
                updateCartUI();
            });
            li.appendChild(removeButton);

            cartItems.appendChild(li);
            total += parseFloat(product.price.replace('$', ''));
        });
        cartCount.textContent = carrito.length;
    }

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
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

// Inicializar la vista del carrito
updateCartUI();

// Llamar a la función de inicialización al cargar la página
applyFiltersAndSorting();
