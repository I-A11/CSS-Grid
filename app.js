const products = document.querySelector(".products");
const search = document.getElementById("search");
const productName = document.querySelectorAll(".product-details h3");

search.addEventListener("keyup", (e) => {
  e.preventDefault();
  const text = e.target.value.toLowerCase();
  productName.forEach((product) => {
    const item = product.firstChild.textContent;
    // console.log(item);
    if (item.toLowerCase().indexOf(text) != -1) {
      //   console.log(product.parentElement);
      product.parentElement.style.display = "block";
    } else {
      product.parentElement.style.display = "none";
    }
  });
});
