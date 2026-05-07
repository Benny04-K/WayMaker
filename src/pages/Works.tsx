import { useState, useEffect } from 'react';
import { useScrollReveal } from '../components/Visual';

interface WorksProps {
  onNavigate: (page: 'home' | 'works') => void;
  scrollTo: (id: string) => void;
}

type Category = 'All' | 'Corporate' | 'E-Commerce' | 'Static' | 'Custom';

const projects = [
  {
    title: 'Vertex Legal Associates',
    desc: 'Corporate law firm website with case studies, attorney profiles, practice areas, and a client intake portal with encrypted submission.',
    tags: ['Corporate', 'React'],
    category: 'Corporate' as Category,
    img: 'https://images.pexels.com/photos/5668481/pexels-photo-5668481.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    liveUrl: '#',
  },
  {
    title: 'Lumina Jewels',
    desc: 'Premium e-commerce platform for a luxury jewellery brand. 200+ SKUs, wishlist, custom size guide, and Razorpay checkout integration.',
    tags: ['E-Commerce', 'Razorpay'],
    category: 'E-Commerce' as Category,
    img: 'https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    liveUrl: '#',
  },
  {
    title: 'Helix Architecture Studio',
    desc: 'Ultra-minimal portfolio site for an architecture firm. Full-screen project gallery, scroll-driven animations, and a 100/100 Lighthouse score.',
    tags: ['Static', 'Animation'],
    category: 'Static' as Category,
    img: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    liveUrl: '#',
  },
  {
    title: 'NutriBox Subscriptions',
    desc: 'Health food subscription platform with plan selection, dietary filters, delivery scheduling, and a recurring billing system.',
    tags: ['E-Commerce', 'Subscriptions'],
    category: 'E-Commerce' as Category,
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    liveUrl: '#',
  },
  {
    title: 'BuildRight Constructions',
    desc: 'Construction company website with project timeline showcases, machinery specs, certifications section, and a multi-step tender enquiry form.',
    tags: ['Corporate', 'Multi-step Form'],
    category: 'Corporate' as Category,
    img: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    liveUrl: '#',
  },
  {
    title: 'Ember Coffee Roasters',
    desc: 'Brand-forward static site for an artisanal coffee roaster. Parallax scroll, custom bean origin map, and a subscription CTA that converts.',
    tags: ['Static', 'Brand'],
    category: 'Static' as Category,
    img: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    liveUrl: '#',
  },
  {
    title: 'Apex Talent Management',
    desc: 'Talent agency platform with artist roster, booking calendar integration, media kit downloads, and an admin dashboard for availability management.',
    tags: ['Custom', 'Dashboard'],
    category: 'Custom' as Category,
    img: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    liveUrl: '#',
  },
  {
    title: 'Seva Ayurveda Clinic',
    desc: 'Healthcare website with doctor profiles, appointment booking, treatment catalog, patient testimonials, and WhatsApp consultation flow.',
    tags: ['Corporate', 'Booking'],
    category: 'Corporate' as Category,
    img: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    liveUrl: '#',
  },
  {
    title: 'Shift Fitness Equipment',
    desc: 'D2C fitness equipment store with 3D product views, workout programme bundles, bulk order pricing tiers, and EMI gateway support.',
    tags: ['E-Commerce', 'D2C'],
    category: 'E-Commerce' as Category,
    img: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    liveUrl: '#',
  },
];

const featuredProject = {
  title: 'Meridian Capital Partners',
  subtitle: 'Private Equity Firm',
  desc: 'A flagship corporate identity website for a Mumbai-based private equity firm. Features include dynamic portfolio case studies, encrypted deal inquiry forms, investor relations dashboard, and an award-winning design that conveys authority and trust from the first scroll.',
  tech: ['React', 'TypeScript', 'Framer Motion', 'Supabase', 'Tailwind CSS'],
  img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  liveUrl: '#',
};

const categories: Category[] = ['All', 'Corporate', 'E-Commerce', 'Static', 'Custom'];

export default function Works({ onNavigate, scrollTo }: WorksProps) {
  const [filter, setFilter] = useState<Category>('All');
  const [visible, setVisible] = useState(false);
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      {/* HERO */}
      <section className="works-hero">
        <div className="pill-tag" style={{ animationDelay: '0s', opacity: visible ? 1 : 0, transition: 'opacity 0.6s' }}>Our Portfolio</div>
        <h1>Work That <span>Speaks</span></h1>
        <p>A curated showcase of websites and digital experiences we have built for businesses across India. Each project a story of craft, precision, and impact.</p>
      </section>

      {/* FEATURED */}
      <div className="featured-work">
        <div className="section-title fade-in-up" style={{ marginBottom: 32 }}>
          <div className="pill-tag">Featured Project</div>
          <h2>Case <span>Study</span></h2>
        </div>
        <div className="featured-card fade-in-up">
          <div className="featured-img-wrap">
            <img src={featuredProject.img} alt={featuredProject.title} className="featured-img" />
            <div className="featured-badge">Featured Work</div>
          </div>
          <div className="featured-content">
            <div className="featured-eyebrow">{featuredProject.subtitle}</div>
            <h2>{featuredProject.title.split(' ').slice(0, 2).join(' ')} <span>{featuredProject.title.split(' ').slice(2).join(' ')}</span></h2>
            <p>{featuredProject.desc}</p>
            <div className="featured-tech">
              {featuredProject.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
            </div>
            <div className="featured-links">
              <button className="btn-primary" style={{ fontSize: '0.85rem', padding: '11px 26px' }} onClick={() => { onNavigate('home'); setTimeout(() => scrollTo('contact'), 80); }}>
                Start Similar Project
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="filter-bar">
        {categories.map(c => (
          <button
            key={c}
            className={`filter-btn${filter === c ? ' active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* WORKS GRID */}
      <div className="works-grid">
        {filtered.map((p, i) => (
          <div
            key={p.title}
            className="work-card fade-in-up"
            style={{ transitionDelay: `${(i % 3) * 0.07}s` }}
          >
            <div className="work-img-wrap">
              <img src={p.img} alt={p.title} className="work-img" />
              <div className="work-img-overlay" />
              <div className="work-tag-wrap">
                {p.tags.map(t => <span key={t} className="work-tag">{t}</span>)}
              </div>
            </div>
            <div className="work-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="work-links">
                <button
                  className="work-link primary"
                  onClick={() => { onNavigate('home'); setTimeout(() => scrollTo('contact'), 80); }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  Similar Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA STRIP */}
      <section style={{ padding: '60px 6vw 100px', position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className="pill-tag">Ready?</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-1px', marginBottom: 16, marginTop: 12 }}>
            Your Project Could <span style={{ color: '#00e676' }}>Be Next</span>
          </h2>
          <p style={{ color: '#8899bb', lineHeight: 1.75, marginBottom: 36, fontSize: '0.95rem' }}>
            WayMaker Technologies is accepting new projects. Tell us about your vision and we will build something exceptional together.
          </p>
          <button
            className="btn-primary"
            onClick={() => { onNavigate('home'); setTimeout(() => scrollTo('contact'), 80); }}
          >
            Start Your Project
          </button>
        </div>
      </section>
    </>
  );
}
