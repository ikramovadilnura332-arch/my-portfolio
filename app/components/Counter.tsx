"use client"; // <-- Next.js App Router-da xatolik bermasligi uchun shart!

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); // Holatni saqlash

  return (
    <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow w-fit">
      <button
        onClick={() => setCount(count - 1)} // Kamaytirish
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-xl font-bold"
      >
        −
      </button>
      
      <span className="text-3xl font-bold w-16 text-center text-gray-800">{count}</span>
      
      <button
        onClick={() => setCount(count + 1)} // Ko'paytirish
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-xl font-bold"
      >
        +
      </button>
    </div>
  );
}