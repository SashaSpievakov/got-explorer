import Image from 'next/image';
import Link from 'next/link';

import housesImg from '../../public/home/housesImg.webp';
import housesBg from '../../public/home/housesBg.webp';

export default function Houses() {
  return (
    <article id="houses">
      <section className="mx-auto w-11/12">
        <h2 className="pt-24 text-center font-cardo text-4xl sm:pt-28 sm:text-5.5xl md:pt-24 md:text-7xl xl:text-7.5xl 2xl:pt-32 2xl:text-8.5xl">
          The Noble Houses of Westeros
        </h2>
        <section className="mt-4 sm:mt-6 2xl:mt-10">
          <Image
            src={housesImg}
            alt="map"
            className="float-right ml-2 mb-1 w-4/12 rounded-md sm:ml-3 md:ml-5 md:mb-3 2xl:mb-10 2xl:w-3/12"
          />
          <p className="text-lg sm:text-2xl md:text-3xl">
            The Great Houses are the most powerful of the noble houses of the
            Seven Kingdoms. They exercise immense authority and power over their
            vassals and territories and are answerable only to the King of the
            Andals, the Rhoynar, and the First Men, with the exception of House
            Stark, which rules over an independent kingdom.
          </p>{' '}
          <p className="mt-4 text-lg sm:text-2xl md:mt-8 md:text-3xl">
            The Great Houses are often distinguished by their sigils, words, and
            notable members. House Stark, for example, is known for its direwolf
            sigil and the words &quot;Winter is Coming.&quot; House Lannister,
            on the other hand, is recognized by its golden lion sigil and the
            words &quot;Hear Me Roar!&quot; House Targaryen, the family of the
            former ruling dynasty, is identified by its three-headed dragon
            sigil and the words &quot;Fire and Blood.&quot;
          </p>
          <p className="mt-8 hidden text-2xl md:block 2xl:text-3xl">
            Each Great House also has its own distinct history and legacy. House
            Baratheon, for instance, rose to power after the Targaryen Conquest
            when Aegon&quot;s half-brother Orys Baratheon became his closest
            ally and friend. The house&quot;s most famous member, Robert
            Baratheon, was responsible for leading a rebellion against the
            Targaryens and becoming the first non-Targaryen king to sit on the
            Iron Throne in centuries.
          </p>{' '}
          <p className="mt-4 hidden text-2xl md:block 2xl:mt-8 2xl:text-3xl">
            While the Great Houses hold immense power, they are not invincible.
            Throughout the history of the Seven Kingdoms, various houses have
            risen and fallen, either through war, political intrigue, or other
            means. House Tully, for example, once a powerful and wealthy house,
            lost much of its influence after the Red Wedding, a devastating
            massacre orchestrated by House Frey and House Bolton.
          </p>{' '}
          <p className="mt-4 text-lg sm:text-2xl 2xl:mt-8 2xl:text-3xl">
            As the story of the Seven Kingdoms continues to unfold, the fates of
            the Great Houses remain uncertain. New alliances will be formed, old
            enemies will be resurrected, and the balance of power will
            constantly shift as each house struggles to maintain its position of
            authority and influence.
          </p>
        </section>
      </section>
      <Link
        href="/houses"
        className="group relative mt-4 flex h-36 w-screen items-center justify-center bg-black outline-none focus:outline-4 focus:outline-offset-0 focus:outline-orange-600 sm:mt-8 sm:h-60 md:h-72 xl:h-80 2xl:mt-10 2xl:h-96"
      >
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-10 duration-700 group-hover:opacity-7"
          style={{
            backgroundImage: `url(${housesBg.src})`,
          }}
        />
        <h3 className="absolute top-1/4 right-1/2 w-5/6 translate-x-1/2 text-center font-cardo text-3.5xl opacity-100 duration-500 group-hover:text-orange-600 sm:text-5xl md:w-4/6 md:text-6xl xl:text-7xl 2xl:text-8xl">
          Explore The Houses of Westeros
        </h3>
      </Link>
    </article>
  );
}
