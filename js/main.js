/* ============================================================
   JNX EBIKE — 主交互脚本
   ============================================================ */

// ---------- SVG 图标 ----------
const ICONS = {
  bike: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5L9 7l4-1 2 5h3"/><path d="M9 7l-2.5 6.5h11"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  factory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20M4 20V9l6 4V9l6 4V4h4v16"/><path d="M8 20v-4M14 20v-4"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m20 6-11 11-5-5"/></svg>',
  battery: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.6 7.6l-6.3 6.3a2.1 2.1 0 0 1-3-3l6.3-6.3a6 6 0 0 1 7.6-7.6z"/></svg>'
};

// ---------- 注入共享 Header / Footer ----------
function injectLayout() {
  const navItems = [
    ['index.html','nav.home'], ['products.html','nav.products'], ['about.html','nav.about'], ['contact.html','nav.contact']
  ];
  const current = location.pathname.split('/').pop() || 'index.html';
  const navHtml = navItems.map(([href,key]) =>
    `<a href="${href}" class="${href===current?'active':''}" data-i18n="${key}"></a>`).join('');

  const header = `
  <header class="site-header" id="site-header">
    <div class="container header-inner">
      <a href="index.html" class="brand">
        <span class="brand-mark">${ICONS.bike}</span>
        <span class="brand-text"><strong>JNX EBIKE</strong><small>Juenengxing New Energy</small></span>
      </a>
      <nav class="main-nav" id="main-nav">${navHtml}</nav>
      <div class="header-tools">
        <div class="lang-switch">
          <button class="lang-btn" id="lang-btn" aria-label="Language">
            <span id="lang-flag">🇬🇧</span><span class="lang-name" id="lang-code">EN</span>${ICONS.chevronDown}
          </button>
          <div class="lang-menu" id="lang-menu">
            ${LANGS.map(l=>`<button data-lang="${l.code}" class="${l.code===currentLang?'active':''}"><span class="flag">${l.flag}</span>${l.label}</button>`).join('')}
          </div>
        </div>
        <a href="contact.html" class="btn btn-dark" data-i18n="nav.quote"></a>
        <button class="menu-toggle" id="menu-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>`;

  const footer = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="brand">
            <span class="brand-mark">${ICONS.bike}</span>
            <span class="brand-text"><strong>JNX EBIKE</strong><small>Juenengxing New Energy</small></span>
          </a>
          <p data-i18n="footer.desc"></p>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer.quick"></h4>
          <a href="index.html" data-i18n="nav.home"></a>
          <a href="products.html" data-i18n="nav.products"></a>
          <a href="about.html" data-i18n="nav.about"></a>
          <a href="contact.html" data-i18n="nav.contact"></a>
        </div>
        <div class="footer-col">
          <h4 data-i18n="footer.cat"></h4>
          <a href="products.html" data-i18n="prod.2w"></a>
          <a href="products.html" data-i18n="prod.3w"></a>
          <a href="contact.html" data-i18n="nav.quote"></a>
        </div>
        <div class="footer-col footer-contact">
          <h4 data-i18n="footer.contact"></h4>
          <ul>
            <li>${ICONS.map}<span>${COMPANY.addressEn}</span></li>
            <li>${ICONS.phone}<span>WhatsApp / Phone: <a href="contact.html">Contact</a></span></li>
            <li>${ICONS.mail}<span>Nanjing Juenengxing New Energy Technology Co., Ltd.</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} JNX EBIKE. <span data-i18n="footer.rights"></span></span>
        <span>${COMPANY.creditCode}</span>
      </div>
    </div>
  </footer>`;

  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.innerHTML = header;
  if (f) f.innerHTML = footer;
}

// ---------- 产品卡片渲染 ----------
// 中文界面下把英文规格值翻成中文，其余语言保留原始数据
function specVal(v) {
  return (typeof currentLang !== 'undefined' && currentLang === 'zh' && SPEC_ZH[v]) ? SPEC_ZH[v] : v;
}

function productCard2W(p, idx, featured) {
  // 图02起为真实车型图（图01为画册封面，跳过）
  const img = `images/products/bike_2w_${String(idx+2).padStart(2,'0')}.jpg`;
  const tag = featured && idx < 2 ? '<'+'span class="product-tag hot" data-i18n="prod.hot"></span>' : '';
  return `<article class="product-card" data-type="2w">
    <div class="product-media">
      <img src="${img}" alt="${p.model}" loading="lazy" class="prod-img">
      ${tag}
    </div>
    <div class="product-body">
      <div class="product-model" data-i18n="prod.series2w"></div>
      <h3>${p.model}</h3>
      <div class="spec-row">
        <div class="spec-item">${ICONS.battery}<span><b data-i18n="spec.battery"></b>: ${specVal(p.battery)}</span></div>
        <div class="spec-item">${ICONS.bolt}<span><b data-i18n="spec.motor"></b>: ${specVal(p.motor)}</span></div>
        <div class="spec-item">${ICONS.settings}<span><b data-i18n="spec.brake"></b>: ${specVal(p.brake)}</span></div>
        <div class="spec-item">${ICONS.wrench}<span><b data-i18n="spec.tire"></b>: ${specVal(p.tire)}</span></div>
      </div>
      <div class="product-foot">
        <a href="contact.html"><span data-i18n="prod.inquire"></span> ${ICONS.arrowRight}</a>
        <span class="moq" data-i18n="prod.moq"></span>
      </div>
    </div>
  </article>`;
}

function productCard3W(p, idx) {
  const img = TRI_IMAGES[idx % TRI_IMAGES.length];
  const tag = idx < 2 ? '<'+'span class="product-tag hot" data-i18n="prod.hot"></span>' : '';
  return `<article class="product-card" data-type="${p.type}">
    <div class="product-media">
      <img src="${img}" alt="${p.model}" loading="lazy" class="prod-img">
      ${tag}
    </div>
    <div class="product-body">
      <div class="product-model" data-i18n="prod.series3w"></div>
      <h3>${p.model}</h3>
      <div class="spec-row">
        <div class="spec-item">${ICONS.battery}<span><b data-i18n="spec.motor"></b>: ${specVal(p.motor)}</span></div>
        <div class="spec-item">${ICONS.settings}<span><b data-i18n="spec.brake"></b>: ${specVal(p.brake)}</span></div>
        <div class="spec-item">${ICONS.wrench}<span><b data-i18n="spec.tire"></b>: ${specVal(p.tire)}</span></div>
        <div class="spec-item">${ICONS.truck}<span><b data-i18n="spec.weight"></b>: ${specVal(p.weight)}</span></div>
      </div>
      <div class="product-foot">
        <a href="contact.html"><span data-i18n="prod.inquire"></span> ${ICONS.arrowRight}</a>
        <span class="moq" data-i18n="prod.moq"></span>
      </div>
    </div>
  </article>`;
}

function productCardSpecial(p, idx) {
  const tag = idx < 2 ? '<'+'span class="product-tag hot" data-i18n="prod.new"></span>' : '';
  return `<article class="product-card" data-type="special">
    <div class="product-media">
      <img src="${p.img}" alt="${p.model}" loading="lazy" class="prod-img">
      ${tag}
    </div>
    <div class="product-body">
      <div class="product-model" data-i18n="prod.seriesSpecial"></div>
      <h3>${p.model}</h3>
      <div class="spec-row">
        <div class="spec-item">${ICONS.battery}<span><b data-i18n="spec.battery"></b>: ${specVal(p.battery)}</span></div>
        <div class="spec-item">${ICONS.bolt}<span><b data-i18n="spec.motor"></b>: ${specVal(p.motor)}</span></div>
        <div class="spec-item">${ICONS.settings}<span><b data-i18n="spec.brake"></b>: ${specVal(p.brake)}</span></div>
        <div class="spec-item">${ICONS.wrench}<span><b data-i18n="spec.tire"></b>: ${specVal(p.tire)}</span></div>
        <div class="spec-item">${ICONS.truck}<span><b data-i18n="spec.size"></b>: ${specVal(p.size)}</span></div>
      </div>
      <div class="product-foot">
        <a href="contact.html"><span data-i18n="prod.inquire"></span> ${ICONS.arrowRight}</a>
        <span class="moq" data-i18n="prod.moq"></span>
      </div>
    </div>
  </article>`;
}

function renderProducts() {
  const featured = document.getElementById('featured-grid');
  if (featured) {
    let html = '';
    BIKES_3W.slice(0,3).forEach((p,i)=> html += productCard3W(p, i));
    html += productCard2W(BIKES_2W[0], 0, true);
    html += productCard2W(BIKES_2W[1], 1, true);
    html += productCard2W(BIKES_2W[3], 3, false);
    featured.innerHTML = html;
    // 翻译新注入的动态文本
    featured.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.getAttribute('data-i18n')));
  }

  const allGrid = document.getElementById('all-products-grid');
  if (allGrid) {
    let html = '';
    BIKES_2W.forEach((p,i)=> html += productCard2W(p, i, false));
    BIKES_SPECIAL.forEach((p,i)=> html += productCardSpecial(p, i));
    BIKES_3W.forEach((p,i)=> html += productCard3W(p, i));
    allGrid.innerHTML = html;
    allGrid.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.getAttribute('data-i18n')));
    applyFilterState();
  }
}

// ---------- 筛选 ----------
let activeFilter = 'all';
function applyFilterState() {
  const grid = document.getElementById('all-products-grid');
  if (!grid) return;
  grid.querySelectorAll('.product-card').forEach(card => {
    const type = card.getAttribute('data-type');
    const show = activeFilter === 'all' || activeFilter === type;
    card.classList.toggle('hide', !show);
  });
}

// ---------- 交互初始化 ----------
function initInteractions() {
  // 语言切换
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', e => { e.stopPropagation(); langMenu.classList.toggle('open'); });
    document.addEventListener('click', () => langMenu.classList.remove('open'));
    langMenu.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => setLang(b.dataset.lang));
    });
  }

  // 移动端菜单
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
    mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> mainNav.classList.remove('open')));
  }

  // 滚动阴影
  const header = document.getElementById('site-header');
  if (header) window.addEventListener('scroll', ()=> header.classList.toggle('scrolled', window.scrollY > 10));

  // 筛选按钮
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', ()=> {
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      applyFilterState();
    });
  });

  // FAQ 折叠
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', ()=> q.parentElement.classList.toggle('open'));
  });

  // 询价表单 —— 真实发信（FormSubmit.co AJAX，邮件直达 sales@jnx-ebike.com）
  const form = document.getElementById('inquiry-form');
  if (form) {
    const msg = document.getElementById('form-msg');
    const btn = form.querySelector('button[type="submit"]');
    const showMsg = (text, isError) => {
      if (!msg) return;
      msg.textContent = text;
      msg.classList.toggle('error', !!isError);
      msg.classList.add('show');
      msg.scrollIntoView({behavior:'smooth', block:'center'});
    };
    form.addEventListener('submit', async e => {
      e.preventDefault();
      if (btn) { btn.disabled = true; }
      showMsg(t('ct.sending'), false);
      try {
        const resp = await fetch('https://formsubmit.co/ajax/sales@jnx-ebike.com', {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        showMsg(t('ct.ok'), false);
        form.reset();
      } catch (err) {
        showMsg(t('ct.fail'), true);
      } finally {
        if (btn) { btn.disabled = false; }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  injectLayout();
  applyI18n();       // i18n.js 也监听了，这里重复调用确保动态内容被翻译
  initInteractions();
});

// 语言切换后重绘产品能力由 i18n.js 中的 applyI18n 调用 renderProducts 完成
