import { Link } from "react-router-dom";

type MainMenuProps = {
    setOpenMenu: (menu: string) => void;
};

export default function MainMenu({ setOpenMenu }: MainMenuProps) {
    return (
        <nav className="flex flex-nowrap justify-center w-full text-base gap-x-4 overflow-x-auto">
            <Link
                to="/"
                className="px-3 py-2 whitespace-nowrap text-black sm:text-white hover:bg-gray-100 sm:hover:bg-transparent cursor-pointer"
                onClick={() => setOpenMenu('')}
            >
                홈
            </Link>
            <div
                className="px-3 py-2 whitespace-nowrap text-black sm:text-white hover:bg-gray-100 sm:hover:bg-transparent cursor-pointer"
                onMouseEnter={() => setOpenMenu('about')}
                onClick={() => setOpenMenu('about')}
            >
                소개
            </div>
            <div
                className="px-3 py-2 whitespace-nowrap text-black sm:text-white hover:bg-gray-100 sm:hover:bg-transparent cursor-pointer"
                onMouseEnter={() => setOpenMenu('features')}
                onClick={() => setOpenMenu('features')}
            >
                기능
            </div>
            <div
                className="px-3 py-2 whitespace-nowrap text-black sm:text-white hover:bg-gray-100 sm:hover:bg-transparent cursor-pointer"
                onMouseEnter={() => setOpenMenu('docs')}
                onClick={() => setOpenMenu('docs')}
            >
                문서
            </div>
            <div
                className="px-3 py-2 whitespace-nowrap text-black sm:text-white hover:bg-gray-100 sm:hover:bg-transparent cursor-pointer"
                onMouseEnter={() => setOpenMenu('contact')}
                onClick={() => setOpenMenu('contact')}
            >
                문의
            </div>
        </nav>
    );
}
