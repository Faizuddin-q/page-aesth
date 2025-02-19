
import React, { useEffect } from "react";
import Button from "../shared/Button";
import Pointer from "../shared/Pointer";
import { motion, useAnimate } from "framer-motion";

// Image paths
import designExample1 from  "../../assets/images/design-example-1.png";
import designExample2 from "../../assets/images/design-example-2.png";
import cursorImage from "../../assets/images/cursor-you.svg";

const Hero: React.FC = () => {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        if (leftDesignScope.current && leftPointerScope.current) {
            leftDesignAnimate(leftDesignScope.current, { opacity: 1, y: 0, x: 0 }, { duration: 0.5 });
            leftPointerAnimate(leftPointerScope.current, { opacity: 1, y: 0, x: -100 }, { duration: 0.5 });
            leftPointerAnimate(leftPointerScope.current, { y: [0, 16, 0], x: 0 }, { duration: 0.5, ease: "easeInOut" });
        }

        if (rightDesignScope.current && rightPointerScope.current) {
            rightDesignAnimate(rightDesignScope.current, { opacity: 1, y: 0, x: 0 }, { duration: 0.5, delay: 1.5 });
            rightPointerAnimate(rightPointerScope.current, { opacity: 1, y: 0, x: 175 }, { duration: 0.5, delay: 1.5 });
            rightPointerAnimate(rightPointerScope.current, { y: [0, 20, 0], x: 0 }, { duration: 0.5, ease: "easeInOut" });
        }
    }, [leftDesignAnimate, leftPointerAnimate, rightDesignAnimate, rightPointerAnimate]);

    return (
        <section
            className="py-24 overflow-x-clip"
            style={{ cursor: `url(${cursorImage}), auto` }}
        >
            <div className="container relative">
                {/* Left design */}
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    className="absolute -left-32 top-16 hidden lg:block"
                    drag
                >
                    <img draggable={false} src={designExample1} alt="Design example 1" />
                </motion.div>

                {/* Left pointer */}
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute top-96 left-56 hidden lg:block"
                >
                    <Pointer name="Andrea" />
                </motion.div>

                {/* Right design */}
                <motion.div
                    initial={{ opacity: 0, y: 100, x: 100 }}
                    ref={rightDesignScope}
                    className="absolute -right-64 -top-16 hidden lg:block"
                    drag
                >
                    <img draggable={false} src={designExample2} alt="Design example 2" />
                </motion.div>

                {/* Right pointer */}
                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute -top-4 right-80 hidden lg:block"
                >
                    <Pointer color="red" name="Brew" />
                </motion.div>

                {/* Content */}
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>

                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tools shouldn't slow you down. Create, prototype, and test with ease.
                </p>

                {/* Email sign-up form */}
                <form className="mx-auto flex border border-white/50 rounded-full p-2 mt-8 max-w-lg">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 flex-1 w-full"
                    />
                    <Button
                        size="sm"
                        className="whitespace-nowrap"
                        type="submit"
                        variant="primary"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default Hero;
