(window.webpackJsonp=window.webpackJsonp||[]).push([[211,27,174],{1106:function(t,e,r){var content=r(1139);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(73).default)("0258f990",content,!0,{sourceMap:!1})},1107:function(t,e,r){var content=r(1142);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(73).default)("40308008",content,!0,{sourceMap:!1})},1110:function(t,e,r){"use strict";var o={props:{title:{type:String,default:null},content:{type:String,default:null},bgColor:{type:String,default:"bg-gray-50"},contentWrapperClass:{type:String,default:null},contentJustification:{type:String,default:"justify-between"},useHorizontalCard:{type:Boolean,default:!1},showContentFirst:{type:Boolean,default:!1},disableOverflow:{type:Boolean,default:!1}},computed:{hasClickHandler(){var t;return!(null===(t=this.$listeners)||void 0===t||!t.iconClick)}}},n=r(7),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"rounded-lg h-full border border-gray-100",class:[t.bgColor,t.useHorizontalCard?"grid xs:grid-cols-2":"flex flex-col",t.disableOverflow?"":"overflow-hidden"]},[t.$slots.image?e("div",{class:{"cursor-pointer":t.hasClickHandler,"order-2":t.showContentFirst},on:{click:function(e){t.hasClickHandler&&t.$emit("iconClick")}}},[t._t("image")],2):t._e(),t._v(" "),e("div",{staticClass:"flex flex-col flex-grow py-4 px-6 gap-y-4",class:[t.contentJustification,t.contentWrapperClass]},[t.title||t.content||t.$slots.heading||t.$slots.default?e("div",[t._t("heading",(function(){return[t.title?e("h3",{staticClass:"text-base m-0 font-semibold"},[t._v("\n          "+t._s(t.title)+"\n        ")]):t._e()]})),t._v(" "),t._t("saved-value"),t._v(" "),t._t("default",(function(){return[t.content?e("p",{staticClass:"text-xs text-gray-500 my-2"},[t._v("\n          "+t._s(t.content)+"\n        ")]):t._e()]}))],2):t._e(),t._v(" "),e("div",[t._t("buttons")],2)])])}),[],!1,null,null,null);e.a=component.exports},1111:function(t,e,r){"use strict";r.r(e);var o={props:{logo:{type:Object,default:null},name:{type:String,required:!0}},computed:{is(){return()=>r(1112)("./".concat(this.name))}}},n=r(7),component=Object(n.a)(o,(function(){var t=this;return(0,t._self._c)("component",t._b({},"component",{logo:t.logo,is:t.is},!1))}),[],!1,null,null,null);e.default=component.exports},1112:function(t,e,r){var map={"./BagMockup":[1113,141],"./BagMockup.vue":[1113,141],"./BusinessCardStackMockup":[1114,142],"./BusinessCardStackMockup.vue":[1114,142],"./BusinessCardsMockup":[1115,143],"./BusinessCardsMockup.vue":[1115,143],"./CoffeeCupMockup":[1116,144],"./CoffeeCupMockup.vue":[1116,144],"./CoffeeCupSimpleMockup":[1117,145],"./CoffeeCupSimpleMockup.vue":[1117,145],"./CoffeeMugMockup":[1118,146],"./CoffeeMugMockup.vue":[1118,146],"./DocumentMockup":[1119,147],"./DocumentMockup.vue":[1119,147],"./DynamicMockup":[1111,174],"./DynamicMockup.vue":[1111,174],"./EmailSignatureMockup":[1120,148],"./EmailSignatureMockup.vue":[1120,148],"./EtsyMockup":[1121,149],"./EtsyMockup.vue":[1121,149],"./FacebookMobileProfileMockup":[1122,150],"./FacebookMobileProfileMockup.vue":[1122,150],"./FacebookProfileMockup":[1123,151],"./FacebookProfileMockup.vue":[1123,151],"./FlyerMockup":[1124,152],"./FlyerMockup.vue":[1124,152],"./InvitationMockup":[1125,153],"./InvitationMockup.vue":[1125,153],"./JustALogoMockup":[1126,154],"./JustALogoMockup.vue":[1126,154],"./KeychainMockup":[1127,155],"./KeychainMockup.vue":[1127,155],"./LetterWithOpenerMockup":[1128,156],"./LetterWithOpenerMockup.vue":[1128,156],"./LogoFilesMockup":[1129,157],"./LogoFilesMockup.vue":[1129,157],"./Mockup":[1102,0,140],"./Mockup.vue":[1102,0,140],"./MockupGallery":[1108,0,138],"./MockupGallery.vue":[1108,0,138],"./MockupGrid":[1109,0,139],"./MockupGrid.vue":[1109,0,139],"./OrangeJuiceMockup":[1130,158],"./OrangeJuiceMockup.vue":[1130,158],"./TShirtMockup":[1131,159],"./TShirtMockup.vue":[1131,159],"./TabletMockup":[1132,160],"./TabletMockup.vue":[1132,160],"./UprightSignMockup":[1133,161],"./UprightSignMockup.vue":[1133,161],"./WomanWithBagMockup":[1134,162],"./WomanWithBagMockup.vue":[1134,162],"./iMacMockup":[1135,163],"./iMacMockup.vue":[1135,163]};function o(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return Promise.all(e.slice(1).map(r.e)).then((function(){return r(o)}))}o.keys=function(){return Object.keys(map)},o.id=1112,t.exports=o},1137:function(t,e,r){"use strict";var o=r(1146),n=r(1110),c=r(1102),l=r(1103),d={components:{PremiumButton:o.a,Card:n.a,Mockup:c.default},props:{logo:{type:Object,required:!0},user:{type:Object,required:!0},mockup:{type:String,default:null},v2:{type:Boolean,default:!1},title:{type:String,required:!0},description:{type:String,default:null},buttonText:{type:String,required:!0},isPremium:{type:Boolean,default:!1},feature:{type:String,default:""},path:{type:String,default:"/dashboard"},externalPath:{type:Boolean,default:!1},src:{type:String,default:""}},computed:{mockupComponent(){if(this.mockup)return()=>r(1112)("./".concat(this.mockup))},v2Mockup(){return this.v2&&Object(l.getMockups)([this.mockup])[0]}}},f=(r(1138),r(7)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("Card",{attrs:{bgColor:"bg-white",title:t.title,content:t.description}},[e("div",{attrs:{slot:"image"},slot:"image"},[t._t("image",(function(){return[!t.v2&&t.mockup?e("div",{staticClass:"w-full mockup-card-img"},[e(t.mockupComponent,{tag:"component",attrs:{logo:t.logo}})],1):t.v2&&t.mockup?e("Mockup",{attrs:{logo:t.logo,mockup:t.v2Mockup,loaderClass:"mockup-card-img rounded-b-none"}}):t.src?e("img",{staticClass:"mockup-card-img object-cover",attrs:{src:t.src,alt:t.title}}):t._e()]}))],2),t._v(" "),e("div",{attrs:{slot:"buttons"},slot:"buttons"},[t.externalPath?e("a",{staticClass:"btn btn-secondary w-full",attrs:{type:"button",target:"_blank",href:t.path}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")]):t.externalPath||t.isPremium?!t.externalPath&&t.isPremium?e("PremiumButton",t._b({staticClass:"btn btn-secondary w-full",on:{continue:function(e){return t.$router.push(t.path)}}},"PremiumButton",{text:t.buttonText,feature:t.feature,user:t.user},!1)):t._e():e("nuxt-link",{staticClass:"btn btn-secondary w-full",attrs:{to:t.path,exact:""}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])],1)])}),[],!1,null,null,null);e.a=component.exports},1138:function(t,e,r){"use strict";r(1106)},1139:function(t,e,r){var o=r(72)((function(i){return i[1]}));o.push([t.i,".mockup-card-img{aspect-ratio:4/3}",""]),o.locals={},t.exports=o},1140:function(t,e,r){"use strict";r(14);var o=r(9);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=r(1137),d=r(42),f=r(269),m=r(21),v=r(1103),y=r(1102);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={props:{user:{type:Object,required:!0},logo:{type:Object,required:!0}},components:{MockupCard:l.a,Mockup:y.default},data:()=>({features:f.c}),computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({slug(){return Object(d.d)(this.$route)[2]||"home"},feature(){return this.getFeatureById(this.slug)},mockup(){return Object(v.getMockups)([this.feature.mockup])[0]},relations(){return this.feature.relations.reduce(((t,e)=>{var r=this.getFeatureById(e.slug);return r&&this.featureIsEnabled(r)&&t.push(r),t}),[])}},Object(m.c)({featureIsEnabled:"app/featureIsEnabled",getFeatureById:"app/getFeatureById"}))},O=h,_=(r(1141),r(7)),component=Object(_.a)(O,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"flex flex-wrap gap-4 bg-gray-50 full-bleed mb-6 justify-between"},[e("div",{staticClass:"self-end flex items-center justify-center overflow-hidden w-full sm:w-1/2 sm:order-last md:w-full md:order-first lg:w-1/2 lg:order-last"},[e("Mockup",t._b({staticClass:"max-w-sm aspect-ratio"},"Mockup",{logo:t.logo,mockup:t.mockup,showWatermark:!1},!1))],1),t._v(" "),e("div",{staticClass:"pt-4.5 pb-8 sm:pt-7 md:pt-4.5 lg:pt-7 flex-1"},[e("div",[e("h1",{staticClass:"mb-4 text-3xl md:text-4xl text-center sm:text-left md:text-center lg:text-left"},[t._v("\n          "+t._s(t.feature.label)+"\n        ")]),t._v(" "),t._t("description",(function(){return[e("div",{staticClass:"text-sm",domProps:{innerHTML:t._s(t.feature.intro||t.feature.description)}})]})),t._v(" "),t._t("header-sub-content")],2)])]),t._v(" "),t._t("default",(function(){return[e("section",{staticClass:"grid sm:grid-cols-2 md:grid-cols-1 md-lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4"},t._l(t.relations,(function(r,o){return e("MockupCard",t._b({key:o,staticClass:"bg-gray-50",attrs:{title:r.label,"button-text":r.card_button_text?r.card_button_text:r.label}},"MockupCard",c(c({user:t.user,logo:t.logo,v2:!0,isPremium:r.isPremium,path:"/dashboard/".concat(t.logo.id,"/").concat(r.slug),feature:r.product},r),{},{mockup:r.card_mockup}),!1))})),1)]}))],2)}),[],!1,null,"1db00c36",null);e.a=component.exports},1141:function(t,e,r){"use strict";r(1107)},1142:function(t,e,r){var o=r(72)((function(i){return i[1]}));o.push([t.i,".aspect-ratio[data-v-1db00c36]{aspect-ratio:3/2}",""]),o.locals={},t.exports=o},2016:function(t,e,r){"use strict";r.r(e);r(14);var o=r(9);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c=r(1140),l=r(1137),d=r(1111),f=r(98),m=r.n(f),v=r(418),y=r.n(v),k=(r(12),r(21));function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var O={components:{ArrowRight:m.a,CheckIcon:y.a},props:{disabled:{type:Boolean,default:!1},button:{type:String,default:"Get started"},title:{type:String,default:null},url:{type:String,default:null}},computed:{tags:()=>[]},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({select(){this.disabled||(this.markStepAsComplete("merch"),this.$emit("select"))}},Object(k.b)({markStepAsComplete:"dashboard/markStepAsComplete"}))},_=O,j=r(7),M=Object(j.a)(_,(function(){var t=this,e=t._self._c;return e("a",{staticClass:"flex flex-col cursor-pointer rounded-lg overflow-hidden transform duration-300 hover:-translate-y-2 hover:shadow-xl",class:{"opacity-50 pointer-events-none":t.disabled},attrs:{href:t.url,disabled:t.disabled,target:"_blank"},on:{click:t.select}},[e("div",{staticClass:"flex-grow-1 bg-cool-gray-200 cursor-pointer",on:{click:t.select}},[t._t("image")],2),t._v(" "),e("div",{staticClass:"flex-1 bg-gray-50 px-6 py-4"},[e("h3",{staticClass:"text-xl leading-7 font-semibold text-gray-900 flex flex-wrap justify-between"},[e("span",{staticClass:"mt-2"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"text-sm leading-5 font-medium text-white -mx-1.5"},t._l(t.tags,(function(r){return e("span",{key:r,staticClass:"inline-flex items-center rounded-full bg-green-400 pr-4 pl-2 py-1 mx-1 mt-2"},[e("CheckIcon",{staticClass:"mr-1 h-5 w-5"}),t._v("\n\n          "+t._s(r)+"\n        ")],1)})),0)]),t._v(" "),e("div",{staticClass:"flex flex-wrap items-center -mx-2 relative"},[e("a",{staticClass:"btn p-0 text-green-400 hover:text-green-500 focus:border-green-700 focus:shadow-outline-green active:text-green-700 mx-2 mb-2",attrs:{type:"button",href:t.url,disabled:t.disabled,target:"_blank"},on:{click:t.select}},[t._v("\n        "+t._s(t.button)+"\n\n        "),t.disabled?t._e():e("ArrowRight",{staticClass:"ml-1.5 -mr-1 h-4 w-4"})],1)])])])}),[],!1,null,null,null).exports,content=r(79),x=r(1105),C={transition:"fade",components:{FeatureLandingPage:c.a,MockupCard:l.a,DynamicMockup:d.default,MerchCard:M},mixins:[Object(content.d)(["package-dash/print-store","data/call-to-actions"]),content.e],props:{user:{type:Object,required:!0},logo:{type:Object,required:!0}},computed:{cards(){var t,e;return(null===(t=this.page)||void 0===t||null===(e=t["print-store"])||void 0===e?void 0:e.cards)||[]},buttonText(){var t,e;return(null===(t=this.page)||void 0===t||null===(e=t["call-to-actions"])||void 0===e?void 0:e.get_started)||""}},methods:{buildURLForCategory(t){var e=Object(x.a)({logo:this.logo.id,u:this.logo.updated_at,background:"transparent",primary:"#000000",secondary:"#000000",accent:"#000000",margins:0,width:800,quality:80}),r=encodeURIComponent(e);return"https://www.zazzle.com/cr/buffet/at-238628450906107294?rf=238628450906107294&sr=250891306314257644&t__useQpc=false&ed=true&t__smart=false&tc=&ic=&t_image1_iid=".concat(r,"&t_image2_iid=").concat(r,"&continueUrl=https%3A%2F%2Fwww.zazzle.com%2Fstore%2Flogadotcom&cg=").concat(t)}}},w=Object(j.a)(C,(function(){var t=this,e=t._self._c;return e("FeatureLandingPage",t._b({},"FeatureLandingPage",{logo:t.logo,user:t.user},!1),[e("section",{staticClass:"grid sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4"},t._l(t.cards,(function(r,c){return e("MockupCard",t._b({key:r.id,staticClass:"bg-gray-50",attrs:{title:r.name,path:t.buildURLForCategory(r.id),externalPath:!0,"button-text":"Get Started",mockup:r.mockup}},"MockupCard",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({user:t.user,logo:t.logo,v2:!1,isPremium:!1},r),!1))})),1)])}),[],!1,null,null,null);e.default=w.exports},418:function(t,e,r){r(14);var o=r(27),n=r(28),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}t.exports={functional:!0,render(t,e){var{_c:r,_v:d,data:data,children:f=[]}=e,{class:m,staticClass:v,style:style,staticStyle:y,attrs:k={}}=data,h=n(data,c);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[m,v],style:[style,y],attrs:Object.assign({fill:"currentColor",viewBox:"0 0 20 20"},k)},h),f.concat([r("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]))}}}}]);
//# sourceMappingURL=42c9883.modern.js.map