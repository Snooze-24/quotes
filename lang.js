(function(){var k='lang',l=document.documentElement.lang;
if(l!=='fr'&&l!=='en')l=(navigator.language||'fr').toLowerCase().indexOf('fr')==0?'fr':'en';
function set(x){l=x;document.documentElement.lang=x;
document.querySelectorAll('[data-fr]').forEach(function(n){n.innerHTML=n.getAttribute('data-'+x)});
document.querySelectorAll('.seg button').forEach(function(b){b.classList.toggle('on',b.dataset.l===x)});
try{localStorage.setItem(k,x)}catch(e){}}
document.addEventListener('DOMContentLoaded',function(){set(l);document.querySelectorAll('.seg button').forEach(function(b){b.onclick=function(){set(b.dataset.l)}})})})();
