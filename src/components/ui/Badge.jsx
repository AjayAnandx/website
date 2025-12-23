import { cn } from "../../utils/cn";
import { MoveRight } from "lucide-react";

export const Badge = ({ children, className }) => {
    return (
        <div className={cn(
            "relative inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-white/90 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group overflow-hidden",
            className
        )}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
            </div>
            <span className="relative z-10 flex items-center gap-1">
                {children}
                <MoveRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
            </span>
        </div>
    );
};
