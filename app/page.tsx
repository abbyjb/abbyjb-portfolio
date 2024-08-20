import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[85vh]">
      <div className="sm:flex sm:flex-row items-center justify-between mb-3 gap-3">
        <Image
            className="my-3 md:rounded-lg rounded-full border-8 border-sunglow-400"
            src="/abbyjb-in-nyc.jpg"
            width={250}
            height={250}
            alt="abby in new york city"
          />
          <Image 
            className="md:block mx-auto hidden my-3 rounded-lg border-8 border-myrtle_green"
            src="/abbyjb-running-5k.jpg"
            width={250}
            height={250}
            alt="abby running a 5k race"
          />
          <Image 
            className="lg:block hidden my-3 rounded-lg border-8 border-coral"
            src="/abbyjb-hockey-game.jpg"
            width={250}
            height={250}
            alt="abby at a NHL hockey game"
          />
      </div>
      <div className="p-4 rounded-lg max-w-[762px] text-2xl">
        <p className="mb-4">
          Hello, thanks for stopping by!
        </p>
        <p className="mb-4">
          I am a software engineer with five years of experience working remotely
          out of Henderson, NV. At my current position at Greenhouse Software I have
          honed my skills in critical thinking, cross-functional communication, and
          technical expertise within the Ruby on Rails and React technical stack.
          I&apos;ve led projects that have increased the efficiency for our customers at scale. 
          From a budding thought to a built solution, I dig deep to find the best outcome 
          with performance, usability, and maintainability in mind!
        </p>
        <p>
          Outside of work I train for half marathons, watch NHL hockey with my family, and
          enjoy playing video games and traveling with friends.
        </p>
      </div>
    </main>
  );
}
