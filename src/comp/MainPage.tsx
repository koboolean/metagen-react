import {ReactNode} from "react";


export default function MainPage({children} : {children : ReactNode}){

    return <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-gray-800">
        {children}
    </div>
}
