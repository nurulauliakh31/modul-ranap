import { Routes, Route } from "react-router";
// import TermsPage from "./pages/TermsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Formulir from "./pages/Formulir";
import DaftarPage from "./pages/daftar";

// Component
function App() {
  return (
    <>
      {/* Navbar */}
      {/* <div className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="flex space-x-4 pt-24">
          <a
            href="/"
            aria-current="page"
            className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
          >
            Dashboard
          </a>
          <a
            href="/formulir"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Formulir Pasien Masuk
          </a>
          <a
            href="/daftar"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Daftar Pasien Aktif
          </a>
        </div>
      </div> */}

      <div className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6 in-aria-expanded:hidden"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6 not-in-aria-expanded:hidden"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" --> */}
                  <a
                    href="/"
                    aria-current="page"
                    className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
                  >
                    Dashboard
                  </a>
                  <a
                    href="/formulir"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Formulir
                  </a>
                  <a
                    href="/daftar"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Daftar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formulir" element={<Formulir />} />
        <Route path="/daftar" element={<DaftarPage />} />
        {/* <Route path="/terms" element={<TermsPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <Navbar/> */}
      {/* <Header/>

      <h1 classNameName="px-9 pt-5">Modul Rawat Inap - Pasien Masuk</h1>

      <Formulir/> */}
    </>
  );
}

export default App;
