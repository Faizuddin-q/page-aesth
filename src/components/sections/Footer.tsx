import Tag from "../shared/Tag";

const footerLinks: { href: string; label: string }[] = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

const Footer: React.FC = () => {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
                    <div>
                        <Tag>DesignMinds</Tag>
                    </div>
                    <nav className="flex gap-6" aria-label="Footer navigation">
                        {footerLinks.map(({ href, label }) => (
                            <a key={href} href={href} className="text-white/50 text-sm">
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Footer;
