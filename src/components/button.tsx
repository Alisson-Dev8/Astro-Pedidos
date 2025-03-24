import { Loader } from "lucide-react";

interface ButtonProps {
    type: "button" | "submit";
    className?: string;
    text: string;
    onClick: () => void;
    isLoading: boolean;
}

export function button({ type, className, text, isLoading }: ButtonProps) {
    return (
        <button
            type={type}
            className={`text-white flex justify-center rounded-md container py-2 ${className}`}
        >
            {isLoading ? (
                <Loader className="animate-spin" />
            ) : (
                text
            )}
        </button>
    )
}