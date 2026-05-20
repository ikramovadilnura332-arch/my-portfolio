"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  const handleLogin = () => {
    // Login muvaffaqiyatli bo'lganda dashboard ga o'tish
    router.push("/dashboard");
    
    // Orqaga borish
    // router.back();
    
    // Sahifani yangilash
    // router.refresh();
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Chap tomon: Sayt Logotipi yoki Nomi */}
        <Link href="/" className="text-xl font-bold tracking-wider text-blue-400">
          SANOQ.UZ
        </Link>

        {/* O'ng tomon: Navigatsiya va Kirish tugmasi */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors hidden sm:inline">
            Bosh sahifa
          </Link>
          <Link href="/products" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors hidden sm:inline">
            Mahsulotlar
          </Link>
          
          {/* Sizning asosiy login funksiyangiz bilan ishlaydigan tugma */}
          <button
            type="button"
            onClick={handleLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all active:scale-95 shadow-md shadow-blue-600/20"
          >
            Kirish
          </button>
        </div>
      </div>
    </nav>
  );
}