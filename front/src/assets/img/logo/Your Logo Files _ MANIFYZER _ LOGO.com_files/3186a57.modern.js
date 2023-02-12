(window.webpackJsonp=window.webpackJsonp||[]).push([[200,43,56,112],{1106:function(t,e,n){var content=n(1139);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("0258f990",content,!0,{sourceMap:!1})},1107:function(t,e,n){var content=n(1142);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("40308008",content,!0,{sourceMap:!1})},1110:function(t,e,n){"use strict";var o={props:{title:{type:String,default:null},content:{type:String,default:null},bgColor:{type:String,default:"bg-gray-50"},contentWrapperClass:{type:String,default:null},contentJustification:{type:String,default:"justify-between"},useHorizontalCard:{type:Boolean,default:!1},showContentFirst:{type:Boolean,default:!1},disableOverflow:{type:Boolean,default:!1}},computed:{hasClickHandler(){var t;return!(null===(t=this.$listeners)||void 0===t||!t.iconClick)}}},r=n(7),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"rounded-lg h-full border border-gray-100",class:[t.bgColor,t.useHorizontalCard?"grid xs:grid-cols-2":"flex flex-col",t.disableOverflow?"":"overflow-hidden"]},[t.$slots.image?e("div",{class:{"cursor-pointer":t.hasClickHandler,"order-2":t.showContentFirst},on:{click:function(e){t.hasClickHandler&&t.$emit("iconClick")}}},[t._t("image")],2):t._e(),t._v(" "),e("div",{staticClass:"flex flex-col flex-grow py-4 px-6 gap-y-4",class:[t.contentJustification,t.contentWrapperClass]},[t.title||t.content||t.$slots.heading||t.$slots.default?e("div",[t._t("heading",(function(){return[t.title?e("h3",{staticClass:"text-base m-0 font-semibold"},[t._v("\n          "+t._s(t.title)+"\n        ")]):t._e()]})),t._v(" "),t._t("saved-value"),t._v(" "),t._t("default",(function(){return[t.content?e("p",{staticClass:"text-xs text-gray-500 my-2"},[t._v("\n          "+t._s(t.content)+"\n        ")]):t._e()]}))],2):t._e(),t._v(" "),e("div",[t._t("buttons")],2)])])}),[],!1,null,null,null);e.a=component.exports},1112:function(t,e,n){var map={"./BagMockup":[1113,141],"./BagMockup.vue":[1113,141],"./BusinessCardStackMockup":[1114,142],"./BusinessCardStackMockup.vue":[1114,142],"./BusinessCardsMockup":[1115,143],"./BusinessCardsMockup.vue":[1115,143],"./CoffeeCupMockup":[1116,144],"./CoffeeCupMockup.vue":[1116,144],"./CoffeeCupSimpleMockup":[1117,145],"./CoffeeCupSimpleMockup.vue":[1117,145],"./CoffeeMugMockup":[1118,146],"./CoffeeMugMockup.vue":[1118,146],"./DocumentMockup":[1119,147],"./DocumentMockup.vue":[1119,147],"./DynamicMockup":[1111,174],"./DynamicMockup.vue":[1111,174],"./EmailSignatureMockup":[1120,148],"./EmailSignatureMockup.vue":[1120,148],"./EtsyMockup":[1121,149],"./EtsyMockup.vue":[1121,149],"./FacebookMobileProfileMockup":[1122,150],"./FacebookMobileProfileMockup.vue":[1122,150],"./FacebookProfileMockup":[1123,151],"./FacebookProfileMockup.vue":[1123,151],"./FlyerMockup":[1124,152],"./FlyerMockup.vue":[1124,152],"./InvitationMockup":[1125,153],"./InvitationMockup.vue":[1125,153],"./JustALogoMockup":[1126,154],"./JustALogoMockup.vue":[1126,154],"./KeychainMockup":[1127,155],"./KeychainMockup.vue":[1127,155],"./LetterWithOpenerMockup":[1128,156],"./LetterWithOpenerMockup.vue":[1128,156],"./LogoFilesMockup":[1129,157],"./LogoFilesMockup.vue":[1129,157],"./Mockup":[1102,0,140],"./Mockup.vue":[1102,0,140],"./MockupGallery":[1108,0,138],"./MockupGallery.vue":[1108,0,138],"./MockupGrid":[1109,0,139],"./MockupGrid.vue":[1109,0,139],"./OrangeJuiceMockup":[1130,158],"./OrangeJuiceMockup.vue":[1130,158],"./TShirtMockup":[1131,159],"./TShirtMockup.vue":[1131,159],"./TabletMockup":[1132,160],"./TabletMockup.vue":[1132,160],"./UprightSignMockup":[1133,161],"./UprightSignMockup.vue":[1133,161],"./WomanWithBagMockup":[1134,162],"./WomanWithBagMockup.vue":[1134,162],"./iMacMockup":[1135,163],"./iMacMockup.vue":[1135,163]};function o(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(map)},o.id=1112,t.exports=o},1137:function(t,e,n){"use strict";var o=n(1146),r=n(1110),c=n(1102),l=n(1103),d={components:{PremiumButton:o.a,Card:r.a,Mockup:c.default},props:{logo:{type:Object,required:!0},user:{type:Object,required:!0},mockup:{type:String,default:null},v2:{type:Boolean,default:!1},title:{type:String,required:!0},description:{type:String,default:null},buttonText:{type:String,required:!0},isPremium:{type:Boolean,default:!1},feature:{type:String,default:""},path:{type:String,default:"/dashboard"},externalPath:{type:Boolean,default:!1},src:{type:String,default:""}},computed:{mockupComponent(){if(this.mockup)return()=>n(1112)("./".concat(this.mockup))},v2Mockup(){return this.v2&&Object(l.getMockups)([this.mockup])[0]}}},f=(n(1138),n(7)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("Card",{attrs:{bgColor:"bg-white",title:t.title,content:t.description}},[e("div",{attrs:{slot:"image"},slot:"image"},[t._t("image",(function(){return[!t.v2&&t.mockup?e("div",{staticClass:"w-full mockup-card-img"},[e(t.mockupComponent,{tag:"component",attrs:{logo:t.logo}})],1):t.v2&&t.mockup?e("Mockup",{attrs:{logo:t.logo,mockup:t.v2Mockup,loaderClass:"mockup-card-img rounded-b-none"}}):t.src?e("img",{staticClass:"mockup-card-img object-cover",attrs:{src:t.src,alt:t.title}}):t._e()]}))],2),t._v(" "),e("div",{attrs:{slot:"buttons"},slot:"buttons"},[t.externalPath?e("a",{staticClass:"btn btn-secondary w-full",attrs:{type:"button",target:"_blank",href:t.path}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")]):t.externalPath||t.isPremium?!t.externalPath&&t.isPremium?e("PremiumButton",t._b({staticClass:"btn btn-secondary w-full",on:{continue:function(e){return t.$router.push(t.path)}}},"PremiumButton",{text:t.buttonText,feature:t.feature,user:t.user},!1)):t._e():e("nuxt-link",{staticClass:"btn btn-secondary w-full",attrs:{to:t.path,exact:""}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])],1)])}),[],!1,null,null,null);e.a=component.exports},1138:function(t,e,n){"use strict";n(1106)},1139:function(t,e,n){var o=n(72)((function(i){return i[1]}));o.push([t.i,".mockup-card-img{aspect-ratio:4/3}",""]),o.locals={},t.exports=o},1140:function(t,e,n){"use strict";n(14);var o=n(9);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=n(1137),d=n(42),f=n(269),m=n(21),h=n(1103),v=n(1102);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var _={props:{user:{type:Object,required:!0},logo:{type:Object,required:!0}},components:{MockupCard:l.a,Mockup:v.default},data:()=>({features:f.c}),computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({slug(){return Object(d.d)(this.$route)[2]||"home"},feature(){return this.getFeatureById(this.slug)},mockup(){return Object(h.getMockups)([this.feature.mockup])[0]},relations(){return this.feature.relations.reduce(((t,e)=>{var n=this.getFeatureById(e.slug);return n&&this.featureIsEnabled(n)&&t.push(n),t}),[])}},Object(m.c)({featureIsEnabled:"app/featureIsEnabled",getFeatureById:"app/getFeatureById"}))},x=_,O=(n(1141),n(7)),component=Object(O.a)(x,(function(){var t=this,e=t._self._c;return e("div",[e("header",{staticClass:"flex flex-wrap gap-4 bg-gray-50 full-bleed mb-6 justify-between"},[e("div",{staticClass:"self-end flex items-center justify-center overflow-hidden w-full sm:w-1/2 sm:order-last md:w-full md:order-first lg:w-1/2 lg:order-last"},[e("Mockup",t._b({staticClass:"max-w-sm aspect-ratio"},"Mockup",{logo:t.logo,mockup:t.mockup,showWatermark:!1},!1))],1),t._v(" "),e("div",{staticClass:"pt-4.5 pb-8 sm:pt-7 md:pt-4.5 lg:pt-7 flex-1"},[e("div",[e("h1",{staticClass:"mb-4 text-3xl md:text-4xl text-center sm:text-left md:text-center lg:text-left"},[t._v("\n          "+t._s(t.feature.label)+"\n        ")]),t._v(" "),t._t("description",(function(){return[e("div",{staticClass:"text-sm",domProps:{innerHTML:t._s(t.feature.intro||t.feature.description)}})]})),t._v(" "),t._t("header-sub-content")],2)])]),t._v(" "),t._t("default",(function(){return[e("section",{staticClass:"grid sm:grid-cols-2 md:grid-cols-1 md-lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4"},t._l(t.relations,(function(n,o){return e("MockupCard",t._b({key:o,staticClass:"bg-gray-50",attrs:{title:n.label,"button-text":n.card_button_text?n.card_button_text:n.label}},"MockupCard",c(c({user:t.user,logo:t.logo,v2:!0,isPremium:n.isPremium,path:"/dashboard/".concat(t.logo.id,"/").concat(n.slug),feature:n.product},n),{},{mockup:n.card_mockup}),!1))})),1)]}))],2)}),[],!1,null,"1db00c36",null);e.a=component.exports},1141:function(t,e,n){"use strict";n(1107)},1142:function(t,e,n){var o=n(72)((function(i){return i[1]}));o.push([t.i,".aspect-ratio[data-v-1db00c36]{aspect-ratio:3/2}",""]),o.locals={},t.exports=o},1228:function(t,e,n){var content=n(1280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("10b9794f",content,!0,{sourceMap:!1})},1255:function(t,e,n){"use strict";var o=n(1),r=n(428),c=n.n(r),l=n(97),d=n(279),content=n(79),f={components:{ExternalLinkIcon:c.a,Iconic:d.a,Skeleton:l.a},mixins:[Object(content.d)(["account"],!0),content.a],data:()=>({link:""}),computed:{button(){var t,e;return(null===(t=this.page)||void 0===t||null===(e=t.billing_portal)||void 0===e?void 0:e.button)||null}},mounted(){var t=this;return Object(o.a)((function*(){var{data:data}=yield t.$api.get("/api/v2/subscriptions/portal");t.link=data.url}))()}},m=n(7),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",[t.button&&t.link?t._e():e("Skeleton",{staticClass:"h-9 w-40 mb-0.5"}),t._v(" "),t.button&&t.link?e("a",{staticClass:"btn btn-secondary px-6",attrs:{id:t.button.id,type:"button",href:t.link,target:"_blank"}},[t._v("\n    "+t._s(t.button.text)+"\n\n    "),t._v(" "),e("Iconic",{staticClass:"w-4 h-4 ml-2",attrs:{slug:"arrow-right"}})],1):t._e()],1)}),[],!1,null,null,null);e.a=component.exports},1279:function(t,e,n){"use strict";n(1228)},1280:function(t,e,n){var o=n(72)((function(i){return i[1]}));o.push([t.i,".domain-card-btn[data-v-96a17d74]{max-width:10rem}",""]),o.locals={},t.exports=o},1301:function(t,e,n){var content=n(1375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("0dbb0f6a",content,!0,{sourceMap:!1})},1306:function(t,e,n){"use strict";var o=n(30),content=n(79),r=n(97),c=n(1255),l=n(274),d=n(1),f={components:{Skeleton:r.a},mixins:[Object(content.d)(["package-dash/domains/domain","data/error-toasts"],!0),content.b],props:{domain:{type:Object,required:!0}},data:()=>({submittingRequest:!1,isPublishing:!1,domainSubscription:null,confirmDeleteOpen:!1,loading:!0,waitingForSso:!1}),mounted(){var t=this;return Object(d.a)((function*(){t.loading=!1}))()},computed:{billingButtonText(){return this.contentReady?this.buttons.billing.text:""},manageButtonText(){return this.contentReady?this.buttons.domain.text:""},cardColumns(){return this.contentReady?this.page.domain.domain_card.columns:{}},cardColumnsDetails(){return this.cardColumns&&this.cardColumns.details?this.cardColumns.details:""},cardColumnsExpires(){return this.cardColumns&&this.cardColumns.expires?this.cardColumns.expires:""},buttonData(){return[this.page.domain.domain_card]},updateDate(){return this.domain?this.formatDate(this.domain.date_updated):null},expiryDate(){return this.domain?this.formatDate(this.domain.date_expires):null},domainDetails(){return this.contentReady?this.page.domain.domain_card.rows:{}},domainDetailsStatus(){return this.domainDetails&&this.domainDetails.status?this.domainDetails.status:""},domainDetailsPrivacy(){return this.domainDetails&&this.domainDetails.domain_privacy?this.domainDetails.domain_privacy:""},domainDetailsLastUpdatedOn(){return this.domainDetails&&this.domainDetails.last_updated_on?this.domainDetails.last_updated_on:""},domainDetailsAutoRenew(){return this.domainDetails&&this.domainDetails.auto_renew?this.domainDetails.auto_renew:""},domainPrivacyOnOff(){return this.contentReady?this.page.domain.domain_card.domain_privacy:{}},domainStatus(){return this.domain&&this.domain.status?this.domain.status:""},domainPrivacy(){return this.domain&&this.domain.privacy?this.domainPrivacyOnOff.on:this.domainPrivacyOnOff.off},domainUpdateDate(){return this.domain&&this.updateDate?this.updateDate:""},domainAutoRenew(){return this.domain.auto_renew?this.domainDetailsAutoRenew:this.expiryDate}},methods:{closeDeleteModal(){this.confirmDeleteOpen=!1},handleDeleteClicked(t){t.stopPropagation(),this.confirmDeleteOpen=!0},onManageDomainClicked(t){this.waitingForSso=!0;var{sso:e}=Object(o.a)(this.$api);e()},formatUnixDate(t){return this.formatDate(1e3*t)},formatDate:t=>new Date(t).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}},m=(n(1279),n(7)),h=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",[t.loading?e("Skeleton",{staticClass:"w-full h-80 lg:h-20"}):e("div",{staticClass:"flex flex-col lg:grid grid-cols-4 gap-6 lg:items-center text-xs"},[e("div",{staticClass:"space-y-1"},[e("p",{staticClass:"text-sm font-bold break-words"},[t._v("\n        "+t._s(t.domain&&t.domain.name?t.domain.name:"")+"\n      ")])]),t._v(" "),e("div",{staticClass:"space-y-1"},[e("p",{staticClass:"text-sm font-bold lg:hidden mb-2"},[t._v("\n        "+t._s(t.cardColumnsDetails)+"\n      ")]),t._v(" "),e("p",[t._v("\n        "+t._s(t.domainDetailsStatus)+"\n        "+t._s(t.domainStatus)+"\n      ")]),t._v(" "),e("p",[t._v("\n        "+t._s(t.domainDetailsPrivacy)+"\n        "+t._s(t.domainPrivacy)+"\n      ")]),t._v(" "),e("p",[t._v("\n        "+t._s(t.domainDetailsLastUpdatedOn)+"\n        "+t._s(t.domainUpdateDate)+"\n      ")])]),t._v(" "),e("div",{staticClass:"space-y-1"},[e("p",{staticClass:"text-sm font-bold lg:hidden mb-2"},[t._v("\n        "+t._s(t.cardColumnsExpires)+"\n      ")]),t._v(" "),e("p",[t._v("\n        "+t._s(t.domainAutoRenew)+"\n      ")])]),t._v(" "),e("div",[e("div",{staticClass:"flex justify-center flex-col lg:items-end gap-2"},[e("button",{staticClass:"btn btn-secondary w-full domain-card-btn",attrs:{disabled:t.loading||t.waitingForSso},on:{click:function(e){return t.onManageDomainClicked(t.domain)}}},[t._v("\n          "+t._s(t.manageButtonText)+"\n        ")])])])])],1)}),[],!1,null,"96a17d74",null).exports,v={props:{domains:{type:Array,default:[]},loading:{type:Boolean,default:!1}},data:()=>({waitingForSso:!1}),components:{Skeleton:r.a,BillingPortalLink:c.a,DomainListRow:h,Container:l.a},mixins:[Object(content.d)(["package-dash/domains/domain"],!0)],computed:{cardColumns(){return this.contentReady?this.page.domain_card.columns:{}}}},y=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",[t.loading?e("Skeleton",{staticClass:"w-full h-96 lg:h-48"}):e("Container",{attrs:{showSeparator:!1}},[e("div",{staticClass:"flex justify-between lg:grid grid-cols-4 gap-6 items-center px-6 py-4 text-lg font-bold border-b",attrs:{slot:"header"},slot:"header"},[t.contentReady?e("div",{staticClass:"contents"},[e("p",[t._v(t._s(t.cardColumns.title?t.cardColumns.title:""))]),t._v(" "),e("p",{staticClass:"hidden lg:block"},[t._v("\n          "+t._s(t.cardColumns.details?t.cardColumns.details:"")+"\n        ")]),t._v(" "),e("p",{staticClass:"hidden lg:block"},[t._v("\n          "+t._s(t.cardColumns.expires?t.cardColumns.expires:"")+"\n        ")])]):e("Skeleton",{staticClass:"w-full h-7 col-span-3"})],1),t._v(" "),e("div",{staticClass:"p-6 flex flex-col gap-8"},t._l(t.domains,(function(t){return e("DomainListRow",{key:t.id,attrs:{domain:t}})})),1)])],1)}),[],!1,null,null,null);e.a=y.exports},1374:function(t,e,n){"use strict";n(1301)},1375:function(t,e,n){var o=n(72)((function(i){return i[1]}));o.push([t.i,".content-transition[data-v-1cacf084]{transition:height 1s linear,padding 1s linear}",""]),o.locals={},t.exports=o},1412:function(t,e,n){"use strict";var o=n(424),r=n.n(o),c=n(447),l=n.n(c),d={name:"Accordion",components:{Plus:r.a,Minus:l.a},props:{title:{type:String,required:!0},contents:{type:Array,required:!0}},data:()=>({isOpen:!1}),methods:{toggleIsOpen(){this.isOpen=!this.isOpen}}},f=(n(1374),n(7)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("section",[t._t("title",(function(){return[e("button",{staticClass:"border rounded flex items-center justify-between gap-x-5 py-4 px-5 w-full hover:bg-gray-100",on:{click:t.toggleIsOpen}},[e("h4",{staticClass:"text-dark text-base font-medium text-left mb-0"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),!1===t.isOpen?e("Plus",{staticClass:"w-5 h-5 text-gray-300 flex-shrink-0"}):t._e(),t._v(" "),!0===t.isOpen?e("Minus",{staticClass:"w-5 h-5 text-gray-300 flex-shrink-0"}):t._e()],1)]})),t._v(" "),t._t("content",(function(){return t._l(t.contents,(function(content,n){return e("div",{key:"accordion-".concat(n),class:["text-base","px-3","space-y-3","overflow-hidden",t.isOpen?"h-auto py-4":"h-0 py-0"]},["bullet-list"===content.type?[e("ul",{staticClass:"list-disc mx-5 space-y-3"},t._l(content.body,(function(n){return e("li",{key:n},[t._v("\n            "+t._s(n)+"\n          ")])})),0)]:"number-list"===content.type?[e("ol",{staticClass:"list-decimal mx-5"},t._l(content.body,(function(n){return e("div",{key:n},[e("li",[t._v(t._s(n))])])})),0)]:"paragraphs"===content.type?t._l(content.body,(function(n){return e("div",{key:n},[e("p",[t._v(t._s(n))])])})):t._e()],2)}))}))],2)}),[],!1,null,"1cacf084",null);e.a=component.exports},1495:function(t,e,n){var content=n(1887);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(73).default)("01de91ea",content,!0,{sourceMap:!1})},1886:function(t,e,n){"use strict";n(1495)},1887:function(t,e,n){var o=n(72)((function(i){return i[1]}));o.push([t.i,".step-descriptions p+p[data-v-c652ff9c]{padding-left:1.5rem}.step-descriptions p[data-v-c652ff9c]:not(:last-child){padding-right:1.5rem}",""]),o.locals={},t.exports=o},2015:function(t,e,n){"use strict";n.r(e);n(14);var o=n(1),r=n(9),c=(n(34),n(30)),l=n(21),content=n(79),d=n(1140),f=n(1306),m=n(268),h=n(97),v=n(424),y=n.n(v),_=n(1412),x={props:{sellingPoint:{type:Object,required:!0}},computed:{iconComponent(){if(this.sellingPoint.icon_svg)return()=>n(430)("./".concat(this.sellingPoint.icon_svg,".svg"))}}},O=n(7),k=Object(O.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col justify-center items-center gap-y-4 px-6 py-8 border rounded-lg shadow-xl lg:flex-row lg:gap-x-8"},[e(t.iconComponent,{tag:"component",staticClass:"w-11 h-11 flex-shrink-0 text-enterprise-primary",attrs:{alt:t.sellingPoint.title,"aria-hidden":""}}),t._v(" "),e("h3",{staticClass:"text-xl mb-0 text-center font-bold lg:text-left"},[t._v("\n    "+t._s(t.sellingPoint.title)+"\n  ")]),t._v(" "),e("p",{staticClass:"text-center lg:text-left"},[t._v("\n    "+t._s(t.sellingPoint.description)+"\n  ")])],1)}),[],!1,null,null,null).exports;function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={transition:"fade",components:{FeatureLandingPage:d.a,DomainList:f.a,Skeleton:h.a,PlusIcon:y.a,TextInput:m.a,Accordion:_.a,DomainSellingPoint:k},props:{user:{type:Object,required:!0},logo:{type:Object,required:!0}},data:()=>({loading:!0,query:""}),mixins:[Object(content.d)(["package-dash/domains/domain","features"],!0)],computed:w(w({},Object(l.e)("domains",["domains"])),{},{accordions(){return this.contentReady?this.page.domain.content_below_search.qanda_section.qandas:[]},sellingPoints(){return this.contentReady?this.page.domain.content_below_search.selling_points:[]},stepDescriptions(){if(this.contentReady&&this.$route){var t=this.$route.path.split("/").pop();return this.page.features.features.filter((e=>e.path===t))[0].step_descriptions}return[]}}),mounted(){var t=this;return Object(o.a)((function*(){t.query=t.logo.wordmark,yield t.setUserDomains(),t.loading=!1,t.updateDomainsStatus()}))()},methods:w(w({},Object(l.d)("domains",["setDomains","setQuery"])),{},{handleSearch(){this.query&&this.setQuery(this.query),this.$router.push("/dashboard/".concat(this.$route.params.pkg,"/domains/search"))},updateDomainsStatus(){var t=this;return Object(o.a)((function*(){t.domains.filter((t=>"PROCESSING"===t.status)).length&&(yield t.setUserDomains(),setTimeout((()=>{t.updateDomainsStatus()}),1e3))}))()},setUserDomains(){var t=this;return Object(o.a)((function*(){var{listDomains:e}=Object(c.a)(t.$api),{data:data}=yield e({logo_id:t.logo.id});t.setDomains(data)}))()}})},P=(n(1886),Object(O.a)(j,(function(){var t=this,e=t._self._c;return e("FeatureLandingPage",t._b({},"FeatureLandingPage",{logo:t.logo,user:t.user},!1),[t.loading||t.domains.length>0?e("section",{staticClass:"mb-16"},[t.contentReady?e("h2",{staticClass:"text-3xl mb-4 ml-2 md:ml-6"},[t._v("\n      "+t._s(t.page.domain.domain_card.title)+"\n    ")]):e("Skeleton",{staticClass:"w-40 h-8 mb-4 ml-2 md:ml-6"}),t._v(" "),e("DomainList",{attrs:{domains:t.domains,loading:t.loading}})],1):t._e(),t._v(" "),t.contentReady?e("section",{staticClass:"step-descriptions grid-cols-3 hidden divide-x mt-4 xl:grid",attrs:{slot:"header-sub-content"},slot:"header-sub-content"},t._l(t.stepDescriptions,(function(n){return e("p",{key:n,staticClass:"text-xs py-3"},[t._v("\n      "+t._s(n)+"\n    ")])})),0):t._e(),t._v(" "),e("section",[t.contentReady?e("div",{staticClass:"space-y-20"},[e("section",[e("h2",{staticClass:"text-3xl mb-4 text-center xs:text-left"},[t._v("\n          "+t._s(t.page.domain.domain_search.title)+"\n        ")]),t._v(" "),e("p",{staticClass:"mb-6"},[t._v("\n          "+t._s(t.page.domain.domain_search.text)+"\n        ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap gap-2"},[e("TextInput",{staticClass:"flex-1",attrs:{"input-styles":"form-input-large"},on:{enter:t.handleSearch},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),t._v(" "),e("button",{staticClass:"btn btn-large btn-primary px-10 w-full xs:w-auto",on:{click:t.handleSearch}},[t._v("\n            "+t._s(t.page.domain.domain_search.button_text)+"\n          ")])],1)]),t._v(" "),e("section",[e("h2",{staticClass:"text-center text-3xl mb-6 xs:text-left"},[t._v("\n          "+t._s(t.page.domain.content_below_search.title)+"\n        ")]),t._v(" "),e("p",{staticClass:"mb-8"},[t._v("\n          "+t._s(t.page.domain.content_below_search.intro_text)+"\n        ")]),t._v(" "),e("div",{staticClass:"space-y-11"},t._l(t.sellingPoints,(function(t){return e("DomainSellingPoint",{key:t.id,attrs:{sellingPoint:t}})})),1)]),t._v(" "),e("section",[e("h2",{staticClass:"text-center text-3xl mb-8 xs:text-left"},[t._v("\n          "+t._s(t.page.domain.content_below_search.qanda_section.title)+"\n        ")]),t._v(" "),e("div",{staticClass:"space-y-6"},t._l(t.accordions,(function(t){return e("Accordion",{key:t.key,attrs:{title:t.question,contents:t.answers}})})),1)]),t._v(" "),e("section",{staticClass:"bg-gray-50 full-bleed pt-10 pb-14 lg:pt-10 lg:pb-16"},[e("h2",{staticClass:"text-3xl mb-8 text-center xs:text-left"},[t._v("\n          "+t._s(t.page.domain.domain_search.bottom_title)+"\n        ")]),t._v(" "),e("div",{staticClass:"flex flex-wrap gap-2"},[e("TextInput",{staticClass:"flex-1",attrs:{"input-styles":"form-input-large"},on:{enter:t.handleSearch},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),t._v(" "),e("button",{staticClass:"btn btn-large btn-primary px-10 w-full xs:w-auto",on:{click:t.handleSearch}},[t._v("\n            "+t._s(t.page.domain.domain_search.button_text)+"\n          ")])],1)])]):e("div",{staticClass:"space-y-6"},[e("Skeleton",{staticClass:"w-40 h-8 mb-4"}),t._v(" "),e("Skeleton",{staticClass:"w-48 h-6"}),t._v(" "),e("Skeleton",{staticClass:"w-60 h-12"})],1)])])}),[],!1,null,"c652ff9c",null));e.default=P.exports},424:function(t,e,n){n(14);var o=n(27),r=n(28),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render(t,e){var{_c:n,_v:d,data:data,children:f=[]}=e,{class:m,staticClass:h,style:style,staticStyle:v,attrs:y={}}=data,_=r(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[m,h],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor"},y)},_),f.concat([n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"}})]))}}},428:function(t,e,n){n(14);var o=n(27),r=n(28),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render(t,e){var{_c:n,_v:d,data:data,children:f=[]}=e,{class:m,staticClass:h,style:style,staticStyle:v,attrs:y={}}=data,_=r(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[m,h],style:[style,v],attrs:Object.assign({fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},y)},_),f.concat([n("path",{attrs:{d:"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}}),n("path",{attrs:{d:"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"}})]))}}},447:function(t,e,n){n(14);var o=n(27),r=n(28),c=["class","staticClass","style","staticStyle","attrs"];function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}t.exports={functional:!0,render(t,e){var{_c:n,_v:d,data:data,children:f=[]}=e,{class:m,staticClass:h,style:style,staticStyle:v,attrs:y={}}=data,_=r(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[m,h],style:[style,v],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor"},y)},_),f.concat([n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 12h-15"}})]))}}}}]);
//# sourceMappingURL=3186a57.modern.js.map