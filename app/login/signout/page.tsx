"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SignoutPage() {
    const router = useRouter()

    useEffect(() => {
        const signOutUser = async () => {
            // rall the signout API route
            await fetch('/api/auth/signout', {
                method: 'POST',
            });

            // redirect to the home page after successful signout
            router.push('/');
        };

        signOutUser()
    }, [router])

    // display temporary message to let user know what is going on
    return (
        <p>Signing out...</p>
    )
}
