import Card from "@/app/components/card";
import Link from "next/link";

export default function ArchiveNotifications() {
    return (
        <Card> 
            <div> Archived Notifications </div>
            <Link href='/parallel-route'> Parallel Route</Link>
        </Card>
    )
}