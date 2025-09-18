import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";

export default function KprPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6 bg-white">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-full overflow-hidden bg-white rounded-lg shadow-md"
              >
                <div className="max-w-xs rounded-xl overflow-hidden shadow-lg">
                  <div className="w-full h-[200px] bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-400">Image</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 p-3">

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Perumahan Griya
                      </h3>
                      <p className="text-sm text-gray-700">Jakarta Timur</p>
                      <p className="text-xs text-gray-400 mt-1">
                        LT 97m² | LB 78m² | L1
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="block text-base font-semibold text-gray-800 bg-yellow-400 px-3 rounded-lg">
                        Rp 2.589.500
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


      <Footer />
    </div>
  );
}
