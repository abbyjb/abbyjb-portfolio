import Link from 'next/link'
import Github from '@/app/github.svg'
import LinkedIn from '@/app/linkedin.svg'

export default function Navigation() {
  return (
    <div className="flex align-text-bottom justify-between my-5 col-span-4">
        <h1 className="lg:text-7xl text-5xl text-nowrap">Abigail Bashore</h1>
        <nav className="sm:flex hidden">
          <Link className="m-2" target="_blank" href={"https://www.linkedin.com/in/abigail-bashore"}>
            <LinkedIn className={"lg:size-16 lg:leading-none size-10"} />
          </Link>
          <Link className="m-2" target="_blank" href={"https://www.github.com/abbyjb"}>
            <Github className={"lg:size-16 lg:leading-none size-10"} />
          </Link>
        </nav>
      </div>   
  );
}