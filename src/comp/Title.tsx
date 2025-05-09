
type TitleType = {
    title : string
}

export default function Title({title} : TitleType){

    return <h1 className={"text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6"}>{title}</h1>
}
