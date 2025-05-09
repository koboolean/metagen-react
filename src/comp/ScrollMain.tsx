import {ReactNode} from "react";


type ScrollMainProps = {
    children: ReactNode;
};

export default function ScrollMain({children} : ScrollMainProps){

    return <div className="flex max-w-7xl mx-auto px-6 text-gray-800">
        {children}
    </div>
}
