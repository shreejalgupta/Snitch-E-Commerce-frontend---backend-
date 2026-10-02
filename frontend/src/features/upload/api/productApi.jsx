import api from "../../../app/api/api.jsx";

export const createProduct = async (productData) => {
  try {
    const formData = new FormData();
    formData.append("title", productData.title);
    formData.append("description", productData.description);
    formData.append("price", JSON.stringify(productData.price));
    formData.append("sizes", JSON.stringify(productData.sizes));
    productData.images.forEach(({ file }) => {
      formData.append("images", file, file.name);
    });

    const response = await api.post("/products", formData, {
      timeout: 60_000,
    });
    return response.data;
  } catch (error) {
    // Axios places backend error responses under error.response.data
    const message =
      error.response?.data?.message ||
      error.message ||
      "An unexpected error occurred while uploading the product";
    throw new Error(message);
  }
};