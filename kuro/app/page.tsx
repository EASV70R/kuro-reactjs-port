import Image from "next/image";
import NavBar from "@/app/ui/header";
import Hero from "@/app/ui/hero";
import About from "@/app/ui/about";
import Footer from "@/app/ui/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#171717]" id="home">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <About />
      </div>
      <Footer />
    </main>
  );
}
