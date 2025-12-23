import { cn } from "../../utils/cn";

const Button = ({ children, className, variant = "primary", size = "md", ...props }) => {
    const variants = {
        primary: "bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)]",
        secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-sm",
        ghost: "text-white/70 hover:text-white hover:bg-white/5",
        link: "text-white/70 hover:text-white underline-offset-4 hover:underline",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-sm",
        lg: "px-7 py-3 text-base",
    };

    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
