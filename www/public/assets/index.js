(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(r){if(r.ep)return;r.ep=!0;const c=e(r);fetch(r.href,c)}})();class R{checkEmptiness(t){let e=[];return t.forEach(n=>{n.value!=""&&n.value!="+38(___)___-__-__"?e.push(!0):e.push(!1)}),e}checkEmail(t){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t.trim())}checkPhone(t){return!t.includes("_")}checkCheckbox(t){let e=t.checked;return t.addEventListener("click",function(){t.checked?e=!0:e=!1}),e}}class I{delClassArr(t,e){t.forEach(n=>{n.classList.remove(e)})}delClickClassActiveArrStopPrapagation(t,e){t.forEach((n,r)=>{n.addEventListener("click",c=>{c.stopPropagation(),e[r].classList.remove("active")})})}arrClickAddActive(t){t.forEach((e,n)=>{e.addEventListener("click",function(){this.classList.add("active")})})}arrClickAddActiveDel(t,e){t.forEach((n,r)=>{n.addEventListener("click",()=>{this.delClassArr(e,"active"),e[r].classList.add("active")})})}stopPropagationArr(t){t.forEach(e=>{e.addEventListener("click",n=>{n.stopPropagation()})})}animationInputs(t,e){t.forEach((n,r)=>{n.addEventListener("click",function(){e[r].classList.add("active")}),n.addEventListener("blur",()=>{t[r].value===""&&e[r].classList.remove("active")})})}elementDefinitionWithClassActive(t){let e;return t.forEach((n,r)=>{n.classList.contains("active")&&(e=r)}),e}telegramMessege(t,e,n,r,c,i){let o=new Date;fetch(`https://api.telegram.org/bot${t}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:e,text:`Новое сообщение из контактной формы на сайте ${i}. 
 Имя: ${n} 
 Email: ${r} 
 Телефон: ${c}  
 Время: ${o}`})}).then(l=>{if(!l.ok)throw new Error(`Failed to send message: ${l.status} ${l.statusText}`);console.log("Message sent successfully!")}).catch(l=>{console.error(l)})}}let Y=function(){if(document.querySelector("[data-upd-battery-selection]")){const t=document.querySelector("[data-btn-disable]"),e=document.querySelector("[data-kpd-invertor]"),n=document.querySelector("[data-load-w]"),r=document.querySelector("[data-kpd-invertor]"),c=document.querySelector("[data-tame-work]"),i=document.querySelector("[data-rated-voltage]"),o=[n,r,i,c],l=document.querySelectorAll("[data-input-selection-error]"),f=document.querySelector("[data-result-btn]"),k=document.querySelector("[data-result]"),w=new R,M=new I;t.addEventListener("click",function(){this.classList.toggle("active"),e.classList.toggle("disabled"),e.classList.contains("disabled")?(e.setAttribute("disabled",""),e.value=80):e.removeAttribute("disabled")}),f.addEventListener("click",()=>{M.delClassArr(o,"error"),M.delClassArr(l,"active");let E=w.checkEmptiness(o);if(E.some(q=>q===!1))E.forEach((q,L)=>{q===!1&&(o[L].classList.add("error"),l[L].classList.add("active"))});else{let q=n.value,L=r.value,m=c.value,g=i.value,a;a=q/g*m,console.log(a),L>1?a=a/(L/100):a=a/L,k.innerHTML=Math.ceil(a)}})}},ee=function(){if(document.querySelector("[data-percent-calculator]")){const t=new R,e=new I,n=document.querySelector("[data-btn-disable]"),r=document.querySelector("[data-accuracy]");n.addEventListener("click",function(){this.classList.toggle("active"),r.classList.toggle("disabled"),r.classList.contains("disabled")?(r.setAttribute("disabled",""),r.value=2):r.removeAttribute("disabled")});const c=document.querySelector("[data-percent-from-number-input-percent]"),i=document.querySelector("[data-percent-from-number-input-number]"),o=[c,i],l=document.querySelector("[data-percent-from-number-result-btn]"),f=document.querySelector("[data-percent-from-number-error]"),k=document.querySelector("[data-percent-from-number-result-input-percent]"),w=document.querySelector("[data-percent-from-number-result-input-number]"),M=document.querySelector("[data-percent-from-number-result]");l.addEventListener("click",()=>{event.preventDefault(),f.classList.remove("active"),e.delClassArr(o,"error");let P=t.checkEmptiness(o);if(P.some(u=>u===!1))f.classList.add("active"),P.forEach((u,y)=>{u===!1&&o[y].classList.add("error")});else{let u=c.value,y=i.value,S=y/100*u;if(!r.classList.contains("disabled")){let C=r.value;S=S.toFixed(C)}k.innerHTML=u,w.innerHTML=y,M.innerHTML=S}});const E=document.querySelector("[data-number-from-number-input-first-number]"),q=document.querySelector("[data-number-from-number-input-second-number]"),L=[E,q],m=document.querySelector("[data-number-from-number-result-btn]"),g=document.querySelector("[data-number-from-number-error]"),a=document.querySelector("[data-number-from-number-result-input-first-number]"),s=document.querySelector("[data-number-from-number-result-input-second-number]"),p=document.querySelector("[data-number-from-number-result]");m.addEventListener("click",()=>{event.preventDefault(),g.classList.remove("active"),e.delClassArr(L,"error");let P=t.checkEmptiness(L);if(P.some(u=>u===!1))P.forEach((u,y)=>{g.classList.add("active"),u===!1&&L[y].classList.add("error")});else{let u=E.value,y=q.value,S=u/(y/100);if(!r.classList.contains("disabled")){let C=r.value;S=S.toFixed(C)}a.innerHTML=u,s.innerHTML=y,p.innerHTML=S}});const b=document.querySelector("[data-number-from-percent-input-number]"),N=document.querySelector("[data-number-from-percent-input-percent]"),T=[b,N],h=document.querySelector("[data-number-from-percent-result-btn]"),v=document.querySelector("[data-number-from-percent-error]"),x=document.querySelector("[data-number-from-percent-result-input-number]"),A=document.querySelector("[data-number-from-percent-result-input-percent]"),$=document.querySelector("[data-number-from-percent-result]");h.addEventListener("click",()=>{event.preventDefault(),v.classList.remove("active"),e.delClassArr(T,"error");let P=t.checkEmptiness(T);if(P.some(u=>u===!1))P.forEach((u,y)=>{v.classList.add("active"),u===!1&&T[y].classList.add("error")});else{let u=b.value,y=N.value,S=u/y*100;if(!r.classList.contains("disabled")){let C=r.value;S=S.toFixed(C)}x.innerHTML=u,A.innerHTML=y,$.innerHTML=S}});const B=document.querySelector("[data-add-percent-input-percent]"),D=document.querySelector("[data-add-percent-input-number]"),H=[B,D],O=document.querySelector("[data-add-percent-result-btn]"),W=document.querySelector("[data-add-percent-error]"),K=document.querySelector("[data-add-percent-result-input-percent]"),Z=document.querySelector("[data-add-percent-result-input-number]"),G=document.querySelector("[data-add-percent-result]");O.addEventListener("click",()=>{event.preventDefault(),W.classList.remove("active"),e.delClassArr(H,"error");let P=t.checkEmptiness(H);if(P.some(u=>u===!1))P.forEach((u,y)=>{W.classList.add("active"),u===!1&&H[y].classList.add("error")});else{let u=B.value,y=D.value,S=y*1+y/100*u;if(!r.classList.contains("disabled")){let C=r.value;S=S.toFixed(C)}K.innerHTML=u,Z.innerHTML=y,G.innerHTML=S}});const U=document.querySelector("[data-subtract-percent-input-percent]"),_=document.querySelector("[data-subtract-percent-input-number]"),F=[U,_],j=document.querySelector("[data-subtract-percent-result-btn]"),z=document.querySelector("[data-subtract-percent-error]"),J=document.querySelector("[data-subtract-percent-result-input-percent]"),Q=document.querySelector("[data-subtract-percent-result-input-number]"),X=document.querySelector("[data-subtract-percent-result]");j.addEventListener("click",()=>{event.preventDefault(),z.classList.remove("active"),e.delClassArr(F,"error");let P=t.checkEmptiness(F);if(P.some(u=>u===!1))P.forEach((u,y)=>{z.classList.add("active"),u===!1&&F[y].classList.add("error")});else{let u=U.value,y=_.value,S=y*1-y/100*u;if(!r.classList.contains("disabled")){let C=r.value;S=S.toFixed(C)}J.innerHTML=u,Q.innerHTML=y,X.innerHTML=S}})}},te=function(){if(document.querySelector("[data-text-layout-checker]")){const t=document.querySelector("[data-text-layout-checker-input-area]"),e=document.querySelector("[data-text-layout-checker-find-cirillic-btn]"),n=document.querySelector("[data-text-layout-checker-find-latin-btn]"),r=document.querySelector("[data-text-layout-checker-clear-btn]"),c=document.querySelector("[data-text-layout-checker-input-area-copy-btn]"),i=document.querySelector("[data-text-layout-checker-input-area-copy-msg]");r.addEventListener("click",function(){t.innerHTML=""}),e.addEventListener("click",function(){const o=t.textContent,l=/[а-яА-ЯёЁіІїЇєЄ]/g,f=o.replace(l,'<span class="layout__text-found">$&</span>');t.innerHTML=f}),n.addEventListener("click",function(){const o=t.textContent,l=/[a-zA-Z]/g,f=o.replace(l,'<span class="layout__text-found">$&</span>');t.innerHTML=f}),c.addEventListener("click",function(){navigator.clipboard.writeText(t.textContent),i.classList.toggle("active"),setTimeout(()=>i.classList.toggle("active"),800)})}},V=function(d){document.querySelectorAll("[data-dropdown-input-wrp]").forEach(e=>{e.addEventListener("click",()=>{const n=e.closest("[data-custom-dropdown]"),r=n.querySelector("[data-dropdown-input]"),i=n.querySelector("[data-dropdown-list]").querySelectorAll("[data-value]");n.classList.toggle("open"),i.forEach(o=>{o.addEventListener("click",function(){r.value=o.textContent,n.classList.remove("open"),d&&(d.innerHTML=o.textContent)})}),document.addEventListener("click",function(o){n.contains(o.target)||n.classList.remove("open")})})})};V();let re=function(){if(document.querySelector("[data-text-layout-translator]")){let f=function(m,g){let a="";for(let s=0;s<m.length;s++){let p=m.charAt(s);a+=g[p]||p}return a};var t=f;const e=document.querySelector("[data-text-layout-translator-input-area]");let n={"`":"ё",q:"й",w:"ц",e:"у",r:"к",t:"е",y:"н",u:"г",i:"ш",o:"щ",p:"з","[":"х","]":"ъ",a:"ф",s:"ы",d:"в",f:"а",g:"п",h:"р",j:"о",k:"л",l:"д",";":"ж","'":"э",z:"я",x:"ч",c:"с",v:"м",b:"и",n:"т",m:"ь",",":"б",".":"ю","/":".","~":"Ё","@":'"',"#":"№",$:";","^":":","&":"?",Q:"Й",W:"Ц",E:"У",R:"К",T:"Е",Y:"Н",U:"Г",I:"Ш",O:"Щ",P:"З","{":"Х","}":"Ъ",A:"Ф",S:"Ы",D:"В",F:"А",G:"П",H:"Р",J:"О",K:"Л",L:"Д",":":"Ж",'"':"Э",Z:"Я",X:"Ч",C:"С",V:"М",B:"И",N:"Т",M:"Ь","<":"Б",">":"Ю","?":","},r={"`":"'",q:"й",w:"ц",e:"у",r:"к",t:"е",y:"н",u:"г",i:"ш",o:"щ",p:"з","[":"х","]":"ї",a:"ф",s:"і",d:"в",f:"а",g:"п",h:"р",j:"о",k:"л",l:"д",";":"ж","'":"є",z:"я",x:"ч",c:"с",v:"м",b:"и",n:"т",m:"ь",",":"б",".":"ю","/":".","~":"₴","@":'"',"#":"№",$:";","^":":","&":"?",Q:"Й",W:"Ц",E:"У",R:"К",T:"Е",Y:"Н",U:"Г",I:"Ш",O:"Щ",P:"З","{":"Х","}":"Ї",A:"Ф",S:"І",D:"В",F:"А",G:"П",H:"Р",J:"О",K:"Л",L:"Д",":":"Ж",'"':"Є",Z:"Я",X:"Ч",C:"С",V:"М",B:"И",N:"Т",M:"Ь","<":"Б",">":"Ю","?":","},c={ё:"`",й:"q",ц:"w",у:"e",к:"r",е:"t",н:"y",г:"u",ш:"i",щ:"o",з:"p",х:"[",ъ:"]",ф:"a",ы:"s",в:"d",а:"f",п:"g",р:"h",о:"j",л:"k",д:"l",ж:";",э:"'",я:"z",ч:"x",с:"c",м:"v",и:"b",т:"n",ь:"m",б:",",ю:".",".":"/",Ё:"~",'"':"@","№":"#",";":"$",":":"^","?":"&",Й:"Q",Ц:"W",У:"E",К:"R",Е:"T",Н:"Y",Г:"U",Ш:"I",Щ:"O",З:"P",Х:"{",Ъ:"}",Ф:"A",Ы:"S",В:"D",А:"F",П:"G",Р:"H",О:"J",Л:"K",Д:"L",Ж:":",Э:'"',Я:"Z",Ч:"X",С:"C",М:"V",И:"B",Т:"N",Ь:"M",Б:"<",Ю:">",",":"?"},i={"'":"`",й:"q",ц:"w",у:"e",к:"r",е:"t",н:"y",г:"u",ш:"i",щ:"o",з:"p",х:"[",ї:"]",ф:"a",і:"s",в:"d",а:"f",п:"g",р:"h",о:"j",л:"k",д:"l",ж:";",є:"'",я:"z",ч:"x",с:"c",м:"v",и:"b",т:"n",ь:"m",б:",",ю:".",".":"/","₴":"~",'"':"@","№":"#",";":"$",":":"^","?":"&",Й:"Q",Ц:"W",У:"E",К:"R",Е:"T",Н:"Y",Г:"U",Ш:"I",Щ:"O",З:"P",Х:"{",Ї:"}",Ф:"A",І:"S",В:"D",А:"F",П:"G",Р:"H",О:"J",Л:"K",Д:"L",Ж:":",Є:'"',Я:"Z",Ч:"X",С:"C",М:"V",И:"B",Т:"N",Ь:"M",Б:"<",Ю:">",",":"?"},o={ё:"'",ъ:"ї",ы:"і",э:"є",Ё:"₴",Ъ:"Ї",Ы:"І",Э:"Є"},l={"'":"ё",ї:"ъ",і:"ы",є:"э","₴":"Ё",Ї:"Ъ",І:"Ы",Є:"Э"};const k=document.querySelector("[data-text-layout-translator-clear-btn]"),w=document.querySelector("[data-text-layout-translator-input-area-copy-btn]"),M=document.querySelector("[data-text-layout-translator-translate-btn]"),E=document.querySelector("[data-language-from]"),q=document.querySelector("[data-language-to]"),L=document.querySelector("[data-text-layout-translator-input-area-copy-msg]");k.addEventListener("click",function(){e.innerHTML=""}),M.addEventListener("click",function(){const m=e.textContent,g=E.value,a=q.value;g==="ENG"&&a==="RUS"?e.innerHTML=f(m,n):g==="ENG"&&a==="UKR"?e.innerHTML=f(m,r):g==="RUS"&&a==="ENG"?e.innerHTML=f(m,c):g==="UKR"&&a==="ENG"?e.innerHTML=f(m,i):g==="UKR"&&a==="RUS"?e.innerHTML=f(m,l):g==="RUS"&&a==="UKR"&&(e.innerHTML=f(m,o))}),w.addEventListener("click",function(){navigator.clipboard.writeText(e.textContent),L.classList.toggle("active"),setTimeout(()=>L.classList.toggle("active"),800)})}},ne=function(){if(document.querySelector("[data-vydalennya-zayvykh-symvoliv]")){const t=document.querySelector("[data-vydalennya-zayvykh-symvoliv-input-area]"),e=document.querySelector("[data-vydalennya-zayvykh-symvoliv-symbols]"),n=document.querySelector("[data-vydalennya-zayvykh-symvoliv-delete-symbols-btn]"),r=document.querySelector("[data-vydalennya-zayvykh-symvoliv-clear-btn]"),c=document.querySelector("[data-vydalennya-zayvykh-symvoliv-input-area-copy-btn]"),i=document.querySelector("[data-vydalennya-zayvykh-symvoliv-input-area-copy-msg]");r.addEventListener("click",function(){t.innerHTML=""}),n.addEventListener("click",function(){let o=t.textContent;e.value.split("").forEach(l=>{for(;o.includes(l);)o=o.replace(l,"")}),t.innerHTML=o}),c.addEventListener("click",function(){navigator.clipboard.writeText(t.textContent),i.classList.toggle("active"),setTimeout(()=>i.classList.toggle("active"),800)})}},ae=function(){if(document.querySelector("[data-form]")){const t=document.querySelectorAll("[data-icon-help]"),e=document.querySelectorAll("[data-close-help-btn]"),n=document.querySelectorAll("[data-help-text]"),r=document.querySelectorAll("[data-help-content]"),c=new I;c.arrClickAddActive(t),c.delClickClassActiveArrStopPrapagation(e,t),c.delClickClassActiveArrStopPrapagation(n,t),c.stopPropagationArr(r)}},ce=function(){if(document.querySelector("[data-wrp-mob-menu]")){const t=document.querySelector("[data-burger]"),e=document.querySelector("[data-content-wrp]");t.addEventListener("click",function(){this.classList.toggle("active"),e.classList.toggle("active")})}},oe=function(){const d=window.location.href;if(!d.includes("localhost")){const t=document.querySelector("[data-lang-ru]"),e=document.querySelector("[data-lang-ua]");d.includes("/ua/")||d.includes("/ua")?e.classList.add("active"):t.classList.add("active")}},le=function(){const d=document.querySelector("[data-header-wrp ]");if(d){const t=d.querySelector("[data-btn-menu]"),e=d.querySelector("[data-menu-list-wrp]"),n=document.querySelector("[data-btn-back-call]");console.log(n),t.addEventListener("click",function(){this.classList.toggle("active"),e.classList.toggle("active")}),n.addEventListener("click",()=>{e.classList.remove("active"),t.classList.remove("active")})}},se=function(){const d=document.querySelector("[data-raschet-vremeni-avtonomnoy-raboty-IBP]"),t=window.location.href;let e="минут",n="минута",r="час",c="часов",i="часа";if(t.includes("/ua/")&&(e="хвилин",n="хвилина",r="година",c="годин",i="години"),d){const o=document.querySelector("[data-btn-disable]"),l=document.querySelector("[data-kpd-invertor]"),f=document.querySelector("[data-load-w]"),k=document.querySelector("[data-kpd-invertor]"),w=document.querySelector("[data-capacity-akb]"),M=document.querySelector("[data-rated-voltage]"),E=[f,k,M,w],q=document.querySelectorAll("[data-input-selection-error]"),L=document.querySelector("[data-result-btn]"),m=document.querySelector("[data-result]"),g=new R,a=new I;o.addEventListener("click",function(){this.classList.toggle("active"),l.classList.toggle("disabled"),l.classList.contains("disabled")?(l.setAttribute("disabled",""),l.value=80):l.removeAttribute("disabled")}),L.addEventListener("click",()=>{a.delClassArr(E,"error"),a.delClassArr(q,"active");let s=g.checkEmptiness(E);if(s.some(p=>p===!1))s.forEach((p,b)=>{p===!1&&(E[b].classList.add("error"),q[b].classList.add("active"))});else{let p=f.value,b=k.value,N=w.value,T=M.value,h;if(h=N*T/p,b>1?h=h*(b/100):h=h*b,h<1){let v=Math.ceil(h*60).toString();console.log(v[v.length-1]),v[v.length-1]==1?m.innerHTML=v+" "+n:m.innerHTML=v+" "+e}else{let v,x,A;v=Math.floor(Number(h)),x=(h-v).toFixed(2),A=x*60,v==1&&(A[A.toString()-1]==1?m.innerHTML=v+" "+r+" "+A+" "+n:m.innerHTML=v+" "+r+" "+A+" "+e),v[v.toString()-1]==2?A[A.toString()-1]==1?m.innerHTML=v+" "+i+" "+A+" "+n:m.innerHTML=v+" "+i+" "+A+" "+e:A[A.toString()-1]==1?m.innerHTML=v+" "+c+" "+A+" "+n:m.innerHTML=v+" "+c+" "+A+" "+e}}})}},ue=function(){if(document.querySelector("[data-navigation-wrp-page]")){const t=document.querySelectorAll("[data-navigation-page-link]");let e=window.location.href;t.forEach(n=>{n.href==e&&n.classList.add("active")})}},ie=function(){if(document.querySelector("[data-raschet-ploshchadi-pryamougolnika]")){const t=document.querySelectorAll("[data-side]"),e=document.querySelector("[data-result-btn]"),n=document.querySelector("[data-result]"),r=document.querySelector("[data-unit-measurement]");V(r);const c=new R,i=new I;e.addEventListener("click",()=>{if(i.delClassArr(t,"error"),c.checkEmptiness(t).includes(!1))c.checkEmptiness(t).forEach((o,l)=>{o===!1&&t[l].classList.add("error")});else{let o=[];t.forEach(l=>{o.push(l.value)}),n.innerHTML=o.reduce((l,f)=>l*f,1)}})}},de=function(){if(document.querySelector("[data-raschet-perimetra-pryamougolnika]")){const t=document.querySelectorAll("[data-side]"),e=document.querySelector("[data-result-btn]"),n=document.querySelector("[data-result]"),r=document.querySelector("[data-unit-measurement]");V(r);const c=new R,i=new I;e.addEventListener("click",()=>{if(i.delClassArr(t,"error"),c.checkEmptiness(t).includes(!1))c.checkEmptiness(t).forEach((o,l)=>{o===!1&&t[l].classList.add("error")});else{let o=[];t.forEach(l=>{o.push(l.value*1)}),n.innerHTML=o.reduce((l,f)=>l+f)*2}})}},me=function(){if(document.querySelector("[data-kalkulyator-drobe]")){let M=function(a,s){a.forEach((p,b)=>{p.checked&&s[b].classList.add("active")})},E=function(a){a.forEach((s,p)=>{s.addEventListener("click",()=>{o.delClassArr(a,"active"),s.classList.add("active")})})},q=function(a,s){a.forEach((p,b)=>{p.addEventListener("click",()=>{o.delClassArr(s,"active"),s[b].classList.add("active");const N=s[b].querySelectorAll("[data-value]");E(N)})})},L=function(a,s){return s===0?a:L(s,a%s)},m=function(a,s){const p=L(a,s);return console.log(a/p),console.log(s/p),[a/p,s/p]},g=function(a,s,p,b,N){if(N==="+"){const T=s*b,h=a*b,v=p*s,x=h+v;return m(x,T)}else if(N==="-"){const T=s*b,h=a*b,v=p*s,x=h-v;return m(x,T)}else if(N==="*"){const T=a*p,h=s*b;return m(T,h)}else if(N==="/"){const T=a*b,h=s*p;return m(T,h)}else throw new Error("Неподдерживаемая операция")};var t=M,e=E,n=q,r=L,c=m,i=g;const o=new I,l=new R,f=document.querySelectorAll("[data-type-fractions]"),k=document.querySelectorAll("[data-form-fractions]");document.querySelectorAll("[data-value]");const w=document.querySelector("[data-result-btn]");M(f,k),E(k[1].querySelectorAll("[data-value]")),q(f,k),w.addEventListener("click",()=>{o.elementDefinitionWithClassActive(k);const a=k[o.elementDefinitionWithClassActive(k)].querySelectorAll("[data-side]");console.log(a),l.checkEmptiness(a).forEach((s,p)=>{s===!1?a[p].classList.add("error"):(a[p].classList.remove("error"),g(numerator1,denominator1,numerator2,denominator2,sing))})})}},pe=function(){const d=document.querySelectorAll("[data-input]"),t=document.querySelectorAll("[data-label]");d.forEach((e,n)=>{e.addEventListener("click",()=>{t[n].classList.add("active"),e.addEventListener("blur",()=>{e.value===""&&t[n].classList.remove("active")})})})};Y();ee();te();re();ne();ae();ce();oe();le();se();ue();ie();de();me();pe();