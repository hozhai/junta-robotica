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
            <Link href="/" className="absolute top-8 left-10 w-20 font-bold inline-flex"><ArrowLeft className="h-6 w-6" />&nbsp;&nbsp;Back</Link>
            <SignupForm />
        </section>
    )
}
