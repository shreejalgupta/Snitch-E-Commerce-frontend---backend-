import React from "react";
import DropMetadataCard from "../components/DropMetadataCard";
import EditorialMediaCard from "../components/EditorialMediaCard";
import PricingArchitectureCard from "../components/PricingArchitectureCard";
import InventoryAllocationCard from "../components/InventoryAllocationCard";
import LiveStoreSimulator from "../components/LiveStoreSimulator";
import SchemaComplianceCard from "../components/SchemaComplianceCard";
import { useUpload } from "../../hook/useUpload";

const ProductUploadPage = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    images,
    imageError,
    price,
    setPrice,
    currency,
    setCurrency,
    sizes,
    setSizes,
    setImageError,
    totalStock,
    loading,
    error,
    success,
    discardDraft,
    handleStockDelta,
    handleClearStock,
    handleBatchAdjust,
    handleImageFiles,
    handleRemoveImage,
    publishProduct,
    isTitleValid,
    isDescValid,
    isImagesValid,
    isPriceValid,
    isSizesValid,
    validCount,
    isFormValid,
  } = useUpload();

  return (
    <div className="w-full min-h-screen bg-[#f7f7f9] text-black py-10 px-4 sm:px-6 lg:px-12 selection:bg-[#cbfb45] selection:text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 8 COLUMNS: Form Feature Cards */}
          <div className="lg:col-span-8 space-y-6">
            <DropMetadataCard
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              isTitleValid={isTitleValid}
              isDescValid={isDescValid}
            />

            <EditorialMediaCard
              images={images}
              imageError={imageError}
              onImageFiles={handleImageFiles}
              onRemoveImage={handleRemoveImage}
            />

            <PricingArchitectureCard
              price={price}
              setPrice={setPrice}
              currency={currency}
              setCurrency={setCurrency}
            />

            <InventoryAllocationCard
              sizes={sizes}
              setSizes={setSizes}
              totalStock={totalStock}
              onStockDelta={handleStockDelta}
              onClearStock={handleClearStock}
              onBatchAdjust={handleBatchAdjust}
            />
          </div>

          {/* RIGHT 4 COLUMNS: Sticky Simulator & Compliance Engine */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
            <LiveStoreSimulator
              title={title}
              description={description}
              price={price}
              currency={currency}
              images={images}
              sizes={sizes}
              totalStock={totalStock}
            />

            <SchemaComplianceCard
              title={title}
              description={description}
              images={images}
              price={price}
              sizes={sizes}
              totalStock={totalStock}
              validCount={validCount}
              isTitleValid={isTitleValid}
              isDescValid={isDescValid}
              isImagesValid={isImagesValid}
              isPriceValid={isPriceValid}
              isSizesValid={isSizesValid}
              isFormValid={isFormValid}
              loading={loading}
              error={error}
              success={success}
              onPublish={publishProduct}
              onDiscard={discardDraft}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductUploadPage;