
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const appScreen = "/assets/images/product.avif";

const ProductShowcase: React.FC = () => {
    const appImage = useRef<HTMLImageElement>(null);
    const { scrollYProgress } = useScroll({
        target: appImage,
        offset: ["start end", "end end"],
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <section className="bg-black text-white bg-gradient-to-b from-black to-lime-400 py-[72px] sm:py-24">
            <div className="container">
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Intuitive <span className="text-lime-400">interface</span>
                </h2>

                <div className="max-w-xl mx-auto">
                    <p className="text-xl text-white/70 text-center mt-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt minima odio ea debitis quisquam nobis. Eius fugit ut dolorem delectus.
                    </p>
                </div>

                {/* Product Image Showcase */}
                <div className="flex justify-center">
                    <motion.div
                        style={{
                            opacity: opacity,
                            rotateX: rotateX,
                            transformPerspective: "600px",
                        }}
                    >
                        <img
                            src={appScreen}
                            ref={appImage}
                            alt="App interface screen"
                            className="mt-14"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
