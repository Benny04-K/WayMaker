export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #050a18; color: #e8eaf6; font-family: 'DM Sans', sans-serif; overflow-x: hidden; cursor: none; }

  /* ── CURSOR ── */
  .cursor { width: 14px; height: 14px; background: #00e676; border-radius: 50%; position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9999; transform: translate(-50%,-50%); mix-blend-mode: difference; transition: background 0.2s; }
  .cursor-ring { width: 40px; height: 40px; border: 1.5px solid #00e676; border-radius: 50%; position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9998; transform: translate(-50%,-50%); transition: left 0.15s ease, top 0.15s ease; opacity: 0.5; }

  /* ── CANVAS / BACKGROUND ── */
  #stars-canvas { position: fixed; inset: 0; z-index: 0; pointer-events: none; }
  .grid-overlay { position: fixed; inset: 0; z-index: 0; pointer-events: none; background-image: linear-gradient(rgba(124,77,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,77,255,0.04) 1px, transparent 1px); background-size: 60px 60px; }
  .orb { position: fixed; border-radius: 50%; filter: blur(90px); pointer-events: none; z-index: 0; opacity: 0.13; }
  .orb1 { width: 600px; height: 600px; background: #7c4dff; top: -200px; left: -200px; }
  .orb2 { width: 500px; height: 500px; background: #00e676; bottom: -100px; right: -100px; }

  /* ── NAV ── */
  nav {
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 6vw; height: 68px;
    border-bottom: 1px solid rgba(124,77,255,0.2);
    background: rgba(5,10,24,0.94);
    backdrop-filter: blur(20px);
    position: sticky; top: 0; z-index: 100;
  }
  .logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.2rem; letter-spacing: -0.5px; white-space: nowrap; text-decoration: none; color: #e8eaf6; }
  .logo span { color: #00e676; }
  .logo .tm { font-size: 0.55rem; color: #8899bb; vertical-align: super; margin-left: 1px; font-weight: 400; }
  .nav-links { display: flex; gap: 34px; list-style: none; }
  .nav-links a { color: #8899bb; text-decoration: none; font-size: 0.86rem; font-weight: 500; transition: color 0.2s; letter-spacing: 0.2px; }
  .nav-links a:hover, .nav-links a.active { color: #00e676; }
  .nav-cta {
    background: linear-gradient(135deg, #00e676, #7c4dff); color: #000;
    font-weight: 700; font-size: 0.83rem; padding: 9px 24px;
    border-radius: 50px; text-decoration: none; letter-spacing: 0.5px;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 0 20px rgba(0,230,118,0.3); cursor: pointer; border: none;
    white-space: nowrap; font-family: 'Syne', sans-serif;
  }
  .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 0 36px rgba(0,230,118,0.5); }

  /* Mobile nav */
  .nav-hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 6px; background: none; border: none; }
  .nav-hamburger span { display: block; width: 24px; height: 2px; background: #e8eaf6; border-radius: 2px; transition: transform 0.3s, opacity 0.3s; }
  .nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .nav-hamburger.open span:nth-child(2) { opacity: 0; }
  .nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  .nav-drawer { display: none; position: fixed; top: 68px; left: 0; right: 0; background: rgba(5,10,24,0.98); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(124,77,255,0.2); z-index: 99; padding: 20px 6vw 28px; flex-direction: column; gap: 6px; animation: drawerIn 0.2s ease; }
  .nav-drawer.open { display: flex; }
  .nav-drawer a { color: #8899bb; text-decoration: none; font-size: 1rem; font-weight: 500; padding: 12px 0; border-bottom: 1px solid rgba(124,77,255,0.12); transition: color 0.2s; }
  .nav-drawer a:last-of-type { border-bottom: none; }
  .nav-drawer a:hover { color: #00e676; }
  .nav-drawer .drawer-cta { margin-top: 12px; background: linear-gradient(135deg, #00e676, #7c4dff); color: #000; font-weight: 700; font-size: 0.95rem; padding: 14px; border-radius: 50px; text-align: center; cursor: pointer; border: none; font-family: 'Syne', sans-serif; letter-spacing: 0.5px; }
  @keyframes drawerIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }

  /* ── SHARED SECTIONS ── */
  section { position: relative; z-index: 2; }
  .section-title { text-align: center; margin-bottom: 56px; }
  .section-title h2 { font-family: 'Syne', sans-serif; font-size: clamp(1.9rem, 4vw, 3.2rem); font-weight: 800; letter-spacing: -1px; }
  .section-title h2 span { color: #00e676; }
  .section-title p { color: #8899bb; margin-top: 12px; font-size: 0.95rem; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.7; }
  .pill-tag { display: inline-block; background: rgba(0,230,118,0.08); border: 1px solid rgba(0,230,118,0.2); color: #00e676; font-size: 0.72rem; padding: 6px 16px; border-radius: 50px; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px; }

  /* ── HERO ── */
  .hero { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 100px 6vw 80px; position: relative; z-index: 2; }
  .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(124,77,255,0.1); border: 1px solid rgba(124,77,255,0.25); border-radius: 50px; padding: 8px 20px; font-size: 0.76rem; color: #b388ff; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 28px; animation: fadeUp 0.8s ease both; }
  .dot-green { color: #00e676; font-size: 0.55rem; }
  .hero h1 { font-family: 'Syne', sans-serif; font-size: clamp(2.8rem, 9vw, 7rem); font-weight: 800; line-height: 0.95; letter-spacing: -2px; animation: fadeUp 0.9s 0.1s ease both; }
  .line2 { display: block; color: #00e676; }
  .line3 { display: block; background: linear-gradient(90deg, #b388ff, #00e676); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .hero-sub { max-width: 580px; color: #8899bb; font-size: 1rem; line-height: 1.75; margin-top: 24px; animation: fadeUp 1s 0.2s ease both; }
  .hero-btns { display: flex; gap: 14px; margin-top: 40px; justify-content: center; animation: fadeUp 1s 0.3s ease both; }
  .btn-primary { background: #00e676; color: #000; font-weight: 700; padding: 14px 34px; border-radius: 50px; font-size: 0.95rem; box-shadow: 0 0 40px rgba(0,230,118,0.4); transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; border: none; font-family: 'Syne', sans-serif; }
  .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 0 60px rgba(0,230,118,0.6); }
  .btn-outline { border: 1px solid rgba(124,77,255,0.35); color: #b388ff; font-weight: 600; padding: 14px 34px; border-radius: 50px; font-size: 0.95rem; transition: background 0.2s, border-color 0.2s; cursor: pointer; background: transparent; }
  .btn-outline:hover { background: rgba(124,77,255,0.1); border-color: #b388ff; }

  .hero-3d { margin-top: 64px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; width: 100%; max-width: 720px; animation: fadeUp 1s 0.5s ease both; }
  .stat-chip { background: #0d1a30; border: 1px solid rgba(124,77,255,0.25); border-radius: 18px; padding: 20px 16px; text-align: center; transition: transform 0.3s ease, box-shadow 0.3s; box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05); }
  .stat-chip:hover { box-shadow: 12px 16px 40px rgba(0,0,0,0.6), 0 0 20px rgba(0,230,118,0.15); }
  .stat-num { font-family: 'Syne', sans-serif; font-size: 1.9rem; font-weight: 800; color: #00e676; }
  .stat-label { font-size: 0.72rem; color: #8899bb; margin-top: 4px; line-height: 1.3; }

  /* ── SERVICES ── */
  .services { padding: 100px 6vw; }
  .cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
  .service-card { background: #0d1a30; border: 1px solid rgba(124,77,255,0.25); border-radius: 20px; padding: 32px 28px; transition: transform 0.3s ease, box-shadow 0.3s, border-color 0.3s; box-shadow: 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04); position: relative; overflow: hidden; }
  .service-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, #00e676, #7c4dff); transform: scaleX(0); transition: transform 0.3s; transform-origin: left; }
  .service-card:hover { border-color: rgba(124,77,255,0.5); box-shadow: 10px 14px 40px rgba(0,0,0,0.5), 0 0 30px rgba(0,230,118,0.08); }
  .service-card:hover::before { transform: scaleX(1); }
  .svc-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; margin-bottom: 20px; }
  .svc-icon.green { background: rgba(0,230,118,0.12); }
  .svc-icon.purple { background: rgba(124,77,255,0.12); }
  .service-card h3 { font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 700; margin-bottom: 10px; }
  .service-card p { color: #8899bb; font-size: 0.85rem; line-height: 1.7; }

  /* ── PREMIUM SECTION (car-design style) ── */
  .premium { padding: 120px 0; position: relative; z-index: 2; overflow: hidden; }
  .premium-track { display: flex; flex-direction: column; gap: 0; }

  .premium-row {
    display: grid; grid-template-columns: 1fr 1fr;
    min-height: 520px; position: relative;
  }
  .premium-row.reverse { direction: rtl; }
  .premium-row.reverse > * { direction: ltr; }

  .prem-visual {
    position: relative; overflow: hidden;
    background: #080f1e;
  }
  .prem-visual-inner {
    width: 100%; height: 100%; min-height: 520px;
    display: flex; align-items: center; justify-content: center;
    position: relative;
  }
  .prem-visual-bg {
    position: absolute; inset: 0;
    background-size: cover; background-position: center;
    transition: transform 8s ease;
    filter: brightness(0.45) saturate(1.1);
  }
  .premium-row:hover .prem-visual-bg { transform: scale(1.04); }
  .prem-visual-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(5,10,24,0.5) 0%, transparent 100%);
  }
  .prem-visual-badge {
    position: absolute; top: 28px; left: 28px;
    background: rgba(0,230,118,0.12); border: 1px solid rgba(0,230,118,0.3);
    border-radius: 50px; padding: 6px 16px;
    font-size: 0.7rem; color: #00e676; letter-spacing: 1.5px; text-transform: uppercase;
    z-index: 2; font-family: 'Syne', sans-serif; font-weight: 600;
  }
  .prem-visual-num {
    position: absolute; bottom: 28px; right: 28px;
    font-family: 'Syne', sans-serif; font-size: 5rem; font-weight: 800;
    color: rgba(255,255,255,0.07); line-height: 1; z-index: 2; letter-spacing: -4px;
    user-select: none;
  }

  .prem-content {
    background: #080f1e; padding: 64px 60px;
    display: flex; flex-direction: column; justify-content: center;
    border-left: 1px solid rgba(124,77,255,0.15);
    position: relative; overflow: hidden;
  }
  .premium-row.reverse .prem-content { border-left: none; border-right: 1px solid rgba(124,77,255,0.15); }
  .prem-content::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0,230,118,0.3), transparent);
  }
  .prem-eyebrow { font-size: 0.72rem; letter-spacing: 2px; text-transform: uppercase; color: #00e676; font-family: 'Syne', sans-serif; font-weight: 700; margin-bottom: 14px; }
  .prem-content h2 { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 2.8vw, 2.6rem); font-weight: 800; letter-spacing: -1px; line-height: 1.1; margin-bottom: 20px; }
  .prem-content h2 em { font-style: normal; color: #00e676; }
  .prem-desc { color: #8899bb; font-size: 0.92rem; line-height: 1.8; margin-bottom: 32px; max-width: 420px; }
  .prem-specs { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 36px; }
  .prem-spec { padding: 14px 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(124,77,255,0.18); border-radius: 12px; }
  .prem-spec-label { font-size: 0.68rem; color: #8899bb; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 4px; }
  .prem-spec-val { font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 700; color: #e8eaf6; }
  .prem-cta { display: inline-flex; align-items: center; gap: 10px; background: none; border: 1px solid rgba(0,230,118,0.35); color: #00e676; font-family: 'Syne', sans-serif; font-weight: 700; font-size: 0.85rem; padding: 13px 26px; border-radius: 50px; cursor: pointer; letter-spacing: 0.5px; transition: all 0.25s; width: fit-content; }
  .prem-cta:hover { background: rgba(0,230,118,0.1); border-color: #00e676; transform: translateX(4px); }
  .prem-cta svg { transition: transform 0.25s; }
  .prem-cta:hover svg { transform: translateX(4px); }

  /* Premium divider line */
  .premium-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(124,77,255,0.3), rgba(0,230,118,0.3), transparent);
  }

  /* ── PRICING ── */
  .pricing { padding: 100px 6vw; }
  .pricing-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; max-width: 880px; margin: 0 auto; }
  .price-card { background: #0d1a30; border: 1px solid rgba(124,77,255,0.25); border-radius: 24px; padding: 42px 38px; transition: transform 0.3s ease, box-shadow 0.3s; box-shadow: 0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04); position: relative; }
  .price-card.featured { border-color: rgba(0,230,118,0.35); box-shadow: 0 12px 50px rgba(0,0,0,0.5), 0 0 40px rgba(0,230,118,0.1); }
  .price-card:hover { transform: translateY(-6px) rotateX(3deg); }
  .price-badge { display: inline-block; background: linear-gradient(90deg, #00e676, #7c4dff); color: #000; font-size: 0.7rem; font-weight: 700; padding: 5px 14px; border-radius: 50px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px; font-family: 'Syne', sans-serif; }
  .price-card h3 { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; margin-bottom: 6px; }
  .price-sub { color: #8899bb; font-size: 0.75rem; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 18px; }
  .price-amount { font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800; line-height: 1; margin-bottom: 6px; }
  .price-amount.green { color: #00e676; }
  .price-amount.purple { color: #b388ff; }
  .price-for { display: inline-block; border: 1px solid currentColor; border-radius: 6px; padding: 4px 12px; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 28px; }
  .price-for.green { color: #00e676; }
  .price-for.purple { color: #b388ff; }
  .feat-list { list-style: none; margin-bottom: 32px; }
  .feat-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.86rem; padding: 7px 0; color: #8899bb; border-bottom: 1px solid rgba(255,255,255,0.04); }
  .feat-list li:last-child { border-bottom: none; }
  .ck { color: #00e676; font-size: 0.8rem; margin-top: 2px; flex-shrink: 0; }
  .price-cta { display: block; text-align: center; padding: 14px; border-radius: 50px; font-weight: 700; font-size: 0.9rem; transition: all 0.2s; cursor: pointer; border: none; width: 100%; font-family: 'Syne', sans-serif; }
  .price-cta.green { background: #00e676; color: #000; box-shadow: 0 0 30px rgba(0,230,118,0.3); }
  .price-cta.green:hover { box-shadow: 0 0 50px rgba(0,230,118,0.6); transform: translateY(-2px); }
  .price-cta.purple { background: linear-gradient(135deg, #7c4dff, #b388ff); color: #fff; box-shadow: 0 0 30px rgba(124,77,255,0.3); }
  .price-cta.purple:hover { box-shadow: 0 0 50px rgba(124,77,255,0.5); transform: translateY(-2px); }
  .domain-box { display: flex; align-items: center; gap: 12px; border-radius: 12px; padding: 14px 16px; margin-top: 20px; }
  .domain-box.green-box { background: rgba(0,230,118,0.06); border: 1px solid rgba(0,230,118,0.15); }
  .domain-box.purple-box { background: rgba(124,77,255,0.06); border: 1px solid rgba(124,77,255,0.15); }
  .domain-box .di { font-size: 1.1rem; }
  .domain-box .dt { font-size: 0.8rem; font-weight: 700; }
  .domain-box .dt.g { color: #00e676; }
  .domain-box .dt.p { color: #b388ff; }
  .domain-box .ds { font-size: 0.72rem; color: #8899bb; }

  /* ── INFO STRIP ── */
  .info-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(124,77,255,0.2); margin: 0 6vw 90px; border: 1px solid rgba(124,77,255,0.2); border-radius: 20px; overflow: hidden; position: relative; z-index: 2; }
  .info-block { background: #0d1a30; padding: 32px 28px; }
  .ib-title { font-family: 'Syne', sans-serif; font-size: 0.78rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px; }
  .ib-title.green { color: #00e676; }
  .ib-title.purple { color: #b388ff; }
  .ib-title.blue { color: #64b5f6; }
  .info-block p { color: #8899bb; font-size: 0.83rem; line-height: 1.7; }
  .info-block ul { list-style: none; }
  .info-block ul li { color: #8899bb; font-size: 0.83rem; padding: 4px 0; display: flex; align-items: center; gap: 8px; }
  .info-block ul li::before { content: '✓'; color: #00e676; font-size: 0.75rem; }

  /* ── SKILLS ── */
  .skills-sec { padding: 80px 6vw; }
  .skills-grid { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
  .skill-tag { background: #0d1a30; border: 1px solid rgba(124,77,255,0.25); border-radius: 50px; padding: 10px 22px; font-size: 0.85rem; color: #e8eaf6; transition: all 0.2s; cursor: default; }
  .skill-tag:hover { border-color: #00e676; color: #00e676; transform: translateY(-2px); }

  /* ── CONTACT ── */
  .contact-sec { padding: 100px 6vw 80px; position: relative; z-index: 2; }
  .contact-wrap { max-width: 700px; margin: 0 auto; background: #0d1a30; border: 1px solid rgba(124,77,255,0.25); border-radius: 28px; padding: 56px 50px; box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 60px rgba(0,230,118,0.05); }
  .contact-wrap h2 { font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800; letter-spacing: -1px; margin-bottom: 10px; text-align: center; }
  .contact-wrap > p { color: #8899bb; margin-bottom: 36px; line-height: 1.75; text-align: center; font-size: 0.92rem; }
  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
  .form-field { display: flex; flex-direction: column; gap: 8px; }
  .form-field.full { grid-column: 1 / -1; }
  .form-field label { font-size: 0.75rem; font-weight: 600; color: #b388ff; letter-spacing: 0.8px; text-transform: uppercase; }
  .form-field input, .form-field select, .form-field textarea { background: rgba(255,255,255,0.04); border: 1px solid rgba(124,77,255,0.25); border-radius: 12px; padding: 13px 16px; color: #e8eaf6; font-family: 'DM Sans', sans-serif; font-size: 0.92rem; transition: border-color 0.2s, box-shadow 0.2s; outline: none; -webkit-appearance: none; }
  .form-field input:focus, .form-field select:focus, .form-field textarea:focus { border-color: #00e676; box-shadow: 0 0 0 3px rgba(0,230,118,0.1); }
  .form-field select option { background: #0d1a30; }
  .form-field textarea { resize: vertical; min-height: 120px; }
  .form-submit { width: 100%; margin-top: 8px; background: linear-gradient(135deg, #00e676, #7c4dff); color: #000; font-weight: 700; font-size: 1rem; padding: 16px; border-radius: 50px; border: none; cursor: pointer; font-family: 'Syne', sans-serif; letter-spacing: 0.5px; transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 0 30px rgba(0,230,118,0.3); }
  .form-submit:hover { transform: translateY(-2px); box-shadow: 0 0 50px rgba(0,230,118,0.5); }
  .form-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
  .form-success { text-align: center; padding: 40px 0; }
  .form-success h3 { font-family: 'Syne', sans-serif; font-size: 1.5rem; color: #00e676; margin-bottom: 8px; }
  .form-success p { color: #8899bb; }
  .contact-links { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-top: 28px; }
  .contact-link { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.04); border: 1px solid rgba(124,77,255,0.25); border-radius: 50px; padding: 11px 20px; text-decoration: none; color: #e8eaf6; font-size: 0.84rem; transition: all 0.2s; }
  .contact-link:hover { border-color: #00e676; color: #00e676; transform: translateY(-2px); }

  /* ── WORKS PAGE ── */
  .works-hero { padding: 120px 6vw 80px; position: relative; z-index: 2; text-align: center; }
  .works-hero h1 { font-family: 'Syne', sans-serif; font-size: clamp(2.6rem, 7vw, 5.5rem); font-weight: 800; letter-spacing: -2px; line-height: 1; margin-bottom: 20px; animation: fadeUp 0.8s ease both; }
  .works-hero h1 span { color: #00e676; }
  .works-hero p { color: #8899bb; font-size: 1rem; line-height: 1.75; max-width: 560px; margin: 0 auto; animation: fadeUp 0.9s 0.1s ease both; }

  .filter-bar { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; padding: 0 6vw 60px; position: relative; z-index: 2; animation: fadeUp 0.9s 0.2s ease both; }
  .filter-btn { background: #0d1a30; border: 1px solid rgba(124,77,255,0.25); color: #8899bb; border-radius: 50px; padding: 9px 22px; font-size: 0.84rem; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
  .filter-btn:hover, .filter-btn.active { border-color: #00e676; color: #00e676; background: rgba(0,230,118,0.06); }

  .works-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding: 0 6vw 100px; position: relative; z-index: 2; }
  .work-card { background: #0d1a30; border: 1px solid rgba(124,77,255,0.25); border-radius: 20px; overflow: hidden; transition: transform 0.35s ease, box-shadow 0.35s, border-color 0.3s; box-shadow: 0 8px 32px rgba(0,0,0,0.4); cursor: pointer; }
  .work-card:hover { transform: translateY(-8px); border-color: rgba(0,230,118,0.35); box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,230,118,0.08); }
  .work-img { width: 100%; height: 220px; object-fit: cover; display: block; filter: brightness(0.85) saturate(1.1); transition: filter 0.35s, transform 0.5s; }
  .work-card:hover .work-img { filter: brightness(0.95) saturate(1.2); transform: scale(1.03); }
  .work-img-wrap { overflow: hidden; position: relative; }
  .work-img-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 40%, rgba(5,10,24,0.95) 100%); pointer-events: none; }
  .work-tag-wrap { position: absolute; top: 14px; left: 14px; display: flex; gap: 6px; flex-wrap: wrap; }
  .work-tag { background: rgba(5,10,24,0.85); border: 1px solid rgba(0,230,118,0.3); color: #00e676; font-size: 0.68rem; padding: 4px 12px; border-radius: 50px; letter-spacing: 1px; text-transform: uppercase; font-family: 'Syne', sans-serif; font-weight: 600; backdrop-filter: blur(6px); }
  .work-body { padding: 22px 22px 24px; }
  .work-body h3 { font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 700; margin-bottom: 8px; }
  .work-body p { color: #8899bb; font-size: 0.83rem; line-height: 1.65; margin-bottom: 18px; }
  .work-links { display: flex; gap: 10px; }
  .work-link { display: inline-flex; align-items: center; gap: 6px; font-size: 0.78rem; font-weight: 600; color: #8899bb; text-decoration: none; padding: 7px 16px; border: 1px solid rgba(124,77,255,0.25); border-radius: 50px; transition: all 0.2s; }
  .work-link:hover { border-color: #00e676; color: #00e676; }
  .work-link.primary { background: rgba(0,230,118,0.08); border-color: rgba(0,230,118,0.3); color: #00e676; }
  .work-link.primary:hover { background: rgba(0,230,118,0.15); }

  .featured-work { padding: 0 6vw 80px; position: relative; z-index: 2; }
  .featured-card { background: #0d1a30; border: 1px solid rgba(124,77,255,0.25); border-radius: 24px; overflow: hidden; display: grid; grid-template-columns: 1fr 1fr; box-shadow: 0 20px 60px rgba(0,0,0,0.5); transition: border-color 0.3s, box-shadow 0.3s; }
  .featured-card:hover { border-color: rgba(0,230,118,0.3); box-shadow: 0 20px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,230,118,0.07); }
  .featured-img { height: 100%; min-height: 380px; object-fit: cover; display: block; filter: brightness(0.8) saturate(1.1); transition: filter 0.5s, transform 0.8s; }
  .featured-card:hover .featured-img { filter: brightness(0.9) saturate(1.2); transform: scale(1.02); }
  .featured-img-wrap { overflow: hidden; position: relative; }
  .featured-badge { position: absolute; top: 20px; left: 20px; background: linear-gradient(90deg, #00e676, #7c4dff); color: #000; font-family: 'Syne', sans-serif; font-size: 0.7rem; font-weight: 700; padding: 6px 16px; border-radius: 50px; letter-spacing: 1px; text-transform: uppercase; }
  .featured-content { padding: 50px 44px; display: flex; flex-direction: column; justify-content: center; }
  .featured-eyebrow { font-size: 0.72rem; color: #00e676; letter-spacing: 2px; text-transform: uppercase; font-family: 'Syne', sans-serif; font-weight: 700; margin-bottom: 14px; }
  .featured-content h2 { font-family: 'Syne', sans-serif; font-size: clamp(1.5rem, 2.5vw, 2.2rem); font-weight: 800; letter-spacing: -0.8px; margin-bottom: 16px; line-height: 1.15; }
  .featured-content h2 span { color: #00e676; }
  .featured-content p { color: #8899bb; font-size: 0.88rem; line-height: 1.75; margin-bottom: 28px; }
  .featured-tech { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; }
  .tech-pill { background: rgba(124,77,255,0.1); border: 1px solid rgba(124,77,255,0.25); color: #b388ff; font-size: 0.72rem; padding: 5px 14px; border-radius: 50px; font-family: 'Syne', sans-serif; font-weight: 600; }
  .featured-links { display: flex; gap: 12px; }

  /* ── WHATSAPP FAB ── */
  .whatsapp-fab { position: fixed; bottom: 32px; right: 32px; z-index: 500; display: flex; flex-direction: column; align-items: flex-end; gap: 12px; }
  .wa-tooltip { background: #0d1a30; border: 1px solid rgba(0,230,118,0.3); border-radius: 12px; padding: 10px 16px; font-size: 0.82rem; color: #e8eaf6; white-space: nowrap; box-shadow: 0 4px 20px rgba(0,0,0,0.4); animation: fadeUp 0.3s ease; }
  .wa-btn { width: 58px; height: 58px; border-radius: 50%; background: linear-gradient(135deg, #25d366, #128c7e); display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0.4); animation: waPulse 2.5s infinite; text-decoration: none; transition: transform 0.2s; border: none; }
  .wa-btn:hover { transform: scale(1.1); }
  .wa-btn svg { width: 28px; height: 28px; fill: white; }
  @keyframes waPulse { 0%,100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0.3); } 50% { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 14px rgba(37,211,102,0); } }

  /* ── FOOTER ── */
  footer { border-top: 1px solid rgba(124,77,255,0.2); padding: 44px 6vw; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 20px; position: relative; z-index: 2; }
  .footer-brand p { color: #8899bb; font-size: 0.78rem; margin-top: 8px; max-width: 240px; line-height: 1.6; }
  .footer-links { display: flex; gap: 28px; list-style: none; justify-content: center; }
  .footer-links a { color: #8899bb; text-decoration: none; font-size: 0.82rem; transition: color 0.2s; }
  .footer-links a:hover { color: #00e676; }
  .footer-right { text-align: right; }
  .footer-copy { color: #8899bb; font-size: 0.75rem; }
  .footer-badges { display: flex; gap: 10px; justify-content: flex-end; margin-top: 10px; flex-wrap: wrap; }
  .footer-badge { background: rgba(255,255,255,0.04); border: 1px solid rgba(124,77,255,0.2); color: #8899bb; font-size: 0.7rem; padding: 5px 12px; border-radius: 50px; }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  .fade-in-up { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .fade-in-up.visible { opacity: 1; transform: translateY(0); }

  /* ════════════ TABLET ════════════ */
  @media (max-width: 900px) {
    .cards-grid { grid-template-columns: repeat(2, 1fr); }
    .pricing-grid { grid-template-columns: 1fr; max-width: 480px; }
    .info-strip { grid-template-columns: 1fr; }
    .info-strip .info-block { border-bottom: 1px solid rgba(124,77,255,0.2); }
    .info-strip .info-block:last-child { border-bottom: none; }
    .hero-3d { grid-template-columns: repeat(2, 1fr); max-width: 420px; gap: 12px; }
    .premium-row { grid-template-columns: 1fr; }
    .premium-row.reverse { direction: ltr; }
    .prem-visual-inner { min-height: 300px; }
    .prem-content { padding: 40px 36px; border-left: none; border-right: none; border-top: 1px solid rgba(124,77,255,0.15); }
    .premium-row.reverse .prem-content { border-right: none; }
    .works-grid { grid-template-columns: repeat(2, 1fr); }
    .featured-card { grid-template-columns: 1fr; }
    .featured-img { min-height: 240px; }
    .featured-content { padding: 32px 28px; }
    footer { grid-template-columns: 1fr; text-align: center; }
    .footer-brand p { max-width: 100%; }
    .footer-right { text-align: center; }
    .footer-badges { justify-content: center; }
  }

  /* ════════════ MOBILE ════════════ */
  @media (max-width: 640px) {
    .cursor, .cursor-ring { display: none; }
    body { cursor: auto; }
    nav { padding: 0 5vw; height: 62px; }
    .nav-links { display: none; }
    .nav-cta { display: none; }
    .nav-hamburger { display: flex; }
    .nav-drawer { top: 62px; }
    .hero { padding: 80px 5vw 60px; }
    .hero h1 { font-size: clamp(2.4rem, 12vw, 3.4rem); letter-spacing: -1.5px; }
    .hero-btns { flex-direction: column; align-items: stretch; }
    .btn-primary, .btn-outline { text-align: center; padding: 15px; }
    .hero-3d { grid-template-columns: repeat(2, 1fr); max-width: 100%; margin-top: 40px; }
    .services { padding: 60px 5vw; }
    .cards-grid { grid-template-columns: 1fr; }
    .service-card { padding: 22px 18px; }
    .premium { padding: 60px 0; }
    .prem-content { padding: 32px 22px; }
    .prem-specs { grid-template-columns: 1fr 1fr; }
    .pricing { padding: 60px 5vw; }
    .price-card { padding: 26px 20px; }
    .info-strip { margin: 0 5vw 60px; }
    .info-block { padding: 22px 18px; }
    .skills-sec { padding: 60px 5vw; }
    .contact-sec { padding: 60px 5vw 50px; }
    .contact-wrap { padding: 28px 18px; }
    .form-grid { grid-template-columns: 1fr; }
    .form-field input, .form-field select, .form-field textarea { font-size: 16px; }
    .contact-links { flex-direction: column; align-items: stretch; }
    .contact-link { justify-content: center; }
    .works-hero { padding: 90px 5vw 50px; }
    .filter-bar { padding: 0 5vw 40px; }
    .works-grid { grid-template-columns: 1fr; padding: 0 5vw 60px; }
    .featured-work { padding: 0 5vw 60px; }
    .featured-content { padding: 24px 20px; }
    footer { padding: 32px 5vw; }
    .footer-links { gap: 16px; flex-wrap: wrap; justify-content: center; }
    .whatsapp-fab { bottom: 18px; right: 18px; }
    .wa-btn { width: 52px; height: 52px; }
  }
`;
