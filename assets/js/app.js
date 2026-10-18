(() => {
  'use strict';
  const { config, content } = window.MundoAnimal;
  const whatsappUrl = (message = config.greeting) => {
    if (!/^\d{8,15}$/.test(config.whatsapp)) return '#contacto';
    return `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(message)}`;
  };
  const services = document.getElementById('services-grid');
  content.services.forEach(item => {
    const card = document.createElement('article');
    card.className = 'service-card';
    const top = document.createElement('div'); top.className = 'service-top';
    const icon = document.createElement('span'); icon.className = 'service-icon'; icon.textContent = item.icon; icon.setAttribute('aria-hidden', 'true');
    const number = document.createElement('span'); number.className = 'service-number'; number.textContent = item.number;
    top.append(icon, number);
    const title = document.createElement('h3'); title.textContent = item.title;
    const description = document.createElement('p'); description.textContent = item.text;
    const link = document.createElement('a'); link.className = 'text-link'; link.href = whatsappUrl(`Hola, Mundo Animal. ${item.topic}`); link.textContent = 'Consultar ↗'; link.setAttribute('aria-label', `Consultar por ${item.title.toLowerCase()} en WhatsApp`); link.target = '_blank'; link.rel = 'noopener noreferrer';
    card.append(top, title, description, link); services.append(card);
  });
  const shop = document.getElementById('shop-grid');
  content.shop.forEach(item => {
    const card = document.createElement('article'); card.className = 'shop-card'; card.dataset.category = item.category;
    const visual = document.createElement('div'); visual.className = `shop-art ${item.category}`;
    const img = document.createElement('img'); img.src = `assets/images/${item.art}`; img.alt = `Ilustración de la categoría ${item.title.toLowerCase()}`; img.width = 360; img.height = 270; img.loading = 'lazy'; visual.append(img);
    const copy = document.createElement('div'); copy.className = 'shop-copy';
    const label = document.createElement('p'); label.className = 'eyebrow'; label.textContent = item.label;
    const title = document.createElement('h3'); title.textContent = item.title;
    const text = document.createElement('p'); text.textContent = item.text;
    const link = document.createElement('a'); link.href = whatsappUrl(`Hola, quiero consultar disponibilidad y precios de ${item.title.toLowerCase()}.`); link.className = 'shop-link'; link.setAttribute('aria-label', `Consultar ${item.title.toLowerCase()} por WhatsApp`); link.textContent = '↗'; link.target = '_blank'; link.rel = 'noopener noreferrer';
    copy.append(label, title, text, link); card.append(visual, copy); shop.append(card);
  });
  document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = whatsappUrl(link.dataset.topic); link.target = '_blank'; link.rel = 'noopener noreferrer'; });
  const menu = document.querySelector('.menu-toggle'); const nav = document.getElementById('nav');
  const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); };
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
  nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
    let count = 0;
    shop.querySelectorAll('[data-category]').forEach(card => { card.hidden = filter !== 'todos' && card.dataset.category !== filter; if (!card.hidden) count++; });
    document.getElementById('filter-status').textContent = `${count} ${count === 1 ? 'categoría disponible' : 'categorías disponibles'} para consultar.`;
  }));
  const dialog = document.getElementById('privacy-dialog');
  document.getElementById('privacy-open').addEventListener('click', () => dialog.showModal());
  dialog.querySelectorAll('.dialog-close').forEach(button => button.addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', e => { if (e.target === dialog) { const rect = dialog.getBoundingClientRect(); if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) dialog.close(); } });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
