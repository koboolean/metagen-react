// components/Toast.tsx
import { useEffect } from "react";

type ToastProps = {
    message: string;
    onClose: () => void;
};

export default function Toast({ message, onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 2000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md animate-toast-in">
            {message}
        </div>
    );
}
