/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { mockApiCall } from "../api";

const DaftarPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const onDaftarClick = async () => {
    try {
      setLoading(true);
      await mockApiCall();
    } catch (err) {
      alert("server error");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="p-8 flex flex-col items-center justify-center gap-6">
      <h1>Daftar Pasien Aktif</h1>
      <button disabled={loading} onClick={onDaftarClick} className="p-2 bg-cyan-700 text-white font-semibold rounded-md disable:opacity-10">
        Daftar
      </button>
    </div>
  );
};

export default DaftarPage;