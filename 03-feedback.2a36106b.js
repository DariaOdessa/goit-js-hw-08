!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))};var r,i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,v=d||s||Function("return this")(),m=Object.prototype.toString,b=Math.max,p=Math.min,g=function(){return v.Date.now()};function y(e,t,n){var r,i,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function m(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function y(e){return l=e,f=setTimeout(T,t),d?m(e):a}function S(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function T(){var e=g();if(S(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?m(e):(r=i=void 0,a)}function h(){var e=g(),n=S(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return y(c);if(s)return f=setTimeout(T,t),m(c)}return void 0===f&&(f=setTimeout(T,t)),a}return t=O(t)||0,j(n)&&(d=!!n.leading,u=(s="maxWait"in n)?b(O(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},h.flush=function(){return void 0===f?a:w(g())},h}function j(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var r=f.test(t);return r||c.test(t)?l(t.slice(2),r?2:8):a.test(t)?NaN:+t}function S(){var t=e(n)(["Заполните все поля формы!"]);return S=function(){return t},t}r=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return j(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var T,w,h="feedback-form-state",x=document.querySelector(".feedback-form"),N=document.querySelector(".feedback-form textarea"),_=document.querySelector(".feedback-form input");x.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email.value,r=t.message.value;n&&r||alert(S());var i={email:n,message:r};console.log(i),localStorage.removeItem(h),e.currentTarget.reset()})),x.addEventListener("input",e(r)((function(){var e=_.value,t=N.value,n=JSON.stringify({email:e,message:t});localStorage.setItem(h,n)}),500)),T=localStorage.getItem(h),(w=JSON.parse(T))&&(N.value=w.message,_.value=w.email)}();
//# sourceMappingURL=03-feedback.2a36106b.js.map
