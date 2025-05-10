import { useState } from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-[rgb(0,86,179)] shadow-sm"
            onMouseLeave={() => setOpenMenu(null)}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold tracking-tight text-white hover:text-gray-200 transition-colors"
                >
                    MetaGen
                </Link>

                {/* Desktop Main Menu */}
                <div className="hidden sm:block">
                    <MainMenu setOpenMenu={setOpenMenu} />
                </div>

                {/* Mobile 햄버거 버튼 */}
                <button
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    className="sm:hidden text-white focus:outline-none"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* SubMenu */}
            <div className="hidden sm:block">
                {openMenu && <SubMenu openMenu={openMenu} onClickSubMenu={() => setOpenMenu(null)} />}
            </div>


            {/* Mobile Dropdown */}
            {isMobileMenuOpen && (
                <div className="sm:hidden bg-white border-t border-gray-200 px-4 py-3">
                    {/* MainMenu: 가로 배치 */}
                    <MainMenu setOpenMenu={setOpenMenu} />

                    {/* SubMenu: 작게 아래에 붙임 */}
                    {openMenu && (
                        <div className="mt-2 pt-2">
                            <SubMenu
                                openMenu={openMenu}
                                onClickSubMenu={() => {
                                    setOpenMenu(null);
                                    setMobileMenuOpen(false);
                                }}
                            />
                        </div>
                    )}
                </div>
            )}
        </header>
    );
}
