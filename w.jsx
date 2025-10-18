import React from "react";

// W.Details - Single-file React component (Tailwind CSS assumed)
// Default export: App component
// Features: Home, Services, Pricing, Gallery, About, Contact, Booking form (front-end), SEO meta, JSON-LD, mobile-first responsive design

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Head />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <QuickServices />
        <Services />
        <Pricing />
        <Gallery />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

/* ----------------------
   Head (SEO + JSON-LD)
   ---------------------- */
function Head() {
  return (
    <>
      <title>W.Details | Professional Car Detailing in Newport, South Wales</title>
      <meta name="description" content="W.Details offers mobile and workshop car detailing in Newport, Cardiff, Cwmbran and surrounding South Wales. Mini valets, full valets, paint correction, ceramic coatings." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          "name": "W.Details",
          "description": "Mobile and workshop car detailing in Newport, South Wales. Valets, paint correction, ceramic coatings.",
          "url": "https://yourdomain.com",
          "telephone": "+44 7XXX XXXXXX",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Newport",
            "addressRegion": "Wales",
            "addressCountry": "UK"
          },
          "areaServed": ["Newport","Cardiff","Cwmbran","Chepstow"]
        })}
      </script>
    </>
  );
}

/* ----------------------
   Header
   ---------------------- */
function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Replace with your logo */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">W</div>
          <div>
            <h1 className="text-xl font-semibold">W.Details</h1>
            <p className="text-xs text-gray-500">Mobile Car Detailing • Newport, South Wales</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#services" className="hover:text-indigo-600">Services</a>
          <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
          <a href="#gallery" className="hover:text-indigo-600">Gallery</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
          <a href="#book" className="bg-indigo-600 text-white px-3 py-2 rounded text-sm">Book Now</a>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="p-2 rounded border">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5h14v2H3V5zm0 4h14v2H3V9zm0 4h14v2H3v-2z" clipRule="evenodd" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded shadow p-4 z-50">
          <a href="#services" className="block py-2">Services</a>
          <a href="#pricing" className="block py-2">Pricing</a>
          <a href="#gallery" className="block py-2">Gallery</a>
          <a href="#about" className="block py-2">About</a>
          <a href="#contact" className="block py-2">Contact</a>
          <a href="#book" className="block py-2 font-semibold">Book Now</a>
        </div>
      )}
    </div>
  );
}

/* ----------------------
   Hero
   ---------------------- */
