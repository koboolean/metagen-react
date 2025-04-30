import { Link, useLocation } from 'react-router-dom';
import {subMenuItems} from "../data/SubMenuItems";

type SubMenuProps = {
    openMenu: string;
    onClickSubMenu: () => void;
};

type SubMenuItem = {
    label: string;
    path: string;
};

export default function SubMenu({ openMenu, onClickSubMenu }: SubMenuProps) {
    const location = useLocation();

    const getLinkClass = (path: string) =>
        location.pathname === path
            ? 'text-blue-600 font-bold border-b-2 border-blue-500 pb-1'
            : 'text-gray-700 hover:text-blue-600 font-medium pb-1';

    return (
        <div className="bg-white border-t border-b border-gray-200 w-full">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 py-3">
                {openMenu && (subMenuItems[openMenu as keyof typeof subMenuItems] as SubMenuItem[])?.map((item) => (
                    <Link
                        key={"/" + openMenu + item.path}
                        to={"/" + openMenu + item.path}
                        className={getLinkClass(item.path)}
                        onClick={onClickSubMenu}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
