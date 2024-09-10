import { Metadata } from "next";

export const metadata: Metadata = {
    title: "users Metadata",
}


export default function Users() {
    return (
        <>
            <h1>List of Users!</h1>
            <ol>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
            </ol>
        </>
    )
}