import Link from 'next/link'
import Github from '@/app/github.svg'
import LinkedIn from '@/app/linkedin.svg'

export default function Navigation() {
  return (
    <nav className="flex sm:flex-row flex-col items-center justify-between my-7 ">
      <Link className="grow" href="/">
        <h1 className="lg:text-7xl text-5xl text-nowrap">Abigail Bashore</h1>
      </Link>
      <div className="flex">
        <Link className="lg:text-3xl lg:leading-none m-2 hover:transition-shadow hover:text-off-white hover:shadow-inner-md hover:bg-[#3A6669] hover:shadow-blue text-2xl rounded-lg p-2" href={"/experience"}>
          Resume
        </Link>
        <Link className="lg:text-3xl lg:leading-none m-2 hover:transition-shadow hover:text-off-white hover:shadow-inner-md hover:bg-[#3A6669] hover:shadow-blue text-2xl rounded-lg p-2" href={"mailto:abbyjbdev@gmail.com"}>
          Contact
        </Link>
      </div>
      <div className="flex">
        <Link className="m-2" target="_blank" href={"https://www.linkedin.com/in/abigail-bashore"}>
          <LinkedIn className={"lg:size-9 lg:leading-none hover:transition-shadow hover:shadow-xl hover:shadow-blue size-6"} />
        </Link>
        <Link className="m-2" target="_blank" href={"https://www.github.com/abbyjb"}>
          <Github className={"rounded-full lg:size-9 lg:leading-none hover:transition-shadow hover:shadow-xl hover:shadow-blue size-6"} />
        </Link>  
      </div>
          
    </nav>  
  );
}