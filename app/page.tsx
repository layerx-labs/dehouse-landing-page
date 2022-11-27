import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import SectionPattern from "./components/SectionPattern";
import Services from "./components/Services";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Gallery />
        <SectionPattern>
          <Services />
        </SectionPattern>
      </main>
      {/* <Footer /> */}
    </>
  );
}
