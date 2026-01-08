function Header() {
  return (
    <div>
        <div className="hidden sm:ml-6 sm:block pt-5">
          <div className="flex space-x-4">
            <a href="#" aria-current="page" className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white">Dashboard</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Formulir Pasien Masuk</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Daftar Pasien Aktif</a>
          </div>
        </div>
      </div>
  );
}

export default Header;