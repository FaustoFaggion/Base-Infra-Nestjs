import Card from "@/app/components/card";
import Link from "next/link";

export default function Notifications() {
    return (
        
        <Card> 
            <div> Notifications </div>
            <Link href='/parallel-route/archive'> Archived Notifications Route</Link>
        </Card>
        
    )
}