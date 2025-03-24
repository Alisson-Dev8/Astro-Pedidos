import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Link } from "react-router-dom";

export function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white p-8">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl font-bold mb-2">Dino Play</h1>

                {/* Menu Desktop */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:underline">Início</Link>
                    <a href="#" className="hover:underline">Sobre</a>
                    <a href="#" className="hover:underline">Contato</a>
                </nav>

                {/* Botão de Menu Mobile */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <nav className="md:hidden flex flex-col items-center bg-blue-700 py-4 space-y-4">
                    <a href="#" className="hover:underline">Início</a>
                    <a href="#" className="hover:underline">Sobre</a>
                    <a href="#" className="hover:underline">Contato</a>
                </nav>
            )}
        </header>

    )
}