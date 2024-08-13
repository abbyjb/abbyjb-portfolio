import Link from 'next/link'
import Github from '@/app/github.svg'
import LinkedIn from '@/app/linkedin.svg'

export default function Navigation() {
  return (
    <nav className="flex xl:flex-row flex-col items-center justify-between mb-7 mt-2 gap-3">
      <Link className="grow" href="/" title="Home Page">
        <h1 className="xl:text-7xl text-5xl sm:text-left sm:text-nowrap text-center p-2 m-2">Abigail Bashore</h1>
      </Link>
      <div className="flex">
        <Link className="lg:text-3xl lg:leading-none hover:transition hover:bg-beige hover:text-green hover:shadow-blue text-2xl rounded-lg m-2 p-2" href={"/resume"} title="View My Resume">
          Resume
        </Link>
        <Link className="lg:text-3xl lg:leading-none hover:transition hover:bg-beige hover:text-green hover:shadow-blue text-2xl rounded-lg m-2 p-2" href={"mailto:abbyjbdev@gmail.com"} title="Email Me">
          Contact
        </Link>
      </div>
      <div className="flex">
        <Link className="p-2 m-2" target="_blank" href={"https://www.linkedin.com/in/abigail-bashore"} title="LinkedIn Profile">
          <LinkedIn className={"lg:size-9 lg:leading-none hover:transition-shadow hover:shadow-xl hover:shadow-blue size-6"} />
        </Link>
        <Link className="p-2 m-2" target="_blank" href={"https://www.github.com/abbyjb"} title="Github Profile">
          <Github className={"rounded-full lg:size-9 lg:leading-none hover:transition-shadow hover:shadow-xl hover:shadow-blue size-6"} />
        </Link>  
      </div>
    </nav>  
  );
}