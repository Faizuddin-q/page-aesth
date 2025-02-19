import { Sparkle } from "lucide-react";
import React, { HTMLAttributes } from "react";

const Tag: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className = "", children, ...rest }) => {
    return (
        <div
            className={`inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center ${className}`}
            {...rest}
        >
            <Sparkle />
            <span className="text-sm">{children}</span>
        </div>
    );
};

export default Tag;
