import{s as f,n as c}from"../chunks/scheduler.e108d1fd.js";import{S as d,i as m,g as _,m as u,h as v,j as g,n as y,f as h,k as z,a as k,x,o as $}from"../chunks/index.6f232df0.js";function E(l){let e,n;return{c(){e=_("h1"),n=u(l[0]),this.h()},l(s){e=v(s,"H1",{class:!0});var t=g(e);n=y(t,l[0]),t.forEach(h),this.h()},h(){z(e,"class","svelte-13hvi8p")},m(s,t){k(s,e,t),x(e,n)},p(s,[t]){t&1&&$(n,s[0])},i:c,o:c,d(s){s&&h(e)}}}const p="aáeéiíoóöőuúüűy",S="bcdfghjklmnpqrstvwxz0123456";function b(l,e,n){const s=["cs","dzs","sz","zs","dz","gy","ty"];var t="elkelkáposztásítottalanítottátok";s.forEach((r,i)=>{t=t.replaceAll(r,i)});var o="",a;for(a=0;a<t.length;a++)o+=t[a],p.includes(t[a]),S.includes(t[a+1])&&p.includes(t[a+2])&&(o+="-");return s.forEach((r,i)=>{n(0,o=o.replaceAll(i.toString(),r))}),[o]}class A extends d{constructor(e){super(),m(this,e,b,E,f,{})}}export{A as component};
