import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>

      <Link href="/users"> Users </Link>
      <Link href="/error-test"> Error test </Link>
    </>  
  );
}
