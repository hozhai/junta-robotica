import { NavSidebar } from "@/components/custom/nav-sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <NavSidebar />
            {children}
        </div>
    );
}
