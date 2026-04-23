import { useState } from "react";

export function useTabs(initialTab: number | string = 0) {
    const [activeTab, setActiveTab] = useState<number | string>(initialTab);

    const switchTab = (tabId: number | string) => {
        setActiveTab(tabId);
    };

    return { activeTab, switchTab };
}
