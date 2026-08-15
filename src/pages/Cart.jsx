// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
// import {
//   selectCartItems,
//   selectCartTotal,
//   removeFromCart,
//   incrementQty,
//   decrementQty,
// } from "../features/cart/cartSlice";

// export default function Cart() {
//   const items = useSelector(selectCartItems);
//   const total = useSelector(selectCartTotal);
//   const dispatch = useDispatch();

//   if (items.length === 0) {
//     return (
//       <div className="max-w-3xl mx-auto px-4 py-24 text-center">
//         <h1 className="text-2xl font-700 mb-3">Your cart is empty</h1>
//         <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
//         <Link to="/" className="bg-primary text-cream px-6 py-3 rounded-full font-600">
//           Continue Shopping
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//       <h1 className="text-2xl font-700 mb-6">Your Cart ({items.length})</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2 space-y-4">
//           {items.map((item) => (
//             <div key={item.id} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
//               <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
//               <div className="flex-1 min-w-0">
//                 <p className="font-600 text-sm line-clamp-2">{item.title}</p>
//                 <p className="text-primary font-700 mt-1">${item.price.toFixed(2)}</p>
//               </div>
//               <div className="flex items-center gap-2 border rounded-full px-2 py-1">
//                 <button onClick={() => dispatch(decrementQty(item.id))} aria-label="Decrease quantity">
//                   <FiMinus size={14} />
//                 </button>
//                 <span className="w-6 text-center text-sm">{item.qty}</span>
//                 <button onClick={() => dispatch(incrementQty(item.id))} aria-label="Increase quantity">
//                   <FiPlus size={14} />
//                 </button>
//               </div>
//               <button
//                 onClick={() => dispatch(removeFromCart(item.id))}
//                 aria-label="Remove item"
//                 className="text-gray-400 hover:text-red-500"
//               >
//                 <FiTrash2 />
//               </button>
//             </div>
//           ))}
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
//           <h2 className="font-700 text-lg mb-4">Order Summary</h2>
//           <div className="flex justify-between text-sm mb-2">
//             <span className="text-gray-500">Subtotal</span>
//             <span>${total.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between text-sm mb-2">
//             <span className="text-gray-500">Shipping</span>
//             <span>{total > 50 ? "Free" : "$4.99"}</span>
//           </div>
//           <div className="border-t mt-3 pt-3 flex justify-between font-700 text-lg">
//             <span>Total</span>
//             <span>${(total > 50 ? total : total + 4.99).toFixed(2)}</span>
//           </div>
//           <button className="w-full bg-accent text-primary-dark font-700 py-3 rounded-full mt-5">
//             Proceed to Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiTrash2, FiPlus, FiMinus, FiZap } from "react-icons/fi";
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCart,
} from "../features/cart/cartSlice";

export default function Cart() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const finalTotal = total > 50 ? total : total + 4.99;

  function handleBuyNow() {
    const orderId = `SN-${Date.now().toString().slice(-8)}`;
    dispatch(clearCart());
    navigate("/order-success", { state: { total: finalTotal, orderId } });
  }

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-700 mb-3">Your cart is empty</h1>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
        <Link to="/" className="bg-primary text-cream px-6 py-3 rounded-full font-600">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-700 mb-6">Your Cart ({items.length})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
              <div className="flex-1 min-w-0">
                <p className="font-600 text-sm line-clamp-2">{item.title}</p>
                <p className="text-primary font-700 mt-1">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2 border rounded-full px-2 py-1">
                <button onClick={() => dispatch(decrementQty(item.id))} aria-label="Decrease quantity">
                  <FiMinus size={14} />
                </button>
                <span className="w-6 text-center text-sm">{item.qty}</span>
                <button onClick={() => dispatch(incrementQty(item.id))} aria-label="Increase quantity">
                  <FiPlus size={14} />
                </button>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                aria-label="Remove item"
                className="text-gray-400 hover:text-red-500"
              >
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm h-fit">
          <h2 className="font-700 text-lg mb-4">Order Summary</h2>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Shipping</span>
            <span>{total > 50 ? "Free" : "$4.99"}</span>
          </div>
          <div className="border-t mt-3 pt-3 flex justify-between font-700 text-lg">
            <span>Total</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>

          {/* Single centered Buy Now button */}
          <div className="flex justify-center mt-5">
            <button
              onClick={handleBuyNow}
              className="w-full flex items-center justify-center gap-2 bg-accent text-primary-dark font-700 py-3 rounded-full hover:bg-accent-light transition-colors text-sm"
            >
              <FiZap size={16} /> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}