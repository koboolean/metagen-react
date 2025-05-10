import {useState} from "react";
import Toast from "./Toast.tsx";

type CodeCopyType = {
    text : string
}

export default function CodeCopy({text} : CodeCopyType) {
    const [toast, setToast] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setToast(true); // 또는 toast
        } catch (err) {
            console.error("클립보드 복사 실패:", err);
        }
    };

    return <>
        <div className="relative">
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-gray-500 text-white text-xs px-3 py-1 rounded hover:bg-gray-600 transition"
            >
                copy
            </button>

            <pre className="whitespace-pre rounded bg-gray-100 p-4 text-sm font-mono overflow-auto">
                                <code>{text}</code>
                              </pre>

            {toast && <Toast message="복사되었습니다" onClose={() => setToast(false)} />}
        </div>
    </>
}
