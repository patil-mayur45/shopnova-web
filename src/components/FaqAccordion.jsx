import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQS = [
  {
    q: "How long does delivery take?",
    a: "Most orders arrive within 3-5 business days. Express options are shown at checkout.",
  },
  {
    q: "What is your return policy?",
    a: "You can return any item within 30 days of delivery for a full refund, no questions asked.",
  },
  {
    q: "Do you offer international shipping?",
    a: "Yes, we ship to over 40 countries. Shipping fees are calculated at checkout.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order ships, you'll receive a tracking link by email and SMS.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-gray-200 border-t border-b border-gray-200">
      {FAQS.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left font-600"
          >
            {item.q}
            <FiChevronDown
              className={`transition-transform ${openIndex === i ? "rotate-180" : ""}`}
            />
          </button>
          {openIndex === i && (
            <p className="pb-4 text-sm text-gray-600 leading-relaxed">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
