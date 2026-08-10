import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../features/products/productsSlice";

export default function CategoryFilter() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
  const active = useSelector((state) => state.products.activeCategory);

  const all = ["all", ...categories];

  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar py-2 px-1">
      {all.map((cat) => (
        <button
          key={cat}
          onClick={() => dispatch(setActiveCategory(cat))}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-600 capitalize border transition-colors ${
            active === cat
              ? "bg-primary text-cream border-primary"
              : "bg-white text-ink border-gray-200 hover:border-primary"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
