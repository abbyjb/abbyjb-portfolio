import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex items-center justify-center min-h-[85vh]">
      <div className="m-2 p-2 rounded-lg  text-center">
        <h2 className="text-4xl text-center mb-4">404 Not Found</h2>
        <Link className="text-purple text-lg hover:underline hover:text-sunglow-300" href="/">Go back home</Link>
      </div>
    </main>
  );
}