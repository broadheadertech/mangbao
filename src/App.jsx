import { useState } from "react";
import { CartToast } from "./components/CartToast.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { LocationsSection } from "./components/LocationsSection.jsx";
import { MascotSection } from "./components/MascotSection.jsx";
import { MenuSection } from "./components/MenuSection.jsx";
import { VoiceStrip } from "./components/VoiceStrip.jsx";

export default function App() {
  const [cart, setCart] = useState([]);
  const [bagOpen, setBagOpen] = useState(false);

  const onAdd = (item) => {
    setCart((c) => [...c, item]);
    setBagOpen(true);
  };

  return (
    <>
      <Header cartCount={cart.length} onOpenCart={() => setBagOpen((o) => !o)} />
      <main>
        <Hero />
        <MenuSection onAdd={onAdd} />
        <VoiceStrip />
        <MascotSection />
        <LocationsSection />
      </main>
      <Footer />
      {bagOpen && <CartToast items={cart} onClose={() => setBagOpen(false)} />}
    </>
  );
}
