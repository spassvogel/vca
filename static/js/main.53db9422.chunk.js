(this.webpackJsonpvca=this.webpackJsonpvca||[]).push([[0],{40:function(e){e.exports=JSON.parse('{"alpha":{"start":0.25,"end":0},"scale":{"start":0.04,"end":0.29,"minimumScaleMultiplier":1},"color":{"start":"#85888d","end":"#100f0c"},"speed":{"start":100,"end":200,"minimumSpeedMultiplier":1},"acceleration":{"x":10,"y":-30},"maxSpeed":200,"startRotation":{"min":265,"max":270},"noRotation":false,"rotationSpeed":{"min":8,"max":0},"lifetime":{"min":0.5,"max":3.05},"blendMode":"normal","frequency":0.0005,"emitterLifetime":-1,"maxParticles":300,"pos":{"x":0,"y":0},"addAtBack":true,"spawnType":"point"}')},44:function(e,t,n){e.exports=n(69)},49:function(e,t,n){},50:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(36),i=n.n(o),c=(n(49),n(42)),l=n(9),s=(n(50),n(30),n(37),n(5));var u,f,d,m=function(e,t){var n=s.Loader.shared;n.resources[e]?t(n.resources[e]):n.add(e).load((function(n,a){t(a[e])}))},v=n(10);!function(e){e.tilelayer="tilelayer",e.objectgroup="objectgroup"}(u||(u={})),function(e){e.orthagonal="orthagonal",e.isometric="isometric",e.staggered="staggered",e.hexagonal="hexagonal"}(f||(f={})),function(e){e.rightUp="right-up",e.rightDown="right-down",e.leftUp="left-up",e.leftDown="left-down"}(d||(d={}));var p=n(28),b=n(32),g=function(e){var t=Object(a.useState)({}),n=Object(l.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(),c=Object(l.a)(i,2),s=c[0],u=c[1];return Object(a.useEffect)((function(){if(s){var t=h(s,r);if(t){var n=t.name,a=e(t);m("".concat(a),(function(e){if(e.error)throw new Error("Loading ".concat(a,"\n").concat(e.error));var t=Object(b.a)(Object(b.a)({},r),{},Object(p.a)({},n,e));o(t)}))}}}),[s,e,r]),{loadComplete:!!s&&void 0===h(s,r),loadTilesets:function(e){u(e)},tilesetsTextures:r}},h=function(e,t){return e.find((function(e){return!t[e.name]}))},w=n(39),y=Object(a.forwardRef)((function(e,t){var n=Object(v.useApp)();return window.PIXI=s,r.a.createElement(E,Object.assign({app:n},e,{ref:t}))})),E=Object(v.PixiComponent)("Viewport",{create:function(e){var t=new w.a({screenWidth:e.screenWidth,screenHeight:e.screenHeight,worldWidth:e.worldWidth,worldHeight:e.worldHeight,ticker:e.app.ticker});t.on("clicked",(function(t){e.onClick&&e.onClick(t)}));var n=e.minScale,a=void 0===n?.3:n,r=e.maxScale,o=void 0===r?1:r;return t.drag().pinch().wheel().clamp({direction:"all"}).setZoom(.4).clampZoom({minScale:a,maxScale:o}).decelerate(),t}}),O=y,j=function(e,t,n){var a=x(t,n)+64*e[0]+64*-e[1],r=64*(e[0]+e[1])/2+64+128;return new s.Point(a,r)},x=function(e,t){return 32*(t-e)+128*(t+e)/2/2};window.PIXI=s,n(62);var k=Object(v.PixiComponent)("FloorTileLayer",{create:function(e){return new window.PIXI.tilemap.CompositeRectTileLayer(0,[e.texture])},applyProps:function(e,t,n){var a=n.layer,r=n.tileset,o=n.verticalTiles,i=n.horizontalTiles,c=n.spritesheet;if(a.data)for(var l=function(t){if(a.data[t]>0){var n=[t%i,Math.floor(t/i)],l=j(n,i,o),s=r.tiles.find((function(e){return e.id===a.data[t]-r.firstgid})),u=null===s||void 0===s?void 0:s.image.substr((null===s||void 0===s?void 0:s.image.lastIndexOf("/"))+1);e.addFrame(c.textures[u],l.x-64,l.y-64)}},s=0;s<a.data.length;s++)l(s)}}),N=n(15),S=function(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(),o=Object(a.useState)(e.position||new s.Point),i=Object(l.a)(o,2),c=i[0],u=(i[1],e.bounce?"".concat("/vca","/images/ui/marker.svg"):"".concat("/vca","/images/ui/marker-green.svg"));Object(a.useEffect)((function(){N.a.from(t.current,{duration:1,ease:"elastic.out(2, 0.5)",pixi:{visible:!1,scale:.1}}).delay(e.delay||0)}),[e.delay]),Object(a.useEffect)((function(){var n;return!1!==e.bounce&&(n=N.a.to(t.current,{duration:.5,yoyo:!0,repeat:-1,pixi:{y:"-=40"}}).delay(1+Math.random())),function(){var e;null===(e=n)||void 0===e||e.kill()}}),[e.bounce]);var f=function(e){},d=function(){n.current=void 0},m=function(){};return r.a.createElement(v.Sprite,Object.assign({},e,{anchor:[.5,.5],position:c,ref:t,interactive:!0,image:u,mousedown:f,touchstart:f,mouseup:d,mouseupoutside:d,mousemove:m,touchmove:m}))},C=function(e,t){for(var n,a=t.length-1;a>=0&&!((n=t[a]).firstgid<=e);a--);return n},T=n(40),A=n(29),P=n(41),R=Object(v.PixiComponent)("ParticleEmitter",{create:function(){return new s.ParticleContainer},applyProps:function(e,t,n){var a=n.image,r=n.config,o=Object(A.a)(n,["image","config"]);Object(v.applyDefaultProps)(e,t,o);var i=this._emitter;if(!i){i=new P.a(e,[s.Texture.from(a)],r);var c=performance.now();i.emit=!0,function e(){i.raf=requestAnimationFrame(e);var t=performance.now();i.update(3e-4*(t-c)),c=t}()}this._emitter=i},willUnmount:function(){this._emitter&&(this._emitter.emit=!1,cancelAnimationFrame(this._emitter.raf))}}),M=function(e){var t=e.x,n=void 0===t?0:t,a=e.y,o=void 0===a?0:a;return r.a.createElement(R,{name:"smoke",x:n,y:o,image:"".concat("/vca","/effects/smokeparticle.png"),config:T,pivot:[-64,0]})},L=function(e){var t=e.data,n=e.mapData,o=e.tilesetsTextures,i=e.found,c=e.onClick,s=Object(a.useRef)(null);if(Object(a.useEffect)((function(){s.current&&N.a.from(s.current,{duration:1,ease:"elastic.out(2, 0.5)",pixi:{visible:!1,scale:.1}})}),[i]),t.polygon){var u=[t.x/64,t.y/64],f=t.polygon.reduce((function(e,t){return e.push(t.y+t.x),e.push(t.y/2-t.x/2),e}),[]);return r.a.createElement(v.Graphics,{key:"".concat(t.type).concat(t.name),draw:function(e){e.beginFill(12245589),e.drawPolygon(f),e.endFill()},position:j(u,n.width,n.height),pivot:[64,32]})}if(t.gid){var d=t.x,m=t.y,p=t.gid,b=[d/64-1,m/64-1],g=536870911&p,h=C(g,n.tilesets);if(!h||!h.tiles||0===p)return null;var w=0!==(1073741824&p),y=[1,1];0!==(2147483648&p)&&(y[0]*=-1),w&&(y[1]*=-1);var E=h.tiles.find((function(e){return e.id===g-h.firstgid}));if(!E)return null;var O=E.image.split("/"),x=Object(l.a)(O,3),k=(x[0],x[1]),S=x[2];return o[k]||console.warn("Could not find spritesheet ".concat(k," ").concat(o)),o[k].textures[S]||console.warn("Could not find texture ".concat(k," ").concat(S)),r.a.createElement(v.Sprite,{name:"".concat(t.name,": ").concat(d,",").concat(m," (").concat(S,")"),scale:y,texture:o[k].textures[S],anchor:[0,1],pivot:[64,0],position:j(b,n.width,n.height),pointerdown:function(){return c(t.name)},interactive:!!t.name},I(t.properties),i&&r.a.createElement(v.Sprite,{ref:s,image:"".concat("/vca","/images/ui/check.svg"),scale:.8,anchor:[-.1,1],pivot:[64,0]}))}return null},I=function(e){if(!e)return null;var t,n,a=e.find((function(e){return"offset"===e.name}));if(a){var o=a.value.split(","),i=Object(l.a)(o,2);t=i[0],n=i[1]}return r.a.createElement(M,{x:t,y:n})},B=window.innerWidth,D=window.innerHeight;var H=function(e){var t=e.content,n=e.foundSituations,o=e.onSituationClick,i=e.onLoading,c=t.mapJson,f=Object(a.useState)(),d=Object(l.a)(f,2),p=d[0],b=d[1];s.settings.ROUND_PIXELS=!0;var h=g(W),w=h.loadComplete,y=h.loadTilesets,E=h.tilesetsTextures;Object(a.useEffect)((function(){s.settings.SCALE_MODE=s.SCALE_MODES.NEAREST,m("".concat("/vca","/").concat(c),(function(e){b(e.data)}))}),[c]),Object(a.useEffect)((function(){p&&y(p.tilesets)}),[y,p]);var x=64*(((null===p||void 0===p?void 0:p.width)||1)+((null===p||void 0===p?void 0:p.height)||1)),N=32*(((null===p||void 0===p?void 0:p.width)||1)+((null===p||void 0===p?void 0:p.height)||1))+128,T=Object(a.useRef)(null);if(Object(a.useEffect)((function(){T.current&&T.current.moveCenter(x/2,N/2)}),[p,N,x,E]),Object(a.useEffect)((function(){i(!w||!p)}),[w,p,i]),!w||!p)return null;var A=function(e,t,n){return e.map((function(e,a){var o=536870911&e,i=C(o,p.tilesets);if(!i||!i.tiles||0===e)return null;var c=p.width,s=a%c,u=Math.floor(a/c),f=0!==(1073741824&e),d=[1,1];0!==(2147483648&e)&&(d[0]*=-1),f&&(d[1]*=-1);var m=i.tiles.find((function(e){return e.id===o-i.firstgid}));if(!m)return null;var b=m.image.split("/"),g=Object(l.a)(b,3),h=(g[0],g[1]),w=g[2];return E[h]||console.warn("Could not find spritesheet ".concat(h," ").concat(E)),E[h].textures[w]||console.warn("Could not find texture ".concat(h," ").concat(w)),r.a.createElement(v.Sprite,{key:a,name:"".concat(t.name,": ").concat(s,",").concat(u," (").concat(w,")"),scale:d,texture:E[h].textures[w],anchor:[0,1],pivot:[64,0],position:j([s,u],p.width,p.height),zIndex:100*a+n})}))},P=function(e){return e.map((function(e,t){var a=n.indexOf(e.name)>-1;return r.a.createElement(L,{data:e,key:"".concat(e.type).concat(e.name).concat(t),found:a,tilesetsTextures:E,mapData:p,onClick:o})}))},R=function(t,n,a){var o=.5*a,i=j(n.location,p.width,p.height);return r.a.createElement(S,{position:i,pointertap:function(){return function(t,n){e.onScenarioClick(t)}(t)},delay:o,bounce:!0,key:t,name:t})},M={sharedLoader:!0,backgroundColor:q(null===p||void 0===p?void 0:p.backgroundcolor)};return r.a.createElement(v.Stage,{width:B,height:D,className:"background",options:M},r.a.createElement(O,{worldWidth:x,worldHeight:N,screenWidth:B,screenHeight:D,ref:T},function(e){if(!e)return console.warn("No layer with name 'floor' found!"),null;var t=_(e).find(Boolean);if(!t)return console.warn("Layer with name 'floor' is empty?"),null;var n=C(536870911&t,p.tilesets);if(!n)return console.warn("No tileset found for floor layer. Huh?"),null;var a=E[n.name];return s.utils.clearTextureCache(),a.spritesheet?r.a.createElement(k,{texture:a.spritesheet._texture,verticalTiles:p.height,horizontalTiles:p.width,layer:e,tileset:n,spritesheet:a.spritesheet}):(console.warn("No texture loaded found for floor layer. Was looking for ".concat(n.name)),null)}(p.layers.find((function(e){return"floor"===e.name}))),r.a.createElement(v.Container,{sortableChildren:!0},p.layers.filter((function(e){return e.visible&&"floor"!==e.name&&e.type===u.tilelayer})).map((function(e,t){var n=_(e);return A(n,e,t)}))),function(e){return e.filter((function(e){return e.visible&&e.type===u.objectgroup})).map((function(e){return P(e.objects)}))}(p.layers),Object.entries(t.scenarios).map((function(e,t){var n=Object(l.a)(e,2),a=n[0],r=n[1];return R(a,r,t)}))))},W=function(e){return"".concat("/vca","/maps/tilesets/").concat(e.name,".json")},q=function(e){if(e)return parseInt(e.substring(1),16)},_=function(e){var t=e.data;return"string"!==typeof t?t:(e.encoding,e.compression,[])};n(63);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var U=r.a.createElement("defs",null,r.a.createElement("style",null,".a{fill:#fff;}.a,.b{stroke:#283583;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.75px;}.b{fill:none;}")),z=r.a.createElement("title",null,"Back"),X=r.a.createElement("circle",{className:"a",cx:15.02,cy:15.02,r:14.65}),J=r.a.createElement("path",{className:"b",d:"M11.64,16",transform:"translate(-0.97 -0.93)"}),Z=r.a.createElement("path",{className:"b",d:"M11.63,16",transform:"translate(-0.97 -0.93)"}),V=r.a.createElement("path",{className:"b",d:"M20.38,22.88",transform:"translate(-0.97 -0.93)"}),Y=r.a.createElement("line",{className:"b",x1:19.39,y1:8.16,x2:10.65,y2:15.02}),$=r.a.createElement("line",{className:"b",x1:19.39,y1:21.98,x2:10.65,y2:15.11}),K=function(e){var t=e.svgRef,n=e.title,a=G(e,["svgRef","title"]);return r.a.createElement("svg",F({width:30.04,height:30.04,viewBox:"0 0 30.04 30.04",ref:t},a),U,void 0===n?z:n?r.a.createElement("title",null,n):null,X,J,Z,V,Y,$)},Q=r.a.forwardRef((function(e,t){return r.a.createElement(K,F({svgRef:t},e))})),ee=(n.p,function(e){var t=e.gameDataReceived,n=e.disableBackButton,o=function(e){if(window.hasOwnProperty("webkit")&&window.webkit.hasOwnProperty("messageHandlers")){var t=JSON.stringify(e);webkit.messageHandlers.cordova_iab.postMessage(t)}else window.parent.postMessage(e,"*")};return Object(a.useEffect)((function(){window.setGameData=function(e){o({type:"setGameData",data:e})},window.GAMEDATA=null,window.getGameData=function(){return window.GAMEDATA},window.addEventListener("message",(function(e){e.data.hasOwnProperty("userId")&&(window.GAMEDATA=e.data,t(e.data))}),!1)}),[t]),!0===n?null:r.a.createElement("div",{className:"close"},r.a.createElement(Q,{onClick:function(){o({type:"exit"})}}))}),te=n(70),ne=(n(64),function(e){return r.a.createElement("div",{className:"finder-box"},"".concat(e.content.instruction," (").concat(e.content.situations.length-e.foundSituations.length,")"))}),ae=(n(65),function(e){var t=e.onClose,n=e.content,o=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;null===o||void 0===o||null===(e=o.current)||void 0===e||e.addEventListener("load",(function(){var e,t;null===o||void 0===o||null===(e=o.current)||void 0===e||null===(t=e.contentWindow)||void 0===t||t.postMessage(n.data,"*")}),!0),window.addEventListener("message",(function(e){switch(e.data.type){case"setGameData":break;case"exit":t&&t()}}),!0)}),[n.data,t]),r.a.createElement("iframe",{src:n.url,ref:o,title:n.url,className:"iframe-content"})});n(66);function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ie=r.a.createElement("style",{type:"text/css"},"\n\t.st0{fill:none;stroke:#3FA548;stroke-width:32;}\n"),ce=r.a.createElement("defs",null),le=r.a.createElement("g",{id:"Page-1"},r.a.createElement("polyline",{id:"checkmark",className:"st0",points:"11.33,88.97 88.95,166.87 244.67,11.32  "})),se=function(e){var t=e.svgRef,n=e.title,a=oe(e,["svgRef","title"]);return r.a.createElement("svg",re({id:"m-check-mark",x:"0px",y:"0px",width:"255.97px",height:"189.51px",viewBox:"0 0 255.97 189.51",style:{enableBackground:"new 0 0 255.97 189.51"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,ie,ce,le)},ue=r.a.forwardRef((function(e,t){return r.a.createElement(se,re({svgRef:t},e))})),fe=(n.p,function(e){var t=e.scenarios,n=Object.keys(t);return r.a.createElement("div",{className:"scenarios-box"},r.a.createElement("ul",null,n.map((function(n,a){return function(n,a){var o=t[n];return void 0===e.solvedScenarios[a]?r.a.createElement("li",{className:"",onClick:function(){},key:n},o.title):r.a.createElement("li",{className:"completed",key:n},r.a.createElement(ue,{className:"check"}),o.title)}(n,a)}))))}),de=n(6),me=n(71),ve=n(25);var pe,be,ge=function(e){var t=e.sceneConfig,n=e.imageBaseUrl,o=Object(A.a)(e,["sceneConfig","imageBaseUrl"]),i=Object(a.useState)(1),c=Object(l.a)(i,2),s=c[0],u=c[1];return Object(a.useEffect)((function(){var e=function(){window.innerWidth<1280||window.innerHeight<720?1280-window.innerWidth>720-window.innerHeight?u(window.innerWidth/1280):u(window.innerHeight/720):u(1)};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]),r.a.createElement(v.Stage,{width:1280*s,height:720*s,className:"scene",options:{backgroundColor:16777215}},r.a.createElement(v.Container,Object.assign({},o,{scale:s}),t.map((function(e){return function(e){var t=[e.scale||1,e.scale||1];return e.flipped&&(t[0]=-t[0]),r.a.createElement(v.Sprite,{image:"".concat(n).concat(e.image),key:e.image,position:e.position||[0,0]})}(e)}))))};n(67);!function(e){e.scenario="scenario",e.finder="finder"}(pe||(pe={})),function(e){e.caption="caption",e.speech="speech",e.image="image"}(be||(be={})),N.a.registerPlugin(me.a);var he=function(e){var t=e.content,n=e.selectedAnswer,o=void 0===n?null:n,i=t.imageBaseUrl,c=Object(a.useState)(o),s=Object(l.a)(c,2),u=s[0],f=s[1],d=Object(a.useMemo)((function(){return null===u?null:e.content.reactions[u]}),[e.content.reactions,u]),m=Object(a.useState)(null!=o),v=Object(l.a)(m,2),p=v[0],b=v[1],g=Object(a.useState)((null===d||void 0===d?void 0:d.scene)||e.content.scene),h=Object(l.a)(g,2),w=h[0],y=h[1],E=Object(a.useRef)(null),O=Object(a.useRef)(null),j=Object(a.useRef)(null),x=Object(a.useRef)(null),k=Object(a.useRef)(null),S=Object(a.useRef)(null);Object(a.useEffect)((function(){ve.a.add("correct","".concat("/vca","/sound/correct.mp3")),ve.a.add("wrong","".concat("/vca","/sound/wrong.mp3"))}),[]);var C=Object(a.useRef)(),T=Object(a.useCallback)((function(){var e=N.a.timeline();C.current=e;var n=j.current,a=x.current;N.a.killTweensOf(n),N.a.killTweensOf(E.current),N.a.killTweensOf(a),S.current&&S.current.removeAttribute("style"),E.current.removeAttribute("style"),O.current.removeAttribute("style"),a.removeAttribute("style"),n.innerHTML=t.sequence[0].text,t.sequence.forEach((function(t,a){var r=function(){O.current&&(O.current.style.visibility=t.type===be.speech?"visible":"hidden"),t.type!==be.image&&(E.current&&(E.current.className="balloon ".concat(t.type)),n.innerHTML=t.text,t.balloonArrowPos&&O.current&&(O.current.style.right="".concat(t.balloonArrowPos,"%")),A()),t.scene&&y(t.scene)};switch(e.add("seq-".concat(a)),t.type){case be.caption:e.to(n,{onStart:r,duration:.025*t.text.length/1,text:{value:t.text,oldClass:"hidden",newClass:"visible"},ease:de.b.easeNone}),e.to(n,{duration:3});break;case be.speech:e.to(n,{onStart:r,duration:.045*t.text.length/1,ease:de.b.easeNone});break;case be.image:e.to(E.current,{onStart:r,duration:.25,autoAlpha:0,ease:de.b.easeNone}),e.to(O.current,{duration:.25,autoAlpha:0,ease:de.b.easeNone},"-=.25")}})),e.add("seq-".concat(t.sequence.length)),e.to(E.current,{delay:1,duration:.5,autoAlpha:0,ease:de.b.easeNone}),e.add("end"),e.to(a,{onStart:function(){S.current&&(S.current.style.display="none"),O.current&&(O.current.style.visibility="hidden")},duration:.5,left:0,ease:de.d.easeInOut},"-=1")}),[t.sequence]),A=function(){if(E.current&&O.current){var e=E.current.getBoundingClientRect();O.current.style.top="".concat(E.current.offsetTop+e.height,"px")}};Object(a.useEffect)((function(){return window.addEventListener("resize",A),function(){window.removeEventListener("resize",A)}}),[]);var P=function(){if(C.current){var e=parseInt(C.current.currentLabel().substring("seq-".length));isNaN(e)||C.current.seek("seq-".concat(e+1),!1)}};Object(a.useEffect)((function(){o?(x.current.style.left="0px",E.current.style.visibility="hidden"):T()}),[t.sequence,T,o]);var R=function(){b(!0),y(d.scene),d.correct?(ve.a.play("correct"),e.setCorrectAnswer(u)):ve.a.play("wrong")},M=function(){C.current&&(y(e.content.scene),f(null),b(!1),C.current.seek("end",!1))},L=function(e,t){if(null===u)return r.a.createElement("li",{key:e,className:"normal",onClick:function(e){return function(e,t){if(e.className="animating",k.current){var n=k.current.querySelectorAll(".options .normal");N.a.to(n,{duration:.5,opacity:0,ease:de.b.easeNone});var a=k.current.querySelector(".options").getBoundingClientRect().top,r=e.getBoundingClientRect().top,o=Math.abs(a-r);N.a.to(e,{duration:.5,top:-o,ease:de.b.easeNone,onComplete:function(){setTimeout((function(){e.className="",f(t)}),250)}})}}(e.currentTarget,t)}},r.a.createElement("div",{className:"text"},e));if(u===t){var n="selected";return p&&(n=(null===d||void 0===d?void 0:d.correct)?"correct":"wrong"),r.a.createElement("li",{key:e,className:n},r.a.createElement("div",{className:"text"},e))}};return r.a.createElement("div",{className:"scenario-screen",ref:k},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("div",{className:"close"},r.a.createElement(Q,{onClick:function(){e.onClose()}})),t.title),r.a.createElement("div",{className:"situation",onClick:P},e.content.scene&&r.a.createElement(ge,{sceneConfig:w,imageBaseUrl:i}),r.a.createElement("div",{className:"inset",ref:x},r.a.createElement("p",null,t.description),r.a.createElement("ul",{className:"options"},t.options.map((function(e,t){return L(e,t)}))),d?p?r.a.createElement(r.a.Fragment,null,(null===d||void 0===d?void 0:d.correct)&&r.a.createElement("p",{className:"right-option"},"You\u2019ve chosen the right option!"),d.text.split("\n").map((function(e){return r.a.createElement("p",{key:e.substring(0,10)},e)})),!(null===d||void 0===d?void 0:d.correct)&&r.a.createElement("button",{onClick:M,className:"button-replay"},"try again")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,d.confirmText),r.a.createElement("p",{className:"yesno"},r.a.createElement("button",{onClick:R},"yes"),r.a.createElement("span",{className:"motivation"},d.yesText)),r.a.createElement("p",{className:"yesno"},r.a.createElement("button",{onClick:M},"no"),r.a.createElement("span",{className:"motivation"},d.noText))):null),r.a.createElement("div",{className:"balloon",ref:E},r.a.createElement("span",{ref:j})),r.a.createElement("div",{className:"balloon-arrow",ref:O,style:{visibility:"hidden"}})),!u&&r.a.createElement("div",{className:"controls-bottomright"},r.a.createElement("button",{className:"button-replay",onClick:function(){y(e.content.scene),f(null),b(!1),T()}},"replay"),r.a.createElement("button",{className:"button-next",ref:S,onClick:P},">"))))},we=(n(68),function(){return r.a.createElement("div",{className:"loading-background"},r.a.createElement("div",{className:"white-block"},r.a.createElement("div",{className:"outset"}),r.a.createElement("div",{className:"blue-block"})),r.a.createElement("div",{className:"subtext"},"Stay curious"))});te.a.registerPIXI(PIXI),N.a.registerPlugin(te.a);var ye=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(!0),s=Object(l.a)(i,2),u=s[0],f=s[1],d=Object(a.useState)(),m=Object(l.a)(d,2),v=m[0],p=m[1],b=Object(a.useState)(),g=Object(l.a)(b,2),h=g[0],w=g[1],y=Object(a.useState)([]),E=Object(l.a)(y,2),O=E[0],j=E[1],x=Object(a.useState)(),k=Object(l.a)(x,2),N=k[0],S=k[1],C=[],T=function(e){w(e.content),o(!1)};Object(a.useEffect)((function(){var e=setTimeout((function(){window.GAME_DATA||(console.log("no bridge found, fetching fallback"),fetch("".concat("/vca","/config/data.json")).then((function(e){e.json().then((function(e){T(e),o(!1)}))})))}),300);return function(){clearTimeout(e)}}),[]),Object(a.useEffect)((function(){var e;return(null===h||void 0===h?void 0:h.finder)&&O.length===h.finder.situations.length&&(e=setTimeout(S,1e3,h.finder.final)),function(){clearTimeout(e)}}),[h,O]);var A=u||n;return r.a.createElement(r.a.Fragment,null,A&&r.a.createElement(we,null),r.a.createElement("div",{className:"App"},r.a.createElement(ee,{gameDataReceived:T,disableBackButton:!!N||!!v}),h&&r.a.createElement(H,{content:h,onSituationClick:function(e){-1===O.indexOf(e)&&j([].concat(Object(c.a)(O),[e]))},foundSituations:O,solvedScenarios:C,onScenarioClick:function(e){p(null===h||void 0===h?void 0:h.scenarios[e])},onLoading:f}),!A&&(null===h||void 0===h?void 0:h.finder)&&r.a.createElement(ne,{content:h.finder,foundSituations:O}),!A&&(null===h||void 0===h?void 0:h.scenarios)&&r.a.createElement(fe,{scenarios:h.scenarios,solvedScenarios:C}),N&&r.a.createElement(ae,{content:N,onClose:function(){S(void 0)}}),v&&r.a.createElement(he,{content:v,setCorrectAnswer:function(){},onClose:function(){p(void 0)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.53db9422.chunk.js.map