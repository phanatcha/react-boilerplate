import EslintIcon from '/icons/eslint-icon.svg';
import PlaywrightIcon from '/icons/playwright-icon.svg';
import ReactHookFormIcon from '/icons/react_hook_form-icon.svg';
import React from 'react';
import ReactIcon from '/icons/react-icon.svg';
import TailwindIcon from '/icons/tailwind-icon.svg';
import TanStackQueryIcon from '/icons/tanstack_query-icon.svg';
import TypescriptIcon from '/icons/typescript-icon.svg';
import ViteIcon from '/icons/vite-icon.svg';
import VitestIcon from '/icons/vitest-icon.svg';
import ZustandIcon from '/icons/zustand-icon.svg';
import { useInView } from '../hooks/FadeRise';


export default function Home() {
  const { ref, visible } = useInView();
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <header>
        <section className="absolute inset-x-0 top-0 z-50">
          <nav className="flex p-6 lg:px-8">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">React Boilerplate</span>
              <img
                src={ReactIcon}
                alt="React Icon"
                className="h-12 w-12 object-contain"
              />
            </a>
          </nav>
        </section>

        <section className="relative min-h-screen overflow-hidden flex items-center">
          <img
            src={ReactIcon}
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[-15%]
              top-1/2
              -translate-y-1/2
              h-[400px]
              w-[400px]
              md:h-[500px]
              md:w-[500px]
              lg:h-[600px]
              lg:w-[600px]
              grayscale
              opacity-[0.15]
              blur-sm
            "
          />

          <div className="relative z-10 ml-10 lg:ml-20 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight lg:text-6xl md:text-5xl">
              <span className="inline-flex items-center whitespace-nowrap">
                REACT&nbsp;B
                <img
                  src={ReactIcon}
                  alt="O"
                  className="mx-1 h-10 w-10 object-contain sm:h-14 sm:w-14 translate-y-[2px]"
                />
                ILERPLATE
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              A production-ready starting point for React apps.
            </p>
          </div>
        </section>

      </header>

      <main 
        className="
          relative h-[200vh]
          bg-[#2c8ea9] 
        "
      >
        <div
          ref={ref}
          className={`
            sticky top-0
            min-h-screen
            flex flex-col
            items-center justify-center
            transition-all duration-1000 ease-out
            ${visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"}
          `}
        >

          <h2 className="text-4xl font-bold lg:text-6xl md:text-5xl">
            Tech Stack
          </h2>

          <p className="text-xl leading-8 max-w-3xl">
            Built with modern tools to help you ship faster and scale with confidence.
          </p>
          <section className="flex m-5 space-x-5 justify-center items-center">
            <img 
              src={ReactIcon} 
              alt="React Icon" 
              className="h-13 w-13 object-contain" 
            />
            <p className="text-2xl font-medium">React</p>

            <img 
              src={TypescriptIcon} 
              alt="Typescript Icon" 
              className="h-11 w-11 object-contain" 
            />
            <p className="text-2xl font-medium">Typescript</p>

            <img 
              src={ViteIcon} 
              alt="Vite Icon" 
              className="h-11 w-11 object-contain" 
            />
            <p className="text-2xl font-medium">Vite</p>

          </section>

          <section className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 justify-center items-center">

            <div className="
              w-80 h-80
              md:w-64 md:h-64
              rounded-2xl
              bg-gradient-to-b from-[#0093BE] to-[#090F11]
              shadow-xl shadow-black/40
              border border-white/10
              p-6
              flex flex-col
              items-center
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:shadow-2xl hover:shadow-black/60
            ">

              <h3 className="text-3xl font-extrabold mb-4">
                UI & UX
              </h3>

              <div className="flex space-x-2 mb-5">
                <img 
                  src={TailwindIcon} 
                  alt="Tailwind Icon" 
                  className="h-7 w-7 object-contain" 
                />
                <p className="text-lg font-medium">Tailwind CSS</p>
              </div>
              <div className="flex space-x-2 mb-5">
                <img 
                  src={ReactHookFormIcon} 
                  alt="React Hook Form Icon" 
                  className="h-7 w-7 object-contain" 
                />
                <p className="text-lg font-medium">React Hook Form</p>
              </div>

            </div>

            <div className="
              w-80 h-80
              md:w-64 md:h-64
              rounded-2xl
              bg-gradient-to-b from-[#00D2DA] to-[#043F41]
              shadow-xl shadow-black/40
              border border-white/10
              p-6
              flex flex-col
              items-center
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:shadow-2xl hover:shadow-black/60
            ">

              <h3 className="text-3xl font-extrabold mb-4">
                State & Data
              </h3>

              <div className="flex space-x-2 mb-5">
                <img 
                  src={TanStackQueryIcon} 
                  alt="TanStack Query Icon" 
                  className="h-7 w-7 object-contain" 
                />
                <p className="text-lg font-medium">TanStack Query</p>
              </div>
              <div className="flex space-x-2 mb-5">
                <img 
                  src={ZustandIcon} 
                  alt="Zustand Icon" 
                  className="h-7 w-7 object-contain" 
                />
                <p className="text-lg font-medium">Zustand</p>
              </div>

            </div>

            <div className="
              w-80 h-80
              md:w-64 md:h-64
              rounded-2xl
              bg-gradient-to-b from-[#96E7FF] to-[#006D8E]
              shadow-xl shadow-black/40
              border border-white/10
              p-6
              flex flex-col
              items-center
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:shadow-2xl hover:shadow-black/60
            ">

              <h3 className="text-3xl font-extrabold mb-4">
                Quality
              </h3>

              <div className="flex space-x-2 mb-5">
                <img 
                  src={VitestIcon} 
                  alt="Vitest Icon" 
                  className="h-7 w-7 object-contain" 
                />
                <p className="text-lg font-medium">Vitest</p>
              </div>
              <div className="flex space-x-2 mb-5">
                <img 
                  src={PlaywrightIcon} 
                  alt="Playwright Icon" 
                  className="h-7 w-7 object-contain" 
                />
                <p className="text-lg font-medium">Playwright</p>
              </div>

              <div className="flex space-x-2 mb-5">
                <img 
                  src={EslintIcon} 
                  alt="Eslint Icon" 
                  className="h-7 w-7 object-contain" 
                />
                <p className="text-lg font-medium">Eslint</p>
              </div>

            </div>


          </section>

        </div>
      </main>

      <footer className="flex flex-col items-center justify-end min-h-40 h-32 p-6">
        <p>Built for modern React development.</p>
      </footer>


    </div>
  );
}

