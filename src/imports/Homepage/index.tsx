import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaTiktok,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";

// IMPORT LOKAL ANDA
import svgPaths from "./svg-5g58tdqftq";
import img7313775B529F476ABfe70Efea5E35D451 from "./b55b1ec752df816ac0d565f17340b9f88d107acc.png";
import imgEllipse1 from "./1ac8ddaf021673441d5d2fba45ca235c4a7d01f5.png";
import imgLessThan from "./ed5588e581c8d47b9ee8ea77657f846b75f7e680.png";
import img3576Af18Cf9444CbB58930602Dbb85B71 from "./038234e3043feeaa55b82aba8925fb0a9aacbf56.png";
import img21436B64854E42189B10D78F85F10D931 from "./85ba681d00b5cc932b16662867bff04c072ac270.png";
import imgRectangle3 from "./0a2d8bd2ae14dadd95069abe85741304a10527dc.png";
import imgRectangle5 from "./55ae8b5c561c49dd8f2d31ac98efacf24e482da7.png";
import imgRectangle6 from "./18fd0058fb1159c741387189256fe2481147e3b3.png";
import imgEllipse2 from "./c889ce71c2918f73229221c88e866fb1ce054506.png";
import imgChatGptImageMay142026021715Am2 from "./18211223bfdd7dbca8adaa154126028089d991a5.png";
import imgDownload27RemovebgPreview1 from "./1db833c160f956630c7ce2ffd9e197cda11bf90c.png";
import { imgGroup } from "./svg-ydi3v";

