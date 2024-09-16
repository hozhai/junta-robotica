import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "@/components/ui/theme-provider";

import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Primera Junta de Robòtica",
    description:
        "Pàgina oficial de la primera junta de robòtica en Lo Barnechea, Chile. Bienvenidos!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en-us"
            suppressHydrationWarning
            className={cn(
                GeistSans.variable,
                inter.variable,
                "snap-y snap-proximity motion-safe:scroll-smooth overflow-x-hidden min-h-screen max-h-screen min-w-full max-w-full"

            )}
        >
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
