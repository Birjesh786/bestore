// Set year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form: Netlify will capture if deployed there. For local preview, fallback to WhatsApp.
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
  // If running on Netlify, let it submit. Detect by presence of data-netlify attr and running on netlify domain not possible locally.
  // We prevent default & open WhatsApp as fallback when page is served via file:// or localhost without Netlify.
  if(location.hostname === '' || location.protocol === 'file:' || location.hostname === 'localhost'){
    e.preventDefault();
    handleWhatsApp();
    return;
  }
  // else allow normal submission (Netlify)
});

// WhatsApp button
document.getElementById('waBtn').addEventListener('click', handleWhatsApp);
document.getElementById('bookBtn').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
});

function handleWhatsApp(){
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !phone){
    alert('Please enter name and phone number.');
    return;
  }
  const text = encodeURIComponent(`Hello, my name is ${name}. ${message ? 'Message: ' + message : ''} Contact: ${phone}`);
  const waNumber = '918696786878'; // update with country code if needed
  const waLink = `https://wa.me/${waNumber}?text=${text}`;
  window.open(waLink, '_blank');
}

// Simple lightbox implementation
const galleryImgs = Array.from(document.querySelectorAll('#galleryGrid img'));
const lightbox = document.getElementById('lightbox');
const lbImage = document.getElementById('lbImage');
const lbCaption = document.getElementById('lbCaption');
const lbClose = document.getElementById('lbClose');
const lbPrev = document.getElementById('lbPrev');
const lbNext = document.getElementById('lbNext');

let currentIndex = 0;
function openLightbox(idx){
  const img = galleryImgs[idx];
  lbImage.src = img.dataset.full || img.src;
  lbCaption.textContent = img.alt || '';
  lightbox.classList.add('show');
  lightbox.setAttribute('aria-hidden','false');
  currentIndex = idx;
}
function closeLightbox(){
  lightbox.classList.remove('show');
  lightbox.setAttribute('aria-hidden','true');
}
function prevImg(){
  currentIndex = (currentIndex - 1 + galleryImgs.length) % galleryImgs.length;
  openLightbox(currentIndex);
}
function nextImg(){
  currentIndex = (currentIndex + 1) % galleryImgs.length;
  openLightbox(currentIndex);
}

galleryImgs.forEach((img, i) => {
  img.addEventListener('click', () => openLightbox(i));
});
lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', prevImg);
lbNext.addEventListener('click', nextImg);
lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if(lightbox.classList.contains('show')){
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowLeft') prevImg();
    if(e.key === 'ArrowRight') nextImg();
  }
});