function Hero() {
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="md:flex md:items-center md:gap-8">
        <div className="md:flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold">W.Details — Mobile Car Detailing in Newport</h2>
          <p className="mt-4 text-gray-600">Professional valet & detailing services. From a quick mini valet to full paint correction and ceramic coatings — we bring the shine to your door.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#book" className="bg-indigo-600 text-white px-4 py-2 rounded">Book Now</a>
            <a href="#services" className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded">View Services</a>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <strong>Service areas:</strong> Newport, Cardiff, Cwmbran, Chepstow.
          </div>
        </div>

        <div className="md:w-96 mt-6 md:mt-0">
          <div className="w-full h-56 rounded-lg bg-gray-100 border-dashed border-2 border-gray-200 flex items-center justify-center text-gray-400">Hero image / logo</div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------
   Quick Services cards
   ---------------------- */
function QuickServices() {
  const items = [
    { title: "Mini Valet", desc: "Quick wash, vacuum, glass & tyres dressed", price: "From £40" },
    { title: "Full Valet", desc: "Interior deep clean + exterior protect", price: "From £80" },
    { title: "Premium Detail", desc: "Clay, polish, sealant / ceramic options", price: "From £150" },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {items.map((it) => (
        <article key={it.title} className="bg-white rounded shadow p-4">
          <h3 className="font-semibold">{it.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{it.desc}</p>
          <div className="mt-4 font-bold">{it.price}</div>
        </article>
      ))}
    </section>
  );
}

/* ----------------------
   Services section
   ---------------------- */
function Services() {
  const services = [
    {
      id: "mini",
      name: "Mini Valet",
      details: ["Pre-wash & snow foam", "Two-bucket hand wash", "Interior vacuum", "Glass & tyre dressing"],
      price: "From £40",
    },
    {
      id: "full",
      name: "Full Valet",
      details: ["Deep interior clean", "Full exterior decontamination", "Sealant or wax finish"],
      price: "From £80",
    },
    {
      id: "premium",
      name: "Premium Detail",
      details: ["Clay / iron decontamination", "Single-stage polish", "Interior shampoo & protection"],
      price: "From £150",
    },
    {
      id: "ceramic",
      name: "Ceramic Coating",
      details: ["Full paint prep", "Professional-grade ceramic coatings", "1–5 year durability options"],
      price: "From £300",
    },
  ];

  return (
    <section id="services" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Services</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.id} className="bg-white rounded shadow p-6">
            <h3 className="font-semibold text-lg">{s.name}</h3>
            <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
              {s.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <div className="font-bold">{s.price}</div>
              <a href="#book" className="text-indigo-600 underline">Book</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------
   Pricing (detailed table)
   ---------------------- */
function Pricing() {
  const rows = [
    { service: "Mini Valet", small: "£40", medium: "£55", large: "£70" },
    { service: "Full Valet", small: "£80", medium: "£100", large: "£120" },
    { service: "Premium Detail", small: "£150", medium: "£180", large: "£220" },
    { service: "Enhancement Polish", small: "£200", medium: "£250", large: "£300" },
    { service: "Ceramic Coating (1–3yr)", small: "£300", medium: "£400", large: "£550" },
  ];

  return (
    <section id="pricing" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Pricing</h2>
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Service</th>
              <th className="p-3">Small</th>
              <th className="p-3">Medium</th>
              <th className="p-3">Large / SUV</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.service} className="border-t">
                <td className="p-3">{r.service}</td>
                <td className="p-3">{r.small}</td>
                <td className="p-3">{r.medium}</td>
                <td className="p-3">{r.large}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ----------------------
   Gallery
   ---------------------- */
function Gallery() {
  const pics = new Array(6).fill(0).map((_, i) => ({ id: i, title: `Before / After ${i + 1}` }));
  return (
    <section id="gallery" className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {pics.map((p) => (
          <div key={p.id} className="bg-white rounded overflow-hidden shadow">
            <div className="w-full h-40 bg-gray-100 flex items-center justify-center text-gray-400">Image {p.id + 1}</div>
            <div className="p-3 text-sm text-gray-600">{p.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------
   About
   ---------------------- */
function About() {
  return (
    <section id="about" className="mb-12 bg-white rounded shadow p-6">
      <h2 className="text-2xl font-bold mb-2">About W.Details</h2>
      <p className="text-gray-700">W.Details is a local car detailing business founded by Wasif in Newport, South Wales. We deliver mobile detailing and workshop-based services for customers who want showroom-quality results without the hassle. Our team focuses on safe wash techniques, paint protection, and customer care.</p>

      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Our Promise</h4>
          <p className="text-sm text-gray-600 mt-2">High-quality finishes, honest pricing, punctual service.</p>
        </div>
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Products</h4>
          <p className="text-sm text-gray-600 mt-2">We use proven professional products and follow safe detailing methods.</p>
        </div>
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Coverage</h4>
          <p className="text-sm text-gray-600 mt-2">Mobile detailing across Newport, Cardiff, Cwmbran, and nearby towns.</p>
        </div>
      </div>
    </section>
  );
}

/* ----------------------
   Testimonials (placeholder)
   ---------------------- */
function Testimonials() {
  const items = [
    { id: 1, text: "Fantastic job — car looked brand new!", author: "Tom, Newport" },
    { id: 2, text: "Professional and easy to book. Very satisfied.", author: "Aisha, Cwmbran" },
  ];
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">What customers say</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((t) => (
          <blockquote key={t.id} className="bg-white rounded shadow p-4 text-gray-700">“{t.text}” — <span className="font-semibold">{t.author}</span></blockquote>
        ))}
      </div>
    </section>
  );
}

/* ----------------------
   Contact & Booking
   ---------------------- */
function Contact() {
  return (
    <section id="contact" className="mb-12 bg-white rounded shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Contact & Book</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-gray-700">To book a service, request a quote, or ask a question, use the form or contact us directly.</p>
          <ul className="mt-4 text-sm text-gray-600">
            <li><strong>Phone:</strong> +44 7XXX XXXXXX</li>
            <li><strong>Email:</strong> <a href="mailto:hello@wdetails.co.uk" className="text-indigo-600">hello@wdetails.co.uk</a></li>
            <li><strong>Areas:</strong> Newport, Cardiff, Cwmbran, Chepstow</li>
          </ul>

          <div className="mt-6">
            <h4 className="font-semibold">Opening hours</h4>
            <p className="text-sm text-gray-600 mt-2">Mon–Sat: 8:00 – 18:00<br/>Sun: Closed / By appointment</p>
          </div>
        </div>

        <div>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const [state, setState] = React.useState({ name: "", phone: "", email: "", service: "Full Valet", date: "", notes: "" });
  function update(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }
  function submit(e) {
    e.preventDefault();
    // Front-end: open mailto with data. Replace with API/webhook in production.
    const subject = encodeURIComponent(`W.Details booking request from ${state.name}`);
    const body = encodeURIComponent(`Name: ${state.name}\nPhone: ${state.phone}\nEmail: ${state.email}\nService: ${state.service}\nPreferred date: ${state.date}\nNotes: ${state.notes}`);
    window.location.href = `mailto:hello@wdetails.co.uk?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={submit} id="book" className="space-y-3">
      <div>
        <label className="block text-sm">Name</label>
        <input name="name" value={state.name} onChange={update} className="w-full border rounded px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm">Phone</label>
        <input name="phone" value={state.phone} onChange={update} className="w-full border rounded px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm">Email</label>
        <input name="email" type="email" value={state.email} onChange={update} className="w-full border rounded px-3 py-2" required />
      </div>
      <div>
        <label className="block text-sm">Service</label>
        <select name="service" value={state.service} onChange={update} className="w-full border rounded px-3 py-2">
          <option>Mini Valet</option>
          <option>Full Valet</option>
          <option>Premium Detail</option>
          <option>Ceramic Coating</option>
        </select>
      </div>
      <div>
        <label className="block text-sm">Preferred date</label>
        <input name="date" type="date" value={state.date} onChange={update} className="w-full border rounded px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm">Notes</label>
        <textarea name="notes" value={state.notes} onChange={update} className="w-full border rounded px-3 py-2" rows={3}></textarea>
      </div>
      <div>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Send booking request</button>
      </div>
    </form>
  );
}

/* ----------------------
   Footer
   ---------------------- */
function Footer() {
  return (
    <footer className="mt-12 py-8 text-sm text-gray-600">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">W</div>
              <div>
                <div className="font-semibold">W.Details</div>
                <div className="text-xs">Mobile Car Detailing • Newport</div>
              </div>
            </div>

            <div className="mt-4">
              <p>Phone: +44 7XXX XXXXXX</p>
              <p>Email: hello@wdetails.co.uk</p>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Quick links</h4>
                <ul className="text-sm mt-2">
                  <li><a href="#services">Services</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Social</h4>
                <ul className="text-sm mt-2">
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} W.Details. All rights reserved.</div>
      </div>
    </footer>
  );
}
