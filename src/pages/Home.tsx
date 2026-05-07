import { useEffect } from 'react';
import { TiltCard, useScrollReveal } from '../components/Visual';
import ContactForm, { FaqItem } from '../components/ContactForm';

interface HomeProps {
  scrollTo: (id: string) => void;
  onNavigate: (page: 'home' | 'works') => void;
}

const premiumItems = [
  {
    eyebrow: 'Enterprise Tier',
    title: <>Bespoke <em>Corporate</em> Websites</>,
    desc: 'Engineered for companies that refuse to settle. Every pixel deliberate, every interaction choreographed. Your brand delivered at a standard that commands attention.',
    specs: [
      { label: 'Delivery', val: '10–14 Days' },
      { label: 'Pages', val: 'Unlimited' },
      { label: 'Support', val: '30 Days' },
      { label: 'Revisions', val: 'Unlimited' },
    ],
    bg: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'Corporate',
    num: '01',
    ctaLabel: 'Enquire Now',
    ctaId: 'contact',
  },
  {
    eyebrow: 'Performance Tier',
    title: <>Lightning-Fast <em>E-Commerce</em> Platforms</>,
    desc: 'Conversion-optimised storefronts built on modern stacks. From product discovery to checkout — every flow refined for maximum revenue per visitor.',
    specs: [
      { label: 'Products', val: 'Unlimited' },
      { label: 'Gateway', val: 'Integrated' },
      { label: 'Speed', val: 'Sub-2s Load' },
      { label: 'Mobile', val: '100% Ready' },
    ],
    bg: 'https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'E-Commerce',
    num: '02',
    ctaLabel: 'See Pricing',
    ctaId: 'pricing',
  },
  {
    eyebrow: 'Signature Tier',
    title: <>Premium <em>Static</em> Brand Experiences</>,
    desc: 'Ultra-fast, visually stunning static websites with cinematic animations. Ideal for agencies, studios, and luxury brands that want a digital presence as bold as their identity.',
    specs: [
      { label: 'Performance', val: '100 Score' },
      { label: 'Animations', val: 'Bespoke' },
      { label: 'Hosting', val: 'Global CDN' },
      { label: 'Tech', val: 'React + Vite' },
    ],
    bg: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    badge: 'Signature',
    num: '03',
    ctaLabel: 'Start Project',
    ctaId: 'contact',
  },
];

