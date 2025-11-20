// Hamburger menu
const hamburger=document.querySelector('.hamburger');const navLinks=document.querySelector('.nav-links');hamburger.addEventListener('click',()=>{navLinks.classList.toggle('show');});
// Countdown
const target=new Date(Date.UTC(2027,6,24,11,0,0));function updateCountdown(){const now=new Date();const diff=target-now;if(diff<=0){['days','hours','minutes','seconds'].forEach(id=>document.getElementById(id).textContent='00');clearInterval(timer);return;}const sec=Math.floor(diff/1000)%60;const min=Math.floor(diff/1000/60)%60;const hrs=Math.floor(diff/1000/60/60)%24;const days=Math.floor(diff/1000/60/60/24);document.getElementById('days').textContent=days;document.getElementById('hours').textContent=hrs.toString().padStart(2,'0');document.getElementById('minutes').textContent=min.toString().padStart(2,'0');document.getElementById('seconds').textContent=sec.toString().padStart(2,'0');}updateCountdown();const timer=setInterval(updateCountdown,1000);
// Map
const map=L.map('map').setView([50.374880,19.762330],9);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap'}).addTo(map);L.marker([50.374880,19.762330]).addTo(map).bindPopup('Kościół');L.marker([50.671712,20.092148]).addTo(map).bindPopup('Sala Impresja');
// Fade-in on scroll
const faders=document.querySelectorAll('.fade-in');window.addEventListener('scroll',()=>{faders.forEach(el=>{const rect=el.getBoundingClientRect();if(rect.top<window.innerHeight-50){el.classList.add('visible');}});});
