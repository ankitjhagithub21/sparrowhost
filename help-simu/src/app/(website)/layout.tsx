import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar"

import { ReactNode } from "react";


interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>

            <Header/>
            <main className="flex">
                <Sidebar/>
                {children}
            </main>

        </>
    );
}