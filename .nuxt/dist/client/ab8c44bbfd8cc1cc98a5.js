(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{278:function(t,e,r){var content=r(281);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("64074a5e",content,!0,{sourceMap:!1})},280:function(t,e,r){"use strict";var n=r(278);r.n(n).a},281:function(t,e,r){(t.exports=r(47)(!1)).push([t.i,"a[data-v-9b8fc168]{text-decoration:none;color:#000}.post-preview[data-v-9b8fc168]{border-radius:3px;box-shadow:1px 1px 5px 1px rgba(0,0,0,.5);width:90%;height:20rem;margin:1rem}.post-preview-thumbnail[data-v-9b8fc168]{background-position:50%;background-size:cover;width:100%;height:10rem}.post-preview-content[data-v-9b8fc168]{text-align:center;padding:1rem}@media (min-width:35rem){.post-preview[data-v-9b8fc168]{width:25rem}}",""])},284:function(t,e,r){var content=r(293);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(48).default)("57c695c0",content,!0,{sourceMap:!1})},285:function(t,e,r){"use strict";var n={props:{title:{type:String,required:!0},excerpt:{type:String,required:!0},thumbnailImage:{type:String,required:!0},id:{type:String,required:!0}}},o=(r(280),r(16)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"post-preview",attrs:{to:"/blog/"+t.id}},[r("article",[r("div",{staticClass:"post-preview-thumbnail",style:{backgroundImage:"url("+t.thumbnailImage+")"}}),t._v(" "),r("div",{staticClass:"post-preview-content"},[r("h1",[t._v(t._s(t.title))]),t._v(" "),r("p",[t._v(t._s(t.excerpt))])])])])}),[],!1,null,"9b8fc168",null);e.a=component.exports},292:function(t,e,r){"use strict";var n=r(284);r.n(n).a},293:function(t,e,r){(t.exports=r(47)(!1)).push([t.i,"#posts[data-v-2eeff457]{padding-top:2rem;display:flex;justify-content:center;align-items:center;flex-direction:column}@media (min-width:35rem){#posts[data-v-2eeff457]{flex-direction:row}}",""])},297:function(t,e,r){"use strict";r.r(e);var n={components:{PostPreview:r(285).a},asyncData:function(t){return t.app.$storyapi.get("cdn/stories",{version:t.isDev?"draft":"published",starts_with:"blog/"}).then((function(t){return{posts:t.data.stories.map((function(t){return{id:t.slug,title:t.content.title,previewText:t.content.summary,thumbnailUrl:t.content.thumbnail}}))}}))}},o=(r(292),r(16)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"posts"}},this._l(this.posts,(function(t){return e("PostPreview",{key:t.id,attrs:{title:t.title,excerpt:t.previewText,thumbnailImage:t.thumbnailUrl,id:t.id}})})),1)}),[],!1,null,"2eeff457",null);e.default=component.exports}}]);