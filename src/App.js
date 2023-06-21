import { useRef } from 'react';

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <>

      {/* Header and Navbar */}
      <div class="flex bg-slate-400 h-20">
        <header class="fixed inset-x-0 top-0 z-50 bg-transparent  mx-6 my-6">
          <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1 ">
              <a onClick={() => scrollToSection(home)} href="#" class="-m-1.5 p-1.5">
                <span class="sr-only"></span>
                <svg class="h-8 w-auto fill-green-750" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
              </a>
            </div>

            {/* Burger Menu */}
            <div class="flex lg:hidden">
              <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>

            {/* Normal Menu */}
            <div class="hidden lg:flex lg:gap-x-12">
              <a onClick={() => scrollToSection(home)} href="#home" class="text-sm font-semibold leading-6 text-gray-900">Home</a>
              <a onClick={() => scrollToSection(about)} href="#about" class="text-sm font-semibold leading-6 text-gray-900">About</a>
              <a onClick={() => scrollToSection(projects)} href="#projects" class="text-sm font-semibold leading-6 text-gray-900">Projects</a>
              <a onClick={() => scrollToSection(contact)} href="#contact" class="text-sm font-semibold leading-6 text-gray-900">Contact</a>
            </div>
          </nav>
        </header>
      </div>

      {/* Body and Pages */}
      <div class="flex-col h-full bg-slate-400 p-6">
        <div ref={home} class="h-96 bg-violet-900">
          <h3 class="text-slate-500 text-center text-lg p-2">Home</h3>
        </div>
        <div ref={about} class="h-96 bg-violet-700">
          <h3 class="text-slate-700  font-semibold text-center text-lg p-2" >About</h3>
        </div>
        <div ref={projects} class="h-96 bg-violet-500">
          <h3 class="text-slate-700  font-semibold text-center text-lg p-2" >Projects</h3>
        </div>
        <div ref={contact} class="h-96 bg-violet-300">
          <h3 class="text-slate-800 font-semibold text-center text-lg p-2" >Contact</h3>
        </div>
        <footer class="flex z-1 align-middle justify-center bg-slate-300 h-20">
          <p class="text-slate-900 font-semibold text-md p-6">Copyright @ All Rights Have Been Reserved</p>
        </footer>
      </div>
    </>
  );
}

export default App;
