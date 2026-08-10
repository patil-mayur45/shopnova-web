import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import PolicyStrip from "../components/PolicyStrip";
import FaqAccordion from "../components/FaqAccordion";
import { fetchProducts, fetchCategories, selectVisibleProducts } from "../features/products/productsSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const searchTerm = useSelector((state) => state.products.searchTerm);
  const products = useSelector(selectVisibleProducts);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div>
      <Banner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <PolicyStrip />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-700">
            {searchTerm ? `Results for "${searchTerm}"` : "Shop by Category"}
          </h2>
        </div>
        <CategoryFilter />

        {status === "loading" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-white rounded-xl h-72" />
            ))}
          </div>
        )}

        {status === "failed" && (
          <p className="text-red-500 mt-6">Couldn't load products: {error}</p>
        )}

        {status === "succeeded" && (
          <>
            {products.length === 0 ? (
              <p className="text-gray-500 mt-10 text-center">No products match your search.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-700 mb-6 text-center">Frequently Asked Questions</h2>
        <FaqAccordion />
      </div>
    </div>
  );
}
