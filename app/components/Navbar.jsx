"use client";

import { useRouter } from "next/navigation";

export default function LoginForm() {
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
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">Kirish</h1>
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        Kirish
      </button>
    </div>
  );
}