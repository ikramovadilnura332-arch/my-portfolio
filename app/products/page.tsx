async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Mahsulotlarni olishda xatolik");
  }

  return response.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mahsulotlar</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.slice(0, 6).map((product: any) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow p-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />

            <h3 className="font-semibold text-sm">
              {product.title}
            </h3>

            <p className="text-blue-600 font-bold mt-2">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}