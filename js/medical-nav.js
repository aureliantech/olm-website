/* medical-nav.js — Healthcare Attorney Microsite Nav
   Uses the identical apx__ panel system as the main site.
   Inject via <script src="../js/medical-nav.js" defer></script>
   on every texas-medical-attorney/* page.
*/

(function () {

  /* ══════════════════════════════════════════
     NAV HTML
  ══════════════════════════════════════════ */
  const NAV_HTML = `
  <nav class="apx" id="apxNav" aria-label="Main navigation">
    <div class="apx__bar">

      <!-- Logo -->
      <a href="/texas-medical-attorney/index.html" class="apx__logo">
        <span class="apx__logo-name">Octavia LaVon Martinez PLLC</span>
        <span class="apx__logo-tagline">Healthcare Attorney · Texas · Virtual</span>
      </a>

      <!-- Nav links -->
      <div class="apx__links" id="apxLinks">

        <button class="apx__trigger" data-panel="defense" aria-expanded="false">
          Defense Areas
          <svg class="apx__chevron" viewBox="0 0 10 6"><polyline points="1,1 5,5 9,1"/></svg>
        </button>

        <button class="apx__trigger" data-panel="locations" aria-expanded="false">
          Locations
          <svg class="apx__chevron" viewBox="0 0 10 6"><polyline points="1,1 5,5 9,1"/></svg>
        </button>

        <button class="apx__trigger" data-panel="firm" aria-expanded="false">
          Firm
          <svg class="apx__chevron" viewBox="0 0 10 6"><polyline points="1,1 5,5 9,1"/></svg>
        </button>

      </div>

      <!-- Right CTAs -->
      <div class="apx__right">
        <a href="tel:9564263550" class="apx__secondary">(956) 426-3550</a>
        <a href="/texas-medical-attorney/strategy-session.html" class="apx__cta">Book Strategy Session</a>
      </div>

      <!-- Hamburger -->
      <button class="apx__ham" id="apxHam" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>

    </div>

    <!-- DEFENSE AREAS PANEL -->
    <div class="apx__panel" id="panel-defense" role="region" aria-label="Defense Areas">
      <div class="apx__panel-left">
        <img class="apx__panel-left-img"
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop&auto=format"
          alt="" loading="lazy">
        <div class="apx__panel-left-content">
          <div class="apx__panel-eyebrow">Healthcare License Defense</div>
          <div class="apx__panel-title">Protecting<br><em>Your License.</em></div>
          <p class="apx__panel-desc">A board complaint is not a paperwork problem. It is a prosecution. We fight it exactly like one.</p>
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
            <div class="apx__link-desc">Hospital privileges, non-competes &amp; retaliation</div>
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
        <a href="/texas-medical-attorney/strategy-session.html" class="apx__link apx__link--cta">
          <span class="apx__link-num">→</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Book a Strategy Session</div>
            <div class="apx__link-desc">30 minutes · Discounted first-session rate</div>
          </div>
        </a>
      </div>
    </div>

    <!-- LOCATIONS PANEL -->
    <div class="apx__panel" id="panel-locations" role="region" aria-label="Locations">
      <div class="apx__panel-left">
        <img class="apx__panel-left-img"
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&fit=crop&auto=format"
          alt="" loading="lazy">
        <div class="apx__panel-left-content">
          <div class="apx__panel-eyebrow">Serving All of Texas</div>
          <div class="apx__panel-title">Virtual.<br><em>Statewide.</em></div>
          <p class="apx__panel-desc">No office visit required. We represent physicians and healthcare professionals across every Texas market.</p>
          <a href="tel:9564263550" class="apx__panel-pill">Call (956) 426-3550 →</a>
        </div>
      </div>
      <div class="apx__panel-right">
        <a href="/texas-medical-attorney/houston.html" class="apx__link">
          <span class="apx__link-num">01</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Houston</div>
            <div class="apx__link-desc">TMB defense · Harris County</div>
          </div>
        </a>
        <a href="/texas-medical-attorney/dallas.html" class="apx__link">
          <span class="apx__link-num">02</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Dallas</div>
            <div class="apx__link-desc">TMB defense · Dallas County</div>
          </div>
        </a>
        <a href="/texas-medical-attorney/san-antonio.html" class="apx__link">
          <span class="apx__link-num">03</span>
          <div class="apx__link-body">
            <div class="apx__link-title">San Antonio</div>
            <div class="apx__link-desc">TMB defense · Bexar County</div>
          </div>
        </a>
        <a href="/texas-medical-attorney/austin.html" class="apx__link">
          <span class="apx__link-num">04</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Austin</div>
            <div class="apx__link-desc">TMB defense · Travis County</div>
          </div>
        </a>
        <a href="/texas-medical-attorney/el-paso.html" class="apx__link">
          <span class="apx__link-num">05</span>
          <div class="apx__link-body">
            <div class="apx__link-title">El Paso</div>
            <div class="apx__link-desc">TMB defense · El Paso County</div>
          </div>
        </a>
        <a href="/texas-medical-attorney/lubbock.html" class="apx__link">
          <span class="apx__link-num">06</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Lubbock</div>
            <div class="apx__link-desc">TMB defense · Lubbock County</div>
          </div>
        </a>
        <a href="/texas-medical-attorney/mcallen.html" class="apx__link">
          <span class="apx__link-num">07</span>
          <div class="apx__link-body">
            <div class="apx__link-title">McAllen</div>
            <div class="apx__link-desc">TMB defense · Hidalgo County</div>
          </div>
        </a>
        <div style="border-bottom:1px solid rgba(201,184,154,0.06);border-right:1px solid rgba(201,184,154,0.06);"></div>
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
        <a href="/texas-medical-attorney/about.html" class="apx__link">
          <span class="apx__link-num">01</span>
          <div class="apx__link-body">
            <div class="apx__link-title">About Octavia</div>
            <div class="apx__link-desc">Background, credentials &amp; approach</div>
          </div>
        </a>
        <a href="/texas-medical-attorney/faq.html" class="apx__link">
          <span class="apx__link-num">02</span>
          <div class="apx__link-body">
            <div class="apx__link-title">FAQ</div>
            <div class="apx__link-desc">Common questions about TMB defense</div>
          </div>
        </a>
        <a href="/texas-medical-attorney/strategy-session.html" class="apx__link">
          <span class="apx__link-num">03</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Book a Strategy Session</div>
            <div class="apx__link-desc">30 minutes · Discounted first-session rate</div>
          </div>
        </a>
        <a href="/texas-medical-attorney/contact.html" class="apx__link">
          <span class="apx__link-num">04</span>
          <div class="apx__link-body">
            <div class="apx__link-title">Contact</div>
            <div class="apx__link-desc">(956) 426-3550 · Virtual · All of Texas</div>
          </div>
        </a>
        <a href="/index.html" class="apx__link" style="opacity:0.5;">
          <span class="apx__link-num" style="font-size:14px;padding-top:6px;">←</span>
          <div class="apx__link-body">
            <div class="apx__link-title" style="font-size:14px;color:rgba(250,246,240,0.5);">Return to General Practice</div>
            <div class="apx__link-desc">Civil litigation, defamation, probate &amp; more</div>
          </div>
        </a>
      </div>
    </div>

    <!-- Mobile drawer -->
    <div class="apx__mobile" id="apxMobile">
      <a href="/texas-medical-attorney/physician-license-defense.html">Physician License Defense</a>
      <a href="/texas-medical-attorney/midwife-license-defense.html">Midwife License Defense</a>
      <a href="/texas-medical-attorney/employment-law.html">Healthcare Employment Law</a>
      <a href="/texas-medical-attorney/the-counter-protocol.html">The Counter Protocol</a>
      <a href="/texas-medical-attorney/texas-medical-board.html">TMB Complaint Process</a>
      <a href="/texas-medical-attorney/houston.html">Houston</a>
      <a href="/texas-medical-attorney/dallas.html">Dallas</a>
      <a href="/texas-medical-attorney/san-antonio.html">San Antonio</a>
      <a href="/texas-medical-attorney/austin.html">Austin</a>
      <a href="/texas-medical-attorney/el-paso.html">El Paso</a>
      <a href="/texas-medical-attorney/lubbock.html">Lubbock</a>
      <a href="/texas-medical-attorney/mcallen.html">McAllen</a>
      <a href="/texas-medical-attorney/about.html">About Octavia</a>
      <a href="/texas-medical-attorney/faq.html">FAQ</a>
      <a href="/texas-medical-attorney/contact.html">Contact</a>
      <a href="/index.html" style="opacity:0.5;font-size:11px;">← General Practice Site</a>
      <div class="apx__mobile-cta">
        <a href="/texas-medical-attorney/strategy-session.html" class="btn btn--primary" style="display:block;text-align:center;">Book Strategy Session</a>
        <a href="tel:9564263550" style="display:block;text-align:center;margin-top:12px;font-family:var(--ff-serif);font-size:20px;color:var(--accent-lite);text-decoration:none;">(956) 426-3550</a>
      </div>
    </div>

    <div class="apx__backdrop" id="apxBackdrop"></div>
  </nav>
  `;

  /* ══════════════════════════════════════════
     FOOTER HTML
  ══════════════════════════════════════════ */
  const FOOTER_HTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div>
          <div class="footer__firm">Octavia LaVon Martinez PLLC</div>
          <div class="footer__tagline">Healthcare Attorney · Texas · Virtual</div>
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
          <div class="footer__heading">Defense Areas</div>
          <nav class="footer__links" aria-label="Defense area links">
            <a href="/texas-medical-attorney/physician-license-defense.html">Physician License Defense</a>
            <a href="/texas-medical-attorney/midwife-license-defense.html">Midwife License Defense</a>
            <a href="/texas-medical-attorney/employment-law.html">Healthcare Employment Law</a>
            <a href="/texas-medical-attorney/the-counter-protocol.html">The Counter Protocol</a>
            <a href="/texas-medical-attorney/texas-medical-board.html">TMB Complaint Process</a>
          </nav>
        </div>
        <div>
          <div class="footer__heading">Firm</div>
          <nav class="footer__links" aria-label="Firm links">
            <a href="/texas-medical-attorney/about.html">About Octavia</a>
            <a href="/texas-medical-attorney/faq.html">FAQ</a>
            <a href="/texas-medical-attorney/strategy-session.html">Book Strategy Session</a>
            <a href="/texas-medical-attorney/contact.html">Contact</a>
            <a href="/index.html" style="color:rgba(250,246,240,0.3);font-size:12px;">← General Practice Site</a>
          </nav>
          <div style="margin-top:24px;">
            <div class="footer__heading">Locations Served</div>
            <nav class="footer__links" aria-label="Location links">
              <a href="/texas-medical-attorney/houston.html">Houston</a>
              <a href="/texas-medical-attorney/dallas.html">Dallas</a>
              <a href="/texas-medical-attorney/san-antonio.html">San Antonio</a>
              <a href="/texas-medical-attorney/austin.html">Austin</a>
              <a href="/texas-medical-attorney/el-paso.html">El Paso</a>
              <a href="/texas-medical-attorney/lubbock.html">Lubbock</a>
              <a href="/texas-medical-attorney/mcallen.html">McAllen</a>
            </nav>
          </div>
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
      <p style="margin-top:16px;font-size:11px;color:rgba(250,246,240,0.25);line-height:1.6;">
        Disclaimer: The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. Viewing this information does not constitute an attorney-client relationship.
      </p>
    </div>
  </footer>
  `;

  /* ══════════════════════════════════════════
     INJECT NAV & FOOTER
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
     PAGE TRANSITION
  ══════════════════════════════════════════ */
  function injectPageTransition() {
    if (document.getElementById('page-transition')) return;
    const el = document.createElement('div');
    el.id = 'page-transition';
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = '<div class="pt-strip"></div><div class="pt-strip"></div><div class="pt-strip"></div><div class="pt-strip"></div><div class="pt-strip"></div>';
    document.body.insertAdjacentElement('afterbegin', el);
  }
  injectPageTransition();

  /* ══════════════════════════════════════════
     APEX NAV BEHAVIOUR
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
        e.stopPropagation();
      });
    }

    /* Hide nav on scroll down, show on scroll up */
    let lastY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (!nav) return;
      if (y > lastY && y > 120) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = '';
      }
      lastY = y;
    }, { passive: true });

    /* Page transition on internal links */
    const pt = document.getElementById('page-transition');
    if (pt) {
      document.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http') || a.target === '_blank') return;
        a.addEventListener('click', e => {
          e.preventDefault();
          pt.classList.add('active');
          setTimeout(() => { window.location.href = href; }, 800);
        });
      });
    }

  });

})();
