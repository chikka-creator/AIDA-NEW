import Image from "next/image";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import KopiJotos from "./KopiJotos";

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-row">
          <div className="hero-box">
            <Image src="/gambar1.jpg" alt="Photography" fill className="img" />
            <div className="overlay">Photography</div>
          </div>
          <div className="hero-box-vidio">
           <iframe
              src="https://www.youtube.com/embed/stfcQNHEKJc?autoplay=1&mute=1&loop=1&playlist=stfcQNHEKJc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              title="Videography"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="youtube-iframe"
            />
            <div className="overlay">Videography</div>
          </div>
        </div>
        <div className="hero-row">
          <div className="hero-box wide">
            <Image src="/gambar3.jpg" alt="Social Media Management" fill className="img" />
            <div className="overlay">Social Media Management</div>
          </div>
        <p className="client">More Client</p>
        </div>
      </section>

      {/* SECTION 1 */}
      {/* SECTION: VILLA SAHABAT TRAWAS */}
<section className="villa">
  <div className="villa-gallery">
    <Image src="/fotovilla.jpg" alt="Villa 1" width={300} height={380} className="villa-photo" />
    <Image src="/fotovilla2.jpg" alt="Villa 2" width={300} height={380} className="villa-photo" />
    <Image src="/fotovilla3.jpg" alt="Villa 3" width={300} height={380} className="villa-photo" />
  </div>

  <h2 className="villa-title">VILLA SAHABAT TRAWAS</h2>

  <div className="villa-desc">
    <p>
      Combining natural beauty with modern hospitality. The villa offers mountain lodge-style
      accommodations with facilities. It caters to guests seeking tranquillity, aesthetic appeal,
      and immersive naturistic experiences, while retaining comfort and convenience for content
      creation and social media engagement.
    </p>
  </div>

  <p className="villa-sub">Photography & Drone</p>
</section> 

{/* SECTION: GRAHA PADEL CLUB (copy 1:1 UI) */}
<section className="padel-section" aria-labelledby="padel-title">
  <div className="padel-overlay"></div>

  <div className="padel-inner">
    {/* ROW ATAS */}
    <div className="padel-top">
      <div className="padel-top-text">
        <p>
          Graha Padel Club is a high-end padel venue located at Graha Famili,
          Surabaya, featuring four indoor courts built to international standards.
          With advanced lighting, quality flooring, and excellent ancillary
          facilities including parking, café, and spaces to support events or open classes.
        </p>
      </div>

      <div className="padel-top-gallery">
        <div className="padel-top-left">
          <img src="/padel3.jpg" alt="Padel vertical" />
        </div>

        <div className="padel-top-right">
          <img src="/padel2.jpg" alt="Padel small top" className="small-top" />
          <img src="/padel6.jpg" alt="Padel small bottom" className="small-bottom" />
        </div>
      </div>
    </div>

    <div className="padel-divider" aria-hidden="true"></div>

    {/* ROW BAWAH */}
    <div className="padel-bottom">
      <div className="padel-bottom-left">
        <img src="/padel4.jpg" alt="Padel bottom left" />
      </div>

      <div className="padel-bottom-center">
        <img src="/padel1.jpg" alt="Padel bottom center" />
      </div>

      <div className="padel-bottom-right">
        <p>
          Graha Padel Club actively fosters an urban sports ecosystem by organizing
          regular events and encouraging community participation.
        </p>
      </div>
    </div>

    {/* TITLE */}
    <div className="padel-title-wrap">
      <h2 id="padel-title">GRAHA PADEL CLUB</h2>
      <div className="padel-sub">Photography &amp; Drone</div>
    </div>
  </div>
</section>



      {/* SECTION 3 */}
      <KopiJotos />

      {/* FOOTER */}
            <Footer />
    </main>
  );
}
