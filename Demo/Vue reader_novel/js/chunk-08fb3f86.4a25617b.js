(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08fb3f86"],{"016f":function(t,e,o){},"113c":function(t,e,o){t.exports=o.p+"img/default.6efdc028.png"},1148:function(t,e,o){"use strict";var s=o("a691"),a=o("1d80");t.exports="".repeat||function(t){var e=String(a(this)),o="",r=s(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(o+=e);return o}},1548:function(t,e,o){"use strict";var s=o("016f"),a=o.n(s);a.a},"2d3b":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"header"},[o("van-icon",{staticClass:"left-icon",attrs:{name:"arrow-left"},on:{click:t.routeBack}}),o("van-search",{staticClass:"search",attrs:{"show-action":"",placeholder:"请输入搜索关键词",shape:"round"},on:{search:t.onSearch,clear:t.onCancel},scopedSlots:t._u([{key:"action",fn:function(){return[o("div",{on:{click:t.onSearch}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),0==t.searchResult.length?o("div",{staticClass:"word"},[o("div",{staticClass:"title"},[t._v("搜索热词")]),o("ul",{staticClass:"words"},t._l(t.currentHotWords(),(function(e,s){return o("li",{key:s,on:{click:function(o){return t.submitWord(e.word)}}},[t._v(" "+t._s(e.word)+" ")])})),0)]):t._e(),0==t.searchResult.length?o("div",{staticClass:"word"},[o("div",{staticClass:"title"},[o("span",[t._v("搜索历史")]),o("span",[0!=t.historyWords.length?o("van-icon",{attrs:{name:"delete"},on:{click:t.delHistory}}):t._e()],1)]),0==t.historyWords.length?o("div",{staticClass:"empty"},[t._v(" 暂无历史搜索记录 ")]):o("ul",{staticClass:"words"},t._l(t.historyWords,(function(e,s){return o("li",{key:s,on:{click:function(o){return t.submitWord(e)}}},[t._v(" "+t._s(e)+" ")])})),0)]):t._e(),0==t.searchResult.length?o("div",{staticClass:"hot-books"},[o("div",{staticClass:"title"},[t._v("全站热搜")]),o("ul",{staticClass:"books"},t._l(t.hotBooks,(function(e,s){return o("li",{key:s,class:{hot:s<3},on:{click:function(o){return t.routeTo(e.book)}}},[o("span",{staticClass:"item-text"},[t._v(t._s(e.word))]),o("van-icon",{attrs:{name:"arrow"}})],1)})),0)]):t._e(),0!=t.searchResult.length?o("ul",{staticClass:"search-result"},t._l(t.searchResult,(function(t,e){return o("BookCard",{key:e,attrs:{item:t}})})),1):t._e()])},a=[],r=(o("c975"),o("4ec3")),i=o("4360"),n=o("475c"),c={name:"Search",components:{BookCard:n["a"]},data:function(){return{value:"",hotWords:[],hotBooks:[],historyWords:[],searchResult:[]}},methods:{routeBack:function(){this.$router.back()},onSearch:function(){var t=this,e=JSON.parse(localStorage.getItem("history-words"));if(e)-1==e.data.indexOf(this.value)&&(e.data.push(this.value),this.historyWords.push(this.value)),localStorage.setItem("history-words",JSON.stringify({data:e.data}));else{var o=[];o.push(this.value),this.historyWords.push(this.value),localStorage.setItem("history-words",JSON.stringify({data:o}))}i["a"].state.loading=!0,Object(r["c"])("https://novel.kele8.cn/search",{keyword:this.value}).then((function(e){t.searchResult=e.data.books,i["a"].state.loading=!1})).catch((function(t){console.log(t),i["a"].state.loading=!1}))},onCancel:function(){this.searchResult=[]},currentHotWords:function(){for(var t=[],e=0;e<this.hotWords.length;e++){if(!(t.length<10))break;t.push(this.hotWords[e])}return t},submitWord:function(t){this.value=t,this.onSearch()},delHistory:function(){this.historyWords=[];var t=JSON.parse(localStorage.getItem("history-words"));t.data=[],localStorage.setItem("history-words",JSON.stringify(t))},routeTo:function(t){this.$router.push({name:"BookDetail",params:{id:t}})}},beforeRouteEnter:function(t,e,o){var s=[],a=[],n=[],c=JSON.parse(localStorage.getItem("hot-words"));c&&c.expires>Date.now()?s=c.data.searchHotWords:(i["a"].state.loading=!0,Object(r["c"])("https://novel.kele8.cn/search-hotwords").then((function(t){localStorage.setItem("hot-words",JSON.stringify({expires:Date.now()+864e5,data:t.data})),s=t.data.searchHotWords})).catch((function(t){console.log(t),i["a"].state.loading=!1})));var l=JSON.parse(localStorage.getItem("hot-books"));l&&l.expires>Date.now()?a=l.data.newHotWords:(i["a"].state.loading=!0,Object(r["c"])("https://novel.kele8.cn/hot-books").then((function(t){localStorage.setItem("hot-books",JSON.stringify({expires:Date.now()+864e5,data:t.data})),a=t.data.newHotWords})).catch((function(t){console.log(t),i["a"].state.loading=!1})));var u=JSON.parse(localStorage.getItem("history-words"));u&&(n=u.data),o((function(t){t.hotWords=s,t.hotBooks=a,t.historyWords=n}))}},l=c,u=(o("1548"),o("2877")),h=Object(u["a"])(l,s,a,!1,null,"798e3c82",null);e["default"]=h.exports},"364b":function(t,e,o){"use strict";var s=o("8b96"),a=o.n(s);a.a},"408a":function(t,e,o){var s=o("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=s(t))throw TypeError("Incorrect invocation");return+t}},"475c":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{on:{click:function(e){return t.routeTo(t.item._id)}}},[s("div",{staticClass:"book-img"},[s("img",{staticClass:"auto-img",attrs:{src:"https://statics.zhuishushenqi.com"+t.item.cover}})]),s("div",{staticClass:"book-content"},[s("div",{staticClass:"book-title"},[t._v(t._s(t.item.title))]),s("div",{staticClass:"book-text"},[t._v(" "+t._s(t.item.shortIntro?t.item.shortIntro:""!=t.item.longIntro?t.item.longIntro:"暂无描述...")+" ")]),s("div",{staticClass:"book-author"},[s("div",{staticClass:"author-left"},[s("img",{staticClass:"auto-img",attrs:{src:o("113c")}}),s("span",{staticClass:"author"},[t._v(t._s(t.item.author))])]),s("div",{staticClass:"author-right"},[t.item.minorCate?s("span",{staticClass:"book-tag"},[t._v(t._s(t.item.minorCate))]):t._e(),s("span",{staticClass:"book-tag special"},[t._v(t._s(t.followerCount))])])])])])},a=[],r=(o("b680"),{name:"BookCard",props:{item:Object},computed:{followerCount:function(){return(this.item.latelyFollower/1e4).toFixed(1)+"万人气"}},methods:{routeTo:function(t){this.$router.push({name:"BookDetail",params:{id:t}})}}}),i=r,n=(o("364b"),o("2877")),c=Object(n["a"])(i,s,a,!1,null,"c48aa098",null);e["a"]=c.exports},"8b96":function(t,e,o){},b680:function(t,e,o){"use strict";var s=o("23e7"),a=o("a691"),r=o("408a"),i=o("1148"),n=o("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,o){return 0===e?o:e%2===1?u(t,e-1,o*t):u(t*t,e/2,o)},h=function(t){var e=0,o=t;while(o>=4096)e+=12,o/=4096;while(o>=2)e+=1,o/=2;return e},d=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n((function(){c.call({})}));s({target:"Number",proto:!0,forced:d},{toFixed:function(t){var e,o,s,n,c=r(this),d=a(t),f=[0,0,0,0,0,0],v="",g="0",p=function(t,e){var o=-1,s=e;while(++o<6)s+=t*f[o],f[o]=s%1e7,s=l(s/1e7)},m=function(t){var e=6,o=0;while(--e>=0)o+=f[e],f[e]=l(o/t),o=o%t*1e7},k=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var o=String(f[t]);e=""===e?o:e+i.call("0",7-o.length)+o}return e};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=h(c*u(2,69,1))-69,o=e<0?c*u(2,-e,1):c/u(2,e,1),o*=4503599627370496,e=52-e,e>0){p(0,o),s=d;while(s>=7)p(1e7,0),s-=7;p(u(10,s,1),0),s=e-1;while(s>=23)m(1<<23),s-=23;m(1<<s),p(1,1),m(2),g=k()}else p(0,o),p(1<<-e,0),g=k()+i.call("0",d);return d>0?(n=g.length,g=v+(n<=d?"0."+i.call("0",d-n)+g:g.slice(0,n-d)+"."+g.slice(n-d))):g=v+g,g}})},c975:function(t,e,o){"use strict";var s=o("23e7"),a=o("4d64").indexOf,r=o("a640"),i=o("ae40"),n=[].indexOf,c=!!n&&1/[1].indexOf(1,-0)<0,l=r("indexOf"),u=i("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(t){return c?n.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-08fb3f86.4a25617b.js.map