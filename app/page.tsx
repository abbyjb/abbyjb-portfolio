import Image from 'next/image'
import Navigation from '@/app/components/navigation'

export default function Home() {
  return (
      <Navigation />  
      <Image
          className="rounded-lg my-4"
          src="/abbyjb-in-nyc.jpg"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={300}
          height={300}
          alt="abby in nyc"
      />
      <div className="p-2 m-2 h-fit w-fit col-span-3 rounded-lg bg-off-white">
        <p className="text-lg text-purple">
          Software engineer with over five years of experience in building maintainable and performant software solutions. 
          Strengths in delivering well architected and tested code. Provides concise and actionable updates. 
          Collaborates with cross-functional teams in a remote environment. 
          Proficient in full-stack development in Ruby on Rails, React, PostgreSQL, and AWS.
        </p>
        </div>
    </main>
  );
}
