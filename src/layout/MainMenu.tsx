import { Link } from "react-router-dom";

type MainMenuProps = {
    setOpenMenu: (menu: string) => void;
};

export default function MainMenu({ setOpenMenu }: MainMenuProps) {
    return (
        <nav className="flex gap-8 text-base">
            <Link
                to="/"
                className="transition-colors cursor-pointer text-white hover:text-gray-200"
            >
                홈
            </Link>
            <div
                onMouseEnter={() => setOpenMenu('about')}
                className="transition-colors cursor-pointer text-white hover:text-gray-200"
            >
                소개
            </div>
            <div
                onMouseEnter={() => setOpenMenu('features')}
                className="transition-colors cursor-pointer text-white hover:text-gray-200"
            >
                기능
            </div>
            <div
                onMouseEnter={() => setOpenMenu('docs')}
                className="transition-colors cursor-pointer text-white hover:text-gray-200"
            >
                문서
            </div>
            <div
                onMouseEnter={() => setOpenMenu('contact')}
                className="transition-colors cursor-pointer text-white hover:text-gray-200"
            >
                문의
            </div>
        </nav>
    );
}
