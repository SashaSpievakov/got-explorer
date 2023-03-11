import { TbArrowDownRhombus } from 'react-icons/tb';

import bg1 from '../../public/hero-bg1.jpg';

export default function Hero() {
  return (
    <section>
      <div
        className="absolute top-0 left-0 z-0 h-screen w-screen bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${bg1.src})`,
        }}
      />
      <h2 className="absolute top-1/4 right-1/2 z-10 w-4/6 translate-x-1/2 text-center font-cardo text-8xl">
        Explore The World of Ice & Fire
      </h2>

      <a
        href="#home"
        className="absolute top-8/10 right-1/2 z-10 translate-x-1/2 text-center text-8xl duration-300 hover:text-orange-600"
      >
        <TbArrowDownRhombus />
      </a>
    </section>
  );
}
