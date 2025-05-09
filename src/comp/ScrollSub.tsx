import {ReactNode} from "react";

type ScrollSubType = {
    children : ReactNode
}

export default function ScrollSub({children} : ScrollSubType){

    return <div className="max-w-4xl px-4 md:px-6 lg:px-8">
        {children}
    </div>
}
