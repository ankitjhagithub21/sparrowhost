import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar"

import { ReactNode } from "react";


interface MainLayoutProps {
    children: ReactNode;
}

export default function HomeLayout({ children }: MainLayoutProps) {
    return (
        <>

            <Header/>
            <main>
               
                {children}
            </main>

        </>
    );
}