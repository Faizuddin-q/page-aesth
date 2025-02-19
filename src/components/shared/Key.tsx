import React, { HTMLAttributes } from "react";

const Key: React.FC<HTMLAttributes<HTMLDivElement>> = ({
    className = "",
    children,
    ...rest
}) => {
    return (
        <div
            className={`size-14 bg-neutral-300 inline-flex border-white/10 px-3 py-1.5 rounded-2xl text-black/80 justify-center items-center ${className}`}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Key;
