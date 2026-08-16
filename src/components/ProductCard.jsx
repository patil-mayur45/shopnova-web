// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { FiHeart, FiShoppingCart, FiStar, FiZap } from "react-icons/fi";
// import { addToCart, selectIsInCart } from "../features/cart/cartSlice";
// import { toggleWishlist, selectIsWishlisted } from "../features/wishlist/wishlistSlice";

// // Fake Store API has no "discount" field, so we derive a believable
// // original price by marking the current price up ~20% for display.
// function getOriginalPrice(price) {
//   return (price * 1.2).toFixed(2);
// }

// export default function ProductCard({ product }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const inCart = useSelector(selectIsInCart(product.id));
//   const wishlisted = useSelector(selectIsWishlisted(product.id));

//   return (
//     <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
//       <Link to={`/product/${product.id}`} className="block relative bg-gray-50 h-48 p-4">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
//         />
//         <button
//           onClick={(e) => {
//             e.preventDefault();
//             dispatch(toggleWishlist(product));
//           }}
//           aria-label="Add to favorites"
//           className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow ${
//             wishlisted ? "bg-accent text-primary-dark" : "bg-white text-gray-400"
//           }`}
//         >
//           <FiHeart className={wishlisted ? "fill-current" : ""} size={16} />
//         </button>
//       </Link>

//       <div className="p-4 flex flex-col flex-1">
//         <Link to={`/product/${product.id}`}>
//           <h3 className="text-sm font-600 line-clamp-2 min-h-[2.5rem] hover:text-primary">
//             {product.title}
//           </h3>
//         </Link>

//         <div className="flex items-center gap-1 mt-1 text-accent text-xs">
//           {Array.from({ length: 5 }).map((_, i) => (
//             <FiStar
//               key={i}
//               className={i < Math.round(product.rating?.rate || 4) ? "fill-current" : ""}
//             />
//           ))}
//           <span className="text-gray-400 ml-1">({product.rating?.count ?? 0})</span>
//         </div>

//         <div className="flex items-baseline gap-2 mt-2">
//           <span className="font-700 text-primary">${product.price.toFixed(2)}</span>
//           <span className="text-xs text-gray-400 line-through">
//             ${getOriginalPrice(product.price)}
//           </span>
//         </div>

//         <div className="mt-3 grid grid-cols-2 gap-2">
//           <button
//             onClick={() => (inCart ? navigate("/cart") : dispatch(addToCart(product)))}
//             className={`flex items-center justify-center gap-1 text-xs sm:text-sm font-600 py-2 rounded-full transition-colors ${
//               inCart
//                 ? "bg-primary/10 text-primary"
//                 : "bg-primary text-cream hover:bg-primary-dark"
//             }`}
//           >
//             <FiShoppingCart size={16} />
//             {inCart ? "Go to Cart" : "Add to Cart"}
//           </button>
// {/* 
//           <button
//             onClick={() => {
//               // Buy Now: make sure it's in the cart, then jump straight to checkout
//               if (!inCart) dispatch(addToCart(product));
//               navigate("/cart");
//             }}
//             className="flex items-center justify-center gap-1 text-xs sm:text-sm font-600 py-2 rounded-full bg-accent text-primary-dark hover:bg-accent-light transition-colors"
//           >
//             <FiZap size={16} />
//             Buy Now
//           </button> */}
//         </div>
//       </div>
//     </div>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import { addToCart, selectIsInCart } from "../features/cart/cartSlice";
import { toggleWishlist, selectIsWishlisted } from "../features/wishlist/wishlistSlice";

// Fake Store API has no "discount" field, so we derive a believable
// original price by marking the current price up ~20% for display.
function getOriginalPrice(price) {
  return (price * 1.2).toFixed(2);
}

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inCart = useSelector(selectIsInCart(product.id));
  const wishlisted = useSelector(selectIsWishlisted(product.id));

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
      <Link to={`/product/${product.id}`} className="block relative bg-gray-50 h-48 p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(toggleWishlist(product));
          }}
          aria-label="Add to favorites"
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow ${
            wishlisted ? "bg-accent text-primary-dark" : "bg-white text-gray-400"
          }`}
        >
          <FiHeart className={wishlisted ? "fill-current" : ""} size={16} />
        </button>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-600 line-clamp-2 min-h-[2.5rem] hover:text-primary">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mt-1 text-accent text-xs">
          {Array.from({ length: 5 }).map((_, i) => (
            <FiStar
              key={i}
              className={i < Math.round(product.rating?.rate || 4) ? "fill-current" : ""}
            />
          ))}
          <span className="text-gray-400 ml-1">({product.rating?.count ?? 0})</span>
        </div>

        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-700 text-primary">${product.price.toFixed(2)}</span>
          <span className="text-xs text-gray-400 line-through">
            ${getOriginalPrice(product.price)}
          </span>
        </div>

        <button
          onClick={() => (inCart ? navigate("/cart") : dispatch(addToCart(product)))}
          className={`mt-3 w-full flex items-center justify-center gap-1 text-xs sm:text-sm font-600 py-2 rounded-full transition-colors ${
            inCart
              ? "bg-primary/10 text-primary"
              : "bg-primary text-cream hover:bg-primary-dark"
          }`}
        >
          <FiShoppingCart size={16} />
          {inCart ? "Go to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}