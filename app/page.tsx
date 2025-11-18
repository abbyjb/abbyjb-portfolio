import Image from 'next/image'

export default function Home() {
  return (
    <main className="sm:grid sm:grid-cols-2 flex flex-col items-center justify-between gap-3">
      <div className="relative">
        <Image
          className="sm:absolute sm:top-0 sm:left-0 my-3 rounded-full shadow-xl shadow-blue"
          src="/abbyjb-in-nyc.jpg"
          // style={{
          //   width: '100%',
          //   height: 'auto',
          // }}
          width={300}
          height={300}
          alt="abby in nyc"
        />
        <Image 
          className="sm:absolute sm:top-40 sm:left-40 my-3 rounded-full shadow-xl shadow-blue"
          src="/abbyjb-running-5k.jpg"
          // style={{
          //   width: '100%',
          //   height: 'auto',
          // }}
          width={300}
          height={300}
          alt="abby running in a 5k"
        />
      </div>
      <div className="p-2 rounded-lg bg-beige shadow-lg shadow-blue">
        <p className="text-lg text-purple">
          I'm Abigail Bashore, a fullstack software engineer 
        </p>
      </div>
    </main>
  );
}
