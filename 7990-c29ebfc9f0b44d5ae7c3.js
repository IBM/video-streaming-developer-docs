"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[7990],{47990:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r={d:function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o:function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}},o={};function i(e){var n=e;if("string"==typeof e&&(n=function(e){var n=document.getElementById(e);if(!n)throw new TypeError("Reference found by id is null, it must a HTMLIFrameElement");return n}(e)),!(n instanceof HTMLIFrameElement))throw new TypeError("Reference is not an instance of HTMLIFrameElement");return n}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}r.d(o,{Z:function(){return s}});var c=new RegExp("^(http(?:s)?://[^/]+)","im");function u(e){0!==e.indexOf("http")&&(e=window.location.protocol+e);try{return(n=e.match(c),2,function(e){if(Array.isArray(e))return e}(n)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),2!==i.length);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(n)||function(e,n){if(e){if("string"==typeof e)return a(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,2):void 0}}(n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]}catch(e){throw new TypeError("Invalid iframe source")}var n}function f(e,n,t){e.addEventListener?e.addEventListener(n,t,!1):e.attachEvent("on".concat(n),t)}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var s=function(){var e={};function n(n){return function(n){var a=i(n),c=function(n){var a,c,s,d,y=!1,p=!1,m=[],v={},h={},g=[];function w(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),l=1;l<t;l++)a[l-1]=arguments[l];if("socialstream"!==e){if(!y)return m||(m=[]),m.push([e].concat(a)),void o(n,c,{cmd:"probe"});a[0]&&"function"==typeof a[0]&&(v[e]||(v[e]=[]),v[e].push(a[0])),o(n,c,{cmd:e,args:a})}else if(f(window,"message",b),d=i(a[0]),s=u(d.getAttribute("src")),p=!0,g.length)for(var h=0,w=g.length;h<w;h++)r(g[h])}function b(e){var n=d;(n&&n.contentWindow&&n.contentWindow===e.source||e.source===d.id)&&a.onmessage(e)}function E(e){var n,t=JSON.parse(e.data);t.cmd&&"ready"===t.cmd?o(d,s,{cmd:"ready"}):w.apply(this,[t.cmd].concat(function(e){if(Array.isArray(e))return l(e)}(n=t.args)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,n){if(e){if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))}function A(){y||(y=!0,o(n,c,{cmd:"apihandshake",args:[]}),function(){if(m){for(;m.length;)w.apply(this,m.shift());m=null}}(),d&&o(d,s,{cmd:"viewer_ready"}))}function O(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];w.apply(this,n)}return c=u(n.getAttribute("src")).toLowerCase(),n.onload=function(){o(n,c,{cmd:"ready"})},a={host:c,callMethod:O,getProperty:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];O.apply(this,n)},addListener:function(e,n){h[e]||(h[e]=[]),h[e].push(n)},removeListener:function(e,n){if(n)for(var t=0,r=h[e].length;t<r;t++)h[e][t]===n&&h[e].splice(t,1);else h[e]=null},onmessage:function(e){var n;if(c||s||g.push({origin:e.origin,data:e.data}),e.origin.toLowerCase()===c){try{n=JSON.parse(e.data)}catch(e){return}if(n.sstream)return void E(e);if(n.event&&n.event.ready&&(A(),t(h,"ready")),n.event&&!0===n.event.live)return void t(h,"live");if(n.event&&!1===n.event.live)return void t(h,"offline");n.event&&!n.event.ready&&Object.keys(n.event).forEach((function(e){t(h,e,n.event[e])})),n.property&&Object.keys(n.property).forEach((function(e){!function(e,n,t){if(e[n]){var r=e[n];e[n]=null,delete e[n],r.forEach((function(e){e.call(window,t)}))}}(v,e,n.property[e])}))}else p&&e.origin===s&&E(e)},destroy:function(){y=!1,c="",p=!1,s="",d=null,m=[],v={},h={},g=[],e[n.id]&&(e[n.id]=null,delete e[n.id]),n=null}},a}(a);return a.id||(a.id="Embed".concat(Math.ceil(1e5*Math.random()))),c.id=a.id,e[a.id]=c,c}(n)}function t(e,n,t){e[n]&&e[n].forEach((function(e){e.call(window,n,t)}))}function r(n){Object.keys(e).forEach((function(t){var r=e[t],o=document.getElementById(t);o&&o.contentWindow?o.contentWindow===n.source&&r.onmessage(n):"string"==typeof n.source&&n.source===t&&r.onmessage(n)}))}function o(e,n,t){e.contentWindow.postMessage(JSON.stringify(t),n)}return f(window,"message",r),window.PlayerAPI=n,n}(),d=o.Z}}]);
//# sourceMappingURL=7990-c29ebfc9f0b44d5ae7c3.js.map