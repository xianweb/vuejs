(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{81:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"class-与-style-绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-与-style-绑定","aria-hidden":"true"}},[t._v("#")]),t._v(" Class 与 Style 绑定")]),s("h2",{attrs:{id:"绑定-html-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绑定-html-class","aria-hidden":"true"}},[t._v("#")]),t._v(" 绑定 HTML Class")]),s("h3",{attrs:{id:"对象语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象语法")]),s("p",[t._v("我们可以传给 "),s("code",[t._v("v-bind:class")]),t._v(" 一个对象，以动态地切换 "),s("code",[t._v("class")]),t._v("：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ active: isActive }"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("上面的语法表示 "),s("code",[t._v("active")]),t._v(" 这个 "),s("code",[t._v("class")]),t._v(" 存在与否将取决于数据属性 "),s("code",[t._v("isActive")]),t._v(" 的 "),s("code",[t._v("truthiness")]),t._v(" （布尔特性）。")]),s("p",[t._v("你可以在对象中传入更多属性来动态切换多个 "),s("code",[t._v("class")]),t._v("。此外，"),s("code",[t._v("v-bind:class")]),t._v(" 指令也可以与普通的 "),s("code",[t._v("class")]),t._v(" 属性共存。当有如下模板:")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("static"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ active: isActive, "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("text-danger"),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(": hasError }"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("和如下 data：")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  isActive"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hasError"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("结果渲染为：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("static active"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("绑定的数据对象不必内联定义在模板里：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("classObject"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  classObject"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    active"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v("'text-danger'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("渲染的结果和上面一样。")]),s("p",[t._v("我们也可以在这里绑定一个返回对象的"),s("strong",[t._v("计算属性")]),t._v("。这是一个常用且强大的模式：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("classObject"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  isActive"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  error"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\ncomputed"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  classObject"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      active"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isActive "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token string"}},[t._v("'text-danger'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error \n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("h3",{attrs:{id:"数组语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组语法","aria-hidden":"true"}},[t._v("#")]),t._v(" 数组语法")]),s("p",[t._v("我们可以把一个数组传给 "),s("code",[t._v("v-bind:class")]),t._v("，以应用一个 "),s("code",[t._v("class")]),t._v(" 列表：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[activeClass, errorClass]"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  activeClass"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'active'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  errorClass"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'text-danger'")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("渲染为：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("active text-danger"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("如果你也想根据条件切换列表中的 "),s("code",[t._v("class")]),t._v("，可以用三元表达式：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[isActive ? activeClass : "),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(", errorClass]"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("这样写将始终添加 "),s("code",[t._v("errorClass")]),t._v("，但是只有在 "),s("code",[t._v("isActive")]),t._v(" 是 "),s("code",[t._v("truthy")]),t._v("（布尔特性） 时才添加 "),s("code",[t._v("activeClass")]),t._v("。")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("v-bind:")]),t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[{ active: isActive }, errorClass]"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h2",{attrs:{id:"绑定内联样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绑定内联样式","aria-hidden":"true"}},[t._v("#")]),t._v(" 绑定内联样式")]),s("h3",{attrs:{id:"对象语法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象语法-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象语法")]),s("p",[s("code",[t._v("v-bind:style")]),t._v(" 的对象语法十分直观——看着非常像 "),s("code",[t._v("CSS")]),t._v("，但其实是一个 "),s("code",[t._v("JavaScript")]),t._v(" 对象。"),s("code",[t._v("CSS")]),t._v(" 属性名可以用驼峰式 ("),s("code",[t._v("camelCase")]),t._v(") 或短横线分隔 ("),s("code",[t._v("kebab-case")]),t._v("，记得用单引号括起来) 来命名：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("v-bind:")])]),s("span",{attrs:{class:"token style-attr language-css"}},[s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("color")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" activeColor, "),s("span",{attrs:{class:"token property"}},[t._v("fontSize")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fontSize + "),s("span",{attrs:{class:"token string"}},[t._v("'px'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  activeColor"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'red'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fontSize"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("30")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("直接绑定到一个样式对象通常更好，这会让模板更清晰：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("v-bind:")])]),s("span",{attrs:{class:"token style-attr language-css"}},[s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{attrs:{class:"token attr-value"}},[t._v("styleObject")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("data"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  styleObject"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    color"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'red'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fontSize"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'13px'")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("同样的，对象语法常常结合返回对象的"),s("strong",[t._v("计算属性")]),t._v("使用。")]),s("h3",{attrs:{id:"数组语法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组语法-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 数组语法")]),s("p",[s("code",[t._v("v-bind:style")]),t._v(" 的数组语法可以将多个样式对象应用到同一个元素上：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("v-bind:")])]),s("span",{attrs:{class:"token style-attr language-css"}},[s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{attrs:{class:"token attr-value"}},[t._v("[baseStyles, overridingStyles]")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h3",{attrs:{id:"自动添加前缀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动添加前缀","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动添加前缀")]),s("p",[t._v("当 "),s("code",[t._v("v-bind:style")]),t._v(" 使用需要添加浏览器引擎前缀的 "),s("code",[t._v("CSS")]),t._v(" 属性时，如 "),s("code",[t._v("transform")]),t._v("，"),s("code",[t._v("Vue.js")]),t._v(" 会"),s("strong",[t._v("自动侦测并添加相应的前缀")]),t._v("。")]),s("h3",{attrs:{id:"多重值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多重值","aria-hidden":"true"}},[t._v("#")]),t._v(" 多重值")]),s("p",[t._v("从 "),s("code",[t._v("2.3.0")]),t._v(" 起你可以为 "),s("code",[t._v("style")]),t._v(" 绑定中的属性提供一个包含"),s("strong",[t._v("多个值的数组")]),t._v("，常用于提供多个带前缀的值，例如：")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v(":")]),s("span",{attrs:{class:"token style-attr language-css"}},[s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{attrs:{class:"token property"}},[t._v("display")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ["),s("span",{attrs:{class:"token string"}},[t._v("'-webkit-box'")]),t._v(", "),s("span",{attrs:{class:"token string"}},[t._v("'-ms-flexbox'")]),t._v(", "),s("span",{attrs:{class:"token string"}},[t._v("'flex'")]),t._v("] "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("这样写只会渲染数组中"),s("strong",[t._v("最后一个被浏览器支持的值")]),t._v("。在本例中，如果浏览器支持不带浏览器前缀的 "),s("code",[t._v("flexbox")]),t._v("，那么就只会渲染 "),s("code",[t._v("display: flex")]),t._v("。")])])}],!1,null,null,null);a.default=e.exports}}]);