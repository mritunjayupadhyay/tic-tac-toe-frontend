import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Tic tac toe game: {process.env.NEXT_PUBLIC_USER}</p>
    </main>
  );
}
