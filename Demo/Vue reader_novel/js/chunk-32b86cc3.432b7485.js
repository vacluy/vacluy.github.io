(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32b86cc3"],{"113c":function(t,e,o){t.exports=o.p+"img/default.6efdc028.png"},1148:function(t,e,o){"use strict";var a=o("a691"),s=o("1d80");t.exports="".repeat||function(t){var e=String(s(this)),o="",r=a(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(o+=e);return o}},"2d3b":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"header"},[o("van-icon",{staticClass:"left-icon",attrs:{name:"arrow-left"},on:{click:t.routeBack}}),o("van-search",{staticClass:"search",attrs:{"show-action":"",placeholder:"请输入搜索关键词",shape:"round"},on:{search:t.onSearch,clear:t.onCancel},scopedSlots:t._u([{key:"action",fn:function(){return[o("div",{on:{click:t.onSearch}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),0==t.searchResult.length?o("div",{staticClass:"word"},[o("div",{staticClass:"title"},[t._v("搜索热词")]),o("ul",{staticClass:"words"},t._l(t.currentHotWords(),(function(e,a){return o("li",{key:a,on:{click:function(o){return t.submitWord(e.word)}}},[t._v(" "+t._s(e.word)+" ")])})),0)]):t._e(),0==t.searchResult.length?o("div",{staticClass:"word"},[o("div",{staticClass:"title"},[o("span",[t._v("搜索历史")]),o("span",[0!=t.historyWords.length?o("van-icon",{attrs:{name:"delete"},on:{click:t.delHistory}}):t._e()],1)]),0==t.historyWords.length?o("div",{staticClass:"empty"},[t._v(" 暂无历史搜索记录 ")]):o("ul",{staticClass:"words"},t._l(t.historyWords,(function(e,a){return o("li",{key:a,on:{click:function(o){return t.submitWord(e)}}},[t._v(" "+t._s(e)+" ")])})),0)]):t._e(),0==t.searchResult.length?o("div",{staticClass:"hot-books"},[o("div",{staticClass:"title"},[t._v("全站热搜")]),o("ul",{staticClass:"books"},t._l(t.hotBooks,(function(e,a){return o("li",{key:a,class:{hot:a<3},on:{click:function(o){return t.routeTo(e.book)}}},[o("span",{staticClass:"item-text"},[t._v(t._s(e.word))]),o("van-icon",{attrs:{name:"arrow"}})],1)})),0)]):t._e(),0!=t.searchResult.length?o("ul",{staticClass:"search-result"},t._l(t.searchResult,(function(t,e){return o("BookCard",{key:e,attrs:{item:t}})})),1):t._e()])},s=[],r=(o("c975"),o("4ec3")),i=o("4360"),n=o("475c"),c={name:"Search",components:{BookCard:n["a"]},data:function(){return{value:"",hotWords:[],hotBooks:[],historyWords:[],searchResult:[]}},methods:{routeBack:function(){this.$router.back()},onSearch:function(){var t=this,e=JSON.parse(localStorage.getItem("history-words"));if(e)-1==e.data.indexOf(this.value)&&(e.data.push(this.value),this.historyWords.push(this.value)),localStorage.setItem("history-words",JSON.stringify({data:e.data}));else{var o=[];o.push(this.value),this.historyWords.push(this.value),localStorage.setItem("history-words",JSON.stringify({data:o}))}i["a"].state.loading=!0,Object(r["c"])("http://novel.kele8.cn/search",{keyword:this.value}).then((function(e){t.searchResult=e.data.books,i["a"].state.loading=!1})).catch((function(t){console.log(t),i["a"].state.loading=!1}))},onCancel:function(){this.searchResult=[]},currentHotWords:function(){for(var t=[],e=0;e<this.hotWords.length;e++){if(!(t.length<10))break;t.push(this.hotWords[e])}return t},submitWord:function(t){this.value=t,this.onSearch()},delHistory:function(){this.historyWords=[];var t=JSON.parse(localStorage.getItem("history-words"));t.data=[],localStorage.setItem("history-words",JSON.stringify(t))},routeTo:function(t){this.$router.push({name:"BookDetail",params:{id:t}})}},beforeRouteEnter:function(t,e,o){var a=[],s=[],n=[],c=JSON.parse(localStorage.getItem("hot-words"));c&&c.expires>Date.now()?a=c.data.searchHotWords:(i["a"].state.loading=!0,Object(r["c"])("http://novel.kele8.cn/search-hotwords").then((function(t){localStorage.setItem("hot-words",JSON.stringify({expires:Date.now()+864e5,data:t.data})),a=t.data.searchHotWords})).catch((function(t){console.log(t),i["a"].state.loading=!1})));var l=JSON.parse(localStorage.getItem("hot-books"));l&&l.expires>Date.now()?s=l.data.newHotWords:(i["a"].state.loading=!0,Object(r["c"])("http://novel.kele8.cn/hot-books").then((function(t){localStorage.setItem("hot-books",JSON.stringify({expires:Date.now()+864e5,data:t.data})),s=t.data.newHotWords})).catch((function(t){console.log(t),i["a"].state.loading=!1})));var u=JSON.parse(localStorage.getItem("history-words"));u&&(n=u.data),o((function(t){t.hotWords=a,t.hotBooks=s,t.historyWords=n}))}},l=c,u=(o("a450"),o("2877")),h=Object(u["a"])(l,a,s,!1,null,"610b7a2a",null);e["default"]=h.exports},"408a":function(t,e,o){var a=o("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},"475c":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{on:{click:function(e){return t.routeTo(t.item._id)}}},[a("div",{staticClass:"book-img"},[a("img",{staticClass:"auto-img",attrs:{src:"http://statics.zhuishushenqi.com"+t.item.cover}})]),a("div",{staticClass:"book-content"},[a("div",{staticClass:"book-title"},[t._v(t._s(t.item.title))]),a("div",{staticClass:"book-text"},[t._v(" "+t._s(t.item.shortIntro?t.item.shortIntro:""!=t.item.longIntro?t.item.longIntro:"暂无描述...")+" ")]),a("div",{staticClass:"book-author"},[a("div",{staticClass:"author-left"},[a("img",{staticClass:"auto-img",attrs:{src:o("113c")}}),a("span",{staticClass:"author"},[t._v(t._s(t.item.author))])]),a("div",{staticClass:"author-right"},[t.item.minorCate?a("span",{staticClass:"book-tag"},[t._v(t._s(t.item.minorCate))]):t._e(),a("span",{staticClass:"book-tag special"},[t._v(t._s(t.followerCount))])])])])])},s=[],r=(o("b680"),{name:"BookCard",props:{item:Object},computed:{followerCount:function(){return(this.item.latelyFollower/1e4).toFixed(1)+"万人气"}},methods:{routeTo:function(t){this.$router.push({name:"BookDetail",params:{id:t}})}}}),i=r,n=(o("a3e0"),o("2877")),c=Object(n["a"])(i,a,s,!1,null,"2376b5be",null);e["a"]=c.exports},5257:function(t,e,o){},a3e0:function(t,e,o){"use strict";var a=o("c917"),s=o.n(a);s.a},a450:function(t,e,o){"use strict";var a=o("5257"),s=o.n(a);s.a},b680:function(t,e,o){"use strict";var a=o("23e7"),s=o("a691"),r=o("408a"),i=o("1148"),n=o("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,o){return 0===e?o:e%2===1?u(t,e-1,o*t):u(t*t,e/2,o)},h=function(t){var e=0,o=t;while(o>=4096)e+=12,o/=4096;while(o>=2)e+=1,o/=2;return e},d=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n((function(){c.call({})}));a({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,o,a,n,c=r(this),d=s(t),f=[0,0,0,0,0,0],v="",g="0",p=function(t,e){var o=-1,a=e;while(++o<6)a+=t*f[o],f[o]=a%1e7,a=l(a/1e7)},m=function(t){var e=6,o=0;while(--e>=0)o+=f[e],f[e]=l(o/t),o=o%t*1e7},k=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var o=String(f[t]);e=""===e?o:e+i.call("0",7-o.length)+o}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=h(c*u(2,69,1))-69,o=e<0?c*u(2,-e,1):c/u(2,e,1),o*=4503599627370496,e=52-e,e>0){p(0,o),a=d;while(a>=7)p(1e7,0),a-=7;p(u(10,a,1),0),a=e-1;while(a>=23)m(1<<23),a-=23;m(1<<a),p(1,1),m(2),g=k()}else p(0,o),p(1<<-e,0),g=k()+i.call("0",d);return d>0?(n=g.length,g=v+(n<=d?"0."+i.call("0",d-n)+g:g.slice(0,n-d)+"."+g.slice(n-d))):g=v+g,g}})},c917:function(t,e,o){},c975:function(t,e,o){"use strict";var a=o("23e7"),s=o("4d64").indexOf,r=o("a640"),i=o("ae40"),n=[].indexOf,c=!!n&&1/[1].indexOf(1,-0)<0,l=r("indexOf"),u=i("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(t){return c?n.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-32b86cc3.432b7485.js.map