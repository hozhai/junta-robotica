import { NextResponse } from 'next/server';
import { auth, signOut } from '@/auth';

export async function POST() {
    const session = await auth();

    if (session) {
        await signOut();
    }

    // Redirect to the home page after signing out
    return NextResponse.redirect('/');
}

