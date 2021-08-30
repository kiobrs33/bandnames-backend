(this["webpackJsonpbandnames-react"]=this["webpackJsonpbandnames-react"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(36),s=n.n(a),r=(n(42),n(43),n(8)),i=n(37),l=n(0),d=Object(c.createContext)(),o=function(e){var t=e.children,n=function(e){var t=Object(c.useMemo)((function(){return Object(i.io)(e,{transports:["websocket"]})}),[e]),n=Object(c.useState)(!1),a=Object(r.a)(n,2),s=a[0],l=a[1];return Object(c.useEffect)((function(){t.on("connect",(function(){l(!0)}))}),[t]),Object(c.useEffect)((function(){t.on("disconnect",(function(){l(!1)}))}),[t]),{socket:t,online:s}}("https://bandnames-r.herokuapp.com/"),a=n.socket,s=n.online;return Object(l.jsx)(d.Provider,{value:{socket:a,online:s},children:t})},b=function(){var e=Object(c.useContext)(d).socket,t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],s=n[1];return Object(l.jsxs)("div",{className:"band-add",children:[Object(l.jsx)("h1",{className:"band-add__title",children:"Agregar Banda"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>0&&e.emit("create-band",a),s("")},className:"form",children:[Object(l.jsx)("input",{className:"form__input",placeholder:"Nombre de la banda",onChange:function(e){return s(e.target.value)},value:a}),Object(l.jsx)("button",{className:"form__submit",type:"submit",children:"Create"})]})]})},j=n(2),u=n(14);u.a.register.apply(u.a,Object(j.a)(u.b));var O=function(){var e,t=Object(c.useContext)(d).socket;Object(c.useEffect)((function(){t.on("current-bands",(function(t){e&&e.destroy(),n(t)}))}),[t,e]);var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=document.getElementById("myChart").getContext("2d");e=new u.a(n,{type:"bar",data:{labels:t.map((function(e){return e.name})),datasets:[{label:"# Votos",data:t.map((function(e){return e.votes})),backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:.5}]},options:{indexAxis:"y",animation:!1,responsive:!0,scales:{y:{beginAtZero:!0}},layout:{padding:5}}})};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"band-chart__title",children:"Grafico de votos"}),Object(l.jsx)("canvas",{id:"myChart"})]})},h=function(){var e=Object(c.useContext)(d).socket,t=Object(c.useState)([]),n=Object(r.a)(t,2),a=n[0],s=n[1];Object(c.useEffect)((function(){return e.on("current-bands",(function(e){s(e)})),function(){return e.off("current-bands")}}),[e]);var i=function(t,n){!function(t,n){e.emit("change-name-band",{id:t,name:n})}(t,n)};return Object(l.jsxs)("div",{className:"band-list",children:[Object(l.jsx)("h1",{className:"band-list__title",children:"Lista de Bandas"}),Object(l.jsxs)("table",{className:"content-table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"Bandas"}),Object(l.jsx)("th",{children:"Votos"}),Object(l.jsx)("th",{children:"Borrar"})]})}),Object(l.jsx)("tbody",{children:a.map((function(t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("button",{className:"content-table__btn-add",onClick:function(){return n=t.id,void e.emit("add-vote",n);var n},children:Object(l.jsx)("i",{className:"fas fa-plus"})})}),Object(l.jsx)("td",{children:Object(l.jsx)("input",{className:"content-table__input",type:"text",value:t.name,onChange:function(e){return function(e,t){var n=e.target.value;s((function(e){return e.map((function(e){return e.id===t&&(e.name=n),e}))}))}(e,t.id)},onBlur:function(){return i(t.id,t.name)}})}),Object(l.jsx)("td",{children:Object(l.jsxs)("h3",{children:[" ",t.votes," "]})}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{className:"content-table__btn-remove",onClick:function(){return n=t.id,void e.emit("delete-band",n);var n},children:Object(l.jsx)("i",{className:"fas fa-trash"})})})]},t.id)}))})]})]})},m=(n(76),function(){return Object(l.jsx)("div",{className:"cssload-fond",children:Object(l.jsxs)("div",{className:"cssload-container-general",children:[Object(l.jsx)("div",{className:"cssload-internal",children:Object(l.jsx)("div",{className:"cssload-ballcolor cssload-ball_1",children:"\xa0"})}),Object(l.jsx)("div",{className:"cssload-internal",children:Object(l.jsx)("div",{className:"cssload-ballcolor cssload-ball_2",children:"\xa0"})}),Object(l.jsx)("div",{className:"cssload-internal",children:Object(l.jsx)("div",{className:"cssload-ballcolor cssload-ball_3",children:"\xa0"})}),Object(l.jsx)("div",{className:"cssload-internal",children:Object(l.jsx)("div",{className:"cssload-ballcolor cssload-ball_4",children:"\xa0"})})]})})});var x=function(){var e=Object(c.useContext)(d).online;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h1",{className:"header__title",children:"BandNames"}),Object(l.jsxs)("p",{className:"status",children:["Estado de Servicio:",e?Object(l.jsx)("span",{className:"status__online",children:" Online"}):Object(l.jsx)("span",{className:"status__offline",children:" Offline"})]})]}),e?Object(l.jsxs)("div",{className:"band-container",children:[Object(l.jsx)("div",{className:"band-chart",children:Object(l.jsx)(O,{})}),Object(l.jsxs)("div",{className:"band-options",children:[Object(l.jsx)(b,{}),Object(l.jsx)(h,{})]})]}):Object(l.jsx)("div",{className:"spinner",children:Object(l.jsx)(m,{})})]})},f=function(){return Object(l.jsx)(o,{children:Object(l.jsx)(x,{})})};s.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.f34732c6.chunk.js.map