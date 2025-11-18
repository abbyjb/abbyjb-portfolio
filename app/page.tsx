import Image from 'next/image'
import Link from 'next/link'
import Github from './github.svg'
import LinkedIn from './linkedin.svg'

export default function Home() {
  return (
    <main className="grid gap-3 grid-cols-4 grid-rows-layout min-h-screen w-[90vw] mx-auto my-5">
      <div className="flex align-text-bottom justify-between mb-5 col-span-4">
        <h1 className="text-7xl">Abigail Bashore</h1>
        <nav className="flex">
          <Link className="m-2" target="_blank" href={"https://www.linkedin.com/in/abigail-bashore"}>
            <LinkedIn />
          </Link>
          <Link className="m-2" target="_blank" href={"https://www.github.com/abbyjb"}>
            <Github />
          </Link>
        </nav>
      </div>      
      <Image
          className="rounded-lg my-2"
          src="/abbyjb-in-nyc.jpg"
          width={300}
          height={300}
          alt="abby in nyc"
      />
      <div className="p-2 m-2 h-fit w-fit col-span-3 rounded-lg bg-lightest-purple">
        <p className="text-lg text-darkest-purple">
          Software engineer with over five years of experience in building maintainable and performant software solutions. 
          Strengths in delivering well architected and tested code. Provides concise and actionable updates. 
          Collaborates with cross-functional teams in a remote environment. 
          Proficient in full-stack development in Ruby on Rails, React, PostgreSQL, and AWS.
        </p>
        </div>
    </main>
  );
}
