function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequire7bc7=o);var l=o("eWCmQ");const s=document.querySelector(".form"),u=(document.querySelector('button[type="submit"]'),t=>{e(l).Notify.success(`✅ ${t}`)}),i=t=>{e(l).Notify.failure(`❌ ${t}`)};s.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.amount.value,n=parseInt(e.currentTarget.elements.step.value);let r=parseInt(e.currentTarget.elements.delay.value);const o=[];for(let e=1;e<=t;e++)setTimeout((()=>{o.push(a(e,r).then(u).catch(i)),r+=n}),r),s.reset();Promise.all(o)}));const a=(e,t)=>new Promise(((n,r)=>{const o=Math.random()>.3;setTimeout((()=>{o?n(`Fulfilled promise ${e} in ${t} ms`):r(`Rejected promise ${e} in ${t} ms`)}),t)}));
//# sourceMappingURL=03-promises.c6056e19.js.map
