
import { Menu, X } from "lucide-react";
import Button from "../shared/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Tag from "../shared/Tag";

interface NavLink {
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] lg:rounded-full bg-neutral-950/70 backdrop-blur">
                        <figure className="grid grid-cols-2 lg:grid-cols-3 py-2 lg:px-2 px-4 items-center">
                            {/* Logo */}
                            <div>
                                <Tag>DesignMinds</Tag>
                            </div>

                            {/* Desktop Navigation */}
                            <nav className="hidden lg:flex justify-center items-center">
                                <ul className="flex gap-6 font-medium">
                                    {navLinks.map(({ href, label }) => (
                                        <li key={href}>
                                            <a href={href} className="hover:opacity-80 transition">
                                                {label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Buttons & Mobile Menu */}
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="lg:hidden"
                                    aria-label="Toggle navigation menu"
                                    aria-expanded={isOpen}
                                >
                                    <motion.div
                                        initial={{ opacity: 1 }}
                                        animate={{ opacity: isOpen ? 0 : 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {!isOpen ? <Menu className="text-white" size={30} /> : <X className="text-white" size={30} />}
                                    </motion.div>
                                </button>

                                <Button variant="secondary" className="hidden lg:inline-flex items-center">
                                    Login
                                </Button>
                                <Button variant="primary" className="hidden lg:inline-flex items-center">
                                    Signup
                                </Button>
                            </div>
                        </figure>

                        {/* Mobile Navigation */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden lg:hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map(({ href, label }) => (
                                            <a key={href} href={href} className="hover:opacity-80 transition">
                                                {label}
                                            </a>
                                        ))}
                                        <Button className="w-3/4" variant="secondary">
                                            Log In
                                        </Button>
                                        <Button className="w-3/4" variant="primary">
                                            Sign Up
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Spacer for fixed navbar */}
            <div className="pb-[86px] md:pb-[98px]"></div>
        </>
    );
};

export default Navbar;
