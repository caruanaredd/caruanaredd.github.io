"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1833:(y,w,m)=>{m.d(w,{c:()=>e});var v=m(9533),h=m(2335),u=m(1363);const e=(c,n)=>{let t,o;const s=(a,g,p)=>{if("undefined"==typeof document)return;const b=document.elementFromPoint(a,g);b&&n(b)?b!==t&&(l(),r(b,p)):l()},r=(a,g)=>{t=a,o||(o=t);const p=t;(0,v.c)(()=>p.classList.add("ion-activated")),g()},l=(a=!1)=>{if(!t)return;const g=t;(0,v.c)(()=>g.classList.remove("ion-activated")),a&&o!==t&&t.click(),t=void 0};return(0,u.createGesture)({el:c,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>s(a.currentX,a.currentY,h.a),onMove:a=>s(a.currentX,a.currentY,h.b),onEnd:()=>{l(!0),(0,h.h)(),o=void 0}})}},7438:(y,w,m)=>{m.d(w,{g:()=>v});const v=(n,t,o,s,r)=>u(n[1],t[1],o[1],s[1],r).map(l=>h(n[0],t[0],o[0],s[0],l)),h=(n,t,o,s,r)=>r*(3*t*Math.pow(r-1,2)+r*(-3*o*r+3*o+s*r))-n*Math.pow(r-1,3),u=(n,t,o,s,r)=>c((s-=r)-3*(o-=r)+3*(t-=r)-(n-=r),3*o-6*t+3*n,3*t-3*n,n).filter(a=>a>=0&&a<=1),c=(n,t,o,s)=>{if(0===n)return((n,t,o)=>{const s=t*t-4*n*o;return s<0?[]:[(-t+Math.sqrt(s))/(2*n),(-t-Math.sqrt(s))/(2*n)]})(t,o,s);const r=(3*(o/=n)-(t/=n)*t)/3,l=(2*t*t*t-9*t*o+27*(s/=n))/27;if(0===r)return[Math.pow(-l,1/3)];if(0===l)return[Math.sqrt(-r),-Math.sqrt(-r)];const a=Math.pow(l/2,2)+Math.pow(r/3,3);if(0===a)return[Math.pow(l/2,.5)-t/3];if(a>0)return[Math.pow(-l/2+Math.sqrt(a),1/3)-Math.pow(l/2+Math.sqrt(a),1/3)-t/3];const g=Math.sqrt(Math.pow(-r/3,3)),p=Math.acos(-l/(2*Math.sqrt(Math.pow(-r/3,3)))),b=2*Math.pow(g,1/3);return[b*Math.cos(p/3)-t/3,b*Math.cos((p+2*Math.PI)/3)-t/3,b*Math.cos((p+4*Math.PI)/3)-t/3]}},5062:(y,w,m)=>{m.d(w,{i:()=>v});const v=h=>h&&""!==h.dir?"rtl"===h.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},4560:(y,w,m)=>{m.r(w),m.d(w,{startFocusVisible:()=>e});const v="ion-focused",u=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],e=c=>{let n=[],t=!0;const o=c?c.shadowRoot:document,s=c||document.body,r=f=>{n.forEach(d=>d.classList.remove(v)),f.forEach(d=>d.classList.add(v)),n=f},l=()=>{t=!1,r([])},a=f=>{t=u.includes(f.key),t||r([])},g=f=>{if(t&&f.composedPath){const d=f.composedPath().filter(E=>!!E.classList&&E.classList.contains("ion-focusable"));r(d)}},p=()=>{o.activeElement===s&&r([])};return o.addEventListener("keydown",a),o.addEventListener("focusin",g),o.addEventListener("focusout",p),o.addEventListener("touchstart",l),o.addEventListener("mousedown",l),{destroy:()=>{o.removeEventListener("keydown",a),o.removeEventListener("focusin",g),o.removeEventListener("focusout",p),o.removeEventListener("touchstart",l),o.removeEventListener("mousedown",l)},setFocus:r}}},2407:(y,w,m)=>{m.d(w,{C:()=>c,a:()=>u,d:()=>e});var v=m(5861),h=m(206);const u=function(){var n=(0,v.Z)(function*(t,o,s,r,l,a){if(t)return t.attachViewToDom(o,s,l,r);if(!(a||"string"==typeof s||s instanceof HTMLElement))throw new Error("framework delegate is missing");const g="string"==typeof s?o.ownerDocument&&o.ownerDocument.createElement(s):s;return r&&r.forEach(p=>g.classList.add(p)),l&&Object.assign(g,l),o.appendChild(g),yield new Promise(p=>(0,h.c)(g,p)),g});return function(o,s,r,l,a,g){return n.apply(this,arguments)}}(),e=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},c=()=>{let n,t;return{attachViewToDom:function(){var r=(0,v.Z)(function*(l,a,g={},p=[]){if(n=l,a){const f="string"==typeof a?n.ownerDocument&&n.ownerDocument.createElement(a):a;p.forEach(d=>f.classList.add(d)),Object.assign(f,g),n.appendChild(f),yield new Promise(d=>(0,h.c)(f,d))}else if(n.children.length>0){const f=n.ownerDocument&&n.ownerDocument.createElement("div");p.forEach(d=>f.classList.add(d)),f.append(...n.children),n.appendChild(f)}const b=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),n.parentNode.insertBefore(t,n),b.appendChild(n),n});return function(a,g){return r.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&t&&(t.parentNode.insertBefore(n,t),t.remove()),Promise.resolve())}}},2335:(y,w,m)=>{m.d(w,{a:()=>u,b:()=>e,c:()=>h,d:()=>n,h:()=>c});const v={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const o=this.getEngine();if(!o)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;o.impact({style:s})},notification(t){const o=this.getEngine();if(!o)return;const s=this.isCapacitor()?t.style.toUpperCase():t.style;o.notification({style:s})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},h=()=>{v.selection()},u=()=>{v.selectionStart()},e=()=>{v.selectionChanged()},c=()=>{v.selectionEnd()},n=t=>{v.impact(t)}},6665:(y,w,m)=>{m.d(w,{s:()=>v});const v=o=>{try{if(o instanceof class t{constructor(s){this.value=s}})return o.value;if(!e()||"string"!=typeof o||""===o)return o;const s=document.createDocumentFragment(),r=document.createElement("div");s.appendChild(r),r.innerHTML=o,n.forEach(p=>{const b=s.querySelectorAll(p);for(let f=b.length-1;f>=0;f--){const d=b[f];d.parentNode?d.parentNode.removeChild(d):s.removeChild(d);const E=u(d);for(let i=0;i<E.length;i++)h(E[i])}});const l=u(s);for(let p=0;p<l.length;p++)h(l[p]);const a=document.createElement("div");a.appendChild(s);const g=a.querySelector("div");return null!==g?g.innerHTML:a.innerHTML}catch(s){return console.error(s),""}},h=o=>{if(o.nodeType&&1!==o.nodeType)return;for(let r=o.attributes.length-1;r>=0;r--){const l=o.attributes.item(r),a=l.name;if(!c.includes(a.toLowerCase())){o.removeAttribute(a);continue}const g=l.value;null!=g&&g.toLowerCase().includes("javascript:")&&o.removeAttribute(a)}const s=u(o);for(let r=0;r<s.length;r++)h(s[r])},u=o=>null!=o.children?o.children:o.childNodes,e=()=>{const o=window,s=o&&o.Ionic&&o.Ionic.config;return!s||(s.get?s.get("sanitizerEnabled",!0):!0===s.sanitizerEnabled||void 0===s.sanitizerEnabled)},c=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"]},8117:(y,w,m)=>{m.d(w,{a:()=>v,b:()=>l,c:()=>n,d:()=>a,e:()=>i,f:()=>u,g:()=>h,h:()=>d,i:()=>t,j:()=>s,k:()=>g,l:()=>o,m:()=>c,n:()=>e,o:()=>r,p:()=>p,q:()=>b,r:()=>f,s:()=>E});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},410:(y,w,m)=>{m.r(w),m.d(w,{KEYBOARD_DID_CLOSE:()=>h,KEYBOARD_DID_OPEN:()=>v,copyVisualViewport:()=>E,keyboardDidClose:()=>p,keyboardDidOpen:()=>a,keyboardDidResize:()=>g,resetKeyboardAssist:()=>t,setKeyboardClose:()=>l,setKeyboardOpen:()=>r,startKeyboardAssist:()=>o,trackViewportChanges:()=>d});const v="ionKeyboardDidShow",h="ionKeyboardDidHide";let e={},c={},n=!1;const t=()=>{e={},c={},n=!1},o=i=>{s(i),i.visualViewport&&(c=E(i.visualViewport),i.visualViewport.onresize=()=>{d(i),a()||g(i)?r(i):p(i)&&l(i)})},s=i=>{i.addEventListener("keyboardDidShow",_=>r(i,_)),i.addEventListener("keyboardDidHide",()=>l(i))},r=(i,_)=>{b(i,_),n=!0},l=i=>{f(i),n=!1},a=()=>!n&&e.width===c.width&&(e.height-c.height)*c.scale>150,g=i=>n&&!p(i),p=i=>n&&c.height===i.innerHeight,b=(i,_)=>{const D=new CustomEvent(v,{detail:{keyboardHeight:_?_.keyboardHeight:i.innerHeight-c.height}});i.dispatchEvent(D)},f=i=>{const _=new CustomEvent(h);i.dispatchEvent(_)},d=i=>{e=Object.assign({},c),c=E(i.visualViewport)},E=i=>({width:Math.round(i.width),height:Math.round(i.height),offsetTop:i.offsetTop,offsetLeft:i.offsetLeft,pageTop:i.pageTop,pageLeft:i.pageLeft,scale:i.scale})},9955:(y,w,m)=>{m.d(w,{S:()=>h});const h={bubbles:{dur:1e3,circles:9,fn:(u,e,c)=>{const n=u*e/c-u+"ms",t=2*Math.PI*e/c;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(u,e,c)=>{const n=e/c,t=u*n-u+"ms",o=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(u,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:8,fn:(u,e,c)=>({y1:14,y2:26,style:{transform:`rotate(${360/c*e+(e<c/2?180:-180)}deg)`,"animation-delay":u*e/c-u+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(u,e,c)=>({y1:12,y2:20,style:{transform:`rotate(${360/c*e+(e<c/2?180:-180)}deg)`,"animation-delay":u*e/c-u+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(u,e,c)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":u*e/c-u+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(u,e,c)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":u*e/c-u+"ms"}})}}},7300:(y,w,m)=>{m.d(w,{c:()=>u,g:()=>c,h:()=>h,o:()=>t});var v=m(5861);const h=(o,s)=>null!==s.closest(o),u=(o,s)=>"string"==typeof o&&o.length>0?Object.assign({"ion-color":!0,[`ion-color-${o}`]:!0},s):s,c=o=>{const s={};return(o=>void 0!==o?(Array.isArray(o)?o:o.split(" ")).filter(r=>null!=r).map(r=>r.trim()).filter(r=>""!==r):[])(o).forEach(r=>s[r]=!0),s},n=/^[a-z][a-z0-9+\-.]*:/,t=function(){var o=(0,v.Z)(function*(s,r,l,a){if(null!=s&&"#"!==s[0]&&!n.test(s)){const g=document.querySelector("ion-router");if(g)return null!=r&&r.preventDefault(),g.push(s,l,a)}return!1});return function(r,l,a,g){return o.apply(this,arguments)}}()},9446:(y,w,m)=>{m.d(w,{r:()=>f});var v=m(655),h=m(5966),u=m(3262),e=m(2096),c=m(546),n=m(2974),t=m(4182),o=m(9808);function s(d,E){1&d&&(e.TgZ(0,"div")(1,"div",24)(2,"ion-grid")(3,"ion-card")(4,"ion-row")(5,"ion-col",25)(6,"ion-avatar"),e._UZ(7,"img",26),e.qZA()(),e.TgZ(8,"ion-col",27)(9,"h1"),e._uU(10,"(person's name)"),e.qZA(),e.TgZ(11,"ion-text",28),e._uU(12,"(post's date & time)"),e.qZA()()(),e.TgZ(13,"ion-row")(14,"ion-col",6)(15,"p"),e._uU(16,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus porro, voluptatibus quia quisquam magni cupiditate officiis amet ex minima necessitatibus saepe, natus perspiciatis ut corporis? Voluptatem maxime unde placeat ratione. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus porro, voluptatibus quia quisquam magni cupiditate officiis amet ex minima necessitatibus saepe, natus perspiciatis ut corporis? Voluptatem maxime unde placeat ratione. "),e.qZA()()()()()()())}const r=function(d){return["./",d]};function l(d,E){if(1&d&&(e.TgZ(0,"ion-col",32)(1,"ion-card",33),e._UZ(2,"div",34)(3,"div",35),e.TgZ(4,"div",36),e._UZ(5,"img",37),e.qZA(),e.TgZ(6,"ion-card-content")(7,"ion-card-title"),e._uU(8),e.qZA(),e.TgZ(9,"ion-card-subtitle"),e._uU(10),e.qZA(),e.TgZ(11,"ion-row",38)(12,"ion-col",39)(13,"ion-text",40),e._uU(14),e.qZA()(),e.TgZ(15,"ion-col",39)(16,"ion-text",41),e._uU(17,"date/time"),e.qZA()()()()()()),2&d){const i=E.$implicit,_=e.oxw(2);e.xp6(1),e.Q6J("routerLink",e.VKq(5,r,i.id)),e.xp6(4),e.s9C("src",i.image,e.LSH),e.xp6(3),e.Oqu(i.name),e.xp6(2),e.Oqu(_.ensembleService.getEnsembleByID(i.ensembleID).name),e.xp6(4),e.Oqu(i.type)}}function a(d,E){if(1&d){const i=e.EpF();e.TgZ(0,"div")(1,"div",29)(2,"ion-grid")(3,"ion-row")(4,"ion-col",6)(5,"ion-button",30),e.NdJ("click",function(){return e.CHM(i),e.oxw().showModal()}),e._uU(6,"Add Event"),e.qZA()()(),e.TgZ(7,"ion-row"),e.YNc(8,l,18,7,"ion-col",31),e.qZA()()()()}if(2&d){const i=e.oxw();e.xp6(8),e.Q6J("ngForOf",i.ensembleEvent)}}const g=function(d){return["/tabs","tab2",d]};function p(d,E){if(1&d&&(e.TgZ(0,"ion-item-sliding",33)(1,"ion-item")(2,"ion-card",45)(3,"ion-card-content")(4,"ion-grid")(5,"ion-row")(6,"ion-col",39)(7,"h1"),e._uU(8),e.qZA()(),e.TgZ(9,"ion-col",5)(10,"h3"),e._uU(11),e.qZA()(),e.TgZ(12,"ion-col",5)(13,"h3"),e._uU(14),e.qZA()(),e.TgZ(15,"ion-col",5)(16,"h3"),e._uU(17),e.qZA()()()()()()(),e.TgZ(18,"ion-item-options")(19,"ion-item-option"),e._UZ(20,"ion-icon",46),e.qZA()()()),2&d){const i=E.$implicit,_=e.oxw(2);e.Q6J("routerLink",e.VKq(5,g,i.id)),e.xp6(8),e.Oqu(i.name),e.xp6(3),e.Oqu(i.composer),e.xp6(3),e.Oqu(i.instruments),e.xp6(3),e.Oqu(_.ensembleService.getEnsembleByID(i.ensembleID)?_.ensembleService.getEnsembleByID(i.ensembleID).name:"Personal")}}function b(d,E){if(1&d&&(e.TgZ(0,"div")(1,"div")(2,"ion-list",42)(3,"ion-item",43)(4,"ion-grid")(5,"ion-row")(6,"ion-col",39)(7,"h6"),e._uU(8,"Piece Title"),e.qZA()(),e.TgZ(9,"ion-col",5)(10,"h6"),e._uU(11,"Composer"),e.qZA()(),e.TgZ(12,"ion-col",5)(13,"h6"),e._uU(14,"Instrumentation"),e.qZA()(),e.TgZ(15,"ion-col",5)(16,"h6"),e._uU(17,"Ensemble"),e.qZA()()()()(),e.YNc(18,p,21,7,"ion-item-sliding",44),e.qZA()()()),2&d){const i=e.oxw();e.xp6(18),e.Q6J("ngForOf",i.ensembleScore)}}let f=(()=>{class d{constructor(i,_,M,D){this.router=i,this.route=_,this.ensembleService=M,this.modalCtrl=D,this.selectedtab="posts"}ngOnInit(){this.router.events.subscribe(i=>{i instanceof h.gz&&console.log("Link changed.")}),this.ensembleID=parseInt(this.route.snapshot.params.ensembleId),this.selectedEnsemble=this.ensembleService.getEnsembleByID(this.ensembleID),void 0!==this.selectedEnsemble?(this.ensembleEvent=this.ensembleService.getEventsByEnsembleID(this.ensembleID),this.eventCount=this.ensembleService.getEventsLength(),this.ensembleScore=this.ensembleService.getScoresByEnsembleID(this.ensembleID),console.log("ensemble scores:",this.ensembleScore)):console.log("Ensemble not found!")}showModal(){return(0,v.mG)(this,void 0,void 0,function*(){yield(yield this.modalCtrl.create({component:u.s,componentProps:{hasEnsemble:!0,ensembleID:this.ensembleID,ensembleEvent:this.eventCount},cssClass:"eventModal"})).present()})}}return d.\u0275fac=function(i){return new(i||d)(e.Y36(h.F0),e.Y36(h.gz),e.Y36(c.Z),e.Y36(n.IN))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-ensemble"]],decls:56,vars:9,consts:[[1,"ion-no-border"],["slot","start"],["color","primary","defaultHref","home"],["slot","end"],["color","danger"],["size","2"],["size","12"],["id","ensemblePic"],["alt","Ensemble profile image",3,"src"],["id","ensembleAdminAvatar"],["src","/assets/images/userPic.jpg","alt","admin profile image"],["size","10"],["id","noOfMembers","data-icon","ic:baseline-person",1,"iconify"],["id","noOfEvents","data-icon","ic:baseline-person",1,"iconify"],["id","ensembleType","data-icon","ic:baseline-person",1,"iconify"],[3,"ngModel","ngModelChange"],["value","posts","layout","icon-start"],["name","chatbox-ellipses"],["value","events","layout","icon-start"],["name","calendar-clear"],["value","scores","layout","icon-start"],["name","library"],[3,"fullscreen"],[4,"ngIf"],[1,"ensemblePost"],["size","1"],["src","https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"],["size","11"],["color","success"],[1,"events"],["color","primary",1,"ion-float-end",3,"click"],["size","4",4,"ngFor","ngForOf"],["size","4"],[3,"routerLink"],["id","colorGradient"],["id","colorFilter"],["id","cardImage"],[3,"src"],["id","eventCardDetails"],["size","6"],["id","type"],["id","date"],["lines","none"],[1,"listHeader"],[3,"routerLink",4,"ngFor","ngForOf"],["color","light",1,"pieceCard"],["name","trash"]],template:function(i,_){1&i&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA(),e.TgZ(4,"ion-buttons",3)(5,"ion-button",4),e._uU(6,"leave"),e.qZA()()(),e.TgZ(7,"ion-grid")(8,"ion-row")(9,"ion-col",5)(10,"ion-row")(11,"ion-col",6)(12,"ion-avatar",7),e._UZ(13,"img",8),e.qZA()()(),e.TgZ(14,"ion-row")(15,"ion-col",6)(16,"h3"),e._uU(17,"Admins"),e.qZA(),e.TgZ(18,"ion-avatar",9),e._UZ(19,"img",10),e.qZA()()()(),e.TgZ(20,"ion-col",11)(21,"ion-row")(22,"ion-col",6)(23,"h1"),e._uU(24),e.qZA()()(),e.TgZ(25,"ion-row")(26,"ion-col",5),e._UZ(27,"span",12),e._uU(28," 40 "),e.qZA(),e.TgZ(29,"ion-col",5),e._UZ(30,"span",13),e._uU(31," 4 "),e.qZA(),e.TgZ(32,"ion-col",5),e._UZ(33,"span",14),e._uU(34),e.qZA()(),e.TgZ(35,"ion-row")(36,"ion-col",6)(37,"p"),e._uU(38),e.qZA()()()()()(),e.TgZ(39,"ion-segment",15),e.NdJ("ngModelChange",function(D){return _.selectedtab=D}),e.TgZ(40,"ion-segment-button",16)(41,"ion-label"),e._uU(42,"Posts"),e.qZA(),e._UZ(43,"ion-icon",17),e.qZA(),e.TgZ(44,"ion-segment-button",18)(45,"ion-label"),e._uU(46,"Events"),e.qZA(),e._UZ(47,"ion-icon",19),e.qZA(),e.TgZ(48,"ion-segment-button",20)(49,"ion-label"),e._uU(50,"Scores"),e.qZA(),e._UZ(51,"ion-icon",21),e.qZA()()(),e.TgZ(52,"ion-content",22),e.YNc(53,s,17,0,"div",23),e.YNc(54,a,9,1,"div",23),e.YNc(55,b,19,1,"div",23),e.qZA()),2&i&&(e.xp6(13),e.s9C("src",_.selectedEnsemble.picture,e.LSH),e.xp6(11),e.Oqu(_.selectedEnsemble.name),e.xp6(10),e.hij(" ",_.selectedEnsemble.visibility," "),e.xp6(4),e.Oqu(_.selectedEnsemble.description),e.xp6(1),e.Q6J("ngModel",_.selectedtab),e.xp6(13),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("ngIf","posts"==_.selectedtab),e.xp6(1),e.Q6J("ngIf","events"==_.selectedtab),e.xp6(1),e.Q6J("ngIf","scores"==_.selectedtab))},directives:[n.Gu,n.sr,n.Sm,n.oU,n.cs,n.YG,n.jY,n.Nd,n.wI,n.BJ,n.cJ,n.QI,t.JJ,t.On,n.GO,n.Q$,n.gu,n.W2,o.O5,n.PM,n.yW,o.sg,n.YI,h.rH,n.FN,n.Dq,n.tO,n.q_,n.Ie,n.td,n.IK,n.u8],styles:["#ensemblePic[_ngcontent-%COMP%]{width:8em;height:8em;margin:auto}#ensembleAdminAvatar[_ngcontent-%COMP%]{width:2.5em;height:2.5em}ion-header[_ngcontent-%COMP%]{background-color:#d7e2ff}"]}),d})()}}]);