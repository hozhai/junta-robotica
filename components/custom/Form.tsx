"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconMail,
} from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";

export function SignupForm() {
    const [signInStatus, setSignInStatus] = useState<string | null>(null);
    const [emailValue, setEmailValue] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("do something")
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value);
    }

    const attemptSignIn = async (method: string) => {
        const google_btn = document.querySelector("#google-sign-in") as HTMLButtonElement
        const github_btn = document.querySelector("#github-sign-in") as HTMLButtonElement
        const email_btn = document.querySelector("#email-sign-in") as HTMLButtonElement

        google_btn?.classList.add("cursor-progress")
        github_btn?.classList.add("cursor-progress")
        email_btn?.classList.add("cursor-progress")

        google_btn.disabled = true
        github_btn.disabled = true
        email_btn.disabled = true

        switch (method) {
            case "google":
                setSignInStatus("google")
                google_btn.classList.add("brightness-[150%]", "animate-pulse")
                break;
            case "github":
                setSignInStatus("github")
                github_btn.classList.add("brightness-[150%]", "animate-pulse")
                break;
            case "email":
                setSignInStatus("email")
                email_btn.classList.add("brightness-[150%]", "animate-pulse")
                break;
            default:
                break;
        }

        try {
            const res = await signIn(method, { redirect: false })

            console.log(res)

            if (res?.error) {
                if (res.error == "OAuthAccountNotLinked") {
                    setErrorMsg(
                        "This email is already linked to another account. Please try signing in with the correct method."
                    );
                } else {
                    setErrorMsg("Something went wrong. Please try again.");
                }
                resetButtons(); // Re-enable buttons
            } else if (res?.ok) {
                // If successful, redirect to dashboard
                router.push("/dashboard")
            }
        } catch (error) {
            setErrorMsg("An unexpected error occurred. Please try again.");
            console.error("Sign-in error:", error);
            resetButtons(); // Re-enable buttons
        }
    }

    const resetButtons = () => {
        const google_btn = document.querySelector("#google-sign-in") as HTMLButtonElement;
        const github_btn = document.querySelector("#github-sign-in") as HTMLButtonElement;
        const email_btn = document.querySelector("#email-sign-in") as HTMLButtonElement;

        google_btn?.classList.remove("cursor-progress", "brightness-[150%]", "animate-pulse");
        github_btn?.classList.remove("cursor-progress", "brightness-[150%]", "animate-pulse");
        email_btn?.classList.remove("cursor-progress", "brightness-[150%]", "animate-pulse");

        google_btn.disabled = false;
        github_btn.disabled = false;
        email_btn.disabled = false;
    };

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Welcome to Hell Inc.
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Try to login because I still don&apos;t know if this works or not. Yippie!
                Error msg: {errorMsg}
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="joe@example.com" type="email" name="email" value={emailValue} onChange={handleEmailChange} />
                </LabelInputContainer>

                <button
                    className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    type="submit"
                    id="email-sign-in"
                >
                    <IconMail className="h-4 w-4 text-neutral-800 dark:text-neutral-300 absolute left-[6.5rem] top-1/2 -translate-y-1/2" />
                    <span className="text-neutral-700 dark:text-neutral-300">
                        Sign in with E-Mail
                    </span>

                    <BottomGradient />
                </button>

                <div className="relative">
                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                    <span className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 text-neutral-400 bg-black px-1">or</span>
                </div>

                <div className="flex flex-col space-y-4">
                    <button
                        className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        onClick={() => attemptSignIn("google")}
                        id="google-sign-in"
                    >
                        <IconBrandGoogle className={cn("h-4 w-4 text-neutral-800 dark:text-neutral-300 absolute left-28 top-1/2 -translate-y-1/2", signInStatus == "google" && " hidden")} />
                        <span className={cn("text-neutral-700 dark:text-neutral-300 text-sm", signInStatus == "google" && " hidden")}>
                            Sign in with Google
                        </span>
                        <span className={cn("animate-pulse", signInStatus != "google" && " hidden")}>
                            <Loader className="h-5 w-5 animate-spin text-neutral-700 dark:text-neutral-300" />
                        </span>

                        <BottomGradient />
                    </button>

                    <button
                        className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        onClick={() => attemptSignIn("github")}
                        id="github-sign-in"
                    >
                        <IconBrandGithub className={cn("h-4 w-4 text-neutral-800 dark:text-neutral-300 absolute left-28 top-1/2 -translate-y-1/2", signInStatus == "github" && " hidden")} />
                        <span className={cn("text-neutral-700 dark:text-neutral-300 text-sm", signInStatus == "github" && " hidden")}>
                            Sign in with GitHub
                        </span>
                        <span className={cn("animate-pulse", signInStatus != "github" && " hidden")}>
                            <Loader className="h-5 w-5 animate-spin text-neutral-700 dark:text-neutral-300" />
                        </span>
                        <BottomGradient />
                    </button>
                </div>
            </form>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            { /* FIXME: change the words terms and conditions & privacy policy with each of their respective links!!! */}
            <p className="text-neutral-500 text-sm">*By clicking &quot;Sign in with E-Mail&quot; or any of the alternative sign in methods, you agree to our Terms and Conditions along with our Privacy Policy.</p>
            <br />
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-white to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-100 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

