(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(20),i=n.n(r),o=(n(30),n(31),n(4)),s=n.n(o),l=n(6),d=n(5),u=n(21),v=n.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),f="6035ddf8d76d51227dd7e531082158ce",h={fetchTrending:"/trending/all/week?api_key=".concat(f,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(f,"&with_network=123"),fetchTopRated:"/movie/top_rated?api_key=".concat(f,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(f,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(f,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(f,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(f,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(f,"&with_genres=99")},b=(n(50),n(0));var j=function(){var e,t,n=Object(c.useState)([]),a=Object(d.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(h.fetchNetflixOriginals);case 2:t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length)]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(r.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(b.jsxs)("div",{className:"banner__contents",children:[Object(b.jsx)("h1",{className:"banner__title",children:(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)}),Object(b.jsxs)("div",{className:"banner__buttons",children:[Object(b.jsx)("button",{className:"banner__button",children:"Play"}),Object(b.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(b.jsx)("h1",{className:"banner__description",children:(e=null===r||void 0===r?void 0:r.overview,t=200,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(b.jsx)("div",{className:"banner__fadeBottom"})]})};n(52);var p=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(b.jsxs)("div",{className:"nav ".concat(n&&"nav__black"),children:[Object(b.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),Object(b.jsx)("img",{className:"nav__avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Netflix Logo"})]})},m=(n(53),n(22)),g=n(25),_=n.n(g);var O=function(e){var t=e.title,n=e.fetchUrl,a=e.isLarge,r=Object(c.useState)([]),i=Object(d.a)(r,2),o=i[0],u=i[1],f=Object(c.useState)(""),h=Object(d.a)(f,2),j=h[0],p=h[1],g=Object(c.useState)(!1),O=Object(d.a)(g,2),x=O[0],w=O[1];Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get(n);case 2:return t=e.sent,u(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]);var k=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===j||void 0===j?void 0:j.length)){e.next=5;break}p(""),w(!1),e.next=11;break;case 5:return n=(null===t||void 0===t?void 0:t.name)||(null===t||void 0===t?void 0:t.title)||(null===t||void 0===t?void 0:t.original_name)||(null===t||void 0===t?void 0:t.original_title)||"No Trailer",console.log(n),e.next=9,_()(n);case 9:(c=e.sent)?(a=new URLSearchParams(new URL(c).search),p(a.get("v")),w(!0)):(p("EQZgYz6D4_c"),w(!0));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("div",{className:"row__posters",children:o.map((function(e){return Object(b.jsx)("img",{onClick:function(){k(e)},className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),x&&Object(b.jsx)(m.a,{videoId:j,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})};var x=function(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(p,{}),Object(b.jsx)(j,{}),Object(b.jsx)(O,{title:"Netflix Originals",fetchUrl:h.fetchNetflixOriginals,isLarge:!0}),Object(b.jsx)(O,{title:"Trending Now",fetchUrl:h.fetchTrending}),Object(b.jsx)(O,{title:"Top Rated",fetchUrl:h.fetchTopRated}),Object(b.jsx)(O,{title:"Action Movies",fetchUrl:h.fetchActionMovies}),Object(b.jsx)(O,{title:"Comedy Movies",fetchUrl:h.fetchComedyMovies}),Object(b.jsx)(O,{title:"Horror Movies",fetchUrl:h.fetchHorrorMovies}),Object(b.jsx)(O,{title:"Romance Movies",fetchUrl:h.fetchRomanceMovies}),Object(b.jsx)(O,{title:"Documentaries",fetchUrl:h.fetchDocumentaries})]})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.5795f33e.chunk.js.map