(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e81c6adc"],{"23ae":function(t,e,a){"use strict";var s=a("62b4"),o=a.n(s);o.a},3178:function(t,e,a){},"62b4":function(t,e,a){},"65ce":function(t,e,a){"use strict";var s=a("3178"),o=a.n(s);o.a},"71ec":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("NavHead"),s("div",{staticClass:"book-shelf",class:{empty:!t.isHaveBook}},[t.isHaveBook?s("ul",{staticClass:"shelf-books"},t._l(t.books,(function(e,a){return s("li",{key:a,staticClass:"shelf-item",on:{click:function(a){return a.stopPropagation(),t.routeTo(e._id)}}},[s("div",{staticClass:"img"},[s("img",{attrs:{src:"https://statics.zhuishushenqi.com"+e.cover}})]),s("div",{staticClass:"text"},[s("div",{staticClass:"text-title"},[s("span",{staticClass:"title"},[t._v(t._s(e.title))]),s("span",{on:{click:function(s){return s.stopPropagation(),t.delBook(a,e._id)}}},[s("van-icon",{attrs:{name:"delete"}})],1)]),s("div",{staticClass:"text-chapter"},[s("span",{staticClass:"time"},[t._v(t._s(e.updated))]),s("span",{staticClass:"chapter"},[t._v(t._s(e.lastChapter))])])])])})),0):s("div",{staticClass:"empty-shelf"},[s("img",{attrs:{src:a("7ef2")}}),s("span",{},[t._v("书架暂无书籍")])])])],1)},o=[],i=(a("a434"),a("b64b"),a("c793")),n=a("4360"),c=a("4ec3"),r={name:"Bookshelf",components:{NavHead:i["a"]},data:function(){return{isHaveBook:!1,books:[]}},methods:{delBook:function(t,e){this.books.splice(t,1);var a=JSON.parse(localStorage.getItem("bookshelf"));a.data["book-"+e]=void 0,localStorage.setItem("bookshelf",JSON.stringify(a))},routeTo:function(t){this.$router.push({name:"BookDetail",params:{id:t}})}},watch:{books:function(t){0==t.length?this.isHaveBook=!1:this.isHaveBook=!0}},beforeRouteEnter:function(t,e,a){var s=JSON.parse(localStorage.getItem("bookshelf"));s&&0!=Object.keys(s.data).length?function(){n["a"].state.loading=!0;var t=[];for(var e in s.data){var o=s.data[e].id;Object(c["c"])("https://api.kele8.cn/agent/https://novel.kele8.cn/book-info/"+o).then((function(e){e.data.updated=Object(c["b"])(e.data.updated),t.push(e.data)})).catch((function(t){console.log(t),n["a"].state.loading=!1}))}n["a"].state.loading=!1,a((function(e){e.isHaveBook=!0,e.books=t}))}():a((function(t){t.isHaveBook=!1}))}},l=r,u=(a("23ae"),a("2877")),f=Object(u["a"])(l,s,o,!1,null,"61b0ca2a",null);e["default"]=f.exports},"7ef2":function(t,e,a){t.exports=a.p+"img/emptyShelf.a1fc0343.svg"},a434:function(t,e,a){"use strict";var s=a("23e7"),o=a("23cb"),i=a("a691"),n=a("50c4"),c=a("7b0b"),r=a("65f0"),l=a("8418"),u=a("1dde"),f=a("ae40"),d=u("splice"),h=f("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,p=Math.min,k=9007199254740991,b="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!d||!h},{splice:function(t,e){var a,s,u,f,d,h,m=c(this),g=n(m.length),C=o(t,g),_=arguments.length;if(0===_?a=s=0:1===_?(a=0,s=g-C):(a=_-2,s=p(v(i(e),0),g-C)),g+a-s>k)throw TypeError(b);for(u=r(m,s),f=0;f<s;f++)d=C+f,d in m&&l(u,f,m[d]);if(u.length=s,a<s){for(f=C;f<g-s;f++)d=f+s,h=f+a,d in m?m[h]=m[d]:delete m[h];for(f=g;f>g-s+a;f--)delete m[f-1]}else if(a>s)for(f=g-s;f>C;f--)d=f+s-1,h=f+a-1,d in m?m[h]=m[d]:delete m[h];for(f=0;f<a;f++)m[f+C]=arguments[f+2];return m.length=g-s+a,u}})},c793:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"nav-head"},[a("div",{staticClass:"nav-title"},[t._v(" "+t._s("书架"==t.title?"我的":"")+t._s(t.title)+" ")]),a("van-icon",{staticClass:"search-icon",attrs:{name:"search"},on:{click:t.routeToSearch}})],1)])},o=[],i=a("5530"),n=a("2f62"),c={name:"NavHead",computed:Object(i["a"])({},Object(n["d"])({title:function(t){return t.navActive}})),methods:{routeToSearch:function(){this.$router.push({name:"Search"})}}},r=c,l=(a("65ce"),a("2877")),u=Object(l["a"])(r,s,o,!1,null,"68e381f2",null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-e81c6adc.5cbfbb3c.js.map