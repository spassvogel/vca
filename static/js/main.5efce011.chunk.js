(this.webpackJsonpvca=this.webpackJsonpvca||[]).push([[0],{39:function(e){e.exports=JSON.parse('{"alpha":{"start":0.25,"end":0},"scale":{"start":0.04,"end":0.29,"minimumScaleMultiplier":1},"color":{"start":"#85888d","end":"#100f0c"},"speed":{"start":100,"end":200,"minimumSpeedMultiplier":1},"acceleration":{"x":10,"y":-30},"maxSpeed":200,"startRotation":{"min":265,"max":270},"noRotation":false,"rotationSpeed":{"min":8,"max":0},"lifetime":{"min":0.5,"max":3.05},"blendMode":"normal","frequency":0.0005,"emitterLifetime":-1,"maxParticles":300,"pos":{"x":0,"y":0},"addAtBack":true,"spawnType":"point"}')},44:function(e,t,n){e.exports=n(72)},49:function(e,t,n){},50:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a,r,o,i=n(0),c=n.n(i),l=n(36),s=n.n(l),u=(n(49),n(42)),f=n(21),d=n(9),m=(n(50),n(10));!function(e){e.tilelayer="tilelayer",e.objectgroup="objectgroup"}(a||(a={})),function(e){e.orthagonal="orthagonal",e.isometric="isometric",e.staggered="staggered",e.hexagonal="hexagonal"}(r||(r={})),function(e){e.rightUp="right-up",e.rightDown="right-down",e.leftUp="left-up",e.leftDown="left-down"}(o||(o={}));var v=n(5),p=n(38),b=Object(i.forwardRef)((function(e,t){var n=Object(m.useApp)();return window.PIXI=v,c.a.createElement(g,Object.assign({app:n},e,{ref:t}))})),g=Object(m.PixiComponent)("Viewport",{create:function(e){var t=new p.a({screenWidth:e.screenWidth,screenHeight:e.screenHeight,worldWidth:e.worldWidth,worldHeight:e.worldHeight,ticker:e.app.ticker});t.on("clicked",(function(t){e.onClick&&e.onClick(t)}));var n=e.minScale,a=void 0===n?.2:n,r=e.maxScale,o=void 0===r?1:r;return t.drag().pinch().wheel().clamp({direction:"all"}).setZoom(.2).clampZoom({minScale:a,maxScale:o}).decelerate(),t}}),h=b,w=function(e,t,n){var a=E(t,n)+64*e[0]+64*-e[1],r=64*(e[0]+e[1])/2+64+128;return new v.Point(a,r)},E=function(e,t){return 32*(t-e)+128*(t+e)/2/2};window.PIXI=v,n(61);var y=Object(m.PixiComponent)("FloorTileLayer",{create:function(e){return new window.PIXI.tilemap.CompositeRectTileLayer(0,[e.texture])},applyProps:function(e,t,n){var a=n.layer,r=n.tileset,o=n.verticalTiles,i=n.horizontalTiles,c=n.spritesheet;if(a.data)for(var l=function(t){if(a.data[t]>0){var n=[t%i,Math.floor(t/i)],l=w(n,i,o),s=r.tiles.find((function(e){return e.id===a.data[t]-r.firstgid})),u=null===s||void 0===s?void 0:s.image.substr((null===s||void 0===s?void 0:s.image.lastIndexOf("/"))+1);e.addFrame(c.textures[u],l.x-64,l.y-64)}},s=0;s<a.data.length;s++)l(s)}}),O=n(12),j=function(e){var t=Object(i.useRef)(null),n=Object(i.useRef)(),a=Object(i.useState)(e.position||new v.Point),r=Object(d.a)(a,2),o=r[0],l=(r[1],e.bounce?"".concat("/vca","/images/ui/marker.svg"):"".concat("/vca","/images/ui/marker-green.svg"));Object(i.useEffect)((function(){O.a.from(t.current,{duration:1,ease:"elastic.out(2, 0.5)",pixi:{visible:!1,scale:.1}}).delay(e.delay||0)}),[e.delay]),Object(i.useEffect)((function(){var n;return!1!==e.bounce&&(n=O.a.to(t.current,{duration:.5,yoyo:!0,repeat:-1,pixi:{y:"-=40"}}).delay(1+Math.random())),function(){var e;null===(e=n)||void 0===e||e.kill()}}),[e.bounce]);var s=function(e){},u=function(){n.current=void 0},f=function(){};return c.a.createElement(m.Sprite,Object.assign({},e,{anchor:[.5,.5],position:o,ref:t,interactive:!0,image:l,mousedown:s,touchstart:s,mouseup:u,mouseupoutside:u,mousemove:f,touchmove:f}))},x=function(e,t){for(var n,a=t.length-1;a>=0&&!((n=t[a]).firstgid<=e);a--);return n},k=n(39),N=n(30),S=n(40),C=Object(m.PixiComponent)("ParticleEmitter",{create:function(){return new v.ParticleContainer},applyProps:function(e,t,n){var a=n.image,r=n.config,o=Object(N.a)(n,["image","config"]);Object(m.applyDefaultProps)(e,t,o);var i=this._emitter;if(!i){i=new S.a(e,[v.Texture.from(a)],r);var c=performance.now();i.emit=!0,function e(){i.raf=requestAnimationFrame(e);var t=performance.now();i.update(3e-4*(t-c)),c=t}()}this._emitter=i},willUnmount:function(){this._emitter&&(this._emitter.emit=!1,cancelAnimationFrame(this._emitter.raf))}}),T=function(e){var t=e.x,n=void 0===t?0:t,a=e.y,r=void 0===a?0:a;return c.a.createElement(C,{name:"smoke",x:n,y:r,image:"".concat("/vca","/effects/smokeparticle.png"),config:k,pivot:[-64,0]})},R=n(6),P=function(e){var t=e.data,n=e.mapData,a=e.tilesetsTextures,r=e.found,o=e.onClick,l=Object(i.useRef)(null),s=Object(i.useRef)(null);if(Object(i.useEffect)((function(){l.current&&O.a.from(l.current,{duration:1,ease:"elastic.out(2, 0.5)",pixi:{visible:!1,scale:.1}})}),[r]),Object(i.useEffect)((function(){var e,a,r;if(s.current){var o=null===(e=t.properties)||void 0===e?void 0:e.find((function(e){return"animation"===e.name}));if(o)for(var i=JSON.parse(o.value),c=parseFloat((null===(a=t.properties)||void 0===a||null===(r=a.find((function(e){return"delay"===e.name})))||void 0===r?void 0:r.value)||0),l=O.a.timeline({repeat:-1,delay:c}),u=1;u<i.length;u++){var f=i[u-1],d=i[u],m=Math.sqrt(Math.pow(d[0]-f[0],2)+Math.pow(d[1]-f[1],2)),v=w(d,n.width,n.height);l.to(s.current,{duration:.25*m,pixi:{x:v.x,y:v.y},ease:R.b.easeNone})}}}),[n.height,n.width,t.properties]),t.polygon){var u=[t.x/64,t.y/64],f=t.polygon.reduce((function(e,t){return e.push(t.y+t.x),e.push(t.y/2-t.x/2),e}),[]);return c.a.createElement(m.Graphics,{key:"".concat(t.type).concat(t.name),draw:function(e){e.beginFill(12245589),e.drawPolygon(f),e.endFill()},position:w(u,n.width,n.height),pivot:[64,32]})}if(t.gid){var v=t.x,p=t.y,b=t.gid,g=[v/64-1,p/64-1],h=536870911&b,E=x(h,n.tilesets);if(!E||!E.tiles||0===b)return null;var y=0!==(1073741824&b),j=[1,1];0!==(2147483648&b)&&(j[0]*=-1),y&&(j[1]*=-1);var k=E.tiles.find((function(e){return e.id===h-E.firstgid}));if(!k)return null;var N=k.image.split("/"),S=Object(d.a)(N,3),C=(S[0],S[1]),T=S[2];return a[C]||console.warn("Could not find spritesheet ".concat(C," ").concat(a)),a[C].textures[T]||console.warn("Could not find texture ".concat(C," ").concat(T)),c.a.createElement(m.Sprite,{name:"".concat(t.name,": ").concat(v,",").concat(p," (").concat(T,")"),ref:s,scale:j,texture:a[C].textures[T],anchor:[0,1],pivot:[64,0],position:w(g,n.width,n.height),pointerdown:function(){return o(t.name)},interactive:!!t.name},A(t.properties),r&&c.a.createElement(m.Sprite,{ref:l,image:"".concat("/vca","/images/ui/check.svg"),scale:.8,anchor:[-.1,1],pivot:[64,0]}))}return null},A=function(e){if(!e)return null;var t,n,a=e.find((function(e){return"offset"===e.name}));if(a){var r=a.value.split(","),o=Object(d.a)(r,2);t=o[0],n=o[1]}var i=e.find((function(e){return"effect"===e.name}));return"smoke1"===(null===i||void 0===i?void 0:i.value)?c.a.createElement(T,{x:t,y:n}):null};var M=function(e){var t=e.content,n=e.foundSituations,r=e.mapData,o=e.tilesetsTextures,l=e.onSituationClick,s=Object(i.useState)(window.innerWidth),u=Object(d.a)(s,2),f=u[0],p=u[1],b=Object(i.useState)(window.innerHeight),g=Object(d.a)(b,2),E=g[0],O=g[1],k=64*(((null===r||void 0===r?void 0:r.width)||1)+((null===r||void 0===r?void 0:r.height)||1)),N=32*(((null===r||void 0===r?void 0:r.width)||1)+((null===r||void 0===r?void 0:r.height)||1))+128,S=Object(i.useRef)(null);Object(i.useEffect)((function(){S.current&&S.current.moveCenter(k/2,N/2)}),[r,N,k,o]),Object(i.useEffect)((function(){var e=function(){p(window.innerWidth),O(window.innerHeight)};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),function(){window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}}),[]);var C=function(e,t,n){return e.map((function(e,a){var i=536870911&e,l=x(i,r.tilesets);if(!l||!l.tiles||0===e)return null;var s=r.width,u=a%s,f=Math.floor(a/s),v=0!==(1073741824&e),p=[1,1];0!==(2147483648&e)&&(p[0]*=-1),v&&(p[1]*=-1);var b=l.tiles.find((function(e){return e.id===i-l.firstgid}));if(!b)return null;var g=b.image.split("/"),h=Object(d.a)(g,3),E=h[1],y=h[2];return o[E]||console.warn("Could not find spritesheet ".concat(y," ").concat(E," ").concat(o)),o[E].textures[y]||console.warn("Could not find texture ".concat(E," ").concat(y)),c.a.createElement(m.Sprite,{key:a,name:"".concat(t.name,": ").concat(u,",").concat(f," (").concat(y,")"),scale:p,texture:o[E].textures[y],anchor:[0,1],pivot:[64,0],position:w([u,f],r.width,r.height),zIndex:100*a+n})}))},T=function(e){return e.filter((function(e){return e.visible})).map((function(e,t){var a=n.indexOf(e.name)>-1;return c.a.createElement(P,{data:e,key:"".concat(e.type).concat(e.name).concat(t),found:a,tilesetsTextures:o,mapData:r,onClick:l})}))},R=function(t,n,a){var o=.5*a,i=w(n.location,r.width,r.height);return c.a.createElement(j,{position:i,pointertap:function(){return function(t){e.onScenarioClick(t)}(t)},delay:o,bounce:!0,key:t,name:t})},A={sharedLoader:!0,backgroundColor:L(null===r||void 0===r?void 0:r.backgroundcolor)};return c.a.createElement(m.Stage,{width:f,height:E,className:"background",options:A},c.a.createElement(h,{worldWidth:k,worldHeight:N,screenWidth:f,screenHeight:E,ref:S},function(e){if(!e)return console.warn("No layer with name 'floor' found!"),null;var t=I(e).find(Boolean);if(!t)return console.warn("Layer with name 'floor' is empty?"),null;var n=x(536870911&t,r.tilesets);if(!n)return console.warn("No tileset found for floor layer. Huh?"),null;var a=o[n.name];return v.utils.clearTextureCache(),a.spritesheet?c.a.createElement(y,{texture:a.spritesheet._texture,verticalTiles:r.height,horizontalTiles:r.width,layer:e,tileset:n,spritesheet:a.spritesheet}):(console.warn("No texture loaded found for floor layer. Was looking for ".concat(n.name)),null)}(r.layers.find((function(e){return"floor"===e.name}))),c.a.createElement(m.Container,{sortableChildren:!0},r.layers.filter((function(e){return e.visible&&"floor"!==e.name&&e.type===a.tilelayer})).map((function(e,t){var n=I(e);return C(n,e,t)}))),c.a.createElement(m.Container,{sortableChildren:!0},function(e){return e.filter((function(e){return e.visible&&e.type===a.objectgroup})).map((function(e){return T(e.objects)}))}(r.layers)),Object.entries(t.scenarios||[]).map((function(e,t){var n=Object(d.a)(e,2),a=n[0],r=n[1];return R(a,r,t)}))))},L=function(e){if(e)return parseInt(e.substring(1),16)},I=function(e){var t=e.data;return"string"!==typeof t?t:(e.encoding,e.compression,[])};n(62);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var H=c.a.createElement("defs",null,c.a.createElement("style",null,".a{fill:#fff;}.a,.b{stroke:#283583;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.75px;}.b{fill:none;}")),G=c.a.createElement("title",null,"Back"),W=c.a.createElement("circle",{className:"a",cx:15.02,cy:15.02,r:14.65}),q=c.a.createElement("path",{className:"b",d:"M11.64,16",transform:"translate(-0.97 -0.93)"}),F=c.a.createElement("path",{className:"b",d:"M11.63,16",transform:"translate(-0.97 -0.93)"}),z=c.a.createElement("path",{className:"b",d:"M20.38,22.88",transform:"translate(-0.97 -0.93)"}),_=c.a.createElement("line",{className:"b",x1:19.39,y1:8.16,x2:10.65,y2:15.02}),U=c.a.createElement("line",{className:"b",x1:19.39,y1:21.98,x2:10.65,y2:15.11}),J=function(e){var t=e.svgRef,n=e.title,a=D(e,["svgRef","title"]);return c.a.createElement("svg",B({width:30.04,height:30.04,viewBox:"0 0 30.04 30.04",ref:t},a),H,void 0===n?G:n?c.a.createElement("title",null,n):null,W,q,F,z,_,U)},X=c.a.forwardRef((function(e,t){return c.a.createElement(J,B({svgRef:t},e))})),Z=(n.p,function(e){var t=e.gameDataReceived,n=e.disableBackButton;return Object(i.useEffect)((function(){var e;return e=setInterval((function(){window.GAMEDATA&&(clearInterval(e),t(window.GAMEDATA))}),250),window.setGameData=function(e){V({type:"setGameData",data:e})},window.exit=function(){V({type:"exit"})},window.getGameData=function(){return window.GAMEDATA},function(){clearInterval(e)}}),[t]),!0===n?null:c.a.createElement("div",{className:"close"},c.a.createElement(X,{onClick:function(){V({type:"back"})}}))}),V=function(e){if(window.hasOwnProperty("webkit")&&window.webkit.hasOwnProperty("messageHandlers")){var t=JSON.stringify(e);webkit.messageHandlers.cordova_iab.postMessage(t)}else window.parent.postMessage(e,"*")},Y=n(73),$=(n(63),function(e){var t=e.foundSituations.length<e.content.situations.length;return c.a.createElement("div",{className:"finder-box"},"".concat(e.instruction," (").concat(e.foundSituations.length,"/").concat(e.content.situations.length,")"),c.a.createElement("button",{className:"green button",disabled:t,onClick:e.onOpenGame},e.nextText))}),K=(n(64),function(e){var t=e.onBack,n=e.onSetGameData,a=e.content,r=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e;null===r||void 0===r||null===(e=r.current)||void 0===e||e.addEventListener("load",(function(){var e,t;null===r||void 0===r||null===(e=r.current)||void 0===e||null===(t=e.contentWindow)||void 0===t||t.postMessage(a.data,"*")}),!0),window.addEventListener("message",(function(e){switch(console.log("received msg::",e.data,e.data.type),e.data.type){case"setGameData":n(e.data.data);break;case"back":t&&t();break;case"exit":console.log("iframe modal:::received exit"),V({type:"exit"})}}),!0)}),[a.data,t,n]),c.a.createElement("iframe",{src:a.url,ref:r,title:a.url,className:"iframe-content",style:{display:e.open?"block":"none"}})});n(65);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var te=c.a.createElement("style",{type:"text/css"},"\n\t.st0{fill:none;stroke:#3FA548;stroke-width:32;}\n"),ne=c.a.createElement("defs",null),ae=c.a.createElement("g",{id:"Page-1"},c.a.createElement("polyline",{id:"checkmark",className:"st0",points:"11.33,88.97 88.95,166.87 244.67,11.32  "})),re=function(e){var t=e.svgRef,n=e.title,a=ee(e,["svgRef","title"]);return c.a.createElement("svg",Q({id:"m-check-mark",x:"0px",y:"0px",width:"255.97px",height:"189.51px",viewBox:"0 0 255.97 189.51",style:{enableBackground:"new 0 0 255.97 189.51"},xmlSpace:"preserve",ref:t},a),n?c.a.createElement("title",null,n):null,te,ne,ae)},oe=c.a.forwardRef((function(e,t){return c.a.createElement(re,Q({svgRef:t},e))})),ie=(n.p,function(e){var t=e.scenarios,n=Object.keys(t);return c.a.createElement("div",{className:"scenarios-box"},c.a.createElement("ul",null,n.map((function(n,a){return function(n,a){var r=t[n];return void 0===e.solvedScenarios[a]?c.a.createElement("li",{className:"",onClick:function(){},key:n},r.title):c.a.createElement("li",{className:"completed",key:n},c.a.createElement(oe,{className:"check"}),r.title)}(n,a)}))))}),ce=n(74),le=n(26);var se,ue,fe=function(e){var t=e.sceneConfig,n=e.imageBaseUrl,a=Object(N.a)(e,["sceneConfig","imageBaseUrl"]),r=Object(i.useState)(1),o=Object(d.a)(r,2),l=o[0],s=o[1];return Object(i.useEffect)((function(){var e=function(){window.innerWidth<1280||window.innerHeight<720?1280-window.innerWidth>720-window.innerHeight?s(window.innerWidth/1280):s(window.innerHeight/720):s(1)};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),c.a.createElement(m.Stage,{width:1280*l,height:720*l,className:"scene",options:{backgroundColor:16777215}},c.a.createElement(m.Container,Object.assign({},a,{scale:l}),t.map((function(e){return function(e){var t=[e.scale||1,e.scale||1];return e.flipped&&(t[0]=-t[0]),c.a.createElement(m.Sprite,{image:"".concat(n).concat(e.image),key:e.image,position:e.position||[0,0]})}(e)}))))};n(66);!function(e){e.scenario="scenario",e.finder="finder"}(se||(se={})),function(e){e.caption="caption",e.speech="speech",e.image="image"}(ue||(ue={})),O.a.registerPlugin(ce.a);var de=function(e){var t=e.content,n=e.selectedAnswer,a=void 0===n?null:n,r=t.imageBaseUrl,o=Object(i.useState)(a),l=Object(d.a)(o,2),s=l[0],u=l[1],f=Object(i.useMemo)((function(){return null===s?null:e.content.reactions[s]}),[e.content.reactions,s]),m=Object(i.useState)(null!=a),v=Object(d.a)(m,2),p=v[0],b=v[1],g=Object(i.useState)((null===f||void 0===f?void 0:f.scene)||e.content.scene),h=Object(d.a)(g,2),w=h[0],E=h[1],y=Object(i.useRef)(null),j=Object(i.useRef)(null),x=Object(i.useRef)(null),k=Object(i.useRef)(null),N=Object(i.useRef)(null),S=Object(i.useRef)(null);Object(i.useEffect)((function(){le.a.add("correct","".concat("/vca","/sound/correct.mp3")),le.a.add("wrong","".concat("/vca","/sound/wrong.mp3"))}),[]);var C=Object(i.useRef)(),T=Object(i.useCallback)((function(){var e=O.a.timeline();C.current=e;var n=x.current,a=k.current;O.a.killTweensOf(n),O.a.killTweensOf(y.current),O.a.killTweensOf(a),S.current&&S.current.removeAttribute("style"),y.current.removeAttribute("style"),j.current.removeAttribute("style"),a.removeAttribute("style"),n.innerHTML=t.sequence[0].text,t.sequence.forEach((function(t,a){var r=function(){j.current&&(j.current.style.visibility=t.type===ue.speech?"visible":"hidden"),t.type!==ue.image&&(y.current&&(y.current.className="balloon ".concat(t.type)),n.innerHTML=t.text,t.balloonArrowPos&&j.current&&(j.current.style.right="".concat(t.balloonArrowPos,"%")),P()),t.scene&&E(t.scene)};switch(e.add("seq-".concat(a)),t.type){case ue.caption:e.to(n,{onStart:r,duration:.025*t.text.length/1,text:{value:t.text,oldClass:"hidden",newClass:"visible"},ease:R.b.easeNone}),e.to(n,{duration:3});break;case ue.speech:e.to(n,{onStart:r,duration:.045*t.text.length/1,ease:R.b.easeNone});break;case ue.image:e.to(y.current,{onStart:r,duration:.25,autoAlpha:0,ease:R.b.easeNone}),e.to(j.current,{duration:.25,autoAlpha:0,ease:R.b.easeNone},"-=.25")}})),e.add("seq-".concat(t.sequence.length)),e.to(y.current,{delay:1,duration:.5,autoAlpha:0,ease:R.b.easeNone}),e.add("end"),e.to(a,{onStart:function(){S.current&&(S.current.style.display="none"),j.current&&(j.current.style.visibility="hidden")},duration:.5,left:0,ease:R.d.easeInOut},"-=1")}),[t.sequence]),P=function(){if(y.current&&j.current){var e=y.current.getBoundingClientRect();j.current.style.top="".concat(y.current.offsetTop+e.height,"px")}};Object(i.useEffect)((function(){return window.addEventListener("resize",P),function(){window.removeEventListener("resize",P)}}),[]);var A=function(){if(C.current){var e=parseInt(C.current.currentLabel().substring("seq-".length));isNaN(e)||C.current.seek("seq-".concat(e+1),!1)}};Object(i.useEffect)((function(){a?(k.current.style.left="0px",y.current.style.visibility="hidden"):T()}),[t.sequence,T,a]);var M=function(){b(!0),E(f.scene),f.correct?(le.a.play("correct"),e.setCorrectAnswer(s)):le.a.play("wrong")},L=function(){C.current&&(E(e.content.scene),u(null),b(!1),C.current.seek("end",!1))},I=function(e,t){if(null===s)return c.a.createElement("li",{key:e,className:"normal",onClick:function(e){return function(e,t){if(e.className="animating",N.current){var n=N.current.querySelectorAll(".options .normal");O.a.to(n,{duration:.5,opacity:0,ease:R.b.easeNone});var a=N.current.querySelector(".options").getBoundingClientRect().top,r=e.getBoundingClientRect().top,o=Math.abs(a-r);O.a.to(e,{duration:.5,top:-o,ease:R.b.easeNone,onComplete:function(){setTimeout((function(){e.className="",u(t)}),250)}})}}(e.currentTarget,t)}},c.a.createElement("div",{className:"text"},e));if(s===t){var n="selected";return p&&(n=(null===f||void 0===f?void 0:f.correct)?"correct":"wrong"),c.a.createElement("li",{key:e,className:n},c.a.createElement("div",{className:"text"},e))}};return c.a.createElement("div",{className:"scenario-screen",ref:N},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"title"},c.a.createElement("div",{className:"close"},c.a.createElement(X,{onClick:function(){e.onClose()}})),t.title),c.a.createElement("div",{className:"situation",onClick:A},e.content.scene&&c.a.createElement(fe,{sceneConfig:w,imageBaseUrl:r}),c.a.createElement("div",{className:"inset",ref:k},c.a.createElement("p",null,t.description),c.a.createElement("ul",{className:"options"},t.options.map((function(e,t){return I(e,t)}))),f?p?c.a.createElement(c.a.Fragment,null,(null===f||void 0===f?void 0:f.correct)&&c.a.createElement("p",{className:"right-option"},"You\u2019ve chosen the right option!"),f.text.split("\n").map((function(e){return c.a.createElement("p",{key:e.substring(0,10)},e)})),!(null===f||void 0===f?void 0:f.correct)&&c.a.createElement("button",{onClick:L,className:"button-replay"},"try again")):c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,f.confirmText),c.a.createElement("p",{className:"yesno"},c.a.createElement("button",{onClick:M},"yes"),c.a.createElement("span",{className:"motivation"},f.yesText)),c.a.createElement("p",{className:"yesno"},c.a.createElement("button",{onClick:L},"no"),c.a.createElement("span",{className:"motivation"},f.noText))):null),c.a.createElement("div",{className:"balloon",ref:y},c.a.createElement("span",{ref:x})),c.a.createElement("div",{className:"balloon-arrow",ref:j,style:{visibility:"hidden"}})),!s&&c.a.createElement("div",{className:"controls-bottomright"},c.a.createElement("button",{className:"button-replay",onClick:function(){E(e.content.scene),u(null),b(!1),T()}},"replay"),c.a.createElement("button",{className:"button-next",ref:S,onClick:A},">"))))},me=(n(67),function(){return c.a.createElement("div",{className:"loading-background"},c.a.createElement("div",{className:"white-block"},c.a.createElement("div",{className:"outset"}),c.a.createElement("div",{className:"blue-block"})),c.a.createElement("div",{className:"subtext"},"Stay curious",c.a.createElement("span",{className:"dots"},c.a.createElement("span",{className:"dot1"},"."),c.a.createElement("span",{className:"dot2"},"."),c.a.createElement("span",{className:"dot3"},"."))))}),ve=(n(68),function(e){return c.a.createElement("div",{className:"basedialog ".concat(e.className)},e.children)});function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function be(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ge=c.a.createElement("defs",null,c.a.createElement("style",null,"\n            .star-empty {\n                fill: #f8f8f8;\n                stroke: #b0b0b0;\n                stroke-width: 3px;\n            }\n        ")),he=c.a.createElement("path",{className:"star-empty",d:"M67.517,0l21.1,42.2,46.418,6.752L101.275,81.864l7.6,46.418L67.517,106.339,26.163,128.282l7.6-46.418L0,48.95,46.418,42.2Z",transform:"translate(3.223 3.354)"}),we=function(e){var t=e.svgRef,n=e.title,a=be(e,["svgRef","title"]);return c.a.createElement("svg",pe({width:141.478,height:134.378,viewBox:"0 0 141.478 134.378",ref:t},a),n?c.a.createElement("title",null,n):null,ge,he)},Ee=c.a.forwardRef((function(e,t){return c.a.createElement(we,pe({svgRef:t},e))})),ye=(n.p,n(69),function(e){return c.a.createElement(ve,{className:"intro-dialog"},c.a.createElement("div",{className:"top"},c.a.createElement("h1",null,e.headerText)),c.a.createElement("div",{className:"center"},c.a.createElement("section",null,e.descriptionText)),c.a.createElement("div",{className:"bottom"},c.a.createElement(Ee,{className:"star"}),c.a.createElement("span",{className:"stars-to-gain"},e.starsToGainText),c.a.createElement("button",{className:"green button start",onClick:e.onStart},e.startText)))}),Oe=n(29);n(32),n(41);var je,xe=function(e,t){var n=v.Loader.shared;n.resources[e]?t(n.resources[e]):n.add(e).load((function(n,a){t(a[e])}))},ke=function(e){var t=Object(i.useState)({}),n=Object(d.a)(t,2),a=n[0],r=n[1],o=Object(i.useState)(),c=Object(d.a)(o,2),l=c[0],s=c[1],u=Object(i.useCallback)((function(e){s(e)}),[]);return Object(i.useEffect)((function(){if(l){var t=Ne(l,a);if(t){var n=t.name,o=e(t);xe("".concat(o),(function(e){if(e.error)throw new Error("Loading ".concat(o,"\n").concat(e.error));var t=Object(f.a)(Object(f.a)({},a),{},Object(Oe.a)({},n,e));r(t)}))}}}),[l,e,a]),{loadComplete:!!l&&void 0===Ne(l,a),loadTilesets:u,tilesetsTextures:a}},Ne=function(e,t){return e.find((function(e){return!t[e.name]}))};n(71);Y.a.registerPIXI(PIXI),O.a.registerPlugin(Y.a),function(e){e[e.intro=0]="intro",e[e.normal=2]="normal",e[e.wrong=4]="wrong",e[e.correct=8]="correct",e[e.complete=16]="complete"}(je||(je={}));var Se=function(){var e=Object(i.useState)(je.intro),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)({}),o=Object(d.a)(r,2),l=o[0],s=o[1],m=Object(i.useState)(),p=Object(d.a)(m,2),b=p[0],g=p[1],h=Object(i.useState)(),w=Object(d.a)(h,2),E=w[0],y=w[1],O=Object(i.useState)(),j=Object(d.a)(O,2),x=j[0],k=j[1],N=Object(i.useState)(),S=Object(d.a)(N,2),C=S[0],T=S[1],R=Object(i.useState)([]),P=Object(d.a)(R,2),A=P[0],L=P[1],I=Object(i.useState)(!1),B=Object(d.a)(I,2),D=B[0],H=B[1],G=[],W=Object(i.useCallback)((function(){H(!1)}),[]),q=Object(i.useCallback)((function(e){window.setGameData(e)}),[]),F=Object(i.useCallback)((function(e){if(PIXI.settings.SCALE_MODE=v.SCALE_MODES.NEAREST,y(e.levelsCompleted),T(e.content),e.translations){var t=e.translations.reduce((function(e,t){return e[t.key]=t.value,e}),{});s(t)}}),[]),z=ke(Ce),_=z.loadComplete,U=z.loadTilesets,J=z.tilesetsTextures;Object(i.useEffect)((function(){if(C){var e=C.mapJson;xe("".concat("/vca","/").concat(e),(function(e){g(e.data)}))}}),[C]),Object(i.useEffect)((function(){b&&U(b.tilesets)}),[U,b]),Object(i.useEffect)((function(){0}),[C,F]);var X=Object(i.useMemo)((function(){var e,t;if(E)return Object(f.a)(Object(f.a)({},null===C||void 0===C||null===(e=C.finder)||void 0===e?void 0:e.final),{},{data:Object(f.a)(Object(f.a)({},null===C||void 0===C||null===(t=C.finder)||void 0===t?void 0:t.final.data),{},{levelsCompleted:E})})}),[C,E]),V=Object(i.useCallback)((function(){a(je.normal)}),[]),Y=Object(i.useMemo)((function(){var e,t=(null===E||void 0===E||null===(e=E[0])||void 0===e?void 0:e.score)||0,n=(null===C||void 0===C?void 0:C.stars)||1;return(""+l["intro-stars-to-gain"]).replace("{0}",""+t).replace("{1}",""+n)}),[C,E,l]);return c.a.createElement(c.a.Fragment,null,!_&&c.a.createElement(me,null),c.a.createElement("div",{className:"background"},c.a.createElement(Z,{gameDataReceived:F,disableBackButton:!!X||!!x}),_&&c.a.createElement(c.a.Fragment,null,n===je.intro&&c.a.createElement(ye,{onStart:V,headerText:l["intro-header"],descriptionText:l["intro-description"],starsToGainText:Y,startText:l["intro-start"]}),n===je.normal&&b&&C&&c.a.createElement(c.a.Fragment,null,c.a.createElement(M,{content:C,mapData:b,tilesetsTextures:J,onSituationClick:function(e){(null===C||void 0===C?void 0:C.finder)&&C.finder.situations.indexOf(e)>-1&&-1===A.indexOf(e)&&L([].concat(Object(u.a)(A),[e]))},foundSituations:A,solvedScenarios:G,onScenarioClick:function(e){k(null===C||void 0===C?void 0:C.scenarios[e])}}),(null===C||void 0===C?void 0:C.finder)&&c.a.createElement($,{content:C.finder,instruction:l["finder-instruction"],foundSituations:A,onOpenGame:function(){H(!0)},nextText:l["button-next"]}),(null===C||void 0===C?void 0:C.scenarios)&&c.a.createElement(ie,{scenarios:C.scenarios,solvedScenarios:G})),X&&c.a.createElement(K,{content:X,open:D,onBack:W,onSetGameData:q}),x&&c.a.createElement(de,{content:x,setCorrectAnswer:function(){},onClose:function(){k(void 0)}}))))},Ce=function(e){return"".concat("/vca","/maps/tilesets/").concat(e.name,".json")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.5efce011.chunk.js.map