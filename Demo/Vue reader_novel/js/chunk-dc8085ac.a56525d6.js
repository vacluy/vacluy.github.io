(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc8085ac"],{3267:function(t,e,n){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),i="["+a+"]",s=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),o=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var i,s;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(s=i.prototype)&&s!==n.prototype&&a(t,s),t}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),i=n("94ca"),s=n("6eeb"),c=n("5135"),o=n("c6b6"),u=n("7156"),p=n("c04e"),d=n("d039"),h=n("7c73"),f=n("241c").f,l=n("06cf").f,x=n("9bf2").f,I=n("58a8").trim,v="Number",m=a[v],b=m.prototype,C=o(h(b))==v,_=function(t){var e,n,r,a,i,s,c,o,u=p(t,!1);if("string"==typeof u&&u.length>2)if(u=I(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(i=u.slice(2),s=i.length,c=0;c<s;c++)if(o=i.charCodeAt(c),o<48||o>a)return NaN;return parseInt(i,r)}return+u};if(i(v,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var N,k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(C?d((function(){b.valueOf.call(n)})):o(n)!=v)?u(new m(_(e)),n,k):_(e)},g=r?f(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;g.length>E;E++)c(m,N=g[E])&&!c(k,N)&&x(k,N,l(m,N));k.prototype=b,b.constructor=k,s(a,v,k)}},c844:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"chapter-bg"},[n("div",{staticClass:"route-back",on:{click:t.routeBack}},[n("van-icon",{attrs:{name:"arrow-left"}}),n("span",[t._v(t._s(t.$route.params.title))])],1),n("div",{staticClass:"chapter-title"},[t._v(t._s(t.currentChapter.title))]),n("ul",{staticClass:"chapter-content"},t._l(t.currentCPContent,(function(e,r){return n("li",{key:r},[n("p",[t._v(t._s(e))])])})),0),n("div",{staticClass:"btns"},[t.prevIndex>-1?n("span",{staticClass:"prev",on:{click:t.prevLink}},[t._v("上一章")]):t._e(),n("span",{staticClass:"back",on:{click:t.routeToChapter}},[t._v("返回目录")]),t.nextIndex<t.chapterList.length&&!t.chapterList[t.nextIndex].isVip?n("span",{staticClass:"next",on:{click:t.nextLink}},[t._v("下一章")]):t._e()])])])},a=[],i=(n("a9e3"),n("9911"),n("5530")),s=n("2f62"),c=n("6e87"),o=n("4360"),u=n("4ec3"),p={name:"Read",data:function(){return{prevIndex:0,currentIndex:0,nextIndex:0,currentCPContent:[]}},computed:Object(i["a"])({},Object(s["d"])({chapterList:function(t){return t.chapterList},currentChapter:function(t){return t.currentChapter}})),methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])([c["a"].GET_CURREN_BOOK_LINK])),{},{routeBack:function(){this.$router.push({name:"Bookshelf"})},routeToChapter:function(){this.$router.push({name:"BookChapter",params:{id:this.$route.params.id}})},prevLink:function(){-1!=this.prevIndex&&(this.nextIndex=this.currentIndex,this.currentIndex=this.prevIndex,this.prevIndex-=1)},nextLink:function(){this.nextIndex>this.chapterList.length||this.chapterList[this.nextIndex].isVip||(this.prevIndex=this.currentIndex,this.currentIndex=this.nextIndex,this.nextIndex+=1)}}),watch:{currentChapter:function(t){t.cpContent&&(this.currentCPContent=Object(u["a"])(t.cpContent))},currentIndex:function(t){this.$router.push({name:"Read",params:{title:this.$route.params.title,id:this.$route.params.id,index:t}}),this[c["a"].GET_CURREN_BOOK_LINK]({link:this.chapterList[t].link})}},beforeRouteLeave:function(t,e,n){var r=this,a=JSON.parse(localStorage.getItem("bookshelf"));a&&a.data["book-"+this.$route.params.id]?(a.data["book-"+this.$route.params.id].index=this.$route.params.index,localStorage.setItem("bookshelf",JSON.stringify(a)),n()):this.$dialog.confirm({title:"加入书架",message:"喜欢本书就加入书架吧",messageAlign:"left",confirmButtonText:"加入书架",confirmButtonColor:"#91DCAE",cancelButtonText:"不用了",cancelButtonColor:"#4C5055"}).then((function(){a.data["book-"+r.$route.params.id]={title:r.$route.params.title,id:r.$route.params.id,index:r.$route.params.index},localStorage.setItem("bookshelf",JSON.stringify(a)),n()})).catch((function(){n()}))},beforeRouteEnter:function(t,e,n){o["a"].dispatch(c["a"].GET_ONE_BOOK_LINK,{id:t.params.id,index:t.params.index});var r=0,a=0,i=Number(t.params.index);r=i>0?i-1:i,a=i<o["a"].state.chapterList.length?i+1:i,n((function(t){t.currentIndex=i,t.prevIndex=r,t.nextIndex=a}))}},d=p,h=(n("eba8"),n("2877")),f=Object(h["a"])(d,r,a,!1,null,"d43d4236",null);e["default"]=f.exports},eba8:function(t,e,n){"use strict";var r=n("3267"),a=n.n(r);a.a}}]);
//# sourceMappingURL=chunk-dc8085ac.a56525d6.js.map