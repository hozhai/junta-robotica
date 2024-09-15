import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { auth } from "@/auth"

export default async function AvatarIcon() {
    const session = await auth()
    if (!session || !session.user) return (
        <p>not signed in</p>
    )
    if (!session.user.image) session.user.image = undefined;
    return (
        <Avatar className="-ml-1 w-7 h-7 flex-shrink-0">
            <AvatarImage
                src={session.user.image}
                width={28}
                height={28}
            />
            <AvatarFallback>{session.user.name?.split(" ").map((string, index) => string[index]).join()}</AvatarFallback>
        </Avatar>

    )
}
