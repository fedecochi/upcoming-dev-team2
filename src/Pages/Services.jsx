import "./Services.css";

export default function Services(){
  return (
    <section className="services">
      <header className="s-head">
        <h2>Services</h2>
        <p>From everyday meals to high-touch culinary programs, Mega-Bite scales deliciously.</p>
      </header>

      <div className="s-grid">
        <article className="s-card">
          <h3>Corporate Meal Programs</h3>
          <p>Custom rotating menus, allergy-safe labeling, and analytics on preference & waste to keep teams energized and budgets tight.</p>
        </article>

        <article className="s-card">
          <h3>Event Catering</h3>
          <p>Chef-attended stations or boxed elegance for 20–2,000 guests. We handle rentals, staffing and timeline choreography.</p>
        </article>

        <article className="s-card">
          <h3>Subscription Meal Plans</h3>
          <p>Dietitian-approved plans (Vegan, Gluten-Free, High-Protein). Weekly delivery, pause anytime, edit with one click.</p>
        </article>

        <article className="s-card">
          <h3>Pop-Up Kitchens</h3>
          <p>Short-term experiences to validate markets fast. We bring the brand, permits and portable kitchen workflow.</p>
        </article>
      </div>
    </section>
  );
}
