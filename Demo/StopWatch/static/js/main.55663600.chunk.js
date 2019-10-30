(this["webpackJsonp4.3"]=this["webpackJsonp4.3"]||[]).push([[0],{15:function(n,t,e){n.exports=e(26)},20:function(n,t,e){},26:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(10),u=e.n(i),c=(e(20),e(9),e(1)),o=e(2);function l(){var n=Object(c.a)(["\n  cursor: ",";\n  border: 0;\n  appearance: none;\n  border-radius: 10%;\n  height: 75px;\n  width: 100px;\n  font-size: 1.5rem;\n  text-align: center;\n  background: ",";\n  color: ",";\n  transition: 0.25s ease;\n  box-shadow: ",";\n  opacity: ",";\n"]);return l=function(){return n},n}var s=function(n){switch(n){case"running":return"red";case"stopped":return"green";default:return"grey"}},f=o.a.button(l(),(function(n){return n.disabled?"not-allowed":"pointer"}),(function(n){var t=n.status;return s(t)}),(function(n){return n.status?"#fff":"black"}),(function(n){var t=n.status;return"0 0 0 3px #111, 0 0 0 6px ".concat(s(t))}),(function(n){return n.disabled?".5":null})),m=function(n){return a.a.createElement(f,Object.assign({status:n.status,disabled:n.disabled},n),n.children)},d=e(4);function p(){var n=Object(c.a)(["\n  padding: 10px 0;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #ccc;\n  color: ","\n"]);return p=function(){return n},n}function b(){var n=Object(c.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 10px;\n"]);return b=function(){return n},n}var v=o.a.ol(b()),h=o.a.li(p(),(function(n){return function(n){switch(n){case"best":return"green";case"worst":return"red";default:return"darkgray"}}(n.status)})),g=function(n){var t=n.laps,e=Math.min.apply(Math,Object(d.a)(t)),r=Math.max.apply(Math,Object(d.a)(t));return a.a.createElement(v,null,t.map((function(n,t){var i=n===e,u=n===r;return a.a.createElement(h,{key:t,status:function(){if(!i||!u)return i?"best":u?"worst":null}()},"Result ",t+1,a.a.createElement("span",null,+(n/1e3).toFixed(3),"s"))})))},x=e(3),j=function(){var n=Object(r.useState)([]),t=Object(x.a)(n,2),e=t[0],a=t[1],i=function(){var n=Object(r.useState)(!1),t=Object(x.a)(n,2),e=t[0],a=t[1],i=Object(r.useState)(0),u=Object(x.a)(i,2),c=u[0],o=u[1],l=Object(r.useState)(!1),s=Object(x.a)(l,2)[1];return Object(r.useEffect)((function(){var n;return o(Date.now()),e&&(n=setInterval((function(){return s((function(n){return!n}))}),25)),function(){clearInterval(n),o(0)}}),[e]),{runTimer:e,setRunTimer:a,startTime:c,setStartTime:o}}(),u=i.runTimer,c=i.setRunTimer,o=i.startTime,l=i.setStartTime;return{startTime:o,laps:e,addLap:function(){return function(){var n=Date.now()-o,t=e.length>0?e.reduce((function(n,t){return n+t}),0):0,r=e.length>0?n-t:n;u&&a([].concat(Object(d.a)(e),[r]))}()},resetTimer:function(){return c(!1),l(0),void a([])},startTimer:function(){return c(!0)},stopTimer:function(){return c(!1)},runTimer:u}};function w(){var n=Object(c.a)(["\n  cursor: ",";\n  border: 0;\n  appearance: none;\n  border-radius: 10%;\n  height: 75px;\n  width: 100px;\n  font-size: 1.5rem;\n  text-align: center;\n  background: gray;\n  color: black;\n  transition: 0.25s ease;\n  box-shadow: 0 0 0 3px #111, 0 0 0 6px gray;\n  opacity: ",";\n"]);return w=function(){return n},n}var O=o.a.button(w(),(function(n){return n.disabled?"not-allowed":"pointer"}),(function(n){return n.disabled?".5":null})),E=function(n){return a.a.createElement(O,Object.assign({status:n.status,disabled:n.disabled},n),n.children)};function y(){var n=Object(c.a)(["\n  flex: 1;\n  color: #fff;\n  max-width: 400px;\n  margin: 0 auto;\n  text-align: center;\n  font-family: sans-serif;\n  font-size: 18px;\n"]);return y=function(){return n},n}function T(){var n=Object(c.a)(["\n  margin: 1em 0;\n  display: flex;\n  justify-content: space-between;\n"]);return T=function(){return n},n}var k=o.a.div(T()),S=o.a.div(y()),M=function(){var n=Object(r.useState)(void 0),t=Object(x.a)(n,2),e=t[0],i=t[1],u=Object(r.useState)(0),c=Object(x.a)(u,2),o=c[0],l=c[1],s=function(n){clearInterval(e),i(setInterval((function(){l((function(n){return n<1?(clearInterval(e),0):n-1}))}),1e3)),l(n)};return a.a.createElement(S,null,a.a.createElement("h1",null,"Time Left: ",o),a.a.createElement(k,null,a.a.createElement(E,{time:"5",onClick:function(){s(5)}},"5 sec"),a.a.createElement(E,{time:"10",onClick:function(){s(10)}},"10 sec"),a.a.createElement(E,{time:"15",onClick:function(){s(15)}},"15 sec")))};function C(){var n=Object(c.a)(["\n  margin: 1em 0;\n  display: flex;\n  justify-content: space-between;\n"]);return C=function(){return n},n}function I(){var n=Object(c.a)(["\n  flex: 1;\n  color: #fff;\n  max-width: 400px;\n  margin: 0 auto;\n  text-align: center;\n  padding: 0 2em;\n  font-family: sans-serif;\n  font-size: 22px;\n"]);return I=function(){return n},n}function z(){var n=Object(c.a)(["\n  font-size: 4em;\n  font-weight: normal;\n"]);return z=function(){return n},n}var R=o.a.h1(z()),D=o.a.div(I()),L=o.a.div(C()),W=function(){var n=j(),t=n.laps,e=n.addLap,r=n.runTimer,i=n.startTime,u=n.startTimer,c=n.stopTimer,o=n.resetTimer;return a.a.createElement(D,null,a.a.createElement("h2",null,"Stop Watch"),a.a.createElement(R,null,function(n){if(0===n)return"00:00:00";n/=1e3;var t=Math.floor(n/3600);n%=3600;var e=Math.floor(n/60);n%=60;var r=Math.floor(n),a="";return a+=(t<10?"0":"")+t+":"+(e<10?"0":"")+e+":"+(r<10?"0":"")+r}(r?Date.now()-i:0)),a.a.createElement(L,null,a.a.createElement(m,{onClick:function(){r?c():u()},status:r?"running":"stopped"},r?"Stop":"Start"),a.a.createElement(m,{onClick:function(){r&&e()}},"Show Result"),a.a.createElement(m,{disabled:"0.0"===i,onClick:function(){o()}},"Reset")),a.a.createElement(L,null,a.a.createElement(M,null)),a.a.createElement("h2",null,"Show result for split time"),t.length>0&&a.a.createElement(g,{laps:t}))};var B=function(){return a.a.createElement(W,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},9:function(n,t,e){}},[[15,1,2]]]);
//# sourceMappingURL=main.55663600.chunk.js.map