(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"1kRb":function(t,e,s){},GW5j:function(t,e,s){"use strict";var a=s("1kRb");s.n(a).a},SHZv:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{minSuffix:String}},methods:{suffixCalc:function(){return this.$page.post.timeToRead>=5?this.minSuffix="min read 📖":this.$page.post.timeToRead>=2?this.minSuffix="min read ☕":this.$page.post.timeToRead<=1?this.minSuffix="min read 👀":void 0}},mounted:function(){this.suffixCalc()}},i=(s("GW5j"),s("KHd+")),o=null,n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",{staticClass:"bg-gray-200 font-body"},[s("main",[s("section",[s("div",{staticClass:"max-w-screen-lg mx-auto"},[s("header",{staticClass:"mx-6 py-10"},[s("h1",{staticClass:"font-title font-bold text-3xl md:text-4xl uppercase"},[t._v(t._s(t.$page.post.title))]),s("p",{staticClass:"mt-2 inline-block px-2 py-1 text-sm",class:t.$page.post.tagCol},[t._v(t._s(t.$page.post.tag))]),s("h2",{staticClass:"mt-6 text-gray-600 text-lg"},[t._v("\n            "+t._s(t.$page.post.date)+"\n            "),s("span",{staticClass:"ml-6 text-gray-600 text-lg"},[t._v(t._s(t.$page.post.timeToRead)+" "+t._s(t.minSuffix))])]),s("div",{staticClass:"mt-6"},[s("g-link",{staticClass:"py-2 px-2 text-lg font-bold border-2 border-solid border-blue-400 hover:border-orange-450 focus:border-orange-450 text-blue-400 hover:text-orange-450 focus:text-orange-450",attrs:{to:"/blog"}},[t._v("More Posts")])],1)])]),s("div",{staticClass:"remark min-h-screen bg-gray-100 shadow-lg"},[s("article",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"prose max-w-screen-lg mx-auto md:prose-xl px-6 py-10",domProps:{innerHTML:t._s(t.$page.post.content)}})])])])])}),[],!1,null,null,null);"function"==typeof o&&o(n);e.default=n.exports}}]);