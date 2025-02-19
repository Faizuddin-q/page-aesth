
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { Sparkle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CallToAction: React.FC = () => {
    const animation = useRef<AnimationPlaybackControls | null>(null);
    const [scope, animate] = useAnimate();
    const [slowDownAnimation, setSlowDownAnimation] = useState(false);

    useEffect(() => {
        if (scope.current) {
            animation.current = animate(
                scope.current,
                { x: "-50%" },
                { duration: 30, ease: "linear", repeat: Infinity }
            );
        }
    }, [animate, scope]);

    useEffect(() => {
        if (animation.current) {
            animation.current.speed = slowDownAnimation ? 0.5 : 1;
        }
    }, [slowDownAnimation]);

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium"
                    onMouseEnter={() => setSlowDownAnimation(true)}
                    onMouseLeave={() => setSlowDownAnimation(false)}
                >
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="flex items-center gap-16">
                            <Sparkle className="text-lime-400 w-16 h-16" />
                            <span className={slowDownAnimation ? "text-lime-400" : ""}>
                                Try it for free
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
export default CallToAction;