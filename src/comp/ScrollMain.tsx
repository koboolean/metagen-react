import {ReactNode} from "react";


type ScrollMainProps = {
    children: ReactNode;
};

export default function ScrollMain({children} : ScrollMainProps){

    return <div className="flex flex-col lg:flex-row max-w-7xl mx-auto text-gray-800 w-full">
        {children}
    </div>
}
