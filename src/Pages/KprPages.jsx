import { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function KprPage() {
  const [dataRumah, setDataRumah] = useState([]);
  const endPoint =
    "https://smataco.my.id/dev/unez/CariRumahAja/api/contribution.php";
  const endpointImage = "https://smataco.my.id/api_digicon/assets/images/";

  // Fetch data API
  useEffect(() => {
    fetch(endPoint)
      .then((res) => res.json())
      .then((data) => {
        setDataRumah(data);
      })
      .catch((err) => console.error("Gagal fetch data:", err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar di atas */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Konten utama */}
        <main className="flex-1 p-6 bg-white">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dataRumah.map((item, i) => (
              <div
                key={i}
                className="w-full overflow-hidden bg-white rounded-lg shadow-md shadow-black/30"
              >
                <div className="rounded-xl overflow-hidden">
                  {/* Image */}
                  <div className="w-full h-[200px] bg-gray-300 flex items-center justify-center">
                    {item.image && item.image !== "no-image-found.png" ? (
                      <img
                        src={endpointImage + item.image}
                        alt={item.cluster_apart_name}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span className="text-gray-400">Image</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex items-center justify-between bg-gray-100 p-3">
                    {/* Info kiri */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.cluster_apart_name || "Perumahan"}
                      </h3>
                      <p className="text-sm text-gray-700">
                        {item.city || "Kota Tidak Diketahui"}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        LT {item.square_land}m² | LB {item.square_building}m² |
                        L {item.property_floor}
                      </p>
                    </div>

                    {/* Info kanan */}
                    <div className="text-right">
                      <span className="block text-base font-semibold text-gray-800 bg-yellow-400 px-3 rounded-lg">
                        Rp{" "}
                        {new Intl.NumberFormat("id-ID").format(
                          item.property_price || 0
                        )}
                      </span>
                      <p className="text-xs text-gray-600 mt-1">Transaksi</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <div>
        <p>tes</p>
      </div>
      {/* Footer di bawah */}
      <Footer />
    </div>
  );
}
