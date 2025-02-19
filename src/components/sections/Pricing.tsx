
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Tag from "../shared/Tag";

interface PricingTier {
    title: string;
    monthlyPrice: number;
    buttonText: string;
    popular: boolean;
    inverse: boolean;
    features: string[];
}

const pricingTiers: PricingTier[] = [
    {
        title: "Free",
        monthlyPrice: 0,
        buttonText: "Get started for free",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "2GB storage",
            "Integrations",
            "Basic support",
        ],
    },
    {
        title: "Pro",
        monthlyPrice: 9,
        buttonText: "Sign up now",
        popular: true,
        inverse: true,
        features: [
            "Up to 50 project members",
            "Unlimited tasks and projects",
            "50GB storage",
            "Integrations",
            "Priority support",
            "Advanced support",
            "Export support",
        ],
    },
    {
        title: "Business",
        monthlyPrice: 19,
        buttonText: "Sign up now",
        popular: false,
        inverse: false,
        features: [
            "Up to 5 project members",
            "Unlimited tasks and projects",
            "200GB storage",
            "Integrations",
            "Dedicated account manager",
            "Custom fields",
            "Advanced analytics",
            "Export capabilities",
            "API access",
            "Advanced security features",
        ],
    },
];

const Pricing: React.FC = () => {
    return (
        <section className="py-24">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-lime-400 text-6xl font-medium mt-6">Pricing</h2>
                    <p className="text-2xl font-medium mt-6 max-w-2xl mx-auto">
                        Free forever. Upgrade for unlimited tasks, better security, and
                        exclusive features.
                    </p>
                </div>

                <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center">
                    {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
                        <div
                            key={title}
                            className={`p-6 rounded-lg border ${inverse ? "border-white/10 bg-neutral-900 text-white" : "border-neutral-300"}`}
                        >
                            {/* Header */}
                            <div className="flex justify-between">
                                <h3 className={`text-lg font-bold ${inverse ? "text-white/60" : "text-white/50"}`}>
                                    {title}
                                </h3>
                                {popular && (
                                    <div className="inline-flex rounded-xl bg-black border border-white/20 px-4 py-1.5 text-sm">
                                        <motion.span
                                            animate={{ backgroundPositionX: "-100%" }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: "linear",
                                                repeatType: "loop",
                                            }}
                                            className="bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff)] bg-clip-text font-medium text-transparent [background-size:200%]"
                                        >
                                            Popular
                                        </motion.span>
                                    </div>
                                )}
                            </div>

                            {/* Pricing */}
                            <div className="mt-[30px] flex items-baseline gap-1">
                                <span className="text-4xl font-bold leading-none tracking-tighter">
                                    ${monthlyPrice}
                                </span>
                                <span className="font-bold tracking-tight text-white/50">
                                    /month
                                </span>
                            </div>

                            {/* CTA Button */}
                            <button className="w-full mt-6 flex justify-center items-center" aria-label={buttonText}>
                                <Tag>{buttonText}</Tag>
                            </button>

                            {/* Features List */}
                            <ul className="mt-8 flex flex-col gap-5">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-4 text-sm">
                                        <Check />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
