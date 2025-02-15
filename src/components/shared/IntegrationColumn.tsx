
import React, { Fragment } from "react";
import { type IntegrationsType } from "../sections/Integrations";
import { motion } from "framer-motion";

interface IntegrationColumnProps {
    integrations: IntegrationsType;
    className?: string;
    reverse?: boolean;
}

const IntegrationColumn: React.FC<IntegrationColumnProps> = ({
    integrations,
    className = "",
    reverse = false,
}) => {
    return (
        <motion.div
            initial={{ y: reverse ? "-50%" : 0 }}
            animate={{ y: reverse ? 0 : "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`flex flex-col gap-4 pb-4 ${className}`}
        >
            {[...Array(2)].map((_, i) => (
                <Fragment key={i}>
                    {integrations.map((integration) => (
                        <div
                            key={integration.name}
                            className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                        >
                            <div className="flex justify-center">
                                <img
                                    className="w-24 h-24 object-contain"
                                    src={integration.icon}
                                    alt={`${integration.name} icon`}
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
                            <p className="text-center text-white/50 mt-2">
                                {integration.description}
                            </p>
                        </div>
                    ))}
                </Fragment>
            ))}
        </motion.div>
    );
};

export default IntegrationColumn;
