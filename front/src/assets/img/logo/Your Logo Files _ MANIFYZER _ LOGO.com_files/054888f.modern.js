(window.webpackJsonp=window.webpackJsonp||[]).push([[1,130,140],{1102:function(e,t,r){"use strict";r.r(t);var n=r(1),o=(r(51),r(33),r(29),r(23),r(24),r(1153)),c=r(273),l=r(97),content=r(79),d=r(132),m=r(1211),f=r(100),h=r(1105),v=r(12),y={components:{Watermark:c.a,Skeleton:l.a},mixins:[Object(content.d)(["data/call-to-actions","data/error-toasts"],!0)],props:{showWatermark:{type:Boolean,default:!1},canvasClass:{type:String,default:""},canvasStyle:{type:String,default:""},exportWidth:{type:Number,default:1500},background:{type:String,default:"transparent"},showDownload:{type:Boolean,default:!1},cover:{type:Boolean,default:!1},mockup:{type:[Object],required:!0},logo:{type:[Object],required:!0},showLoader:{type:Boolean,default:!0},loaderClass:{type:String,default:"w-full h-full"},loaderStyle:{type:Object,default:null}},data:()=>({dataUri:null,logoElement:null,canvas:null,id:Math.round(1e4*Math.random()).toString(),mockupWidth:null,mockupHeight:null,exporting:!1,loadedMockup:null,logoSvg:null,rendered:!1,defaultSvgAttributes:{xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs"}}),computed:{loading(){return!this.rendered},iconOnlyUrl(){return Object(h.a)({logo:this.logo.id,template:"icon-only",fit:"contain",background:"transparent",margins:0,u:this.logo.updated_at,format:"webp",quality:60})},logoWhiteUrl(){return Object(h.a)({logo:this.logo.id,primary:"#ffffff",background:"transparent",secondary:"#ffffff",accent:"#ffffff",tertiary:"#ffffff",quaternary:"#000000",margins:0,u:this.logo.updated_at,fit:"contain",format:"webp",quality:60})},logoBlackUrl(){return Object(h.a)({logo:this.logo.id,primary:"#000000",background:"transparent",secondary:"#000000",accent:"#000000",tertiary:"#000000",quaternary:"#ffffff",margins:0,u:this.logo.updated_at,fit:"contain",format:"webp",quality:60})},overrides(){var e;if("string"==typeof this.logo)return{};var t=this.logo.assets.wordmark_fonts[0],r=this.logo.assets.slogan_fonts,n=r.length>0?r[0]:null,o=n?n.id:null,c=n?n.name:null,l=null!==(e=this.logo.assets.palette)&&void 0!==e?e:this.logo.assets.palettes[0];return{"image.logo":!0,"image.icon_only":!0,"palette.primary":l.primary,"palette.secondary":l.secondary,"palette.tertiary":l.tertiary,"palette.quaternary":l.quaternary,"palette.accent":l.accent,"image.icon_only":this.iconOnlyUrl,"palette.background":l.background,"colors.hex.background":l.background,"colors.hex.primary":l.primary,"colors.hex.secondary":l.secondary,"colors.hex.tertiary":l.tertiary,"colors.hex.quaternary":l.quaternary,"colors.hex.accent":l.accent,"font.wordmark.id":t.id,"font.wordmark.name":t.name,"font.slogan.id":o,"font.slogan.name":c,"image.logo_white":this.logoWhiteUrl,"image.logo_black":this.logoBlackUrl}},logoIsURL(){return this.logo.startsWith("http")}},watch:{mockup(){this.loadAndRenderCanvas()},logo(){this.loadAndRenderCanvas()},background(e){this.canvas.backgroundColor=e}},mounted(){var e=this;return Object(n.a)((function*(){if(e.$refs.svg){try{e.canvas=new m.fabric.StaticCanvas(e.id)}catch(e){}yield e.loadAndRenderCanvas(),v.a.$emit(v.b.EditorHideLoader)}}))()},beforeDestroy(){try{if(this.$refs.canvas)this.$refs.canvas.width=1,this.$refs.canvas.height=1,this.$refs.canvas.getContext("2d").clearRect(0,0,1,1);this.canvas&&(this.canvas.setDimensions({width:1,height:1}),this.canvas.dispose())}catch(e){console.error("Failed to dispose of canvas: ".concat(e))}},methods:{exportMockup(){var e=this;return Object(n.a)((function*(){if(!e.exporting){e.exporting=!0,yield e.canvas.requestRenderAll();try{var t=e.exportWidth/e.canvas.getWidth(),r=e.canvas.toDataURL({multiplier:t});Object(o.b)({data:r,filename:e.loadedMockup.name+".png"})}catch(t){e.$logger.error(t),e.$fetchState.pending||e.$toast.error(e.page["error-toasts"].download_failed)}finally{e.exporting=!1}}}))()},loadAndRenderCanvas(){var e=this;return Object(n.a)((function*(){try{if(!e.loadedMockup)if(e.mockup.id)e.loadedMockup=yield e.fetchFromAPI();else{var t=yield r(1177)("./".concat(e.mockup.name));e.loadedMockup=t.default}e.canvas.setDimensions({width:e.loadedMockup.width,height:e.loadedMockup.height}),yield e.render(),e.rendered=!0,e.$emit("rendered")}catch(e){console.log("e",e)}}))()},render(){var e=this;return Object(n.a)((function*(){if("object"==typeof e.logo&&e.logo.svg){var t=Object(d.SVG)().addTo(e.$refs.svg),r=t.svg(e.logo.svg).findOne("#tight-bounds").children()[0];r.attr(e.defaultSvgAttributes),e.logoSvg=r.svg(),t.remove()}if(e.loadedMockup.overrides)for(var n in e.loadedMockup.overrides){var o=e.loadedMockup.overrides[n],c=e.overrides[o];c&&(e.loadedMockup[n]=c)}e.loadedMockup.objects.map((t=>{if(t.overrides)for(var r in t.overrides)if(e.overrides[t.overrides[r]]&&(t[r]=e.overrides[t.overrides[r]],t.overrides[r].includes("image"))){var n=t.width*t.scaleX,o=t.height*t.scaleY;if(t.width=n,t.height=o,t.scaleX=1,t.scaleY=1,"string"!=typeof e.overrides[t.overrides[r]]&&e.logoSvg)try{var c=Object(d.SVG)().addTo(e.$refs.svg).size(t.width,t.height);c.attr(e.defaultSvgAttributes);var l=c.group();l.svg(e.logoSvg);var m=l.first();m.width(t.width);var{height:f,width:h}=m.attr();f>t.height&&m.height(t.height),h>t.width&&m.width(t.width),m.center(t.width/2,t.height/2),m.attr({viewbox:"0 0 ".concat(t.width," ").concat(t.height)}),t.src="data:image/svg+xml;base64,"+btoa(c.svg()),c.remove()}catch(e){console.log("e",e)}else t.src+="&width=".concat(n,"&height=").concat(o)}})),yield e.loadAllFonts(e.loadedMockup.objects),yield new Promise((t=>{try{e.canvas.loadFromJSON(e.loadedMockup,(()=>{e.canvas.getObjects().forEach((e=>{if("i-text"===e.type){var t=e.fontFamily.replace("Regular","");e.set("fontFamily",t),e.fixedWidth&&e.set("width",e.fixedWidth)}})),e.canvas.setBackgroundColor(e.loadedMockup.background,(()=>{e.canvas.renderAll(),e.dataUri=e.canvas.toDataURL({}),t()}))}))}catch(e){}}))}))()},loadAllFonts:e=>Object(n.a)((function*(){var t=e.map(function(){var e=Object(n.a)((function*(e){if(e.fontId){var t="https://cdn.logo.com/assets/fonts/".concat(e.fontId,".ttf"),r=e.fontFamily.replace("Regular","");return Object(f.a)(r,t,{style:e.fontStyle,weight:e.fontWeight})}}));return function(t){return e.apply(this,arguments)}}());yield Promise.all(t)}))(),fetchFromAPI(){var e=this;return Object(n.a)((function*(){try{var{data:data}=yield e.$api.get("/api/v2/stitch/mockups/"+e.mockup.id,{params:{relations:"canvas.pages"}}),{name:t,canvas:canvas}=data,{background:r,objects:n,overrides:o}=canvas.pages[0];return{height:canvas.height,width:canvas.width,background:r,objects:n,name:t,overrides:o}}catch(e){console.error(e)}}))()}}},w=y,k=(r(1178),r(7)),component=Object(k.a)(w,(function(){var e=this,t=e._self._c;return t("div",{ref:"container",staticClass:"w-full",on:{contextmenu:function(e){e.preventDefault()}}},[e.loading&&e.showLoader?t("Skeleton",{class:e.loaderClass,style:e.loaderStyle}):e._e(),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"w-full h-full"},[e.showWatermark?t("div",{staticClass:"relative"},[t("Watermark",{attrs:{background:e.background}})],1):e._e(),e._v(" "),t("canvas",{ref:"canvas",class:e.canvasClass?e.canvasClass:["w-full h-full",{"object-cover":e.cover}],style:e.canvasStyle,attrs:{id:e.id}}),e._v(" "),t("div",{ref:"svg",attrs:{id:"svg"}})]),e._v(" "),e.showDownload?t("footer",{staticClass:"p-4 text-center"},[e.$fetchState.pending&&e.showLoader?t("Skeleton",{staticClass:"w-40 h-10 mx-auto"}):t("button",{staticClass:"btn btn-secondary w-full button-width",attrs:{type:"button",disabled:e.exporting,loading:e.exporting},on:{click:function(t){return e.exportMockup(e.mockup)}}},[e._v("\n      "+e._s(e.page["call-to-actions"].download)+"\n    ")])],1):e._e()],1)}),[],!1,null,"6a52f484",null);t.default=component.exports},1103:function(e,t,r){"use strict";r.r(t),r.d(t,"DEFAULT_MOCKUP_GALLERY",(function(){return o})),r.d(t,"DEFAULT_EDITOR_MOCKUPS",(function(){return c})),r.d(t,"getMockups",(function(){return l}));r(23),r(24);var n=[{name:"picture-frame-1",id:"tpl_G54MBGXhzcwLwdc8cD"},{name:"picture-frame-2",id:"tpl_fw1FFRv4letKvDNJ7m"},{name:"greeting-card-3",id:"tpl_2shrPj4ylUuYWnslYh"},{name:"picture-frame-3",id:"tpl_2Lj4gFQeOJyA5nXMSE"},{name:"business-card-1"},{name:"pizza-box-1"},{name:"greeting-card-1"},{name:"greeting-card-2"},{name:"iphone-mockup-1"},{name:"macbook-1",id:"tpl_Q9UxdzKHBAreJZMyBq"},{name:"notebook-1",id:"tpl_tKMQoiUfjlOazXddoj"},{name:"picture-frame-4",id:"tpl_T2x7Ed4v9zF024Gotu"},{name:"google-ad-1"},{name:"scene-1",id:"tpl_JEE0lImEmAKLpKg8oK"},{name:"collage-2"},{name:"collage-3"},{name:"collage-4"},{name:"stitch-example",id:"tpl_E4yVuf1SAKEpHFXJgO"},{name:"collage-modal-example",id:"tpl_EKV3XqolTJ6EbCZO9k"},{name:"t-shirt-3",id:"tpl_TgAYI5fTiReF4JUDkF"},{name:"edit-your-logo",id:"tpl_eioJ1gOa4S6utVdRuN"},{name:"stationery-1",id:"tpl_SwBBxJs4EuMCO1LkR1"},{name:"invoice-card",id:"tpl_3qZxSI8Rky17qL6yw9"},{name:"logo-resize-card",id:"tpl_080dR5qN3zo5zHBeyu"},{name:"merchandise-card",id:"tpl_ms7D7Eax8sxGwbUnwQ"},{name:"stock-images-card",id:"tpl_0Wl6ZpLyyWVcRsTFdV"},{name:"invoices-card",id:"tpl_3qZxSI8Rky17qL6yw9"},{name:"business-cards-card",id:"tpl_78cdCqdTCgdVQGWRMU"},{name:"email-signatures-card",id:"tpl_9SE4znbJbG47i3eePg"},{name:"edit-logo-card",id:"tpl_A6AJG9eazbo6xI0mvP"},{name:"brand-guidelines-card",id:"tpl_Cb6CowUZypYDrMkyI5"},{name:"mockups-card",id:"tpl_DqYINkTjNN3AgFXyFI"},{name:"letterheads-card",id:"tpl_EIG9HcMd8yZhkQU7lD"},{name:"website-images-card",id:"tpl_EKQlOjIdVssrgXF2aY"},{name:"website-builder-card",id:"tpl_Hiiw5M36tUMCQhb8wp"},{name:"logo-files-card",id:"tpl_Ixmu19BUdwUSpUJH7C"},{name:"brand-information-card",id:"tpl_jOehDicK9FwaonNr9d"},{name:"stitch-card",id:"tpl_mIUtNokK8gmjpkzJFs"},{name:"profile-card",id:"tpl_nNmU4fNCvvy8i1o4TF"},{name:"domains-card",id:"tpl_rr6nf4PGHtCNr6IpPA"},{name:"branding-guidelines-card",id:"tpl_tbfR5t9JL1wpESm0wT"},{name:"logo-zip-file-long-card",id:"tpl_WtMCmpxkpSqZlXWYiV"},{name:"logo-zip-socials-long-card",id:"tpl_OuFoaqXy5Gzfjhhkiu"},{name:"branding-files-long-card",id:"tpl_7YECRDgoh67CJ6LMCz"},{name:"wdotmodal-share-card",id:"tpl_mR8WETKmii8U1elEg4"},{name:"brand-information-header",id:"tpl_XYKpFutvvgiy0CCt09"},{name:"website-images-header",id:"tpl_5UkqKUqQar2ad09zDo"},{name:"website-header",id:"tpl_Y9uo59u175xBdEoKGp"},{name:"domains-header",id:"tpl_3epqcLiN3ZhPu39myy"},{name:"logo-files-header",id:"tpl_lSiLNQR0BOVccWQ6tU"},{name:"merchandise-header",id:"tpl_2ocftntz24NUChJoWn"},{name:"email-signatures-header",id:"tpl_9dj7rCo4I1QDWLRbbk"},{name:"brand-guidelines-header",id:"tpl_dw9UdxV8GB3Ba1GCLJ"},{name:"stitch-header",id:"tpl_k51gJd2RkoALBbP12g"},{name:"profile-header",id:"tpl_KJDTjb6wDbfhui4zNt"},{name:"stock-images-header",id:"tpl_O0IwzizFAuUDIEhzTw"},{name:"mockups-header",id:"tpl_OQPzJaNyqJV9BcSKKE"},{name:"mockups-and-stock-images-header",id:"tpl_t83mXS5CGhHcLiVyU6"},{name:"social-media-header",id:"tpl_V1HQAIuc1bgRViK6SN"},{name:"grow-your-business-header",id:"tpl_PHbAj2fwYI19Gt5dfm"},{name:"stationery-modal",id:"tpl_SwBBxJs4EuMCO1LkR1"},{name:"t-shirt-modal",id:"tpl_TOIhDnFYRByEC1vpO3"},{name:"bag-modal",id:"tpl_JkejIvlMszc9XGZK0W"},{name:"socials-modal",id:"tpl_nr8RICdUBTvQ065OTe"},{name:"purchase-modal-1",id:"tpl_NxR9ppcgLaGI0dALLs"},{name:"purchase-modal-2",id:"tpl_WZ9ZFOoz9Jj0FkG88h"}],o=["picture-frame-1","picture-frame-2","greeting-card-3","picture-frame-3","t-shirt-1","business-card-1","pizza-box-1","greeting-card-1","greeting-card-2","iphone-mockup-1","macbook-1","notebook-1","picture-frame-4","google-ad-1","scene-1","collage-2","collage-3"].map((e=>n.find((t=>t.name===e)))).filter((e=>e)),c=["picture-frame-2","notebook-1","macbook-1","collage-3","collage-2","scene-1","picture-frame-1","picture-frame-3"].map((e=>n.find((t=>t.name===e)))),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0===e.length)return n;e=e.map((e=>"string"==typeof e?{name:e}:e));var t=[],r=function(e){var r=n.find((t=>t.name===e.name));r?t.push(r):console.warn("Mockup ".concat(e," could not be loaded."))};for(var o of e)r(o);return t}},1105:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=e=>{var t=Object.keys(e).filter((t=>void 0!==e[t])).map((t=>encodeURIComponent(t)+"="+encodeURIComponent(e[t]))).join("&");return"".concat("https://api.logo.com","/api/v2/images?").concat(t)}},1146:function(e,t,r){"use strict";r(14);var n=r(9),o=r(284),c=r(1196),l=r(1157),d=r(21);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={mixins:[Object(c.a)({runOnMount:!1}),l.a],props:{enableFeatureLock:{type:Boolean,default:!0},user:{type:Object,required:!0},text:{type:String,required:!0},feature:{type:String,required:!0}},components:{Crown:o.a},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({isPremiumFeature(){var e;return void 0!==(null===(e=this.fullFeature)||void 0===e?void 0:e.isPremium)?this.fullFeature.isPremium:this.checkIsPremiumFeature(this.feature)},hasBrandPlan(){var e,t,r;return"account-plan"===(null===(e=this.user)||void 0===e?void 0:e.plan.package.code)||"brand-plan"===(null===(t=this.user)||void 0===t?void 0:t.plan.package.code)||"agency-plan"===(null===(r=this.user)||void 0===r?void 0:r.plan.package.code)},showCrown(){return this.isPremiumFeature&&!this.hasBrandPlan},fullFeature(){return this.getFeatureById(this.feature)}},Object(d.c)({getFeatureById:"app/getFeatureById"})),methods:{handleClick(e){if(this.enableFeatureLock&&this.isPremiumFeature&&!this.canAccessFeature)return this.promptForUpgrade();this.$emit("continue",e)},handleCancelUpgrade(){this.$emit("cancel")}}},h=f,v=r(7),component=Object(v.a)(h,(function(){var e=this,t=e._self._c;return t("button",{staticClass:"btn",attrs:{slot:"buttons",type:"button"},on:{click:e.handleClick},slot:"buttons"},[e.showCrown?t("Crown",{staticClass:"mr-2",attrs:{contained:!1}}):e._e(),e._v("\n\n  "+e._s(e.text)+"\n")],1)}),[],!1,null,null,null);t.a=component.exports},1150:function(e,t,r){var content=r(1179);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(73).default)("30991596",content,!0,{sourceMap:!1})},1151:function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return f})),r.d(t,"b",(function(){return m})),r.d(t,"a",(function(){return d}));var n=r(1),o=(r(34),r(29),r(12)),c=r(31),l=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(c.e)();n?t=n:(o.a.$emit(o.b.CurrencyChange,n),t="usd");var l=e.prices.find((e=>{var{recurring:n,currency:o}=e,c=r?n&&n.interval===r:!n;return o===t&&c}));return l||null},d=(e,t)=>{if("COMPLETED"!==e.status)return t.error("".concat(e.name||"File"," not ready to download, please try again."));var a=document.createElement("a");a.href=e.url,a.download=e.name,a.setAttribute("download",e.name),"pdf"!==e.format?(document.body.appendChild(a),a.target="_blank",a.click(),document.body.removeChild(a),o.a.$emit(o.b.FileDownloaded,{type:e.name}),t.success("".concat(e.name||"File"," has been downloaded."))):window.open(e.url)},m=function(){var e=Object(n.a)((function*(e,t,r){var{data:data}=yield t.get("/api/v3/assets/fonts/".concat(e),{params:{url:!0,u:0}});d({url:data.cdn_url||data.font_url,name:data.filename,status:data.font_url?"COMPLETED":null},r)}));return function(t,r,n){return e.apply(this,arguments)}}(),f=e=>e.split("-").map((e=>e.replace("package","kit"))).map((e=>e.charAt(0).toUpperCase()+e.substring(1))).join(" ")},1153:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"d",(function(){return d})),r.d(t,"c",(function(){return f})),r.d(t,"a",(function(){return h}));var n=r(1);r(23),r(24),r(34);function o(e){var{data:data,filename:t}=e,a=document.createElement("a");a.href=data,a.style="display: none",a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a)}function c(e){return l.apply(this,arguments)}function l(){return(l=Object(n.a)((function*(e){var{$api:t,url:r}=e,{data:data}=yield t.get(r,{responseType:"arraybuffer"});return URL.createObjectURL(new Blob([data]))}))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=Object(n.a)((function*(e){var{$api:t,url:r,filename:n}=e;o({data:yield c({$api:t,url:r}),filename:n})}))).apply(this,arguments)}function f(e){var{format:t,formats:r={}}=e;if(t)return t;var[n]=Object.entries(r)[0];return n}function h(e,t){var r=e.name.toLowerCase().split(" ").join("-");return"".concat(r,".").concat(t)}},1157:function(e,t,r){"use strict";r(14);var n=r(9),o=(r(33),r(1151)),c=r(31),l=r(21);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a={data:()=>({codes:["account-plan","brand-plan"]}),mounted(){this.useAgencyPlan&&(this.codes=["agency-plan"])},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({brandPlan(){return this.catalog.find((e=>{var{code:code}=e;return this.codes.includes(code)}))},premiumFeatures(){return this.brandPlan.products.map((e=>{var{code:code}=e;return code}))},price(){return Object(o.c)(this.brandPlan,this.interval)},formattedForGA(){return Object(c.d)(this.brandPlan)}},Object(l.e)("app",["catalog"])),methods:{checkIsPremiumFeature(e){return this.premiumFeatures.includes(e)}}}},1177:function(e,t,r){var map={"./":[1103,130],"./business-card-1":[1166,164],"./business-card-1.js":[1166,164],"./collage-2":[1167,165],"./collage-2.js":[1167,165],"./collage-3":[1168,166],"./collage-3.js":[1168,166],"./collage-4":[1169,173],"./collage-4.js":[1169,173],"./google-ad-1":[1170,167],"./google-ad-1.js":[1170,167],"./greeting-card-1":[1171,168],"./greeting-card-1.js":[1171,168],"./greeting-card-2":[1172,169],"./greeting-card-2.js":[1172,169],"./index":[1103,130],"./index.js":[1103,130],"./iphone-mockup-1":[1173,170],"./iphone-mockup-1.js":[1173,170],"./pizza-box-1":[1174,171],"./pizza-box-1.js":[1174,171],"./t-shirt-2":[1175,172],"./t-shirt-2.js":[1175,172]};function n(e){if(!r.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],n=t[0];return r.e(t[1]).then((function(){return r(n)}))}n.keys=function(){return Object.keys(map)},n.id=1177,e.exports=n},1178:function(e,t,r){"use strict";r(1150)},1179:function(e,t,r){var n=r(72)((function(i){return i[1]}));n.push([e.i,".button-width[data-v-6a52f484]{max-width:10rem}",""]),n.locals={},e.exports=n},1196:function(e,t,r){"use strict";r(33);var n=r(12);t.a=function(){var{feature:e,runOnMount:t=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{data:()=>({runOnMount:t}),computed:{featureName(){return this.feature||e},canAccessFeature(){return this.checkCanAccessFeature(this.featureName)},planFeatures(){var e,t;return(null===(e=this.user)||void 0===e||null===(t=e.plan)||void 0===t?void 0:t.features)||[]}},methods:{promptForUpgrade(){this.canAccessFeature||n.a.$emit(n.b.UserOpenDashboardUpgradeModal,{onClose:this.handleCancelUpgrade})},handleCancelUpgrade(){console.log("cancelled")},checkCanAccessFeature(e){return!e||!this.planFeatures.length||this.planFeatures.includes(e)}},mounted(){this.user||console.error("No user availale for feature locking"),this.runOnMount&&this.promptForUpgrade()}}}},1212:function(e,t){},1213:function(e,t){},1214:function(e,t){}}]);
//# sourceMappingURL=054888f.modern.js.map