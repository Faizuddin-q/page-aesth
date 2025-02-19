import CallToAction from "./components/sections/CallToAction";
import Faqs from "./components/sections/Faqs";
import Features from "./components/sections/Features";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Integrations from "./components/sections/Integrations";
import Introduction from "./components/sections/Introduction";
import LogoTicker from "./components/sections/LogoTicker";
import Navbar from "./components/sections/Navbar";
import Pricing  from "./components/sections/Pricing";
import ProductShowcase  from "./components/sections/ProductShowcase";

export default function Home() {
    return (
        <div className="font-sans antialiased bg-neutral-950 text-white">
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
            <ProductShowcase/>
            <Pricing/>
            <Integrations />
            <Faqs />
            <CallToAction />
            <Footer />
        </div>
    );
}
