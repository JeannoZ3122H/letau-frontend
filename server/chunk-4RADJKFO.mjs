import './polyfills.server.mjs';
import{c as g,d as h}from"./chunk-ENCEG524.mjs";import{$b as _,Ab as c,Fb as m,Lb as u,Qb as d,Rb as p,Sb as f,a as r,bb as o,gb as l,hb as s,ma as a,qc as b}from"./chunk-FS4WJWB6.mjs";function y(n,t){if(n&1&&(d(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"a",5),f(6,"img",6),p()()()()()()),n&2){let v=_();l(6),m("src",v.small_banner.banner_image,o)}}var q=(()=>{let t=class t{constructor(e,i){this.__message=e,this.__request__another=i,this.unscribe=new r}ngOnInit(){this.getAllBannerSmall()}getAllBannerSmall(){this.unscribe.add(this.__request__another.getBannerSmall().subscribe({next:e=>{e&&(this.small_banner=e)},error:e=>{e.status==401&&this.__message.error({status:"Erreur",message:"Quelque chose s'est mal pass\xE9! Veuillez r\xE9essayer s'il vous pla\xEEt"})}}))}ngOnDestroy(){this.unscribe.unsubscribe()}};t.\u0275fac=function(i){return new(i||t)(s(g),s(h))},t.\u0275cmp=a({type:t,selectors:[["app-banner-small-content"]],standalone:!0,features:[b],decls:1,vars:1,consts:[[1,"banner2","my-4"],[1,"container"],[1,"content"],[1,"row","justify-content-center"],[1,"col-lg-10"],["role","button",1,"d-block","img-cover"],["alt","",3,"src"]],template:function(i,S){i&1&&c(0,y,7,1,"section",0),i&2&&u(0,S.small_banner?0:-1)}});let n=t;return n})();export{q as a};
