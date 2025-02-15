import Tag from "../shared/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "How is DesignMinds different from other design tools?",
        answer: "Unlike traditional design tools, DesignMinds prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
    },
    {
        question: "Is there a learning curve?",
        answer: "DesignMinds is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
    },
    {
        question: "How do you handle version control?",
        answer: "Every change in DesignMinds is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
    },
    {
        question: "Can I work offline?",
        answer: "Yes! DesignMinds includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
    },
    {
        question: "How does DesignMinds handle collaboration?",
        answer: "DesignMinds is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
    },
];

const Faqs: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We&apos;ve got <span className="text-lime-400">answers</span>
                </h2>

                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, index) => (
                        <button
                            key={faq.question}
                            onClick={() => toggleFaq(index)}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6 text-left w-full"
                            aria-expanded={selectedIndex === index}
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="font-medium">{faq.question}</h3>
                                <Plus
                                    size={30}
                                    className={`text-lime-400 flex-shrink-0 transition-transform duration-300 ${
                                        selectedIndex === index ? "rotate-45" : ""
                                    }`}
                                />
                            </div>

                            <AnimatePresence>
                                {selectedIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/50">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;
