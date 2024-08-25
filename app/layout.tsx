import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Primer Festival de Robòtica",
    description:
        "Pàgina oficial del primer festival de robòtica en Lo Barnechea, Chile. Bienvenidos!",
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
            className={`${inter.variable} ${GeistSans.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}
