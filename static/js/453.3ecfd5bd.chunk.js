"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[453],{537:function(n,e,r){r.d(e,{AR:function(){return d},zv:function(){return h},t2:function(){return l},tx:function(){return f},zi:function(){return x}});var t=r(5861),i=r(7757),a=r.n(i),c=r(6066),o=(r(5462),r(4569)),u=r.n(o),s=r(3524),p=u().create({baseURL:s._n,params:{api_key:s.$h,language:"en-US",include_adult:!1}}),d=function(){var n=(0,t.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/trending/movie/day");case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),c.Am.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/movie/".concat(e));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),c.Am.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/movie/".concat(e,"/reviews"));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),c.Am.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/movie/".concat(e,"/credits"));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),c.Am.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.get("/search/movie/",{params:{query:e}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),c.Am.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},8647:function(n,e,r){r.d(e,{e:function(){return l}});var t,i,a=r(501),c=r(6871),o=r(168),u=r(6031),s=u.ZP.ul(t||(t=(0,o.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),p=u.ZP.li(i||(i=(0,o.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n  padding: 10px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),d=r(184),l=function(n){var e=n.movies,r=(0,c.TH)();return(0,d.jsx)(s,{children:e.map((function(n){var e=n.id,t=n.title,i=n.overview,c=n.original_name;return(0,d.jsx)(p,{children:(0,d.jsxs)(a.rU,{to:"/movies/".concat(e),state:{from:r},children:[(0,d.jsx)("h2",{children:null!==t&&void 0!==t?t:c}),(0,d.jsx)("p",{children:i})]})},e)}))})}},3524:function(n,e,r){r.d(e,{$h:function(){return t},_n:function(){return i},bV:function(){return a}});var t="ee4d1e0ba38fba5e2a885fcbcf829637",i="https://api.themoviedb.org/3/",a="https://image.tmdb.org/t/p/w500/"},5453:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var t,i,a,c,o,u=r(5861),s=r(885),p=r(7757),d=r.n(p),l=r(2791),f=r(501),h=r(5705),x=r(6066),v=r(8494),m=r(168),b=r(6031),g=b.ZP.header(t||(t=(0,m.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: ",";\n  background-color: ",";\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.searchBarBgc})),w=(0,b.ZP)(h.gN)(i||(i=(0,m.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),y=(0,b.ZP)(h.l0)(a||(a=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: ",";\n  border-radius: 3px;\n  overflow: hidden;\n"])),(function(n){return n.theme.colors.white})),Z=b.ZP.button(c||(c=(0,m.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),k=b.ZP.label(o||(o=(0,m.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),j=r(184),_=function(n){var e=n.onSubmit;return(0,j.jsx)(g,{children:(0,j.jsx)(h.J9,{initialValues:{searchQuery:""},onSubmit:function(n,r){var t=n.searchQuery,i=r.resetForm;if(""===t.trim())return x.Am.error("Please, enter search query.");e(t),i()},children:(0,j.jsxs)(y,{children:[(0,j.jsx)(w,{type:"text",name:"searchQuery"}),(0,j.jsxs)(Z,{type:"submit",children:[(0,j.jsx)(k,{}),(0,j.jsx)(v.Yfv,{})]})]})})})},z=r(8647),P=r(537),A=function(){var n,e=(0,l.useState)([]),r=(0,s.Z)(e,2),t=r[0],i=r[1],a=(0,f.lr)(),c=(0,s.Z)(a,2),o=c[0],p=c[1],h=null!==(n=o.get("search"))&&void 0!==n?n:"";(0,l.useEffect)((function(){if(""!==h){var n=function(){var n=(0,u.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,P.zi)(h);case 2:e=n.sent,i(e.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[h]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(_,{onSubmit:function(n){p(n),p(""!==n?{search:n}:{})}}),(0,j.jsx)(z.e,{movies:t})]})}}}]);
//# sourceMappingURL=453.3ecfd5bd.chunk.js.map