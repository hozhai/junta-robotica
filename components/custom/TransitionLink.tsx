"use client"
import { sleep } from "@/lib/utils";
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

export default function TransitionLink({
    children,
    href,
    className,
    ...props }: TransitionLinkProps) {
    const router = useRouter()

    async function handleTransition(
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) {
        e.preventDefault()

        const body = document.querySelector("body");

        body?.classList.add("page-transition")

        await sleep(400);
        router.push(href);
        await sleep(400);

        body?.classList.remove("page-transition")
    }

    return (
        <Link {...props} href={href} onClick={handleTransition} className={className}>
            {children}
        </Link>
    )
}
