(this["webpackJsonpstock-market"]=this["webpackJsonpstock-market"]||[]).push([[4],{182:function(t,e,a){t.exports={MarketContainer:"ChartPage_MarketContainer__3CeKS",ChartZone:"ChartPage_ChartZone__381pB",LeftContainer:"ChartPage_LeftContainer__3EsxR",InfoContainer:"ChartPage_InfoContainer__1dHD2",InfoZone:"ChartPage_InfoZone__22IZT",HttpError:"ChartPage_HttpError__2ow_m"}},183:function(t,e,a){t.exports={Tooltip:"Chart_Tooltip__275po",Chart:"Chart_Chart__2tWds",Ticks:"Chart_Ticks__1fR-g",LoadingSpinner:"Chart_LoadingSpinner__2nWiP"}},361:function(t,e,a){t.exports={MenuContainer:"SelectMenu_MenuContainer__2jfQ-",scrollable:"SelectMenu_scrollable__2KZQS",Title:"SelectMenu_Title__2d2DL","custom-select-wrapper":"SelectMenu_custom-select-wrapper__3DFba","custom-select":"SelectMenu_custom-select__3cSsd","custom-select__trigger":"SelectMenu_custom-select__trigger__h2kwW","custom-options":"SelectMenu_custom-options__h51A7",open:"SelectMenu_open__3trWo","custom-option":"SelectMenu_custom-option__32BMX",selected:"SelectMenu_selected__2rJP6",arrow:"SelectMenu_arrow__2UgE1"}},378:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(25),o=function(){return Object(c.b)()},i=c.c,s=a(182),l=a.n(s),u=a(369),p=a(370),h=a(366),d=a(375),m=a(340),j=a(341),b=a(365),f=a(183),x=a.n(f),g=a(24),_=a(1),O=["January","February","March","April","May","June","July","August","September","October","November","December"],v=function(){var t=i((function(t){return t.chart.chartData})),e=i((function(t){return t.chart.timestamps})),a=i((function(t){return t.chart.currTimeRange.range}));return 0===t.length||0===e.length?Object(_.jsx)("div",{className:x.a.LoadingSpinner,children:Object(_.jsx)(g.a,{})}):Object(_.jsx)(u.a,{width:"90%",height:"95%",children:Object(_.jsxs)(p.a,{width:500,height:400,data:t,margin:{top:33,right:27,left:20,bottom:20},children:[Object(_.jsx)(h.a,{dataKey:"price",stroke:"black",fill:"url(#color)",activeDot:{fill:"black",r:6}}),Object(_.jsx)("defs",{children:Object(_.jsxs)("linearGradient",{id:"color",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(_.jsx)("stop",{offset:"0%",stopColor:"#232b2b",stopOpacity:.3}),Object(_.jsx)("stop",{offset:"85%",stopColor:"#232b2b",stopOpacity:.05})]})}),Object(_.jsx)(d.a,{opacity:.5,vertical:!1}),Object(_.jsx)(m.a,{dataKey:"date",axisLine:!1,tickLine:!1,tick:Object(_.jsx)(S,{dateRange:a,timestamps:e}),interval:0}),Object(_.jsx)(j.a,{dataKey:"price",axisLine:!0,tickLine:!1,tickCount:4,domain:["auto","auto"],tick:Object(_.jsx)(k,{}),type:"number",interval:0}),Object(_.jsx)(b.a,{content:Object(_.jsx)(C,{range:a})})]})})},S=function(t){var e=t.x,a=t.y,n=t.payload,r=t.dateRange,c=t.timestamps,o=n.value,i=n.index,s=0,l=0,u=0,p=0,h=0;"1d"!==r&&(s=c[0][i],l=c[1][i-1],u=c[1][i],p=c[2][i-1],h=c[2][i]);var d="";if("max"===r){var m=c[2][0];m>=2010?h!==p&&h%2===0&&(d=String(h)):m>=2e3?h!==p&&h%4===0&&(d=String(h)):m>=1990?h!==p&&h%6===0&&(d=String(h)):h!==p&&h%8===0&&(d=String(h))}else"5y"===r?h!==p&&(d=String(h)):"1y"===r?u!==l&&u%2!==0&&(d=1===u?String(h):"".concat(O[u-1].split("").splice(0,3).join(""))):"6m"===r?u!==l&&(d="".concat(O[u-1].split("").splice(0,3).join(""))):"1m"===r?i%5===0&&(d="".concat(O[u-1].split("").splice(0,3).join("")," ").concat(s)):"5d"===r?d="".concat(O[u-1].split("").splice(0,3).join("")," ").concat(s):"1d"===r&&"00"===o.split(":")[1].split(" ")[0]&&(d=o);return Object(_.jsx)("g",{transform:"translate(".concat(e,", ").concat(a,")"),children:Object(_.jsx)("text",{x:0,y:0,dy:16,textAnchor:"middle",fill:"black",fontSize:14,children:d})})},k=function(t){var e=t.x,a=t.y,n=t.index,r=t.payload.value.toFixed(2);return 0===n?null:Object(_.jsx)("g",{transform:"translate(".concat(e,", ").concat(a,")"),children:Object(_.jsx)("text",{x:0,y:0,dy:5,textAnchor:"end",children:r})})},C=function(t){var e=t.active,a=t.payload,n=t.label,r=t.range;if(e){var c="";if("1d"===r)c=a[0].payload.date;else{var o=n.split("-"),i=o[2],s="Jan";s="0"===o[1][0]?O[Number(o[1][1])-1]:O[Number(o[1])-1];var l=o[0];c="".concat(i," ").concat(s,", ").concat(l)}return Object(_.jsxs)("div",{className:x.a.Tooltip,children:[Object(_.jsx)("h4",{children:c}),Object(_.jsx)("p",{children:Number(a[0].value).toFixed(2)})]})}return null},y=r.a.memo(v),N=a(21),L=a(157),M=a.n(L),w=a(342),T=a(343),D=a.n(T),A=a(22),P=a(361),I=a.n(P),F=function(t){var e=o(),a=i((function(t){return t.chart.currStock.symbol})),r=i((function(t){return t.chart.currTimeRange.range})),c=Object(n.useState)(!1),s=Object(N.a)(c,2),l=s[0],u=s[1],p=Object(n.useState)("Stock"===t.title?a:r),h=Object(N.a)(p,2),d=h[0],m=h[1],j=function(a){if(m(a),"Range"===t.title){var n="1d";"1d"===a&&(n="15m"),"5y"===a&&(n="1wk"),"max"===a&&(n="1mo"),e((r={range:a,interval:n},function(t){t(A.a.setCurrTimeRange({range:r.range,interval:r.interval})),t(A.a.setChartData({chartData:[]}))}))}var r,c;if("Stock"===t.title){var o="",i="";"AAPL"===a?(o="Apple",i=a):"FB"===a?(o="Facebook",i=a):"AMZN"===a?(o="Amazon",i=a):"NFLX"===a?(o="Netflix",i=a):"GOOGL"===a?(o="Alphabet",i=a):"TSLA"===a?(o="Tesla",i=a):"MSFT"===a&&(o="Microsoft",i=a),e((c={stockName:o,stockSymbol:i},function(t){t(A.a.setCurrStock({name:c.stockName,symbol:c.stockSymbol})),t(A.a.setChartData({chartData:[]})),t(A.a.setIsLoading({isLoading:!0}))}))}},b=Object(_.jsx)("div",{className:I.a["custom-options"],children:t.options.map((function(t){return Object(_.jsx)("span",{className:d===t?"".concat(I.a["custom-option"]," ").concat(I.a.selected):"".concat(I.a["custom-option"]),"data-value":t.toLowerCase(),onClick:function(){return j(t)},children:t.toUpperCase()},Math.random().toString())}))});return Object(_.jsxs)("div",{className:I.a.MenuContainer,children:[Object(_.jsx)("h1",{className:I.a.Title,children:t.title}),Object(_.jsx)("div",{className:I.a["custom-select-wrapper"],onClick:function(){u(!l)},children:Object(_.jsxs)("div",{className:l?"".concat(I.a["custom-select"]," ").concat(I.a.open):"".concat(I.a["custom-select"]),children:[Object(_.jsxs)("div",{className:I.a["custom-select__trigger"],children:[Object(_.jsx)("span",{children:d.toUpperCase()}),Object(_.jsx)("div",{className:I.a.arrow})]}),b]})})]})};e.default=function(){var t=o(),e=i((function(t){return t.chart.currStock})),a=i((function(t){return t.chart.currTimeRange})),r=i((function(t){return t.chart.stockPrice})),c=i((function(t){return t.chart.isLoading})),s=i((function(t){return t.chart.error}));Object(n.useEffect)((function(){var n;t((n={currStock:e,currTimeRange:a},function(){var t=Object(w.a)(M.a.mark((function t(e){var a,r;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){var t=Object(w.a)(M.a.mark((function t(){var e,a,r,c,o,i,s,l,u,p,h,d,m,j,b,f,x,g,_;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.currStock,a=n.currTimeRange,r="",r="1m"===a.range?"1mo":"6m"===a.range?"6mo":a.range,t.next=5,D.a.request({method:"GET",url:"https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts",params:{symbol:e.symbol,interval:a.interval,range:r.toLowerCase(),region:"US",comparisons:"^GDAXI,^FCHI"},headers:{"x-rapidapi-key":"41f084f51cmsh2fce017f88a0c79p175ce0jsn2d11f1030e8c","x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com"}});case 5:if("OK"===(c=t.sent).statusText){t.next=8;break}throw new Error("Chart data couldn't be fetched");case 8:for(o=c.data.chart.result[0].indicators.quote[0].close,i=c.data.chart.result[0].timestamp,s=[],l=0;l<o.length;l++)u=0,u=null===o[l]?(o[l-2]+o[l-1])/2:o[l],s.push(Math.round(100*(u+Number.EPSILON))/100);if(p=[],h=[],d=[],m=[],"1d"===a.range)for(j=0;j<i.length;j++)b=new Date(1e3*i[j]).toLocaleDateString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}).split(",")[1].trim(),p.push(b);else for(f=0;f<i.length;f++)x=new Date(1e3*i[f]).toLocaleDateString("en-GB").split("/"),h.push(Number(x[0])),d.push(Number(x[1])),m.push(Number(x[2])),p.push([x[2],x[1],x[0]].join("-"));for(g=[],_=0;_<s.length;_++)g.push({date:p[_],price:s[_]});return t.abrupt("return",{stockPrice:s[s.length-1],chartData:g,timeData:[h,d,m]});case 20:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,a();case 4:r=t.sent,e(A.a.setChartData({chartData:r.chartData})),e(A.a.setTimestamps({timestamps:r.timeData})),e(A.a.setStockPrice({price:r.stockPrice})),e(A.a.setIsLoading({isLoading:!1})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e(A.a.setError({error:!0}));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()))}),[t,e,a]);var u=Object(_.jsxs)("div",{className:l.a.ChartZone,children:[Object(_.jsx)("h1",{children:"".concat(e.name," Inc")}),Object(_.jsx)("h2",{children:c?"Price is loading":"".concat(r," USD")}),Object(_.jsx)(y,{})]});return s&&(u=Object(_.jsx)("div",{className:"".concat(l.a.ChartZone," ").concat(l.a.HttpError),children:Object(_.jsx)("p",{children:"Something went wrong"})})),Object(_.jsxs)("div",{className:l.a.MarketContainer,children:[Object(_.jsx)("div",{className:l.a.LeftContainer}),u,Object(_.jsx)("div",{className:l.a.InfoContainer,children:Object(_.jsxs)("div",{className:l.a.InfoZone,children:[Object(_.jsx)(F,{title:"Stock",options:["AAPL","AMZN","FB","GOOGL","MSFT","NFLX","TSLA"]}),Object(_.jsx)(F,{title:"Range",options:["1d","5d","1m","6m","1y","5y","max"]})]})})]})}}}]);
//# sourceMappingURL=4.4f0f54f4.chunk.js.map