import { useState } from 'react'

function Header() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10 text-white p-4 flex justify-between items-center">
                <button onClick={() => setOpen(!open)} className="md:hidden text-white duration-400">≡</button>

                <a href="#" className="text-lg font-medium">
                    <span>Cartiere</span>
                    <span className="text-red-400"> Matthieu</span>
                </a>

                <nav className="hidden md:flex gap-6">
                    <a href="#projets" className="text-sm text-neutral-400 hover:text-white transition-colors duration-400">Projets</a>
                    <a href="#competences" className="text-sm text-neutral-400 hover:text-white transition-colors duration-400">Compétences</a>
                    <a href="#contact" className="text-sm text-neutral-400 hover:text-white transition-colors duration-400">Contact</a>
                </nav>
            </header>

            <nav
                className={`md:hidden flex flex-col bg-black/95 px-4 overflow-hidden transition-all duration-400 ease-in-out ${
                    open ? "max-h-60 opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"
                }`}
            >
                <a href="#projets" className="py-2 text-neutral-400 hover:text-white transition-colors duration-400">Projets</a>
                <a href="#competences" className="py-2 text-neutral-400 hover:text-white transition-colors duration-400">Compétences</a>
                <a href="#contact" className="py-2 text-neutral-400 hover:text-white transition-colors duration-400">Contact</a>
            </nav>
        </>
    );
}

export default Header;