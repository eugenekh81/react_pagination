(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,a,c){},14:function(e,a,c){"use strict";c.r(a);var t=c(7),n=c.n(t),l=c(3),i=c(2),r=c(0),o=c.n(r),s=c(4),g=c.n(s);function j(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var p=c(1),d=o.a.memo((function(e){var a=e.totalPages,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=j(1,Math.ceil(a/c));return Object(p.jsxs)("ul",{className:"pagination",children:[Object(p.jsx)("li",{className:g()("page-item",{disabled:1===t}),children:Object(p.jsx)(l.b,{"data-cy":"prevLink",className:"page-link",to:"?page=".concat(t-1,"&perPage=").concat(c),"aria-disabled":1===t,onClick:function(){n({currentPage:"".concat(t-1),perPage:"".concat(c)})},children:"\xab"})}),i.map((function(e){return Object(p.jsx)("li",{className:g()("page-item",{active:e===+t}),children:Object(p.jsx)(l.b,{"data-cy":"pageLink",className:"page-link",to:"?page=".concat(e,"&perPage=").concat(c),onClick:function(){e!==t&&n({page:"".concat(e),perPage:"".concat(c)})},children:e})},e)})),Object(p.jsx)("li",{className:g()("page-item",{disabled:t===i.length}),children:Object(p.jsx)(l.b,{"data-cy":"nextLink",className:g()("page-link",{disabled:t===i.length}),to:"?page=".concat(t!==i.length?t+1:t,"&perPage=").concat(c),"aria-disabled":t===i.length,onClick:function(){t!==i.length&&n({page:"".concat(t+1),perPage:"".concat(c)})},children:"\xbb"})})]})})),b=(c(13),j(1,42).map((function(e){return"Item ".concat(e)}))),h=function(){var e=Object(l.c)(),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Number(c.get("page"))||1,o=Number(c.get("perPage"))||5,s=b.length,g=Object(r.useCallback)((function(e){t({page:"1",perPage:e.target.value||"3"})}),[]),j=(+n-1)*o,h=j+o>s?s:j+o,u=b.slice(j,h);return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{children:"Items with Pagination"}),Object(p.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(n," (items ").concat(j+1," - ").concat(h," of ").concat(s,")")}),Object(p.jsxs)("div",{className:"form-group row",children:[Object(p.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(p.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:o,onChange:g,children:[Object(p.jsx)("option",{value:"3",children:"3"}),Object(p.jsx)("option",{value:"5",children:"5"}),Object(p.jsx)("option",{value:"10",children:"10"}),Object(p.jsx)("option",{value:"20",children:"20"})]})}),Object(p.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(p.jsx)(d,{totalPages:s,currentPage:+n,perPage:o,onPageChange:t}),Object(p.jsx)("ul",{children:u.map((function(e){return Object(p.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(p.jsx)(l.a,{children:Object(p.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a83581b5.chunk.js.map