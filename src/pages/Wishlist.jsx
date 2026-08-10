import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiTrash2, FiShoppingCart } from "react-icons/fi";
import { selectWishlistItems, removeFromWishlist } from "../features/wishlist/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice";

export default function Wishlist() {
  const items = useSelector(selectWishlistItems);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-700 mb-3">Your wishlist is empty</h1>
        <p className="text-gray-500 mb-6">Save products you love for later.</p>
        <Link to="/" className="bg-primary text-cream px-6 py-3 rounded-full font-600">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-700 mb-6">Your Wishlist ({items.length})</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
            <div className="flex-1 min-w-0">
              <p className="font-600 text-sm line-clamp-2">{item.title}</p>
              <p className="text-primary font-700 mt-1">${item.price.toFixed(2)}</p>
            </div>
            <button
              onClick={() => dispatch(addToCart(item))}
              aria-label="Add to cart"
              className="text-primary hover:text-primary-dark"
            >
              <FiShoppingCart />
            </button>
            <button
              onClick={() => dispatch(removeFromWishlist(item.id))}
              aria-label="Remove from wishlist"
              className="text-gray-400 hover:text-red-500"
            >
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
