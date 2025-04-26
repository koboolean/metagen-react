import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[rgb(0,86,179)] shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                {/* Navbar Brand */}
                <div>
                    <Link
                        to="/"
                        className="text-2xl font-bold tracking-tight text-white bold hover:text-gray-200 transition-colors"
                    >
                        MetaGen
                    </Link>
                </div>

                {/* Navbar Links */}
                <nav className="flex gap-8 text-base">
                    <Link to="/about" className="text-white hover:text-gray-200 transition-colors">
                        소개
                    </Link>
                    <Link to="/features" className="text-white hover:text-gray-200 transition-colors">
                        기능
                    </Link>
                    <Link to="/contact" className="text-white hover:text-gray-200 transition-colors">
                        문의
                    </Link>
                </nav>
            </div>
        </header>
    );
}
