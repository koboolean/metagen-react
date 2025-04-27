import { useState } from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu';
import SubMenu from './SubMenu';

export default function Header() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-[rgb(0,86,179)] shadow-sm h-[64px]"
            onMouseLeave={() => setOpenMenu(null)}
        >
            {/* Main Navbar */}
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">
                {/* Navbar Brand */}
                <Link
                    to="/"
                    className="text-2xl font-bold tracking-tight text-white hover:text-gray-200 transition-colors"
                >
                    MetaGen
                </Link>

                {/* Main Menu */}
                <MainMenu setOpenMenu={setOpenMenu} />
            </div>

            {/* SubMenu Bar */}
            {openMenu && <SubMenu openMenu={openMenu} onClickSubMenu={() => {setOpenMenu(null)}} />}
        </header>
    );
}
