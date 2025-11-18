import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-start justify-between gap-3">
      <Image
          className="rounded-lg shadow-xl shadow-blue"
          src="/abbyjb-in-nyc.jpg"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={300}
          height={300}
          alt="abby in nyc"
      />
      <div className="p-2 rounded-lg bg-beige shadow-lg shadow-blue">
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
