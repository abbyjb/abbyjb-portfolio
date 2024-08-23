import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="m-2 p-2 rounded-lg  text-center">
        <h2 className="text-4xl text-center mb-4">404 Not Found</h2>
        <Link className="rounded-lg bg-delft_blue-300 text-delft_blue-900 p-2 hover:bg-delft_blue-600" href="/">Go back home</Link>
      </div>
    </main>
  );
}