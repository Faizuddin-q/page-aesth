
import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Analytics } from "@vercel/analytics/react"
export default function Home() {
    return (
        <>
            {/* <Analytics /> */}
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
        </>
    );
}

