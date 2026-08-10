import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiSearch, FiShoppingCart, FiHeart, FiBell, FiUser, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { selectCartCount } from "../features/cart/cartSlice";
import { selectWishlistCount } from "../features/wishlist/wishlistSlice";
import { selectUser, logout } from "../features/auth/authSlice";
import { setSearchTerm } from "../features/products/productsSlice";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const cartCount = useSelector(selectCartCount);
  const wishlistCount = useSelector(selectWishlistCount);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSearchSubmit(e) {
    e.preventDefault();
    dispatch(setSearchTerm(query));
    navigate("/");
  }

  return (
    <header className="sticky top-0 z-50 bg-primary text-cream shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="w-9 h-9 rounded-full bg-accent flex items-center justify-center font-display font-800 text-primary-dark text-lg">
              S
            </span>
            <span className="font-display font-700 text-xl tracking-tight hidden sm:block">
              Shop<span className="text-accent">Nest</span>
            </span>
          </Link>

          {/* Search - desktop always visible, mobile toggled */}
          <form
            onSubmit={handleSearchSubmit}
            className={`flex-1 max-w-md items-center bg-cream/10 rounded-full px-3 py-1.5 ${
              searchOpen ? "flex" : "hidden sm:flex"
            }`}
          >
            <FiSearch className="text-cream/70 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="bg-transparent outline-none px-2 w-full text-sm placeholder:text-cream/50"
            />
          </form>

          {/* Icons */}
          <div className="flex items-center gap-4 sm:gap-5 shrink-0">
            <button
              className="sm:hidden"
              aria-label="Toggle search"
              onClick={() => setSearchOpen((s) => !s)}
            >
              {searchOpen ? <FiX size={20} /> : <FiSearch size={20} />}
            </button>

            <button className="relative hidden sm:block" aria-label="Notifications">
              <FiBell size={20} />
            </button>

            <Link to="/wishlist" className="relative" aria-label="Wishlist">
              <FiHeart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-primary-dark text-xs font-700 rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative" aria-label="Cart">
              <FiShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-primary-dark text-xs font-700 rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <button
                onClick={() => dispatch(logout())}
                className="hidden sm:flex items-center gap-1 text-sm bg-accent text-primary-dark px-3 py-1.5 rounded-full font-600"
              >
                <FiLogOut size={16} /> Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="hidden sm:flex items-center gap-1 text-sm bg-accent text-primary-dark px-3 py-1.5 rounded-full font-600"
              >
                <FiUser size={16} /> Login
              </Link>
            )}

            <button className="sm:hidden" aria-label="Menu" onClick={() => setMenuOpen((m) => !m)}>
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <form onSubmit={handleSearchSubmit} className="sm:hidden pb-3 flex items-center bg-cream/10 rounded-full px-3 py-1.5">
            <FiSearch className="text-cream/70 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="bg-transparent outline-none px-2 w-full text-sm placeholder:text-cream/50"
            />
          </form>
        )}

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden pb-4 flex flex-col gap-3">
            {user ? (
              <button
                onClick={() => dispatch(logout())}
                className="flex items-center gap-2 text-sm bg-accent text-primary-dark px-3 py-2 rounded-full font-600 w-fit"
              >
                <FiLogOut size={16} /> Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 text-sm bg-accent text-primary-dark px-3 py-2 rounded-full font-600 w-fit"
              >
                <FiUser size={16} /> Login
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
