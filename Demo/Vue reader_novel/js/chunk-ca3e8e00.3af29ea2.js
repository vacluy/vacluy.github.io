(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca3e8e00"],{"113c":function(t,e,a){t.exports=a.p+"img/default.6efdc028.png"},1148:function(t,e,a){"use strict";var r=a("a691"),i=a("1d80");t.exports="".repeat||function(t){var e=String(i(this)),a="",n=r(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},"364b":function(t,e,a){"use strict";var r=a("8b96"),i=a.n(r);i.a},"408a":function(t,e,a){var r=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"475c":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{on:{click:function(e){return t.routeTo(t.item._id)}}},[r("div",{staticClass:"book-img"},[r("img",{staticClass:"auto-img",attrs:{src:"https://statics.zhuishushenqi.com"+t.item.cover}})]),r("div",{staticClass:"book-content"},[r("div",{staticClass:"book-title"},[t._v(t._s(t.item.title))]),r("div",{staticClass:"book-text"},[t._v(" "+t._s(t.item.shortIntro?t.item.shortIntro:""!=t.item.longIntro?t.item.longIntro:"暂无描述...")+" ")]),r("div",{staticClass:"book-author"},[r("div",{staticClass:"author-left"},[r("img",{staticClass:"auto-img",attrs:{src:a("113c")}}),r("span",{staticClass:"author"},[t._v(t._s(t.item.author))])]),r("div",{staticClass:"author-right"},[t.item.minorCate?r("span",{staticClass:"book-tag"},[t._v(t._s(t.item.minorCate))]):t._e(),r("span",{staticClass:"book-tag special"},[t._v(t._s(t.followerCount))])])])])])},i=[],n=(a("b680"),{name:"BookCard",props:{item:Object},computed:{followerCount:function(){return(this.item.latelyFollower/1e4).toFixed(1)+"万人气"}},methods:{routeTo:function(t){this.$router.push({name:"BookDetail",params:{id:t}})}}}),o=n,s=(a("364b"),a("2877")),c=Object(s["a"])(o,r,i,!1,null,"c48aa098",null);e["a"]=c.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),i=a("5899"),n="["+i+"]",o=RegExp("^"+n+n+"*"),s=RegExp(n+n+"*$"),c=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},6620:function(t,e,a){},7156:function(t,e,a){var r=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var n,o;return i&&"function"==typeof(n=e.constructor)&&n!==a&&r(o=n.prototype)&&o!==a.prototype&&i(t,o),t}},"8b96":function(t,e,a){},a9e3:function(t,e,a){"use strict";var r=a("83ab"),i=a("da84"),n=a("94ca"),o=a("6eeb"),s=a("5135"),c=a("c6b6"),u=a("7156"),l=a("c04e"),f=a("d039"),m=a("7c73"),h=a("241c").f,v=a("06cf").f,p=a("9bf2").f,d=a("58a8").trim,g="Number",b=i[g],_=b.prototype,I=c(m(_))==g,x=function(t){var e,a,r,i,n,o,s,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=d(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(n=u.slice(2),o=n.length,s=0;s<o;s++)if(c=n.charCodeAt(s),c<48||c>i)return NaN;return parseInt(n,r)}return+u};if(n(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var E,C=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof C&&(I?f((function(){_.valueOf.call(a)})):c(a)!=g)?u(new b(x(e)),a,C):x(e)},O=r?h(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;O.length>k;k++)s(b,E=O[k])&&!s(C,E)&&p(C,E,v(b,E));C.prototype=_,_.constructor=C,o(i,g,C)}},b680:function(t,e,a){"use strict";var r=a("23e7"),i=a("a691"),n=a("408a"),o=a("1148"),s=a("d039"),c=1..toFixed,u=Math.floor,l=function(t,e,a){return 0===e?a:e%2===1?l(t,e-1,a*t):l(t*t,e/2,a)},f=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},m=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));r({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,a,r,s,c=n(this),m=i(t),h=[0,0,0,0,0,0],v="",p="0",d=function(t,e){var a=-1,r=e;while(++a<6)r+=t*h[a],h[a]=r%1e7,r=u(r/1e7)},g=function(t){var e=6,a=0;while(--e>=0)a+=h[e],h[e]=u(a/t),a=a%t*1e7},b=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==h[t]){var a=String(h[t]);e=""===e?a:e+o.call("0",7-a.length)+a}return e};if(m<0||m>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=f(c*l(2,69,1))-69,a=e<0?c*l(2,-e,1):c/l(2,e,1),a*=4503599627370496,e=52-e,e>0){d(0,a),r=m;while(r>=7)d(1e7,0),r-=7;d(l(10,r,1),0),r=e-1;while(r>=23)g(1<<23),r-=23;g(1<<r),d(1,1),g(2),p=b()}else d(0,a),d(1<<-e,0),p=b()+o.call("0",m);return m>0?(s=p.length,p=v+(s<=m?"0."+o.call("0",m-s)+p:p.slice(0,s-m)+"."+p.slice(s-m))):p=v+p,p}})},b8ae:function(t,e,a){"use strict";var r=a("6620"),i=a.n(r);i.a},bb8d:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"tag",on:{click:function(e){return t.$emit("current-active",t.activeIndex)}}},[t._v(" "+t._s(t.item)+" ")])},i=[],n=(a("a9e3"),{name:"TagItem",props:{item:String,activeIndex:Number}}),o=n,s=a("2877"),c=Object(s["a"])(o,r,i,!1,null,"6f683784",null);e["a"]=c.exports},cd7b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sort-detail"},[a("div",{staticClass:"header"},[a("van-icon",{staticClass:"leftIcon",attrs:{name:"arrow-left"},on:{click:t.routeBack}}),a("span",{staticClass:"detail-title"},[t._v(t._s(t.major))])],1),a("ul",{staticClass:"tags"},t._l(t.minor,(function(e,r){return a("TagItem",{key:r,staticClass:"tag",class:{active:e.active},attrs:{item:e.text,activeIndex:r},on:{"current-active":t.changeMinActive}})})),1),a("ul",{staticClass:"tags"},t._l(t.tags,(function(e,r){return a("TagItem",{key:r,staticClass:"tag",class:{active:e.active},attrs:{item:e.text,activeIndex:r},on:{"current-active":t.changeTagsActive}})})),1),0!=t.sortBookList.length?a("ul",{staticClass:"books"},[t._l(t.sortBookList,(function(t,e){return a("BookCard",{key:e,attrs:{item:t}})})),a("li",{staticClass:"more",on:{click:t.getMore}},[t._v("点击加载更多...")])],2):a("div",{staticClass:"empty"},[t._v("无此类书籍")])])},i=[],n=(a("4160"),a("159b"),a("5530")),o=a("2f62"),s=a("6e87"),c=a("bb8d"),u=a("475c"),l=a("4ec3"),f={name:"SortDetail",components:{TagItem:c["a"],BookCard:u["a"]},data:function(){return{major:"",target:"",start:1,limit:20,minor:[],tags:[{text:"最热",active:!0,target:"hot"},{text:"最新",active:!1,target:"new"},{text:"完结",active:!1,target:"over"}],selected:{minor:"",type:"hot"}}},computed:Object(n["a"])({},Object(o["d"])({sortBookList:function(t){return t.sortBookList}})),methods:Object(n["a"])(Object(n["a"])({routeBack:function(){this.$router.back()},changeMinActive:function(t){var e=this;this.minor.forEach((function(a,r){a.active=!1,r==t&&(a.active=!0,"全部"==a.text?e.selected.minor="":e.selected.minor=a.text)}))},changeTagsActive:function(t){var e=this;this.tags.forEach((function(a,r){a.active=!1,r==t&&(a.active=!0,e.selected.type=a.target)}))}},Object(o["b"])([s["a"].GET_SORT_DETAIL_BOOKS,s["a"].GET_MORE_SORT_BOOKS,s["a"].CLEAR_SORT_BOOKS])),{},{changeSelected:function(t){this[s["a"].GET_SORT_DETAIL_BOOKS]({gender:this.target,type:t.type,major:this.major,minor:t.minor,start:this.start,limit:this.limit})},getMore:function(){this.start+=1,this[s["a"].GET_MORE_SORT_BOOKS]({gender:this.target,type:this.selected.type,major:this.major,minor:this.selected.minor,start:this.start,limit:this.limit})}}),watch:{selected:{handler:"changeSelected",deep:!0}},created:function(){this[s["a"].GET_SORT_DETAIL_BOOKS]({gender:this.$route.params.target,type:this.selected.type,major:this.$route.params.major,minor:this.selected.minor,start:this.start,limit:this.limit})},beforeRouteEnter:function(t,e,a){var r=JSON.parse(localStorage.getItem("sub-sort"));if(r&&r.expires>Date.now()){var i=r.data[t.params.target],n=[];i.forEach((function(e){e.major==t.params.major&&(n=e.mins)})),n.unshift("全部");var o=[];n.forEach((function(t){"全部"==t?o.push({text:t,active:!0}):o.push({text:t,active:!1})})),a((function(e){e.target=t.params.target,e.major=t.params.major,e.minor=o}))}else Object(l["c"])("https://novel.kele8.cn/sub-categories").then((function(e){var r=e.data[t.params.target],i=[];r.forEach((function(e){e.major==t.params.major&&(i=e.mins)})),i.unshift("全部");var n=[];i.forEach((function(t){"全部"==t?n.push({text:t,active:!0}):n.push({text:t,active:!1})})),a((function(e){e.target=t.params.target,e.major=t.params.major,e.minor=n})),localStorage.setItem("sub-sort",JSON.stringify({expires:864e5,data:e.data}))})).catch((function(t){console.log(t)}))}},m=f,h=(a("b8ae"),a("2877")),v=Object(h["a"])(m,r,i,!1,null,"4f433dae",null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-ca3e8e00.3af29ea2.js.map