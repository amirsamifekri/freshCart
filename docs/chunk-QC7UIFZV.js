import{u as n}from"./chunk-XJYRAHVJ.js";import{V as o,_ as a,k as i}from"./chunk-VJU5KXBJ.js";var p=(()=>{let e=class e{constructor(t){this._HttpClient=t,this.cartItemsLength=new i(0),this.baseUrl="https://ecommerce.routemisr.com/api/v1"}addToCart(t){return this._HttpClient.post(`${this.baseUrl}/cart`,{productId:t})}getCartItems(){return this._HttpClient.get(`${this.baseUrl}/cart`)}removeItemFromCart(t){return this._HttpClient.delete(`${this.baseUrl}/cart/${t}`)}updateProductCount(t,r){return this._HttpClient.put(`${this.baseUrl}/cart/${r}`,{count:t})}deleteCart(){return this._HttpClient.delete(`${this.baseUrl}/cart`)}checkOut(t,r){return this._HttpClient.post(`${this.baseUrl}/orders/checkout-session/${t}?url=https://localhost:4200`,{shippingAddress:r})}};e.\u0275fac=function(r){return new(r||e)(a(n))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{p as a};
