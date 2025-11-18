import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex items-center justify-center">
      <div className="bg-beige m-2 p-2 rounded-lg shadow-lg shadow-blue text-center">
        <h2 className="text-4xl text-center text-purple">404 Not Found</h2>
        <Link className="text-purple text-lg underline hover:text-green" href="/">Go back home</Link>
      </div>
    </main>
  );
}