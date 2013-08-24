var TWEEN=TWEEN||function(){var e,t,i,n,o=60,r=false,s=[],a;return{setFPS:function(e){o=e||60},start:function(e){if(arguments.length!==0){this.setFPS(e)}i=setInterval(this.update,1e3/o)},stop:function(){clearInterval(i)},setAutostart:function(e){r=e;if(r&&!i){this.start()}},add:function(e){s.push(e);if(r&&!i){this.start()}},getAll:function(){return s},removeAll:function(){s=[]},remove:function(t){e=s.indexOf(t);if(e!==-1){s.splice(e,1)}},update:function(t){e=0;a=s.length;var i=t||(new Date).getTime();while(e<a){if(s[e].update(i)){e++}else{s.splice(e,1);a--}}if(a===0&&r===true){this.stop()}}}}();TWEEN.Tween=function(e){var t=e,i={},n={},o={},r=1e3,s=0,a=null,l=TWEEN.Easing.Linear.EaseNone,f=null,c=null,d=null;this.to=function(e,i){if(i!==null){r=i}for(var n in e){if(t[n]===null){continue}o[n]=e[n]}return this};this.start=function(e){TWEEN.add(this);a=e?e+s:(new Date).getTime()+s;for(var r in o){if(t[r]===null){continue}i[r]=t[r];n[r]=o[r]-t[r]}return this};this.stop=function(){TWEEN.remove(this);return this};this.delay=function(e){s=e;return this};this.easing=function(e){l=e;return this};this.chain=function(e){f=e;return this};this.onUpdate=function(e){c=e;return this};this.onComplete=function(e){d=e;return this};this.update=function(e){var o,s,h;if(e<a){return true}s=(e-a)/r;s=s>1?1:s;h=l(s);for(o in n){t[o]=i[o]+n[o]*h}if(c!==null){c.call(t,h)}if(s==1){if(d!==null){d.call(t)}if(f!==null){f.start()}return false}return true}};TWEEN.Easing={Linear:{},Quadratic:{},Cubic:{},Quartic:{},Quintic:{},Sinusoidal:{},Exponential:{},Circular:{},Elastic:{},Back:{},Bounce:{}};TWEEN.Easing.Linear.EaseNone=function(e){return e};TWEEN.Easing.Cubic.EaseOut=function(e){return--e*e*e+1};window.Modernizr=function(e,t,i){function n(e){g.cssText=e}function o(e,t){return n(w.join(e+";")+(t||""))}function r(e,t){return typeof e===t}function s(e,t){return!!~(""+e).indexOf(t)}function a(e,t){for(var n in e){var o=e[n];if(!s(o,"-")&&g[o]!==i)return t=="pfx"?o:!0}return!1}function l(e,t,n){for(var o in e){var s=t[e[o]];if(s!==i)return n===!1?e[o]:r(s,"function")?s.bind(n||t):s}return!1}function f(e,t,i){var n=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+E.join(n+" ")+n).split(" ");return r(t,"string")||r(t,"undefined")?a(o,t):(o=(e+" "+C.join(n+" ")+n).split(" "),l(o,t,i))}var c="2.6.2",d={},h=t.documentElement,u="modernizr",p=t.createElement(u),g=p.style,m,v={}.toString,w=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",E=y.split(" "),C=y.toLowerCase().split(" "),x={},A={},b={},T=[],k=T.slice,M,N=function(e,i,n,o){var r,s,a,l,f=t.createElement("div"),c=t.body,d=c||t.createElement("body");if(parseInt(n,10))while(n--)a=t.createElement("div"),a.id=o?o[n]:u+(n+1),f.appendChild(a);return r=["&#173;",'<style id="s',u,'">',e,"</style>"].join(""),f.id=u,(c?f:d).innerHTML+=r,d.appendChild(f),c||(d.style.background="",d.style.overflow="hidden",l=h.style.overflow,h.style.overflow="hidden",h.appendChild(d)),s=i(f,e),c?f.parentNode.removeChild(f):(d.parentNode.removeChild(d),h.style.overflow=l),!!s},R={}.hasOwnProperty,F;!r(R,"undefined")&&!r(R.call,"undefined")?F=function(e,t){return R.call(e,t)}:F=function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if(typeof t!="function")throw new TypeError;var i=k.call(arguments,1),n=function(){if(this instanceof n){var o=function(){};o.prototype=t.prototype;var r=new o,s=t.apply(r,i.concat(k.call(arguments)));return Object(s)===s?s:r}return t.apply(e,i.concat(k.call(arguments)))};return n}),x.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},x.canvastext=function(){return!!d.canvas&&!!r(t.createElement("canvas").getContext("2d").fillText,"function")},x.csstransforms3d=function(){var e=!!f("perspective");return e&&"webkitPerspective"in h.style&&N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,i){e=t.offsetLeft===9&&t.offsetHeight===3}),e},x.csstransitions=function(){return f("transition")};for(var L in x)F(x,L)&&(M=L.toLowerCase(),d[M]=x[L](),T.push((d[M]?"":"no-")+M));return d.addTest=function(e,t){if(typeof e=="object")for(var n in e)F(e,n)&&d.addTest(n,e[n]);else{e=e.toLowerCase();if(d[e]!==i)return d;t=typeof t=="function"?t():t,typeof enableClasses!="undefined"&&enableClasses&&(h.className+=" "+(t?"":"no-")+e),d[e]=t}return d},n(""),p=m=null,d._version=c,d._prefixes=w,d._domPrefixes=C,d._cssomPrefixes=E,d.testProp=function(e){return a([e])},d.testAllProps=f,d.testStyles=N,d.prefixed=function(e,t,i){return t?f(e,t,i):f(e,"pfx")},d}(this,this.document);(function(e,t){t.flow={};t=t.flow;if(!window.requestAnimationFrame){window.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)}}()}var i=document.getElementsByTagName("head")[0].getElementsByTagName("script");for(var n=0;n<i.length;n++){var o=i[n].src.match(/(.*?)flow-?\d?\.js/);if(o){var r=o[1];break}}t.Flow=function(i,n,o){var s=this;var a;var l,f;var c,d;var h=false;var u;var p=Modernizr.prefixed("transform");this.width=0;this.height=0;var g=0;var m=true;var v=false;var w=[];var y=[];var E=[];var C=[];var x={size:150,backgroundcolor:"000000",gradientcolor:undefined,coverwidth:150,coverheight:"auto",covergap:40,coverangle:70,coverdepth:170,coveroffset:130,removeblackborder:false,fixedsize:false,focallength:250,opacitydecrease:.1,reflectionopacity:.3,reflectionratio:155,reflectionoffset:0,showduration:true,showtext:true,textstyle:"div.flow_textfield{color:#f1f1f1; text-align:center; font-family:Arial Rounded MT Bold;} .flow_textfield h1{font-size:14px; font-weight:normal; line-height:21px;} .flow_textfield h2{font-size:11px; font-weight:normal;}",textoffset:75,tweentime:.8,rotatedelay:0,dockicon:true,docktext:"Show Playlist",onidle:"show",onpaused:"hide",onplaying:"hide",oncompleted:"show",file:undefined,xposition:0,yposition:0};t.Utils.addClass(o,"jwplayer_flow");t.Utils.inject(r+"flow.css");function A(e){if(i.getRenderingMode()!="html5")return;for(var r in x){if(n[r]===undefined)n[r]=x[r]}t.Utils.inject(n.textstyle);g=n.size;n.backgroundcolor=n.backgroundcolor.indexOf("#")==-1?"#"+n.backgroundcolor:n.backgroundcolor;o.style.backgroundColor=n.backgroundcolor;if(n.gradientcolor!==undefined){n.gradientcolor=n.gradientcolor.indexOf("#")==-1?"#"+n.gradientcolor:n.gradientcolor;o.style.background="-webkit-gradient(linear, left top, left bottom, from("+n.gradientcolor+"), to("+n.backgroundcolor+"))"}if(n.dockicon===true&&typeof i.addButton==="function"){var s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAPCAYAAADgbT9oAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABV0RVh0Q3JlYXRpb24gVGltZQA2LzE4LzEx7HcX+AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAABCSURBVDiN7ZMxDgAgCAMP4/+/XAcjIQ4OBDduYeq1CyZJgFGLRrHQmbGFvVxJ18kawLfFLW5xix/El7brZvDst8ULHQsIIS+DTYcAAAAASUVORK5CYII=";i.addButton(s,n.docktext,T,"flow")}i.onPlaylist(Y);i.onPlaylistItem(G);i.onPlay(Q);i.onBuffer(Q);i.onPause(Q);i.onComplete(H);o.addEventListener(t.Utils.getTransEndEventName(),S);o.addEventListener("mousewheel",b);o.addEventListener("DOMMouseScroll",b)}function b(e){e.preventDefault();var t=e.detail?e.detail*-120:e.wheelDelta;var i=Math.ceil(Math.abs(t)/120);if(i>0){var n=Math.abs(t)/t;var o=null;if(n>0)o=s.left;else if(n<0)o=s.right;if(typeof o==="function"){for(var r=0;r<i;r++)o()}}}function T(){if(!a[_()]["ova.hidden"]){i.pause(true);s.show()}}function k(){return i.getContainer().getElementsByTagName("video")[0]}function M(){if(k()){var e=k().style[p];if(e){k().style[p]=e.replace(/translate\(.+?\)/,"translate(-"+s.width+"px,-"+s.height+"px)")}else{k().style[p]="translate(-"+s.width+"px,-"+s.height+"px)"}}}function N(){if(k()){var e=k().style[p];k().style[p]=e.replace(/translate\(.+?\)/,"translate(0px,0px)")}}function R(){return n.position=="left"||n.position=="right"||n.position=="top"||n.position=="bottom"}function F(e){if(n.showtext===true){var t=c[e];if(t){f.innerHTML="<h1>"+(t.title===undefined?"":t.title)+"</h1><h2>"+(t.description===undefined?"":t.description)+"</h2>"}}for(var i=0;i<w.length;i++){w[i](e)}}function L(e){if(n.rotatedelay>0&&u){s.stopRotation()}if(n.file===undefined){if(d[e]!=_())i.playlistItem(d[e]);else if(i.getState()=="PLAYING")i.pause(true);else i.play(true)}else{if(c[e].link)window.open(c[e].link,i.config.linktarget);if(c[e].file){i.load({file:c[e].file,image:c[e].image});i.play()}}for(var t=0;t<y.length;t++){y[t](e)}}function S(e){if(e.target==o){if(parseInt(o.style.opacity,10)===0){P()}else{X()}}}function z(){v=false;s.resize()}function I(){if(h||V()===false)return;h=true;if(R()){new TWEEN.Tween(n).to({size:0},400).easing(TWEEN.Easing.Cubic.EaseOut).onUpdate(z).onComplete(P).start()}else{setTimeout(function(){if(n.showtext===true){f.style.opacity=0}l.hide(O)},100);N()}for(var e=0;e<C.length;e++){C[e]()}}function O(){o.style.opacity=0}function P(){q(false);h=false}function D(){if(h||V()===true)return;h=true;q(true);if(R()){n.size=1;z();new TWEEN.Tween(n).to({size:g},400).easing(TWEEN.Easing.Cubic.EaseOut).onUpdate(z).onComplete(U).start()}else{setTimeout(function(){o.style.opacity=1},100)}for(var e=0;e<E.length;e++){E[e]()}}function X(){if(n.showtext===true){f.style.opacity=1}l.show(U)}function U(){h=false;if(!R()){M()}}function Y(r){a=r.playlist;n.coverheight=n.coverheight=="auto"?i.config.height:n.coverheight;if(n.file===undefined){c=[];d=[];var s=0;for(var f=0;f<a.length;f++){var h=a[f];if(!h["ova.hidden"]&&h.image){c[s]={title:h.title,description:h.description};c[s].image=h.image;if(n.showduration){c[s].duration=h.duration}d[s]=f;s++}}if(l)l.destroy();l=new t.CoverFlow(o,c,n);o.appendChild(l.domElement);W()}else{e.utils.ajax(n.file,B)}}function B(t){try{var i=e.html5.parsers.rssparser.parse(t.responseXML.firstChild);if(i.length>0){j(i)}}catch(n){}}function j(e){c=[];for(var i=0;i<e.length;i++){var r=e[i];c[i]={title:r.title,description:r.description,link:r.link,file:r.file};c[i].image=r.image;if(n.showduration){c[i].duration=r.duration}}if(l)l.destroy();l=new t.CoverFlow(o,c,n);o.appendChild(l.domElement);W();l.to(0)}function W(){l.onFocus(F);l.onClick(L);if(f)o.removeChild(f);if(n.showtext===true){f=document.createElement("div");f.className="flow_textfield";o.appendChild(f)}s.resize();G();o.style.display="block";if(n.onidle=="hide"){o.style.display="none";q(false);o.style.opacity=0;l.hide(null);f.style.opacity=0}if(n.rotatedelay>0){if(u)s.stopRotation();u=setInterval(Z,n.rotatedelay);o.addEventListener("touchstart",s.stopRotation,false);o.addEventListener("mousedown",s.stopRotation,false)}h=false;if(n.file!==undefined){if(i.getState()=="PLAYING"||i.getState()=="BUFFERING"){if(n.onplaying=="show")s.show();else if(n.onplaying=="hide")s.hide()}}}function _(){if(i.hasOwnProperty("getCurrentItem")){return i.getCurrentItem()}else if(i.hasOwnProperty("getPlaylistIndex")){return i.getPlaylistIndex()}}function G(e){if(a[_()]["ova.hidden"]){s.hide()}else if(n.file===undefined){l.to(d.indexOf(_()))}}function H(e){if(n.oncompleted=="show")s.show();else if(n.oncompleted=="hide")s.hide()}function Q(e){switch(i.getState()){case"PAUSED":if(n.onpaused=="show")s.show();else if(n.onpaused=="hide")s.hide();break;case"BUFFERING":case"PLAYING":if(n.onplaying=="show")s.show();else if(n.onplaying=="hide")s.hide();break}}function V(){return o.style.display!="none"}function q(e){if(e){o.style.display="block"}else{o.style.display="none"}}i.onReady(A);this.stopRotation=function(){o.removeEventListener("touchstart",s.stopRotation,false);o.removeEventListener("mousedown",s.stopRotation,false);clearInterval(u)};function Z(){l.next()}this.left=function(){if(i.getRenderingMode()=="html5"){l.left()}else if(i.getRenderingMode()=="flash"){i.getContainer().flowLeft()}};this.right=function(){if(i.getRenderingMode()=="html5"){l.right()}else if(i.getRenderingMode()=="flash"){i.getContainer().flowRight()}};this.prev=function(){if(i.getRenderingMode()=="html5"){l.prev()}else if(i.getRenderingMode()=="flash"){i.getContainer().flowPrev()}};this.next=function(){if(i.getRenderingMode()=="html5"){l.next()}else if(i.getRenderingMode()=="flash"){i.getContainer().flowNext()}};this.to=function(e){if(i.getRenderingMode()=="html5"){l.to(e)}else if(i.getRenderingMode()=="flash"){i.getContainer().flowTo(e)}};this.onFocus=function(e){if(i.getRenderingMode()=="html5"){w.push(e)}else if(i.getRenderingMode()=="flash"){i.getContainer().flowOnFocus(e.toString())}};this.onClick=function(e){if(i.getRenderingMode()=="html5"){y.push(e)}else if(i.getRenderingMode()=="flash"){i.getContainer().flowOnClick(e.toString())}};this.hide=function(){if(i.getRenderingMode()=="html5"){I()}else if(i.getRenderingMode()=="flash"){i.getContainer().flowHide()}};this.show=function(){if(i.getRenderingMode()=="html5"){D()}else if(i.getRenderingMode()=="flash"){i.getContainer().flowShow()}};this.onHide=function(e){if(i.getRenderingMode()=="html5"){C.push(e)}else if(i.getRenderingMode()=="flash"){i.getContainer().flowOnHide(e.toString())}};this.onShow=function(e){if(i.getRenderingMode()=="html5"){E.push(e)}else if(i.getRenderingMode()=="flash"){i.getContainer().flowOnShow(e.toString())}};this.getDisplayElement=function(){return o};function J(e,t){if(!v){v=true;if(m){m=false;setTimeout(function(){i.resize(e,t)},0)}else{i.resize(e,t)}}}this.resize=function(e,t){if(i.getRenderingMode()=="html5"){if(e)s.width=e;if(t)s.height=t;var r=s.width;var a=s.height;if(R()&&n.size>0){if(n.position=="left"||n.position=="right"){r=n.size;a=i.config.height;J(i.config.width-r,i.config.height);o.style[n.position]=-n.size+"px"}else if(n.position=="top"||n.position=="bottom"){r=i.config.width;a=n.size;J(i.config.width,i.config.height-a);if(n.position=="top"){o.style.top=-a+"px"}else if(n.position=="bottom"){o.style.top=i.config.height-a+"px"}}i.getContainer().style["margin"+K(n.position)]=n.size+"px"}o.style.width=r+"px";o.style.height=a+"px";if(l){l.resize(r,a)}if(f){f.style.top=a-n.textoffset+"px"}}else{if(o.parentNode){o.parentNode.removeChild(o)}}};function K(e){return e.substr(0,1).toUpperCase()+e.substr(1)}function $(){window.requestAnimationFrame($);TWEEN.update()}$()};e().registerPlugin("flow","6.0",t.Flow,"./flow.swf")})(jwplayer,window);(function(e){e.CoverFlow=function(t,i,n){var o=this;this.OFFSET=n.coveroffset+n.covergap;this.T_NEG_ANGLE="rotateY("+-n.coverangle+"deg)";this.T_ANGLE="rotateY("+n.coverangle+"deg)";this.hideComplete=null;this.showComplete=null;var r=[];var s=i.length;var a=0;var l=0;var f=0;var c=[];var d=[];this.domElement=document.createElement("div");this.domElement.className="flow_wrap";var h=document.createElement("div");h.className="flow_tray";this.domElement.appendChild(h);this.domElement.style[Modernizr.prefixed("perspective")]=n.focallength+"px";var u=new e.Delegate(this,h,n);var p=new e.TouchController(u,h,n);var g=null;for(var m=0;m<i.length;m++){g=new e.Cover(this,m,i[m].image,i[m].duration,n);u.cells.push(g);h.appendChild(g.domElement);g.domElement.onmousedown=w;g.domElement.style[Modernizr.prefixed("transitionDuration")]=n.tweentime+"s";r[m]=g}g.domElement.firstChild.addEventListener(e.Utils.getTransEndEventName(),v,true);function v(e){e.stopPropagation();if(parseInt(g.domElement.firstChild.style.opacity,10)===0){o.domElement.style.opacity=0;if(typeof o.hideComplete=="function")o.hideComplete()}else if(parseInt(g.domElement.firstChild.style.opacity,10)===1){if(typeof o.showComplete=="function")o.showComplete()}}this.hide=function(e){o.hideComplete=e;for(var t=0;t<r.length;t++){r[t].domElement.firstChild.style.opacity=0}};this.show=function(e){o.showComplete=e;o.domElement.style.opacity=1;for(var t=0;t<r.length;t++){r[t].domElement.firstChild.style.opacity=1}};this.itemComplete=function(e){l=l<e?e:l;++a;if(a==s){o.to(0);for(var t=0;t<s;t++){r[t].setY(l)}}};this.left=function(){if(f>0)o.to(f-1)};this.right=function(){if(f<s-1)o.to(f+1)};this.prev=function(){if(f>0)o.to(f-1);else o.to(s-1)};this.next=function(){if(f<s-1)o.to(f+1);else o.to(0)};this.to=function(e){if(e>s-1)e=s-1;else if(e<0)e=0;f=e;p.to(e)};this.focused=function(e){for(var t=0;t<c.length;t++){c[t](e)}};this.clicked=function(e){for(var t=0;t<d.length;t++){d[t](e)}};this.onFocus=function(e){c.push(e)};this.onClick=function(e){d.push(e)};this.destroy=function(){t.removeChild(o.domElement);t.removeEventListener("touchstart",p,true);window.removeEventListener("keydown",y,false)};this.resize=function(e,t){u.offsetX=e*.5+n.xposition;u.offsetY=t*.5+n.yposition;u.setTrayStyle(p.currentX+u.offsetX,u.offsetY)};function w(e){var t=this;var i=0;while((t=t.previousSibling)!==null)++i;var n=r[i];var s=e.offsetY||e.layerY;if(s<n.halfHeight){e.preventDefault();if(n.index!=f)o.to(n.index);else o.clicked(n.index)}}t.addEventListener("touchstart",p,true);window.addEventListener("keydown",y,false);function y(e){switch(e.keyCode){case 37:o.left();break;case 39:o.right();break;case 38:o.to(0);break;case 40:o.to(s-1);break;case 32:o.clicked(f);break}}}})(window.flow);(function(e){e.Cover=function(e,t,i,n,o){var r=this;var s;var a;this.index=t;this.halfHeight=0;this.domElement=document.createElement("div");this.domElement.className="flow_cell";var l=this.domElement.style;l.backgroundColor=o.backgroundcolor;var f=document.createElement("canvas");this.domElement.appendChild(f);var c=document.createElement("img");c.addEventListener("load",d);c.src=i;function d(){var t=c.width;var i=c.height;var n=0;var d=0;var h=0;if(o.removeblackborder){var u=document.createElement("canvas");u.width=t;u.height=i;var p=u.getContext("2d");p.drawImage(c,0,0);var g=p.getImageData(0,0,t,i).data;var m=0;var v=0;var w=0;for(var y=0;y<i;y++){m=0;for(v=0;v<t;v++){w=(y*t+v)*4;m+=g[w]<<16|g[w+1]<<8|g[w+2]}if(m/t<460551)n++;else break}for(y=i-1;y>=0;y--){m=0;for(v=0;v<t;v++){w=(y*t+v)*4;m+=g[w]<<16|g[w+1]<<8|g[w+2]}if(m/t<460551)d++;else break}i-=n+d}var E;if(o.fixedsize){s=Math.round(o.coverwidth);a=Math.round(o.coverheight);if(s/t<a/i){E=a/i;h+=(t-s/E)*.5}else{E=s/t;n+=(i-a/E)*.5}}else{if(o.coverwidth>=o.coverheight){s=Math.round(t/i*o.coverheight);a=Math.round(o.coverheight);E=o.coverheight/i}else{s=Math.round(o.coverwidth);a=Math.round(i/t*o.coverwidth);E=o.coverwidth/t}}r.halfHeight=a;l.top=-(a*.5)+"px";l.left=-(s*.5)+"px";l.width=s+"px";l.height=a+"px";f.width=s;f.height=a*2;var C=f.getContext("2d");C.drawImage(c,h,n,t-2*h,i-2*n,0,0,s,a);if(o.reflectionopacity>0){l.height=a*2+"px";r.reflect(f,s,a,o.reflectionopacity,o.reflectionratio,o.reflectionoffset)}e.itemComplete(a)}this.setY=function(e){var t=e*.5-(e-a);this.domElement.style.top=-t+"px"}};e.Cover.prototype.reflect=function(e,t,i,n,o,r){var s=e.getContext("2d");s.save();s.scale(1,-1);s.drawImage(e,0,-i*2-r);s.restore();s.globalCompositeOperation="destination-out";var a=s.createLinearGradient(0,0,0,i);a.addColorStop(o/255,"rgba(255, 255, 255, 1.0)");a.addColorStop(0,"rgba(255, 255, 255, "+(1-n)+")");s.translate(0,i+r);s.fillStyle=a;s.fillRect(0,0,t,i)}})(window.flow);(function(e){e.TouchController=function(e,t,i){this.delegate=e;this.elem=t;this.config=i;this.currentX=0};e.TouchController.prototype.touchstart=function(e){e.stopImmediatePropagation();this.startX=e.touches[0].pageX-this.currentX;this.pageY=e.touches[0].pageY;this.touchMoved=false;window.addEventListener("touchmove",this,true);window.addEventListener("touchend",this,true);this.elem.style.webkitTransitionDuration="0s"};e.TouchController.prototype.touchmove=function(e){e.stopImmediatePropagation();this.touchMoved=true;this.lastX=this.currentX;this.lastMoveTime=(new Date).getTime();this.currentX=e.touches[0].pageX-this.startX;this.delegate.update(this.currentX)};e.TouchController.prototype.touchend=function(e){e.stopImmediatePropagation();window.removeEventListener("touchmove",this,true);window.removeEventListener("touchend",this,true);this.elem.style.webkitTransitionDuration=this.config.tweentime+"s";if(this.touchMoved){var t=this.currentX-this.lastX;var i=(new Date).getTime()-this.lastMoveTime+1;this.currentX=this.currentX+t*50/i;this.delegate.updateTouchEnd(this)}else{this.delegate.click(e,this.pageY,this.currentX)}};e.TouchController.prototype.to=function(e){this.currentX=-e*this.config.covergap;this.delegate.update(this.currentX)};e.TouchController.prototype.handleEvent=function(e){this[e.type](e);e.preventDefault()}})(window.flow);(function(e){e.Delegate=function(e,t,i){this.flow=e;this.elem=t;this.config=i;this.cells=[];this.transforms=[];this.prevF=-1;this.transformProp=Modernizr.prefixed("transform")};e.Delegate.prototype.updateTouchEnd=function(e){var t=this.getFocusedCell(e.currentX);e.currentX=-t*this.config.covergap;this.update(e.currentX)};e.Delegate.prototype.getFocusedCell=function(e){var t=-Math.round(e/this.config.covergap);return Math.min(Math.max(t,0),this.cells.length-1)};e.Delegate.prototype.getFocusedCellOne=function(e){var t=-Math.round(e/this.config.covergap);return Math.min(Math.max(t,-1),this.cells.length)};e.Delegate.prototype.click=function(e,t,i){var n=-Math.round(i/this.config.covergap);var o=this.cells[n];if(o.domElement==e.target.parentNode){if(t<this.offsetY+o.halfHeight/2){this.flow.clicked(o.index)}}};e.Delegate.prototype.setTrayStyle=function(e,t){this.elem.style[this.transformProp]="translate3d("+e+"px, "+t+"px, 0)"};e.Delegate.prototype.setStyleForCell=function(e,t,i){if(this.transforms[t]!=i){e.domElement.style[this.transformProp]=i;this.transforms[t]=i}};e.Delegate.prototype.transformForCell=function(e,t,i){var n=t*this.config.covergap;if(e==t){return"translate3d("+n+"px, 0, 0)"}else if(t>e){return"translate3d("+(n+this.flow.OFFSET)+"px, 0, "+-this.config.coverdepth+"px) "+this.flow.T_NEG_ANGLE}else{return"translate3d("+(n-this.flow.OFFSET)+"px, 0, "+-this.config.coverdepth+"px) "+this.flow.T_ANGLE}};e.Delegate.prototype.update=function(e){this.setTrayStyle(e+this.offsetX,this.offsetY);var t=this.getFocusedCellOne(e);if(t!=this.prevF){this.flow.focused(t);this.prevF=t}for(var i=0;i<this.cells.length;i++){this.setStyleForCell(this.cells[i],i,this.transformForCell(t,i,e))}}})(window.flow);(function(e){e.Utils=function(){};e.Utils.hasFlash=typeof navigator.plugins!="undefined"&&typeof navigator.plugins["Shockwave Flash"]=="object"||window.ActiveXObject&&new ActiveXObject("ShockwaveFlash.ShockwaveFlash")!==false;e.Utils.isIE=navigator.userAgent.match(/msie/i)!==null;e.Utils.css=function(e,t){if(e){for(var i in t){if(typeof t[i]==="undefined"){continue}else if(typeof t[i]=="number"&&!(i=="zIndex"||i=="opacity")){if(isNaN(t[i])){continue}t[i]=Math.ceil(t[i])+"px"}try{e.style[i]=t[i]}catch(n){}}}};e.Utils.addClass=function(e,t){if(e.className.indexOf(t)===-1){e.className+=" "+t}};e.Utils.inject=function(e){var t=document.getElementsByTagName("head")[0];var i;switch(e.slice(-3)){case"css":i=document.createElement("link");i.rel="stylesheet";i.href=e;break;case".js":i=document.createElement("script");i.src=e;break;default:i=document.createElement("style");i.appendChild(document.createTextNode(e))}t.appendChild(i)};e.Utils.getTransEndEventName=function(){return{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"msTransitionEnd",transition:"transitionend"}[Modernizr.prefixed("transition")]}})(window.flow);if(!Array.indexOf){Array.prototype.indexOf=function(e){for(var t=0;t<this.length;t++){if(this[t]==e){return t}}return-1}}