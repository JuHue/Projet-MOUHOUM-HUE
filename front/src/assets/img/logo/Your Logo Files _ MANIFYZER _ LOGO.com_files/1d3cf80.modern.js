(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{1316:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var o=c(1),n=c(15),r=function(){var e=Object(o.a)((function*(data){n.a.debug("Pushing dataLayer event:",data),window.dataLayer.push(data)}));return function(t){return e.apply(this,arguments)}}()},1988:function(e,t,c){"use strict";c.r(t);var o=c(112),n=c(139),r=c(1316);function m(e,t){Object(r.a)({event:e,ecommerce:{items:t}})}n.a.$on(o.a.EcommerceImpressions,(e=>{var t=!1,c=[];e.forEach(((e,o)=>{c.push(e),t=!0,(o+1)%20==0&&(m("view_item_list",c),c=[],t=!1)})),t&&m("view_item_list",c)})),n.a.$on(o.a.EcommerceClicked,(e=>m("select_item",e))),n.a.$on(o.a.EcommerceDetailView,(e=>m("view_item",e))),n.a.$on(o.a.EcommerceAddToCart,(e=>m("add_to_cart",e))),n.a.$on(o.a.EcommerceRemoveFromCart,(e=>{m("remove_from_cart",e)})),n.a.$on(o.a.EcommerceCheckout,(e=>m("begin_checkout",e))),n.a.$on(o.a.EcommercePurchase,(e=>{Object(r.a)({event:"purchase",ecommerce:{purchase:e}})})),n.a.$on(o.a.EcommerceAddToWishlist,(e=>{m("add_to_wishlist",e)})),n.a.$on(o.a.EcommerceViewCart,(e=>m("view_cart",e))),n.a.$on(o.a.EcommerceSelectContent,(e=>{var{list:t="editor",type:c,id:o}=e;return Object(r.a)({event:"select_content",ecommerce:{content_type:c,item_id:o,list:t}})}))}}]);
//# sourceMappingURL=1d3cf80.modern.js.map