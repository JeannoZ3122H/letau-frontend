import './polyfills.server.mjs';
import{a as nn,c as an}from"./chunk-IBPDD4FI.mjs";import{c as te,s as tn,u as en}from"./chunk-4C32TVFV.mjs";import{$b as U,Ab as Nt,Ea as ct,Eb as ft,Fa as lt,Fb as J,Ga as Q,Gb as Be,Hb as Qt,Jb as Ue,Kb as Jt,Lb as xt,Nb as He,Ob as We,Pb as Ve,Qb as S,Rb as N,Sb as Dt,Vc as W,Wb as Ct,Wc as Ze,Xb as $e,Xc as D,Yc as Zt,Zb as Z,ab as Le,ac as Ye,ba as bt,bc as Xe,ca as Ne,dd as zt,ea as _t,gb as F,gc as Lt,ha as y,hb as A,hc as Ge,jc as Ke,la as x,ma as B,mc as qe,na as De,nb as ze,nc as Qe,oa as Tt,oc as Je,qc as H,tb as je,ub as Re,va as Et,wa as yt,wb as Ft,xa as vt}from"./chunk-FS4WJWB6.mjs";import{a as c,b}from"./chunk-COT65Y5O.mjs";function pa(t){return/^(http|https):\/\//.test(t)?t:(console.warn(`[ShareButtons]: Sharing link '${t}' is invalid!`),null)}function ga(){return document.defaultView.print()}function ba({params:t,data:e,clipboard:i,uiState:n}){i.copy(t.url),n.set({icon:e.successIcon,text:e.successText,disabled:!0}),setTimeout(()=>{n.set({icon:e.icon,text:e.text,disabled:!1})},e.delay)}var ut=new _t("shareButtonsConfig"),ya=new _t("SHARE_ICONS");function tr(...t){return t}function er(t){return{provide:ut,useValue:t}}var jt=function(t){return t.Anchor="anchor",t.Window="window",t}(jt||{}),V={sharerMethod:jt.Anchor,theme:"default",windowWidth:800,windowHeight:500,moreButtonIcon:["fas","ellipsis-h"],lessButtonIcon:["fas","minus"],moreButtonAriaLabel:"Show more share buttons",lessButtonAriaLabel:"Show less share buttons"},Rt={description:t=>t.description?`${t.description}\r
${t.url}`:t.url},va={type:"facebook",text:"Facebook",ariaLabel:"Share on Facebook",icon:["fab","facebook-f"],color:"#4267B2",share:{desktop:"https://facebook.com/sharer/sharer.php"},params:{url:"u"}},xa={type:"x",text:"X",ariaLabel:"Post on X",icon:["fab","x-twitter"],color:"#000",share:{desktop:"https://x.com/intent/post"},params:{url:"url",description:"text",tags:"hashtags",via:"via"}},Ca={type:"linkedin",text:"LinkedIn",ariaLabel:"Share on LinkedIn",icon:["fab","linkedin-in"],color:"#0a66c2",share:{desktop:"https://www.linkedin.com/sharing/share-offsite"},params:{url:"url"}},wa={type:"pinterest",text:"Pinterest",ariaLabel:"Share on Pinterest",icon:["fab","pinterest-p"],color:"#e60023",share:{desktop:"https://pinterest.com/pin/create/button/"},params:{url:"url",description:"description",image:"media"}},Oa={type:"reddit",text:"Reddit",ariaLabel:"Share on Reddit",icon:["fab","reddit-alien"],color:"#FF4006",share:{desktop:"https://www.reddit.com/submit"},params:{url:"url",title:"title"}},ka={type:"tumblr",text:"Tumblr",ariaLabel:"Share on Tumblr",icon:["fab","tumblr"],color:"#36465D",share:{desktop:"https://tumblr.com/widgets/share/tool"},params:{url:"canonicalUrl",description:"caption",tags:"tags"}},Pa={type:"mix",text:"Mix",ariaLabel:"Share on Mix",icon:["fab","mix"],color:"#eb4924",share:{desktop:"https://mix.com/add"},params:{url:"url"}},Ia={type:"viber",text:"Viber",ariaLabel:"Share on Viber",icon:["fab","viber"],color:"#665ca7",share:{android:"viber://forward",ios:"viber://forward"},params:{description:"text"},paramsFunc:Rt},Sa={type:"vk",text:"VKontakte",ariaLabel:"Share on VKontakte",icon:["fab","vk"],color:"#4C75A3",share:{desktop:"https://vk.com/share.php"},params:{url:"url"}},Aa={type:"telegram",text:"Telegram",ariaLabel:"Share on Telegram",icon:["fab","telegram-plane"],color:"#0088cc",share:{desktop:"https://t.me/share/url"},params:{url:"url",description:"text"}},Ma={type:"messenger",text:"Messenger",ariaLabel:"Share on Messenger",icon:["fab","facebook-messenger"],color:"#168AFF",share:{desktop:"https://www.facebook.com/dialog/send",android:"fb-messenger://share/",ios:"fb-messenger://share/"},params:{url:"link",appId:"app_id",redirectUrl:"redirect_uri"}},_a={type:"whatsapp",text:"WhatsApp",ariaLabel:"Share on WhatsApp",icon:["fab","whatsapp"],color:"#25D366",share:{desktop:"https://api.whatsapp.com/send",android:"whatsapp://send",ios:"https://api.whatsapp.com/send"},params:{url:"link",description:"text"},paramsFunc:Rt},Ta={type:"xing",text:"Xing",ariaLabel:"Share on Xing",icon:["fab","xing"],color:"#006567",share:{desktop:"https://www.xing.com/spi/shares/new"},params:{url:"url"}},Ea={type:"line",text:"Line",ariaLabel:"Share on Line",icon:["fab","line"],color:"#00b900",share:{desktop:"https://social-plugins.line.me/lineit/share"},params:{url:"url"}},Fa={type:"sms",text:"SMS",ariaLabel:"Share link via SMS",icon:["fas","sms"],color:"#20c16c",share:{desktop:"sms:",ios:"sms:&"},params:{description:"body"},paramsFunc:Rt},Na={type:"email",text:"Email",ariaLabel:"Share link via email",icon:["fas","envelope"],color:"#FF961C",share:{desktop:"mailto:"},params:{title:"subject",description:"body"},paramsFunc:Rt},Da={type:"print",text:"Print",ariaLabel:"Print page",icon:["fas","print"],color:"#765AA2",func:ga},La={type:"copy",text:"Copy link",ariaLabel:"Copy link",icon:["fas","link"],color:"#607D8B",data:{text:"Copy link",icon:["fas","link"],successText:"Copied",successIcon:["fas","check"],delay:2e3},func:ba},tt={facebook:va,x:xa,linkedin:Ca,pinterest:wa,reddit:Oa,tumblr:ka,mix:Pa,viber:Ia,vk:Sa,telegram:Aa,messenger:Ma,whatsapp:_a,xing:Ta,line:Ea,sms:Fa,email:Na,print:Da,copy:La},za=(()=>{let e=class e{constructor(){this.document=y(zt),this.icons=y(ya,{optional:!0}),this.meta=y(tn),this.platform=y(an),this.clipboard=y(nn)}getMetaTagContent(n){let a=this.meta.getTag(`property="${n}"`),o=this.meta.getTag(`name="${n}"`);return(a||o)?.getAttribute("content")??null}getComputedUrl(n){return pa(n||this.getMetaTagContent("og:url")||this.document.location.href)}getComputedParams(n){return n.url?{title:n.title,description:n.description,image:n.image,tags:n.tags,via:n.via,url:this.getComputedUrl(n.url),appId:n.appId||this.getMetaTagContent("fb:app_id"),redirectUrl:n.redirectUrl||this.document.location.href}:{title:n.title||this.getMetaTagContent("og:title"),description:n.description||this.getMetaTagContent("og:description"),image:n.image||this.getMetaTagContent("og:image"),tags:n.tags,via:n.via,url:this.getComputedUrl(n.url),appId:n.appId||this.getMetaTagContent("fb:app_id"),redirectUrl:n.redirectUrl||this.document.location.href}}getComputedUrlParams(n,a){let o=this.getComputedParams(a);return Object.entries(n.params).reduce((r,[s,l])=>{if(o[s]){let f=n.paramsFunc?.[s];r[l]=f?f(o):o[s]}return r},{})}getShareButtonInstance(n,a){let o=a?c(c({},tt[n]),a):tt[n];if(o)return o;throw new Error(`[ShareButtons]: The share button '${o}' does not exist!`)}share(n,a){let o;this.platform.IOS&&n.share.ios?o=n.share.ios:this.platform.ANDROID&&n.share.android?o=n.share.android:o=n.share.desktop;let r=this.getComputedUrlParams(n,a.params);if(o)switch(a.method){case jt.Anchor:this.openViaAnchor({params:r,url:o,target:a.target},a.debug);break;case jt.Window:this.openViaWindow({params:r,url:o,target:a.target},a.windowOptions,a.debug);break}}open(n){let a=this.getShareButtonInstance(n.name,n.props);this.openInstance(n,a)}openInstance(n,a){a.share?this.share(a,n):a.func({params:this.getComputedParams(n.params),data:a.data,clipboard:this.clipboard,uiState:n.uiState})}openViaWindow(n,a,o){let r=`${n.url}?${new te({fromObject:n.params}).toString()}`;o&&console.log("[SHARE BUTTONS]: open link via window",r);let s=a?.windowObj||this.document.defaultView;(s?.[a?.openFunc]||this.document.defaultView.open)(r,n.target??"_blank",`width=${a?.width||800}, height=${a?.height||500}`),s.opener??=null}openViaAnchor(n,a){let o=`${n.url}?${new te({fromObject:n.params}).toString()}`;a&&console.log("[SHARE BUTTONS]: open link via anchor",o);let r=this.document.createElement("a");r.setAttribute("target",n.target??"_blank"),r.setAttribute("rel","noopener noreferrer"),r.href=o,r.click(),r.remove()}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=bt({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),ja=new _t("SHARE_BUTTONS_PROP");var on=(()=>{let e=class e{constructor(){this.injectedProps=y(ja,{optional:!0}),this.injectedOptions=y(ut,{optional:!0})||{},this.shareService=y(za),this.nativeElement=y(lt).nativeElement,this.uiState=je({}),this.color=D(()=>this.shareButtonInstance().color),this.text=D(()=>this.uiState().text),this.icon=D(()=>this.uiState().icon),this.disabled=D(()=>this.uiState().disabled),this.shareButton=ct.required(),this.shareButtonInstance=D(()=>{let n=this.shareButton(),a=this.injectedProps?c(c({},tt[n]),this.injectedProps[n]):tt[n];if(a)return a;throw new Error(`[ShareButtons]: The share button '${a}' does not exist!`)}),this.opened=new Q,Zt(()=>{let n=this.shareButtonInstance();this.uiState.set({icon:n.icon,text:n.text,disabled:!1})},{allowSignalWrites:!0}),Zt(()=>{this.nativeElement.toggleAttribute("disabled",this.uiState().disabled)})}share(){this.shareService.openInstance({params:{url:this.url,title:this.title,description:this.description,image:this.image,tags:this.tags,redirectUrl:this.redirectUrl},target:this.injectedOptions.sharerTarget||V.sharerTarget,debug:this.injectedOptions.debug||V.debug,method:this.injectedOptions.sharerMethod||V.sharerMethod,uiState:this.uiState},this.shareButtonInstance()),this.opened.emit(this.shareButton())}};e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=Tt({type:e,selectors:[["","shareButton",""]],hostVars:3,hostBindings:function(a,o){a&1&&Z("click",function(){return o.share()}),a&2&&(ft("aria-label",o.shareButtonInstance().ariaLabel),Be("--button-color",o.color()))},inputs:{shareButton:[x.SignalBased,"shareButton"],title:"title",description:"description",image:"image",tags:"tags",redirectUrl:"redirectUrl",url:"url"},outputs:{opened:"opened"},exportAs:["shareButton"],standalone:!0});let t=e;return t})();var rn=()=>{},we={},_n={},Tn=null,En={mark:rn,measure:rn};try{typeof window<"u"&&(we=window),typeof document<"u"&&(_n=document),typeof MutationObserver<"u"&&(Tn=MutationObserver),typeof performance<"u"&&(En=performance)}catch{}var{userAgent:sn=""}=we.navigator||{},X=we,p=_n,cn=Tn,Bt=En,ir=!!X.document,j=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",Fn=~sn.indexOf("MSIE")||~sn.indexOf("Trident/"),g="classic",Nn="duotone",w="sharp",O="sharp-duotone",Ra=[g,Nn,w,O],Ba={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},ln={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ua=["kit"],Ha=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Wa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Va={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},$a={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Ya={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Xa={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Ga={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Ka={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Dn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},qa=["solid","regular","light","thin","duotone","brands"],Ln=[1,2,3,4,5,6,7,8,9,10],Qa=Ln.concat([11,12,13,14,15,16,17,18,19,20]),wt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ja=[...Object.keys(Xa),...qa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wt.GROUP,wt.SWAP_OPACITY,wt.PRIMARY,wt.SECONDARY].concat(Ln.map(t=>"".concat(t,"x"))).concat(Qa.map(t=>"w-".concat(t))),Za={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ti={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ei={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},fn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},L="___FONT_AWESOME___",se=16,zn="fa",jn="svg-inline--fa",it="data-fa-i2svg",ce="data-fa-pseudo-element",ni="data-fa-pseudo-element-pending",Oe="data-prefix",ke="data-icon",un="fontawesome-i2svg",ai="async",ii=["HTML","HEAD","STYLE","SCRIPT"],Rn=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),Bn=[g,w,O];function At(t){return new Proxy(t,{get(e,i){return i in e?e[i]:e[g]}})}var Un=c({},Dn);Un[g]=c(c(c({},Dn[g]),ln.kit),ln["kit-duotone"]);var nt=At(Un),le=c({},Ka);le[g]=c(c(c({},le[g]),fn.kit),fn["kit-duotone"]);var It=At(le),fe=c({},Ga);fe[g]=c(c({},fe[g]),ei.kit);var at=At(fe),ue=c({},Ya);ue[g]=c(c({},ue[g]),ti.kit);var oi=At(ue),ri=Ha,Hn="fa-layers-text",si=Wa,ci=c({},Ba),or=At(ci),li=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ne=wt,ht=new Set;Object.keys(It[g]).map(ht.add.bind(ht));Object.keys(It[w]).map(ht.add.bind(ht));Object.keys(It[O]).map(ht.add.bind(ht));var fi=[...Ua,...Ja],kt=X.FontAwesomeConfig||{};function ui(t){var e=p.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function di(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[i,n]=e,a=di(ui(i));a!=null&&(kt[n]=a)});var Wn={styleDefault:"solid",familyDefault:"classic",cssPrefix:zn,replacementClass:jn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};kt.familyPrefix&&(kt.cssPrefix=kt.familyPrefix);var pt=c(c({},Wn),kt);pt.autoReplaceSvg||(pt.observeMutations=!1);var u={};Object.keys(Wn).forEach(t=>{Object.defineProperty(u,t,{enumerable:!0,set:function(e){pt[t]=e,Pt.forEach(i=>i(u))},get:function(){return pt[t]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(t){pt.cssPrefix=t,Pt.forEach(e=>e(u))},get:function(){return pt.cssPrefix}});X.FontAwesomeConfig=u;var Pt=[];function mi(t){return Pt.push(t),()=>{Pt.splice(Pt.indexOf(t),1)}}var $=se,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hi(t){if(!t||!j)return;let e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;let i=p.head.childNodes,n=null;for(let a=i.length-1;a>-1;a--){let o=i[a],r=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(n=o)}return p.head.insertBefore(e,n),t}var pi="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function St(){let t=12,e="";for(;t-- >0;)e+=pi[Math.random()*62|0];return e}function gt(t){let e=[];for(let i=(t||[]).length>>>0;i--;)e[i]=t[i];return e}function Pe(t){return t.classList?gt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Vn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gi(t){return Object.keys(t||{}).reduce((e,i)=>e+"".concat(i,'="').concat(Vn(t[i]),'" '),"").trim()}function $t(t){return Object.keys(t||{}).reduce((e,i)=>e+"".concat(i,": ").concat(t[i].trim(),";"),"")}function Ie(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function bi(t){let{transform:e,containerWidth:i,iconWidth:n}=t,a={transform:"translate(".concat(i/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),r="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(r," ").concat(s)},f={transform:"translate(".concat(n/2*-1," -256)")};return{outer:a,inner:l,path:f}}function yi(t){let{transform:e,width:i=se,height:n=se,startCentered:a=!1}=t,o="";return a&&Fn?o+="translate(".concat(e.x/$-i/2,"em, ").concat(e.y/$-n/2,"em) "):a?o+="translate(calc(-50% + ".concat(e.x/$,"em), calc(-50% + ").concat(e.y/$,"em)) "):o+="translate(".concat(e.x/$,"em, ").concat(e.y/$,"em) "),o+="scale(".concat(e.size/$*(e.flipX?-1:1),", ").concat(e.size/$*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var vi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $n(){let t=zn,e=jn,i=u.cssPrefix,n=u.replacementClass,a=vi;if(i!==t||n!==e){let o=new RegExp("\\.".concat(t,"\\-"),"g"),r=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(o,".".concat(i,"-")).replace(r,"--".concat(i,"-")).replace(s,".".concat(n))}return a}var dn=!1;function ae(){u.autoAddCss&&!dn&&(hi($n()),dn=!0)}var xi={mixout(){return{dom:{css:$n,insertCss:ae}}},hooks(){return{beforeDOMElementCreation(){ae()},beforeI2svg(){ae()}}}},z=X||{};z[L]||(z[L]={});z[L].styles||(z[L].styles={});z[L].hooks||(z[L].hooks={});z[L].shims||(z[L].shims=[]);var _=z[L],Yn=[],Xn=function(){p.removeEventListener("DOMContentLoaded",Xn),Wt=1,Yn.map(t=>t())},Wt=!1;j&&(Wt=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),Wt||p.addEventListener("DOMContentLoaded",Xn));function Ci(t){j&&(Wt?setTimeout(t,0):Yn.push(t))}function Mt(t){let{tag:e,attributes:i={},children:n=[]}=t;return typeof t=="string"?Vn(t):"<".concat(e," ").concat(gi(i),">").concat(n.map(Mt).join(""),"</").concat(e,">")}function mn(t,e,i){if(t&&t[e]&&t[e][i])return{prefix:e,iconName:i,icon:t[e][i]}}var wi=function(e,i){return function(n,a,o,r){return e.call(i,n,a,o,r)}},ie=function(e,i,n,a){var o=Object.keys(e),r=o.length,s=a!==void 0?wi(i,a):i,l,f,d;for(n===void 0?(l=1,d=e[o[0]]):(l=0,d=n);l<r;l++)f=o[l],d=s(d,e[f],f,e);return d};function Oi(t){let e=[],i=0,n=t.length;for(;i<n;){let a=t.charCodeAt(i++);if(a>=55296&&a<=56319&&i<n){let o=t.charCodeAt(i++);(o&64512)==56320?e.push(((a&1023)<<10)+(o&1023)+65536):(e.push(a),i--)}else e.push(a)}return e}function de(t){let e=Oi(t);return e.length===1?e[0].toString(16):null}function ki(t,e){let i=t.length,n=t.charCodeAt(e),a;return n>=55296&&n<=56319&&i>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(n-55296)*1024+a-56320+65536:n}function hn(t){return Object.keys(t).reduce((e,i)=>{let n=t[i];return!!n.icon?e[n.iconName]=n.icon:e[i]=n,e},{})}function me(t,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:n=!1}=i,a=hn(e);typeof _.hooks.addPack=="function"&&!n?_.hooks.addPack(t,hn(e)):_.styles[t]=c(c({},_.styles[t]||{}),a),t==="fas"&&me("fa",e)}var{styles:et,shims:Pi}=_,Ii={[g]:Object.values(at[g]),[w]:Object.values(at[w]),[O]:Object.values(at[O])},Se=null,Gn={},Kn={},qn={},Qn={},Jn={},Si={[g]:Object.keys(nt[g]),[w]:Object.keys(nt[w]),[O]:Object.keys(nt[O])};function Ai(t){return~fi.indexOf(t)}function Mi(t,e){let i=e.split("-"),n=i[0],a=i.slice(1).join("-");return n===t&&a!==""&&!Ai(a)?a:null}var Zn=()=>{let t=n=>ie(et,(a,o,r)=>(a[r]=ie(o,n,{}),a),{});Gn=t((n,a,o)=>(a[3]&&(n[a[3]]=o),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{n[s.toString(16)]=o}),n)),Kn=t((n,a,o)=>(n[o]=o,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{n[s]=o}),n)),Jn=t((n,a,o)=>{let r=a[2];return n[o]=o,r.forEach(s=>{n[s]=o}),n});let e="far"in et||u.autoFetchSvg,i=ie(Pi,(n,a)=>{let o=a[0],r=a[1],s=a[2];return r==="far"&&!e&&(r="fas"),typeof o=="string"&&(n.names[o]={prefix:r,iconName:s}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:r,iconName:s}),n},{names:{},unicodes:{}});qn=i.names,Qn=i.unicodes,Se=Yt(u.styleDefault,{family:u.familyDefault})};mi(t=>{Se=Yt(t.styleDefault,{family:u.familyDefault})});Zn();function Ae(t,e){return(Gn[t]||{})[e]}function _i(t,e){return(Kn[t]||{})[e]}function Y(t,e){return(Jn[t]||{})[e]}function ta(t){return qn[t]||{prefix:null,iconName:null}}function Ti(t){let e=Qn[t],i=Ae("fas",t);return e||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function G(){return Se}var Me=()=>({prefix:null,iconName:null,rest:[]});function Yt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:i=g}=e,n=nt[i][t],a=It[i][t]||It[i][n],o=t in _.styles?t:null;return a||o||null}var Ei={[g]:Object.keys(at[g]),[w]:Object.keys(at[w]),[O]:Object.keys(at[O])};function Xt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:i=!1}=e,n={[g]:"".concat(u.cssPrefix,"-").concat(g),[w]:"".concat(u.cssPrefix,"-").concat(w),[O]:"".concat(u.cssPrefix,"-").concat(O)},a=null,o=g,r=Ra.filter(l=>l!==Nn);r.forEach(l=>{(t.includes(n[l])||t.some(f=>Ei[l].includes(f)))&&(o=l)});let s=t.reduce((l,f)=>{let d=Mi(u.cssPrefix,f);if(et[f]?(f=Ii[o].includes(f)?oi[o][f]:f,a=f,l.prefix=f):Si[o].indexOf(f)>-1?(a=f,l.prefix=Yt(f,{family:o})):d?l.iconName=d:f!==u.replacementClass&&!r.some(h=>f===n[h])&&l.rest.push(f),!i&&l.prefix&&l.iconName){let h=a==="fa"?ta(l.iconName):{},m=Y(l.prefix,l.iconName);h.prefix&&(a=null),l.iconName=h.iconName||m||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!et.far&&et.fas&&!u.autoFetchSvg&&(l.prefix="fas")}return l},Me());return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),!s.prefix&&o===w&&(et.fass||u.autoFetchSvg)&&(s.prefix="fass",s.iconName=Y(s.prefix,s.iconName)||s.iconName),!s.prefix&&o===O&&(et.fasds||u.autoFetchSvg)&&(s.prefix="fasds",s.iconName=Y(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=G()||"fas"),s}var he=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];let a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]=c(c({},this.definitions[o]||{}),a[o]),me(o,a[o]);let r=at[g][o];r&&me(r,a[o]),Zn()})}reset(){this.definitions={}}_pullDefinitions(e,i){let n=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(n).map(a=>{let{prefix:o,iconName:r,icon:s}=n[a],l=s[2];e[o]||(e[o]={}),l.length>0&&l.forEach(f=>{typeof f=="string"&&(e[o][f]=s)}),e[o][r]=s}),e}},pn=[],dt={},mt={},Fi=Object.keys(mt);function Ni(t,e){let{mixoutsTo:i}=e;return pn=t,dt={},Object.keys(mt).forEach(n=>{Fi.indexOf(n)===-1&&delete mt[n]}),pn.forEach(n=>{let a=n.mixout?n.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(i[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(r=>{i[o]||(i[o]={}),i[o][r]=a[o][r]})}),n.hooks){let o=n.hooks();Object.keys(o).forEach(r=>{dt[r]||(dt[r]=[]),dt[r].push(o[r])})}n.provides&&n.provides(mt)}),i}function pe(t,e){for(var i=arguments.length,n=new Array(i>2?i-2:0),a=2;a<i;a++)n[a-2]=arguments[a];return(dt[t]||[]).forEach(r=>{e=r.apply(null,[e,...n])}),e}function ot(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];(dt[t]||[]).forEach(o=>{o.apply(null,i)})}function K(){let t=arguments[0],e=Array.prototype.slice.call(arguments,1);return mt[t]?mt[t].apply(null,e):void 0}function ge(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t,i=t.prefix||G();if(e)return e=Y(i,e)||e,mn(ea.definitions,i,e)||mn(_.styles,i,e)}var ea=new he,Di=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,ot("noAuto")},Li={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(ot("beforeI2svg",t),K("pseudoElements2svg",t),K("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e}=t;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,Ci(()=>{ji({autoReplaceSvgRoot:e}),ot("watch",t)})}},zi={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Y(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],i=Yt(t[0]);return{prefix:i,iconName:Y(i,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(u.cssPrefix,"-"))>-1||t.match(ri))){let e=Xt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||G(),iconName:Y(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){let e=G();return{prefix:e,iconName:Y(e,t)||t}}}},k={noAuto:Di,config:u,dom:Li,parse:zi,library:ea,findIconDefinition:ge,toHtml:Mt},ji=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:e=p}=t;(Object.keys(_.styles).length>0||u.autoFetchSvg)&&j&&u.autoReplaceSvg&&k.dom.i2svg({node:e})};function Gt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(i=>Mt(i))}}),Object.defineProperty(t,"node",{get:function(){if(!j)return;let i=p.createElement("div");return i.innerHTML=t.html,i.children}}),t}function Ri(t){let{children:e,main:i,mask:n,attributes:a,styles:o,transform:r}=t;if(Ie(r)&&i.found&&!n.found){let{width:s,height:l}=i,f={x:s/l/2,y:.5};a.style=$t(b(c({},o),{"transform-origin":"".concat(f.x+r.x/16,"em ").concat(f.y+r.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Bi(t){let{prefix:e,iconName:i,children:n,attributes:a,symbol:o}=t,r=o===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(i):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(c({},a),{id:r}),children:n}]}]}function _e(t){let{icons:{main:e,mask:i},prefix:n,iconName:a,transform:o,symbol:r,title:s,maskId:l,titleId:f,extra:d,watchable:h=!1}=t,{width:m,height:v}=i.found?i:e,R=n==="fak",q=[u.replacementClass,a?"".concat(u.cssPrefix,"-").concat(a):""].filter(st=>d.classes.indexOf(st)===-1).filter(st=>st!==""||!!st).concat(d.classes).join(" "),P={children:[],attributes:b(c({},d.attributes),{"data-prefix":n,"data-icon":a,class:q,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(v)})},E=R&&!~d.classes.indexOf("fa-fw")?{width:"".concat(m/v*16*.0625,"em")}:{};h&&(P.attributes[it]=""),s&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(f||St())},children:[s]}),delete P.attributes.title);let C=b(c({},P),{prefix:n,iconName:a,main:e,mask:i,maskId:l,transform:o,symbol:r,styles:c(c({},E),d.styles)}),{children:I,attributes:rt}=i.found&&e.found?K("generateAbstractMask",C)||{children:[],attributes:{}}:K("generateAbstractIcon",C)||{children:[],attributes:{}};return C.children=I,C.attributes=rt,r?Bi(C):Ri(C)}function gn(t){let{content:e,width:i,height:n,transform:a,title:o,extra:r,watchable:s=!1}=t,l=b(c(c({},r.attributes),o?{title:o}:{}),{class:r.classes.join(" ")});s&&(l[it]="");let f=c({},r.styles);Ie(a)&&(f.transform=yi({transform:a,startCentered:!0,width:i,height:n}),f["-webkit-transform"]=f.transform);let d=$t(f);d.length>0&&(l.style=d);let h=[];return h.push({tag:"span",attributes:l,children:[e]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function Ui(t){let{content:e,title:i,extra:n}=t,a=b(c(c({},n.attributes),i?{title:i}:{}),{class:n.classes.join(" ")}),o=$t(n.styles);o.length>0&&(a.style=o);let r=[];return r.push({tag:"span",attributes:a,children:[e]}),i&&r.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),r}var{styles:oe}=_;function be(t){let e=t[0],i=t[1],[n]=t.slice(4),a=null;return Array.isArray(n)?a={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(ne.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(ne.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(ne.PRIMARY),fill:"currentColor",d:n[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:e,height:i,icon:a}}var Hi={found:!1,width:512,height:512};function Wi(t,e){!Rn&&!u.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ye(t,e){let i=e;return e==="fa"&&u.styleDefault!==null&&(e=G()),new Promise((n,a)=>{if(i==="fa"){let o=ta(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&oe[e]&&oe[e][t]){let o=oe[e][t];return n(be(o))}Wi(t,e),n(b(c({},Hi),{icon:u.showMissingIcons&&t?K("missingIconAbstract")||{}:{}}))})}var bn=()=>{},ve=u.measurePerformance&&Bt&&Bt.mark&&Bt.measure?Bt:{mark:bn,measure:bn},Ot='FA "6.6.0"',Vi=t=>(ve.mark("".concat(Ot," ").concat(t," begins")),()=>na(t)),na=t=>{ve.mark("".concat(Ot," ").concat(t," ends")),ve.measure("".concat(Ot," ").concat(t),"".concat(Ot," ").concat(t," begins"),"".concat(Ot," ").concat(t," ends"))},Te={begin:Vi,end:na},Ut=()=>{};function yn(t){return typeof(t.getAttribute?t.getAttribute(it):null)=="string"}function $i(t){let e=t.getAttribute?t.getAttribute(Oe):null,i=t.getAttribute?t.getAttribute(ke):null;return e&&i}function Yi(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(u.replacementClass)}function Xi(){return u.autoReplaceSvg===!0?Ht.replace:Ht[u.autoReplaceSvg]||Ht.replace}function Gi(t){return p.createElementNS("http://www.w3.org/2000/svg",t)}function Ki(t){return p.createElement(t)}function aa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:i=t.tag==="svg"?Gi:Ki}=e;if(typeof t=="string")return p.createTextNode(t);let n=i(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){n.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){n.appendChild(aa(o,{ceFn:i}))}),n}function qi(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Ht={replace:function(t){let e=t[0];if(e.parentNode)if(t[1].forEach(i=>{e.parentNode.insertBefore(aa(i),e)}),e.getAttribute(it)===null&&u.keepOriginalSource){let i=p.createComment(qi(e));e.parentNode.replaceChild(i,e)}else e.remove()},nest:function(t){let e=t[0],i=t[1];if(~Pe(e).indexOf(u.replacementClass))return Ht.replace(t);let n=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){let o=i[0].attributes.class.split(" ").reduce((r,s)=>(s===u.replacementClass||s.match(n)?r.toSvg.push(s):r.toNode.push(s),r),{toNode:[],toSvg:[]});i[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}let a=i.map(o=>Mt(o)).join(`
`);e.setAttribute(it,""),e.innerHTML=a}};function vn(t){t()}function ia(t,e){let i=typeof e=="function"?e:Ut;if(t.length===0)i();else{let n=vn;u.mutateApproach===ai&&(n=X.requestAnimationFrame||vn),n(()=>{let a=Xi(),o=Te.begin("mutate");t.map(a),o(),i()})}}var Ee=!1;function oa(){Ee=!0}function xe(){Ee=!1}var Vt=null;function xn(t){if(!cn||!u.observeMutations)return;let{treeCallback:e=Ut,nodeCallback:i=Ut,pseudoElementsCallback:n=Ut,observeMutationsRoot:a=p}=t;Vt=new cn(o=>{if(Ee)return;let r=G();gt(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!yn(s.addedNodes[0])&&(u.searchPseudoElements&&n(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&u.searchPseudoElements&&n(s.target.parentNode),s.type==="attributes"&&yn(s.target)&&~li.indexOf(s.attributeName))if(s.attributeName==="class"&&$i(s.target)){let{prefix:l,iconName:f}=Xt(Pe(s.target));s.target.setAttribute(Oe,l||r),f&&s.target.setAttribute(ke,f)}else Yi(s.target)&&i(s.target)})}),j&&Vt.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Qi(){Vt&&Vt.disconnect()}function Ji(t){let e=t.getAttribute("style"),i=[];return e&&(i=e.split(";").reduce((n,a)=>{let o=a.split(":"),r=o[0],s=o.slice(1);return r&&s.length>0&&(n[r]=s.join(":").trim()),n},{})),i}function Zi(t){let e=t.getAttribute("data-prefix"),i=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",a=Xt(Pe(t));return a.prefix||(a.prefix=G()),e&&i&&(a.prefix=e,a.iconName=i),a.iconName&&a.prefix||(a.prefix&&n.length>0&&(a.iconName=_i(a.prefix,t.innerText)||Ae(a.prefix,de(t.innerText))),!a.iconName&&u.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function to(t){let e=gt(t.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),i=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return u.autoA11y&&(i?e["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(n||St()):(e["aria-hidden"]="true",e.focusable="false")),e}function eo(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Cn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:i,prefix:n,rest:a}=Zi(t),o=to(t),r=pe("parseNodeAttributes",{},t),s=e.styleParser?Ji(t):[];return c({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:n,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o}},r)}var{styles:no}=_;function ra(t){let e=u.autoReplaceSvg==="nest"?Cn(t,{styleParser:!1}):Cn(t);return~e.extra.classes.indexOf(Hn)?K("generateLayersText",t,e):K("generateSvgReplacementMutation",t,e)}var T=new Set;Bn.map(t=>{T.add("fa-".concat(t))});Object.keys(nt[g]).map(T.add.bind(T));Object.keys(nt[w]).map(T.add.bind(T));Object.keys(nt[O]).map(T.add.bind(T));T=[...T];function wn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();let i=p.documentElement.classList,n=d=>i.add("".concat(un,"-").concat(d)),a=d=>i.remove("".concat(un,"-").concat(d)),o=u.autoFetchSvg?T:Bn.map(d=>"fa-".concat(d)).concat(Object.keys(no));o.includes("fa")||o.push("fa");let r=[".".concat(Hn,":not([").concat(it,"])")].concat(o.map(d=>".".concat(d,":not([").concat(it,"])"))).join(", ");if(r.length===0)return Promise.resolve();let s=[];try{s=gt(t.querySelectorAll(r))}catch{}if(s.length>0)n("pending"),a("complete");else return Promise.resolve();let l=Te.begin("onTree"),f=s.reduce((d,h)=>{try{let m=ra(h);m&&d.push(m)}catch(m){Rn||m.name==="MissingIcon"&&console.error(m)}return d},[]);return new Promise((d,h)=>{Promise.all(f).then(m=>{ia(m,()=>{n("active"),n("complete"),a("pending"),typeof e=="function"&&e(),l(),d()})}).catch(m=>{l(),h(m)})})}function ao(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ra(t).then(i=>{i&&ia([i],e)})}function io(t){return function(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:ge(e||{}),{mask:a}=i;return a&&(a=(a||{}).icon?a:ge(a||{})),t(n,b(c({},i),{mask:a}))}}var oo=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:i=M,symbol:n=!1,mask:a=null,maskId:o=null,title:r=null,titleId:s=null,classes:l=[],attributes:f={},styles:d={}}=e;if(!t)return;let{prefix:h,iconName:m,icon:v}=t;return Gt(c({type:"icon"},t),()=>(ot("beforeDOMElementCreation",{iconDefinition:t,params:e}),u.autoA11y&&(r?f["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(s||St()):(f["aria-hidden"]="true",f.focusable="false")),_e({icons:{main:be(v),mask:a?be(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:m,transform:c(c({},M),i),symbol:n,title:r,maskId:o,titleId:s,extra:{attributes:f,styles:d,classes:l}})))},ro={mixout(){return{icon:io(oo)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=wn,t.nodeCallback=ao,t}}},provides(t){t.i2svg=function(e){let{node:i=p,callback:n=()=>{}}=e;return wn(i,n)},t.generateSvgReplacementMutation=function(e,i){let{iconName:n,title:a,titleId:o,prefix:r,transform:s,symbol:l,mask:f,maskId:d,extra:h}=i;return new Promise((m,v)=>{Promise.all([ye(n,r),f.iconName?ye(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(R=>{let[q,P]=R;m([e,_e({icons:{main:q,mask:P},prefix:r,iconName:n,transform:s,symbol:l,maskId:d,title:a,titleId:o,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(e){let{children:i,attributes:n,main:a,transform:o,styles:r}=e,s=$t(r);s.length>0&&(n.style=s);let l;return Ie(o)&&(l=K("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),i.push(l||a.icon),{children:i,attributes:n}}}},so={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:i=[]}=e;return Gt({type:"layer"},()=>{ot("beforeDOMElementCreation",{assembler:t,params:e});let n=[];return t(a=>{Array.isArray(a)?a.map(o=>{n=n.concat(o.abstract)}):n=n.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...i].join(" ")},children:n}]})}}}},co={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:i=null,classes:n=[],attributes:a={},styles:o={}}=e;return Gt({type:"counter",content:t},()=>(ot("beforeDOMElementCreation",{content:t,params:e}),Ui({content:t.toString(),title:i,extra:{attributes:a,styles:o,classes:["".concat(u.cssPrefix,"-layers-counter"),...n]}})))}}}},lo={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:i=M,title:n=null,classes:a=[],attributes:o={},styles:r={}}=e;return Gt({type:"text",content:t},()=>(ot("beforeDOMElementCreation",{content:t,params:e}),gn({content:t,transform:c(c({},M),i),title:n,extra:{attributes:o,styles:r,classes:["".concat(u.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,i){let{title:n,transform:a,extra:o}=i,r=null,s=null;if(Fn){let l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();r=f.width/l,s=f.height/l}return u.autoA11y&&!n&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,gn({content:e.innerHTML,width:r,height:s,transform:a,title:n,extra:o,watchable:!0})])}}},fo=new RegExp('"',"ug"),On=[1105920,1112319],kn=c(c(c({FontAwesome:{normal:"fas",400:"fas"}},$a),Va),Za),Ce=Object.keys(kn).reduce((t,e)=>(t[e.toLowerCase()]=kn[e],t),{}),uo=Object.keys(Ce).reduce((t,e)=>{let i=Ce[e];return t[e]=i[900]||[...Object.entries(i)][0][1],t},{});function mo(t){let e=t.replace(fo,""),i=ki(e,0),n=i>=On[0]&&i<=On[1],a=e.length===2?e[0]===e[1]:!1;return{value:de(a?e[0]:e),isSecondary:n||a}}function ho(t,e){let i=t.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(e),a=isNaN(n)?"normal":n;return(Ce[i]||{})[a]||uo[i]}function Pn(t,e){let i="".concat(ni).concat(e.replace(":","-"));return new Promise((n,a)=>{if(t.getAttribute(i)!==null)return n();let r=gt(t.children).filter(m=>m.getAttribute(ce)===e)[0],s=X.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),f=l.match(si),d=s.getPropertyValue("font-weight"),h=s.getPropertyValue("content");if(r&&!f)return t.removeChild(r),n();if(f&&h!=="none"&&h!==""){let m=s.getPropertyValue("content"),v=ho(l,d),{value:R,isSecondary:q}=mo(m),P=f[0].startsWith("FontAwesome"),E=Ae(v,R),C=E;if(P){let I=Ti(R);I.iconName&&I.prefix&&(E=I.iconName,v=I.prefix)}if(E&&!q&&(!r||r.getAttribute(Oe)!==v||r.getAttribute(ke)!==C)){t.setAttribute(i,C),r&&t.removeChild(r);let I=eo(),{extra:rt}=I;rt.attributes[ce]=e,ye(E,v).then(st=>{let ma=_e(b(c({},I),{icons:{main:st,mask:Me()},prefix:v,iconName:C,extra:rt,watchable:!0})),qt=p.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(qt,t.firstChild):t.appendChild(qt),qt.outerHTML=ma.map(ha=>Mt(ha)).join(`
`),t.removeAttribute(i),n()}).catch(a)}else n()}else n()})}function po(t){return Promise.all([Pn(t,"::before"),Pn(t,"::after")])}function go(t){return t.parentNode!==document.head&&!~ii.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ce)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function In(t){if(j)return new Promise((e,i)=>{let n=gt(t.querySelectorAll("*")).filter(go).map(po),a=Te.begin("searchPseudoElements");oa(),Promise.all(n).then(()=>{a(),xe(),e()}).catch(()=>{a(),xe(),i()})})}var bo={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=In,t}}},provides(t){t.pseudoElements2svg=function(e){let{node:i=p}=e;u.searchPseudoElements&&In(i)}}},Sn=!1,yo={mixout(){return{dom:{unwatch(){oa(),Sn=!0}}}},hooks(){return{bootstrap(){xn(pe("mutationObserverCallbacks",{}))},noAuto(){Qi()},watch(t){let{observeMutationsRoot:e}=t;Sn?xe():xn(pe("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},An=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((i,n)=>{let a=n.toLowerCase().split("-"),o=a[0],r=a.slice(1).join("-");if(o&&r==="h")return i.flipX=!0,i;if(o&&r==="v")return i.flipY=!0,i;if(r=parseFloat(r),isNaN(r))return i;switch(o){case"grow":i.size=i.size+r;break;case"shrink":i.size=i.size-r;break;case"left":i.x=i.x-r;break;case"right":i.x=i.x+r;break;case"up":i.y=i.y-r;break;case"down":i.y=i.y+r;break;case"rotate":i.rotate=i.rotate+r;break}return i},e)},vo={mixout(){return{parse:{transform:t=>An(t)}}},hooks(){return{parseNodeAttributes(t,e){let i=e.getAttribute("data-fa-transform");return i&&(t.transform=An(i)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:i,transform:n,containerWidth:a,iconWidth:o}=e,r={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(n.x*32,", ").concat(n.y*32,") "),l="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),f="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(s," ").concat(l," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},m={outer:r,inner:d,path:h};return{tag:"g",attributes:c({},m.outer),children:[{tag:"g",attributes:c({},m.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:c(c({},i.icon.attributes),m.path)}]}]}}}},re={x:0,y:0,width:"100%",height:"100%"};function Mn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function xo(t){return t.tag==="g"?t.children:[t]}var Co={hooks(){return{parseNodeAttributes(t,e){let i=e.getAttribute("data-fa-mask"),n=i?Xt(i.split(" ").map(a=>a.trim())):Me();return n.prefix||(n.prefix=G()),t.mask=n,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:i,attributes:n,main:a,mask:o,maskId:r,transform:s}=e,{width:l,icon:f}=a,{width:d,icon:h}=o,m=bi({transform:s,containerWidth:d,iconWidth:l}),v={tag:"rect",attributes:b(c({},re),{fill:"white"})},R=f.children?{children:f.children.map(Mn)}:{},q={tag:"g",attributes:c({},m.inner),children:[Mn(c({tag:f.tag,attributes:c(c({},f.attributes),m.path)},R))]},P={tag:"g",attributes:c({},m.outer),children:[q]},E="mask-".concat(r||St()),C="clip-".concat(r||St()),I={tag:"mask",attributes:b(c({},re),{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,P]},rt={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:xo(h)},I]};return i.push(rt,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(E,")")},re)}),{children:i,attributes:n}}}},wo={provides(t){let e=!1;X.matchMedia&&(e=X.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let i=[],n={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:b(c({},n),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let o=b(c({},a),{attributeName:"opacity"}),r={tag:"circle",attributes:b(c({},n),{cx:"256",cy:"364",r:"28"}),children:[]};return e||r.children.push({tag:"animate",attributes:b(c({},a),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:b(c({},o),{values:"1;0;1;1;0;1;"})}),i.push(r),i.push({tag:"path",attributes:b(c({},n),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:b(c({},o),{values:"1;0;0;0;0;1;"})}]}),e||i.push({tag:"path",attributes:b(c({},n),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:b(c({},o),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},Oo={hooks(){return{parseNodeAttributes(t,e){let i=e.getAttribute("data-fa-symbol"),n=i===null?!1:i===""?!0:i;return t.symbol=n,t}}}},ko=[xi,ro,so,co,lo,bo,yo,vo,Co,wo,Oo];Ni(ko,{mixoutsTo:k});var rr=k.noAuto,sa=k.config,sr=k.library,ca=k.dom,la=k.parse,cr=k.findIconDefinition,lr=k.toHtml,fa=k.icon,fr=k.layer,Po=k.text,Io=k.counter;var So=["*"],Ao=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},Mo=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},_o=t=>{let e={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!==null,[`fa-rotate-${t.rotate}`]:t.rotate!==null,[`fa-pull-${t.pull}`]:t.pull!==null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(e).map(i=>e[i]?i:null).filter(i=>i)},Fe=new WeakSet,ua="fa-auto-css";function To(t,e){if(!e.autoAddCss||Fe.has(t))return;if(t.getElementById(ua)!=null){e.autoAddCss=!1,Fe.add(t);return}let i=t.createElement("style");i.setAttribute("type","text/css"),i.setAttribute("id",ua),i.innerHTML=ca.css();let n=t.head.childNodes,a=null;for(let o=n.length-1;o>-1;o--){let r=n[o],s=r.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=r)}t.head.insertBefore(i,a),e.autoAddCss=!1,Fe.add(t)}var Eo=t=>t.prefix!==void 0&&t.iconName!==void 0,Fo=(t,e)=>Eo(t)?t:Array.isArray(t)&&t.length===2?{prefix:t[0],iconName:t[1]}:{prefix:e,iconName:t},No=(()=>{let e=class e{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(n){sa.autoAddCss=n,this._autoAddCss=n}get autoAddCss(){return this._autoAddCss}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=bt({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Do=(()=>{let e=class e{constructor(){this.definitions={}}addIcons(...n){for(let a of n){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let o of a.icon[2])typeof o=="string"&&(this.definitions[a.prefix][o]=a)}}addIconPacks(...n){for(let a of n){let o=Object.keys(a).map(r=>a[r]);this.addIcons(...o)}}getIconDefinition(n,a){return n in this.definitions&&a in this.definitions[n]?this.definitions[n][a]:null}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=bt({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Lo=(()=>{let e=class e{constructor(){this.stackItemSize="1x"}ngOnChanges(n){if("size"in n)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=Tt({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[Et]});let t=e;return t})(),zo=(()=>{let e=class e{constructor(n,a){this.renderer=n,this.elementRef=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(n){"size"in n&&(n.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${n.size.currentValue}`),n.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${n.size.previousValue}`))}};e.\u0275fac=function(a){return new(a||e)(A(ze),A(lt))},e.\u0275cmp=B({type:e,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[Et,H],ngContentSelectors:So,decls:1,vars:0,template:function(a,o){a&1&&(Ye(),Xe(0))},encapsulation:2});let t=e;return t})(),Kt=(()=>{let e=class e{constructor(n,a,o,r,s){this.sanitizer=n,this.config=a,this.iconLibrary=o,this.stackItem=r,this.document=y(zt),s!=null&&r==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(n){if(this.icon==null&&this.config.fallbackIcon==null){Mo();return}if(n){let a=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(a!=null){let o=this.buildParams();To(this.document,this.config);let r=fa(a,o);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(r.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(n){let a=Fo(n,this.config.defaultPrefix);if("icon"in a)return a;let o=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return o??(Ao(a),null)}buildParams(){let n={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},a=typeof this.transform=="string"?la.transform(this.transform):this.transform;return{title:this.title,transform:a,classes:_o(n),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}};e.\u0275fac=function(a){return new(a||e)(A(en),A(No),A(Do),A(Lo,8),A(zo,8))},e.\u0275cmp=B({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,o){a&2&&($e("innerHTML",o.renderedIconHTML,Le),ft("title",o.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[Et,H],decls:0,vars:0,template:function(a,o){},encapsulation:2});let t=e;return t})();var Ir=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=De({type:e}),e.\u0275inj=Ne({});let t=e;return t})();function jo(t,e){if(t&1&&(S(0,"div",3),Dt(1,"fa-icon",5),N()),t&2){let i=U(),n=Lt(1);F(),J("icon",i.icon||n.icon())("fixedWidth",!0)}}function Ro(t,e){if(t&1&&(S(0,"div",4),Ge(1),N()),t&2){let i=U(),n=Lt(1);F(),Ke(" ",i.text||n.text()," ")}}var da=(()=>{let e=class e{constructor(){this.injectedOptions=y(ut,{optional:!0})||{},this.showIcon=!0,this.showText=!1,this.theme=this.injectedOptions.theme||V.theme,this.opened=new Q}get buttonClass(){return`sb-button sb-${this.theme}`}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=B({type:e,selectors:[["share-button"]],hostVars:2,hostBindings:function(a,o){a&2&&Ue(o.buttonClass)},inputs:{button:"button",url:"url",title:"title",description:"description",image:"image",tags:"tags",redirectUrl:"redirectUrl",showIcon:[x.HasDecoratorInputTransform,"showIcon","showIcon",W],showText:[x.HasDecoratorInputTransform,"showText","showText",W],text:"text",icon:"icon",theme:"theme",disabled:[x.HasDecoratorInputTransform,"disabled","disabled",W]},outputs:{opened:"opened"},standalone:!0,features:[Ft,H],decls:5,vars:14,consts:[["btn","shareButton"],["type","button",1,"sb-wrapper",3,"opened","shareButton","url","image","title","description","tags","redirectUrl","disabled"],[1,"sb-content"],[1,"sb-icon"],[1,"sb-text"],[3,"icon","fixedWidth"]],template:function(a,o){if(a&1){let r=Ct();S(0,"button",1,0),Z("opened",function(l){return yt(r),vt(o.opened.emit(l))}),S(2,"div",2),Nt(3,jo,2,2,"div",3)(4,Ro,2,1,"div",4),N()()}if(a&2){let r=Lt(1);Qt("sb-show-icon",o.showIcon)("sb-show-text",o.showText),J("shareButton",o.button)("url",o.url)("image",o.image)("title",o.title)("description",o.description)("tags",o.tags)("redirectUrl",o.redirectUrl)("disabled",o.disabled),F(3),xt(3,o.showIcon&&r.icon()?3:-1),F(),xt(4,o.showText?4:-1)}},dependencies:[on,Kt],styles:["[button=facebook][_nghost-%COMP%], [button=facebook]   [_nghost-%COMP%]{--button-color: #4267B2}[button=x][_nghost-%COMP%], [button=x]   [_nghost-%COMP%]{--button-color: #00acee}[button=mix][_nghost-%COMP%], [button=mix]   [_nghost-%COMP%]{--button-color: #ff8226}[button=line][_nghost-%COMP%], [button=line]   [_nghost-%COMP%]{--button-color: #00b900}[button=linkedin][_nghost-%COMP%], [button=linkedin]   [_nghost-%COMP%]{--button-color: #0a66c2}[button=pinterest][_nghost-%COMP%], [button=pinterest]   [_nghost-%COMP%]{--button-color: #bd081c}[button=reddit][_nghost-%COMP%], [button=reddit]   [_nghost-%COMP%]{--button-color: #ff4006}[button=tumblr][_nghost-%COMP%], [button=tumblr]   [_nghost-%COMP%]{--button-color: #36465d}[button=whatsapp][_nghost-%COMP%], [button=whatsapp]   [_nghost-%COMP%]{--button-color: #25d366}[button=messenger][_nghost-%COMP%], [button=messenger]   [_nghost-%COMP%]{--button-color: #0080FF}[button=telegram][_nghost-%COMP%], [button=telegram]   [_nghost-%COMP%]{--button-color: #0088cc}[button=xing][_nghost-%COMP%], [button=xing]   [_nghost-%COMP%]{--button-color: #006567}[button=sms][_nghost-%COMP%], [button=sms]   [_nghost-%COMP%]{--button-color: #20c16c}[button=email][_nghost-%COMP%], [button=email]   [_nghost-%COMP%]{--button-color: #FF961C}[button=viber][_nghost-%COMP%], [button=viber]   [_nghost-%COMP%]{--button-color: #665ca7}[button=vk][_nghost-%COMP%], [button=vk]   [_nghost-%COMP%]{--button-color: #4C75A3}[button=copy][_nghost-%COMP%], [button=copy]   [_nghost-%COMP%]{--button-color: #607D8B}[button=print][_nghost-%COMP%], [button=print]   [_nghost-%COMP%]{--button-color: #765AA2}[button=expand][_nghost-%COMP%], [button=expand]   [_nghost-%COMP%]{--button-color: #FF6651}button[_ngcontent-%COMP%]{cursor:pointer;position:relative;outline:0;-webkit-print-color-adjust:exact;margin:var(--sb-margin, .3125em);padding:var(--sb-padding, 0);min-width:var(--sb-min-width, 4.125em);height:var(--sb-height, 2.5em);color:var(--sb-color, #fff);background:var(--sb-background);font-size:var(--sb-font-size, 13px);line-height:var(--sb-line-height, 2.571em);border:var(--sb-border);border-radius:var(--sb-border-radius);transition:var(--sb-transition);box-shadow:var(--sb-box-shadow);text-shadow:var(--sb-text-shadow);overflow:var(--sb-overflow)}.sb-icon[_ngcontent-%COMP%], .sb-text[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none}.sb-content[_ngcontent-%COMP%]{flex:1;display:flex;height:100%;width:100%;position:relative}.sb-text[_ngcontent-%COMP%]{flex:1;height:100%;white-space:nowrap;padding:var(--sb-text-padding, 0 .7em);font-weight:var(--sb-font-weight, bold)}.sb-icon[_ngcontent-%COMP%]{text-align:center;width:100%;height:100%;min-width:2em;font-size:var(--sb-icon-size, 1.2em)}"],changeDetection:0});let t=e;return t})();function Bo(t,e){if(t&1){let i=Ct();S(0,"share-button",2),Z("opened",function(a){yt(i);let o=U();return vt(o.opened.emit(a))}),N()}if(t&2){let i=e.$implicit,n=U();J("button",i)("theme",n.theme)("url",n.url)("title",n.title)("description",n.description)("image",n.image)("tags",n.tags)("redirectUrl",n.redirectUrl)("showIcon",n.showIcon)("showText",n.showText)("disabled",n.disabled)}}function Uo(t,e){if(t&1){let i=Ct();S(0,"expand-button",3),Je("expandChange",function(a){yt(i);let o=U();return Qe(o.expanded,a)||(o.expanded=a),vt(a)}),N()}if(t&2){let i=U();Jt("sb-button sb-",i.theme,""),J("options",i.options),qe("expand",i.expanded)}}var Ho=(()=>{let e=class e{constructor(n){this.expandChange=new Q,n.nativeElement.style.setProperty("--button-color","#FF6651")}};e.\u0275fac=function(a){return new(a||e)(A(lt))},e.\u0275cmp=B({type:e,selectors:[["expand-button"]],inputs:{options:"options",expand:"expand"},outputs:{expandChange:"expandChange"},standalone:!0,features:[H],decls:4,vars:2,consts:[[1,"sb-wrapper","sb-expand","sb-show-icon",3,"click"],[1,"sb-content"],[1,"sb-icon"],[3,"icon"]],template:function(a,o){a&1&&(S(0,"button",0),Z("click",function(){return o.expandChange.emit(!o.expand)}),S(1,"div",1)(2,"div",2),Dt(3,"fa-icon",3),N()()()),a&2&&(ft("aria-label",o.expand?o.options.lessButtonAriaLabel:o.options.moreButtonAriaLabel),F(3),J("icon",o.expand?o.options.lessButtonIcon:o.options.moreButtonIcon))},dependencies:[Kt],styles:["[button=facebook][_nghost-%COMP%], [button=facebook]   [_nghost-%COMP%]{--button-color: #4267B2}[button=x][_nghost-%COMP%], [button=x]   [_nghost-%COMP%]{--button-color: #00acee}[button=mix][_nghost-%COMP%], [button=mix]   [_nghost-%COMP%]{--button-color: #ff8226}[button=line][_nghost-%COMP%], [button=line]   [_nghost-%COMP%]{--button-color: #00b900}[button=linkedin][_nghost-%COMP%], [button=linkedin]   [_nghost-%COMP%]{--button-color: #0a66c2}[button=pinterest][_nghost-%COMP%], [button=pinterest]   [_nghost-%COMP%]{--button-color: #bd081c}[button=reddit][_nghost-%COMP%], [button=reddit]   [_nghost-%COMP%]{--button-color: #ff4006}[button=tumblr][_nghost-%COMP%], [button=tumblr]   [_nghost-%COMP%]{--button-color: #36465d}[button=whatsapp][_nghost-%COMP%], [button=whatsapp]   [_nghost-%COMP%]{--button-color: #25d366}[button=messenger][_nghost-%COMP%], [button=messenger]   [_nghost-%COMP%]{--button-color: #0080FF}[button=telegram][_nghost-%COMP%], [button=telegram]   [_nghost-%COMP%]{--button-color: #0088cc}[button=xing][_nghost-%COMP%], [button=xing]   [_nghost-%COMP%]{--button-color: #006567}[button=sms][_nghost-%COMP%], [button=sms]   [_nghost-%COMP%]{--button-color: #20c16c}[button=email][_nghost-%COMP%], [button=email]   [_nghost-%COMP%]{--button-color: #FF961C}[button=viber][_nghost-%COMP%], [button=viber]   [_nghost-%COMP%]{--button-color: #665ca7}[button=vk][_nghost-%COMP%], [button=vk]   [_nghost-%COMP%]{--button-color: #4C75A3}[button=copy][_nghost-%COMP%], [button=copy]   [_nghost-%COMP%]{--button-color: #607D8B}[button=print][_nghost-%COMP%], [button=print]   [_nghost-%COMP%]{--button-color: #765AA2}[button=expand][_nghost-%COMP%], [button=expand]   [_nghost-%COMP%]{--button-color: #FF6651}button[_ngcontent-%COMP%]{cursor:pointer;position:relative;outline:0;-webkit-print-color-adjust:exact;margin:var(--sb-margin, .3125em);padding:var(--sb-padding, 0);min-width:var(--sb-min-width, 4.125em);height:var(--sb-height, 2.5em);color:var(--sb-color, #fff);background:var(--sb-background);font-size:var(--sb-font-size, 13px);line-height:var(--sb-line-height, 2.571em);border:var(--sb-border);border-radius:var(--sb-border-radius);transition:var(--sb-transition);box-shadow:var(--sb-box-shadow);text-shadow:var(--sb-text-shadow);overflow:var(--sb-overflow)}.sb-icon[_ngcontent-%COMP%], .sb-text[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none}.sb-content[_ngcontent-%COMP%]{flex:1;display:flex;height:100%;width:100%;position:relative}.sb-text[_ngcontent-%COMP%]{flex:1;height:100%;white-space:nowrap;padding:var(--sb-text-padding, 0 .7em);font-weight:var(--sb-font-weight, bold)}.sb-icon[_ngcontent-%COMP%]{text-align:center;width:100%;height:100%;min-width:2em;font-size:var(--sb-icon-size, 1.2em)}"],changeDetection:0});let t=e;return t})(),$r=(()=>{let e=class e{constructor(){this.injectedOptions=y(ut,{optional:!0}),this.options=this.injectedOptions?c(c({},V),this.injectedOptions):V,this.show=ct(Object.values(tt).length,{transform:Ze}),this.include=ct(this.options.include||[]),this.exclude=ct(this.options.exclude||[]),this.expanded=Re(!1),this.selectedButtons=D(()=>(this.include().length?this.include():Object.keys(tt)).filter(a=>this.exclude().indexOf(a)<0)),this.displayButtons=D(()=>{let n=this.selectedButtons();return n.slice(0,this.expanded()?n.length:this.show())}),this.theme=this.options.theme,this.showIcon=!0,this.showText=!1,this.opened=new Q}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=B({type:e,selectors:[["share-buttons"]],inputs:{show:[x.SignalBased,"show"],include:[x.SignalBased,"include"],exclude:[x.SignalBased,"exclude"],expanded:[x.SignalBased,"expanded"],theme:"theme",url:"url",title:"title",description:"description",image:"image",tags:"tags",redirectUrl:"redirectUrl",showIcon:[x.HasDecoratorInputTransform,"showIcon","showIcon",W],showText:[x.HasDecoratorInputTransform,"showText","showText",W],disabled:[x.HasDecoratorInputTransform,"disabled","disabled",W]},outputs:{expanded:"expandedChange",opened:"opened"},standalone:!0,features:[Ft,H],decls:4,vars:4,consts:[[3,"button","theme","url","title","description","image","tags","redirectUrl","showIcon","showText","disabled"],[3,"class","options","expand"],[3,"opened","button","theme","url","title","description","image","tags","redirectUrl","showIcon","showText","disabled"],[3,"expandChange","options","expand"]],template:function(a,o){a&1&&(S(0,"div"),We(1,Bo,1,11,"share-button",0,He),Nt(3,Uo,1,5,"expand-button",1),N()),a&2&&(Jt("sb-group sb-",o.theme,""),F(),Ve(o.displayButtons()),F(2),xt(3,o.show()<o.selectedButtons().length?3:-1))},dependencies:[da,Ho],styles:["[_nghost-%COMP%]{display:inherit}.sb-group[_ngcontent-%COMP%], .sb-button[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start}.sb-group[_ngcontent-%COMP%]{flex-wrap:wrap}"],changeDetection:0});let t=e;return t})();export{ya as a,tr as b,er as c,Do as d,Ir as e,$r as f};
