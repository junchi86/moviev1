(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{120:function(e,t,n){},142:function(e,t,n){e.exports=n(237)},147:function(e,t,n){},165:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),c=(n(147),n(32)),l=n(39),s=n(34),m=n(48),u=n.n(m),p=n(65),h=n(66),d=n(67),v=n(73),g=n(68),f=n(74),y=n(69),b=n.n(y),E=(n(165),n(240));var x=function(e){var t=e.year,n=e.title,a=e.summary,i=e.poster,o=e.genres,c=e.trailer,s=e.background;return r.a.createElement(l.b,{to:{pathname:"/movie-detail/".concat(c),state:{year:t,title:n,summary:a,poster:i,genres:o,trailer:c,background:s}}},r.a.createElement(E.a,{key:c,className:"movie",hoverable:!0,cover:r.a.createElement("img",{src:i,alt:n,title:n})},r.a.createElement(E.a.Meta,{title:n+t,description:a.slice(0,140)+"..."})))},w=(n(120),n(12)),k=n(239),_=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},n.getMovie=Object(p.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,a=t.data.data.movies,n.setState({movies:a,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"render",value:function(){var e=r.a.createElement(w.a,{type:"loading",style:{fontSize:35},spin:!0}),t=this.state,n=t.isLoading,a=t.movies;return r.a.createElement("section",{className:"container"},n?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")," ",r.a.createElement(k.a,{indicator:e})):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(x,{key:e.yt_trailer_code,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,trailer:e.yt_trailer_code,background:e.background_image})}))))}}]),t}(r.a.Component),j=n(27);function O(){var e=Object(c.a)(["\nwidth:100%;\nheight:94vh;\nmargin:auto;\nposition:relative;\n    iframe{\n        position:absolute;\n        width: 60%;\n        height: 40vh;\n        margin:auto;\n        transform:translateX(-50%);\n        top:6%;\n        left:50%;\n        border-radius:10px;     \n        z-index:10;\n    }\n    .text{\n        position:absolute;\n        width:60%;\n        height:auto;\n        padding:30px;\n        border-radius:10px;\n        top:56%;\n        transform:translateX(-50%);\n        left:50%;\n        background:rgba(0,0,0,0.6);\n        h1{\n            padding-bottom:20px;\n            font-size:40px;\n            font-weight:bold;\n            color:white;\n        }\n        h2{\n            font-size:30px;\n            padding-bottom:10px;\n            color:lightpink\n        }\n        h3{\n            font-size:30px;\n            color:gray\n        }\n    }\n\n    @media only screen and (max-width:1200px) {\n        width:100%;\n        height:100%;\n        position:static;\n        margin:auto;\n        iframe{\n            position:static;\n            width:100%;\n            max-height: 80vh;\n            top:0;\n            left:0;\n            transform:none;\n        }\n        .text{position:static;\n            margin:1vh auto 0 auto;\n            width:100%;\n            height:auto;\n            top:0;\n            left:0;\n            transform:none;\n            h1{font-size:30px}\n            h2{font-size:20px}\n            h3{font-size:20px}\n        }\n    }\n\n"]);return O=function(){return e},e}var z=j.default.div(O());var N=function(e){var t=e.location;return r.a.createElement(z,{style:{background:"URL(".concat(t.state.background,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}},r.a.createElement("iframe",{title:t.state.trailer,src:"https://www.youtube.com/embed/".concat(t.state.trailer),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),r.a.createElement("div",{className:"text"},r.a.createElement("h1",null,t.state.title),r.a.createElement("h2",null,t.state.year," ",t.state.genres.map((function(e){return e}))),r.a.createElement("h3",null,t.state.summary.slice(0,400))))},S=n(128),M=n.n(S),L=n(241),I=n(242);n(121);function R(){var e=Object(c.a)(["\n    .menu{\n        position:relative;\n        width:100%;\n        height:6vh;\n        font-size:1.5em;\n        padding:0 13vw;\n    }\n    .item{\n        line-height:6vh;\n    }\n    .input{\n        width:30vw;\n        line-height:6vh;\n        margin-right:2vw\n    }\n    @media only screen and (max-width:769px) {\n        .menu{\n            position:relative;\n            width:100%;\n            height:50px;\n            font-size:1.3em;\n            padding:0 5% \n        }\n        .item{\n            height:50px;\n            line-height:50px;\n        }\n        .input{\n            width:50vw;\n            line-height:50px;\n            margin-right:0\n        }\n    }\n\n"]);return R=function(){return e},e}var A=j.default.div(R());var B=function(){var e=Object(s.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null,r.a.createElement(L.a,{className:"menu",mode:"horizontal"},r.a.createElement(I.a.Search,{key:"1",className:"input",placeholder:"input search text",onSearch:function(t){e.push({pathname:"/search/".concat(t),state:{value:t}})}}),r.a.createElement(L.a.Item,{className:"item",key:"2"},r.a.createElement(l.b,{to:"/"},"Movies")),r.a.createElement(L.a.Item,{className:"item",key:"3"},r.a.createElement(l.b,{to:"/about"},"About")),r.a.createElement(L.a.Item,{className:"item",key:"4"},r.a.createElement("a",{href:"https://junchi86.github.io/index",rel:"nonrefferer noopener"},"Hyuk's-Momentum")))))};function F(){var e=Object(c.a)(["\nline-height:94vh;\nfont-size:60px;\ntext-align:center;\n"]);return F=function(){return e},e}var U=j.default.h1(F());var C=function(){return r.a.createElement("div",null,r.a.createElement(U,null,"movie Api, React"))},D=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},n.getMovie=Object(p.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===n.props.location.state.value){e.next=6;break}return e.next=3,b.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating&query_term=".concat(n.props.location.state.value));case 3:t=e.sent,a=t.data.data.movies,n.setState({movies:a,isLoading:!1});case 6:case"end":return e.stop()}}),e)}))),n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){this.getMovie(),this.props.location.state={pathname:"",state:{value:""}}}},{key:"componentDidMount",value:function(){this.getMovie(),this.props.location.state={pathname:"",state:{value:""}}}},{key:"render",value:function(){var e=r.a.createElement(w.a,{type:"loading",style:{fontSize:35},spin:!0}),t=this.state,n=t.isLoading,a=t.movies;return r.a.createElement("section",{className:"container"},n?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")," ",r.a.createElement(k.a,{indicator:e})):r.a.createElement("div",{className:"movies"},a?a.map((function(e){return r.a.createElement(x,{key:e.yt_trailer_code,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,trailer:e.yt_trailer_code,background:e.background_image})})):r.a.createElement("h1",null,"Result:0")))}}]),t}(r.a.Component);function H(){var e=Object(c.a)(["\n     ",";\n     a{\n         text-decoration:none;\n         color:inherit;\n     }\n     *{\n         box-sizing:boerder-box;\n     }\n     body{\n         font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n         font-size: 14px;\n         background:lightgray\n     }\n"]);return H=function(){return e},e}var J=Object(j.createGlobalStyle)(H(),M.a);var W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement(B,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/search/:value",component:D}),r.a.createElement(s.a,{exact:!0,path:"/",component:_}),r.a.createElement(s.a,{exact:!0,path:"/about",component:C}),r.a.createElement(s.a,{path:"/movie-detail/:trailer",component:N}))),r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[142,1,2]]]);
//# sourceMappingURL=main.19de57ee.chunk.js.map