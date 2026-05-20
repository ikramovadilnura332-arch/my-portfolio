"use client";

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="w-full max-w-sm mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 text-white text-center shadow-2xl mt-12">
      <h3 className="text-lg font-bold tracking-wide text-slate-200 mb-2">
        Aqlli Sanoq Ilovasi
      </h3>
      <p className="text-xs text-slate-400 mb-8">
        Tezkor, responsive va xatosiz ishlovchi komponent
      </p>

      {/* Sanoq ko'rsatkichi va tugmalar */}
      <div className="flex items-center justify-center gap-6 mb-6">
        <button
          type="button"
          onClick={() => setCount(count - 1)}
          className="w-14 h-14 bg-red-600/20 hover:bg-red-600 border border-red-500/30 text-red-200 hover:text-white rounded-xl text-2xl font-bold transition-all duration-200 active:scale-95"
        >
          -
        </button>
        
        <span className="text-5xl font-black min-w-[70px] text-white">
          {count}
        </span>

        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="w-14 h-14 bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/30 text-emerald-200 hover:text-white rounded-xl text-2xl font-bold transition-all duration-200 active:scale-95"
        >
          +
        </button>
      </div>

      {/* Nollashtirish tugmasi */}
      <button
        type="button"
        onClick={() => setCount(0)}
        className="text-xs text-slate-400 hover:text-white underline decoration-slate-600 transition-colors"
      >
        Qiymatni qayta tiklash
      </button>
    </div>
  );
}