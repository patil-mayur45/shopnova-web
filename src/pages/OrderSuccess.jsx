import { Link, useLocation } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

export default function OrderSuccess() {
  const location = useLocation();
  const orderTotal = location.state?.total ?? 0;
  const orderId = location.state?.orderId ?? "N/A";

  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
        <FiCheckCircle size={40} />
      </div>
      <h1 className="text-2xl sm:text-3xl font-700 mb-2">Order Placed Successfully!</h1>
      <p className="text-gray-500 mb-6">
        Thank you for shopping with ShopNova. Your order has been confirmed.
      </p>

      <div className="bg-white rounded-xl shadow-sm p-6 text-left max-w-sm mx-auto mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-500">Order ID</span>
          <span className="font-600">{orderId}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Amount Paid</span>
          <span className="font-700 text-primary">${orderTotal.toFixed(2)}</span>
        </div>
      </div>

      <Link
        to="/"
        className="inline-block bg-primary text-cream px-6 py-3 rounded-full font-600 hover:bg-primary-dark transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}