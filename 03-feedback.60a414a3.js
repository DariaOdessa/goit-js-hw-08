function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function T(e){return c=e,u=setTimeout(S,t),l?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function S(){var e=v();if(j(e))return h(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function h(e){return u=void 0,g&&o?y(e):(o=r=void 0,a)}function w(){var e=v(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return T(f);if(s)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},w.flush=function(){return void 0===u?a:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};let y,T=e=>e;const j=document.querySelector(".feedback-form"),S=document.querySelector(".feedback-form textarea"),h=document.querySelector(".feedback-form input");j.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements,n=t.email.value,o=t.message.value;n&&o||alert(y||(y=T`Заполните все поля формы!`));const r={email:n,message:o};console.log(r),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),j.addEventListener("input",e(t)((function(){const e=h.value,t=S.value,n=JSON.stringify({email:e,message:t});localStorage.setItem("feedback-form-state",n)}),500)),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(S.value=t.message,h.value=t.email)}();
//# sourceMappingURL=03-feedback.60a414a3.js.map
