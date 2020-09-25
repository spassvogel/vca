(this.webpackJsonpvca=this.webpackJsonpvca||[]).push([[0],{167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a,r,c,o=n(0),i=n.n(o),l=n(54),s=n.n(l),u=(n(68),n(26)),f=n(60),m=n(18),d=n(9),v=n(11);!function(e){e.tilelayer="tilelayer",e.objectgroup="objectgroup"}(a||(a={})),function(e){e.orthagonal="orthagonal",e.isometric="isometric",e.staggered="staggered",e.hexagonal="hexagonal"}(r||(r={})),function(e){e.rightUp="right-up",e.rightDown="right-down",e.leftUp="left-up",e.leftDown="left-down"}(c||(c={}));var p=n(6),b=n(56),g=Object(o.forwardRef)((function(e,t){var n=Object(v.useApp)();return window.PIXI=p,i.a.createElement(h,Object.assign({app:n},e,{ref:t}))})),h=Object(v.PixiComponent)("Viewport",{create:function(e){var t=new b.a({screenWidth:e.screenWidth,screenHeight:e.screenHeight,worldWidth:e.worldWidth,worldHeight:e.worldHeight,ticker:e.app.ticker});t.on("clicked",(function(t){e.onClick&&e.onClick(t)}));var n=e.minScale,a=void 0===n?.2:n,r=e.maxScale,c=void 0===r?1:r;return t.drag().pinch().wheel().clamp({direction:"all"}).setZoom(.2).clampZoom({minScale:a,maxScale:c}).decelerate(),t}}),E=g,O=function(e,t,n){var a=w(t,n)+64*e[0]+64*-e[1],r=64*(e[0]+e[1])/2+64+128;return new p.Point(a,r)},w=function(e,t){return 32*(t-e)+128*(t+e)/2/2};window.PIXI=p,n(78);var x=Object(v.PixiComponent)("FloorTileLayer",{create:function(e){return new window.PIXI.tilemap.CompositeRectTileLayer(0,[e.texture])},applyProps:function(e,t,n){var a=n.layer,r=n.tileset,c=n.verticalTiles,o=n.horizontalTiles,i=n.spritesheet;if(a.data)for(var l=function(t){if(a.data[t]>0){var n=[t%o,Math.floor(t/o)],l=O(n,o,c),s=r.tiles.find((function(e){return e.id===a.data[t]-r.firstgid})),u=null===s||void 0===s?void 0:s.image.substr((null===s||void 0===s?void 0:s.image.lastIndexOf("/"))+1);e.addFrame(i.textures[u],l.x-64,l.y-64)}},s=0;s<a.data.length;s++)l(s)}}),y=n(20),j=function(e){var t=Object(o.useRef)(null),n=Object(o.useRef)(),a=Object(o.useState)(e.position||new p.Point),r=Object(d.a)(a,2),c=r[0],l=(r[1],e.bounce?"".concat("/vca","/images/ui/marker-red.svg"):"".concat("/vca","/images/ui/marker-green.svg"));Object(o.useEffect)((function(){y.a.from(t.current,{duration:1,ease:"elastic.out(2, 0.5)",pixi:{visible:!1,scale:.1}}).delay(e.delay||0)}),[e.delay]),Object(o.useEffect)((function(){var n;return!1!==e.bounce&&(n=y.a.to(t.current,{duration:.5,yoyo:!0,repeat:-1,pixi:{y:"-=40"}}).delay(1+Math.random())),function(){var e;null===(e=n)||void 0===e||e.kill()}}),[e.bounce]);var s=function(e){},u=function(){n.current=void 0},f=function(){};return i.a.createElement(v.Sprite,Object.assign({},e,{anchor:[.5,.5],position:c,ref:t,interactive:!0,image:l,mousedown:s,touchstart:s,mouseup:u,mouseupoutside:u,mousemove:f,touchmove:f}))},k=function(e,t){for(var n,a=t.length-1;a>=0&&!((n=t[a]).firstgid<=e);a--);return n},N=n(57),S=n(61),C=n(58),T=Object(v.PixiComponent)("ParticleEmitter",{create:function(){return new p.ParticleContainer},applyProps:function(e,t,n){var a=n.image,r=n.config,c=Object(S.a)(n,["image","config"]);Object(v.applyDefaultProps)(e,t,c);var o=this._emitter;if(!o){o=new C.a(e,[p.Texture.from(a)],r);var i=performance.now();o.emit=!0,function e(){o.raf=requestAnimationFrame(e);var t=performance.now();o.update(3e-4*(t-i)),i=t}()}this._emitter=o},willUnmount:function(){this._emitter&&(this._emitter.emit=!1,cancelAnimationFrame(this._emitter.raf))}}),R=function(e){var t=e.x,n=void 0===t?0:t,a=e.y,r=void 0===a?0:a;return i.a.createElement(T,{name:"smoke",x:n,y:r,image:"".concat("/vca","/effects/smokeparticle.png"),config:N,pivot:[-64,0]})},M=n(5),P=function(e){var t=e.data,n=e.mapData,a=e.tilesetsTextures,r=e.found,c=e.onClick,l=Object(o.useRef)(null),s=Object(o.useRef)(null);if(Object(o.useEffect)((function(){l.current&&y.a.from(l.current,{duration:1,ease:"elastic.out(2, 0.5)",pixi:{visible:!1,scale:.1}})}),[r]),Object(o.useEffect)((function(){var e,a,r;if(s.current){var c=null===(e=t.properties)||void 0===e?void 0:e.find((function(e){return"animation"===e.name}));if(c)for(var o=JSON.parse(c.value),i=parseFloat((null===(a=t.properties)||void 0===a||null===(r=a.find((function(e){return"delay"===e.name})))||void 0===r?void 0:r.value)||0),l=y.a.timeline({repeat:-1,delay:i}),u=1;u<o.length;u++){var f=o[u-1],m=o[u],d=Math.sqrt(Math.pow(m[0]-f[0],2)+Math.pow(m[1]-f[1],2)),v=O(m,n.width,n.height);l.to(s.current,{duration:.25*d,pixi:{x:v.x,y:v.y},ease:M.b.easeNone})}}}),[n.height,n.width,t.properties]),t.polygon){var u=[t.x/64,t.y/64],f=t.polygon.reduce((function(e,t){return e.push(t.y+t.x),e.push(t.y/2-t.x/2),e}),[]);return i.a.createElement(v.Graphics,{key:"".concat(t.type).concat(t.name),draw:function(e){e.beginFill(12245589),e.drawPolygon(f),e.endFill()},position:O(u,n.width,n.height),pivot:[64,32]})}if(t.gid){var m=t.x,p=t.y,b=t.gid,g=[m/64-1,p/64-1],h=536870911&b,E=k(h,n.tilesets);if(!E||!E.tiles||0===b)return null;var w=0!==(1073741824&b),x=[1,1];0!==(2147483648&b)&&(x[0]*=-1),w&&(x[1]*=-1);var j=E.tiles.find((function(e){return e.id===h-E.firstgid}));if(!j)return null;var N=j.image.split("/"),S=Object(d.a)(N,3),C=(S[0],S[1]),T=S[2];return a[C]||console.warn("Could not find spritesheet ".concat(C," ").concat(a)),a[C].textures[T]||console.warn("Could not find texture ".concat(C," ").concat(T)),i.a.createElement(v.Sprite,{name:"".concat(t.name,": ").concat(m,",").concat(p," (").concat(T,")"),ref:s,scale:x,texture:a[C].textures[T],anchor:[0,1],pivot:[64,0],position:O(g,n.width,n.height),pointerdown:function(){return c(t.name)},interactive:!!t.name},I(t.properties),r&&i.a.createElement(v.Sprite,{ref:l,image:"".concat("/vca","/images/ui/check.svg"),scale:.8,anchor:[-.1,1],pivot:[64,0]}))}return null},I=function(e){if(!e)return null;var t,n,a=e.find((function(e){return"offset"===e.name}));if(a){var r=a.value.split(","),c=Object(d.a)(r,2);t=c[0],n=c[1]}var o=e.find((function(e){return"effect"===e.name}));return"smoke1"===(null===o||void 0===o?void 0:o.value)?i.a.createElement(R,{x:t,y:n}):null};var L=function(e){var t=e.content,n=e.foundSituations,r=e.mapData,c=e.tilesetsTextures,l=e.onSituationClick,s=Object(o.useState)(window.innerWidth),u=Object(d.a)(s,2),f=u[0],m=u[1],b=Object(o.useState)(window.innerHeight),g=Object(d.a)(b,2),h=g[0],w=g[1],y=64*(((null===r||void 0===r?void 0:r.width)||1)+((null===r||void 0===r?void 0:r.height)||1)),N=32*(((null===r||void 0===r?void 0:r.width)||1)+((null===r||void 0===r?void 0:r.height)||1))+128,S=Object(o.useRef)(null);Object(o.useEffect)((function(){S.current&&S.current.moveCenter(y/2,N/2)}),[r,N,y,c]),Object(o.useEffect)((function(){var e=function(){m(window.innerWidth),w(window.innerHeight)};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),function(){window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}}),[]);var C=function(e,t,n){return e.map((function(e,a){var o=536870911&e,l=k(o,r.tilesets);if(!l||!l.tiles||0===e)return null;var s=r.width,u=a%s,f=Math.floor(a/s),m=0!==(1073741824&e),p=[1,1];0!==(2147483648&e)&&(p[0]*=-1),m&&(p[1]*=-1);var b=l.tiles.find((function(e){return e.id===o-l.firstgid}));if(!b)return null;var g=b.image.split("/"),h=Object(d.a)(g,3),E=h[1],w=h[2];return c[E]||console.warn("Could not find spritesheet ".concat(w," ").concat(E," ").concat(c)),c[E].textures[w]||console.warn("Could not find texture ".concat(E," ").concat(w)),i.a.createElement(v.Sprite,{key:a,name:"".concat(t.name,": ").concat(u,",").concat(f," (").concat(w,")"),scale:p,texture:c[E].textures[w],anchor:[0,1],pivot:[64,0],position:O([u,f],r.width,r.height),zIndex:100*a+n})}))},T=function(e){return e.filter((function(e){return e.visible})).map((function(e,t){var a=n.indexOf(e.name)>-1;return i.a.createElement(P,{data:e,key:"".concat(e.type).concat(e.name).concat(t),found:a,tilesetsTextures:c,mapData:r,onClick:l})}))},R=function(t,n,a){var c=.25*a,o=O(n.location,r.width,r.height),l=-1===e.solvedScenarios.indexOf(t);return i.a.createElement(j,{position:o,pointertap:function(){return function(t){e.onScenarioClick(t)}(t)},delay:c,bounce:l,key:t,name:t})},M={sharedLoader:!0,backgroundColor:B(null===r||void 0===r?void 0:r.backgroundcolor)};return i.a.createElement(v.Stage,{width:f,height:h,className:"background",options:M},i.a.createElement(E,{worldWidth:y,worldHeight:N,screenWidth:f,screenHeight:h,ref:S},function(e){if(!e)return console.warn("No layer with name 'floor' found!"),null;var t=D(e).find(Boolean);if(!t)return console.warn("Layer with name 'floor' is empty?"),null;var n=k(536870911&t,r.tilesets);if(!n)return console.warn("No tileset found for floor layer. Huh?"),null;var a=c[n.name];return p.utils.clearTextureCache(),a.spritesheet?i.a.createElement(x,{texture:a.spritesheet._texture,verticalTiles:r.height,horizontalTiles:r.width,layer:e,tileset:n,spritesheet:a.spritesheet}):(console.warn("No texture loaded found for floor layer. Was looking for ".concat(n.name)),null)}(r.layers.find((function(e){return"floor"===e.name}))),i.a.createElement(v.Container,{sortableChildren:!0},r.layers.filter((function(e){return e.visible&&"floor"!==e.name&&e.type===a.tilelayer})).map((function(e,t){var n=D(e);return C(n,e,t)}))),i.a.createElement(v.Container,{sortableChildren:!0},function(e){return e.filter((function(e){return e.visible&&e.type===a.objectgroup})).map((function(e){return T(e.objects)}))}(r.layers)),Object.entries(t.scenarios||[]).map((function(e,t){var n=Object(d.a)(e,2),a=n[0],r=n[1];return R(a,r,t)}))))},B=function(e){if(e)return parseInt(e.substring(1),16)},D=function(e){var t=e.data;return"string"!==typeof t?t:(e.encoding,e.compression,[])};n(79);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var G=i.a.createElement("defs",null,i.a.createElement("style",null,".a{fill:#fff;}.a,.b{stroke:#283583;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.75px;}.b{fill:none;}")),W=i.a.createElement("title",null,"Back"),H=i.a.createElement("circle",{className:"a",cx:15.02,cy:15.02,r:14.65}),_=i.a.createElement("path",{className:"b",d:"M11.64,16",transform:"translate(-0.97 -0.93)"}),J=i.a.createElement("path",{className:"b",d:"M11.63,16",transform:"translate(-0.97 -0.93)"}),X=i.a.createElement("path",{className:"b",d:"M20.38,22.88",transform:"translate(-0.97 -0.93)"}),z=i.a.createElement("line",{className:"b",x1:19.39,y1:8.16,x2:10.65,y2:15.02}),Z=i.a.createElement("line",{className:"b",x1:19.39,y1:21.98,x2:10.65,y2:15.11}),q=function(e){var t=e.svgRef,n=e.title,a=F(e,["svgRef","title"]);return i.a.createElement("svg",A({width:30.04,height:30.04,viewBox:"0 0 30.04 30.04",ref:t},a),G,void 0===n?W:n?i.a.createElement("title",null,n):null,H,_,J,X,z,Z)},U=i.a.forwardRef((function(e,t){return i.a.createElement(q,A({svgRef:t},e))})),V=(n.p,function(e){var t=e.gameDataReceived,n=e.disableBackButton;return Object(o.useEffect)((function(){var e;return e=setInterval((function(){window.GAMEDATA&&(clearInterval(e),t(window.GAMEDATA))}),250),window.setGameData=function(e){$({type:"setGameData",data:e})},window.exit=function(){$({type:"exit"})},window.getGameData=function(){return window.GAMEDATA},function(){clearInterval(e)}}),[t]),!0===n?null:i.a.createElement("div",{className:"close"},i.a.createElement(U,{onClick:function(){$({type:"back"})}}))}),$=function(e){if(window.hasOwnProperty("webkit")&&window.webkit.hasOwnProperty("messageHandlers")){var t=JSON.stringify(e);webkit.messageHandlers.cordova_iab.postMessage(t)}else window.parent.postMessage(e,"*")},K=n(176),Q=(n(80),function(e){var t=e.foundSituations.length<e.content.situations.length;return i.a.createElement("div",{className:"finder-box"},"".concat(e.instructionText," (").concat(e.foundSituations.length,"/").concat(e.content.situations.length,")"),i.a.createElement("button",{className:"green button",disabled:t,onClick:e.onOpenGame},e.nextText))}),Y=(n(81),function(e){var t=e.onBack,n=e.onSetGameData,a=e.content,r=Object(o.useRef)(null);return Object(o.useEffect)((function(){var e;null===r||void 0===r||null===(e=r.current)||void 0===e||e.addEventListener("load",(function(){var e,t;null===r||void 0===r||null===(e=r.current)||void 0===e||null===(t=e.contentWindow)||void 0===t||t.postMessage(a.data,"*")}),!0),window.addEventListener("message",(function(e){switch(e.data.type){case"setGameData":n(e.data.data);break;case"back":t&&t();break;case"exit":$({type:"exit"})}}),!0)}),[a.data,t,n]),i.a.createElement("iframe",{src:a.url,ref:r,title:a.url,className:"iframe-content ".concat(e.open?"visible":"hidden")})}),ee=(n(82),function(e){var t=e.scenarios,n=e.solvedScenarios,a=Object.keys(t),r=n.length<a.length;return i.a.createElement("div",{className:"scenarios-box"},"(".concat(n.length,"/").concat(a.length,")"),i.a.createElement("button",{className:"green button",disabled:r,onClick:e.onComplete},e.nextText))}),te=n(177),ne=n(30),ae=n(42),re=n.n(ae),ce=function(e){return i.a.createElement("ul",null,e.reactions.map((function(t){return i.a.createElement("li",{key:t.id,onClick:function(){e.onSelect(t.id)},className:"".concat(e.selected===t.id?"selected":"")},e.texts["reaction-".concat(e.scenario,"-").concat(t.id)])})))},oe=function(e){return e.correct?i.a.createElement("h1",{className:"correct"},e.texts["feedback-correct"]):i.a.createElement("h1",{className:"wrong"},e.texts["feedback-wrong"])};function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var se=i.a.createElement("defs",null,i.a.createElement("style",null,".a{fill:#fff;}.a,.b{stroke:#283583;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.75px;}.b{fill:none;}")),ue=i.a.createElement("title",null,"Back"),fe=i.a.createElement("circle",{className:"a",cx:15.02,cy:15.02,r:14.65}),me=i.a.createElement("path",{className:"b",d:"M11.64,16",transform:"translate(-0.97 -0.93)"}),de=i.a.createElement("path",{className:"b",d:"M11.63,16",transform:"translate(-0.97 -0.93)"}),ve=i.a.createElement("path",{className:"b",d:"M20.38,22.88",transform:"translate(-0.97 -0.93)"}),pe=i.a.createElement("line",{className:"b",x1:19.39,y1:8.16,x2:10.65,y2:15.02}),be=i.a.createElement("line",{className:"b",x1:19.39,y1:21.98,x2:10.65,y2:15.11}),ge=function(e){var t=e.svgRef,n=e.title,a=le(e,["svgRef","title"]);return i.a.createElement("svg",ie({width:30.04,height:30.04,viewBox:"0 0 30.04 30.04",ref:t},a),se,void 0===n?ue:n?i.a.createElement("title",null,n):null,fe,me,de,ve,pe,be)},he=i.a.forwardRef((function(e,t){return i.a.createElement(ge,ie({svgRef:t},e))}));n.p;function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var we,xe=i.a.createElement("style",{type:"text/css"},"\n\t.st0{fill:#FFFFFF;stroke:#283583;stroke-width:0.75;stroke-linecap:round;stroke-linejoin:round;}\n\t.st1{fill:none;stroke:#283583;stroke-width:0.75;stroke-linecap:round;stroke-linejoin:round;}\n"),ye=i.a.createElement("title",null,"Back"),je=i.a.createElement("circle",{className:"st0",cx:15,cy:15,r:14.6}),ke=i.a.createElement("path",{className:"st1",d:"M10.7,15.1"}),Ne=i.a.createElement("path",{className:"st1",d:"M10.7,15.1"}),Se=i.a.createElement("path",{className:"st1",d:"M19.4,21.9"}),Ce=i.a.createElement("line",{className:"st1",x1:22.9,y1:7.2,x2:7.2,y2:22.9}),Te=i.a.createElement("line",{className:"st1",x1:22.9,y1:22.9,x2:7.2,y2:7.2}),Re=function(e){var t=e.svgRef,n=e.title,a=Oe(e,["svgRef","title"]);return i.a.createElement("svg",Ee({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:{enableBackground:"new 0 0 30 30"},xmlSpace:"preserve",ref:t},a),xe,void 0===n?ye:n?i.a.createElement("title",null,n):null,je,ke,Ne,Se,Ce,Te)},Me=i.a.forwardRef((function(e,t){return i.a.createElement(Re,Ee({svgRef:t},e))}));n.p,n(167);y.a.registerPlugin(te.a),function(e){e[e.description=0]="description",e[e.reactions=1]="reactions",e[e.feedback=2]="feedback"}(we||(we={}));var Pe=function(e){var t=e.content,n=Object(o.useRef)(null),a=Object(o.useRef)(!!e.selectedReaction),r=Object(o.useState)(we.description),c=Object(d.a)(r,2),l=c[0],s=c[1],u=Object(o.useState)(),f=Object(d.a)(u,2),m=f[0],v=f[1],p=Object(o.useState)(e.selectedReaction),b=Object(d.a)(p,2),g=b[0],h=b[1],E=function(){s(we.description)};Object(o.useEffect)((function(){ne.a.add("correct","".concat("/vca","/sound/correct.mp3")),ne.a.add("wrong","".concat("/vca","/sound/wrong.mp3"))}),[]);var O=Object(o.useMemo)((function(){var n;if(!g)return"";var a=null===(n=t.reactions.find((function(e){return e.id===g})))||void 0===n?void 0:n.id;return e.texts["reaction-".concat(e.scenario,"-").concat(a)]}),[t.reactions,e.scenario,e.texts,g]),w=Object(o.useMemo)((function(){var e;return!!g&&!0===(null===(e=t.reactions.find((function(e){return e.id===g})))||void 0===e?void 0:e.correct)}),[t.reactions,g]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"scenario-screen",ref:n},i.a.createElement("div",{className:"illustration"},t.image&&i.a.createElement("img",{src:t.image,alt:""})),i.a.createElement("div",{className:"content state-".concat(we[l]," ").concat(a.current&&"reopening")},i.a.createElement("div",{className:"description",onClick:function(e){var t;"IMG"===e.target.tagName&&v(null===(t=e.target)||void 0===t?void 0:t.src)}},i.a.createElement(re.a,{source:e.texts["description-".concat(e.scenario)]}),i.a.createElement("div",{className:"buttons"},i.a.createElement("button",{className:"button right-align white",onClick:function(){s(we.reactions)}},e.texts["button-next"]))),i.a.createElement("div",{className:"reactions"},i.a.createElement("h1",null,e.texts.reactions),i.a.createElement(ce,{scenario:e.scenario,texts:e.texts,selected:g,onSelect:h,reactions:t.reactions}),i.a.createElement("div",{className:"buttons"},i.a.createElement("button",{className:"button white",onClick:E},e.texts["button-prev"]),i.a.createElement("button",{className:"button ".concat(g?"green":""),onClick:function(){s(we.feedback),setTimeout((function(){w?(ne.a.play("correct"),e.setCorrectReaction(g)):ne.a.play("wrong")}),500)},disabled:!g},e.texts["button-check"]))),i.a.createElement("div",{className:"feedback"},i.a.createElement(oe,{texts:e.texts,correct:w}),i.a.createElement("p",{className:"reaction ".concat(w?"correct":"wrong")},O),i.a.createElement("h1",{className:"title"},"Feedback"),i.a.createElement(re.a,{source:e.texts["feedback-".concat(e.scenario)]}),i.a.createElement("div",{className:"buttons"},a.current&&i.a.createElement("button",{className:"button white",onClick:E},e.texts["button-prev"]),i.a.createElement("button",{className:"button green right-align",onClick:e.onBack},e.texts["button-continue"]))))),i.a.createElement("div",{className:"close"},i.a.createElement(he,{onClick:e.onBack})),m&&i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:m,alt:"img"}),i.a.createElement("div",{className:"close-image"},i.a.createElement(Me,{onClick:function(){v(void 0)}}))))},Ie=(n(168),function(){return i.a.createElement("div",{className:"loading-background"},i.a.createElement("div",{className:"white-block"},i.a.createElement("div",{className:"outset"}),i.a.createElement("div",{className:"blue-block"})),i.a.createElement("div",{className:"subtext"},"Stay curious",i.a.createElement("span",{className:"dots"},i.a.createElement("span",{className:"dot1"},"."),i.a.createElement("span",{className:"dot2"},"."),i.a.createElement("span",{className:"dot3"},"."))))}),Le=(n(169),function(e){return i.a.createElement("div",{className:"basedialog ".concat(e.className)},e.children)});function Be(){return(Be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function De(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ae=i.a.createElement("defs",null,i.a.createElement("style",null,"\n            .star-empty {\n                fill: #f8f8f8;\n                stroke: #b0b0b0;\n                stroke-width: 3px;\n            }\n        ")),Fe=i.a.createElement("path",{className:"star-empty",d:"M67.517,0l21.1,42.2,46.418,6.752L101.275,81.864l7.6,46.418L67.517,106.339,26.163,128.282l7.6-46.418L0,48.95,46.418,42.2Z",transform:"translate(3.223 3.354)"}),Ge=function(e){var t=e.svgRef,n=e.title,a=De(e,["svgRef","title"]);return i.a.createElement("svg",Be({width:141.478,height:134.378,viewBox:"0 0 141.478 134.378",ref:t},a),n?i.a.createElement("title",null,n):null,Ae,Fe)},We=i.a.forwardRef((function(e,t){return i.a.createElement(Ge,Be({svgRef:t},e))})),He=(n.p,n(170),function(e){return i.a.createElement(Le,{className:"intro-dialog"},i.a.createElement("div",{className:"top"},i.a.createElement("h1",null,e.headerText)),i.a.createElement("div",{className:"center"},i.a.createElement("section",null,e.descriptionText)),i.a.createElement("div",{className:"bottom"},i.a.createElement(We,{className:"star"}),i.a.createElement("span",{className:"stars-to-gain"},e.starsToGainText),i.a.createElement("button",{className:"green button start",onClick:e.onStart},e.startText)))});n(43),n(59);var _e=function(e,t){var n=p.Loader.shared;n.resources[e]?t(n.resources[e]):n.add(e).load((function(n,a){t(a[e])}))},Je=function(e){var t=Object(o.useState)({}),n=Object(d.a)(t,2),a=n[0],r=n[1],c=Object(o.useState)(),i=Object(d.a)(c,2),l=i[0],s=i[1],f=Object(o.useCallback)((function(e){s(e)}),[]);return Object(o.useEffect)((function(){if(l){var t=Xe(l,a);if(t){var n=t.name,c=e(t);_e("".concat(c),(function(e){if(e.error)throw new Error("Loading ".concat(c,"\n").concat(e.error));var t=Object(m.a)(Object(m.a)({},a),{},Object(u.a)({},n,e));r(t)}))}}}),[l,e,a]),{loadComplete:!!l&&void 0===Xe(l,a),loadTilesets:f,tilesetsTextures:a}},Xe=function(e,t){return e.find((function(e){return!t[e.name]}))};function ze(){return(ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Ze(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var qe,Ue=i.a.createElement("defs",null,i.a.createElement("style",null,"\n            .star-full {\n                fill: #fcda00;\n            }\n        ")),Ve=i.a.createElement("path",{className:"star-full",d:"M67.517,0l21.1,42.2,46.418,6.752L101.275,81.864l7.6,46.418L67.517,106.339,26.163,128.282l7.6-46.418L0,48.95,46.418,42.2Z"}),$e=function(e){var t=e.svgRef,n=e.title,a=Ze(e,["svgRef","title"]);return i.a.createElement("svg",ze({width:135.033,height:128.282,viewBox:"0 0 135.033 128.282",ref:t},a),n?i.a.createElement("title",null,n):null,Ue,Ve)},Ke=i.a.forwardRef((function(e,t){return i.a.createElement($e,ze({svgRef:t},e))})),Qe=(n.p,n(172),function(e){var t=e.total,n=e.mistakes,a=Math.max(t-n,0);Object(o.useEffect)((function(){window.setLevelScore&&window.setLevelScore(1,a,t)}),[a,t]);return i.a.createElement(Le,{className:"complete-dialog"},i.a.createElement("div",{className:"block"},i.a.createElement("h1",null,e.headerText)),i.a.createElement("div",{className:"block score"},e.scoreText.replace("{0}",a.toString()).replace("{1}",t.toString())),i.a.createElement("div",{className:"block stars"},function(){for(var e=[],n=0;n<t;n++)e.push(i.a.createElement("div",{key:"star".concat(n)},i.a.createElement(We,null),n<a&&i.a.createElement(Ke,{className:"full"})));return e}()),i.a.createElement("div",{className:"bottom"},i.a.createElement("button",{className:"green button",onClick:e.onTryAgain},e.tryAgainText),i.a.createElement("button",{className:"red button",onClick:e.onExit},e.exitText)))});n(173),n(174);K.a.registerPIXI(PIXI),y.a.registerPlugin(K.a),function(e){e[e.intro=0]="intro",e[e.normal=2]="normal",e[e.wrong=4]="wrong",e[e.correct=8]="correct",e[e.complete=16]="complete"}(qe||(qe={}));var Ye=function(){var e=Object(o.useState)(qe.intro),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(o.useState)({}),c=Object(d.a)(r,2),l=c[0],s=c[1],v=Object(o.useState)(),b=Object(d.a)(v,2),g=b[0],h=b[1],E=Object(o.useState)(),O=Object(d.a)(E,2),w=O[0],x=O[1],y=Object(o.useState)(),j=Object(d.a)(y,2),k=j[0],N=j[1],S=Object(o.useState)([]),C=Object(d.a)(S,2),T=C[0],R=C[1],M=Object(o.useState)({}),P=Object(d.a)(M,2),I=P[0],B=P[1],D=Object(o.useState)(!1),A=Object(d.a)(D,2),F=A[0],G=A[1],W=Object(o.useCallback)((function(){G(!1)}),[]),H=Object(o.useCallback)((function(e){window.setGameData(e)}),[]),_=Object(o.useCallback)((function(e){if(PIXI.settings.SCALE_MODE=p.SCALE_MODES.NEAREST,x(e),e.translations){var t=e.translations.reduce((function(e,t){return e[t.key]=t.value,e}),{});s(t)}}),[]),J=Object(o.useMemo)((function(){return null===w||void 0===w?void 0:w.content}),[w]),X=Object(o.useMemo)((function(){return null===w||void 0===w?void 0:w.levelsCompleted}),[w]),z=Je(et),Z=z.loadComplete,q=z.loadTilesets,U=z.tilesetsTextures;Object(o.useEffect)((function(){if(J){var e=J.mapJson;_e("".concat("/vca","/").concat(e),(function(e){h(e.data)}))}}),[J]),Object(o.useEffect)((function(){g&&q(g.tilesets)}),[q,g]),Object(o.useEffect)((function(){0}),[J,_]);var K=Object(o.useMemo)((function(){var e,t,n;if(X&&(null===J||void 0===J||null===(e=J.finder)||void 0===e?void 0:e.final))return Object(m.a)(Object(m.a)({},null===J||void 0===J||null===(t=J.finder)||void 0===t?void 0:t.final),{},{data:Object(m.a)(Object(m.a)({},null===J||void 0===J||null===(n=J.finder)||void 0===n?void 0:n.final.data),{},{levelsCompleted:X})})}),[J,X]),te=Object(o.useCallback)((function(){a(qe.normal)}),[]),ne=Object(o.useMemo)((function(){var e,t=(null===X||void 0===X||null===(e=X[0])||void 0===e?void 0:e.score)||0,n=(null===J||void 0===J?void 0:J.stars)||1;return(""+l["intro-stars-to-gain"]).replace("{0}",""+t).replace("{1}",""+n)}),[J,X,l]),ae=Object(o.useMemo)((function(){return Object.keys(I||{})}),[I]);return i.a.createElement(i.a.Fragment,null,!Z&&i.a.createElement(Ie,null),i.a.createElement("div",{className:"background"},i.a.createElement(V,{gameDataReceived:_,disableBackButton:!!F||!!k}),Z&&i.a.createElement(i.a.Fragment,null,n===qe.intro&&i.a.createElement(He,{onStart:te,headerText:l["intro-header"],descriptionText:l["intro-description"],starsToGainText:ne,startText:l["intro-start"]}),n===qe.normal&&g&&J&&i.a.createElement(i.a.Fragment,null,i.a.createElement(L,{content:J,mapData:g,tilesetsTextures:U,onSituationClick:function(e){(null===J||void 0===J?void 0:J.finder)&&J.finder.situations.indexOf(e)>-1&&-1===T.indexOf(e)&&R([].concat(Object(f.a)(T),[e]))},foundSituations:T,solvedScenarios:ae,onScenarioClick:function(e){N(e)}}),(null===J||void 0===J?void 0:J.finder)&&i.a.createElement(Q,{content:J.finder,instructionText:l["finder-instruction"],nextText:l["button-next"],foundSituations:T,onOpenGame:function(){G(!0)}}),(null===J||void 0===J?void 0:J.scenarios)&&i.a.createElement(ee,{scenarios:J.scenarios,solvedScenarios:ae,instructionText:l["finder-instruction"],nextText:l["button-next"],onComplete:function(){a(qe.complete),H(Object(m.a)(Object(m.a)({},w),{},{levelsCompleted:[{level:1,score:ae.length,maxScore:ae.length}]}))}})),K&&i.a.createElement(Y,{content:K,open:F,onBack:W,onSetGameData:H}),k&&i.a.createElement(Pe,{scenario:k,content:null===J||void 0===J?void 0:J.scenarios[k],selectedReaction:I[k],setCorrectReaction:function(e){B(Object(m.a)(Object(m.a)({},I),{},Object(u.a)({},k,e)))},texts:l,onBack:function(){N(void 0)}}),n===qe.complete&&i.a.createElement(Qe,{onTryAgain:function(){a(qe.normal),B({})},onExit:function(){$({type:"exit"})},total:Object.keys(null===J||void 0===J?void 0:J.scenarios).length||0,mistakes:0,headerText:l["complete-header"],scoreText:l["complete-score"],tryAgainText:l["complete-try-again"],exitText:l["complete-exit"]}))))},et=function(e){return"".concat("/vca","/maps/tilesets/").concat(e.name,".json")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e){e.exports=JSON.parse('{"alpha":{"start":0.25,"end":0},"scale":{"start":0.04,"end":0.29,"minimumScaleMultiplier":1},"color":{"start":"#85888d","end":"#100f0c"},"speed":{"start":100,"end":200,"minimumSpeedMultiplier":1},"acceleration":{"x":10,"y":-30},"maxSpeed":200,"startRotation":{"min":265,"max":270},"noRotation":false,"rotationSpeed":{"min":8,"max":0},"lifetime":{"min":0.5,"max":3.05},"blendMode":"normal","frequency":0.0005,"emitterLifetime":-1,"maxParticles":300,"pos":{"x":0,"y":0},"addAtBack":true,"spawnType":"point"}')},63:function(e,t,n){e.exports=n(175)},68:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.4ceff745.chunk.js.map