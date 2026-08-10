import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <footer className="bg-primary-dark text-cream mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display font-700 text-lg mb-3">
            Shop<span className="text-accent">Nest</span>
          </h3>
          <p className="text-sm text-cream/70 leading-relaxed">
            ShopNest brings every category you need into one nest — curated
            products, honest prices, and a checkout that gets out of your way.
          </p>
        </div>

        <div>
          <h4 className="font-600 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/cart" className="hover:text-accent">Cart</Link></li>
            <li><Link to="/wishlist" className="hover:text-accent">Wishlist</Link></li>
            <li><Link to="/login" className="hover:text-accent">Login</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-600 mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li className="flex items-center gap-2"><FiPhone /> +1 (555) 012-3456</li>
            <li className="flex items-center gap-2"><FiMail /> support@shopnest.example</li>
            <li className="flex items-center gap-2"><FiMapPin /> 42 Market Street, Springfield</li>
          </ul>
        </div>

        <div>
          <h4 className="font-600 mb-3">Newsletter</h4>
          <p className="text-sm text-cream/70 mb-3">Get deals before anyone else.</p>
          {subscribed ? (
            <p className="text-accent text-sm font-600">Subscribed! Watch your inbox.</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full px-3 py-2 rounded-l-md text-ink text-sm outline-none"
              />
              <button className="bg-accent text-primary-dark px-4 rounded-r-md text-sm font-600">
                Join
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} ShopNest. All rights reserved.
      </div>
    </footer>
  );
}
