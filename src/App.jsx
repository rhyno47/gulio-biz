import "./App.css";
import { useEffect, useRef, useState } from "react";
import logo from "./assets/gulio logo.png";
import heroProductsImage from "./assets/hero-products.png";
import lubricantsImage from "./assets/lubricants.jpeg";
import grindingDiscsImage from "./assets/Grinding Discs.jpeg";
import boltsImage from "./assets/bolts.jpeg";
import chemicalsImage from "./assets/chemicals.jpeg";
import toolsImage from "./assets/tools.jpeg";
import aboutUsImage from "./assets/about us/01.jpg";
import aboutVisionImage from "./assets/about us/02.jpg";
import aboutProductsImage from "./assets/about us/03.jpg";
import aboutEquipmentImage from "./assets/about us/04.jpg";
import aboutProcurementImage from "./assets/about us/05.jpg";
import aboutContactImage from "./assets/about us/06.jpg";
import aboutQualityImage from "./assets/about us/07.jpg";
import aboutWhyImage from "./assets/about us/08.jpg";

const movingProductImages = Object.values(
  import.meta.glob("./assets/moving logos/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
    query: "?url",
  }),
);

const products = [
  [
    "Grinding Media",
    "Durable grinding media for consistent industrial performance.",
    grindingDiscsImage,
  ],
  [
    "Drilling Consumables",
    "Reliable consumables designed for demanding drilling work.",
    toolsImage,
  ],
  [
    "Industrial Lubricants",
    "High-performance lubricants that protect critical equipment.",
    lubricantsImage,
  ],
  [
    "Grinding Discs",
    "Precision discs for clean, dependable cutting and finishing.",
    grindingDiscsImage,
  ],
  [
    "Hex Bolts",
    "Strong fastening solutions for construction and industrial assembly.",
    boltsImage,
  ],
  [
    "Industrial Chemicals",
    "Specialist chemical products for efficient site operations.",
    chemicalsImage,
  ],
  [
    "Workshop Tools",
    "Practical tools selected for busy maintenance teams.",
    toolsImage,
  ],
  [
    "Cutting Wheels",
    "Hard-wearing wheels for accurate industrial cutting.",
    grindingDiscsImage,
  ],
  [
    "Machine Oils",
    "Clean-running oils for demanding machinery and components.",
    lubricantsImage,
  ],
  [
    "Structural Fasteners",
    "Dependable fasteners for secure structural connections.",
    boltsImage,
  ],
  [
    "Surface Treatment",
    "Reliable chemical solutions for preparation and protection.",
    chemicalsImage,
  ],
  [
    "Maintenance Kits",
    "Essential tools for everyday repair and maintenance work.",
    toolsImage,
  ],
  [
    "Abrasive Products",
    "Consistent abrasives for professional surface finishing.",
    grindingDiscsImage,
  ],
  [
    "Hydraulic Lubricants",
    "Specialized lubrication for hydraulic systems and pumps.",
    lubricantsImage,
  ],
  [
    "Anchor Bolts",
    "Heavy-duty anchoring products for demanding installations.",
    boltsImage,
  ],
  [
    "Processing Chemicals",
    "Industrial-grade chemicals built for controlled processing.",
    chemicalsImage,
  ],
  [
    "Hand Tools",
    "Durable hand tools for accurate work in the field.",
    toolsImage,
  ],
  [
    "Polishing Discs",
    "Professional polishing products for smooth final surfaces.",
    grindingDiscsImage,
  ],
  [
    "Compressor Lubricants",
    "Protective lubricants that help equipment run efficiently.",
    lubricantsImage,
  ],
  [
    "Industrial Fixings",
    "Reliable fixing products for repairs, builds, and upgrades.",
    boltsImage,
  ],
];

