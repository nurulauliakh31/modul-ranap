const Formulir = () => {
  return (
    
    <div className="px-4 container py-8 flex  justify-center items-center">
      <form className="pt-9 ps-9 px-70 container py-8 justify-center items-center width:180px">
      <div className="space-y-12 bg-transparent">
        <div className="border-b border-white/10 pb-4">
          <h1 className="text-base/7 font-semibold text-white text-center w-120">Formulir Pasien Masuk</h1>
          {/* <p className="mt-1 text-sm/6 text-gray-400">Pasien Masuk</p> */}
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label htmlFor="username" className="block text-sm/6 font-medium text-white">
                Nama
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                  <input
                    id="username" name="username" type="text" placeholder="Masukan Nama"
                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" required
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="nik" className="block text-sm/6 font-medium text-white">
                Nik
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                  <input
                    id="nik" name="nik" maxLength={16} type="text" placeholder="Masukan angka (16 digit)"
                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6 max-length:16" required
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="diagnosa" className="block text-sm/6 font-medium text-white">
                Diagnosa Masuk
              </label>
              <div className="mt-2">
                <textarea
                  id="diagnosa"
                  name="diagnosa"
                  rows={3}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  defaultValue={''} required
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label htmlFor="date" className="block text-sm/6 font-medium text-white">
                Tanggal Masuk
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                  <input
                    id="date" name="date" max-length="5" type="date"
                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6 max-length:16" required
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="pjawab" className="block text-sm/6 font-medium text-white">
                Dokter Penanggung Jawab
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                  <input
                    id="pjawab" name="pjawab" type="text" placeholder="Masukan Dokter Penanggung Jawab"
                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" required
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-6">
              <label htmlFor="ruangan" className="block text-sm/6 font-medium text-white">
                Ruangan
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                  <input
                    id="ruangan" name="ruangan" type="text" placeholder="Masukan Ruangan"
                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" required
                  />
                </div>
              </div>
            </div>
            </div>
            
            <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" className="text-sm/6 font-semibold text-white">Cancel</button>
    <button type="submit" className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button>
  </div>
    </form>
    </div>
    
  );
};

export default Formulir;
