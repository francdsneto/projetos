(()=>{"use strict";console.log("Hello World");const e=document.querySelector("#search-form > form"),n=null==e?void 0:e.querySelector("input#input-localizacao"),t=document.querySelector("#tempo-info");null==e||e.addEventListener("submit",(e=>{return o=void 0,a=void 0,c=function*(){if(e.preventDefault(),!n||!t)return;const o=n.value;if(o.length<3)alert("O local precisa ter, pelo menos, 3 letras");else try{const e=yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${o}&appid=53f474d557b73cd3bebbdc6c93ab062c&lang=pt_BR&units=metric`),n=yield e.json(),a={temperatura:Math.round(n.main.temp),local:n.name,icon:`http://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png`,descricao:n.weather[0].description},r=`\n        <div class="tempo-info-group">\n          <h2>${a.local}</h2>\n          <span>${a.temperatura}º</span>\n          <p>${a.descricao}</p>\n        </div>\n        <img src="${a.icon}">\n    `;t.innerHTML=r}catch(e){console.log("Deu um erro na obtenção dos dados da API.",e)}},new((r=void 0)||(r=Promise))((function(e,n){function t(e){try{l(c.next(e))}catch(e){n(e)}}function i(e){try{l(c.throw(e))}catch(e){n(e)}}function l(n){var o;n.done?e(n.value):(o=n.value,o instanceof r?o:new r((function(e){e(o)}))).then(t,i)}l((c=c.apply(o,a||[])).next())}));var o,a,r,c}))})();