/* empty css                      */import{a as g,i as a}from"./assets/vendor-B9-djN47.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="48862394-3b6e651acc095b3f3f471775f",m="https://pixabay.com/api/";async function f(o){try{return(await g.get(m,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){throw console.error("Помилка при отриманні зображень:",r),r}}function d(o){const r=document.querySelector("#gallery");r.innerHTML="";const s=o.map(({webformatURL:i,largeImageURL:e,tags:t,likes:n,views:c,comments:l,downloads:u})=>`<div class="gallery-item">
            <a href="${e}" target="_blank">
              <img src="${i}" alt="${t}" loading="lazy"/>
            </a>
            <div class="image-info">
              <p><strong>Likes:</strong> ${n}</p>
              <p><strong>Views:</strong> ${c}</p>
              <p><strong>Comments:</strong> ${l}</p>
              <p><strong>Downloads:</strong> ${u}</p>
            </div>
          </div>`).join("");r.innerHTML=s}const y=document.querySelector("#search-form");y.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements.searchQuery.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search term",position:"topRight"});return}try{const s=await f(r);if(s.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}d(s)}catch{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
