import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaTiktok,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";

// IMPORT ASSET (Sama seperti Homepage)
import imgEllipse1 from "../HomePage/1ac8ddaf021673441d5d2fba45ca235c4a7d01f5.png";
import imgEllipse2 from "../HomePage/c889ce71c2918f73229221c88e866fb1ce054506.png";
import Hero from "./Hero.png";

export default function MenuPage() {
  const [activeVariant, setActiveVariant] = useState("All Variant");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // MOCK DATA MENU
  const menuData = [
    {
      category: "Premium Series",
      items: [
        {
          name: "Oat Coffee Caramel Macchiato",
          img: "/assets/premium_oat_caramel_machiato-CtdWSb1e.jpg",
        },
        {
          name: "Drink Beng-Beng Cream Caramel",
          img: "/assets/premium_drink_beng_beng-D_vVQjLD.jpg",
        },
        {
          name: "Choco Cheese Crunchy",
          img: "/assets/premium_choco_cheese_crunchy-CC_Ku48f.jpg",
        },
        {
          name: "Choco Crunchy Ice Cream",
          img: "/assets/premium_choco_crunchy_ice_cream-D-Z14LNQ.jpg",
        },
      ],
    },
    {
      category: "Classic Series",
      items: [
        {
          name: "Ovaltine",
          img: "/assets/classic_series_ovaltine-CqUCjlOE.png",
        },
        {
          name: "Cookies & Cream",
          img: "/assets/classic_series_oreo-LWVhTgjI.png",
        },
        { name: "Taro", img: "/assets/classic_series_taro-rAMtprPJ.png" },
        {
          name: "Thai Tea",
          img: "/assets/classic_series_thai_tea-Bt7OTvk5.png",
        },
        {
          name: "Green Thai Tea",
          img: "/assets/classic_series_green_thaitea-DAIIzZe_.png",
        },
      ],
    },
    {
      category: "Choco Series",
      items: [
        {
          name: "Choco Hazlenut",
          img: "/assets/choco_series_choco_hazlenut-BpYx7E1-.png",
        },
        {
          name: "Choco Lava",
          img: "/assets/choco_series_choco_lava_milo-D90yjvQe.png",
        },
        {
          name: "Choco Avocado",
          img: "/assets/choco_series_choco_avocado-BAtBgMFo.png",
        },
        {
          name: "Choco Ice Cream Cone",
          img: "/assets/choco_series_ice_cream_cone-UYd6LYfe.png",
        },
        {
          name: "Choco Ice Cream Cup",
          img: "/assets/choco_series_ice_cream_cup-BIzFD2Bf.png",
        },
        {
          name: "Choco Lava Float",
          img: "/assets/choco_series_lava_float-woAgmxf3.png",
        },
        {
          name: "Choco Avocado Float",
          img: "/assets/choco_series_avocado_float-BAOaV5oA.jpg",
        },
      ],
    },
    {
      category: "Boba Series",
      items: [
        {
          name: "Boba Brown Sugar Fresh Milk",
          img: "/assets/boba_series_boba_brown_sugar_fresh_milk-Ceq1wYD5.png",
        },
        {
          name: "Boba Brown Sugar Milk Tea",
          img: "/assets/boba_series_boba_brown_sugar_milk_tea-Rss8ctJx.png",
        },
      ],
    },
    {
      category: "Tea Series",
      items: [
        {
          name: "Strawberry Tea",
          img: "/assets/tea_series_strawberry_tea-Dn1lbzJC.png",
        },
        {
          name: "Black Jasmine Tea",
          img: "/assets/tea_series_black_jasmine_tea-Y5LfiNzZ.png",
        },
        { name: "Mango Tea", img: "/assets/tea_series_mango_tea-U_ySDvmW.png" },
        {
          name: "Lychee Tea",
          img: "/assets/tea_series_lychee_tea-vkRf2zbQ.png",
        },
        { name: "Kiwi Tea", img: "/assets/tea_series_kiwi_tea-BxCkPFaI.png" },
      ],
    },
    {
      category: "Cheese Series",
      items: [
        {
          name: "Green Tea Cheese",
          img: "/assets/cheese_series_greentea_cheese-CV-xKqeN.png",
        },
        {
          name: "Choco Avocado Cheese",
          img: "/assets/cheese_series_choco_avocado_cheese-C734FXkk.png",
        },
        {
          name: "Mango Cheese Tea",
          img: "/assets/cheese_series_mango_cheese_tea-CjSES7bw.png",
        },
        {
          name: "Ovaltine Cheese",
          img: "/assets/cheese_series_ovaltine_cheese-Ceiy_YuA.png",
        },
        {
          name: "Oreo Cheese",
          img: "/assets/cheese_series_oreo_cheese-Dy9bvnfv.png",
        },
        {
          name: "Strawberry Cheese Tea",
          img: "/assets/cheese_series_strawberry_cheese_tea-BvSb95B7.png",
        },
        {
          name: "Taro Cheese",
          img: "/assets/cheese_series_taro_cheese-DPscjWdM.png",
        },
        {
          name: "Thai Tea Cheese",
          img: "/assets/cheese_series_thai_tea_cheese-DHvBZjEf.png",
        },
        {
          name: "Choco Hazelnut Cheese",
          img: "/assets/cheese_series_choco_hazelnut_cheese-D5wQYmdu.png",
        },
        {
          name: "Choco Lava Cheese",
          img: "/assets/cheese_series_choco_lava_milo_cheese-C-aqp1gw.png",
        },
      ],
    },
    {
      category: "Yakult Series",
      items: [
        {
          name: "Mango Yakult",
          img: "/assets/yakult_series_mango_yakult-BCpkLx1E.png",
        },
        {
          name: "Lychee Yakult",
          img: "/assets/yakult_series_lychee_yakult-6TnTTLnK.png",
        },
      ],
    },
    {
      category: "Creamy Series",
      items: [
        {
          name: "Cookies & Cream",
          img: "/assets/creamy_oreo_cheese-Bqf3zYx-.png",
        },
        {
          name: "Cotton Candy",
          img: "/assets/creamy_cotton_candy-C6Hi8Tve.png",
        },
      ],
    },
    {
      category: "Ice Cream",
      items: [
        {
          name: "Ice Cream Cone Vanilla",
          img: "/assets/ice_cream_cone_vanilla-BcML8-RD.png",
        },
        {
          name: "Ice Cream Cup Cookies & Cream",
          img: "/assets/ice_cream_cookies-CvE2q2xv.png",
        },
        {
          name: "Ice Cream Cup Mango",
          img: "/assets/ice_cream_mango-C-DjuZ8k.png",
        },
        {
          name: "Ice Cream Cup Strawberry",
          img: "/assets/ice_cream_vanilla_straw-DJGyj51t.png",
        },
        {
          name: "Ice Cream Cup Boba Brown Sugar",
          img: "/assets/ice_cream_boba-PYOkolRA.png",
        },
      ],
    },
    {
      category: "Coffee Series",
      items: [
        {
          name: "Kopi Susu Gula Aren",
          img: "/assets/coffee_series_kopi_susu_gula_aren-BdOlqSt9.png",
        },
        { name: "Kopasus", img: "/assets/coffee_series_kopasus-BLYdpAvV.jpg" },
      ],
    },
    {
      category: "Silky Pudding",
      items: [
        { name: "Thai Tea", img: "/assets/pudding_thai_tea-BQPEGOZf.png" },
        { name: "Chocolate", img: "/assets/pudding_choco-CetCysZO.png" },
        {
          name: "Cotton Candy",
          img: "/assets/pudding_cotton_candy-u0AaRvOe.png",
        },
        { name: "Mango", img: "/assets/pudding_mango-CTfqE_dq.png" },
        {
          name: "Green Thai Tea",
          img: "/assets/pudding_green_tea-CwIpukXc.png",
        },
        { name: "Taro", img: "/assets/pudding_taro-BztVrh1l.png" },
        { name: "Bubble Gum", img: "/assets/pudding_bubble_gum-CtYaSZ4C.png" },
        { name: "Lychee", img: "/assets/pudding_lychee-oTx2iYBS.png" },
        {
          name: "Choco Cheese",
          img: "/assets/pudding_choco_cheese-jSl3WvMf.png",
        },
        {
          name: "Mango Cheese",
          img: "/assets/pudding_mango_cheese-Baj9eVA4.png",
        },
      ],
    },
  ];

  const filterList = [
    "All Variant",
    "Premium Series",
    "Classic Series",
    "Choco Series",
    "Boba Series",
    "Tea Series",
    "Cheese Series",
    "Yakult Series",
    "Creamy Series",
    "Ice Cream",
    "Coffee Series",
    "Silky Pudding",
  ];

  // Quick Links Pengganti HAUS!
  const quickLinks = [
    { title: "Coffee Series", icon: "☕" },
    { title: "Premium Series", icon: "✨" },
    { title: "Classic Series", icon: "🥛" },
    { title: "Choco Series", icon: "🍫" },
  ];

  const displayedData =
    activeVariant === "All Variant"
      ? menuData
      : menuData.filter((section) => section.category === activeVariant);

  // WIDGET BACK TO TOP
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="bg-[#4A1010] min-h-screen font-sans text-white">
      <Helmet>
        <title>Menu | Lupa Lelah</title>
      </Helmet>

      {/* --- NAVBAR (Sama persis dengan Homepage) --- */}
      <nav className="fixed top-0 w-full bg-white text-[#800605] shadow-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={imgEllipse1}
              alt="Logo"
              className="w-12 h-12 object-cover rounded-full"
            />
            <span className="font-['Inter:Bold',sans-serif] font-bold text-xl md:text-2xl">
              Lupa Lelah
            </span>
          </div>
          <div className="hidden md:flex gap-8 font-['Inter:Medium',sans-serif] font-medium items-center">
            <a href="/#beranda" className="hover:text-red-700 transition">
              Beranda
            </a>
            <a href="/#tentang" className="hover:text-red-700 transition">
              Tentang Kami
            </a>
            <a
              href="/menu"
              className="text-[#800605] border-b-2 border-[#800605] pb-1"
            >
              Menu
            </a>
            <a href="/#galeri" className="hover:text-red-700 transition">
              Galeri
            </a>
            <a href="/#lokasi" className="hover:text-red-700 transition">
              Lokasi Toko
            </a>
          </div>
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isNavOpen && (
          <div className="md:hidden bg-white px-6 py-4 flex flex-col gap-4 border-t shadow-inner font-['Inter:Medium',sans-serif] text-[#800605]">
            <a href="/#beranda" onClick={() => setIsNavOpen(false)}>
              Beranda
            </a>
            <a href="/#tentang" onClick={() => setIsNavOpen(false)}>
              Tentang Kami
            </a>
            <a
              href="/menu"
              className="font-bold"
              onClick={() => setIsNavOpen(false)}
            >
              Menu
            </a>
            <a href="/#galeri" onClick={() => setIsNavOpen(false)}>
              Galeri
            </a>
            <a href="/#lokasi" onClick={() => setIsNavOpen(false)}>
              Lokasi Toko
            </a>
          </div>
        )}
      </nav>

      {/* --- HEADER MENU BANNER (Estetik Lupa Lelah) --- */}
      <div className="relative pt-24 pb-12 flex items-center justify-center min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh] mb-12">
        <div className="absolute inset-0 z-0">
          <img
            src={Hero}
            alt="Menu Banner"
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
      </div>

      {/* --- QUICK LINKS CATEGORY (Pengganti Toggle HAUS!) --- */}
      <div className="mx-auto mb-20 w-[90%] md:w-[85%]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {quickLinks.map((link, idx) => (
            <div
              key={idx}
              onClick={() => setActiveVariant(link.title)}
              className={`h-[15vh] lg:h-36 w-full cursor-pointer rounded-2xl p-4 shadow-lg transition-all duration-300 flex flex-col justify-center items-center border border-white/10 hover:-translate-y-2
                ${activeVariant === link.title ? "bg-[#800605] shadow-[0px_0px_15px_rgba(128,6,5,0.6)]" : "bg-[#30211a] hover:bg-[#5c1313]"}`}
            >
              <div className="text-4xl lg:text-5xl mb-2">{link.icon}</div>
              <div className="text-sm md:text-lg font-['Poppins:SemiBold',sans-serif] text-center text-white">
                {link.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MENU LIST & SIDEBAR --- */}
      <div className="mx-auto flex flex-col lg:flex-row w-[90%] md:w-[85%] pb-24">
        {/* Filter Button Mobile */}
        <div className="mb-6 flex lg:hidden items-center border border-white/20 p-3 rounded-xl bg-[#30211a]">
          <svg
            className="h-6 w-6 text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            ></path>
          </svg>
          <div className="ms-3 font-bold text-lg">Kategori Menu</div>
        </div>

        {/* SIDEBAR */}
        <div className="hidden lg:block w-[20%]">
          <div className="rounded-3xl px-6 py-8 shadow-2xl bg-[#30211a] sticky top-28 border border-white/5">
            <div className="mb-6 text-[22px] font-['Libre_Baskerville:Bold',sans-serif] font-bold border-b border-white/10 pb-4">
              Pilih Varian
            </div>
            <div className="flex flex-col gap-2">
              {filterList.map((item, idx) => (
                <label
                  key={idx}
                  className={`flex items-center p-3 rounded-xl cursor-pointer transition-all duration-200 group
                    ${activeVariant === item ? "bg-[#800605]" : "hover:bg-white/5"}`}
                >
                  <input
                    type="checkbox"
                    className="mr-4 accent-white cursor-pointer w-4 h-4 hidden"
                    checked={activeVariant === item}
                    onChange={() => setActiveVariant(item)}
                  />
                  <span
                    className={`text-lg font-['Plus_Jakarta_Sans:Medium',sans-serif] ${activeVariant === item ? "font-bold text-white" : "text-gray-300 group-hover:text-white"}`}
                  >
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="lg:w-[80%] lg:pl-12 w-full">
          {displayedData.length > 0 ? (
            displayedData.map((section, idx) => (
              <div className="mb-16" key={idx}>
                <div className="w-auto">
                  <h2 className="text-3xl lg:text-4xl font-['Libre_Baskerville:Bold',sans-serif] font-bold mb-8 border-l-4 border-[#800605] pl-4 text-white">
                    {section.category}
                  </h2>

                  {/* Grid System yang dipertahankan */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-8 lg:gap-y-12">
                    {section.items.map((product, pIdx) => (
                      <div
                        className="col-span-1 group cursor-pointer"
                        key={pIdx}
                      >
                        <div className="overflow-hidden rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.5)] mb-4 bg-[#30211a] border border-white/5 relative">
                          <img
                            src={product.img}
                            alt={product.name}
                            className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition duration-500"
                          />
                          {/* Overlay Gradient on Hover */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>
                        </div>
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-center text-sm md:text-base text-gray-200 group-hover:text-white transition">
                          {product.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-32 text-gray-400 text-xl font-['Plus_Jakarta_Sans:Regular',sans-serif]">
              Varian tidak ditemukan.
            </div>
          )}
        </div>
      </div>

      {/* 9. FOOTER */}
      <footer
        id="lokasi"
        className="bg-[#2e0000] pt-16 pb-10 px-6 md:px-24 relative"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-12 border-b border-white/20 pb-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={imgEllipse2}
                alt="Logo Footer"
                className="w-14 h-14 rounded-full"
              />
              <div>
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-[20px]">
                  Lupa Lelah
                </h3>
                <p className="font-['Poppins:Italic',sans-serif] text-[14px]">
                  Singgah Sebentar dan Lupakan Lelahmu
                </p>
              </div>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-gray-300">
              Kami percaya bahwa café bukan hanya tentang kopi, tetapi juga
              tentang suasana, kebersamaan, dan pengalaman yang berkesan.
            </p>
          </div>
          <div className="font-['Poppins:Regular',sans-serif]">
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[20px] mb-6">
              Informasi
            </h3>
            <ul className="space-y-3 text-[16px] text-gray-300">
              <li>
                <a href="#tentang" className="hover:text-white transition">
                  Tentang Kami
                </a>
              </li>
              <li>Syarat & Ketentuan</li>
              <li>Kebijakan Privasi</li>
              <li>FAQ</li>
            </ul>
            {/* TOMBOL MEMBUKA MODAL CONTACT US */}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="mt-6 inline-block bg-white text-[#800605] px-6 py-2 rounded-lg font-bold hover:bg-gray-200 transition shadow-md"
            >
              Contact Us
            </button>
          </div>
          <div className="font-['Poppins:Regular',sans-serif]">
            <h3 className="font-['Poppins:SemiBold',sans-serif] text-[20px] mb-6">
              Alamat Kami
            </h3>
            <p className="text-[16px] text-gray-300 mb-2">
              Jl. Ikan Tombro No.27, Mojolangu, Kec. Lowokwaru, Kota Malang,
              Jawa Timur 65142
            </p>
            <p className="text-[16px] text-gray-300 mb-4">📞 082244501544</p>
            <div className="w-full h-32 rounded-lg overflow-hidden border-2 border-[#800605]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d246.9764085691866!2d112.62893553830601!3d-7.934432313567918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629e5b17bdaab%3A0x8a97396fd46b449e!2sLupa%20Lelah%20Cafe!5e0!3m2!1sid!2sid!4v1780644640757!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center font-['Poppins:Regular',sans-serif] text-[15px] text-gray-400">
          <p>© 2026 LupaLelahCafe. All rights reserved.</p>
          <p>Terdaftar & Berlisensi Resmi</p>
        </div>
      </footer>

      {/* --- MODAL CONTACT US --- */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#30211a] rounded-2xl w-full max-w-lg p-8 relative shadow-2xl border border-white/10 animate-[fadeIn_0.3s_ease-out]">
            {/* Tombol Tutup */}
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              <FaTimes size={24} />
            </button>

            <h3 className="font-['Libre_Baskerville:Bold',sans-serif] text-3xl mb-2 text-white">
              Hubungi Kami
            </h3>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-gray-300 mb-6 text-sm">
              Kirimkan pertanyaan atau saran Anda. Kami akan segera merespons
              melalui Email.
            </p>

            <form
              action="mailto:halo@lupalelahcafe.com"
              method="GET"
              encType="text/plain"
              className="flex flex-col gap-5 font-['Plus_Jakarta_Sans:Regular',sans-serif]"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Misal: Budi Santoso"
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#800605] focus:ring-1 focus:ring-[#800605] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Pesan Anda
                </label>
                <textarea
                  name="body"
                  rows="4"
                  required
                  placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#800605] focus:ring-1 focus:ring-[#800605] transition resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#800605] hover:bg-red-800 text-white font-bold py-3 rounded-lg transition shadow-lg mt-2 flex items-center justify-center gap-2"
              >
                Kirim via Email Aplikasi
                <svg
                  className="w-4 h-4 transform -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 10. WIDGET FLOATING */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button
          onClick={scrollToTop}
          className={`bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition transform ${showBackToTop ? "scale-100" : "scale-0"}`}
        >
          <FaArrowUp size={20} />
        </button>
        <a
          href="https://wa.me/6282244501544"
          target="_blank"
          rel="noreferrer"
          className="relative group"
        >
          <div className="absolute inset-0 bg-green-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300">
            <FaWhatsapp size={30} />
          </div>
        </a>
      </div>
    </div>
  );
}
