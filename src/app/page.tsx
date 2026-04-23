import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroBanner } from "@/components/home/hero-banner";
import { NewArrivals } from "@/components/home/new-arrivals";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <NewArrivals />
      </main>
      <Footer />
    </>
  );
}