export default function Home({ scrollTo, onNavigate }: HomeProps) {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-badge"><span className="dot-green">●</span> Open to New Projects</div>
        <h1>
          We Build
          <span className="line2">Exceptional</span>
          <span className="line3">Digital Products.</span>
        </h1>
        <p className="hero-sub">
          WayMaker Technologies crafts high-performance websites and digital experiences for businesses ready to lead their market — transparent pricing, zero subscriptions.
        </p>
        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('pricing')}>View Packages</button>
          <button className="btn-outline" onClick={() => onNavigate('works')}>Our Work →</button>
        </div>
        <div className="hero-3d">
          {[
            ['3+', 'Years in Business'],
            ['40+', 'Projects Delivered'],
            ['100%', 'Custom Built'],
            ['0', 'Hidden Charges'],
          ].map(([n, l]) => (
            <TiltCard key={l} className="stat-chip">
              <div className="stat-num">{n}</div>
              <div className="stat-label">{l}</div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-title fade-in-up">
          <div className="pill-tag">What We Build</div>
          <h2>Services <span>Offered</span></h2>
          <p>End-to-end digital solutions crafted with precision for businesses that mean business</p>
        </div>
        <div className="cards-grid">
          {[
            { icon: '🖥️', cls: 'green', title: 'Corporate Websites', desc: 'Multi-page responsive corporate websites with mobile-first design, lead forms, and a professional identity that builds instant trust with your audience.' },
            { icon: '🛒', cls: 'purple', title: 'E-Commerce Platforms', desc: 'Complete online stores with unlimited products, payment gateway integration, order management, and conversion-optimised layouts.' },
            { icon: '⚡', cls: 'green', title: 'Premium Static Sites', desc: 'Blazing-fast static websites with cinematic animations, global CDN delivery, and near-perfect Lighthouse scores for brands that demand distinction.' },
            { icon: '📱', cls: 'purple', title: 'Mobile-First Design', desc: 'Every project built mobile-first and rigorously tested across all screen sizes — phones, tablets, and desktops for a flawless experience everywhere.' },
            { icon: '🔒', cls: 'green', title: 'Security & Hosting', desc: 'SSL certificates, secure hosting configuration, and performance hardening included in every engagement — from day one to launch.' },
            { icon: '📈', cls: 'purple', title: 'SEO & Performance', desc: 'Technical SEO foundations, structured data, lightning-fast load times, and Core Web Vitals optimisation to help you rank and convert.' },
          ].map(s => (
            <TiltCard key={s.title} className="service-card fade-in-up">
              <div className={`svc-icon ${s.cls}`}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </TiltCard>
          ))}
        </div>
      </section>
      
      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="section-title fade-in-up">
          <div className="pill-tag">Pricing</div>
          <h2>Simple, <span>Transparent</span> Packages</h2>
          <p>One-time investment. No subscriptions. No hidden charges. Ever.</p>
        </div>
        <div className="pricing-grid">
          <TiltCard className="price-card featured">
            <div className="price-badge">Most Popular</div>
            <h3>Business Website</h3>
            <div className="price-sub">One Time Payment</div>
            <div className="price-amount green">₹5999/-</div>
            <div className="price-for green">Perfect for Small Businesses</div>
            <ul className="feat-list">
              {['1–3 Pages Website', 'Additional Pages: ₹500/page', 'Mobile Responsive Design', 'Contact Form (Lead on Email)', 'WhatsApp Button', 'Basic SEO Setup', '1 Year Domain & Hosting', 'Free SSL Certificate (HTTPS)', 'Fast Loading & Optimized', '1 Week Free Support'].map(f => (
                <li key={f}><span className="ck">✓</span>{f}</li>
              ))}
            </ul>
            <button className="price-cta green" onClick={() => scrollTo('contact')}>Get Started</button>
            <div className="domain-box green-box"><span className="di">🌐</span><div><div className="dt g">Domain Included</div><div className="ds">1 Year Domain</div></div></div>
          </TiltCard>

          <TiltCard className="price-card">
            <h3>E-Commerce Store</h3>
            <div className="price-sub">One Time Payment</div>
            <div className="price-amount purple">₹11999/-</div>
            <div className="price-for purple">Complete Online Store Solution</div>
            <ul className="feat-list">
              {['Complete E-commerce Website', 'Up to 50 Products', 'Shopping Cart & Checkout', 'Payment Gateway Integration', 'Order Management', 'Mobile Responsive Design', 'SEO + Speed Optimisation', '1 Year Domain & Hosting', 'Free SSL Certificate (HTTPS)', '1 Week Free Support'].map(f => (
                <li key={f}><span className="ck">✓</span>{f}</li>
              ))}
            </ul>
            <button className="price-cta purple" onClick={() => scrollTo('contact')}>Get Started</button>
            <div className="domain-box purple-box"><span className="di">🌐</span><div><div className="dt p">Domain Included</div><div className="ds">1 Year Domain</div></div></div>
          </TiltCard>
        </div>
      </section>

      {/* PREMIUM — car design style */}
      <section className="premium" id="premium">
        <div className="section-title fade-in-up" style={{ padding: '0 6vw' }}>
          <div className="pill-tag">Signature Offerings</div>
          <h2>Premium <span>Experiences</span></h2>
          <p>Three tiers of digital excellence. Each crafted to a specification that sets the benchmark for your industry.</p>
        </div>

        <div className="premium-track">
          {premiumItems.map((item, i) => (
            <div key={item.num}>
              <div className={`premium-row${i % 2 === 1 ? ' reverse' : ''}`}>
                {/* Visual panel */}
                <div className="prem-visual">
                  <div className="prem-visual-inner">
                    <div
                      className="prem-visual-bg"
                      style={{ backgroundImage: `url(${item.bg})` }}
                    />
                    <div className="prem-visual-overlay" />
                    <div className="prem-visual-badge">{item.badge}</div>
                    <div className="prem-visual-num">{item.num}</div>
                  </div>
                </div>

                {/* Content panel */}
                <div className="prem-content">
                  <div className="prem-eyebrow">{item.eyebrow}</div>
                  <h2>{item.title}</h2>
                  <p className="prem-desc">{item.desc}</p>
                  <div className="prem-specs">
                    {item.specs.map(s => (
                      <div key={s.label} className="prem-spec">
                        <div className="prem-spec-label">{s.label}</div>
                        <div className="prem-spec-val">{s.val}</div>
                      </div>
                    ))}
                  </div>
                  <button
                    className="prem-cta"
                    onClick={() => scrollTo(item.ctaId)}
                  >
                    {item.ctaLabel}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              {i < premiumItems.length - 1 && <div className="premium-divider" />}
            </div>
          ))}
        </div>
      </section>

      

      {/* INFO STRIP */}
      <div className="info-strip fade-in-up">
        <div className="info-block">
          <div className="ib-title green">Post-Delivery Changes</div>
          <p>After delivery, updates and additions are handled on request. Pricing is based on scope — always discussed transparently upfront.</p>
        </div>
        <div className="info-block">
          <div className="ib-title purple">Why WayMaker?</div>
          <ul>
            {['Custom Design, Not Templates', 'One-Time Payment Model', 'Dedicated Project Manager', 'Full Source Code Ownership'].map(i => <li key={i}>{i}</li>)}
          </ul>
        </div>
        <div className="info-block">
          <div className="ib-title blue">Included in All Plans</div>
          <ul>
            {['1 Year Domain & Hosting', 'Free SSL Certificate', 'Mobile-First Responsive', 'Basic SEO Foundation', '1 Week Free Support'].map(i => <li key={i}>{i}</li>)}
          </ul>
        </div>
      </div>

      {/* SKILLS */}
      <section className="skills-sec" id="skills">
        <div className="section-title fade-in-up">
          <div className="pill-tag">Tech Stack</div>
          <h2>Built With <span>Modern</span> Technologies</h2>
          <p>Our engineering team works with the best tools in the industry</p>
        </div>
        <div className="skills-grid">
          {['React.js', 'TypeScript', 'JavaScript', 'HTML5 & CSS3', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Java', 'Spring Boot', 'Node.js', 'MySQL', 'Supabase', 'REST APIs', 'Figma'].map(s => (
            <div key={s} className="skill-tag">{s}</div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '90px 6vw', position: 'relative', zIndex: 2 }} id="faq">
        <div className="section-title fade-in-up">
          <div className="pill-tag">FAQ</div>
          <h2>Common <span>Questions</span></h2>
          <p>Everything you need to know before getting started</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 800, margin: '0 auto' }}>
          {[
            { q: 'How much does a business website cost?', a: <>Our business website starts at <strong style={{ color: '#e8eaf6', fontWeight: 500 }}>₹5999 — one-time payment</strong>. This includes 1 year domain & hosting, SSL, mobile-responsive design, contact form, WhatsApp button, and basic SEO. No monthly fees.</> },
            { q: "What's included in the e-commerce package?", a: <>The e-commerce package (<strong style={{ color: '#e8eaf6', fontWeight: 500 }}>₹11999, one-time</strong>) includes a complete online store with up to 50 products, shopping cart, payment gateway integration, order management, and full mobile optimisation.</> },
            { q: 'Are there any recurring charges?', a: <>No. All packages are a <strong style={{ color: '#e8eaf6', fontWeight: 500 }}>one-time payment</strong> with zero subscriptions. After year one, only domain & hosting renewal applies (typically ₹1000–1500/year).</> },
            { q: 'How long does delivery take?', a: <>Business websites are delivered in <strong style={{ color: '#e8eaf6', fontWeight: 500 }}>3–5 business days</strong>. E-commerce projects take 7–10 business days depending on scope and customisation required.</> },
            { q: 'Do you work with clients across India?', a: <>Yes. WayMaker Technologies works with clients <strong style={{ color: '#e8eaf6', fontWeight: 500 }}>across India</strong> entirely online. All communication, reviews, and delivery are handled digitally — fast and hassle-free.</> },
          ].map(({ q, a }) => <FaqItem key={q} q={q} a={a} />)}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-sec" id="contact">
        <div className="section-title fade-in-up">
          <div className="pill-tag">Get In Touch</div>
          <h2>Start Your <span>Project</span></h2>
        </div>
        <div className="contact-wrap fade-in-up">
          <h2 style={{ color: '#00e676' }}>Let's Build Together</h2>
          <p>Fill out the form and our team will get back to you within 24 hours with a tailored plan for your project.</p>
          <ContactForm />
          <div className="contact-links">
            <a href="tel:+918925617404" className="contact-link">+91 89256 17404</a>
            <a href="mailto:k.rojarbenny@gmail.com" className="contact-link">k.rojarbenny@gmail.com</a>
          </div>
        </div>
      </section>
    </>
  );
}
