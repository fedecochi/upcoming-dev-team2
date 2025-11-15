import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  /* --------- HERO cross-fade background --------- */
  const images = [
    "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1600&auto=format&fit=crop",
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [images.length]);

  /* --------- Featured preview content --------- */
  const featured = [
    {
      id: "ramen",
      name: "Smoky Chili Ramen",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      blurb:
        "Silky broth, springy noodles and a whisper of chili oil. Comfort with a kick.",
    },
    {
      id: "salmon",
      name: "Citrus Herb Salmon",
      img: "https://images.unsplash.com/photo-1546549039-49b3dfd82b77?q=80&w=1200&auto=format&fit=crop",
      blurb:
        "Pan-seared and bright with citrus glaze, paired with roasted garlic potatoes.",
    },
    {
      id: "vegbowl",
      name: "Rainbow Power Bowl",
      img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
      blurb:
        "Quinoa, roasted veg, avocado and tahini—plants doing the most, deliciously.",
    },
  ];

  return (
    <main className="home">
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="bg-stack" aria-hidden>
          {images.map((src, i) => (
            <div
              key={i}
              className={`bg ${i === idx ? "show" : ""}`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>

        <div className="hero-inner">
          <h1>Welcome to Mega-Bite</h1>
          <p className="tagline">Healthy meals to make your day.</p>
          <div className="hero-cta">
            <Link className="btn btn-primary" to="/meals">
              Explore our dishes…
            </Link>
            <Link className="btn btn-ghost" to="/about">
              Why choose us?
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <div className="strip">
        <span>🔥 Fresh menus weekly</span>
        <span>🚚 Same-day delivery</span>
        <span>🌿 Sustainable sourcing</span>
        <span>⭐ 4.9/5 customer love</span>
      </div>

      {/* ============ VALUE PROPS ============ */}
      <section className="section">
        <header className="section-head">
          <p className="eyebrow">Why Mega-Bite</p>
          <h2 className="title">Chef craft meets nutrition science</h2>
          <p className="sub">
            Our kitchens run on excellence—delicious, balanced meals prepared
            with seasonal ingredients and delivered fast.
          </p>
        </header>

        <div className="grid grid-3">
          <div className="card">
            <div className="icon">👨‍🍳</div>
            <h3>Chef-Led Menus</h3>
            <p>
              Weekly R&D, bold flavors and consistent execution. Classics you
              love and seasonal surprises you’ll crave.
            </p>
          </div>
          <div className="card">
            <div className="icon">🥗</div>
            <h3>Nutrition by Design</h3>
            <p>
              Balanced macros and clear labels—vegan, gluten-free, high-protein—
              so choosing well is effortless.
            </p>
          </div>
          <div className="card">
            <div className="icon">⚡</div>
            <h3>Frictionless Service</h3>
            <p>
              Order in a tap, pick up or get it delivered. Predictable wait
              times and reliably hot food.
            </p>
          </div>
        </div>
      </section>

      {/* ============ FEATURED MENU PREVIEW ============ */}
      <section className="section">
        <header className="section-head">
          <p className="eyebrow">Customer Favourites</p>
          <h2 className="title">A taste of the menu</h2>
          <p className="sub">
            Here’s what guests can’t stop talking about. See the full range on
            our menu page.
          </p>
        </header>

        <div className="grid grid-3">
          {featured.map((f) => (
            <article className="menu-card" key={f.id}>
              <img src={f.img} alt={f.name} loading="lazy" />
              <div className="menu-body">
                <h3>{f.name}</h3>
                <p>{f.blurb}</p>
                <Link to="/meals" className="btn btn-small">
                  View full menu
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="section muted">
        <header className="section-head">
          <p className="eyebrow">Simple & Fast</p>
          <h2 className="title">How it works</h2>
        </header>

        <ol className="steps">
          <li>
            <span className="bubble">1</span>
            <h4>Pick your craving</h4>
            <p>Browse by category or search directly on the meals page.</p>
          </li>
          <li>
            <span className="bubble">2</span>
            <h4>Customize portions</h4>
            <p>Use +/− to add exactly what you want, nothing more.</p>
          </li>
          <li>
            <span className="bubble">3</span>
            <h4>Cooked to order</h4>
            <p>Fresh ingredients, chef-led kitchens, quality you can taste.</p>
          </li>
          <li>
            <span className="bubble">4</span>
            <h4>Pickup or delivery</h4>
            <p>Track ETA and enjoy—hot, on time, and satisfying.</p>
          </li>
        </ol>
      </section>

      {/* ============ SERVICES PREVIEW ============ */}
      <section className="section">
        <header className="section-head">
          <p className="eyebrow">More than a restaurant</p>
          <h2 className="title">Programs & Services</h2>
        </header>

        <div className="grid grid-3">
          <div className="tile">
            <h3>Corporate Meal Programs</h3>
            <p>
              Rotating menus, allergy-safe labeling and analytics to keep teams
              energized and budgets tight.
            </p>
            <Link to="/services" className="link">Learn more →</Link>
          </div>
          <div className="tile">
            <h3>Event Catering</h3>
            <p>
              Chef-attended stations or boxed elegance for 20–2,000 guests. We
              handle rentals and staffing.
            </p>
            <Link to="/services" className="link">Learn more →</Link>
          </div>
          <div className="tile">
            <h3>Subscription Meal Plans</h3>
            <p>
              Dietitian-approved plans: Vegan, Gluten-Free, High-Protein. Weekly
              delivery, pause anytime.
            </p>
            <Link to="/services" className="link">Learn more →</Link>
          </div>
        </div>
      </section>

      {/* ============ SOCIAL PROOF ============ */}
      <section className="section">
        <header className="section-head">
          <p className="eyebrow">Guests Say</p>
          <h2 className="title">4.9/5 from happy eaters</h2>
        </header>

        <div className="grid grid-3">
          <blockquote className="quote">
            “The salmon is restaurant-quality every single time. Delivery is
            fast and the packaging is smart.” <span>— Dana K.</span>
          </blockquote>
          <blockquote className="quote">
            “Our office switched to Mega-Bite. Zero waste, huge variety, and my
            team actually eats the salads.” <span>— Rafael P.</span>
          </blockquote>
          <blockquote className="quote">
            “Vegan options that don’t feel like a compromise. The power bowl
            slaps.” <span>— Mimi T.</span>
          </blockquote>
        </div>
      </section>

      {/* ============ NEWSLETTER / INVEST CTA ============ */}
      <section className="section banner">
        <div className="banner-inner">
          <h3>Scaling flavor responsibly</h3>
          <p>
            We’re expanding with a hub-and-spoke kitchen model, zero-waste
            targets and compounding unit economics.
          </p>
          <a className="btn btn-primary" href="mailto:partners@megabites.example">
            Partner with us
          </a>
        </div>
      </section>
    </main>
  );
}
