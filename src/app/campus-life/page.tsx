import Header from "@/components/layout/Header";
import CampusLifeOverview from "@/components/sections/campus-life/CampusLifeOverview";
import CampusLifeFunFact from "@/components/sections/campus-life/CampusLifeFunFact";
import StudentLife from "@/components/sections/campus-life/StudentLife";
import ArtsAndCulture from "@/components/sections/campus-life/ArtsAndCulture";
import AthleticsRecreation from "@/components/sections/campus-life/AthleticsRecreation";
import FooterInner from "@/components/layout/FooterInner";
import MobileMenu from "@/components/layout/MobileMenu";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Campus Life | Kashmir Cambridge",
    description: "Explore the vibrant campus life, student affairs, and arts at Kashmir Cambridge",
    keywords: ["campus life", "student affairs", "athletics", "wellness"],
};

export default function CampusLifePage() {
    return (
        <>
            <Header />
            <CampusLifeOverview />
            <CampusLifeFunFact />
            <StudentLife />
            <ArtsAndCulture />
            <AthleticsRecreation />
            <FooterInner />
            <MobileMenu />
        </>
    );
}

