import "./About.css";

export default function About(){
  return (
    <section className="about">
      <header className="a-head">
        <h2>About Mega-Bite</h2>
        <p>We build a modern food company where chef craft meets nutrition science and operational excellence.</p>
      </header>

      <div className="a-grid">
        <div className="a-card">
          <h3>Chef-Led, Data-Informed</h3>
          <p>Weekly prototyping with live customer feedback and sales telemetry. Menus evolve like software—small releases, frequent wins.</p>
        </div>
        <div className="a-card">
          <h3>Sourcing with Impact</h3>
          <p>Seasonal, local produce with regenerative farm partners. Better soil, fewer emissions, brighter flavor.</p>
        </div>
        <div className="a-card">
          <h3>Nutrition by Design</h3>
          <p>Balanced macros, fiber and micros. Clear labels (vegan, gluten-free, seafood) make healthy choices effortless.</p>
        </div>
        <div className="a-card">
          <h3>Operational Excellence</h3>
          <p>Lean kitchens: standardized mise en place, predictive prep, and waste tracking. Faster service, consistent quality.</p>
        </div>
      </div>

      <section className="invest">
        <h3>For Investors & Partners</h3>
        <ul>
          <li>Hub-and-spoke kitchen model with attractive unit economics</li>
          <li>Zero-waste targets and supplier scorecards</li>
          <li>Technology-forward ordering & demand forecasting</li>
          <li>Community programs that develop culinary talent</li>
        </ul>
        <a className="cta-invest" href="mailto:partners@megabites.example">Contact Partnerships</a>
      </section>
    </section>
  );
}
