exports.ids=[2],exports.modules={31:function(t,e,n){var content=n(39);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(3).default;t.exports.__inject__=function(t){o("05122072",content,!0,t)}},38:function(t,e,n){"use strict";n.r(e);var o=n(31),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e.default=r.a},39:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".post-thumbnail{width:100%;height:300px;background-size:cover;background-position:50%}.post-content{width:80%;max-width:500px;margin:auto}.post-content p{white-space:pre-line}",""])},44:function(t,e,n){"use strict";n.r(e);var o={asyncData:t=>t.app.$storyapi.get("cdn/stories/blog/"+t.params.postId,{version:"published"}).then(t=>({blok:t.data.story.content,image:t.data.story.content.thumbnail,title:t.data.story.content.title,content:t.data.story.content.content})),mounted(){this.$storybridge.on("change",()=>{location.reload(!0)})}},r=n(1);var component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],attrs:{id:"post"}},[t._ssrNode('<div class="post-thumbnail"'+t._ssrStyle(null,{backgroundImage:"url("+t.image+")"},null)+'></div> <section class="post-content"><h1>'+t._ssrEscape(t._s(t.title))+"</h1> <p>"+t._ssrEscape(t._s(t.content))+"</p></section>")])}),[],!1,(function(t){var e=n(38);e.__inject__&&e.__inject__(t)}),null,"2313041a");e.default=component.exports}};