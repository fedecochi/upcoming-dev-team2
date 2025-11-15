import { useMemo, useState } from "react";
import "./Meals.css";

const CATEGORIES = ["All","Breakfast","Lunch","Dinner","Dessert","Vegan","Gluten-Free","Seafood"];

const MENU = [
  { id:"ramen", name:"Smoky Chili Ramen", category:"Dinner", price:14.5,
    img:"https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    desc:"Silky broth, springy noodles, flame-kissed pork and a whisper of chili oil." },
  { id:"avo", name:"Sourdough Avo Toast", category:"Breakfast", price:9.75,
    img:"https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop",
    desc:"Thick-cut sourdough, smashed avocado, lemon zest and seed confetti." },
  { id:"salmon", name:"Citrus Herb Salmon", category:"Dinner", price:18.9,
    img:"https://images.unsplash.com/photo-1546549039-49b3dfd82b77?q=80&w=1200&auto=format&fit=crop",
    desc:"Pan-seared salmon, bright citrus glaze and roasted garlic potatoes." },
  { id:"vegbowl", name:"Rainbow Power Bowl", category:"Vegan", price:12.4,
    img:"https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
    desc:"Quinoa, roasted veg, avocado, crunchy chickpeas and tahini drizzle." },
  { id:"tacos", name:"Crispy Shrimp Tacos", category:"Lunch", price:13.6,
    img:"https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1200&auto=format&fit=crop",
    desc:"Juicy shrimp, lime-slaw and chipotle crema in warm tortillas." },
  { id:"pancakes", name:"Buttermilk Cloud Pancakes", category:"Dessert", price:8.5,
    img:"https://images.unsplash.com/photo-1551024709-8f23befc6cf7?q=80&w=1200&auto=format&fit=crop",
    desc:"Fluffy stacks with vanilla butter and real maple." },
  { id:"gf-bowl", name:"Lemon Chicken Grain Bowl", category:"Gluten-Free", price:13.9,
    img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
    desc:"Citrusy grilled chicken, ancient grains and greens with herby yogurt." },
  { id:"poke", name:"Ahi Poke Bowl", category:"Seafood", price:16.2,
    img:"https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1200&auto=format&fit=crop",
    desc:"Sashimi-grade tuna, sesame rice, mango and cucumber crunch." },
];

export default function Meals(){
  const [query,setQuery] = useState("");
  const [active,setActive] = useState("All");
  const [open,setOpen] = useState(false);
  const [qty,setQty] = useState({});

  const suggestions = useMemo(() => {
    const names = MENU.map(m=>m.name);
    return [...new Set([...CATEGORIES, ...names])];
  },[]);

  const filtered = useMemo(()=>{
    return MENU.filter(m=>{
      const catOk = active==="All" || m.category===active;
      const q = query.trim().toLowerCase();
      const qOk = !q || m.name.toLowerCase().includes(q) || m.category.toLowerCase().includes(q);
      return catOk && qOk;
    });
  },[active,query]);

  const bump = (id,delta)=> setQty(q=>({ ...q, [id]: Math.max(0, (q[id]||0)+delta)}));

  return (
    <section className="meals-page">
      <header className="m-head">
        <h2>Meals that make you smile</h2>
        <p>Search a craving, filter by category, then add portions below.</p>
      </header>

      <div className="toolbar">
        <div className="search">
          <input
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="Search by dish or category…"
            onFocus={()=>setOpen(true)}
          />
          <button type="button" onClick={()=>setOpen(v=>!v)}>Search</button>
          <ul className={`suggestions ${open ? "show":""}`}>
            {suggestions
              .filter(s=>s.toLowerCase().includes(query.toLowerCase()))
              .map(s=>(
                <li key={s} onClick={()=>{ setQuery(s); setOpen(false); }}>
                  {s}
                </li>
              ))}
          </ul>
        </div>

        <div className="chips">
          {CATEGORIES.map(c=>(
            <button key={c}
              className={`chip ${c===active?"active":""}`}
              onClick={()=>setActive(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {filtered.map(m=>(
          <article className="card" key={m.id}>
            <img src={m.img} alt={m.name} loading="lazy" />
            <div className="card-body">
              <div className="card-top">
                <h3>{m.name}</h3>
                <span className="badge">{m.category}</span>
              </div>
              <p className="desc">{m.desc}</p>
              <div className="price-row">
                <span className="price">${m.price.toFixed(2)}</span>
                <div className="qty">
                  <button aria-label="decrease" onClick={()=>bump(m.id,-1)}>-</button>
                  <span className="count">{qty[m.id]||0}</span>
                  <button aria-label="increase" onClick={()=>bump(m.id,1)}>+</button>
                </div>
              </div>
            </div>
          </article>
        ))}
        {filtered.length===0 && <div className="empty">No meals found. Try a different search or category.</div>}
      </div>
    </section>
  );
}
