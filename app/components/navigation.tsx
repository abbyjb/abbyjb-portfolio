import Link from 'next/link'
import Github from '@/app/github.svg'
import LinkedIn from '@/app/linkedin.svg'

export default function Navigation() {
  return (
    <nav className="flex sm:flex-row flex-col items-center justify-between my-7 ">
      <Link className="grow" href="/" title="Home Page">
        <h1 className="lg:text-7xl text-5xl sm:text-left sm:text-nowrap text-wrap text-center">Abigail Bashore</h1>
      </Link>
      <div className="flex">
        <Link className="lg:text-3xl lg:leading-none m-2 hover:transition-shadow hover:text-off-white hover:shadow-inner-md hover:bg-[#3A6669] hover:shadow-blue text-2xl rounded-lg p-2" href={"/experience"} title="View My Resume">
          Resume
        </Link>
        <Link className="lg:text-3xl lg:leading-none m-2 hover:transition-shadow hover:text-off-white hover:shadow-inner-md hover:bg-[#3A6669] hover:shadow-blue text-2xl rounded-lg p-2" href={"mailto:abbyjbdev@gmail.com"} title="Email Me">
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