import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "users Metadata",
}


export default function Users() {
    
    const user = 100;

    return (
        <>
            <header>
                <Link href="/">Home</Link>
            </header>
            <h1>List of Users!</h1>
            <ol>
                <li><Link href="/users/1"> User 1 </Link></li>
                <li><Link href="/users/2"> User 2 </Link></li>
                <li><Link href="/users/3" replace> User 3 </Link> </li>
                <li><Link href={`/users/${user}`} >User {user}</Link></li>
            </ol>
        </>
    )
}