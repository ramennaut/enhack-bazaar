const products = [
    {
      category: "toy",
      imageSrc: "https://source.unsplash.com/300x300/?toy",
      title: "Alpha Toy",
      price: "$29.99",
      rating: 4.5,
    },
    {
      category: "toy",
      imageSrc: "https://source.unsplash.com/300x300/?action-figure",
      title: "Beta Action Figure",
      price: "$39.99",
      rating: 3.8,
    },
    {
      category: "toy",
      imageSrc: "https://source.unsplash.com/300x300/?lego",
      title: "Charlie Lego Set",
      price: "$34.99",
      rating: 4.2,
    },
    {
      category: "shirt",
      imageSrc: "https://source.unsplash.com/300x300/?toy-shirt",
      title: "Delta Toy Shirt",
      price: "$19.99",
      rating: 4.1,
    },
    {
      category: "shirt",
      imageSrc: "https://source.unsplash.com/300x300/?superhero-shirt",
      title: "Echo Superhero Shirt",
      price: "$24.99",
      rating: 3.9,
    },
    {
      category: "shirt",
      imageSrc: "https://source.unsplash.com/300x300/?toy-clothing",
      title: "Foxtrot Toy Clothing",
      price: "$29.99",
      rating: 4.3,
    },
    {
      category: "gown",
      imageSrc: "https://source.unsplash.com/300x300/?princess-gown",
      title: "Golf Princess Gown",
      price: "$49.99",
      rating: 4.7,
    },
    {
      category: "shirt",
      imageSrc: "https://source.unsplash.com/300x300/?toy-polo",
      title: "Hotel Toy Polo Shirt",
      price: "$39.99",
      rating: 4.0,
    },
    {
      category: "shirt",
      imageSrc: "https://source.unsplash.com/300x300/?toy-mens-shirt",
      title: "India Toy Men's Shirt",
      price: "$34.99",
      rating: 4.4,
    },
    {
      category: "jewelry",
      imageSrc: "https://source.unsplash.com/300x300/?toy-jewelry",
      title: "Juliet Toy Jewelry",
      price: "$59.99",
      rating: 4.9,
    },
    {
      category: "jewelry",
      imageSrc: "https://source.unsplash.com/300x300/?necklace-toy",
      title: "Kilo Toy Necklace",
      price: "$44.99",
      rating: 4.6,
    },
    {
      category: "jewelry",
      imageSrc: "https://source.unsplash.com/300x300/?ring-toy",
      title: "Lima Toy Ring",
      price: "$39.99",
      rating: 4.2,
    },
  ];
  
  
  

const container = document.getElementById("store-products");

// Create and append product elements
products.forEach((product) => {
  const productElement = document.createElement("div");
  productElement.classList.add("store-product", product.category);
  productElement.dataset.price = product.price.replace("$", "");
  productElement.dataset.rating = product.rating;

  const imgElement = document.createElement("img");
  imgElement.src = product.imageSrc;
  imgElement.alt = "";

  const productDetails = document.createElement("div");
  productDetails.classList.add("product-details");

  const titleElement = document.createElement("h2");
  titleElement.textContent = product.title;

  const priceElement = document.createElement("p");
  priceElement.innerHTML = `${product.price}`;

  const ratingElement = document.createElement("p");
  ratingElement.textContent = `Rating: ${product.rating}`;

  const addToCartElement = document.createElement("a");
  addToCartElement.href = "#";
  addToCartElement.textContent = "Add to Cart";

  productDetails.appendChild(titleElement);
  productDetails.appendChild
  productDetails.appendChild(ratingElement);

  productDetails.appendChild(priceElement);
  productDetails.appendChild(addToCartElement);

  productElement.appendChild(imgElement);
  productElement.appendChild(productDetails);



  container.appendChild(productElement);
});

  

const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".store-product");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    // Switch Tab content
    const filter = e.target.dataset.filter;
    // console.log(filter);
    storeProducts.forEach((product) => {
      if (filter === "all") {
        product.style.display = "block";
      } else if (product.classList.contains(filter)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
}

// SEARCH FILTER
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h2");
const noResult = document.querySelector(".no-result");

search.addEventListener("keyup", filterProducts);

function filterProducts(e) {
  const text = e.target.value.toLowerCase();

  productName.forEach((product) => {
    const item = product.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      product.parentElement.parentElement.style.display = "block";
      noResult.style.display = "none";
    } else {
      product.parentElement.parentElement.style.display = "none";
      noResult.style.display = "block";
    }
  });
}

// SORT FUNCTION
const sortSelect = document.getElementById("sort-select");

sortSelect.addEventListener("change", sortProducts);

function sortProducts() {
  const selectedOption = sortSelect.value;

  // Convert storeProducts to an array for easier manipulation
  const productsArray = Array.from(storeProducts);

  if (selectedOption === "price-low") {
    productsArray.sort((a, b) => {
      const priceA = parseFloat(a.dataset.price);
      const priceB = parseFloat(b.dataset.price);
      return priceA - priceB;
    });
  } else if (selectedOption === "price-high") {
    productsArray.sort((a, b) => {
      const priceA = parseFloat(a.dataset.price);
      const priceB = parseFloat(b.dataset.price);
      return priceB - priceA;
    });
  } else if (selectedOption === "rating") {
    productsArray.sort((a, b) => {
      const ratingA = parseFloat(a.dataset.rating);
      const ratingB = parseFloat(b.dataset.rating);
      return ratingB - ratingA;
    });
  } else if (selectedOption === "alphabetical") {
    productsArray.sort((a, b) => {
      const titleA = a.querySelector(".product-details h2").textContent.toLowerCase();
      const titleB = b.querySelector(".product-details h2").textContent.toLowerCase();
      return titleA.localeCompare(titleB);
    });
  }


  
  // Update the display order of products
  productsArray.forEach((product) => {
    product.parentElement.appendChild(product);
  });
}
