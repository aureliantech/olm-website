/* global.js — OLM Site */

(function () {

  /* ══════════════════════════════════════════
     NAV HTML — mirrors homepage apex nav exactly
  ══════════════════════════════════════════ */
  const NAV_HTML = `
  <nav class="apx" id="apxNav" aria-label="Main navigation">
    <div class="apx__bar">

      <!-- Logo -->
      <a href="/index.html" class="apx__logo">
        <span class="apx__logo-name">Octavia LaVon Martinez PLLC</span>
        <span class="apx__logo-tagline">Texas Attorney · Virtual · Statewide</span>
      </a>

      <!-- Nav links -->
      <div class="apx__links" id="apxLinks">

        <button class="apx__trigger" data-panel="gp" aria-expanded="false">
          General Practice
          <svg class="apx__chevron" viewBox="0 0 10 6"><polyline points="1,1 5,5 9,1"/></svg>
        </button>

        <button class="apx__trigger" data-panel="mp" aria-expanded="false">
          Medical Professionals
          <svg class="apx__chevron" viewBox="0 0 10 6"><polyline points="1,1 5,5 9,1"/></svg>
        </button>

        <button class="apx__trigger" data-panel="firm" aria-expanded="false">
          Firm
          <svg class="apx__chevron" viewBox="0 0 10 6"><polyline points="1,1 5,5 9,1"/></svg>
        </button>

      </div>

      <!-- Right CTAs -->
      <div class="apx__right">
        <a href="/strategy-session.html" class="apx__secondary">Book Strategy Session</a>
        <a href="tel:9564263550" class="apx__cta">Call (956) 426-3550</a>
      </div>

      <!-- Hamburger -->
      <button class="apx__ham" id="apxHam" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>

    </div>

    <!-- GENERAL PRACTICE PANEL -->
    <div class="apx__panel" id="panel-gp" role="region" aria-label="General Practice">
      <div class="apx__panel-left">
        <img class="apx__panel-left-img"
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&fit=crop&auto=format"
          alt="" loading="lazy">
        <div class="apx__panel-left-content">
          <div class="apx__panel-eyebrow">Practice Areas</div>
          <div class="apx__panel-title">Full Service<br><em>Civil Practice</em></div>
          <p class="apx__panel-desc">Texas statewide representation across probate, defamation, and civil litigation.</p>
          <a href="tel:9564263550" class="apx__panel-pill">Call (956) 426-3550 →</a>
        </div>
      </div>
      <div class="apx__panel-right">
        <a href="/medical-malpractice.html" class="apx__link">
          <span class="apx__link-num">01</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Medical Malpractice</div>
            <div class="apx__link-desc">Negligence &amp; wrongful death</div>
          </div>
        </a>
        <a href="/defamation.html" class="apx__link">
          <span class="apx__link-num">02</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Defamation &amp; Reputation Defense</div>
            <div class="apx__link-desc">Libel, slander &amp; online attacks</div>
          </div>
        </a>
        <a href="/probate.html" class="apx__link">
          <span class="apx__link-num">03</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Complex Probate &amp; Estate</div>
            <div class="apx__link-desc">Contested estates &amp; failed administration</div>
          </div>
        </a>
        <a href="/breach-of-contract.html" class="apx__link">
          <span class="apx__link-num">04</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Breach of Contract</div>
            <div class="apx__link-desc">Business &amp; commercial litigation</div>
          </div>
        </a>
        <a href="/transfer-your-case.html" class="apx__link apx__link--cta">
          <span class="apx__link-num">→</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Transfer Your Case</div>
            <div class="apx__link-desc">Case stalled? We intervene immediately</div>
          </div>
        </a>
      </div>
    </div>

    <!-- MEDICAL PROFESSIONALS PANEL -->
    <div class="apx__panel" id="panel-mp" role="region" aria-label="Medical Professionals">
      <div class="apx__panel-left">
        <img class="apx__panel-left-img"
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop&auto=format"
          alt="" loading="lazy">
        <div class="apx__panel-left-content">
          <div class="apx__panel-eyebrow">Healthcare Practitioner Defense</div>
          <div class="apx__panel-title">Dedicated<br><em>Legal Defense</em></div>
          <p class="apx__panel-desc">License defense, healthcare employment, and reputation protection built around licensing risk.</p>
          <a href="tel:9564263550" class="apx__panel-pill">Call (956) 426-3550 →</a>
        </div>
      </div>
      <div class="apx__panel-right">
        <a href="/texas-medical-attorney/physician-license-defense.html" class="apx__link">
          <span class="apx__link-num">01</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Physician License Defense</div>
            <div class="apx__link-desc">TMB complaint defense for physicians</div>
          </div>
        </a>
        <a href="/texas-medical-attorney/midwife-license-defense.html" class="apx__link">
          <span class="apx__link-num">02</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Midwife License Defense</div>
            <div class="apx__link-desc">License defense for all midwife credential types</div>
          </div>
        </a>
        <a href="/texas-medical-attorney/employment-law.html" class="apx__link">
          <span class="apx__link-num">03</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Healthcare Employment Law</div>
            <div class="apx__link-desc">Hospital privileges &amp; non-competes</div>
          </div>
        </a>
        <a href="/texas-medical-attorney/the-counter-protocol.html" class="apx__link">
          <span class="apx__link-num">04</span>
          <div class="apx__link-body">
            <div class="apx__link-title">The Counter Protocol</div>
            <div class="apx__link-desc">Our parallel investigation method</div>
          </div>
        </a>
        <a href="/texas-medical-attorney/texas-medical-board.html" class="apx__link">
          <span class="apx__link-num">05</span>
          <div class="apx__link-body">
            <div class="apx__link-title">TMB Complaint Process</div>
            <div class="apx__link-desc">What happens &amp; when to act</div>
          </div>
        </a>
        <div style="border-bottom:1px solid rgba(201,184,154,0.06);border-right:1px solid rgba(201,184,154,0.06);"></div>
        <a href="/texas-medical-attorney/index.html" class="apx__link apx__link--medpro-cta">
          <span class="apx__link-num">→</span>
          <div class="apx__link-body">
            <div class="apx__link-title">View All Medical Professional Services</div>
            <div class="apx__link-desc">View the full scope of representation</div>
          </div>
        </a>
        <a href="/transfer-your-case.html" class="apx__link apx__link--cta">
          <span class="apx__link-num">→</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Transfer Your Case</div>
            <div class="apx__link-desc">Prior counsel failed you? We intervene</div>
          </div>
        </a>
      </div>
    </div>

    <!-- FIRM PANEL -->
    <div class="apx__panel" id="panel-firm" role="region" aria-label="The Firm">
      <div class="apx__panel-left">
        <img class="apx__panel-left-img"
          src="https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?w=1200&q=90&fit=crop&crop=center&auto=format"
          alt="" loading="lazy">
        <div class="apx__panel-left-content">
          <div class="apx__panel-eyebrow">The Firm</div>
          <div class="apx__panel-title">Octavia<br><em>L. Martinez</em></div>
          <p class="apx__panel-desc">Former felony prosecutor. UVA &amp; Ohio State Moritz Law. Licensed in Texas &amp; Arizona.</p>
        </div>
      </div>
      <div class="apx__panel-right apx__panel-right--single">
        <a href="/about.html" class="apx__link">
          <span class="apx__link-num">01</span>
          <div class="apx__link-body">
            <div class="apx__link-title">About Octavia</div>
            <div class="apx__link-desc">Background, credentials, and how she works</div>
          </div>
        </a>
        <a href="/faq.html" class="apx__link">
          <span class="apx__link-num">02</span>
          <div class="apx__link-body">
            <div class="apx__link-title">FAQ</div>
            <div class="apx__link-desc">Common questions about the firm</div>
          </div>
        </a>
        <a href="/strategy-session.html" class="apx__link">
          <span class="apx__link-num">03</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Book a Strategy Session</div>
            <div class="apx__link-desc">Paid consultation · Clear direction</div>
          </div>
        </a>
        <a href="/contact.html" class="apx__link">
          <span class="apx__link-num">04</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Contact</div>
            <div class="apx__link-desc">(956) 426-3550 · Virtual · All of Texas</div>
          </div>
        </a>
        <a href="/transfer-your-case.html" class="apx__link apx__link--cta">
          <span class="apx__link-num">→</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Transfer Your Case</div>
            <div class="apx__link-desc">Already represented but case has stalled?</div>
          </div>
        </a>
      </div>
    </div>

    <!-- Mobile drawer -->
    <div class="apx__mobile" id="apxMobile">
      <a href="/texas-medical-attorney/index.html">Medical Professional Services</a>
      <a href="/probate.html">Complex Probate &amp; Estate</a>
      <a href="/breach-of-contract.html">Breach of Contract</a>
      <a href="/defamation.html">Defamation &amp; Libel</a>
      <a href="/medical-malpractice.html">Medical Malpractice</a>
      <a href="/about.html">About Octavia</a>
      <a href="/faq.html">FAQ</a>
      <a href="/contact.html">Contact</a>
      <div class="apx__mobile-cta">
        <a href="tel:9564263550" class="btn btn--primary" style="width:100%;justify-content:center;">Call (956) 426-3550</a>
      </div>
    </div>

  </nav>
  <div class="apx__backdrop" id="apxBackdrop"></div>
  `;

  /* ══════════════════════════════════════════
     FOOTER HTML — mirrors homepage footer exactly
  ══════════════════════════════════════════ */
  const FOOTER_HTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div>
          <div class="footer__firm">Octavia LaVon Martinez PLLC</div>
          <div class="footer__tagline">Texas &amp; Arizona Attorney · Virtual</div>
          <div class="footer__mission">Seeking truth, justice, &amp; righteousness<br>in an unrighteous world</div>
          <div class="footer__detail">
            <strong style="color:#fff;">Virtual Firm — Serving All of Texas</strong><br>
            Mailing: 2330 E. Freddy Gonzalez Dr. #2074<br>
            Edinburg, TX 78542<br><br>
            <a href="tel:9564263550">(956) 426-3550</a><br>
            Monday–Friday · 8:00 AM–6:00 PM CST
          </div>
        </div>
        <div>
          <div class="footer__heading">Practice Areas</div>
          <nav class="footer__links" aria-label="Practice area links">
            <a href="/medical-malpractice.html">Medical Malpractice</a>
            <a href="/defamation.html">Defamation &amp; Libel</a>
            <a href="/probate.html">Complex Probate &amp; Estate</a>
            <a href="/breach-of-contract.html">Breach of Contract</a>
            <a href="/texas-medical-attorney/index.html">Medical Professionals</a>
          </nav>
        </div>
        <div>
          <div class="footer__heading">Firm</div>
          <nav class="footer__links" aria-label="Firm links">
            <a href="/about.html">About Octavia</a>
            <a href="/faq.html">FAQ</a>
            <a href="/strategy-session.html">Book Strategy Session</a>
            <a href="/contact.html">Contact</a>
            <a href="/transfer-your-case.html" style="color:var(--accent);font-weight:700;">Transfer Your Case →</a>
          </nav>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__copy">© 2026 Octavia LaVon Martinez PLLC · All Rights Reserved</div>
        <div class="footer__bar">Licensed in Texas · Arizona</div>
        <div class="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Attorney Advertising</a>
        </div>
      </div>
      <p style="margin-top:16px;font-size:11px;color:rgba(250,246,240,0.65);line-height:1.6;">
        Disclaimer: The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. Viewing this information does not constitute an attorney-client relationship.
      </p>
    </div>
  </footer>
  `;

  /* ══════════════════════════════════════════
     INJECT NAV & FOOTER
     Only injects on non-homepage pages
     (homepage has its own hardcoded nav/footer)
  ══════════════════════════════════════════ */
  function injectNav() {
    const placeholder = document.getElementById('site-nav');
    if (placeholder) {
      placeholder.outerHTML = NAV_HTML;
    } else if (!document.getElementById('apxNav')) {
      document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    }
  }

  function injectFooter() {
    const placeholder = document.getElementById('site-footer');
    if (placeholder) {
      placeholder.outerHTML = FOOTER_HTML;
    } else if (!document.querySelector('.footer')) {
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }
  }

  injectNav();
  injectFooter();

  /* ══════════════════════════════════════════
     PAGE TRANSITION — inject strips on all pages
  ══════════════════════════════════════════ */
  function injectPageTransition() {
    if (document.getElementById('page-transition')) return; // already exists (homepage)
    const el = document.createElement('div');
    el.id = 'page-transition';
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = '<div class="pt-strip"></div><div class="pt-strip"></div><div class="pt-strip"></div><div class="pt-strip"></div><div class="pt-strip"></div>';
    document.body.insertAdjacentElement('afterbegin', el);
  }
  injectPageTransition();

  /* ══════════════════════════════════════════
     APEX NAV BEHAVIOUR (works on all pages)
  ══════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', () => {

    const nav      = document.getElementById('apxNav');
    const triggers = nav ? nav.querySelectorAll('.apx__trigger') : [];
    const ham      = document.getElementById('apxHam');
    const mob      = document.getElementById('apxMobile');
    const backdrop = document.getElementById('apxBackdrop');
    let current    = null;

    function openPanel(id) {
      closeAll();
      const panel = document.getElementById('panel-' + id);
      const btn   = nav.querySelector('[data-panel="' + id + '"]');
      if (!panel || !btn) return;
      panel.classList.add('open');
      btn.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
      nav.classList.add('has-open');
      if (backdrop) backdrop.classList.add('open');
      current = id;
    }

    function closeAll() {
      if (!nav) return;
      nav.querySelectorAll('.apx__panel').forEach(p => p.classList.remove('open'));
      triggers.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-expanded', 'false'); });
      nav.classList.remove('has-open');
      if (backdrop) backdrop.classList.remove('open');
      current = null;
    }

    triggers.forEach(btn => {
      const id = btn.getAttribute('data-panel');
      btn.addEventListener('mouseenter', () => openPanel(id));
      btn.addEventListener('click', e => {
        e.stopPropagation();
        current === id ? closeAll() : openPanel(id);
      });
    });

    nav && nav.querySelectorAll('.apx__panel').forEach(panel => {
      panel.addEventListener('mouseleave', closeAll);
    });

    const linksEl = nav && nav.querySelector('.apx__links');
    if (linksEl) {
      linksEl.addEventListener('mouseleave', e => {
        if (!e.relatedTarget || !e.relatedTarget.closest('.apx__panel')) closeAll();
      });
    }

    document.addEventListener('click', closeAll);
    if (backdrop) backdrop.addEventListener('click', closeAll);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });

    /* Hamburger */
    if (ham && mob) {
      ham.addEventListener('click', e => {
        e.stopPropagation();
        const open = mob.classList.toggle('open');
        ham.classList.toggle('open', open);
        ham.setAttribute('aria-expanded', String(open));
      });
    }

    /* Scroll hide/show */
    let lastY = 0, tick = false;
    window.addEventListener('scroll', () => {
      if (!tick) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (nav) {
            nav.classList.toggle('scrolled', y > 40);
            nav.classList.toggle('hide', y > lastY + 12 && y > 320);
            if (y < 8) nav.classList.remove('hide');
          }
          lastY = y; tick = false;
        });
        tick = true;
      }
    });

    /* ── PAGE TRANSITION ── */
    const overlay = document.getElementById('page-transition');
    if (overlay) {
      document.querySelectorAll('a[href]').forEach(function(link) {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('tel:') ||
            href.startsWith('mailto:') || href.startsWith('http')) return;
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const dest = href;
          overlay.classList.add('out');
          setTimeout(function() { window.location.href = dest; }, 800);
        });
      });
    }

    /* ── SCROLL REVEAL ── */
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const siblings = e.target.parentElement.querySelectorAll('.reveal');
            siblings.forEach((el, i) => {
              if (el === e.target || !el.classList.contains('visible')) {
                setTimeout(() => el.classList.add('visible'), i * 80);
              }
            });
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
      reveals.forEach(el => observer.observe(el));
    }

  });

})();
