!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App=t.Dd=t.Dt=void 0;var a=n(3),r=t.Dt=React.createClass({displayName:"Dt",render:function(){return React.createElement("dt",null,this.props.content)}}),o=t.Dd=React.createClass({displayName:"Dd",render:function(){return React.createElement("dl",null,this.props.content)}});t.App=React.createClass({displayName:"App",getInitialState:function(){return{timeline:{}}},componentDidMount:function(){var e=this;(0,a.loadJSON)("js/timeline.json",function(t){var n=JSON.parse(t);e.setState({timeline:n})})},getTimeline:function(){var e=this.state.timeline.events.map(function(e){return[React.createElement(r,{content:e.time}),React.createElement(o,{content:e.description})]});return React.createElement("dl",null,e)},render:function(){var e=this.state.timeline.events?this.getTimeline():"Loading";return React.createElement("div",null,e)}})},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";function a(e,t){var n=new XMLHttpRequest;n.overrideMimeType("application/json"),n.open("GET",e,!0),n.onreadystatechange=function(){4==n.readyState&&"200"==n.status&&t(n.responseText)},n.send(null)}function r(e){if(o){var t="http://localhost:"+e+"/livereload.js",n=document.createElement("script");n.setAttribute("src",t),n.setAttribute("type","text/javascript"),document.body.appendChild(n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.loadJSON=a,t.attachLiveReload=r;var o=t.isDev="localhost"===location.hostname;document.addEventListener("DOMContentLoaded",function(){r(33377)})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(1),o=a(r),i=n(2),c=a(i),u=n(0);!function(e,t,n,a,r,o,i){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,o=t.createElement(n),i=t.getElementsByTagName(n)[0],o.async=1,o.src=a,i.parentNode.insertBefore(o,i)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-186744-112","auto"),ga("send","pageview"),document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("app");e&&c.default.render(o.default.createElement(u.App,null),e)})}]);