import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = {
    variant: "primary" | "secondary";
    size?: "sm";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ variant, size, className = "", ...rest }) => {
    const baseClasses = "border h-12 rounded-full px-6 font-medium";
    
    const variantClasses = {
        primary: "bg-lime-400 text-neutral-950 border-line-400",
        secondary: "border-white text-white bg-transparent",
    };

    const sizeClasses = {
        sm: "h-10",
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]} ${size ? sizeClasses[size] : ""} ${className}`}
            {...rest}
        />
    );
};

export default Button;
