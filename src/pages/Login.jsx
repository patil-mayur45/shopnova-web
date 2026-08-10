import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = {};

    if (!email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!password) {
      nextErrors.password = "Password is required.";
    } else if (password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      dispatch(login({ email }));
      navigate("/");
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h1 className="text-2xl font-700 mb-1">Welcome back</h1>
        <p className="text-gray-500 text-sm mb-6">Log in to continue to ShopNest.</p>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label className="text-sm font-600 block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40 ${
                errors.email ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="you@email.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="text-sm font-600 block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40 ${
                errors.password ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <button className="w-full bg-primary text-cream font-700 py-3 rounded-full mt-2">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
