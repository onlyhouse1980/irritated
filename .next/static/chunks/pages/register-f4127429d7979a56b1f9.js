_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{YFqc:function(e,t,r){e.exports=r("cTJO")},aSaP:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("AO0C"),c=r("YFqc"),s=r.n(c),u=o.a.createElement;t.default=function(){return u(o.a.Fragment,null,u(a.z,{className:"mt-5"},u(a.j,{md:"6",className:"mx-auto"},u(s.a,{href:"/howtoreadmeter.pdf"},"How to read your meter?"),u(a.c,null,u(a.e,{className:"img-fluid",src:"/images/imgmeter1.jpg",waves:!0}),u(a.d,null,u("form",null,u("p",{className:"h5 text-center mb-4"},"Check Your Usage"),u("div",{className:"grey-text"},u(a.r,{label:"Meter Serial #",icon:"user",group:!0,type:"text",validate:!0,error:"wrong",success:"right"})),u("div",{className:"text-center"},u(a.b,{color:"primary"},"Register"))))))))}},"c05+":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return r("aSaP")}])},cTJO:function(e,t,r){"use strict";var n=r("zoAU"),o=r("7KCV");t.__esModule=!0,t.default=void 0;var a,c=o(r("q1tI")),s=r("elyg"),u=r("nOHt"),i=new Map,f=window.IntersectionObserver,l={};var p=function(e,t){var r=a||(f?a=new f((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),i.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function d(e,t,r,n){(0,s.isLocalURL)(t)&&(e.prefetch(t,r,n).catch((function(e){0})),l[t+"%"+r]=!0)}var h=function(e){var t=!1!==e.prefetch,r=c.default.useState(),o=n(r,2),a=o[0],i=o[1],h=(0,u.useRouter)(),v=h&&h.pathname||"/",m=c.default.useMemo((function(){var t=(0,s.resolveHref)(v,e.href,!0),r=n(t,2),o=r[0],a=r[1];return{href:o,as:e.as?(0,s.resolveHref)(v,e.as):a||o}}),[v,e.href,e.as]),g=m.href,w=m.as;c.default.useEffect((function(){if(t&&f&&a&&a.tagName&&(0,s.isLocalURL)(g)&&!l[g+"%"+w])return p(a,(function(){d(h,g,w)}))}),[t,a,g,w,h]);var y=e.children,E=e.replace,_=e.shallow,N=e.scroll;"string"===typeof y&&(y=c.default.createElement("a",null,y));var b=c.Children.only(y),L={ref:function(e){e&&i(e),b&&"object"===typeof b&&b.ref&&("function"===typeof b.ref?b.ref(e):"object"===typeof b.ref&&(b.ref.current=e))},onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,g,w,E,_,N)}};return t&&(L.onMouseEnter=function(e){(0,s.isLocalURL)(g)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),d(h,g,w,{priority:!0}))}),(e.passHref||"a"===b.type&&!("href"in b.props))&&(L.href=(0,s.addBasePath)((0,s.addLocale)(w,h&&h.locale,h&&h.defaultLocale))),c.default.cloneElement(b,L)};t.default=h}},[["c05+",0,1,4,2,3]]]);