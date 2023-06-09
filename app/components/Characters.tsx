import Image from 'next/image';
import Link from 'next/link';

import charactersImg from '../../public/home/charactersImg.webp';
import charactersBg from '../../public/home/charactersBg.webp';

export default function Characters() {
  return (
    <article id="characters">
      <section className="mx-auto w-11/12">
        <h2 className="pt-10 text-center font-cardo text-4xl sm:pt-16 sm:text-5.5xl md:text-7xl xl:text-7.5xl 2xl:pt-20 2xl:text-8.5xl">
          Characters
        </h2>
        <section className="mt-4 sm:mt-6 2xl:mt-10">
          <Image
            src={charactersImg}
            alt="Ned Stark"
            className="float-right ml-2 mb-1 w-4/12 rounded-md sm:ml-5 sm:mb-3 2xl:w-3/12"
          />
          <p className="text-lg sm:text-2xl md:text-3xl">
            The world of Ice and Fire is filled with a vast array of complex and
            intriguing characters. There are the powerful and cunning players in
            the Game of Thrones, such as Cersei Lannister, Tywin Lannister,
            Littlefinger, and Varys. There are the honorable and brave heroes,
            such as Ned Stark, Jon Snow, Brienne of Tarth, and Davos Seaworth.
            Then there are the enigmatic and dangerous figures, such as
            Melisandre, the Faceless Men, and the Children of the Forest.
          </p>{' '}
          <p className="mt-4 text-lg sm:text-2xl md:mt-8 md:text-3xl">
            Each character is shaped by their personal history and the events
            that surround them, creating a rich tapestry of personalities and
            motivations. The world of Ice and Fire is not limited to humans, as
            there are also a variety of creatures and supernatural beings, such
            as dragons, giants, and wights. The characters of the world of Ice
            and Fire are both beloved and reviled, and their actions have
            far-reaching consequences that shape the destiny of the Seven
            Kingdoms and beyond.
          </p>
          <p className="mt-8 hidden text-2xl md:block 2xl:text-3xl">
            The political intrigue and power struggles in the world of Ice and
            Fire are a constant source of tension and conflict. The Seven
            Kingdoms are constantly vying for power and control, and alliances
            can shift in an instant. War is a common occurrence, and the
            characters must navigate the treacherous waters of loyalty, honor,
            and survival.
          </p>{' '}
          <p className="mt-4 text-lg sm:text-2xl 2xl:mt-8 2xl:text-3xl">
            Overall, the world of Ice and Fire is a complex and fascinating one,
            full of intriguing characters, epic battles, and powerful magic. It
            is a world that has captured the imagination of millions of fans
            around the globe, and its legacy will continue to endure for many
            years to come.
          </p>
        </section>
      </section>
      <Link
        href="/characters"
        className="group relative mt-4 flex h-36 w-screen items-center justify-center bg-black outline-none focus:outline-4 focus:outline-offset-0 focus:outline-orange-600 sm:mt-8 sm:h-60 md:h-72 xl:h-80 2xl:mt-10 2xl:h-96"
      >
        <div
          className="absolute top-0 left-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-15 duration-700 group-hover:opacity-10"
          style={{
            backgroundImage: `url(${charactersBg.src})`,
          }}
        />
        <h3 className="absolute top-1/3 right-1/2 w-5/6 translate-x-1/2 text-center font-cardo text-3.5xl opacity-100 duration-500 group-hover:text-orange-600 sm:w-4/6 sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
          Explore Characters
        </h3>
      </Link>
    </article>
  );
}
