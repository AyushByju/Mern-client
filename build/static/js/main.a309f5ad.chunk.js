(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(16),r=n.n(i),o=n(17),s=n(6),d=(n(22),n(4)),u=n.n(d),p=n(0);var j=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(0),r=Object(s.a)(i,2),d=r[0],j=r[1],l=Object(c.useState)([]),h=Object(s.a)(l,2),f=h[0],b=h[1];return Object(c.useEffect)((function(){u.a.get("https://mernfirstapp1.herokuapp.com/read").then((function(e){b(e.data)})).catch((function(){console.log("ERROR")}))}),[]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"inputs",children:[Object(p.jsx)("input",{type:"text",placeholder:"Friend name...",onChange:function(e){a(e.target.value)}}),Object(p.jsx)("input",{type:"number",placeholder:"Friend age...",onChange:function(e){j(e.target.value)}}),Object(p.jsx)("button",{onClick:function(){u.a.post("https://mernfirstapp1.herokuapp.com//addfriend",{name:n,age:d}).then((function(e){b([].concat(Object(o.a)(f),[{_id:e.data._id,name:n,age:d}]))}))},children:"Add Friend"})]}),Object(p.jsx)("div",{className:"listOfFriends",children:f.map((function(e){return Object(p.jsxs)("div",{className:"friendContainer",children:[Object(p.jsxs)("div",{className:"friend",children:[Object(p.jsxs)("h3",{children:["Name: ",e.name]}),Object(p.jsxs)("h3",{children:[" Age: ",e.age]})]}),Object(p.jsx)("button",{onClick:function(){!function(e){var t=prompt("Enter New Age");u.a.put("https://mernfirstapp1.herokuapp.com//update",{newAge:t,id:e}).then((function(){b(f.map((function(n){return n._id==e?{_id:e,name:n.name,age:t}:n})))}))}(e._id)},children:"Update"}),Object(p.jsx)("button",{id:"removeBtn",onClick:function(){var t;t=e._id,u.a.delete("https://mernfirstapp1.herokuapp.com/delete/".concat(t)).then((function(){b(f.filter((function(e){return e._id!=t})))}))},children:"X"})]})}))})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root")),l()}},[[42,1,2]]]);
//# sourceMappingURL=main.a309f5ad.chunk.js.map