(this["webpackJsonpstock-market"]=this["webpackJsonpstock-market"]||[]).push([[0],{11:function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__1W-Hk",NavigationItem:"NavigationItems_NavigationItem__2uO5V",active:"NavigationItems_active__1BLop"}},15:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__kPnVs",Logo:"Toolbar_Logo__184xA",DesktopOnly:"Toolbar_DesktopOnly__2kruY"}},22:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(14),c=Object(n.b)({name:"chartReducer",initialState:{chartData:[],currStock:{name:"Apple",symbol:"AAPL"},currTimeRange:{range:"1m",interval:"1d"},sizes:{pageHeight:"",pageWidth:""},timestamps:[],stockPrice:null,isLoading:!0,error:!1},reducers:{setChartData:function(e,t){e.chartData=t.payload.chartData},setCurrStock:function(e,t){e.currStock={name:t.payload.name,symbol:t.payload.symbol}},setCurrTimeRange:function(e,t){e.currTimeRange={range:t.payload.range,interval:t.payload.interval}},setSizes:function(e,t){e.sizes={pageHeight:t.payload.height,pageWidth:t.payload.width}},setTimestamps:function(e,t){e.timestamps=t.payload.timestamps},setStockPrice:function(e,t){e.stockPrice=t.payload.price},setIsLoading:function(e,t){e.isLoading=t.payload.isLoading},setError:function(e,t){e.error=t.payload.error}}}),i=c.actions;t.b=c},24:function(e,t,a){"use strict";a(0);var n=a(30),c=a.n(n),i=a(1);t.a=function(){return Object(i.jsxs)("div",{className:c.a["lds-default"],children:[Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{})]})}},27:function(e,t,a){e.exports={Content:"Layout_Content__tCEpC"}},28:function(e,t,a){e.exports={Logo:"Logo_Logo__1sbNb"}},29:function(e,t,a){e.exports={ToggleBtn:"ToogleBtn_ToggleBtn__1mEKM"}},30:function(e,t,a){e.exports={"lds-default":"LoadingSpinner_lds-default__1MeNj"}},41:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(13),s=a.n(i),o=a(25),r=a(9),l=(a(41),a(14)),d=a(22),j=Object(l.a)({reducer:{chart:d.b.reducer}}),b=a(3),u=a(21),m=a(27),x=a.n(m),O=a(15),v=a.n(O),p=a(28),g=a.n(p),_=a.p+"static/media/logo_transparent.3d40d372.png",h=a(1),f=function(){return Object(h.jsx)("div",{className:g.a.Logo,children:Object(h.jsx)("img",{src:_,alt:"Logo"})})},k=a(11),N=a.n(k),C=function(){return Object(h.jsxs)("ul",{className:N.a.NavigationItems,children:[Object(h.jsx)("li",{className:N.a.NavigationItem,children:Object(h.jsx)(r.b,{exact:!0,activeClassName:N.a.active,to:"/",children:"Home Page"})}),Object(h.jsx)("li",{className:N.a.NavigationItem,children:Object(h.jsx)(r.b,{activeClassName:N.a.active,exact:!0,to:"/stock-market",children:"Stock Charts"})})]})},y=a(29),S=a.n(y),L=function(e){return Object(h.jsxs)("div",{onClick:e.clicked,className:S.a.ToggleBtn,children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})},T=function(e){return Object(h.jsxs)("header",{className:v.a.Toolbar,children:[Object(h.jsx)(L,{clicked:e.drawerHandler}),Object(h.jsx)("div",{className:v.a.Logo,children:Object(h.jsx)(f,{})}),Object(h.jsx)("nav",{className:v.a.DesktopOnly,children:Object(h.jsx)(C,{})})]})},D=a(8),w=a.n(D),I=function(e){var t=[w.a.sidenav,w.a.Closed];return e.open&&(t=[w.a.sidenav,w.a.Open]),Object(h.jsxs)("div",{children:[e.open?Object(h.jsx)("div",{className:w.a.Backdrop,onClick:e.closed}):null,Object(h.jsxs)("div",{className:t.join(" "),onClick:e.closed,children:[Object(h.jsx)(r.b,{exact:!0,to:"/",activeClassName:w.a.active,className:w.a.link,children:"HOME PAGE"}),Object(h.jsx)(r.b,{exact:!0,to:"/stock-market",activeClassName:w.a.active,className:w.a.link,children:"STOCK CHARTS"})]})]})},B=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],i=a[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(T,{drawerHandler:function(){i(!c)}}),Object(h.jsx)(I,{open:c,closed:function(){i(!1)}}),Object(h.jsx)("main",{className:x.a.Content,children:e.children})]})},H=a(24),P=c.a.lazy((function(){return a.e(5).then(a.bind(null,369))})),z=c.a.lazy((function(){return Promise.all([a.e(2),a.e(4)]).then(a.bind(null,380))})),A=c.a.lazy((function(){return a.e(6).then(a.bind(null,377))}));var E=function(){return Object(h.jsx)(B,{children:Object(h.jsx)(n.Suspense,{fallback:Object(h.jsx)("div",{className:"centered",children:Object(h.jsx)(H.a,{})}),children:Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{exact:!0,path:"/stock-market/",component:z}),Object(h.jsx)(b.a,{exact:!0,path:"/",component:P}),Object(h.jsx)(b.a,{path:"*",component:A})]})})})},R=function(e){e&&e instanceof Function&&a.e(7).then(a.bind(null,378)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(o.a,{store:j,children:Object(h.jsx)(r.a,{children:Object(h.jsx)(E,{})})})}),document.getElementById("root")),R()},8:function(e,t,a){e.exports={sidenav:"SideDrawer_sidenav__2TH1u",link:"SideDrawer_link__2vNKb",active:"SideDrawer_active__wW8pC",closebtn:"SideDrawer_closebtn__1Km2f",Open:"SideDrawer_Open__3R0oq",Closed:"SideDrawer_Closed__g6H2d",Logo:"SideDrawer_Logo__l4fi2",Backdrop:"SideDrawer_Backdrop__3Lm0a"}}},[[46,1,3]]]);
//# sourceMappingURL=main.f4ad748f.chunk.js.map