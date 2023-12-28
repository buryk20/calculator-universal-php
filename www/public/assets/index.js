(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))e(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function a(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(l){if(l.ep)return;l.ep=!0;const n=a(l);fetch(l.href,n)}})();class C{checkEmptiness(s){let a=[];return s.forEach(e=>{e.value!=""&&e.value!="+38(___)___-__-__"?a.push(!0):a.push(!1)}),a}checkEmail(s){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s.trim())}checkPhone(s){return!s.includes("_")}checkCheckbox(s){let a=s.checked;return s.addEventListener("click",function(){s.checked?a=!0:a=!1}),a}}class N{delClassArr(s,a){s.forEach(e=>{e.classList.remove(a)})}addClassArr(s,a){s.forEach(e=>{e.classList.add(a)})}delClickClassActiveArrStopPrapagation(s,a){s.forEach((e,l)=>{e.addEventListener("click",n=>{n.stopPropagation(),a[l].classList.remove("active")})})}arrClickAddActive(s){s.forEach((a,e)=>{a.addEventListener("click",function(){this.classList.add("active")})})}arrClickAddActiveDel(s,a){s.forEach((e,l)=>{e.addEventListener("click",()=>{this.delClassArr(a,"active"),a[l].classList.add("active")})})}stopPropagationArr(s){s.forEach(a=>{a.addEventListener("click",e=>{e.stopPropagation()})})}animationInputs(s,a){s.forEach((e,l)=>{e.addEventListener("click",function(){a[l].classList.add("active")}),e.addEventListener("blur",()=>{s[l].value===""&&a[l].classList.remove("active")})})}elementDefinitionWithClassActive(s){let a;return s.forEach((e,l)=>{e.classList.contains("active")&&(a=l)}),a}telegramMessege(s,a,e,l,n,r){let c=new Date;fetch(`https://api.telegram.org/bot${s}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:a,text:`Новое сообщение из контактной формы на сайте ${r}. 
 Имя: ${e} 
 Email: ${l} 
 Телефон: ${n}  
 Время: ${c}`})}).then(u=>{if(!u.ok)throw new Error(`Failed to send message: ${u.status} ${u.statusText}`);console.log("Message sent successfully!")}).catch(u=>{console.error(u)})}}let _s=function(){if(document.querySelector("[data-upd-battery-selection]")){const s=document.querySelector("[data-btn-disable]"),a=document.querySelector("[data-kpd-invertor]"),e=document.querySelector("[data-load-w]"),l=document.querySelector("[data-kpd-invertor]"),n=document.querySelector("[data-tame-work]"),r=document.querySelector("[data-rated-voltage]"),c=[e,l,r,n],u=document.querySelectorAll("[data-input-selection-error]"),p=document.querySelector("[data-result-btn]"),o=document.querySelector("[data-result]"),m=new C,w=new N;s.addEventListener("click",function(){this.classList.toggle("active"),a.classList.toggle("disabled"),a.classList.contains("disabled")?(a.setAttribute("disabled",""),a.value=80):a.removeAttribute("disabled")}),p.addEventListener("click",()=>{w.delClassArr(c,"error"),w.delClassArr(u,"active");let E=m.checkEmptiness(c);if(E.some(i=>i===!1))E.forEach((i,k)=>{i===!1&&(c[k].classList.add("error"),u[k].classList.add("active"))});else{let i=e.value,k=l.value,d=n.value,y=r.value,v;v=i/y*d,k>1?v=v/(k/100):v=v/k,o.innerHTML=Math.ceil(v)}})}},vs=function(){if(document.querySelector("[data-percent-calculator]")){const s=new C,a=new N,e=document.querySelector("[data-btn-disable]"),l=document.querySelector("[data-accuracy]");e.addEventListener("click",function(){this.classList.toggle("active"),l.classList.toggle("disabled"),l.classList.contains("disabled")?(l.setAttribute("disabled",""),l.value=2):l.removeAttribute("disabled")});const n=document.querySelector("[data-percent-from-number-input-percent]"),r=document.querySelector("[data-percent-from-number-input-number]"),c=[n,r],u=document.querySelector("[data-percent-from-number-result-btn]"),p=document.querySelector("[data-percent-from-number-error]"),o=document.querySelector("[data-percent-from-number-result-input-percent]"),m=document.querySelector("[data-percent-from-number-result-input-number]"),w=document.querySelector("[data-percent-from-number-result]");u.addEventListener("click",()=>{event.preventDefault(),p.classList.remove("active"),a.delClassArr(c,"error");let A=s.checkEmptiness(c);if(A.some(_=>_===!1))p.classList.add("active"),A.forEach((_,$)=>{_===!1&&c[$].classList.add("error")});else{let _=n.value,$=r.value,L=$/100*_;if(!l.classList.contains("disabled")){let M=l.value;L=L.toFixed(M)}o.innerHTML=_,m.innerHTML=$,w.innerHTML=L}});const E=document.querySelector("[data-number-from-number-input-first-number]"),i=document.querySelector("[data-number-from-number-input-second-number]"),k=[E,i],d=document.querySelector("[data-number-from-number-result-btn]"),y=document.querySelector("[data-number-from-number-error]"),v=document.querySelector("[data-number-from-number-result-input-first-number]"),S=document.querySelector("[data-number-from-number-result-input-second-number]"),b=document.querySelector("[data-number-from-number-result]");d.addEventListener("click",()=>{event.preventDefault(),y.classList.remove("active"),a.delClassArr(k,"error");let A=s.checkEmptiness(k);if(A.some(_=>_===!1))A.forEach((_,$)=>{y.classList.add("active"),_===!1&&k[$].classList.add("error")});else{let _=E.value,$=i.value,L=_/($/100);if(!l.classList.contains("disabled")){let M=l.value;L=L.toFixed(M)}v.innerHTML=_,S.innerHTML=$,b.innerHTML=L}});const f=document.querySelector("[data-number-from-percent-input-number]"),P=document.querySelector("[data-number-from-percent-input-percent]"),F=[f,P],T=document.querySelector("[data-number-from-percent-result-btn]"),h=document.querySelector("[data-number-from-percent-error]"),R=document.querySelector("[data-number-from-percent-result-input-number]"),q=document.querySelector("[data-number-from-percent-result-input-percent]"),ns=document.querySelector("[data-number-from-percent-result]");T.addEventListener("click",()=>{event.preventDefault(),h.classList.remove("active"),a.delClassArr(F,"error");let A=s.checkEmptiness(F);if(A.some(_=>_===!1))A.forEach((_,$)=>{h.classList.add("active"),_===!1&&F[$].classList.add("error")});else{let _=f.value,$=P.value,L=_/$*100;if(!l.classList.contains("disabled")){let M=l.value;L=L.toFixed(M)}R.innerHTML=_,q.innerHTML=$,ns.innerHTML=L}});const O=document.querySelector("[data-add-percent-input-percent]"),U=document.querySelector("[data-add-percent-input-number]"),V=[O,U],rs=document.querySelector("[data-add-percent-result-btn]"),z=document.querySelector("[data-add-percent-error]"),cs=document.querySelector("[data-add-percent-result-input-percent]"),us=document.querySelector("[data-add-percent-result-input-number]"),ps=document.querySelector("[data-add-percent-result]");rs.addEventListener("click",()=>{event.preventDefault(),z.classList.remove("active"),a.delClassArr(V,"error");let A=s.checkEmptiness(V);if(A.some(_=>_===!1))A.forEach((_,$)=>{z.classList.add("active"),_===!1&&V[$].classList.add("error")});else{let _=O.value,$=U.value,L=$*1+$/100*_;if(!l.classList.contains("disabled")){let M=l.value;L=L.toFixed(M)}cs.innerHTML=_,us.innerHTML=$,ps.innerHTML=L}});const K=document.querySelector("[data-subtract-percent-input-percent]"),G=document.querySelector("[data-subtract-percent-input-number]"),B=[K,G],is=document.querySelector("[data-subtract-percent-result-btn]"),Z=document.querySelector("[data-subtract-percent-error]"),ds=document.querySelector("[data-subtract-percent-result-input-percent]"),os=document.querySelector("[data-subtract-percent-result-input-number]"),ks=document.querySelector("[data-subtract-percent-result]");is.addEventListener("click",()=>{event.preventDefault(),Z.classList.remove("active"),a.delClassArr(B,"error");let A=s.checkEmptiness(B);if(A.some(_=>_===!1))A.forEach((_,$)=>{Z.classList.add("active"),_===!1&&B[$].classList.add("error")});else{let _=K.value,$=G.value,L=$*1-$/100*_;if(!l.classList.contains("disabled")){let M=l.value;L=L.toFixed(M)}ds.innerHTML=_,os.innerHTML=$,ks.innerHTML=L}})}},ys=function(){if(document.querySelector("[data-text-layout-checker]")){const s=document.querySelector("[data-text-layout-checker-input-area]"),a=document.querySelector("[data-text-layout-checker-find-cirillic-btn]"),e=document.querySelector("[data-text-layout-checker-find-latin-btn]"),l=document.querySelector("[data-text-layout-checker-clear-btn]"),n=document.querySelector("[data-text-layout-checker-input-area-copy-btn]"),r=document.querySelector("[data-text-layout-checker-input-area-copy-msg]");l.addEventListener("click",function(){s.innerHTML=""}),a.addEventListener("click",function(){const c=s.textContent,u=/[а-яА-ЯёЁіІїЇєЄ]/g,p=c.replace(u,'<span class="layout__text-found">$&</span>');s.innerHTML=p}),e.addEventListener("click",function(){const c=s.textContent,u=/[a-zA-Z]/g,p=c.replace(u,'<span class="layout__text-found">$&</span>');s.innerHTML=p}),n.addEventListener("click",function(){navigator.clipboard.writeText(s.textContent),r.classList.toggle("active"),setTimeout(()=>r.classList.toggle("active"),800)})}},W=function(t){document.querySelectorAll("[data-dropdown-input-wrp]").forEach(a=>{a.addEventListener("click",()=>{const e=a.closest("[data-custom-dropdown]"),l=e.querySelector("[data-dropdown-input]"),r=e.querySelector("[data-dropdown-list]").querySelectorAll("[data-value]");e.classList.toggle("open"),r.forEach(c=>{c.addEventListener("click",function(){l.value=c.textContent,e.classList.remove("open"),t&&(t.innerHTML=c.textContent)})}),document.addEventListener("click",function(c){e.contains(c.target)||e.classList.remove("open")})})})};W();let bs=function(){if(document.querySelector("[data-text-layout-translator]")){let p=function(d,y){let v="";for(let S=0;S<d.length;S++){let b=d.charAt(S);v+=y[b]||b}return v};var s=p;const a=document.querySelector("[data-text-layout-translator-input-area]");let e={"`":"ё",q:"й",w:"ц",e:"у",r:"к",t:"е",y:"н",u:"г",i:"ш",o:"щ",p:"з","[":"х","]":"ъ",a:"ф",s:"ы",d:"в",f:"а",g:"п",h:"р",j:"о",k:"л",l:"д",";":"ж","'":"э",z:"я",x:"ч",c:"с",v:"м",b:"и",n:"т",m:"ь",",":"б",".":"ю","/":".","~":"Ё","@":'"',"#":"№",$:";","^":":","&":"?",Q:"Й",W:"Ц",E:"У",R:"К",T:"Е",Y:"Н",U:"Г",I:"Ш",O:"Щ",P:"З","{":"Х","}":"Ъ",A:"Ф",S:"Ы",D:"В",F:"А",G:"П",H:"Р",J:"О",K:"Л",L:"Д",":":"Ж",'"':"Э",Z:"Я",X:"Ч",C:"С",V:"М",B:"И",N:"Т",M:"Ь","<":"Б",">":"Ю","?":","},l={"`":"'",q:"й",w:"ц",e:"у",r:"к",t:"е",y:"н",u:"г",i:"ш",o:"щ",p:"з","[":"х","]":"ї",a:"ф",s:"і",d:"в",f:"а",g:"п",h:"р",j:"о",k:"л",l:"д",";":"ж","'":"є",z:"я",x:"ч",c:"с",v:"м",b:"и",n:"т",m:"ь",",":"б",".":"ю","/":".","~":"₴","@":'"',"#":"№",$:";","^":":","&":"?",Q:"Й",W:"Ц",E:"У",R:"К",T:"Е",Y:"Н",U:"Г",I:"Ш",O:"Щ",P:"З","{":"Х","}":"Ї",A:"Ф",S:"І",D:"В",F:"А",G:"П",H:"Р",J:"О",K:"Л",L:"Д",":":"Ж",'"':"Є",Z:"Я",X:"Ч",C:"С",V:"М",B:"И",N:"Т",M:"Ь","<":"Б",">":"Ю","?":","},n={ё:"`",й:"q",ц:"w",у:"e",к:"r",е:"t",н:"y",г:"u",ш:"i",щ:"o",з:"p",х:"[",ъ:"]",ф:"a",ы:"s",в:"d",а:"f",п:"g",р:"h",о:"j",л:"k",д:"l",ж:";",э:"'",я:"z",ч:"x",с:"c",м:"v",и:"b",т:"n",ь:"m",б:",",ю:".",".":"/",Ё:"~",'"':"@","№":"#",";":"$",":":"^","?":"&",Й:"Q",Ц:"W",У:"E",К:"R",Е:"T",Н:"Y",Г:"U",Ш:"I",Щ:"O",З:"P",Х:"{",Ъ:"}",Ф:"A",Ы:"S",В:"D",А:"F",П:"G",Р:"H",О:"J",Л:"K",Д:"L",Ж:":",Э:'"',Я:"Z",Ч:"X",С:"C",М:"V",И:"B",Т:"N",Ь:"M",Б:"<",Ю:">",",":"?"},r={"'":"`",й:"q",ц:"w",у:"e",к:"r",е:"t",н:"y",г:"u",ш:"i",щ:"o",з:"p",х:"[",ї:"]",ф:"a",і:"s",в:"d",а:"f",п:"g",р:"h",о:"j",л:"k",д:"l",ж:";",є:"'",я:"z",ч:"x",с:"c",м:"v",и:"b",т:"n",ь:"m",б:",",ю:".",".":"/","₴":"~",'"':"@","№":"#",";":"$",":":"^","?":"&",Й:"Q",Ц:"W",У:"E",К:"R",Е:"T",Н:"Y",Г:"U",Ш:"I",Щ:"O",З:"P",Х:"{",Ї:"}",Ф:"A",І:"S",В:"D",А:"F",П:"G",Р:"H",О:"J",Л:"K",Д:"L",Ж:":",Є:'"',Я:"Z",Ч:"X",С:"C",М:"V",И:"B",Т:"N",Ь:"M",Б:"<",Ю:">",",":"?"},c={ё:"'",ъ:"ї",ы:"і",э:"є",Ё:"₴",Ъ:"Ї",Ы:"І",Э:"Є"},u={"'":"ё",ї:"ъ",і:"ы",є:"э","₴":"Ё",Ї:"Ъ",І:"Ы",Є:"Э"};const o=document.querySelector("[data-text-layout-translator-clear-btn]"),m=document.querySelector("[data-text-layout-translator-input-area-copy-btn]"),w=document.querySelector("[data-text-layout-translator-translate-btn]"),E=document.querySelector("[data-language-from]"),i=document.querySelector("[data-language-to]"),k=document.querySelector("[data-text-layout-translator-input-area-copy-msg]");o.addEventListener("click",function(){a.innerHTML=""}),w.addEventListener("click",function(){const d=a.textContent,y=E.value,v=i.value;y==="ENG"&&v==="RUS"?a.innerHTML=p(d,e):y==="ENG"&&v==="UKR"?a.innerHTML=p(d,l):y==="RUS"&&v==="ENG"?a.innerHTML=p(d,n):y==="UKR"&&v==="ENG"?a.innerHTML=p(d,r):y==="UKR"&&v==="RUS"?a.innerHTML=p(d,u):y==="RUS"&&v==="UKR"&&(a.innerHTML=p(d,c))}),m.addEventListener("click",function(){navigator.clipboard.writeText(a.textContent),k.classList.toggle("active"),setTimeout(()=>k.classList.toggle("active"),800)})}},$s=function(){if(document.querySelector("[data-vydalennya-zayvykh-symvoliv]")){const s=document.querySelector("[data-vydalennya-zayvykh-symvoliv-input-area]"),a=document.querySelector("[data-vydalennya-zayvykh-symvoliv-symbols]"),e=document.querySelector("[data-vydalennya-zayvykh-symvoliv-delete-symbols-btn]"),l=document.querySelector("[data-vydalennya-zayvykh-symvoliv-clear-btn]"),n=document.querySelector("[data-vydalennya-zayvykh-symvoliv-input-area-copy-btn]"),r=document.querySelector("[data-vydalennya-zayvykh-symvoliv-input-area-copy-msg]");l.addEventListener("click",function(){s.innerHTML=""}),e.addEventListener("click",function(){let c=s.textContent;a.value.split("").forEach(u=>{for(;c.includes(u);)c=c.replace(u,"")}),s.innerHTML=c}),n.addEventListener("click",function(){navigator.clipboard.writeText(s.textContent),r.classList.toggle("active"),setTimeout(()=>r.classList.toggle("active"),800)})}},fs=function(){if(document.querySelector("[data-form]")){const s=document.querySelectorAll("[data-icon-help]"),a=document.querySelectorAll("[data-close-help-btn]"),e=document.querySelectorAll("[data-help-text]"),l=document.querySelectorAll("[data-help-content]"),n=new N;n.arrClickAddActive(s),n.delClickClassActiveArrStopPrapagation(a,s),n.delClickClassActiveArrStopPrapagation(e,s),n.stopPropagationArr(l)}},ws=function(){if(document.querySelector("[data-wrp-mob-menu]")){const s=document.querySelector("[data-burger]"),a=document.querySelector("[data-content-wrp]");s.addEventListener("click",function(){this.classList.toggle("active"),a.classList.toggle("active")})}},hs=function(){const t=window.location.href;if(!t.includes("localhost")){const s=document.querySelector("[data-lang-ru]"),a=document.querySelector("[data-lang-ua]");t.includes("/ua/")||t.includes("/ua")?a.classList.add("active"):s.classList.add("active")}},Ls=function(){const t=document.querySelector("[data-header-wrp ]");if(t){const s=t.querySelector("[data-btn-menu]"),a=t.querySelector("[data-menu-list-wrp]"),e=document.querySelector("[data-btn-back-call]");s.addEventListener("click",function(){this.classList.toggle("active"),a.classList.toggle("active")}),e.addEventListener("click",()=>{a.classList.remove("active"),s.classList.remove("active")})}},Ss=function(){const t=document.querySelector("[data-raschet-vremeni-avtonomnoy-raboty-IBP]"),s=window.location.href;let a="минут",e="минута",l="час",n="часов",r="часа";if(s.includes("/ua/")&&(a="хвилин",e="хвилина",l="година",n="годин",r="години"),t){const c=document.querySelector("[data-btn-disable]"),u=document.querySelector("[data-kpd-invertor]"),p=document.querySelector("[data-load-w]"),o=document.querySelector("[data-kpd-invertor]"),m=document.querySelector("[data-capacity-akb]"),w=document.querySelector("[data-rated-voltage]"),E=[p,o,w,m],i=document.querySelectorAll("[data-input-selection-error]"),k=document.querySelector("[data-result-btn]"),d=document.querySelector("[data-result]"),y=new C,v=new N;c.addEventListener("click",function(){this.classList.toggle("active"),u.classList.toggle("disabled"),u.classList.contains("disabled")?(u.setAttribute("disabled",""),u.value=80):u.removeAttribute("disabled")}),k.addEventListener("click",()=>{v.delClassArr(E,"error"),v.delClassArr(i,"active");let S=y.checkEmptiness(E);if(S.some(b=>b===!1))S.forEach((b,f)=>{b===!1&&(E[f].classList.add("error"),i[f].classList.add("active"))});else{let b=p.value,f=o.value,P=m.value,F=w.value,T;if(T=P*F/b,f>1?T=T*(f/100):T=T*f,T<1){let h=Math.ceil(T*60).toString();h[h.length-1]==1?d.innerHTML=h+" "+e:d.innerHTML=h+" "+a}else{let h,R,q;h=Math.floor(Number(T)),R=(T-h).toFixed(2),q=R*60,h==1&&(q[q.toString()-1]==1?d.innerHTML=h+" "+l+" "+q+" "+e:d.innerHTML=h+" "+l+" "+q+" "+a),h[h.toString()-1]==2?q[q.toString()-1]==1?d.innerHTML=h+" "+r+" "+q+" "+e:d.innerHTML=h+" "+r+" "+q+" "+a:q[q.toString()-1]==1?d.innerHTML=h+" "+n+" "+q+" "+e:d.innerHTML=h+" "+n+" "+q+" "+a}}})}},ms=function(){if(document.querySelector("[data-navigation-wrp-page]")){const s=document.querySelectorAll("[data-navigation-page-link]");let a=window.location.href;s.forEach(e=>{e.href==a&&e.classList.add("active")})}},qs=function(){if(document.querySelector("[data-raschet-ploshchadi-pryamougolnika]")){const s=document.querySelectorAll("[data-side]"),a=document.querySelector("[data-result-btn]"),e=document.querySelector("[data-result]"),l=document.querySelector("[data-unit-measurement]");W(l);const n=new C,r=new N;a.addEventListener("click",()=>{if(r.delClassArr(s,"error"),n.checkEmptiness(s).includes(!1))n.checkEmptiness(s).forEach((c,u)=>{c===!1&&s[u].classList.add("error")});else{let c=[];s.forEach(u=>{c.push(u.value)}),e.innerHTML=c.reduce((u,p)=>u*p,1)}})}},Es=function(){if(document.querySelector("[data-raschet-perimetra-pryamougolnika]")){const s=document.querySelectorAll("[data-side]"),a=document.querySelector("[data-result-btn]"),e=document.querySelector("[data-result]"),l=document.querySelector("[data-unit-measurement]");W(l);const n=new C,r=new N;a.addEventListener("click",()=>{if(r.delClassArr(s,"error"),n.checkEmptiness(s).includes(!1))n.checkEmptiness(s).forEach((c,u)=>{c===!1&&s[u].classList.add("error")});else{let c=[];s.forEach(u=>{c.push(u.value*1)}),e.innerHTML=c.reduce((u,p)=>u+p)*2}})}},As=function(t,s,a,e,l){return`
        ${Ts(t,s,a,e,l)}
        ${Ms(t,s,a,e,l)}
    `};function Ts(t,s,a,e,l){return`
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${t}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${s}</span>
            </div>
        </div>
        <span> ${l} </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${a}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${e}</span>
            </div>
        </div>
    `}function Ms(t,s,a,e,l){return`
    <span> = </span>
    <div data-result class="kalkulyator-drobe__resul">
        <div class="kalkulyator-drobe__res-wrp">
            <span>${t} * ${e}</span>
            <span class="kalkulyator-drobe__line-sep"></span>
            <span>${s} * ${e}</span>
        </div>
    </div>
    <span> ${l} </span>
    <div data-result class="kalkulyator-drobe__resul">
        <div class="kalkulyator-drobe__res-wrp">
            <span>${a} * ${s}</span>
            <span class="kalkulyator-drobe__line-sep"></span>
            <span>${e} * ${s}</span>
        </div>
    </div>
    <span> = </span>
    <div data-result class="kalkulyator-drobe__resul">
        <div class="kalkulyator-drobe__res-wrp">
            <span>${t*e}</span>
            <span class="kalkulyator-drobe__line-sep"></span>
            <span>${s*e}</span>
        </div>
    </div>
    <span> ${l} </span>
    <div data-result class="kalkulyator-drobe__resul">
        <div class="kalkulyator-drobe__res-wrp">
            <span>${a*s}</span>
            <span class="kalkulyator-drobe__line-sep"></span>
            <span>${e*s}</span>
        </div>
    </div>
    <span> = </span>
    <div data-result class="kalkulyator-drobe__resul">
        <div class="kalkulyator-drobe__res-wrp">
            <span>${t*e} ${l} ${a*s}</span>
            <span class="kalkulyator-drobe__line-sep"></span>
            <span>${s*e}</span>
        </div>
    </div>
    <span> = </span>
    <div data-result class="kalkulyator-drobe__resul">
    ${(t*e+a*s)%(s*e)===0?Ps(t,a,s):ss(t*e,e*s,a*s)}
    </div>
`}function ss(t,s,a,e){let l=Math.floor((t+a)/s),n=t+a-l*s;return l===0?l="":l=Math.floor((t+a)/s),t+a>s?`
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${t+a}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${s}</span>
            </div>
        </div>
        <span> = </span>
        <span>${l}</span>
        <div class="kalkulyator-drobe__res-wrp">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${n}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${s}</span>
            </div>
        </div>
    `:`
            <span>${l}</span>
            <div class="kalkulyator-drobe__res-wrp">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${n}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${s}</span>
                </div>
            </div>
        `}function Ps(t,s,a){let e=(t+s)/a;return`
        <div class="kalkulyator-drobe__res-wrp">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${t+s} </span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${a}</span>
            </div>
        </div>
        <span> = </span>
        <div class="kalkulyator-drobe__res-wrp">
            <div class="kalkulyator-drobe__res-wrp">
                ${e}
            </div>
        </div>
    `}let gs=function(t,s,a,e,l,n,r){return a===n?`
        ${I(t,s,a,e,l,n,r)}
        ${j(t,s,a,e,l,n,r)}
        ${J(t,a*t+s,a,e,n*e+l)}
    `:`
            ${I(t,s,a,e,l,n,r)}
            ${j(t,s,a,e,l,n,r)}
            <span> = </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${n} * ${a*t+s}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${n} * ${a}</span>
                </div>
            </div>
            <span> ${r} </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${a} * ${n*e+l}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${a} * ${n}</span>
                </div>
            </div>
            <span> = </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${n*(a*t+s)}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${n*a}</span>
                </div>
            </div>
            <span> ${r} </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${a*(n*e+l)}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${a*n}</span>
                </div>
            </div>
            ${J(t,n*(a*t+s),n*a,e,a*(n*e+l))}
        `},I=function(t,s,a,e,l,n,r){return`
        <div data-result class="kalkulyator-drobe__resul">
            <span>${t}</span>
            <div class="kalkulyator-drobe__res-wrp">
                <span>${s}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${a}</span>
            </div>
        </div>
        <span> ${r} </span>
        <div data-result class="kalkulyator-drobe__resul">
            <span>${e}</span>
            <div class="kalkulyator-drobe__res-wrp">
                <span>${l}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${n}</span>
            </div>
        </div>
    `},j=function(t,s,a,e,l,n,r){return`
        <span> = </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${a} * ${t} + ${s}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${a}</span>
            </div>
        </div>
        <span> ${r} </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${n} * ${e} + ${l}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${n}</span>
            </div>
        </div>
        <span> = </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${a*t+s}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${a}</span>
            </div>
        </div>
        <span> ${r} </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${n*e+l}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${n}</span>
            </div>
        </div>
    `};function J(t,s,a,e,l,n,r){return`
        <span> = </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${s} + ${l}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${a}</span>
            </div>
        </div>
        <span> = </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${s+l}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${a}</span>
            </div>
        </div>
        <span> = </span>
        <div data-result class="kalkulyator-drobe__resul">
        ${(s+l)%a===0?"<span>"+(s+l)/a+"</span>":ss(s,a,l)}
        </div>
    `}let Ns=function(t,s,a,e,l,n,r){return`
        ${Fs(t,s,a,e,l,n,r)}
        <span> = </span>
        ${xs(t,s,a,e,l,n,r)}
        <span> = </span>
        ${Hs(t,s,a,e,l,n,r)}

    `},Cs=function(t,s,a,e,l){return`
        ${Rs(t,s,a,e,l)}
        <span> = </span>
        ${Is(t,s,a,e,l)}
    `};function Fs(t,s,a,e,l,n,r){return`
        <div data-result class="kalkulyator-drobe__resul">
            <span>${t}</span>
            <div class="kalkulyator-drobe__res-wrp">
                <span>${s}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${a}</span>
            </div>
        </div>
        <span> ${r} </span>
        <div data-result class="kalkulyator-drobe__resul">
            <span>${e}</span>
            <div class="kalkulyator-drobe__res-wrp">
                <span>${l}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${n}</span>
            </div>
        </div>
    `}function Rs(t,s,a,e,l){return`
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${t}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${s}</span>
            </div>
        </div>
        <span> ${l} </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${a}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${e}</span>
            </div>
        </div>
    `}let as=function(t,s){return t===s};function xs(t,s,a,e,l,n,r){return`
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${a} * ${t} + ${s}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${a}</span>
            </div>
        </div>
        <span> ${r} </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span> ${n} * ${e} + ${l}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${n}</span>
            </div>
        </div>
        <span> = </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${a*t+s}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${a}</span>
            </div>
        </div>
        <span> ${r} </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span> ${n*e+l}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${n}</span>
            </div>
        </div>
    `}function Hs(t,s,a,e,l,n,r){return as(a,n)?`
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${a*t+s} ${r} ${n*e+l}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${a}</span>
                </div>
            </div>
            <span> = </span>
            ${D(n*(a*t+s)-a*(n*e+l),a*n)}
        `:`
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${n} * ${a*t+s} </span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${a} * ${n}</span>
                </div>
            </div>
            <span> ${r} </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${a} * ${n*e+l}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${n} * ${a}</span>
                </div>
            </div>
            <span> = </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${n*(a*t+s)} </span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${a*n}</span>
                </div>
            </div>
            <span> ${r} </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${a*(n*e+l)}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${n*a}</span>
                </div>
            </div>
            <span> = </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${n*(a*t+s)} ${r} ${a*(n*e+l)}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${a*n}</span>
                </div>
            </div>
            <span> = </span>
            ${D(n*(a*t+s)-a*(n*e+l),a*n)}
        `}function D(t,s){if(t>=s){let a=Math.floor(t/s),e=t-a*s;return e===0?`
                <div data-result class="kalkulyator-drobe__resul">
                    <span>${a}</span>
                </div>
            `:`
                <div data-result class="kalkulyator-drobe__resul">
                    <div class="kalkulyator-drobe__res-wrp">
                        <span>${t}</span>
                        <span class="kalkulyator-drobe__line-sep"></span>
                        <span>${s}</span>
                    </div>
                </div>
                <span> = </span>
                <div data-result class="kalkulyator-drobe__resul">
                    <span>${a}</span>
                    <div class="kalkulyator-drobe__res-wrp">
                        <span>${e}</span>
                        <span class="kalkulyator-drobe__line-sep"></span>
                        <span>${s}</span>
                    </div>
                </div>
            `}else return`
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${t}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${s}</span>
                </div>
            </div>
        `}function Is(t,s,a,e,l){return as(s,e)?t-a>=s?`
                ${D(t-a,s)}
            `:`
                ${X(t,s,a,e,l)}
                <span> = </span>
                ${Q(t,s,a)}
            `:t*e-a*s>e*s?`
                ${Y(t,s,a,e,l)}
                ${D(t*e-a*s,e*s)}
            `:`
                ${Y(t,s,a,e,l)}
                ${X(t*e,e*s,a*s,e,l)}
                <span> = </span>
                ${Q(t*e,e*s,a*s)}
            `}function Q(t,s,a,e,l){return t-a===0?`
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span> 0 </span>
                </div>
            </div>
        `:`
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${t-a}</span></span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${s}</span>
                </div>
            </div>
        `}function X(t,s,a,e,l){return`
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${t} ${l} ${a}</span></span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${s}</span>
            </div>
        </div>
    `}function Y(t,s,a,e,l){return`
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${t} * ${e}</span></span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${s} * ${e}</span>
            </div>
        </div>
        <span> ${l} </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${a} * ${s}</span></span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${e} * ${s}</span>
            </div>
        </div>
        <span> = </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${t*e}</span></span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${s*e}</span>
            </div>
        </div>
        <span> ${l} </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${a*s}</span></span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${e*s}</span>
            </div>
        </div>
        <span> = </span>
    `}let es=function(t,s,a,e,l){return`
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${t} </span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${s}</span>
            </div>
        </div>
        <span> ${l} </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${a}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${e}</span>
            </div>
        </div>
        <span> = </span>
        ${Ds(t,s,a,e,l)}
    `};function Ds(t,s,a,e,l){if(t%s===0&&a%s===0){let n=t/s,r=a/s,c=1,u=1;return`
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span class="kalkulyator-drobe__num">
                    <span class="kalkulyator-drobe__new-num-1">${n}</span>
                    <span class="kalkulyator-drobe__crossed-out-number">${t}</span>
                    ${l}
                    <span class="kalkulyator-drobe__new-num-2">${r}</span>
                    <span class="kalkulyator-drobe__crossed-out-number">${a}</span>
                </span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <div class="kalkulyator-drobe__new-denum-wrp">
                    <span class="kalkulyator-drobe__new-denum">${s}</span>
                    <span class="kalkulyator-drobe__new-denum-1"> ${c} </span>
                    <span>${l}</span>
                    <span class="kalkulyator-drobe__new-denum">${e}</span>
                    <span class="kalkulyator-drobe__new-denum-2"> ${u} </span>
                </div>

            </div>
        </div>
        <span> = </span>
        ${x(n,c,r,u,l)}
    `}if(t%s===0||a%s===0)if(t%s===0){let n=t/s,r=1;return`
                <div data-result class="kalkulyator-drobe__resul">
                    <div class="kalkulyator-drobe__res-wrp">
                        <span class="kalkulyator-drobe__num">
                            <span class="kalkulyator-drobe__new-num-1">${n}</span>
                            <span class="kalkulyator-drobe__crossed-out-number">${t}</span>
                            ${l}
                            <span>${a}</span>
                        </span>
                        <span class="kalkulyator-drobe__line-sep"></span>
                        <div class="kalkulyator-drobe__new-denum-wrp">
                            <span>${s}</span>
                            <span>${l}</span>
                            <span class="kalkulyator-drobe__new-denum">${e}</span>
                            <span class="kalkulyator-drobe__new-denum-2"> ${r} </span>
                        </div>

                    </div>
                </div>
                <span> = </span>
                ${x(n,s,a,r,l)}
            `}else{let n=a/s,r=1;return`
                <div data-result class="kalkulyator-drobe__resul">
                    <div class="kalkulyator-drobe__res-wrp">
                        <span class="kalkulyator-drobe__num">
                            <span>${t}</span>
                            ${l}
                            <span class="kalkulyator-drobe__new-num-2">${n}</span>
                            <span class="kalkulyator-drobe__crossed-out-number">${a}</span>
                        </span>
                        <span class="kalkulyator-drobe__line-sep"></span>
                        <div class="kalkulyator-drobe__new-denum-wrp">
                            <span class="kalkulyator-drobe__new-denum">${s}</span>
                            <span class="kalkulyator-drobe__new-denum-1"> ${r} </span>
                            <span>${l}</span>
                            <span>${e}</span>
                        </div>

                    </div>
                </div>
                <span> = </span>
                ${x(t,r,n,e,l)}
            `}else return`
            ${x(t,s,a,e,l)}
        `}function Vs(t,s,a){if(t>=s){let e=Math.floor(t/s),l=t-e*s;return l===0?`
                <span> = </span>
                <div data-result class="kalkulyator-drobe__resul">
                    <span>${e}</span>
                </div>
            `:`
            <span> = </span>
            <div data-result class="kalkulyator-drobe__resul">
                <span>${e}</span>
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${l}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${s}</span>
                </div>
            </div>
        `}else return s%t===0?`
                <span> = </span>
                <div data-result class="kalkulyator-drobe__resul">
                    <div class="kalkulyator-drobe__res-wrp">
                        <span>1</span>
                        <span class="kalkulyator-drobe__line-sep"></span>
                        <span>${s/t}</span>
                    </div>
                </div>
            `:`

        `}function x(t,s,a,e,l){return`
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${t} ${l} ${a}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${s} ${l} ${e}</span>
            </div>
        </div>
        <span> = </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${t*a}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${s*e}</span>
            </div>
        </div>
        ${Vs(t*a,s*e)}
    `}let Bs=function(t,s,a,e,l,n,r){return`
        ${I(t,s,a,e,l,n,r)}
        ${Ws(t,s,a,e,l,n,r)}
        ${es(a*t+s,a,n*e+l,n,r)}
    `},Ws=function(t,s,a,e,l,n,r){return`
        <span> = </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${a} * ${t} + ${s}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${a}</span>
            </div>
        </div>
        <span> ${r} </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${n} * ${e} + ${l}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${n}</span>
            </div>
        </div>
    `},Os=function(t,s,a,e,l,n,r){return r="÷",`
        ${I(t,s,a,e,l,n,r)}
        ${Ks(t,s,a,e,l,n,r)}
        <span> = </span>
        ${ls(t*a+s,a,e*n+l,n,r)}
    `},ls=function(t,s,a,e,l){l="*";let n=t,r=a;return t%s===0&&a%e===0?`
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${n} </span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${s}</span>
                </div>
            </div>
            <span>  ÷ </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${r}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${e}</span>
                </div>
            </div>
            <span> = </span>

            ${zs(t/s,a/e,n,s,r,e,l,t,a)}
        `:`
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${n} </span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${s}</span>
                </div>
            </div>
            <span>  ÷ </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${r}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${e}</span>
                </div>
            </div>
            <span> = </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${n} </span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${s}</span>
                </div>
            </div>
            <span> ${l} </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${e}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${r}</span>
                </div>
            </div>
            <span> = </span>
            ${ts(n,s,e,r,l)}
        `};function ts(t,s,a,e,l){let n=H(t,s),r=H(a,e),c=H(t,e),u=H(a,s);if(n!=1&&r!=1){let p=t/n,o=a/r,m=s/n,w=e/r;return`
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span class="kalkulyator-drobe__num">
                        <span class="kalkulyator-drobe__new-num-1">${p}</span>
                        <span class="kalkulyator-drobe__crossed-out-number">${t}</span>
                        ${l}
                        <span class="kalkulyator-drobe__new-num-2">${o}</span>
                        <span class="kalkulyator-drobe__crossed-out-number">${a}</span>
                    </span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <div class="kalkulyator-drobe__new-denum-wrp">
                        <span class="kalkulyator-drobe__new-denum">${s}</span>
                        <span class="kalkulyator-drobe__new-denum-1"> ${m} </span>
                        <span>${l}</span>
                        <span class="kalkulyator-drobe__new-denum">${e}</span>
                        <span class="kalkulyator-drobe__new-denum-2"> ${w} </span>
                    </div>
                </div>
            </div>
            <span> = </span>
            ${g(p,m,o,w,l)}
        `}if(c!=1&&u!=1){let p=t/c,o=a/u,m=e/c,w=s/u;return`
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span class="kalkulyator-drobe__num">
                        <span class="kalkulyator-drobe__new-num-1">${p}</span>
                        <span class="kalkulyator-drobe__crossed-out-number">${t}</span>
                        ${l}
                        <span class="kalkulyator-drobe__new-num-2">${o}</span>
                        <span class="kalkulyator-drobe__crossed-out-number">${a}</span>
                    </span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <div class="kalkulyator-drobe__new-denum-wrp">
                        <span class="kalkulyator-drobe__new-denum">${s}</span>
                        <span class="kalkulyator-drobe__new-denum-1"> ${m} </span>
                        <span>${l}</span>
                        <span class="kalkulyator-drobe__new-denum">${e}</span>
                        <span class="kalkulyator-drobe__new-denum-2"> ${w} </span>
                    </div>
                </div>
            </div>
            <span> = </span>
            ${g(p,m,o,w,l)}
        `}if(c!=1||u!=1)if(c!=1){let p=t/c,o=e/c;return`
                <div data-result class="kalkulyator-drobe__resul">
                    <div class="kalkulyator-drobe__res-wrp">
                        <span class="kalkulyator-drobe__num">
                            <span class="kalkulyator-drobe__new-num-1">${p}</span>
                            <span class="kalkulyator-drobe__crossed-out-number">${t}</span>
                            ${l}
                            <span>${a}</span>
                        </span>
                        <span class="kalkulyator-drobe__line-sep"></span>
                        <div class="kalkulyator-drobe__new-denum-wrp">
                            <span>${s}</span>
                            <span>${l}</span>
                            <span class="kalkulyator-drobe__new-denum">${e}</span>
                            <span class="kalkulyator-drobe__new-denum-2"> ${o} </span>
                        </div>

                    </div>
                </div>
                <span> = </span>
                ${g(p,s,a,o,l)}
            `}else{let p=a/u,o=s/u;return`
                <div data-result class="kalkulyator-drobe__resul">
                    <div class="kalkulyator-drobe__res-wrp">
                        <span class="kalkulyator-drobe__num">
                            <span>${t}</span>
                            ${l}
                            <span class="kalkulyator-drobe__new-num-2">${p}</span>
                            <span class="kalkulyator-drobe__crossed-out-number">${a}</span>
                        </span>
                        <span class="kalkulyator-drobe__line-sep"></span>
                        <div class="kalkulyator-drobe__new-denum-wrp">
                            <span class="kalkulyator-drobe__new-denum">${s}</span>
                            <span class="kalkulyator-drobe__new-denum-1"> ${o} </span>
                            <span>${l}</span>
                            <span>${e}</span>
                        </div>

                    </div>
                </div>
                <span> = </span>
                ${g(t,o,p,e,l)}
            `}if(n!=1||r!=1)if(n!=1){let p=t/n,o=e/r;return`
                <div data-result class="kalkulyator-drobe__resul">
                    <div class="kalkulyator-drobe__res-wrp">
                        <span class="kalkulyator-drobe__num">
                            <span class="kalkulyator-drobe__new-num-1">${p}</span>
                            <span class="kalkulyator-drobe__crossed-out-number">${t}</span>
                            ${l}
                            <span>${a}</span>
                        </span>
                        <span class="kalkulyator-drobe__line-sep"></span>
                        <div class="kalkulyator-drobe__new-denum-wrp">
                            <span>${s}</span>
                            <span>${l}</span>
                            <span class="kalkulyator-drobe__new-denum">${e}</span>
                            <span class="kalkulyator-drobe__new-denum-2"> ${o} </span>
                        </div>

                    </div>
                </div>
                <span> = </span>
                ${g(p,s,a,o,l)}
            `}else{let p=a/r,o=e/r;return`
                <div data-result class="kalkulyator-drobe__resul">
                    <div class="kalkulyator-drobe__res-wrp">
                        <span class="kalkulyator-drobe__num">
                            <span>${t}</span>
                            ${l}
                            <span class="kalkulyator-drobe__new-num-2">${p}</span>
                            <span class="kalkulyator-drobe__crossed-out-number">${a}</span>
                        </span>
                        <span class="kalkulyator-drobe__line-sep"></span>
                        <div class="kalkulyator-drobe__new-denum-wrp">
                            <span>${s}</span>
                            <span>${l}</span>
                            <span class="kalkulyator-drobe__new-denum">${e}</span>
                            <span class="kalkulyator-drobe__new-denum-2"> ${o} </span>
                        </div>

                    </div>
                </div>
                <span> = </span>
                ${g(t,s,p,o,l)}
            `}else return`
            ${g(t,s,a,e,l)}
        `}function Us(t,s,a){if(t>=s){let e=Math.floor(t/s),l=t-e*s;return l===0?`
                <span> = </span>
                <div data-result class="kalkulyator-drobe__resul">
                    <span>${e}</span>
                </div>
            `:`
            <span> = </span>
            <div data-result class="kalkulyator-drobe__resul">
                <span>${e}</span>
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${l}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${s}</span>
                </div>
            </div>
        `}else return s%t===0&&t!=1?`
                <span> = </span>
                <div data-result class="kalkulyator-drobe__resul">
                    <div class="kalkulyator-drobe__res-wrp">
                        <span>1</span>
                        <span class="kalkulyator-drobe__line-sep"></span>
                        <span>${s/t}</span>
                    </div>
                </div>
            `:`

        `}function g(t,s,a,e,l){return`
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${t} ${l} ${a}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${s} ${l} ${e}</span>
            </div>
        </div>
        <span> = </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${t*a}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${s*e}</span>
            </div>
        </div>
        ${Us(t*a,s*e)}
    `}function zs(t,s,a,e,l,n,r,c,u){return t%s===0?`
            <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span class="kalkulyator-drobe__num">
                    <span class="kalkulyator-drobe__new-num-1">${t}</span>
                    <span class="kalkulyator-drobe__crossed-out-number">${c}</span>
                </span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <div class="kalkulyator-drobe__new-denum-wrp">
                    <span class="kalkulyator-drobe__new-denum">${n}</span>
                    <span class="kalkulyator-drobe__new-denum-2"> 1 </span>
                </div>
            </div>
            <span> ÷ </span>
            <div class="kalkulyator-drobe__res-wrp">
                <span class="kalkulyator-drobe__num">
                    <span class="kalkulyator-drobe__new-num-2">${s}</span>
                    <span class="kalkulyator-drobe__crossed-out-number">${u}</span>
                </span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <div class="kalkulyator-drobe__new-denum-wrp">
                    <span class="kalkulyator-drobe__new-denum">${n}</span>
                    <span class="kalkulyator-drobe__new-denum-2"> 1 </span>
                </div>
            </div>
            <span> = </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${t}</span>
                </div>
            </div>
            <span> ÷ </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${s}</span>
                </div>
            </div>
            <span> = </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${t/s}</span>
                </div>
            </div>
        `:`
            <span> = </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${a} </span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${e}</span>
                </div>
            </div>
            <span> ${r} </span>
            <div data-result class="kalkulyator-drobe__resul">
                <div class="kalkulyator-drobe__res-wrp">
                    <span>${n}</span>
                    <span class="kalkulyator-drobe__line-sep"></span>
                    <span>${l}</span>
                </div>
            </div>
            <span> = </span>
            ${ts(a,e,n,l,r)}
        `}function H(t,s){const a=(e,l)=>l===0?e:a(l,e%l);return a(t,s)}function Ks(t,s,a,e,l,n,r){return`
        <span> = </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${a*t+s}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${a}</span>
            </div>
        </div>
        <span> ${r} </span>
        <div data-result class="kalkulyator-drobe__resul">
            <div class="kalkulyator-drobe__res-wrp">
                <span>${n*e+l}</span>
                <span class="kalkulyator-drobe__line-sep"></span>
                <span>${n}</span>
            </div>
        </div>
    `}let Gs=function(){if(document.querySelector("[data-kalkulyator-drobe]")){let m=function(i,k){i.forEach((d,y)=>{d.checked&&k[y].classList.add("active")})},w=function(i){i.forEach((k,d)=>{k.addEventListener("click",()=>{l.delClassArr(i,"active"),k.classList.add("active")})})},E=function(i,k){i.forEach((d,y)=>{d.addEventListener("click",()=>{l.delClassArr(k,"active"),k[y].classList.add("active");const v=k[y].querySelectorAll("[data-value]");w(v)})})};var s=m,a=w,e=E;const l=new N,n=new C,r=document.querySelectorAll("[data-type-fractions]"),c=document.querySelectorAll("[data-form-fractions]"),u=document.querySelectorAll("[data-value]"),p=document.querySelector("[data-result-btn]"),o=document.querySelector("[data-result]");m(r,c),w(c[1].querySelectorAll("[data-value]")),E(r,c),p.addEventListener("click",()=>{l.elementDefinitionWithClassActive(c);const i=c[l.elementDefinitionWithClassActive(c)].querySelectorAll("[data-side]");if(l.elementDefinitionWithClassActive(c)===0){const k=parseFloat(i[0].value),d=parseFloat(i[1].value),y=parseFloat(i[2].value),v=parseFloat(i[3].value);if(n.checkEmptiness(i).includes(!1))n.checkEmptiness(i).forEach((S,b)=>{S===!1?i[b].classList.add("error"):i[b].classList.remove("error")});else{l.delClassArr(i,"error");let S=c[l.elementDefinitionWithClassActive(c)].querySelectorAll("[data-value]"),b=S[l.elementDefinitionWithClassActive(S)].getAttribute("data-value");b==="+"&&(o.innerHTML=As(k,d,y,v,b)),b==="-"&&(o.innerHTML=Cs(k,d,y,v,b)),b==="*"&&(o.innerHTML=es(k,d,y,v,b)),b==="÷"&&(o.innerHTML=ls(k,d,y,v,b))}}else{const k=parseFloat(i[0].value),d=parseFloat(i[1].value),y=parseFloat(i[2].value),v=parseFloat(i[3].value),S=parseFloat(i[4].value),b=parseFloat(i[5].value);if(n.checkEmptiness(i).includes(!1))n.checkEmptiness(i).forEach((f,P)=>{f===!1?i[P].classList.add("error"):i[P].classList.remove("error")});else{l.delClassArr(i,"error");let f=u[l.elementDefinitionWithClassActive(u)].getAttribute("data-value");f==="+"&&(o.innerHTML=gs(k,d,y,v,S,b,f)),f==="-"&&(o.innerHTML=Ns(k,d,y,v,S,b,f)),f==="*"&&(o.innerHTML=Bs(k,d,y,v,S,b,f)),f==="/"&&(o.innerHTML=Os(k,d,y,v,S,b,f))}}})}},Zs=function(){const t=document.querySelectorAll("[data-input]"),s=document.querySelectorAll("[data-label]");t.forEach((a,e)=>{a.addEventListener("click",()=>{s[e].classList.add("active"),a.addEventListener("blur",()=>{a.value===""&&s[e].classList.remove("active")})})})},js=function(){document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(s){s.preventDefault();const a=this.getAttribute("href").substring(1),e=document.getElementById(a);if(e){const l=document.querySelector("header").offsetHeight,n=e.offsetTop-l;window.scrollTo({top:n,behavior:"smooth"})}})})})};_s();vs();ys();bs();$s();fs();ws();hs();Ls();Ss();ms();qs();Es();Gs();Zs();js();
