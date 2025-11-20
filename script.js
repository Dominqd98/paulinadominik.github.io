// Countdown
const target=new Date(Date.UTC(2027,6,24,11,0,0));
function updateCountdown(){const now=new Date();const diff=target-now;if(diff<=0){['days','hours','minutes','seconds'].forEach(id=>document.getElementById(id).textContent='00');clearInterval(timer);return;}const sec=Math.floor(diff/1000)%60;const min=Math.floor(diff/1000/60)%60;const hrs=Math.floor(diff/1000/60/60)%24;const days=Math.floor(diff/1000/60/60/24);document.getElementById('days').textContent=days;document.getElementById('hours').textContent=hrs.toString().padStart(2,'0');document.getElementById('minutes').textContent=min.toString().padStart(2,'0');document.getElementById('seconds').textContent=sec.toString().padStart(2,'0');}
updateCountdown();const timer=setInterval(updateCountdown,1000);

// RSVP
const form=document.getElementById('rsvpForm');form.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim();const guests=document.getElementById('guests').value;if(name&&guests>0){document.getElementById('rsvpMsg').textContent='Dziękujemy za potwierdzenie!';form.reset();}});

// Map
const map=L.map('map').setView([50.374880,19.762330],9);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap'}).addTo(map);L.marker([50.374880,19.762330]).addTo(map).bindPopup('Kościół');L.marker([50.671712,20.092148]).addTo(map).bindPopup('Sala Impresja');

// ScrollReveal
ScrollReveal().reveal('header',{delay:200});ScrollReveal().reveal('.countdown',{delay:400});ScrollReveal().reveal('.maps',{delay:600});ScrollReveal().reveal('.rsvp',{delay:800});ScrollReveal().reveal('.timeline',{delay:1000});ScrollReveal().reveal('.gallery',{delay:1200});ScrollReveal().reveal('.directions',{delay:1400});

// Parallax
window.addEventListener('scroll',()=>{const scrollY=window.scrollY;document.body.style.setProperty('--scroll',scrollY);document.body.style.backgroundPositionY=`${scrollY*0.2}px`;});
