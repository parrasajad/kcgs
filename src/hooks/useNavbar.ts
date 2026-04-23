"use client";

import { useState, useCallback } from "react";

export function useNavbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSidebar = useCallback(() => {
        setIsSidebarOpen((prev) => !prev);
    }, []);

    const openSidebar = useCallback(() => {
        setIsSidebarOpen(true);
    }, []);

    const closeSidebar = useCallback(() => {
        setIsSidebarOpen(false);
    }, []);

    const toggleSearch = useCallback(() => {
        setIsSearchOpen((prev) => !prev);
    }, []);

    const openSearch = useCallback(() => {
        setIsSearchOpen(true);
    }, []);

    const closeSearch = useCallback(() => {
        setIsSearchOpen(false);
    }, []);

    return {
        isSidebarOpen,
        isSearchOpen,
        toggleSidebar,
        openSidebar,
        closeSidebar,
        toggleSearch,
        openSearch,
        closeSearch,
    };
}
