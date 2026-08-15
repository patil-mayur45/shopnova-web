import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiStar, FiHeart, FiTruck, FiShield, FiRefreshCw, FiZap } from "react-icons/fi";
import { fetchProductById } from "../features/products/productsSlice";
import { addToCart, selectIsInCart } from "../features/cart/cartSlice";
import { toggleWishlist, selectIsWishlisted } from "../features/wishlist/wishlistSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.products.selectedProduct);
  const status = useSelector((state) => state.products.status);
  const inCart = useSelector(selectIsInCart(Number(id)));
  const wishlisted = useSelector(selectIsWishlisted(Number(id)));

  useEffect(() => {
    dispatch(fetchProductById(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  if (status === "loading" || !product) {
    return <div className="max-w-6xl mx-auto px-4 py-16 animate-pulse">Loading product...</div>;
  }

  const originalPrice = (product.price * 1.2).toFixed(2);
  const deliveryDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString(
    "en-US",
    { weekday: "long", month: "short", day: "numeric" }
  );

  function handleAddToCart() {
    if (inCart) {
      navigate("/cart");
    } else {
      dispatch(addToCart(product));
    }
  }

  function handleBuyNow() {
    const orderId = `SN-${Date.now().toString().slice(-8)}`;
    navigate("/order-success", {
      state: { total: product.price, orderId },
    });
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-xl p-10 flex items-center justify-center h-96">
          <img src={product.image} alt={product.title} className="max-h-full object-contain" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-primary font-600">{product.category}</p>
          <h1 className="text-2xl sm:text-3xl font-700 mt-2">{product.title}</h1>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <FiStar key={i} className={i < Math.round(product.rating?.rate || 4) ? "fill-current" : ""} />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              {product.rating?.rate} ({product.rating?.count} reviews)
            </span>
          </div>

          <div className="flex items-baseline gap-3 mt-5">
            <span className="text-3xl font-800 text-primary">${product.price.toFixed(2)}</span>
            <span className="text-gray-400 line-through">${originalPrice}</span>
            <span className="text-accent font-600 text-sm">17% off</span>
          </div>

          <p className="text-gray-600 mt-5 leading-relaxed text-sm">{product.description}</p>

          <ul className="mt-5 space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2"><FiTruck /> Delivery by <strong>{deliveryDate}</strong></li>
            <li className="flex items-center gap-2"><FiRefreshCw /> 30-day free returns</li>
            <li className="flex items-center gap-2"><FiShield /> Secure payment options: Card, UPI, Cash on Delivery</li>
          </ul>

          <div className="grid grid-cols-2 gap-3 mt-8">
            <button
              onClick={handleAddToCart}
              className="bg-primary text-cream font-700 py-4 rounded-full hover:bg-primary-dark transition-colors text-base"
            >
              {inCart ? "Go to Cart" : "Add to Cart"}
            </button>
            <button
              onClick={handleBuyNow}
              className="flex items-center justify-center gap-2 bg-accent text-primary-dark font-700 py-4 rounded-full hover:bg-accent-light transition-colors text-base"
            >
              <FiZap size={18} /> Buy Now
            </button>
          </div>

          <button
            onClick={() => dispatch(toggleWishlist(product))}
            aria-label="Toggle wishlist"
            className={`w-full mt-3 py-3 rounded-full flex items-center justify-center gap-2 border font-600 text-sm ${
              wishlisted ? "bg-accent/10 border-accent text-primary-dark" : "border-gray-300 text-gray-500"
            }`}
          >
            <FiHeart className={wishlisted ? "fill-current" : ""} />
            {wishlisted ? "Added to Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-xl font-700 mb-4">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded-lg p-4 shadow-sm">Category: <span className="font-600 capitalize">{product.category}</span></div>
          <div className="bg-white rounded-lg p-4 shadow-sm">Rating: <span className="font-600">{product.rating?.rate} / 5</span></div>
          <div className="bg-white rounded-lg p-4 shadow-sm">Reviews: <span className="font-600">{product.rating?.count}</span></div>
        </div>
      </div>
    </div>
  );
}