import { Suspense } from "react";
import { Skeleton } from "./skeleton";

export default async function VideoComponent({
    className,
    url,
}: {
    className?: string;
    url: string;
}) {
    return (
        <iframe
            className={className || ""}
            width={854}
            height={480}
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    );
}
