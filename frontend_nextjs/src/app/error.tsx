"use client";

import Link from "next/link";

export default function ErrorBoundary({error}: {error: Error}) {
    return(
        <>
        <div m-4>
        <Link href="/">Home</Link>

        </div>
        <h1> {error.message} </h1>
        </>
    )
}