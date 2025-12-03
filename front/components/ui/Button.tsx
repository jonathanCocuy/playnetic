import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "dark" | "light" | "purple";
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className = "",
    variant = "dark",
    ...props
}) => {
    const baseStyles = "px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-0 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        dark: "bg-primary text-white hover:bg-primary-dark focus:ring-primary cursor-pointer border-2 dark:hover:bg-[#2a2a2a] transition-all duration-300 active:scale-95",
        light: "bg-white border border-black text-gray-700 hover:bg-gray-200 focus:ring-gray-500 cursor-pointer border-color transition-all duration-300 active:scale-95",
        purple: "bg-purple-600 text-white border-2 border-purple-800 hover:bg-purple-700 focus:ring-purple-500 cursor-pointer transition-all duration-300 active:scale-95",
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

