(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{16:function(e,n,t){e.exports=t(28)},21:function(e,n,t){},22:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var a=t(1),i=t.n(a),r=t(8),o=t.n(r),s=(t(21),t(9)),c=t(10),l=t(2),d=t(15),m=t(14),h=(t(22),t(4)),u=t.n(h),v=t(11),w=t.n(v),p=t(5),g=t(12),f=t(13);u.a.setOptions({breaks:!0,gmf:!0});var k=function(e){Object(d.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(s.a)(this,t),(a=n.call(this,e)).state={input:'\n# Welcome to my React Markdown Previewer for FCC!\n\n## This is a sub-heading\n\n### Here are some interesting stuff:\n\n[This is a link to FreeCodeCamp](https://www.freecodecamp.org/)\n\n```\n//Here I\'m coding.\nif (myFirstCode){\n    console.log("Hello World!");\n}\n\n```\n\n`console.log("Hi Human!")`\n\n* Here\n    * we\n        * have\n            * a\n                * list\n\n> Here we have a block quote with a **bold text**\n\n*And here is an image*:\n\n![This is an alternative text](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)\n\n'},a.handleChange=a.handleChange.bind(Object(l.a)(a)),a}return Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"containerEditor"},i.a.createElement("div",{className:"titleEditor"},i.a.createElement(p.a,{icon:g.a})," Editor"),i.a.createElement("textarea",{className:"textArea boxsizingBorder",rows:"30",id:"editor",value:this.state.input,onChange:this.handleChange})),i.a.createElement("div",{className:"containerPreview"},i.a.createElement("div",{className:"titlePreview"},i.a.createElement(p.a,{icon:f.a})," Markdown Previewer"),i.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:w.a.sanitize(u()(this.state.input))}})))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.a977c139.chunk.js.map