const aboutSlides = [
  ["aboutUsImage, aboutUsImage",aboutUsImage],
  ["Our vision, mission and values", aboutVisionImage],
  ["Our products and services", aboutProductsImage],
  ["Mining equipment and industrial supplies", aboutEquipmentImage],
  ["Procurement and sourcing", aboutProcurementImage],
  ["Contact Gulio Biz", aboutContactImage],
  ["Quality commitments", aboutQualityImage],
  ["Why choose Gulio Biz", aboutWhyImage],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(([name, description]) =>
    `${name} ${description}`.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const aboutScrollRef = useRef(null);
  const servicesScrollRef = useRef(null);

  useEffect(() => {
    const carousel = servicesScrollRef.current;
    if (!carousel) return undefined;

    const timer = setInterval(() => {
      if (
        carousel.matches(":hover") ||
        carousel.contains(document.activeElement)
      )
        return;

      const card = carousel.querySelector(".service-card");
      if (!card) return;

      const step = card.getBoundingClientRect().width + 25;
      const atEnd =
        carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 2;

      carousel.scrollTo({
        left: atEnd ? 0 : carousel.scrollLeft + step,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const scrollAbout = (direction) => {
    aboutScrollRef.current?.scrollBy({
      left: direction * aboutScrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="Gulio Biz Company Limited logo" />
        </div>
        <form
          className="navbar__search"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            placeholder="Search industrial products"
            aria-label="Search industrial products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" aria-label="Search">
            ⌕
          </button>
        </form>
        <button
          className="navbar__toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          className={`navbar__menu${menuOpen ? " navbar__menu--open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#home" aria-label="Home" data-tooltip="Home">
            <span aria-hidden="true">⌂</span>
          </a>
          <a href="#about" aria-label="About" data-tooltip="About">
            <span aria-hidden="true">i</span>
          </a>
          <a href="#services" aria-label="Products" data-tooltip="Products">
            <span aria-hidden="true">▦</span>
          </a>
          <a href="#contact" aria-label="Contact" data-tooltip="Contact">
            <span aria-hidden="true">✆</span>
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="hero-small">Reliable Mining And Industrial Solutions</p>
            <h1>
              Quality Products For <span>Demanding Operations.</span>
            </h1>
            <p>
              Gulio Biz Company Limited Supplies High-Quality Grinding Media,
              Drilling Consumables, And Industrial Products You Can Depend On.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn primary">
                Contact Us
              </a>
              <a href="#services" className="btn secondary">
                Our Products
              </a>
            </div>
          </div>
          <div
            className="hero-products"
            aria-label="Gulio Biz industrial products"
          >
            <img
              className="hero-product"
              src={heroProductsImage}
              alt="Mining and industrial supplies"
            />
          </div>
        </section>

        <div className="stock-showcase">
          <div className="stock-showcase-header">
            <div>
              <p className="stock-kicker">
                <b>Available</b> <span>Stock</span>
              </p>
              <p className="stock-message">
                Quality products <span>ready for your next operation.</span>
              </p>
            </div>
          </div>
          <div
            className="moving-products moving-products--divider"
            aria-label="Available stock products"
          >
            <div className="moving-products-track">
              {[...movingProductImages, ...movingProductImages].map(
                (image, index) => (
                  <img key={`${image}-${index}`} src={image} alt="" />
                ),
              )}
            </div>
          </div>
          <a className="stock-order-button" href="#contact">
            Order now <span aria-hidden="true">→</span>
          </a>
          <div className="stock-benefits" aria-label="Why choose Gulio Biz">
            <article className="stock-benefit">
              <div className="stock-benefit-icon" aria-hidden="true">
                ↗
              </div>
              <div>
                <h3>Delivery &amp; logistics</h3>
                <p>Reliable delivery and shipping support.</p>
              </div>
            </article>
            <article className="stock-benefit">
              <div className="stock-benefit-icon" aria-hidden="true">
                ▣
              </div>
              <div>
                <h3>Bulk &amp; contract deals</h3>
                <p>Competitive prices for large orders.</p>
              </div>
            </article>
            <article className="stock-benefit">
              <div className="stock-benefit-icon" aria-hidden="true">
                ∞
              </div>
              <div>
                <h3>Business &amp; partnership</h3>
                <p>Long-term supply partnership.</p>
              </div>
            </article>
            <article className="stock-benefit">
              <div className="stock-benefit-icon" aria-hidden="true">
                ✓
              </div>
              <div>
                <h3>Quality assurance</h3>
                <p>Products you can buy with confidence.</p>
              </div>
            </article>
          </div>
        </div>

        <section id="services" className="services">
          <div className="section-container">
            <div className="supply-heading">
              <p className="supply-kicker">
                <b>What We</b> <span>Supply</span>
              </p>
              <p className="supply-message">
                Reliable products <span>for demanding operations.</span>
              </p>
            </div>
            <div
              className="service-carousel"
              ref={servicesScrollRef}
              aria-label="Our products"
            >
              <div className="service-track">
                {[...products, ...products].map(
                  ([name, description, image], index) => (
                    <article
                      className="service-card"
                      key={`${name}-${index}`}
                      aria-hidden={index >= products.length}
                    >
                      <div className="service-image-wrap">
                        <img className="service-image" src={image} alt="" />
                      </div>
                      <div className="service-icon">
                        {String((index % products.length) + 1).padStart(2, "0")}
                      </div>
                      <h3>{name}</h3>
                      <p>{description}</p>
                    </article>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="why-choose" className="why-choose">
          <div className="section-container">
            <div className="why-choose-heading">
              <p className="why-choose-kicker">
                why choose <span>gulio biz</span>
              </p>
              <p className="why-choose-message">
                Partnership built on <span>trust and reliability.</span>
              </p>
            </div>
            <div className="why-choose-grid">
              <article className="why-choose-card">
                <div className="why-choose-icon" aria-hidden="true">
                  ⚡
                </div>
                <h3>Reliable Supply</h3>
                <p>
                  Consistent stock availability and dependable fulfillment for
                  your ongoing operations.
                </p>
              </article>
              <article className="why-choose-card">
                <div className="why-choose-icon" aria-hidden="true">
                  ◆
                </div>
                <h3>Quality Products</h3>
                <p>
                  Industrial-grade materials rigorously tested to meet the
                  highest performance standards.
                </p>
              </article>
              <article className="why-choose-card">
                <div className="why-choose-icon" aria-hidden="true">
                  💰
                </div>
                <h3>Competitive Prices</h3>
                <p>
                  Volume discounts and strategic pricing designed to maximize
                  your operational efficiency.
                </p>
              </article>
              <article className="why-choose-card">
                <div className="why-choose-icon" aria-hidden="true">
                  🤝
                </div>
                <h3>Business Support</h3>
                <p>
                  Dedicated account management and technical support tailored to
                  your business needs.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="section-container">
            <div className="about-heading">
              <h2 className="about-title">
                about <span>us</span>
              </h2>
            </div>
            <div className="about-carousel-shell">
              <div
                className="about-carousel-controls"
                aria-label="About Us carousel controls"
              >
                <button
                  type="button"
                  onClick={() => scrollAbout(-1)}
                  aria-label="Previous About Us image"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => scrollAbout(1)}
                  aria-label="Next About Us image"
                >
                  →
                </button>
              </div>
              <div
                className="about-carousel"
                ref={aboutScrollRef}
                aria-label="About Gulio Biz"
              >
                <div className="about-track">
                  {aboutSlides.map(([title, image], index) => (
                    <article
                      className="about-card"
                      key={`${title}-${index}`}
                      aria-label={title}
                    >
                      <img src={image} alt={title} className="about-image" />
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-content">
            <h2>Ready to work with us?</h2>
            <p>
              Get in touch and let us know how we can support your business.
            </p>
            <a href="tel:+255700000000" className="btn primary">
              Call Us
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-socials">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              📷
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="https://wa.me/255700000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              💬
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>

          <p>© 2026 Gulio Biz Company Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
