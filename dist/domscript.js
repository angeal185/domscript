const dutil={is_num:t=>"number"==typeof t};function D(){this.d=document,this.r=null}D.prototype={id(t){return this.r=this.d.getElementById(t),this},class(t,r){let e=this.d.getElementsByClassName(t);return dutil.is_num(r)&&(e=e[r]),this.r=e,this},tag(t,r){let e=this.d.getElementsByTagName(t);return dutil.is_num(r)&&(e=e[r]),this.r=e,this},qs(t){return this.r=this.d.querySelector(t),this},qsa(t,r){let e=this.d.querySelectorAll(t);return"number"==typeof r&&(e=e[r]),this.r=e,this},name(t,r){let e=this.d.getElementsByName(t);return dutil.is_num(r)&&(e=e[r]),this.r=e,this},addClass(){return this.r.classList.add(...arguments),this},rmClass(){return this.r.classList.remove(...arguments),this},tgClass(){return this.r.classList.toggle(...arguments),this},hasClass(t){return this.r.classList.contains(t)},attr(t,r){if(r)this.r.setAttribute(t,r);else{let r=this.r;for(let e=0,s=Object.keys(t);e<s.length;e++)r.setAttribute(s[e],t[s[e]])}return this},rmAttr(){let t=[...arguments];for(let r=0;r<t.length;r++)this.r.removeAttribute(t[r]);return this},tgAttr(){return this.r.toggleAttribute(...arguments),this},getAttr(t){if("object"==typeof t){let r={};for(let e=0;e<t.length;e++)r[t[e]]=this.r.getAttribute(t[e]);return r}return this.r.getAttribute(t)},child(t){let r=this.r.children;return dutil.is_num(t)&&(r=r[t]),this.r=r,this},parent(t){return this.r=this.r.parentNode,this},after(){return this.r.after(...arguments),this},before(){return this.r.before(...arguments),this},first(){return this.r=this.r.firstChild,this},last(){return this.r=this.r.lastChild,this},clone(){return this.r=this.r.cloneNode(...arguments),this},append(){return this.r.append(...arguments),this},prepend(){return this.r.prepend(...arguments),this},next(t){return this.r=t?this.r.nextElementSibling:this.r.nextSibling,this},prev(t){return this.r=t?this.r.previousElementSibling:this.r.previousSibling,this},rm:function(){this.r.remove()},empty(t){if(t)this.r.innerHTML="";else for(t=this.r;t.firstChild;)t.removeChild(t.firstChild);return this},replace(t){return this.r.replaceWith(t),this.r=t,this},html(t){return t?(this.r.innerHTML=t,this):this.r.innerHTML},txt(t){return t?(this.r.textContent=t,this):this.r.textContent},each(t){let r=Array.prototype.slice.call(this.r);for(let e=0,s=Object.keys(r);e<s.length;e++)t(r[s[e]],e);return this},filter(t){let r=Array.prototype.slice.call(this.r);for(let e=0,s=Object.keys(r);e<s.length;e++)t(r[s[e]],e)||r[e].remove();return this},eq(t){return this.r=this.r[t],this},on(t,r){return this.r["on"+t]=r,this},off(t,r){return this.r["on"+t]=null,this},addEvt(t,r,e){return e=e||!1,this.r.addEventListener(t,r,e),this},rmEvt(t,r,e){return e=e||!1,this.r.removeEventListener(t,r,e),this},css(t,r){if(r)this.r.style[t]=r;else{let r=this.r;for(let e=0,s=Object.keys(t);e<s.length;e++)r.style[s[e]]=t[s[e]]}return this},create(t){return this.r=this.d.createElement(t),this},click(t){return this.r.click(),this},submit(t){return this.r.submit(),this},blur(t){return this.r.blur(),this},focus(t){return this.r.focus(),this},cb(t){t(this.r)},set(t){return this.r=t,this}};const d=new D;
