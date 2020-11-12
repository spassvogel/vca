(this.webpackJsonpvca=this.webpackJsonpvca||[]).push([[0],{167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a,r,o,c=n(0),i=n.n(c),l=n(54),s=n.n(l),u=(n(68),n(27)),f=n(60),d=n(18),m=n(9),v=n(11);!function(e){e.tilelayer="tilelayer",e.objectgroup="objectgroup"}(a||(a={})),function(e){e.orthagonal="orthagonal",e.isometric="isometric",e.staggered="staggered",e.hexagonal="hexagonal"}(r||(r={})),function(e){e.rightUp="right-up",e.rightDown="right-down",e.leftUp="left-up",e.leftDown="left-down"}(o||(o={}));var p=n(5),b=n(24),g=n(56),h=Object(c.forwardRef)((function(e,t){var n=Object(v.useApp)();return window.PIXI=p,i.a.createElement(E,Object.assign({app:n},e,{ref:t}))})),E=Object(v.PixiComponent)("Viewport",{create:function(e){var t=new g.a({screenWidth:e.screenWidth,screenHeight:e.screenHeight,worldWidth:e.worldWidth,worldHeight:e.worldHeight,ticker:e.app.ticker});t.on("clicked",(function(t){e.onClick&&e.onClick(t)}));var n=e.minScale,a=void 0===n?.15:n,r=e.maxScale,o=void 0===r?1:r;return t.drag().pinch().wheel().clamp({direction:"all"}).setZoom(.15).clampZoom({minScale:a,maxScale:o}).decelerate(),t}}),O=h,w=function(e,t,n){var a=x(t,n)+64*e[0]+64*-e[1],r=64*(e[0]+e[1])/2+64+128;return new p.Point(a,r)},x=function(e,t){return 32*(t-e)+128*(t+e)/2/2},y=function(e,t){return t*e[1]+e[0]};window.PIXI=p,n(78);var j=Object(v.PixiComponent)("FloorTileLayer",{create:function(e){return new window.PIXI.tilemap.CompositeRectTileLayer(0,[e.texture])},applyProps:function(e,t,n){var a=n.layer,r=n.tileset,o=n.verticalTiles,c=n.horizontalTiles,i=n.spritesheet;if(a.data)for(var l=function(t){if(a.data[t]>0){var n=[t%c,Math.floor(t/c)],l=w(n,c,o),s=r.tiles.find((function(e){return e.id===a.data[t]-r.firstgid})),u=null===s||void 0===s?void 0:s.image.substr((null===s||void 0===s?void 0:s.image.lastIndexOf("/"))+1);e.addFrame(i.textures[u],l.x-64,l.y-64)}},s=0;s<a.data.length;s++)l(s)}}),k=n(20),N=function(e){var t=Object(c.useRef)(null),n=Object(c.useRef)(),a=Object(c.useState)(e.position||new p.Point),r=Object(m.a)(a,2),o=r[0],l=(r[1],e.bounce?"".concat("/vca","/images/ui/marker-red.svg"):"".concat("/vca","/images/ui/marker-green.svg"));Object(c.useEffect)((function(){k.a.from(t.current,{duration:1,ease:"elastic.out(2, 0.5)",pixi:{visible:!1,scale:.1}}).delay(e.delay||0)}),[e.delay]),Object(c.useEffect)((function(){var n;return!1!==e.bounce&&(n=k.a.to(t.current,{duration:.5,yoyo:!0,repeat:-1,pixi:{y:"-=40"}}).delay(1+Math.random())),function(){var e;null===(e=n)||void 0===e||e.kill()}}),[e.bounce]);var s=function(e){},u=function(){n.current=void 0},f=function(){};return i.a.createElement(v.Sprite,Object.assign({},e,{anchor:[.5,.5],position:o,ref:t,interactive:!0,image:l,mousedown:s,touchstart:s,mouseup:u,mouseupoutside:u,mousemove:f,touchmove:f}))},S=function(e,t){for(var n,a=t.length-1;a>=0&&!((n=t[a]).firstgid<=e);a--);return n},C=n(57),T=n(61),R=n(58),M=Object(v.PixiComponent)("ParticleEmitter",{create:function(){return new p.ParticleContainer},applyProps:function(e,t,n){var a=n.image,r=n.config,o=Object(T.a)(n,["image","config"]);Object(v.applyDefaultProps)(e,t,o);var c=this._emitter;if(!c){c=new R.a(e,[p.Texture.from(a)],r);var i=performance.now();c.emit=!0,function e(){c.raf=requestAnimationFrame(e);var t=performance.now();c.update(3e-4*(t-i)),i=t}()}this._emitter=c},willUnmount:function(){this._emitter&&(this._emitter.emit=!1,cancelAnimationFrame(this._emitter.raf))}}),P=function(e){var t=e.x,n=void 0===t?0:t,a=e.y,r=void 0===a?0:a;return i.a.createElement(M,{name:"smoke",x:n,y:r,image:"".concat("/vca","/effects/smokeparticle.png"),config:C,pivot:[-64,0]})},A=n(6),I=Object(c.forwardRef)((function(e,t){return i.a.createElement(L,Object.assign({},e,{ref:t}))})),L=Object(v.PixiComponent)("SpriteAnimated",{create:function(e){var t=e.textures;return new p.AnimatedSprite(t||[],!0)},applyProps:function(e,t,n){t.textures!==n.textures&&(Object(v.applyDefaultProps)(e,t,n),e.gotoAndStop(e.currentFrame))}}),B=Object(c.memo)(I),D=function(e){var t=e.data,n=e.mapData,a=e.tilesetsTextures,r=e.found,o=e.onClick,l=Object(c.useRef)(null),s=Object(c.useRef)(null),u=Object(c.useRef)(),f=Object(c.useRef)();if(Object(c.useEffect)((function(){l.current&&k.a.from(l.current,{duration:1,ease:"elastic.out(2, 0.5)",pixi:{visible:!1,scale:.1}})}),[r]),Object(c.useEffect)((function(){var e,a,r,o,c;if(s.current){var i=null===(e=t.properties)||void 0===e?void 0:e.find((function(e){return"animation"===e.name}));if(i){var l=null===(a=t.properties)||void 0===a||null===(r=a.find((function(e){return"type"===e.name})))||void 0===r?void 0:r.value;if("move"===l)!function(){var e,a,r,o,l;try{l=JSON.parse(i.value)}catch(v){throw new Error("Couldn't parse animation steps: \"".concat(i.value,'"'))}var u=null===(e=t.properties)||void 0===e||null===(a=e.find((function(e){return"spritesheet"===e.name})))||void 0===a?void 0:a.value,f=parseFloat((null===(r=t.properties)||void 0===r||null===(o=r.find((function(e){return"delay"===e.name})))||void 0===o?void 0:o.value)||0);c=k.a.timeline({repeat:-1,delay:f});for(var d=function(e){var a,r,o=l[e-1],i=l[e],f=Math.sqrt(Math.pow(i[0]-o[0],2)+Math.pow(i[1]-o[1],2));s.current.gotoAndStop(0);var d=w(i,n.width,n.height),m=parseFloat((null===(a=t.properties)||void 0===a||null===(r=a.find((function(e){return"speed"===e.name})))||void 0===r?void 0:r.value)||.25);c.to(s.current,{onStart:function(){u&&(o[0]===i[0]&&o[1]>i[1]?(s.current.gotoAndStop(1),s.current.scale.set(1,1)):o[0]>i[0]&&o[1]===i[1]?(s.current.gotoAndStop(1),s.current.scale.set(-1,1)):o[0]===i[0]&&o[1]<i[1]?(s.current.gotoAndStop(0),s.current.scale.set(-1,1)):(s.current.gotoAndStop(0),s.current.scale.set(1,1)))},onUpdate:function(){s.current&&(s.current.zIndex=y(i,n.width))},duration:m*f,pixi:{x:d.x,y:d.y},ease:A.b.easeNone})},m=1;m<l.length;m++)d(m)}();else if("flicker"===l){o=setTimeout((function e(){s.current.visible=Math.random()<.5,o=setTimeout(e,250*Math.random())}),250*Math.random())}return function(){clearTimeout(o),c&&c.clear()}}}}),[n,t.properties]),t.polygon){var d=[t.x/64,t.y/64],p=t.polygon.reduce((function(e,t){return e.push(t.y+t.x),e.push(t.y/2-t.x/2),e}),[]);return i.a.createElement(v.Graphics,{key:"".concat(t.type).concat(t.name),draw:function(e){e.beginFill(12245589),e.drawPolygon(p),e.endFill()},position:w(d,n.width,n.height),pivot:[64,32]})}if(t.gid){var b,g,h=t.x,E=t.y,O=t.gid,x=[h/64-1,E/64-1],j=536870911&O;if(u.current=S(j,n.tilesets),!u||!u.current.tiles||0===O)return null;var N=0!==(1073741824&O),C=[1,1];0!==(2147483648&O)&&(C[0]*=-1),N&&(C[1]*=-1);var T=u.current.tiles.find((function(e){return e.id===j-u.current.firstgid}));if(!T)return null;var R=T.image.split("/"),M=Object(m.a)(R,3),P=(M[0],M[1]),I=M[2];a[P]||console.warn("Could not find spritesheet ".concat(P," ").concat(a)),f.current=a[P].textures,f.current[I]||console.warn("Could not find texture ".concat(P," ").concat(I));var L,D,G,W=null===(b=t.properties)||void 0===b||null===(g=b.find((function(e){return"spritesheet"===e.name})))||void 0===g?void 0:g.value;if(W)L=(null===(D=u.current)||void 0===D||null===(G=D.tiles)||void 0===G?void 0:G.filter((function(e){return e.type===W})).map((function(e){return e.image}))).map((function(e){var t,n=e.substr(e.lastIndexOf("/")+1);return null===(t=a[P].textures)||void 0===t?void 0:t[n]}));else L=[f.current[I]];return i.a.createElement(B,{name:"".concat(t.name,": ").concat(h,",").concat(E," (").concat(I,")"),ref:s,scale:C,textures:L,anchor:[0,1],pivot:[64,0],position:w(x,n.width,n.height),pointerdown:function(){return o(t.name)},interactive:!!t.name,zIndex:y(x,n.width)},F(t.properties),r&&i.a.createElement(v.Sprite,{ref:l,image:"".concat("/vca","/images/ui/check.svg"),scale:.8,anchor:[-.1,1],pivot:[64,0]}))}return null},F=function(e){if(!e)return null;var t,n,a=e.find((function(e){return"offset"===e.name}));if(a){var r=a.value.split(","),o=Object(m.a)(r,2);t=o[0],n=o[1]}var c=e.find((function(e){return"effect"===e.name}));return"smoke1"===(null===c||void 0===c?void 0:c.value)?i.a.createElement(P,{x:t,y:n}):null};var G=function(e){var t=e.content,n=e.foundSituations,r=e.mapData,o=e.tilesetsTextures,l=e.onSituationClick,s=Object(c.useState)(window.innerWidth),u=Object(m.a)(s,2),f=u[0],d=u[1],g=Object(c.useState)(window.innerHeight),h=Object(m.a)(g,2),E=h[0],x=h[1],y=64*(((null===r||void 0===r?void 0:r.width)||1)+((null===r||void 0===r?void 0:r.height)||1)),k=32*(((null===r||void 0===r?void 0:r.width)||1)+((null===r||void 0===r?void 0:r.height)||1))+128,C=Object(c.useRef)(null);Object(c.useEffect)((function(){C.current&&C.current.moveCenter(y/2,k/2)}),[r,k,y,o]),Object(c.useEffect)((function(){b.a.add("plops",{url:"".concat("/vca","/sound/plops.mp3"),autoPlay:!0})}),[]),Object(c.useEffect)((function(){var e=function(){d(window.innerWidth),x(window.innerHeight)};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),function(){window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}}),[]);var T=function(e,t,n){return e.map((function(e,a){var c=536870911&e,l=S(c,r.tilesets);if(!l||!l.tiles||0===e)return null;var s=r.width,u=a%s,f=Math.floor(a/s),d=0!==(1073741824&e),p=[1,1];0!==(2147483648&e)&&(p[0]*=-1),d&&(p[1]*=-1);var b=l.tiles.find((function(e){return e.id===c-l.firstgid}));if(!b)return null;var g=b.image.split("/"),h=Object(m.a)(g,3),E=h[1],O=h[2];return o[E]||console.warn("Could not find spritesheet ".concat(O," ").concat(E," ").concat(o)),o[E].textures[O]||console.warn("Could not find texture ".concat(E," ").concat(O)),i.a.createElement(v.Sprite,{key:a,name:"".concat(t.name,": ").concat(u,",").concat(f," (").concat(O,")"),scale:p,texture:o[E].textures[O],anchor:[0,1],pivot:[64,0],position:w([u,f],r.width,r.height),zIndex:100*a+n})}))},R=function(e){return e.filter((function(e){return e.visible})).map((function(e,t){var a=n.indexOf(e.name)>-1;return i.a.createElement(D,{data:e,key:"".concat(e.type).concat(e.name).concat(t),found:a,tilesetsTextures:o,mapData:r,onClick:l})}))},M=function(t,n,a){var o=.25*a,c=w(n.location,r.width,r.height),l=-1===e.solvedScenarios.indexOf(t);return i.a.createElement(N,{position:c,pointertap:function(){return function(t){e.onScenarioClick(t)}(t)},delay:o,bounce:l,key:t,name:t,scale:1.5})},P={sharedLoader:!0,backgroundColor:W(null===r||void 0===r?void 0:r.backgroundcolor)};return i.a.createElement(v.Stage,{width:f,height:E,className:"background",options:P},i.a.createElement(O,{worldWidth:y,worldHeight:k,screenWidth:f,screenHeight:E,ref:C},function(e){if(!e)return console.warn("No layer with name 'floor' found!"),null;var t=H(e).find(Boolean);if(!t)return console.warn("Layer with name 'floor' is empty?"),null;var n=S(536870911&t,r.tilesets);if(!n)return console.warn("No tileset found for floor layer. Huh?"),null;var a=o[n.name];return p.utils.clearTextureCache(),a.spritesheet?i.a.createElement(j,{texture:a.spritesheet._texture,verticalTiles:r.height,horizontalTiles:r.width,layer:e,tileset:n,spritesheet:a.spritesheet}):(console.warn("No texture loaded found for floor layer. Was looking for ".concat(n.name)),null)}(r.layers.find((function(e){return"floor"===e.name}))),i.a.createElement(v.Container,{sortableChildren:!0},r.layers.filter((function(e){return e.visible&&"floor"!==e.name&&e.type===a.tilelayer})).map((function(e,t){var n=H(e);return T(n,e,t)}))),i.a.createElement(v.Container,{sortableChildren:!0},function(e){return e.filter((function(e){return e.visible&&e.type===a.objectgroup})).map((function(e){return R(e.objects)}))}(r.layers)),Object.entries(t.scenarios||[]).map((function(e,t){var n=Object(m.a)(e,2),a=n[0],r=n[1];return M(a,r,t)}))))},W=function(e){if(e)return parseInt(e.substring(1),16)},H=function(e){var t=e.data;return"string"!==typeof t?t:(e.encoding,e.compression,[])};n(79);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var J=i.a.createElement("defs",null,i.a.createElement("style",null,".a{fill:#fff;}.a,.b{stroke:#283583;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.75px;}.b{fill:none;}")),X=i.a.createElement("title",null,"Back"),q=i.a.createElement("circle",{className:"a",cx:15.02,cy:15.02,r:14.65}),U=i.a.createElement("path",{className:"b",d:"M11.64,16",transform:"translate(-0.97 -0.93)"}),Z=i.a.createElement("path",{className:"b",d:"M11.63,16",transform:"translate(-0.97 -0.93)"}),V=i.a.createElement("path",{className:"b",d:"M20.38,22.88",transform:"translate(-0.97 -0.93)"}),$=i.a.createElement("line",{className:"b",x1:19.39,y1:8.16,x2:10.65,y2:15.02}),K=i.a.createElement("line",{className:"b",x1:19.39,y1:21.98,x2:10.65,y2:15.11}),Q=function(e){var t=e.svgRef,n=e.title,a=z(e,["svgRef","title"]);return i.a.createElement("svg",_({width:30.04,height:30.04,viewBox:"0 0 30.04 30.04",ref:t},a),J,void 0===n?X:n?i.a.createElement("title",null,n):null,q,U,Z,V,$,K)},Y=i.a.forwardRef((function(e,t){return i.a.createElement(Q,_({svgRef:t},e))})),ee=(n.p,function(e){var t=e.gameDataReceived,n=e.disableBackButton;return Object(c.useEffect)((function(){var e;return e=setInterval((function(){window.GAMEDATA&&(clearInterval(e),t(window.GAMEDATA))}),250),window.setGameData=function(e){te({type:"setGameData",data:e})},window.exit=function(){te({type:"exit"})},window.getGameData=function(){return window.GAMEDATA},function(){clearInterval(e)}}),[t]),!0===n?null:i.a.createElement("div",{className:"close"},i.a.createElement(Y,{onClick:function(){te({type:"back"})}}))}),te=function(e){if(window.hasOwnProperty("webkit")&&window.webkit.hasOwnProperty("messageHandlers")){var t=JSON.stringify(e);webkit.messageHandlers.cordova_iab.postMessage(t)}else window.parent.postMessage(e,"*")},ne=n(176),ae=(n(80),function(e){var t=e.foundSituations.length<e.content.situations.length;return i.a.createElement("div",{className:"finder-box"},"".concat(e.instructionText," (").concat(e.foundSituations.length,"/").concat(e.content.situations.length,")"),i.a.createElement("button",{className:"green button",disabled:t,onClick:e.onOpenGame},e.nextText))}),re=(n(81),function(e){var t=e.onBack,n=e.onSetGameData,a=e.content,r=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e;null===r||void 0===r||null===(e=r.current)||void 0===e||e.addEventListener("load",(function(){var e,t;null===r||void 0===r||null===(e=r.current)||void 0===e||null===(t=e.contentWindow)||void 0===t||t.postMessage(a.data,"*")}),!0),window.addEventListener("message",(function(e){switch(e.data.type){case"setGameData":n(e.data.data);break;case"back":t&&t();break;case"exit":te({type:"exit"})}}),!0)}),[a.data,t,n]),i.a.createElement("iframe",{src:a.url,ref:r,title:a.url,className:"iframe-content ".concat(e.open?"visible":"hidden")})}),oe=(n(82),function(e){var t=e.scenarios,n=e.solvedScenarios,a=Object.keys(t),r=n.length<a.length;return i.a.createElement("div",{className:"scenarios-box"},"(".concat(n.length,"/").concat(a.length,")"),i.a.createElement("button",{className:"green button",disabled:r,onClick:e.onComplete},e.nextText))}),ce=n(177),ie=n(42),le=n.n(ie),se=function(e){return i.a.createElement("ul",null,e.reactions.map((function(t){return i.a.createElement("li",{key:t.id,onClick:function(){e.onSelect(t.id)},className:"".concat(e.selected===t.id?"selected":"")},e.texts["reaction-".concat(e.scenario,"-").concat(t.id)])})))},ue=function(e){return e.correct?i.a.createElement("h1",{className:"correct"},e.texts["feedback-correct"]):i.a.createElement("h1",{className:"wrong"},e.texts["feedback-wrong"])};function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function de(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var me=i.a.createElement("defs",null,i.a.createElement("style",null,".a{fill:#fff;}.a,.b{stroke:#283583;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.75px;}.b{fill:none;}")),ve=i.a.createElement("title",null,"Back"),pe=i.a.createElement("circle",{className:"a",cx:15.02,cy:15.02,r:14.65}),be=i.a.createElement("path",{className:"b",d:"M11.64,16",transform:"translate(-0.97 -0.93)"}),ge=i.a.createElement("path",{className:"b",d:"M11.63,16",transform:"translate(-0.97 -0.93)"}),he=i.a.createElement("path",{className:"b",d:"M20.38,22.88",transform:"translate(-0.97 -0.93)"}),Ee=i.a.createElement("line",{className:"b",x1:19.39,y1:8.16,x2:10.65,y2:15.02}),Oe=i.a.createElement("line",{className:"b",x1:19.39,y1:21.98,x2:10.65,y2:15.11}),we=function(e){var t=e.svgRef,n=e.title,a=de(e,["svgRef","title"]);return i.a.createElement("svg",fe({width:30.04,height:30.04,viewBox:"0 0 30.04 30.04",ref:t},a),me,void 0===n?ve:n?i.a.createElement("title",null,n):null,pe,be,ge,he,Ee,Oe)},xe=i.a.forwardRef((function(e,t){return i.a.createElement(we,fe({svgRef:t},e))}));n.p;function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function je(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ke,Ne=i.a.createElement("style",{type:"text/css"},"\n\t.st0{fill:#FFFFFF;stroke:#283583;stroke-width:0.75;stroke-linecap:round;stroke-linejoin:round;}\n\t.st1{fill:none;stroke:#283583;stroke-width:0.75;stroke-linecap:round;stroke-linejoin:round;}\n"),Se=i.a.createElement("title",null,"Back"),Ce=i.a.createElement("circle",{className:"st0",cx:15,cy:15,r:14.6}),Te=i.a.createElement("path",{className:"st1",d:"M10.7,15.1"}),Re=i.a.createElement("path",{className:"st1",d:"M10.7,15.1"}),Me=i.a.createElement("path",{className:"st1",d:"M19.4,21.9"}),Pe=i.a.createElement("line",{className:"st1",x1:22.9,y1:7.2,x2:7.2,y2:22.9}),Ae=i.a.createElement("line",{className:"st1",x1:22.9,y1:22.9,x2:7.2,y2:7.2}),Ie=function(e){var t=e.svgRef,n=e.title,a=je(e,["svgRef","title"]);return i.a.createElement("svg",ye({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 30 30",style:{enableBackground:"new 0 0 30 30"},xmlSpace:"preserve",ref:t},a),Ne,void 0===n?Se:n?i.a.createElement("title",null,n):null,Ce,Te,Re,Me,Pe,Ae)},Le=i.a.forwardRef((function(e,t){return i.a.createElement(Ie,ye({svgRef:t},e))}));n.p,n(167);k.a.registerPlugin(ce.a),function(e){e[e.description=0]="description",e[e.reactions=1]="reactions",e[e.feedback=2]="feedback"}(ke||(ke={}));var Be=function(e){var t=e.content,n=Object(c.useRef)(null),a=Object(c.useRef)(!!e.selectedReaction),r=Object(c.useState)(ke.description),o=Object(m.a)(r,2),l=o[0],s=o[1],u=Object(c.useState)(),f=Object(m.a)(u,2),d=f[0],v=f[1],p=Object(c.useState)(e.selectedReaction),g=Object(m.a)(p,2),h=g[0],E=g[1],O=function(){s(ke.description)};Object(c.useEffect)((function(){var e=setTimeout((function(){var e,t;null===(e=n.current)||void 0===e||null===(t=e.querySelector(".content"))||void 0===t||t.scroll({top:0,left:0,behavior:"smooth"})}),500);return function(){clearTimeout(e)}}),[l]),Object(c.useEffect)((function(){b.a.add("correct","".concat("/vca","/sound/correct.mp3")),b.a.add("wrong","".concat("/vca","/sound/wrong.mp3"))}),[]);var w=Object(c.useMemo)((function(){var n;if(!h)return"";var a=null===(n=t.reactions.find((function(e){return e.id===h})))||void 0===n?void 0:n.id;return e.texts["reaction-".concat(e.scenario,"-").concat(a)]}),[t.reactions,e.scenario,e.texts,h]),x=Object(c.useMemo)((function(){var e;return!!h&&!0===(null===(e=t.reactions.find((function(e){return e.id===h})))||void 0===e?void 0:e.correct)}),[t.reactions,h]),y=function(e){if("IMG"===e.target.tagName){var t,n=null===(t=e.target)||void 0===t?void 0:t.getAttribute("data-img");n&&v(n)}},j=Object(c.useMemo)((function(){return t.image&&l!==ke.feedback?t.image:t.imageFeedback&&l===ke.feedback?t.imageFeedback:null}),[t,l]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"scenario-screen",ref:n},i.a.createElement("div",{className:"illustration"},i.a.createElement("div",{className:"scaler"},j&&i.a.createElement("img",{src:j,alt:""}),t.hotspots&&l!==ke.feedback&&t.hotspots.map((function(e){return i.a.createElement("img",{className:"hotspot",key:e.image,style:{left:"".concat(e.left,"%"),top:"".concat(e.top,"%"),width:"".concat(e.width,"%")},alt:"","data-img":e.image,onClick:y,src:e.hotspot})})))),i.a.createElement("div",{className:"content state-".concat(ke[l]," ").concat(a.current?"reopening":"")},i.a.createElement("div",{className:"description"},i.a.createElement(le.a,{source:e.texts["description-".concat(e.scenario)]}),i.a.createElement("div",{className:"buttons"},i.a.createElement("button",{className:"button right-align white",onClick:function(){s(ke.reactions)}},e.texts["button-next"]))),i.a.createElement("div",{className:"reactions"},i.a.createElement("h1",null,e.texts.reactions),i.a.createElement(se,{scenario:e.scenario,texts:e.texts,selected:h,onSelect:E,reactions:t.reactions}),i.a.createElement("div",{className:"buttons"},i.a.createElement("button",{className:"button white",onClick:O},e.texts["button-prev"]),i.a.createElement("button",{className:"button ".concat(h?"green":""),onClick:function(){s(ke.feedback),setTimeout((function(){x?(b.a.play("correct"),e.setCorrectReaction(h)):b.a.play("wrong")}),500)},disabled:!h},e.texts["button-check"]))),i.a.createElement("div",{className:"feedback"},i.a.createElement(ue,{texts:e.texts,correct:x}),i.a.createElement("p",{className:"reaction ".concat(x?"correct":"wrong")},w),i.a.createElement("h1",{className:"title"},"Feedback"),i.a.createElement(le.a,{source:e.texts["feedback-".concat(e.scenario)]}),i.a.createElement("div",{className:"buttons"},a.current&&i.a.createElement("button",{className:"button white",onClick:O},e.texts["button-prev"]),i.a.createElement("button",{className:"button green right-align",onClick:e.onBack},e.texts["button-continue"]))))),i.a.createElement("div",{className:"close"},i.a.createElement(xe,{onClick:e.onBack})),d&&i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:d,alt:"img"}),i.a.createElement("div",{className:"close-image"},i.a.createElement(Le,{onClick:function(){v(void 0)}}))))},De=(n(168),function(){return i.a.createElement("div",{className:"loading-background"},i.a.createElement("div",{className:"white-block"},i.a.createElement("div",{className:"outset"}),i.a.createElement("div",{className:"blue-block"})),i.a.createElement("div",{className:"subtext"},"Stay curious",i.a.createElement("span",{className:"dots"},i.a.createElement("span",{className:"dot1"},"."),i.a.createElement("span",{className:"dot2"},"."),i.a.createElement("span",{className:"dot3"},"."))))}),Fe=(n(169),function(e){return i.a.createElement("div",{className:"basedialog ".concat(e.className)},e.children)});function Ge(){return(Ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function We(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var He=i.a.createElement("defs",null,i.a.createElement("style",null,"\n            .star-empty {\n                fill: #f8f8f8;\n                stroke: #b0b0b0;\n                stroke-width: 3px;\n            }\n        ")),_e=i.a.createElement("path",{className:"star-empty",d:"M67.517,0l21.1,42.2,46.418,6.752L101.275,81.864l7.6,46.418L67.517,106.339,26.163,128.282l7.6-46.418L0,48.95,46.418,42.2Z",transform:"translate(3.223 3.354)"}),ze=function(e){var t=e.svgRef,n=e.title,a=We(e,["svgRef","title"]);return i.a.createElement("svg",Ge({width:141.478,height:134.378,viewBox:"0 0 141.478 134.378",ref:t},a),n?i.a.createElement("title",null,n):null,He,_e)},Je=i.a.forwardRef((function(e,t){return i.a.createElement(ze,Ge({svgRef:t},e))})),Xe=(n.p,n(170),function(e){return i.a.createElement(Fe,{className:"intro-dialog"},i.a.createElement("div",{className:"top"},i.a.createElement("h1",null,e.headerText)),i.a.createElement("div",{className:"center"},i.a.createElement("section",null,e.descriptionText)),i.a.createElement("div",{className:"bottom"},i.a.createElement(Je,{className:"star"}),i.a.createElement("span",{className:"stars-to-gain"},e.starsToGainText),i.a.createElement("button",{className:"green button start",onClick:e.onStart},e.startText)))});n(43),n(59);var qe=function(e,t){var n=p.Loader.shared;n.resources[e]?t(n.resources[e]):n.add(e).load((function(n,a){t(a[e])}))},Ue=function(e){var t=Object(c.useState)({}),n=Object(m.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(),i=Object(m.a)(o,2),l=i[0],s=i[1],f=Object(c.useCallback)((function(e){s(e)}),[]);return Object(c.useEffect)((function(){if(l){var t=Ze(l,a);if(t){var n=t.name,o=e(t);qe("".concat(o),(function(e){if(e.error)throw new Error("Loading ".concat(o,"\n").concat(e.error));var t=Object(d.a)(Object(d.a)({},a),{},Object(u.a)({},n,e));r(t)}))}}}),[l,e,a]),{loadComplete:!!l&&void 0===Ze(l,a),loadTilesets:f,tilesetsTextures:a}},Ze=function(e,t){return e.find((function(e){return!t[e.name]}))};function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function $e(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ke,Qe=i.a.createElement("defs",null,i.a.createElement("style",null,"\n            .star-full {\n                fill: #fcda00;\n            }\n        ")),Ye=i.a.createElement("path",{className:"star-full",d:"M67.517,0l21.1,42.2,46.418,6.752L101.275,81.864l7.6,46.418L67.517,106.339,26.163,128.282l7.6-46.418L0,48.95,46.418,42.2Z"}),et=function(e){var t=e.svgRef,n=e.title,a=$e(e,["svgRef","title"]);return i.a.createElement("svg",Ve({width:135.033,height:128.282,viewBox:"0 0 135.033 128.282",ref:t},a),n?i.a.createElement("title",null,n):null,Qe,Ye)},tt=i.a.forwardRef((function(e,t){return i.a.createElement(et,Ve({svgRef:t},e))})),nt=(n.p,n(172),function(e){var t=e.total,n=e.mistakes,a=Math.max(t-n,0);Object(c.useEffect)((function(){window.setLevelScore&&window.setLevelScore(1,a,t)}),[a,t]);return i.a.createElement(Fe,{className:"complete-dialog"},i.a.createElement("div",{className:"block"},i.a.createElement("h1",null,e.headerText)),i.a.createElement("div",{className:"block score"},e.scoreText.replace("{0}",a.toString()).replace("{1}",t.toString())),i.a.createElement("div",{className:"block stars"},function(){for(var e=[],n=0;n<t;n++)e.push(i.a.createElement("div",{key:"star".concat(n)},i.a.createElement(Je,null),n<a&&i.a.createElement(tt,{className:"full"})));return e}()),i.a.createElement("div",{className:"bottom"},i.a.createElement("button",{className:"green button",onClick:e.onTryAgain},e.tryAgainText),i.a.createElement("button",{className:"red button",onClick:e.onExit},e.exitText)))});n(173),n(174);ne.a.registerPIXI(PIXI),k.a.registerPlugin(ne.a),function(e){e[e.intro=0]="intro",e[e.normal=2]="normal",e[e.wrong=4]="wrong",e[e.correct=8]="correct",e[e.complete=16]="complete"}(Ke||(Ke={}));var at=function(){var e=Object(c.useState)(Ke.intro),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({}),o=Object(m.a)(r,2),l=o[0],s=o[1],v=Object(c.useState)(),b=Object(m.a)(v,2),g=b[0],h=b[1],E=Object(c.useState)(),O=Object(m.a)(E,2),w=O[0],x=O[1],y=Object(c.useState)(),j=Object(m.a)(y,2),k=j[0],N=j[1],S=Object(c.useState)([]),C=Object(m.a)(S,2),T=C[0],R=C[1],M=Object(c.useState)({}),P=Object(m.a)(M,2),A=P[0],I=P[1],L=Object(c.useState)(!1),B=Object(m.a)(L,2),D=B[0],F=B[1],W=Object(c.useCallback)((function(){F(!1)}),[]),H=Object(c.useCallback)((function(e){window.setGameData(e)}),[]),_=Object(c.useCallback)((function(e){if(PIXI.settings.SCALE_MODE=p.SCALE_MODES.NEAREST,x(e),e.translations){var t=e.translations.reduce((function(e,t){return e[t.key]=t.value,e}),{});s(t)}}),[]),z=Object(c.useMemo)((function(){return null===w||void 0===w?void 0:w.content}),[w]),J=Object(c.useMemo)((function(){return null===w||void 0===w?void 0:w.levelsCompleted}),[w]),X=Ue(rt),q=X.loadComplete,U=X.loadTilesets,Z=X.tilesetsTextures;Object(c.useEffect)((function(){if(z){var e=z.mapJson;qe("".concat("/vca","/").concat(e),(function(e){h(e.data)}))}}),[z]),Object(c.useEffect)((function(){g&&U(g.tilesets)}),[U,g]),Object(c.useEffect)((function(){0}),[z,_]);var V=Object(c.useMemo)((function(){var e,t,n;if(J&&(null===z||void 0===z||null===(e=z.finder)||void 0===e?void 0:e.final))return Object(d.a)(Object(d.a)({},null===z||void 0===z||null===(t=z.finder)||void 0===t?void 0:t.final),{},{data:Object(d.a)(Object(d.a)({},null===z||void 0===z||null===(n=z.finder)||void 0===n?void 0:n.final.data),{},{levelsCompleted:J})})}),[z,J]),$=Object(c.useCallback)((function(){a(Ke.normal)}),[]),K=Object(c.useMemo)((function(){var e,t=(null===J||void 0===J||null===(e=J[0])||void 0===e?void 0:e.score)||0,n=(null===z||void 0===z?void 0:z.stars)||1;return(""+l["intro-stars-to-gain"]).replace("{0}",""+t).replace("{1}",""+n)}),[z,J,l]),Q=Object(c.useMemo)((function(){return Object.keys(A||{})}),[A]);return i.a.createElement(i.a.Fragment,null,!q&&i.a.createElement(De,null),i.a.createElement("div",{className:"background"},i.a.createElement(ee,{gameDataReceived:_,disableBackButton:!!D||!!k}),q&&i.a.createElement(i.a.Fragment,null,n===Ke.intro&&i.a.createElement(Xe,{onStart:$,headerText:l["intro-header"],descriptionText:l["intro-description"],starsToGainText:K,startText:l["intro-start"]}),n===Ke.normal&&g&&z&&i.a.createElement(i.a.Fragment,null,i.a.createElement(G,{content:z,mapData:g,tilesetsTextures:Z,onSituationClick:function(e){(null===z||void 0===z?void 0:z.finder)&&z.finder.situations.indexOf(e)>-1&&-1===T.indexOf(e)&&R([].concat(Object(f.a)(T),[e]))},foundSituations:T,solvedScenarios:Q,onScenarioClick:function(e){N(e)}}),(null===z||void 0===z?void 0:z.finder)&&i.a.createElement(ae,{content:z.finder,instructionText:l["finder-instruction"],nextText:l["button-next"],foundSituations:T,onOpenGame:function(){F(!0)}}),(null===z||void 0===z?void 0:z.scenarios)&&i.a.createElement(oe,{scenarios:z.scenarios,solvedScenarios:Q,instructionText:l["finder-instruction"],nextText:l["button-next"],onComplete:function(){a(Ke.complete),H(Object(d.a)(Object(d.a)({},w),{},{levelsCompleted:[{level:1,score:Q.length,maxScore:Q.length}]}))}})),V&&i.a.createElement(re,{content:V,open:D,onBack:W,onSetGameData:H}),k&&i.a.createElement(Be,{scenario:k,content:null===z||void 0===z?void 0:z.scenarios[k],selectedReaction:A[k],setCorrectReaction:function(e){I(Object(d.a)(Object(d.a)({},A),{},Object(u.a)({},k,e)))},texts:l,onBack:function(){N(void 0)}}),n===Ke.complete&&i.a.createElement(nt,{onTryAgain:function(){a(Ke.normal),I({})},onExit:function(){te({type:"exit"})},total:Object.keys(null===z||void 0===z?void 0:z.scenarios).length||0,mistakes:0,headerText:l["complete-header"],scoreText:l["complete-score"],tryAgainText:l["complete-try-again"],exitText:l["complete-exit"]}))))},rt=function(e){return"".concat("/vca","/maps/tilesets/").concat(e.name,".json")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(at,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e){e.exports=JSON.parse('{"alpha":{"start":0.25,"end":0},"scale":{"start":0.04,"end":0.29,"minimumScaleMultiplier":1},"color":{"start":"#85888d","end":"#100f0c"},"speed":{"start":100,"end":200,"minimumSpeedMultiplier":1},"acceleration":{"x":10,"y":-30},"maxSpeed":200,"startRotation":{"min":265,"max":270},"noRotation":false,"rotationSpeed":{"min":8,"max":0},"lifetime":{"min":0.5,"max":3.05},"blendMode":"normal","frequency":0.0005,"emitterLifetime":-1,"maxParticles":300,"pos":{"x":0,"y":0},"addAtBack":true,"spawnType":"point"}')},63:function(e,t,n){e.exports=n(175)},68:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.effc52ac.chunk.js.map