export default function Homepage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  // STATE BARU UNTUK MODAL CONTACT US
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState("Semua");
  const galleryCategories = ["Semua", "Barista", "Toko Kami", "Customer"];

  // Data Galeri
  const galleryData = [
    { id: 1, src: imgRectangle5, category: "Toko Kami" },
    { id: 2, src: imgRectangle6, category: "Customer" },
    { id: 3, src: imgRectangle3, category: "Toko Kami" },
    { id: 4, src: img3576Af18Cf9444CbB58930602Dbb85B71, category: "Barista" },
    { id: 5, src: img21436B64854E42189B10D78F85F10D931, category: "Customer" },
  ];

  const filteredGallery =
    activeCategory === "Semua"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  // LOGIKA DRAG-TO-SCROLL UNTUK GALERI
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isDragged = useRef(false);

  const startDragging = (e) => {
    setIsDragging(true);
    isDragged.current = false;
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) isDragged.current = true;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // SCROLL EVENT (BACK TO TOP)
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // MENGHAPUS ELEMEN ELFSIGHT (WATERMARK & TOOLBAR) DARI DOM
  useEffect(() => {
    let isBadgeRemoved = false;
    let isToolbarRemoved = false;

    const removeElfsightElements = setInterval(() => {
      if (!isBadgeRemoved) {
        const elfsightBadge = document.querySelector(
          "#eapps-instagram-feed-1 > a",
        );
        if (elfsightBadge) {
          elfsightBadge.remove();
          isBadgeRemoved = true;
        }
      }

      if (!isToolbarRemoved) {
        const elfsightToolbar = document.querySelector(
          "#eapps-instagram-feed-1 > div.eapps-widget-toolbar",
        );
        if (elfsightToolbar) {
          elfsightToolbar.remove();
          isToolbarRemoved = true;
        }
      }

      if (isBadgeRemoved && isToolbarRemoved) {
        clearInterval(removeElfsightElements);
      }
    }, 500);

    return () => clearInterval(removeElfsightElements);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative min-h-screen bg-[#4A1010] text-white font-sans overflow-x-hidden">
      <style>{`
        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          height: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #800605;
          border-radius: 10px;
          cursor: pointer;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a30807;
        }

        #eapps-instagram-feed-1 > a,
        #eapps-instagram-feed-1 > div.eapps-widget-toolbar {
          display: none !important;
        }
      `}</style>

      {/* 1. PLUGIN SEO & ELFSIGHT SCRIPT */}
      <Helmet>
        <title>Lupa Lelah | Singgah Sebentar Lupakan Lelah</title>
        <meta
          name="description"
          content="Hadirkan suasana nyaman dengan aroma kopi yang menemani setiap momen berharga."
        />
        <script src="https://elfsightcdn.com/platform.js" async></script>
      </Helmet>

      {/* 2. NAVBAR RESPONSIF */}
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
            <a href="#beranda" className="hover:text-red-700 transition">
              Beranda
            </a>
            <a href="#tentang" className="hover:text-red-700 transition">
              Tentang Kami
            </a>
            <a href="#menu" className="hover:text-red-700 transition">
              Menu
            </a>
            <a href="#galeri" className="hover:text-red-700 transition">
              Galeri
            </a>
            <a href="#lokasi" className="hover:text-red-700 transition">
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
          <div className="md:hidden bg-white px-6 py-4 flex flex-col gap-4 border-t shadow-inner font-['Inter:Medium',sans-serif]">
            <a href="#beranda" onClick={() => setIsNavOpen(false)}>
              Beranda
            </a>
            <a href="#tentang" onClick={() => setIsNavOpen(false)}>
              Tentang Kami
            </a>
            <a href="#menu" onClick={() => setIsNavOpen(false)}>
              Menu
            </a>
            <a href="#galeri" onClick={() => setIsNavOpen(false)}>
              Galeri
            </a>
            <a href="#lokasi" onClick={() => setIsNavOpen(false)}>
              Lokasi Toko
            </a>
          </div>
        )}
      </nav>

      {/* 3. HERO SECTION */}
      <section
        id="beranda"
        className="relative pt-24 min-h-screen flex items-center justify-start px-6 md:px-24"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={img7313775B529F476ABfe70Efea5E35D451}
            alt="Hero BG"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-2xl text-left">
          <h1 className="font-['Libre_Baskerville:Bold',sans-serif] text-5xl md:text-[80px] font-bold mb-6 leading-tight drop-shadow-lg">
            Singgah Sebentar,
            <br />
            Lupakan Lelah
          </h1>
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] text-lg md:text-[20px] mb-10 text-gray-200">
            Hadirkan suasana nyaman dengan aroma kopi
            <br className="hidden md:block" /> yang menemani setiap momen
            berharga.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#menu"
              className="bg-[#800605] hover:bg-red-800 text-white px-10 py-4 rounded-full font-bold text-center transition shadow-lg transform hover:-translate-y-1"
            >
              Lihat Menu
            </a>
            <a
              href="#tentang"
              className="bg-white hover:bg-gray-200 text-[#800605] px-10 py-4 rounded-full font-bold text-center transition shadow-lg transform hover:-translate-y-1"
            >
              Tentang Kami
            </a>
          </div>
        </div>
      </section>

      {/* 4. OUR STORY SECTION */}
      <section id="tentang" className="py-20 px-6 md:px-24 bg-[#30211a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src={imgRectangle3}
              alt="Our Story"
              className="w-full rounded-[30px] shadow-[0px_4px_10px_5px_rgba(0,0,0,0.25)]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-['Libre_Baskerville:Bold',sans-serif] text-4xl md:text-[60px] font-bold mb-8">
              Our Story
            </h2>
            <div className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-base md:text-[16px] space-y-4 text-gray-200 leading-relaxed">
              <p>
                Berawal dari sebuah mimpi sederhana untuk menciptakan tempat
                yang nyaman bagi siapa saja, café kami hadir sebagai ruang untuk
                berbagi cerita, menikmati secangkir kopi hangat, dan melepas
                penat dari aktivitas sehari-hari.
              </p>
              <p>
                Kami percaya bahwa café bukan hanya tentang kopi, tetapi juga
                tentang suasana, kebersamaan, dan pengalaman yang berkesan.
                Dengan konsep modern dan hangat, kami menghadirkan tempat yang
                cocok untuk bekerja, belajar, berkumpul bersama teman, maupun
                menikmati waktu sendiri dengan tenang.
              </p>
              <p>
                Setiap menu yang kami sajikan dibuat dengan perhatian terhadap
                kualitas rasa dan detail penyajian. Dari biji kopi pilihan
                hingga hidangan favorit pelanggan, semuanya diracik untuk
                memberikan pengalaman terbaik di setiap kunjungan.
              </p>
            </div>
            <p className="mt-8 font-['Libre_Baskerville:Italic',sans-serif] italic text-xl md:text-[20px] text-gray-300">
              Selamat datang, dan nikmati setiap momen bersama kami ☕
            </p>
          </div>
        </div>
      </section>

      {/* 5. OUR MENU SECTION */}
      <section
        id="menu"
        className="py-20 px-6 md:px-24 bg-gradient-to-b from-[#4A1010] to-[#2e0000]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Libre_Baskerville:Bold',sans-serif] text-4xl md:text-[60px] font-bold mb-12 text-center md:text-left">
            Our Menu
          </h2>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex flex-col md:flex-row gap-6 w-full md:w-1/2">
              <img
                src={img3576Af18Cf9444CbB58930602Dbb85B71}
                alt="Menu 1"
                className="w-full md:w-1/2 rounded-2xl object-cover h-[400px] shadow-lg cursor-pointer hover:scale-[1.02] transition duration-300"
                onClick={() =>
                  setLightboxImg(img3576Af18Cf9444CbB58930602Dbb85B71)
                }
              />
              <img
                src={img21436B64854E42189B10D78F85F10D931}
                alt="Menu 2"
                className="w-full md:w-1/2 rounded-2xl object-cover h-[400px] shadow-lg cursor-pointer hover:scale-[1.02] transition duration-300"
                onClick={() =>
                  setLightboxImg(img21436B64854E42189B10D78F85F10D931)
                }
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-10">
              <div>
                <h3 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-[24px]">
                  ☕ Lupa Lelah
                </h3>
                <p className="font-['Plus_Jakarta_Sans:Light_Italic',sans-serif] italic text-[13px] mb-3 text-gray-300">
                  Coffee & Snack
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-gray-200">
                  Berbagai pilihan kopi, minuman segar, dan camilan ringan yang
                  cocok untuk menemani waktu nongkrong, bekerja, maupun
                  bersantai bersama teman.
                </p>
              </div>
              <div>
                <h3 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-[24px]">
                  🍽️ Bule Kampung
                </h3>
                <p className="font-['Plus_Jakarta_Sans:Light_Italic',sans-serif] italic text-[13px] mb-3 text-gray-300">
                  Heavy Meals
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-gray-200">
                  Pilihan makanan berat dengan cita rasa khas dan porsi yang
                  memuaskan, cocok untuk makan siang, makan malam, atau
                  berkumpul bersama keluarga dan teman.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="/menu"
              className="bg-[#800605] text-white hover:bg-red-800 px-10 py-4 rounded-full font-bold transition duration-300 ease-in-out shadow-lg transform hover:-translate-y-1 hover:shadow-xl inline-flex items-center gap-2"
            >
              Lihat Menu Lengkap
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 6. SIGNATURE SKOPEL SECTION */}
      <section className="relative py-24 bg-[#b88758] px-6 md:px-24 overflow-hidden shadow-[0px_4px_11.5px_7px_rgba(0,0,0,0.44)] z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-20">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-block bg-[#702400] px-6 py-2 rounded-[50px] mb-6">
              <span className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-[18px] tracking-[1.08px]">
                VARIAN BEST SELLER
              </span>
            </div>
            <h2 className="font-['Libre_Baskerville:Bold',sans-serif] text-[60px] md:text-[110px] font-bold leading-none mb-2">
              SKOPEL
            </h2>
            <p className="font-['Qwitcher_Grypen:Regular',sans-serif] text-[50px] md:text-[70px] leading-none mb-6">
              Signature Kopi Lupa Lelah
            </p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-gray-100 max-w-lg">
              Perpaduan Kopi pilihan, susu segar, dan rasa khas yang diracik
              sempurna dalam tiga varian terbaik kami. Dari yang creamy, manis,
              hingga cokelat yang rich & bold - semua ada di SKOPEL. Pilihan
              tepat untuk teman setiap moment mu.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative flex justify-center">
            <img
              src={imgChatGptImageMay142026021715Am2}
              alt="Skopel"
              className="w-[80%] max-w-[400px] object-cover relative z-20 cursor-pointer hover:scale-[1.02] transition duration-300"
              onClick={() => {
                if (!isDragged.current) {
                  setLightboxImg(imgChatGptImageMay142026021715Am2);
                }
              }}
            />
            <img
              src={imgDownload27RemovebgPreview1}
              alt="Decoration"
              className="absolute top-10 -right-10 opacity-50 z-0 w-[200px] cursor-pointer hover:opacity-80 transition duration-300"
              onClick={() => {
                setLightboxImg(imgDownload27RemovebgPreview1);
              }}
            />
          </div>
        </div>
      </section>

      {/* 7. GALLERY SECTION DENGAN DRAG-TO-SCROLL */}
      <section id="galeri" className="py-24 bg-[#4A1010] px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          {/* Menu Kategori */}
          <div className="w-full md:w-1/4">
            <h2 className="font-['Libre_Baskerville:Bold',sans-serif] text-[60px] font-bold mb-6">
              Galery
            </h2>
            <ul className="space-y-4 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] text-[20px]">
              {galleryCategories.map((cat, index) => (
                <li
                  key={index}
                  className={`cursor-pointer transition ${activeCategory === cat ? "text-[#ffcccc] translate-x-2" : "hover:text-red-400"}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Area Scroll Gambar */}
          <div className="w-full md:w-3/4">
            <div
              ref={sliderRef}
              onMouseDown={startDragging}
              onMouseLeave={stopDragging}
              onMouseUp={stopDragging}
              onMouseMove={onDrag}
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#800605 rgba(255,255,255,0.1)",
              }}
              className={`flex gap-6 overflow-x-auto flex-nowrap pb-6 custom-scrollbar ${isDragging ? "cursor-grabbing snap-none scroll-auto" : "cursor-grab snap-x snap-mandatory scroll-smooth"}`}
            >
              {filteredGallery.length > 0 ? (
                filteredGallery.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 w-[80vw] md:w-[350px] lg:w-[400px] h-[300px] md:h-[485px] snap-center relative group select-none"
                    onClick={() => {
                      if (!isDragged.current) {
                        setLightboxImg(item.src);
                      }
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.category}
                      className="w-full h-full object-cover rounded-[25px] shadow-[0px_0px_11px_8px_rgba(0,0,0,0.45)] group-hover:scale-[1.02] transition duration-300 pointer-events-none"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/50 px-4 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                      {item.category}
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-20 text-gray-400">
                  Belum ada foto untuk kategori ini.
                </div>
              )}
            </div>
            {/* Petunjuk Drag */}
            <p className="text-sm text-gray-300 mt-2 flex items-center gap-2">
              <span>🖱️ Tahan & Geser gambar</span>{" "}
              <span className="md:hidden">atau Swipe</span>
            </p>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button className="absolute top-6 right-6 text-white text-4xl hover:text-red-500 transition">
            ×
          </button>
          <img
            src={lightboxImg}
            alt="Fullscreen"
            className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* 8. SECTION SOSIAL MEDIA DENGAN WIDGET ELFSIGHT */}
      <section className="py-20 bg-[#30211a] px-6 md:px-24 text-center border-b border-red-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Libre_Baskerville:Bold',sans-serif] text-4xl font-bold mb-4">
            Terhubung Bersama Kami
          </h2>
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-gray-300 mb-10">
            Ikuti kami di sosial media untuk melihat keseruan dan promo terbaru
            dari Lupa Lelah Cafe.
          </p>

          {/* --- WIDGET ELFSIGHT INSTAGRAM --- */}
          <div className="w-full min-h-[300px] flex items-center justify-center mb-10 overflow-hidden">
            <div
              className="elfsight-app-2d62e273-1707-4cbe-9072-bdd8080289c9 w-full"
              data-elfsight-app-lazy
            ></div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg"
            >
              <FaInstagram size={24} /> Instagram
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-black text-white px-8 py-3 rounded-full font-bold border border-gray-700 hover:bg-gray-900 hover:scale-105 transition shadow-lg"
            >
              <FaTiktok size={24} /> TikTok
            </a>
          </div>
        </div>
      </section>

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
