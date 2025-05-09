import ScrollLinks from "./ScrollLink.tsx";


type Scroll = {
    child : ChildType[]
}

type ChildType = {
    to : string,
    title : string
}


export default function Scroll({child} : Scroll){

    return <>
        {/* Sidebar */}
        <aside className="hidden lg:block w-60 flex-shrink-0 sticky top-32 self-start">
            <div className="p-4 bg-white shadow-md rounded-md">
                <h3 className="text-lg font-bold mb-4">목차</h3>
                <ul className="space-y-2">
                    {child.map(( c : ChildType) => (
                        <ScrollLinks key={c.to} to={c.to} title={c.title}/>
                    ))
                    }
                </ul>
            </div>
        </aside>
    </>
}
