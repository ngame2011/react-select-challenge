(this["webpackJsonpmikhail-react-select-challenge"]=this["webpackJsonpmikhail-react-select-challenge"]||[]).push([[0],{16:function(e,i,a){},18:function(e,i,a){"use strict";a.r(i);var n=a(1),t=a(7),c=a(4),l=a(5),m=(a(16),a(0));function d(){var e=Object(n.useState)(o),i=Object(l.a)(e,2),a=i[0],t=i[1],c=Object(n.useState)([]),d=Object(l.a)(c,2),r=d[0],f=d[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"title",children:" React Select Challenge "}),Object(m.jsx)(s,{onClick:function(){t(a.filter((function(e){return!r.includes(e)})))}}),Object(m.jsx)(b,{items:a,selectedItems:r,onChange:function(e){f(e)}})]})}var b=function(e){var i=e.items,a=e.selectedItems,n=e.onChange,t=function(e){var t=e.target,l=t.value,m=t.checked,d=function(e){return function(i){return i._id===e}},b=function(e){return function(i){return!e.includes(i)}};if(e.nativeEvent.shiftKey){var s=i.findIndex(d(l)),o=i.findIndex(d(a[a.length-1])),r=o>-1?o:0,f=s<r?s:r,z=s<r?r:s,u=i.slice(f,z+1).map((function(e){return e._id})),h=m?[].concat(Object(c.a)(a),Object(c.a)(u.filter(b(a)))):a.filter(b(u));n(h)}else n(m?[].concat(Object(c.a)(a),[l]):a.filter((function(e){return e!==l})))};return Object(m.jsx)("div",{className:"items",children:Object(m.jsx)("ul",{children:i.map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{type:"checkbox",name:"items",value:e._id,id:"items_"+e._id,checked:a.includes(e._id),onChange:t}),Object(m.jsx)("label",{htmlFor:"items_"+e._id,children:e.name})," ",Object(m.jsx)("a",{href:"mailto:"+e.email,children:e.email})]},e._id)}))})})},s=function(e){var i=e.onClick;return Object(m.jsx)("button",{className:"DeleteButton btn btn-primary",onClick:i,children:"Delete Selected Items"})},o=[{_id:"62863ccd8b7762a11832b6af",name:"Frank Bell",email:"frank.b@gmail.zzz"},{_id:"62863ccd8b7762377b32b6b1",name:"Kevin Edwards",email:"kevin.e@gmail.zzz"},{_id:"62863ccd8b7762b7c732b6b2",name:"Jose Reed",email:"jose.r@gmail.zzz"},{_id:"62863ccd8b7762dc2632b6b3",name:"Jayne Robinson",email:"jayne.r@gmail.zzz"},{_id:"62863ccd8b7762278132b6b4",name:"Chris Zimmer",email:"chris.z@gmail.zzz"},{_id:"62863ccd8b7762517232b6b5",name:"George Thomas",email:"george.t@gmail.zzz"},{_id:"62863ccd8b77625fd032b6b8",name:"Ian Davidson",email:"ian.d@gmail.zzz"},{_id:"62863ccd8b77620ae432b6b9",name:"Keith Dulwich",email:"keith.d@gmail.zzz"},{_id:"62863ccd8b776229fd32b6bc",name:"Mark Wilson",email:"mark.w@gmail.zzz"},{_id:"62863ccd8b7762509332b6bf",name:"David Wilson",email:"david.wilson@gmail.zzz"},{_id:"62863ccd8b776272d432b6c0",name:"Antony Hill",email:"antony.h@gmail.zzz"},{_id:"62863ccd8b77622eaa32b6c1",name:"Ronald Nelson",email:"ronald.n@gmail.zzz"},{_id:"62863ccd8b7762f53132b6c3",name:"Dyna Ward",email:"dyna.w@gmail.zzz"},{_id:"62863ccd8b7762574532b6c5",name:"David Thomas",email:"thomas.d@gmail.zzz"},{_id:"62863ccd8b77620a1f32b6c6",name:"John Dsouza",email:"john.d@gmail.zzz"},{_id:"62863ccd8b776278eb32b6c8",name:"Nancy Woods",email:"nancy.w@gmail.zzz"},{_id:"62f273e55cf05b50f05b79f0",name:"Dustin Valente",email:"dustin@visitt.io"},{_id:"62f273e55cf05b98a65b79ec",name:"Gerald Drummond",email:"geraldd@mail.visitt"},{_id:"62f273e55cf05baa2e5b79e8",name:"John Smith",email:"visitt_demo_contact1@mail.visitt"},{_id:"62f273e55cf05bfb275b79ee",name:"Joe Smith",email:"smith@mail.visitt"},{_id:"62f273e55cf05b63fd5b79ef",name:"Jin Drummond",email:"jind@mail.visitt"},{_id:"62f273e55cf05b392f5b79e9",name:"Will Anderson",email:"visitt_demo_contact2@mail.visitt"},{_id:"62f273e55cf05bf31f5b79ea",name:"James Anderson",email:"visitt_demo_contact3@mail.visitt"},{_id:"62f273e55cf05b97795b79eb",name:"Jose McDonald",email:"josem@gmail.visitt"},{_id:"62f273e55cf05bed455b79ed",name:"Joe Taylor",email:"joejtaylor@rhyta.visitt"}],r=document.getElementById("root");Object(t.createRoot)(r).render(Object(m.jsx)(n.StrictMode,{children:Object(m.jsx)(d,{})}))}},[[18,1,2]]]);
//# sourceMappingURL=main.876aeb55.chunk.js.map