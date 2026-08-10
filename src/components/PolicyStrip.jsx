import { FiTruck, FiRefreshCw, FiHeadphones } from "react-icons/fi";

const POLICIES = [
  { icon: FiTruck, title: "Free Shipping", desc: "On all orders over $50" },
  { icon: FiRefreshCw, title: "Free Returns", desc: "30-day return window" },
  { icon: FiHeadphones, title: "24/7 Support", desc: "We're always here to help" },
];

export default function PolicyStrip() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white rounded-xl p-6 shadow-sm">
      {POLICIES.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <Icon size={22} />
          </div>
          <div>
            <p className="font-600">{title}</p>
            <p className="text-sm text-gray-500">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
