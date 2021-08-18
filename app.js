const products = document.querySelectorAll(".product-details");
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h3");
const filters = document.querySelectorAll(".filter-products");
// search
search.addEventListener("keyup", (e) => {
  e.preventDefault();
  const text = e.target.value.toLowerCase();
  productName.forEach((product) => {
    const item = product.firstChild.textContent;
    // console.log(item);
    if (item.toLowerCase().indexOf(text) != -1) {
      //   console.log(product.parentElement);
      product.parentElement.style.display = "grid";
    } else {
      product.parentElement.style.display = "none";
    }
  });
});

// filter
for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.value;
    // console.log(filter);
    products.forEach((product) => {
      if (filter == "all") {
        product.style.display = "grid";
      } else {
        if (product.classList.contains(filter)) {
          product.style.display = "grid";
        } else {
          product.style.display = "none";
        }
      }
    });
  });
}
