(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{21:function(t,n,e){},24:function(t,n,e){},25:function(t,n,e){"use strict";e.r(n);var o=e(1),r=e(0),c=e.n(r),a=e(12),i=e.n(a),u=(e(21),e(4)),d=e(8),s=e(2),f=e(3);function l(){var t=Object(s.a)(["\n    background-color: transparent;\n    border: none;\n    outline: none;\n    font-size: 15px;\n"]);return l=function(){return t},t}function b(){var t=Object(s.a)([""]);return b=function(){return t},t}function j(){var t=Object(s.a)(["\n    align-items: center;\n    background: #fff;\n    color: #000;\n    border-radius: 3px;\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);\n    display: flex;\n    font-size: 15px;\n    justify-content: space-between;\n    margin-bottom: 6px;\n    padding: 3px 10px;\n"]);return j=function(){return t},t}var p=f.a.div(j()),g=f.a.div(b()),x=f.a.button(l()),h=function(t){var n=t.todo,e=t.index,r=t.completeTodo,c=t.removeTodo,a=t.theme;return Object(o.jsxs)(p,{style:{textDecoration:n.isCompleted?"line-through":"",background:"dark"===a?"#29284f":"#fff",color:"dark"===a?"#fff":"#000"},children:[n.text,Object(o.jsxs)(g,{children:[Object(o.jsx)(x,{style:{display:n.isCompleted?"none":""},onClick:function(){return r(e)},children:"\u2705"}),Object(o.jsx)(x,{onClick:function(){return c(e)},children:"\u274c"})]})]})};function O(){var t=Object(s.a)(["\n    background: #bababa;\n    color: #fff;\n    border: none;\n    outline: none;\n    width: 99%;\n"]);return O=function(){return t},t}var m=f.a.input(O()),v=function(t){var n=t.addTodo,e=Object(r.useState)(""),c=Object(u.a)(e,2),a=c[0],i=c[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),a&&(n(a),i(""))},children:Object(o.jsx)(m,{type:"text",onChange:function(t){return i(t.target.value)}})})};function k(){var t=Object(s.a)(["\n    text-align: center;\n"]);return k=function(){return t},t}function w(){var t=Object(s.a)(["\n    transition: background 0.1s linear;\n    position: absolute;\n    top: 100px;\n    border-radius: 4px;\n    width: 300px;\n    padding: 5px;\n"]);return w=function(){return t},t}var S=f.a.div(w()),y=f.a.h1(k()),C=function(t){var n=t.theme,e=JSON.parse(window.localStorage.getItem("todos")),c=Object(r.useState)([]),a=Object(u.a)(c,2),i=a[0],s=a[1];Object(r.useEffect)((function(){e&&s(e)}),[e]);var f=function(t){var n=Object(d.a)(i);n[t].isCompleted=!0,window.localStorage.setItem("todos",JSON.stringify(n)),s(n)},l=function(t){var n=Object(d.a)(i);n.splice(t,1),window.localStorage.setItem("todos",JSON.stringify(n)),s(n)};return Object(o.jsxs)(S,{style:{background:"dark"===n?"#080729":"#e8e8e8",color:"dark"===n?"#f7f7ff":"gray"},children:[Object(o.jsx)(y,{children:"Todo list:"}),i.map((function(t,e){return Object(o.jsx)(h,{index:e,todo:t,completeTodo:f,removeTodo:l,theme:n},e)})),Object(o.jsx)(v,{addTodo:function(t){var n=[].concat(Object(d.a)(i),[{text:t}]);window.localStorage.setItem("todos",JSON.stringify(n)),s(n)}})]})};function T(){var t=Object(s.a)(["\n    background-color: #ffff;\n    border-radius: 10px;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 15px;\n    position: fixed;\n    bottom: 12px;\n    right: 12px;\n    \n"]);return T=function(){return t},t}var I=f.a.button(T()),N=function(t){var n=t.toggleTheme,e=t.theme;return Object(o.jsx)("div",{className:"theme-button",children:Object(o.jsx)(I,{type:"button",style:{background:"dark"===e?"#080729":"#e8e8e8",color:"dark"===e?"#f7f7ff":"#000"},onClick:n,children:"Switch theme"})})},J=(e(24),function(){var t=function(){var t=Object(r.useState)("light"),n=Object(u.a)(t,2),e=n[0],o=n[1];return Object(r.useEffect)((function(){var t=window.localStorage.getItem("theme");t&&o(t)}),[]),[e,function(){"light"===e?(window.localStorage.setItem("theme","dark"),o("dark")):(window.localStorage.setItem("theme","light"),o("light"))}]}(),n=Object(u.a)(t,2),e=n[0],c=n[1];return Object(r.useEffect)((function(){document.body.style.backgroundColor="dark"===e?"#020212":"#fff"}),[e]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{className:"todoapp",children:Object(o.jsx)(C,{theme:e})}),Object(o.jsx)(N,{theme:e,toggleTheme:c})]})}),E=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,26)).then((function(n){var e=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,a=n.getTTFB;e(t),o(t),r(t),c(t),a(t)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(J,{})}),document.getElementById("root")),E()}},[[25,1,2]]]);
//# sourceMappingURL=main.e0cc8b72.chunk.js.map