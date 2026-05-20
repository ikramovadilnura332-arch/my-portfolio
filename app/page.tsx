import Counter from "./components/Counter"; 



export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold">Sanoq Ilovasi</h1>
      <Counter /> {}
    </div>
  );
}