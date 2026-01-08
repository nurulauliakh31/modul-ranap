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
      <div className="hidden sm:ml-6 sm:block">
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
      </div>

      <br/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formulir" element={<Formulir />} />
        <Route path="/daftar" element={<DaftarPage />} />
        {/* <Route path="/terms" element={<TermsPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <Navbar/> */}
      {/* <Header/>

      <h1 className="px-9 pt-5">Modul Rawat Inap - Pasien Masuk</h1>

      <Formulir/> */}
    </>
  );
}

export default App;
