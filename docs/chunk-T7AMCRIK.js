import{a as R}from"./chunk-IVTMWKBG.js";import{a as j}from"./chunk-DHNIFRC3.js";import{l as D}from"./chunk-AMXSIHDB.js";import{a as $}from"./chunk-QC7UIFZV.js";import{h as V}from"./chunk-2NUI7P3E.js";import{h as B,n as Y}from"./chunk-XJYRAHVJ.js";import{$ as p,Db as L,Eb as d,Fb as m,La as W,Mb as P,Nb as O,Ob as A,Qa as c,Ra as k,Tb as S,Va as y,Vb as T,ba as b,cb as w,eb as h,gb as I,ib as E,jb as f,ka as u,kb as x,la as _,lb as v,mb as o,nb as a,ob as C,rb as F,vb as g,wb as l}from"./chunk-VJU5KXBJ.js";var z=r=>["/product-details",r],G=()=>[1,2,3,4,5];function N(r,n){if(r&1&&C(0,"i",16),r&2){let i=n.$implicit,e=l().$implicit;I("rating-color",i<=e.ratingsAverage)}}function U(r,n){if(r&1){let i=F();o(0,"div",3)(1,"div",4)(2,"i",5),g("click",function(){let t=u(i).$implicit,s=l(2);return _(s.removeFromWishlist(t._id))}),a(),o(3,"header",6),C(4,"img",7),o(5,"h3",8),d(6),S(7,"cutText"),a(),o(8,"h4",9),d(9),a(),o(10,"div",10)(11,"span",11),d(12),S(13,"currency"),a(),o(14,"p",12),x(15,N,1,2,"i",13,f),o(17,"span",14),d(18),a()()()(),o(19,"footer")(20,"button",15,0),g("click",function(){let t=u(i).$implicit,s=L(21),M=l(2);return _(M.addToCart(t._id,s))}),d(22," +Add To Cart "),a()()()()}if(r&2){let i=n.$implicit,e=l(2);c(2),h("ngClass",e.idsOfProductsYouLikedThem.includes(i._id)?"fa-solid":"fa-regular"),c(),h("routerLink",A(15,z,i._id)),c(),h("src",i.imageCover,W)("alt",i.title)("title",i.title),c(2),m(T(7,9,i.title,3)),c(3),m(i.category.name),c(3),m(T(13,12,i.price," EGP ")),c(3),v(O(17,G)),c(3),m(i.ratingsAverage)}}function q(r,n){if(r&1&&(o(0,"section",1)(1,"h2"),d(2,"Popular Products"),a(),o(3,"div",2),x(4,U,23,18,"div",3,f),a()()),r&2){let i=l();c(4),v(i.products)}}var rt=(()=>{let n=class n{constructor(e){this.toastr=e,this._WishlistService=p(j),this._Renderer2=p(y),this._CartService=p($),this.products=[],this.idsOfProductsYouLikedThem=[]}ngOnInit(){this.getWishlistItems()}getWishlistItems(){this._WishlistService.getWishlistItems().subscribe({next:e=>{this.products=e.data,this.idsOfProductsYouLikedThem=this.products.map(t=>t._id),this._WishlistService.wishlistLength.next(e.count)}})}addToCart(e,t){this._Renderer2.setAttribute(t,"disabled","true"),this._CartService.addToCart(e).subscribe({next:s=>{this.toastr.success(s.message),this._Renderer2.removeAttribute(t,"disabled"),this._CartService.cartItemsLength.next(s.numOfCartItems)},error:s=>{this._Renderer2.removeAttribute(t,"disabled"),console.error("Error:",s)}})}addToWishlist(e){this._WishlistService.addToWishlist(e).subscribe({next:t=>{this.toastr.success(t.message),this.idsOfProductsYouLikedThem=t.data},error:t=>{console.error("Error:",t)}})}removeFromWishlist(e){this._WishlistService.removeFromWishlist(e).subscribe({next:t=>{this.toastr.success(t.message),this.idsOfProductsYouLikedThem=t.data,this.products=this.products.filter(s=>this.idsOfProductsYouLikedThem.includes(s._id)),this._WishlistService.wishlistLength.next(this.products.length)},error:t=>{console.error("Error:",t)}})}};n.\u0275fac=function(t){return new(t||n)(k(D))},n.\u0275cmp=b({type:n,selectors:[["app-wishlist"]],standalone:!0,features:[P],decls:1,vars:1,consts:[["addBtn",""],[1,"py-4"],[1,"row","g-4","justify-content-center"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-2"],[1,"product","h-100"],[1,"fa-heart","fs-3","heart-icon",3,"click","ngClass"],["role","button",3,"routerLink"],[1,"w-100",3,"src","alt","title"],[1,"h6"],[1,"h6","text-main"],[1,"d-flex","align-items-center","justify-content-between"],[1,"small"],[1,"mb-0"],[1,"fas","fa-star",3,"rating-color"],[1,"text-muted","ms-1"],[1,"main-btn","w-100","py-2",3,"click"],[1,"fas","fa-star"]],template:function(t,s){t&1&&w(0,q,6,0,"section",1),t&2&&E(s.products.length?0:-1)},dependencies:[V,R,Y,B]});let r=n;return r})();export{rt as WishlistComponent};
