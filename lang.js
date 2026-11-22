(function(){var k='lang';var l;try{l=localStorage.getItem(k)}catch(e){}
if(!l)l=(navigator.language||'fr').toLowerCase().indexOf('fr')==0?'fr':'en';
function set(x){document.documentElement.lang=x;document.querySelectorAll('[data-fr]').forEach(function(n){n.innerHTML=n.getAttribute('data-'+x)});
var b=document.getElementById('lang');if(b)b.textContent=x==='fr'?'EN':'FR';try{localStorage.setItem(k,x)}catch(e){}}
document.addEventListener('DOMContentLoaded',function(){set(l);var b=document.getElementById('lang');if(b)b.onclick=function(){l=l==='fr'?'en':'fr';set(l)}})})();
