import { useState, useEffect } from "react";

export function useMobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        // Optionally lock body scroll when mobile menu is open
        if (isMenuOpen) {
            document.body.classList.add("mobile-menu-active");
        } else {
            document.body.classList.remove("mobile-menu-active");
        }

        return () => {
            document.body.classList.remove("mobile-menu-active");
        };
    }, [isMenuOpen]);

    return { isMenuOpen, toggleMenu, closeMenu };
}
