(this.webpackJsonpvca=this.webpackJsonpvca||[]).push([[0],{29:function(e){e.exports=JSON.parse('{"alpha":{"start":0.25,"end":0},"scale":{"start":0.04,"end":0.29,"minimumScaleMultiplier":1},"color":{"start":"#85888d","end":"#100f0c"},"speed":{"start":100,"end":200,"minimumSpeedMultiplier":1},"acceleration":{"x":10,"y":-30},"maxSpeed":200,"startRotation":{"min":265,"max":270},"noRotation":false,"rotationSpeed":{"min":8,"max":0},"lifetime":{"min":0.5,"max":3.05},"blendMode":"normal","frequency":0.0005,"emitterLifetime":-1,"maxParticles":300,"pos":{"x":0,"y":0},"addAtBack":true,"spawnType":"point"}')},33:function(e,t,n){e.exports=n(55)},38:function(e,t,n){},39:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(25),o=n.n(i),c=(n(38),n(31)),l=n(3),u=(n(39),n(19),n(26),n(1));var s,f,d,m=function(e,t){var n=u.Loader.shared;n.resources[e]?t(n.resources[e]):n.add(e).load((function(n,a){t(a[e])}))},v=n(2);!function(e){e.tilelayer="tilelayer",e.objectgroup="objectgroup"}(s||(s={})),function(e){e.orthagonal="orthagonal",e.isometric="isometric",e.staggered="staggered",e.hexagonal="hexagonal"}(f||(f={})),function(e){e.rightUp="right-up",e.rightDown="right-down",e.leftUp="left-up",e.leftDown="left-down"}(d||(d={}));var p=n(18),h=n(21),g=function(e){var t=Object(a.useState)({}),n=Object(l.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(),c=Object(l.a)(o,2),u=c[0],s=c[1];return Object(a.useEffect)((function(){if(u){var t=w(u,r);if(t){var n=t.name,a=e(t);m("".concat(a),(function(e){if(e.error)throw new Error("Loading ".concat(a,"\n").concat(e.error));var t=Object(h.a)(Object(h.a)({},r),{},Object(p.a)({},n,e));i(t)}))}}}),[u,e,r]),{loadComplete:!!u&&void 0===w(u,r),loadTilesets:function(e){s(e)},tilesetsTextures:r}},w=function(e,t){return e.find((function(e){return!t[e.name]}))},b=n(28),y=Object(a.forwardRef)((function(e,t){var n=Object(v.useApp)();return window.PIXI=u,r.a.createElement(O,Object.assign({app:n},e,{ref:t}))})),O=Object(v.PixiComponent)("Viewport",{create:function(e){var t=new b.a({screenWidth:e.screenWidth,screenHeight:e.screenHeight,worldWidth:e.worldWidth,worldHeight:e.worldHeight,ticker:e.app.ticker});t.on("clicked",(function(t){e.onClick&&e.onClick(t)}));var n=e.minScale,a=void 0===n?.3:n,r=e.maxScale,i=void 0===r?1:r;return t.drag().pinch().wheel().clamp({direction:"all"}).setZoom(.4).clampZoom({minScale:a,maxScale:i}).decelerate(),t}}),E=y,j=function(e,t,n){var a=x(t,n)+64*e[0]+64*-e[1],r=64*(e[0]+e[1])/2+64+128;return new u.Point(a,r)},x=function(e,t){return 32*(t-e)+128*(t+e)/2/2};window.PIXI=u,n(51);var k=Object(v.PixiComponent)("FloorTileLayer",{create:function(e){return new window.PIXI.tilemap.CompositeRectTileLayer(0,[e.texture])},applyProps:function(e,t,n){var a=n.layer,r=n.tileset,i=n.verticalTiles,o=n.horizontalTiles,c=n.spritesheet;if(a.data)for(var l=function(t){if(a.data[t]>0){var n=[t%o,Math.floor(t/o)],l=j(n,o,i),u=r.tiles.find((function(e){return e.id===a.data[t]-r.firstgid})),s=null===u||void 0===u?void 0:u.image.substr((null===u||void 0===u?void 0:u.image.lastIndexOf("/"))+1);e.addFrame(c.textures[s],l.x-64,l.y-64)}},u=0;u<a.data.length;u++)l(u)}}),S=n(15),C=function(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(),i=Object(a.useState)(e.position||new u.Point),o=Object(l.a)(i,2),c=o[0],s=(o[1],e.bounce?"".concat("/vca","/images/ui/marker.svg"):"".concat("/vca","/images/ui/marker-green.svg"));Object(a.useEffect)((function(){S.a.from(t.current,{duration:1,ease:"elastic.out(2, 0.5)",pixi:{visible:!1,scale:.1}}).delay(e.delay||0)}),[e.delay]),Object(a.useEffect)((function(){var n;return!1!==e.bounce&&(n=S.a.to(t.current,{duration:.5,yoyo:!0,repeat:-1,pixi:{y:"-=40"}}).delay(1+Math.random())),function(){var e;null===(e=n)||void 0===e||e.kill()}}),[e.bounce]);var f=function(e){},d=function(){n.current=void 0},m=function(){};return r.a.createElement(v.Sprite,Object.assign({},e,{anchor:[.5,.5],position:c,ref:t,interactive:!0,image:s,mousedown:f,touchstart:f,mouseup:d,mouseupoutside:d,mousemove:m,touchmove:m}))},P=function(e,t){for(var n,a=t.length-1;a>=0&&!((n=t[a]).firstgid<=e);a--);return n},A=n(29),T=n(32),M=n(30),D=Object(v.PixiComponent)("ParticleEmitter",{create:function(){return new u.ParticleContainer},applyProps:function(e,t,n){var a=n.image,r=n.config,i=Object(T.a)(n,["image","config"]);Object(v.applyDefaultProps)(e,t,i);var o=this._emitter;if(!o){o=new M.a(e,[u.Texture.from(a)],r);var c=performance.now();o.emit=!0,function e(){o.raf=requestAnimationFrame(e);var t=performance.now();o.update(3e-4*(t-c)),c=t}()}this._emitter=o},willUnmount:function(){this._emitter&&(this._emitter.emit=!1,cancelAnimationFrame(this._emitter.raf))}}),N=function(e){var t=e.x,n=void 0===t?0:t,a=e.y,i=void 0===a?0:a;return r.a.createElement(D,{name:"smoke",x:n,y:i,image:"".concat("/vca","/effects/smokeparticle.png"),config:A,pivot:[-64,0]})},I=function(e){var t=e.data,n=e.mapData,a=e.tilesetsTextures,i=e.found,o=e.onClick;if(t.polygon){var c=[t.x/64,t.y/64],u=t.polygon.reduce((function(e,t){return e.push(t.y+t.x),e.push(t.y/2-t.x/2),e}),[]);return r.a.createElement(v.Graphics,{key:"".concat(t.type).concat(t.name),draw:function(e){e.beginFill(12245589),e.drawPolygon(u),e.endFill()},position:j(c,n.width,n.height),pivot:[64,32]})}if(t.gid){var s=t.x,f=t.y,d=t.gid,m=[s/64-1,f/64-1],p=536870911&d,h=P(p,n.tilesets);if(!h||!h.tiles||0===d)return null;var g=0!==(1073741824&d),w=[1,1];0!==(2147483648&d)&&(w[0]*=-1),g&&(w[1]*=-1);var b=h.tiles.find((function(e){return e.id===p-h.firstgid}));if(!b)return null;var y=b.image.split("/"),O=Object(l.a)(y,3),E=(O[0],O[1]),x=O[2];return a[E]||console.warn("Could not find spritesheet ".concat(E," ").concat(a)),a[E].textures[x]||console.warn("Could not find texture ".concat(E," ").concat(x)),r.a.createElement(v.Sprite,{name:"".concat(t.name,": ").concat(s,",").concat(f," (").concat(x,")"),scale:w,texture:a[E].textures[x],anchor:[0,1],pivot:[64,0],position:j(m,n.width,n.height),pointerdown:function(){return o(t.name)},interactive:!!t.name},R(t.properties),i&&r.a.createElement(v.Sprite,{image:"".concat("/vca","/images/ui/check.svg"),scale:.8,anchor:[0,1],pivot:[64,0]}))}return null},R=function(e){if(!e)return null;var t,n,a=e.find((function(e){return"offset"===e.name}));if(a){var i=a.value.split(","),o=Object(l.a)(i,2);t=o[0],n=o[1]}return r.a.createElement(N,{x:t,y:n})},L=window.innerWidth,W=window.innerHeight;var _=function(e){var t=e.content,n=e.foundSituations,i=e.onSituationClick,o=t.mapJson,c=Object(a.useState)(),f=Object(l.a)(c,2),d=f[0],p=f[1];u.settings.ROUND_PIXELS=!0;var h=g(B),w=h.loadComplete,b=h.loadTilesets,y=h.tilesetsTextures;Object(a.useEffect)((function(){u.settings.SCALE_MODE=u.SCALE_MODES.NEAREST,m("".concat("/vca","/").concat(o),(function(e){p(e.data)}))}),[o]),Object(a.useEffect)((function(){d&&b(d.tilesets)}),[b,d]);var O=64*(((null===d||void 0===d?void 0:d.width)||1)+((null===d||void 0===d?void 0:d.height)||1)),x=32*(((null===d||void 0===d?void 0:d.width)||1)+((null===d||void 0===d?void 0:d.height)||1))+128,S=Object(a.useRef)(null);if(Object(a.useEffect)((function(){S.current&&S.current.moveCenter(O/2,x/2)}),[d,x,O,y]),!w||!d)return r.a.createElement("div",null,"Loading...");var A=function(e,t,n){return e.map((function(e,a){var i=536870911&e,o=P(i,d.tilesets);if(!o||!o.tiles||0===e)return null;var c=d.width,u=a%c,s=Math.floor(a/c),f=0!==(1073741824&e),m=[1,1];0!==(2147483648&e)&&(m[0]*=-1),f&&(m[1]*=-1);var p=o.tiles.find((function(e){return e.id===i-o.firstgid}));if(!p)return null;var h=p.image.split("/"),g=Object(l.a)(h,3),w=(g[0],g[1]),b=g[2];return y[w]||console.warn("Could not find spritesheet ".concat(w," ").concat(y)),y[w].textures[b]||console.warn("Could not find texture ".concat(w," ").concat(b)),r.a.createElement(v.Sprite,{key:a,name:"".concat(t.name,": ").concat(u,",").concat(s," (").concat(b,")"),scale:m,texture:y[w].textures[b],anchor:[0,1],pivot:[64,0],position:j([u,s],d.width,d.height),zIndex:100*a+n})}))},T=function(e){return e.map((function(e,t){var a=n.indexOf(e.name)>-1;return r.a.createElement(I,{data:e,key:"".concat(e.type).concat(e.name).concat(t),found:a,tilesetsTextures:y,mapData:d,onClick:i})}))},M=function(t,n,a){var i=.5*a,o=j(n.location,d.width,d.height);return r.a.createElement(C,{position:o,pointertap:function(){return function(t,n){console.log(t),e.onSituationClick(t)}(t)},delay:i,bounce:!0,key:t,name:t})},D={sharedLoader:!0,backgroundColor:H(null===d||void 0===d?void 0:d.backgroundcolor)};return r.a.createElement(v.Stage,{width:L,height:W,className:"background",options:D},r.a.createElement(E,{worldWidth:O,worldHeight:x,screenWidth:L,screenHeight:W,ref:S},function(e){if(!e)return console.warn("No layer with name 'floor' found!"),null;var t=G(e).find(Boolean);if(!t)return console.warn("Layer with name 'floor' is empty?"),null;var n=P(536870911&t,d.tilesets);if(!n)return console.warn("No tileset found for floor layer. Huh?"),null;var a=y[n.name];return u.utils.clearTextureCache(),a.spritesheet?r.a.createElement(k,{texture:a.spritesheet._texture,verticalTiles:d.height,horizontalTiles:d.width,layer:e,tileset:n,spritesheet:a.spritesheet}):(console.warn("No texture loaded found for floor layer. Was looking for ".concat(n.name)),null)}(d.layers.find((function(e){return"floor"===e.name}))),r.a.createElement(v.Container,{sortableChildren:!0},d.layers.filter((function(e){return e.visible&&"floor"!==e.name&&e.type===s.tilelayer})).map((function(e,t){var n=G(e);return A(n,e,t)}))),function(e){return e.filter((function(e){return e.visible&&e.type===s.objectgroup})).map((function(e){return T(e.objects)}))}(d.layers),Object.entries(t.scenarios).map((function(e,t){var n=Object(l.a)(e,2),a=n[0],r=n[1];return M(a,r,t)}))))},B=function(e){return"".concat("/vca","/maps/tilesets/").concat(e.name,".json")},H=function(e){if(e)return parseInt(e.substring(1),16)},G=function(e){var t=e.data;return"string"!==typeof t?t:(e.encoding,e.compression,[])};n(52);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var J=r.a.createElement("defs",null,r.a.createElement("style",null,".a{fill:#fff;}.a,.b{stroke:#283583;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.75px;}.b{fill:none;}")),U=r.a.createElement("title",null,"Back"),z=r.a.createElement("circle",{className:"a",cx:15.02,cy:15.02,r:14.65}),q=r.a.createElement("path",{className:"b",d:"M11.64,16",transform:"translate(-0.97 -0.93)"}),Z=r.a.createElement("path",{className:"b",d:"M11.63,16",transform:"translate(-0.97 -0.93)"}),V=r.a.createElement("path",{className:"b",d:"M20.38,22.88",transform:"translate(-0.97 -0.93)"}),$=r.a.createElement("line",{className:"b",x1:19.39,y1:8.16,x2:10.65,y2:15.02}),K=r.a.createElement("line",{className:"b",x1:19.39,y1:21.98,x2:10.65,y2:15.11}),Q=function(e){var t=e.svgRef,n=e.title,a=X(e,["svgRef","title"]);return r.a.createElement("svg",F({width:30.04,height:30.04,viewBox:"0 0 30.04 30.04",ref:t},a),J,void 0===n?U:n?r.a.createElement("title",null,n):null,z,q,Z,V,$,K)},Y=r.a.forwardRef((function(e,t){return r.a.createElement(Q,F({svgRef:t},e))})),ee=(n.p,function(e){var t=e.gameDataReceived,n=e.disableBackButton,i=function(e){if(window.hasOwnProperty("webkit")&&window.webkit.hasOwnProperty("messageHandlers")){var t=JSON.stringify(e);webkit.messageHandlers.cordova_iab.postMessage(t)}else window.parent.postMessage(e,"*")};return Object(a.useEffect)((function(){window.setGameData=function(e){i({type:"setGameData",data:e})},window.GAMEDATA=null,window.getGameData=function(){return window.GAMEDATA},window.addEventListener("message",(function(e){e.data.hasOwnProperty("userId")&&(window.GAMEDATA=e.data,t(e.data))}),!1)}),[t]),!0===n?null:r.a.createElement("div",{className:"close"},r.a.createElement(Y,{onClick:function(){i({type:"exit"})}}))}),te=n(57),ne=(n(53),function(e){return r.a.createElement("div",{className:"finder-box"},"".concat(e.content.instruction," (").concat(e.content.situations.length-e.foundSituations.length,")"))}),ae=(n(54),function(e){var t=e.onClose,n=e.content,i=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;console.log("hi"),null===i||void 0===i||null===(e=i.current)||void 0===e||e.addEventListener("load",(function(){var e,t;null===i||void 0===i||null===(e=i.current)||void 0===e||null===(t=e.contentWindow)||void 0===t||t.postMessage(n.data,"*")}),!0),window.addEventListener("message",(function(e){switch(e.data.type){case"setGameData":break;case"exit":t&&t()}}),!0)}),[n.data,t]),r.a.createElement("iframe",{src:n.url,ref:i,title:n.url,className:"iframe-content"})});te.a.registerPIXI(PIXI),S.a.registerPlugin(te.a);var re=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=(t[0],t[1],Object(a.useState)()),i=Object(l.a)(n,2),o=i[0],u=i[1],s=Object(a.useState)([]),f=Object(l.a)(s,2),d=f[0],m=f[1],v=Object(a.useState)(),p=Object(l.a)(v,2),h=p[0],g=p[1],w=function(e){u(e.content)};return Object(a.useEffect)((function(){window.GAME_DATA||fetch("".concat("/vca","/config/data.json")).then((function(e){e.json().then((function(e){w(e)}))}))}),[]),Object(a.useEffect)((function(){(null===o||void 0===o?void 0:o.finder)&&d.length===o.finder.situations.length&&g(o.finder.final)}),[o,d]),r.a.createElement("div",{className:"App"},r.a.createElement(ee,{gameDataReceived:w,disableBackButton:!!h}),o&&r.a.createElement(_,{content:o,onSituationClick:function(e){-1===d.indexOf(e)&&m([].concat(Object(c.a)(d),[e]))},foundSituations:d}),(null===o||void 0===o?void 0:o.finder)&&r.a.createElement(ne,{content:o.finder,foundSituations:d}),h&&r.a.createElement(ae,{content:h,onClose:function(){g(void 0)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.4aa5e1d9.chunk.js.map