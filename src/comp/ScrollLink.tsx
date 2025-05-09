import {Link as ScrollLink} from "react-scroll";

type ScrollLinksType = {
    to : string,
    title : string
}


export default function ScrollLinks({to, title} : ScrollLinksType){

    return <>
        <li>
            <ScrollLink to={to} smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-blue-600">
                {title}
            </ScrollLink>
        </li>
    </>
}
