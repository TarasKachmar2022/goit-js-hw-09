function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("7Y9D8");function l(e,n){return new Promise(((o,t)=>{const i=Math.random()>.3;setTimeout((()=>{i&&o({position:e,delay:n}),t({position:e,delay:n})}),n)}))}function s({position:n,delay:o}){e(r).Notify.success(`✅ Fulfilled promise ${n} in ${o}ms`,{clickToClose:!0,pauseOnHover:!0,useIcon:!1})}function u({position:n,delay:o}){e(r).Notify.success(`❌ Fulfilled promise ${n} in ${o}ms`,{clickToClose:!0,pauseOnHover:!0,useIcon:!1})}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const n=Number(e.target.elements.delay.value),o=Number(e.target.elements.step.value),t=Number(e.target.elements.amount.value);let i=n-o;for(let e=1;e<=t;e+=1){i+=o;l(e,i).then(s).catch(u)}}));
//# sourceMappingURL=03-promises.09decc60.js.map