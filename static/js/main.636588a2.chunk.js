(this.webpackJsonpvca=this.webpackJsonpvca||[]).push([[0],{27:function(e,t,n){e.exports=n(45)},32:function(e,t,n){},33:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(23),c=n.n(o),i=(n(32),n(9)),l=(n(33),n(17),n(24),n(0));var s=function(e,t){var n=l.Loader.shared;n.resources[e]?t(n.resources[e]):n.add(e).load((function(n,a){t(a[e])}))},u=n(10),d=n(15),f=n(19),m=function(e){var t=Object(a.useState)({}),n=Object(i.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(),l=Object(i.a)(c,2),u=l[0],m=l[1];return Object(a.useEffect)((function(){if(u){var t=v(u,r);if(t){var n=t.name,a=e(t);s("".concat(a),(function(e){e.error&&console.error(e.error);var t=Object(f.a)(Object(f.a)({},r),{},Object(d.a)({},n,e.textures));o(t)}))}}}),[u,e,r]),{loadComplete:!!u&&void 0===v(u,r),loadTilesets:function(e){m(e)},tilesetsTextures:r}},v=function(e,t){return e.find((function(e){return!t[e.name]}))},h=n(26),p=Object(a.forwardRef)((function(e,t){var n=Object(u.useApp)();return r.a.createElement(g,Object.assign({app:n},e,{ref:t}))})),g=Object(u.PixiComponent)("Viewport",{create:function(e){var t=new h.a({screenWidth:e.screenWidth,screenHeight:e.screenHeight,worldWidth:e.worldWidth,worldHeight:e.worldHeight,ticker:e.app.ticker});t.on("clicked",(function(t){e.onClick&&e.onClick(t)}));var n=e.minScale,a=void 0===n?.5:n,r=e.maxScale,o=void 0===r?1:r;return t.drag().pinch().wheel().clamp({direction:"all"}).clampZoom({minScale:a,maxScale:o}).decelerate(),t}}),j=p;var b=function(e){var t=e.jsonPath,n=Object(a.useState)(),o=Object(i.a)(n,2),c=o[0],d=o[1],f=m(w),v=f.loadComplete,h=f.loadTilesets,p=f.tilesetsTextures;Object(a.useEffect)((function(){l.settings.SCALE_MODE=l.SCALE_MODES.NEAREST,s("".concat("/vca","/").concat(t),(function(e){d(e.data)}))}),[t]),Object(a.useEffect)((function(){c&&h(c.tilesets)}),[h,c]);var g=function(e){var t=128*(e[0]-e[1])/2+128*c.width/2,n=64*(e[0]+e[1])/2+64+128;return new l.Point(t,n)},b=128*((null===c||void 0===c?void 0:c.width)||1),O=64*((null===c||void 0===c?void 0:c.height)||1)+128,S=Object(a.useRef)(null);if(Object(a.useEffect)((function(){S.current&&c&&(S.current.moveCenter(b/2,O/2),console.log("hi"))}),[c,O,b]),!v||!c)return r.a.createElement("div",null,"Loading...");var k=function(e){return e.map((function(e,t){var n=E(e,c.tilesets);if(!n||!n.tiles)return null;var a=c.width,o=t%a,l=Math.floor(t/a),s=n.tiles.find((function(t){return t.id===e-n.firstgid}));if(!s)return null;var d=s.image.split("/"),f=Object(i.a)(d,3),m=(f[0],f[1]),v=f[2];return p[m]||console.warn("Could not find spritesheet ".concat(m," ").concat(p)),p[m][v]||console.warn("Could not find texture ".concat(m," ").concat(v)),r.a.createElement(u.Sprite,{key:t,name:"".concat(o,",").concat(l),texture:p[m][v],anchor:[0,1],pivot:[64,0],position:g([o,l])})}))};return r.a.createElement(u.Stage,{width:1280,height:720,className:"background",options:{sharedLoader:!0,backgroundColor:16777215}},r.a.createElement(j,{worldWidth:b,worldHeight:O,screenWidth:1280,screenHeight:720,ref:S},c.layers.filter((function(e){return e.visible})).map((function(e){return r.a.createElement(u.Container,{key:e.name,name:e.name},k(e.data))}))))},w=function(e){return"".concat("/vca","/maps/tilesets/").concat(e.name,".json")},E=function(e,t){for(var n,a=t.length-1;a>=0&&!((n=t[a]).firstgid<=e);a--);return n};var O=function(){var e=Object(a.useState)("maps/testmap2.json"),t=Object(i.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("select",{value:n,onChange:function(e){return o(e.currentTarget.value)}},r.a.createElement("option",null,"maps/testmap1.json"),r.a.createElement("option",null,"maps/testmap2.json")),r.a.createElement(b,{jsonPath:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.636588a2.chunk.js.map