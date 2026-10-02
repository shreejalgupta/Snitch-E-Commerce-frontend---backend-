import React from "react";
import { Star } from "lucide-react";
import { ProductCard } from "../../../../shared/UI/components/ProductCard";
import { useSelector } from "react-redux";
import store from "../../../../app/store/store";

const ProductsPage = () => {
    const {products} = useSelector(store => store.allProduct)
  return (
    <main className="w-full bg-[#fafafa] py-12 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-7xl mx-auto">
        
        {/* Simple Page Header */}
        <div className="mb-8">
          <h1 className="font-headline text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900">
            ALL COLLECTIONS
          </h1>
          <p className="font-label text-xs uppercase tracking-wider text-neutral-500 mt-1">
            Showing {products.length} Styles
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
          {products.map((product) => (
            <ProductCard 
            title={product.title} 
            price={product.price.ammount} 
            image={product.images[0]}
            id={product._id}
            sizes={product.sizes}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;