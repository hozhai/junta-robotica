"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconMail,
} from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import { Mail } from "lucide-react";

export function SignupForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Welcome to Hell Inc.
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Try to login because I still don't know if this works or not. Yippie!
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="joe@example.com" type="email" />
                </LabelInputContainer>

                <button
                    className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    type="submit"
                >
                    <IconMail className="h-4 w-4 text-neutral-800 dark:text-neutral-300 absolute left-28 top-1/2 -translate-y-1/2" />
                    <span className="text-neutral-700 dark:text-neutral-300">
                        Send Magic Link
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
                        onClick={() => signIn("google", { redirectTo: "/dashboard" })}
                    >
                        <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300 absolute left-28 top-1/2 -translate-y-1/2" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Sign in with Google
                        </span>
                        <BottomGradient />
                    </button>

                    <button
                        className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        onClick={() => signIn("github", { redirectTo: "/dashboard" })}
                    >
                        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300 absolute left-28 top-1/2 -translate-y-1/2" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Sign in with GitHub
                        </span>
                        <BottomGradient />
                    </button>
                </div>
            </form>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            { /* FIXME: change the words terms and conditions & privacy policy with each of their respective links!!! */}
            <p className="text-neutral-500 text-sm">*By clicking "Send Magic Link" or any of the alternative sign in methods, you agree to our Terms and Conditions along with our Privacy Policy.</p>
            <br />
            <p className="text-neutral-500 text-sm">*What is a magic link?</p>
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

