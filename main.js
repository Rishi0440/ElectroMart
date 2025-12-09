import { showProductContainer } from "./homeProductCards.js";

// ✅ Fetch JSON instead of importing it
fetch("./api/products.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load products.json");
    }
    return response.json();
  })
  .then(products => {
    showProductContainer(products);
  })
  .catch(error => {
    console.error("Error loading product data:", error);
  });
