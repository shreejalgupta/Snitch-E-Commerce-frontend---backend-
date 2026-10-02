import { useState, useMemo } from "react";
import { createProduct } from "../api/productApi";

const INITIAL_SIZES = [
  { size: "XS", stock: 0 },
  { size: "S", stock: 0 },
  { size: "M", stock: 0 },
  { size: "L", stock: 0 },
  { size: "XL", stock: 0 },
  { size: "XXL", stock: 0 },
];

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB in bytes

export const useUpload = () => {
  // Form field states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [imageError, setImageError] = useState(null);
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState("INR");
  const [sizes, setSizes] = useState(INITIAL_SIZES);

  // Network & UI feedback states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Clear / Discard function to reset all fields back to blank/initial
  const discardDraft = () => {
    setTitle("");
    setDescription("");
    setImages([]);
    setPrice(0);
    setCurrency("INR");
    setSizes(INITIAL_SIZES);
    setError(null);
    setSuccess(false);
    setImageError(null);
  };

  // Stock helpers
  const handleStockDelta = (sizeName, delta) => {
    setSizes((prev) =>
      prev.map((s) =>
        s.size === sizeName
          ? { ...s, stock: Math.max(0, (Number(s.stock) || 0) + delta) }
          : s,
      ),
    );
  };

  const handleClearStock = (sizeName) => {
    setSizes((prev) =>
      prev.map((s) => (s.size === sizeName ? { ...s, stock: 0 } : s)),
    );
  };

  const handleBatchAdjust = (amount) => {
    setSizes((prev) =>
      prev.map((s) => ({
        ...s,
        stock: Math.max(0, (Number(s.stock) || 0) + amount),
      })),
    );
  };

  // Keep each original file alongside its preview for multipart upload.
  const handleImageFiles = async (files) => {
    setImageError(null);
    const fileList = Array.from(files);
    const availableSlots = 5 - images.length;

    if (availableSlots <= 0) {
      setImageError("Maximum 5 image slots allowed.");
      return;
    }

    const validFiles = [];
    fileList.slice(0, availableSlots).forEach((file) => {
      if (!file.type.startsWith("image/")) {
        setImageError("Only image files (JPG, PNG, WEBP) are supported.");
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        setImageError(
          `"${file.name}" exceeds 1MB limit (${(file.size / (1024 * 1024)).toFixed(2)}MB). Max size is 1MB per image.`,
        );
        return;
      }

      validFiles.push(file);
    });

    const imagePreviews = await Promise.all(
      validFiles.map(
        (file) =>
          new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () =>
              resolve({ file, preview: reader.result });
            reader.onerror = () => resolve(null);
            reader.readAsDataURL(file);
          }),
      ),
    );

    setImages((prev) => [...prev, ...imagePreviews.filter(Boolean)].slice(0, 5));
  };

  const handleRemoveImage = (index) => {
    setImageError(null);
    setImages((prev) => prev.filter((_, idx) => idx !== index));
  };


  // Validation according to your Mongoose Schema
  const isTitleValid = title.trim().length >= 2 && title.trim().length <= 100;
  const isDescValid =
    description.trim().length >= 20 && description.trim().length <= 500;
  const isImagesValid = images.length >= 1 && images.length <= 5;
  const isPriceValid = Number(price) > 0;
  const totalStock = useMemo(
    () => sizes.reduce((acc, curr) => acc + (Number(curr.stock) || 0), 0),
    [sizes],
  );
  const isSizesValid = sizes.length === 6 && totalStock > 0;

  const validCount = [
    isTitleValid,
    isDescValid,
    isImagesValid,
    isPriceValid,
    isSizesValid,
  ].filter(Boolean).length;

  const isFormValid = validCount === 5;

  // Publish to Database
  const publishProduct = async () => {
    if (!isFormValid || loading) return;

    setLoading(true);
    setError(null);
    setSuccess(false);

    // Matches your Mongoose Schema (price.ammount with double 'm')
    const payload = {
      title: title.trim(),
      description: description.trim(),
      images,
      price: {
        ammount: Number(price),
        currency,
      },
      sizes: sizes.map((s) => ({
        size: s.size,
        stock: Number(s.stock) || 0,
      })),
    };

    try {
      const response = await createProduct(payload);
      setSuccess(true);
      setLoading(false)
      discardDraft();
      return response;
    } catch (err) {
      setError(err.message || "Failed to publish product");
    } finally {
      setLoading(false);
    }
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    setImages,
    price,
    setPrice,
    currency,
    setCurrency,
    sizes,
    setSizes,
    totalStock,
    loading,
    error,
    success,
    discardDraft,
    handleStockDelta,
    handleClearStock,
    handleBatchAdjust,
    publishProduct,
    isTitleValid,
    isDescValid,
    isImagesValid,
    isPriceValid,
    isSizesValid,
    validCount,
    isFormValid,
    
    images,
    imageError,
    setImageError,
    handleImageFiles,
    handleRemoveImage,
  };
};
