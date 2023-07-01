// script.js

// Sample product data
var products = [
    { name: "Product 1", description: "Description 1", price: 10, shop: "Shop A" },
    { name: "Product 2", description: "Description 2", price: 20, shop: "Shop B" },
    { name: "Product 3", description: "Description 3", price: 15, shop: "Shop A" }
    // Add more product objects here
];

// Function to build the product grid
function buildProductGrid() {
    var productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = ""; // Clear previous content

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.dataset.shop = product.shop;

        var productName = document.createElement("h2");
        productName.textContent = product.name;

        var productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        var productPrice = document.createElement("p");
        productPrice.textContent = "Price: $" + product.price;

        gridItem.appendChild(productName);
        gridItem.appendChild(productDescription);
        gridItem.appendChild(productPrice);

        productGrid.appendChild(gridItem);
    }
}

// Event listener for form submission
document.getElementById("filter-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve selected filter values
    var shopFilter = document.getElementById("shop-list").value;
    var itemTypeFilter = document.getElementById("item-type").value;
    var priceSort = document.getElementById("sort-price").value;
    var salesSort = document.getElementById("sort-sales").value;
    var ratingSort = document.getElementById("sort-rating").value;

    // Perform filtering and sorting logic here

    buildProductGrid(); // Rebuild the product grid
});

// Initial build of the product grid
buildProductGrid();
