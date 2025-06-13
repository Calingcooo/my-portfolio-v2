import Header from "./components/Header";
import Career from "./components/Career";
import Social from "./components/Social";
import Email from "./components/Email";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mt-20 flex flex-col justify-center items-center h-full">
        <Social />
        <Email />
        <Career />
      </main>
    </div>
  );
}