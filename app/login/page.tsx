import { signIn, signOut, auth } from "@/auth";
import { SignupForm } from "@/components/custom/Form";
import { ArrowLeft, ChevronLeft, Home } from "lucide-react";
import { redirect, RedirectType } from "next/navigation";
import Link from "next/link";

export default async function LoginPage() {
    const session = await auth()
    if (session) {
        redirect("/dashboard", RedirectType.push)
    }
    return (
        <section className="bg-neutral-800 h-screen w-full flex justify-end">
            <div className="relative h-full w-full bg-black overflow-hidden">
                {/* i love balls */}
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
                <div className="absolute left-0 right-0 top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_250px_at_60%_200px,#fbfbfb36,#000)]" />
                <div className="absolute left-[20%] right-0 top-[50%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_250px_at_60%_200px,#fbfbfb36,#000)]" />
                <div className="absolute left-[30%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_250px_at_60%_200px,#fbfbfb36,#000)]" />
                <div className="absolute left-[80%] right-0 top-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_250px_at_60%_200px,#fbfbfb36,#000)]" />
                <div className="absolute left-[55%] right-0 top-[30%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_250px_at_60%_200px,#fbfbfb36,#000)]" />
                <div className="absolute left-[85%] right-0 top-[75%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_250px_at_60%_200px,#fbfbfb36,#000)]" />
            </div>
            <Link href="/" className="absolute top-8 left-10 w-20 font-bold inline-flex group"><ArrowLeft className="h-6 w-6" />&nbsp;&nbsp;<span className="group-hover:translate-x-1 transition-transform">Back</span></Link>
            <SignupForm />
        </section >
    )
}
