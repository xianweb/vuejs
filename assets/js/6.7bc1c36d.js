(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{82:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"条件渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件渲染","aria-hidden":"true"}},[t._v("#")]),t._v(" 条件渲染")]),s("h2",{attrs:{id:"v-if"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if","aria-hidden":"true"}},[t._v("#")]),t._v(" v-if")]),s("p",[t._v("在字符串模板中，比如 "),s("code",[t._v("Handlebars")]),t._v("，我们得像这样写一个条件块：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Handlebars 模板 --\x3e")]),t._v("\n{{#if ok}}\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Yes"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n{{/if}}\n")])]),s("p",[t._v("在 "),s("code",[t._v("Vue")]),t._v(" 中，我们使用 "),s("code",[t._v("v-if")]),t._v(" 指令实现同样的功能：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ok"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Yes"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("也可以用 "),s("code",[t._v("v-else")]),t._v(" 添加一个“else 块”：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ok"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Yes"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-else")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("No"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h3",{attrs:{id:"在-template-元素上使用-v-if-条件渲染分组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-template-元素上使用-v-if-条件渲染分组","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 template 元素上使用 v-if 条件渲染分组")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ok"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Title"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Paragraph 1"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Paragraph 2"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h3",{attrs:{id:"v-else"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-else","aria-hidden":"true"}},[t._v("#")]),t._v(" v-else")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Math.random() > 0.5"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Now you see me\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-else")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Now you don't\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("blockquote",[s("p",[s("code",[t._v("v-else")]),t._v(" 元素必须紧跟在带 "),s("code",[t._v("v-if")]),t._v(" 或者 "),s("code",[t._v("v-else-if")]),t._v(" 的元素的后面，否则它将不会被识别。")])]),s("h3",{attrs:{id:"v-else-if"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-else-if","aria-hidden":"true"}},[t._v("#")]),t._v(" v-else-if")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("type === "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("A"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  A\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-else-if")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("type === "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("B"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  B\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-else-if")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("type === "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("C"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  C\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-else")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Not A/B/C\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("blockquote",[s("p",[t._v("类似于 "),s("code",[t._v("v-else")]),t._v("，"),s("code",[t._v("v-else-if")]),t._v(" 也必须紧跟在带 "),s("code",[t._v("v-if")]),t._v(" 或者 "),s("code",[t._v("v-else-if")]),t._v(" 的元素之后。")])]),s("h3",{attrs:{id:"用-key-管理可复用的元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用-key-管理可复用的元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 用 key 管理可复用的元素")]),s("p",[t._v("Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做使 Vue 变得非常快。")]),s("p",[t._v("但这样也不总是符合实际需求，所以 "),s("code",[t._v("Vue")]),t._v(" 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们，那就是定义key。")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("loginType === "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("username"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Username"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("placeholder")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Enter your username"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("key")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("username-input"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-else")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Email"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("placeholder")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Enter your email address"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("key")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("email-input"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("注意，"),s("code",[t._v("<label>")]),t._v(" 元素仍然会被高效地复用，因为它们没有添加 "),s("code",[t._v("key")]),t._v(" 属性。")]),s("h2",{attrs:{id:"v-show"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-show","aria-hidden":"true"}},[t._v("#")]),t._v(" v-show")]),s("p",[t._v("另一个用于根据条件展示元素的选项是 "),s("code",[t._v("v-show")]),t._v(" 指令。用法大致一样：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-show")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ok"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello!"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("不同的是带有 "),s("code",[t._v("v-show")]),t._v(" 的元素始终会被渲染并保留在 "),s("code",[t._v("DOM")]),t._v(" 中。"),s("code",[t._v("v-show")]),t._v(" 只是简单地切换元素的 "),s("code",[t._v("CSS")]),t._v(" 属性 "),s("code",[t._v("display")]),t._v("。")]),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),s("p",[s("code",[t._v("v-show")]),t._v(" 不支持 "),s("code",[t._v("<template>")]),t._v(" 元素，也不支持 "),s("code",[t._v("v-else")]),t._v("。")])]),s("h2",{attrs:{id:"v-if-vs-v-show"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if-vs-v-show","aria-hidden":"true"}},[t._v("#")]),t._v(" v-if vs v-show")]),s("p",[s("code",[t._v("v-if")]),t._v(" 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。")]),s("p",[s("code",[t._v("v-if")]),t._v(" 也是"),s("strong",[t._v("惰性")]),t._v("的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。")]),s("p",[t._v("相比之下，"),s("code",[t._v("v-show")]),t._v(" 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 "),s("code",[t._v("CSS")]),t._v(" 进行切换。")]),s("p",[t._v("一般来说，"),s("code",[t._v("v-if")]),t._v(" 有更高的"),s("strong",[t._v("切换开销")]),t._v("，而 "),s("code",[t._v("v-show")]),t._v(" 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 "),s("code",[t._v("v-show")]),t._v(" 较好；如果在运行时条件很少改变，则使用 "),s("code",[t._v("v-if")]),t._v(" 较好。")]),s("h2",{attrs:{id:"v-if-与-v-for-一起使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-if-与-v-for-一起使用","aria-hidden":"true"}},[t._v("#")]),t._v(" v-if 与 v-for 一起使用")]),s("p",[t._v("当 "),s("code",[t._v("v-if")]),t._v(" 与 "),s("code",[t._v("v-for")]),t._v(" 一起使用时，"),s("code",[t._v("v-for")]),t._v(" 具有比 "),s("code",[t._v("v-if")]),t._v(" 更高的优先级。")])])}],!1,null,null,null);a.default=e.exports}}]);