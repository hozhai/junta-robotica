import { NavSidebar } from "@/components/custom/Sidebar";

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
