(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),o=a.n(l),c=(a(13),a(1));function s(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},e.HomeText))),r.a.createElement("div",{className:"form-check form-switch text-".concat("dark"!==e.mode?"dark":"light")},r.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckChecked","aria-checked":"false",onClick:e.togglemode}),r.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckChecked"},e.modetext))))))}function m(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],o=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-3",style:{color:"dark"!==e.mode?"black":"white"}},r.a.createElement("p",null,e.Heading),r.a.createElement("div",{className:"mb-3"},r.a.createElement("textarea",{className:"form-control my-2",onChange:function(e){o(e.target.value)},id:"mybtn",rows:"5",value:l,placeholder:"Enter your Text Here."}),r.a.createElement("button",{className:"".concat("dark"!==e.mode?"btn btn-primary":"btn btn-dark"," mx-1 my-1"),onClick:function(){var t=l.toUpperCase();o(t),"dark"!==e.mode?e.showAlert("Converted to UpperCase","success"):e.showAlert("Converted to UpperCase","dark")}},"Upper Case"),r.a.createElement("button",{className:"".concat("dark"!==e.mode?"btn btn-primary":"btn btn-dark"),onClick:function(){var t=l.toLowerCase();o(t),"dark"!==e.mode?e.showAlert("Converted to LowerCase","success"):e.showAlert("Converted to LowerCase","dark")}},"Lower Case"),r.a.createElement("button",{className:"".concat("dark"!==e.mode?"btn btn-primary":"btn btn-dark"," mx-1"),onClick:function(){var t=l.length;o("Number of Characters: "+t),"dark"!==e.mode?e.showAlert("Total Character ".concat(t),"success"):e.showAlert("Total Character ".concat(t),"dark")}},"Character Length"),r.a.createElement("button",{className:"".concat("dark"!==e.mode?"btn btn-primary":"btn btn-dark"),onClick:function(){var t=document.getElementById("mybtn");t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value),"dark"!==e.mode?e.showAlert("Copy to Clipboard","success"):e.showAlert("Copy to Clipboard","dark")}},"Copy Text"),r.a.createElement("button",{className:"".concat("dark"!==e.mode?"btn btn-primary":"btn btn-dark"," mx-1"),onClick:function(){o(""),"dark"!==e.mode?e.showAlert("Text is Clear","success"):e.showAlert("Text is Clear","dark")}},"Clear Text"))),r.a.createElement("div",{className:"container",style:{color:"dark"!==e.mode?"black":"white"}},r.a.createElement("h2",null,"Text Summary..."),r.a.createElement("p",null,l.split(" ").length," words and ",l.length," character."),r.a.createElement("p",null,.008*l.split(" ").length,"Minutes Read."),r.a.createElement("h2",null,"Preview"),r.a.createElement("p",null,l.length>0?l:"Enter Something Text to above to Preview.")),r.a.createElement("hr",{style:{color:"dark"!==e.mode?"black":"white"}}))}function d(e){var t;return e.alert&&r.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},r.a.createElement("strong",null,(t=e.alert.type).charAt(0).toUpperCase()+t.slice(1))," ",e.alert.msg)}s.defaultProps={title:"TextUtils",HomeText:"Home",AboutText:"About"};var i=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)("Enable DarkMode"),i=Object(c.a)(o,2),b=i[0],u=i[1],h=Object(n.useState)(""),k=Object(c.a)(h,2),p=k[0],g=k[1],E=function(e,t){g({msg:e,type:t}),setTimeout(function(){g(null)},2e3)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{title:"TextUtils",HomeText:"Home",AboutText:"About",mode:a,modetext:b,togglemode:function(){"dark"!==a?(l("dark"),u("Enable LightMode"),document.body.style.backgroundColor="black",E("Dark Mode Enabled","dark")):(l("light"),u("Enable DarkMode"),document.body.style.backgroundColor="white",E("Light Mode Enabled","success"))}}),r.a.createElement(d,{alert:p}),r.a.createElement(m,{showAlert:E,Heading:"Enter your Text to Analyze.",mode:a}))},b=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,16)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),l(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null))),b()},4:function(e,t,a){e.exports=a(15)}},[[4,3,2]]]);
//# sourceMappingURL=main.5ffcf930.chunk.js.map