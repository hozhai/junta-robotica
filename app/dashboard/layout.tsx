import { NavSidebar } from "@/components/custom/Sidebar";
import AvatarIcon from "@/components/custom/Avatar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";

export default async function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth()

    if (!session) {
        redirect("/login", RedirectType.push)
    }

    return (
        <div>
            <NavSidebar avatarIcon={<AvatarIcon />} userName={session.user?.name} />
            {children}
        </div>
    );
}
