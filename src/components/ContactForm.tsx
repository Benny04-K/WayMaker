import { useState } from 'react';

export function FaqItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: '#0d1a30',
      border: `1px solid ${open ? 'rgba(0,230,118,0.35)' : 'rgba(124,77,255,0.25)'}`,
      borderRadius: 18, overflow: 'hidden',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      boxShadow: open
        ? '0 8px 36px rgba(0,0,0,0.4), 0 0 24px rgba(0,230,118,0.08)'
        : '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
    }}>
      <div style={{ height: 2, background: 'linear-gradient(90deg,#00e676,#7c4dff)', transform: open ? 'scaleX(1)' : 'scaleX(0)', transition: 'transform 0.35s ease', transformOrigin: 'left' }} />
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '22px 26px', textAlign: 'left', color: '#e8eaf6', fontFamily: "'DM Sans',sans-serif", fontSize: '0.97rem', fontWeight: 500, lineHeight: 1.4 }}
      >
        {q}
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, borderRadius: '50%', flexShrink: 0, border: `1px solid ${open ? 'rgba(0,230,118,0.4)' : 'rgba(124,77,255,0.3)'}`, color: open ? '#00e676' : '#b388ff', fontSize: '1.1rem', lineHeight: 1, transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.35s ease, border-color 0.3s, color 0.3s' }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 200 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease, padding 0.3s ease', padding: open ? '0 26px 22px' : '0 26px', color: '#8899bb', fontSize: '0.87rem', lineHeight: 1.72 }}>{a}</div>
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch('https://formspree.io/f/mwvylnlj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
      else alert('Something went wrong. Please try again or contact via WhatsApp.');
    } catch {
      alert('Network error. Please try again.');
    } finally {
      setSending(false);
    }
  };

  if (sent) return (
    <div className="form-success">
      <div style={{ fontSize: '3rem', marginBottom: 16 }}>✓</div>
      <h3>Message Sent!</h3>
      <p>Thanks {form.name}! Our team will get back to you within 24 hours.</p>
      <div className="contact-links" style={{ marginTop: 24 }}>
        <a href="https://wa.me/918925617404" target="_blank" rel="noreferrer" className="contact-link">Continue on WhatsApp</a>
      </div>
    </div>
  );

  return (
    <form onSubmit={submit}>
      <div className="form-grid">
        <div className="form-field">
          <label>Your Name</label>
          <input name="name" value={form.name} onChange={handle} placeholder="John Doe" required />
        </div>
        <div className="form-field">
          <label>Email Address</label>
          <input name="email" type="email" value={form.email} onChange={handle} placeholder="john@company.com" required />
        </div>
        <div className="form-field">
          <label>Phone Number</label>
          <input name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" />
        </div>
        <div className="form-field">
          <label>Service Needed</label>
          <select name="service" value={form.service} onChange={handle} required>
            <option value="">Select a Package</option>
            <option value="basic">Basic Website – ₹5999</option>
            <option value="ecommerce">E-Commerce Website – ₹11999</option>
            <option value="premium">Premium Static Website</option>
            <option value="custom">Custom Enterprise Project</option>
          </select>
        </div>
        <div className="form-field full">
          <label>Tell us about your project</label>
          <textarea name="message" value={form.message} onChange={handle} placeholder="Describe your business, what kind of website you need, any specific features or requirements..." required />
        </div>
      </div>
      <button type="submit" className="form-submit" disabled={sending}>
        {sending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
