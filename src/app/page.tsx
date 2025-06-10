import Header from "./components/Header";
import Career from "./components/Career";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full">
      <Header />
      <main className="mt-20 flex flex-col justify-center items-center h-full w-full border-2 border-white">
        <Career />
      </main>
    </div>
  );
}