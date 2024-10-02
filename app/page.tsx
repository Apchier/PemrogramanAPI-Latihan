import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>TESTING</h1>
      <br />
      <Link href="/posts">POSTING PAGE</Link>
      <br />
      <Link href="/albums">ALBUM PAGE</Link>
    </div>
  );
}
