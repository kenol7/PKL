import { Menu, Send, X, Edit } from "lucide-react";
import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { Podcast } from "lucide-react";
import axios from "axios";

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [textLocation, settextLocation] = useState([null]);

  const KeyMaps = "AIzaSyDtRAmlhx3Ada5pVl5ilzeHP67TLxO6pyo";
  const endpoint = "https://smataco.my.id/engine/sendwhatsapp";
  const noTaeget = "081290778869";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endPoint);
        settextLocation(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    const sendText = () => {
      fetch(endpoint + "/?type=text&phone=" + noTaeget + "&message=inigambar")
        .then((res) => res.text())
        .then((Response) => console.log(Response));
    };

    const textLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${KeyMaps}`
          )
            .then((res) => res.json())
            .then((response) => {
              console.log("alamat=" + response.results[0].formatted_address);
              const postalCode = response.results[0].address_components.find(
                (component) => component.types.includes("postal_code")
              ).long_name;
              console.log(postalCode);
            });
        });

        // await
      } else {
        console.log("Browser anda tidak supprt Geolocation");
      }
      const filteredRumahDekat = rumahdekat.filter(
        (item) => item.latitude === latitude && item.longitude === longitude
      );
    };
  }, []);

  return (
    <>
      <section className="min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center gap-y-30 bg-white p-4 relative overflow-hidden">
          <div
            className={`fixed top-25 left-0 h-full w-64 bg-gray-100 shadow-lg transform transition-transform duration-300 z-50 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b bg-gray-100">
              <h2 className="font-semibold text-lg">History</h2>
              <button onClick={() => setIsOpen(false)} className="p-1">
                <X size={22} />
              </button>
            </div>

            <div className="p-4 space-y-1">
              <button className="flex gap-2 ">
                <Edit size={20} />
                <p>New Chat</p>
              </button>
              <p className="mt-5">Chat</p>
              <div className="p-2 font-light rounded bg-none cursor-pointer hover:bg-gray-200">
                Carikan saya rumah.......
              </div>
              <div className="p-2 font-light rounded bg-none cursor-pointer hover:bg-gray-200">
                Apa saja funfact dari......
              </div>
              <div className="p-2 font-light rounded bg-none cursor-pointer hover:bg-gray-200">
                Properti apa saja yang......
              </div>
            </div>
          </div>

          <div className="w-full flex justify-start">
            <button onClick={() => setIsOpen(true)} className="p-2">
              <Menu size={24} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <button
              className="px-3 py-6 rounded-md bg-yellow-200 shadow border hover:bg-yellow-600 transition"
              // onClick={sendText}
            >
              Kirim pesan
            </button>
            <button
              className="px-3 py-6 rounded-md bg-yellow-200 shadow border hover:bg-yellow-600 transition"
              // onClick={sendText}
            >
              kirim gambar
            </button>
            <button className="px-3 py-6 rounded-md bg-yellow-200 shadow border hover:bg-yellow-600 transition">
              kirim file
            </button>
            <button
              className="px-3 py-6 rounded-md bg-yellow-200 shadow border hover:bg-yellow-600 transition"
              onClick={textLocation}
            >
              Funfact Lokasi Properti
            </button>
          </div>

          <div className="w-full max-w-6xl flex items-center gap-1">
            <input
              type="text"
              placeholder="Ketik pesan..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 rounded-lg border border-yellow-300 px-4 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="p-3 rounded-full hover:bg-gray-100 transition">
              <Send size={40} className="rotate-45" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
