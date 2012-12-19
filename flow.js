var TWEEN=TWEEN||function(){var e,t,i,o,n=60,r=false,s=[],a;return{setFPS:function(e){n=e||60},start:function(e){if(arguments.length!==0){this.setFPS(e)}i=setInterval(this.update,1e3/n)},stop:function(){clearInterval(i)},setAutostart:function(e){r=e;if(r&&!i){this.start()}},add:function(e){s.push(e);if(r&&!i){this.start()}},getAll:function(){return s},removeAll:function(){s=[]},remove:function(t){e=s.indexOf(t);if(e!==-1){s.splice(e,1)}},update:function(t){e=0;a=s.length;var i=t||(new Date).getTime();while(e<a){if(s[e].update(i)){e++}else{s.splice(e,1);a--}}if(a===0&&r===true){this.stop()}}}}();TWEEN.Tween=function(e){var t=e,i={},o={},n={},r=1e3,s=0,a=null,l=TWEEN.Easing.Linear.EaseNone,f=null,h=null,d=null;this.to=function(e,i){if(i!==null){r=i}for(var o in e){if(t[o]===null){continue}n[o]=e[o]}return this};this.start=function(e){TWEEN.add(this);a=e?e+s:(new Date).getTime()+s;for(var r in n){if(t[r]===null){continue}i[r]=t[r];o[r]=n[r]-t[r]}return this};this.stop=function(){TWEEN.remove(this);return this};this.delay=function(e){s=e;return this};this.easing=function(e){l=e;return this};this.chain=function(e){f=e;return this};this.onUpdate=function(e){h=e;return this};this.onComplete=function(e){d=e;return this};this.update=function(e){var n,s,c;if(e<a){return true}s=(e-a)/r;s=s>1?1:s;c=l(s);for(n in o){t[n]=i[n]+o[n]*c}if(h!==null){h.call(t,c)}if(s==1){if(d!==null){d.call(t)}if(f!==null){f.start()}return false}return true}};TWEEN.Easing={Linear:{},Quadratic:{},Cubic:{},Quartic:{},Quintic:{},Sinusoidal:{},Exponential:{},Circular:{},Elastic:{},Back:{},Bounce:{}};TWEEN.Easing.Linear.EaseNone=function(e){return e};TWEEN.Easing.Cubic.EaseOut=function(e){return--e*e*e+1};function CoverFlow(e,t,i,o,n,r,s,a,l,f,h,d,c,u,p,g,m){var w=this;this.GAP=n;this.ANGLE=r;this.DEPTH=-s;this.OFFSET=a+n;this.T_NEG_ANGLE="rotateY("+-this.ANGLE+"deg)";this.T_ANGLE="rotateY("+this.ANGLE+"deg)";this.OPACITY=l;this.DURATION=g;this.hideComplete=null;this.showComplete=null;var v=[];var y=t.length;var E=0;var C=0;var b=0;var A=[];var x=[];this.domElement=document.createElement("div");this.domElement.setAttribute("id","flow_wrap");this.domElement.setAttribute("class","flow_wrap");var k=document.createElement("div");k.setAttribute("id","flow_tray");k.setAttribute("class","flow_tray");this.domElement.appendChild(k);this.domElement.style.webkitPerspective=m;var T=new Delegate(this,k);var R=new TouchController(this,T,k);var M=null;for(var N=0;N<t.length;N++){M=new Cover(w,N,t[N].image,t[N].duration,i,o,h,d,c,f,u,p);T.cells.push(M);k.appendChild(M.domElement);M.domElement.onmousedown=L;M.domElement.style.webkitTransitionDuration=g+"s";v[N]=M}M.domElement.firstChild.addEventListener("webkitTransitionEnd",F,true);function F(e){e.stopPropagation();if(parseInt(M.domElement.firstChild.style.opacity,10)===0){w.domElement.style.opacity=0;if(typeof w.hideComplete=="function")w.hideComplete()}else if(parseInt(M.domElement.firstChild.style.opacity,10)===1){if(typeof w.showComplete=="function")w.showComplete()}}this.hide=function(e){w.hideComplete=e;for(var t=0;t<v.length;t++){v[t].domElement.firstChild.style.opacity=0}};this.show=function(e){w.showComplete=e;w.domElement.style.opacity=1;for(var t=0;t<v.length;t++){v[t].domElement.firstChild.style.opacity=1}};this.itemComplete=function(e){C=C<e?e:C;++E;if(E==y){w.to(0);for(var t=0;t<y;t++){v[t].setY(C)}}};this.left=function(){if(b>0)w.to(b-1)};this.right=function(){if(b<y-1)w.to(b+1)};this.prev=function(){if(b>0)w.to(b-1);else w.to(y-1)};this.next=function(){if(b<y-1)w.to(b+1);else w.to(0)};this.to=function(e){if(e>y-1)e=y-1;else if(e<0)e=0;b=e;R.to(e)};this.focused=function(e){for(var t=0;t<A.length;t++){A[t](e)}};this.clicked=function(e){for(var t=0;t<x.length;t++){x[t](e)}};this.onFocus=function(e){A.push(e)};this.onClick=function(e){x.push(e)};this.destroy=function(){e.removeChild(w.domElement);e.removeEventListener("touchstart",R,true);window.removeEventListener("keydown",D,false)};function L(e){var t=0,i=e.currentTarget;while((i=i.previousSibling)!==null)++t;var o=v[t];if(e.offsetY<o.halfHeight){e.preventDefault();if(o.index!=b)w.to(o.index);else w.clicked(o.index)}}e.addEventListener("touchstart",R,true);window.addEventListener("keydown",D,false);function D(e){switch(e.keyCode){case 37:w.left();break;case 39:w.right();break;case 38:w.to(0);break;case 40:w.to(y-1);break;case 32:w.clicked(b);break}}}function Cover(e,t,i,o,n,r,s,a,l,f,h,d){var c=this;var u;var p;this.index=t;this.halfHeight=0;this.domElement=document.createElement("div");this.domElement.className="flow_cell";var g=this.domElement.style;g.backgroundColor=f;var m=document.createElement("canvas");c.domElement.appendChild(m);var w=document.createElement("img");w.addEventListener("load",v);w.src=i;function v(){var t=w.width;var i=w.height;var o=0;var f=0;var v=0;if(h){var y=document.createElement("canvas");y.width=t;y.height=i;var E=y.getContext("2d");E.drawImage(w,0,0);var C=E.getImageData(0,0,t,i).data;var b=0;var A=0;var x=0;for(var k=0;k<i;k++){b=0;for(A=0;A<t;A++){x=(k*t+A)*4;b+=C[x]<<16|C[x+1]<<8|C[x+2]}if(b/t<460551)o++;else break}for(k=i-1;k>=0;k--){b=0;for(A=0;A<t;A++){x=(k*t+A)*4;b+=C[x]<<16|C[x+1]<<8|C[x+2]}if(b/t<460551)f++;else break}i-=o+f}var T;if(d){u=Math.round(n);p=Math.round(r);if(u/t<p/i){T=p/i;v+=(t-u/T)*.5}else{T=u/t;o+=(i-p/T)*.5}}else{if(n>=r){u=Math.round(t/i*r);p=Math.round(r);T=r/i}else{u=Math.round(n);p=Math.round(i/t*n);T=n/t}}c.halfHeight=p;g.top=-(p*.5)+"px";g.left=-(u*.5)+"px";g.width=u+"px";g.height=p+"px";m.width=u;m.height=p*2;var R=m.getContext("2d");R.drawImage(w,v,o,t-2*v,i-2*o,0,0,u,p);if(s>0){g.height=p*2+"px";c.reflect(m,u,p,s,a,l)}e.itemComplete(p)}this.setY=function(e){var t=e*.5-(e-p);this.domElement.style.top=-t+"px"}}Cover.prototype.reflect=function(e,t,i,o,n,r){var s=e.getContext("2d");s.save();s.scale(1,-1);s.drawImage(e,0,-i*2-r);s.restore();s.globalCompositeOperation="destination-out";var a=s.createLinearGradient(0,0,0,i);a.addColorStop(n/255,"rgba(255, 255, 255, 1.0)");a.addColorStop(0,"rgba(255, 255, 255, "+(1-o)+")");s.translate(0,i+r);s.fillStyle=a;s.fillRect(0,0,t,i)};function TouchController(e,t,i){this.flow=e;this.delegate=t;this.elem=i;this.currentX=0}TouchController.prototype.touchstart=function(e){e.stopImmediatePropagation();this.startX=e.touches[0].pageX-this.currentX;this.pageY=e.touches[0].pageY;this.touchMoved=false;window.addEventListener("touchmove",this,true);window.addEventListener("touchend",this,true);this.elem.style.webkitTransitionDuration="0s"};TouchController.prototype.touchmove=function(e){e.stopImmediatePropagation();this.touchMoved=true;this.lastX=this.currentX;this.lastMoveTime=(new Date).getTime();this.currentX=e.touches[0].pageX-this.startX;this.delegate.update(this.currentX)};TouchController.prototype.touchend=function(e){e.stopImmediatePropagation();window.removeEventListener("touchmove",this,true);window.removeEventListener("touchend",this,true);this.elem.style.webkitTransitionDuration=this.flow.DURATION+"s";if(this.touchMoved){var t=this.currentX-this.lastX;var i=(new Date).getTime()-this.lastMoveTime+1;this.currentX=this.currentX+t*50/i;this.delegate.updateTouchEnd(this)}else{this.delegate.click(e,this.pageY,this.currentX)}};TouchController.prototype.to=function(e){this.currentX=-e*this.delegate.flow.GAP;this.delegate.update(this.currentX)};TouchController.prototype.handleEvent=function(e){this[e.type](e);e.preventDefault()};function Delegate(e,t){this.flow=e;this.elem=t;this.cells=[];this.transforms=[];this.prevF=-1}Delegate.prototype.updateTouchEnd=function(e){var t=this.getFocusedCell(e.currentX);e.currentX=-t*this.flow.GAP;this.update(e.currentX)};Delegate.prototype.getFocusedCell=function(e){var t=-Math.round(e/this.flow.GAP);return Math.min(Math.max(t,0),this.cells.length-1)};Delegate.prototype.getFocusedCellOne=function(e){var t=-Math.round(e/this.flow.GAP);return Math.min(Math.max(t,-1),this.cells.length)};Delegate.prototype.click=function(e,t,i){var o=-Math.round(i/this.flow.GAP);var n=this.cells[o];if(n.domElement==e.target.parentNode){var r=this.findPos(n.domElement);var s=t-r.y;if(s<n.halfHeight){this.flow.clicked(n.index)}}};Delegate.prototype.findPos=function(e){var t=0;var i=0;if(e.offsetParent){do{t+=e.offsetLeft;i+=e.offsetTop}while((e=e.offsetParent)!==null);return{x:t,y:i}}};Delegate.prototype.setStyleForCell=function(e,t,i){if(this.transforms[t]!=i){e.domElement.style.webkitTransform=i;this.transforms[t]=i}};Delegate.prototype.transformForCell=function(e,t,i){var o=t*this.flow.GAP;if(e==t){return"translate3d("+o+"px, 0, 0)"}else if(t>e){return"translate3d("+(o+this.flow.OFFSET)+"px, 0, "+this.flow.DEPTH+"px) "+this.flow.T_NEG_ANGLE}else{return"translate3d("+(o-this.flow.OFFSET)+"px, 0, "+this.flow.DEPTH+"px) "+this.flow.T_ANGLE}};Delegate.prototype.update=function(e){this.elem.style.webkitTransform="translate3d("+e+"px, 0, 0)";var t=this.getFocusedCellOne(e);if(t!=this.prevF){this.flow.focused(t);this.prevF=t}for(var i=0;i<this.cells.length;i++){this.setStyleForCell(this.cells[i],i,this.transformForCell(t,i,e))}};(function(e){if(!window.requestAnimationFrame){window.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){window.setTimeout(e,1e3/60)}}()}var t=function(t,i,o){var n=this;var r;var s,a;var l,f;var h=false;var d;this.width=0;this.height=0;var c=0;var u=true;var p=false;var g=[];var m=[];var w=[];var v=[];var y={size:150,backgroundcolor:"000000",gradientcolor:undefined,coverwidth:150,coverheight:"auto",covergap:40,coverangle:70,coverdepth:170,coveroffset:130,removeblackborder:false,fixedsize:false,focallength:250,opacitydecrease:.1,reflectionopacity:.3,reflectionratio:155,reflectionoffset:0,showduration:true,showtext:true,textstyle:"div#flow_textfield{color:#f1f1f1; text-align:center; font-family:Arial Rounded MT Bold;} #flow_textfield h1{font-size:14px; font-weight:normal; line-height:21px;} #flow_textfield h2{font-size:11px; font-weight:normal;}",textoffset:75,tweentime:.8,rotatedelay:0,dockicon:true,onidle:"show",onpaused:"hide",onplaying:"hide",oncompleted:"show",file:undefined,xposition:0,yposition:0};function E(e){if(t.getRenderingMode()!="html5")return;for(var n in y){if(i[n]===undefined)i[n]=y[n]}var r=".jwplayer_flow {overflow:hidden;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:1;-webkit-transition:opacity .7s;}"+".jwplayer_flow div.flow_wrap {position:absolute;left:50%;top:50%;-webkit-perspective:250;-webkit-transform-style:preserve-3d;}"+".jwplayer_flow div.flow_tray {-webkit-transform-style:preserve-3d;}"+".jwplayer_flow div.flow_tray,.jwplayer_flow div.flow_cell {position:absolute;-webkit-transform:translate3d(0,0,0);-webkit-backface-visibility:hidden;-webkit-transition:-webkit-transform .8s cubic-bezier(0.190,1.000,0.220,1.000);}"+".jwplayer_flow div.flow_cell canvas {position:absolute;opacity:1;-webkit-transition:opacity .7s;}"+"#flow_textfield {position:absolute;width:100%;opacity:1;-webkit-transition:opacity .7s;}"+"#flow_textfield h1,#flow_textfield h2{margin:0;}";var s=document.getElementsByTagName("head")[0];var a=document.createElement("style");var l=i.textstyle;a.setAttribute("type","text/css");a.appendChild(document.createTextNode(r));a.appendChild(document.createTextNode(l));s.appendChild(a);o.className+="jwplayer_flow";o.addEventListener("webkitTransitionEnd",N);c=i.size;i.backgroundcolor=i.backgroundcolor.indexOf("#")==-1?"#"+i.backgroundcolor:i.backgroundcolor;o.style.backgroundColor=i.backgroundcolor;if(i.gradientcolor!==undefined){i.gradientcolor=i.gradientcolor.indexOf("#")==-1?"#"+i.gradientcolor:i.gradientcolor;o.style.background="-webkit-gradient(linear, left top, left bottom, from("+i.gradientcolor+"), to("+i.backgroundcolor+"))"}if(i.dockicon===true&&typeof t.addButton==="function"){var f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAPCAYAAADgbT9oAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABV0RVh0Q3JlYXRpb24gVGltZQA2LzE4LzEx7HcX+AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAABCSURBVDiN7ZMxDgAgCAMP4/+/XAcjIQ4OBDduYeq1CyZJgFGLRrHQmbGFvVxJ18kawLfFLW5xix/El7brZvDst8ULHQsIIS+DTYcAAAAASUVORK5CYII=";t.addButton(f,"Show Playlist",b,"flow")}t.onPlaylist(z);t.onPlaylistItem(B);t.onPlay(U);t.onBuffer(U);t.onPause(U);t.onComplete(Y);o.addEventListener("mousewheel",C)}function C(e){e.preventDefault();var t=Math.ceil(Math.abs(e.wheelDelta)/120);if(t>0){var i=Math.abs(e.wheelDelta)/e.wheelDelta;var o=null;if(i>0)o=n.left;else if(i<0)o=n.right;if(typeof o==="function"){for(var r=0;r<t;r++)o()}}}function b(){if(!r[t.getCurrentItem()]["ova.hidden"]){t.pause(true);n.show()}}function A(){return t.getContainer().getElementsByTagName("video")[0]}function x(){if(A()){var e=A().style.webkitTransform;if(e){A().style.webkitTransform=e.replace(/translate\(.+?\)/,"translate(-"+n.width+"px,-"+n.height+"px)")}else{A().style.webkitTransform="translate(-"+n.width+"px,-"+n.height+"px)"}}}function k(){if(A()){var e=A().style.webkitTransform;A().style.webkitTransform=e.replace(/translate\(.+?\)/,"translate(0px,0px)")}}function T(){return i.position=="left"||i.position=="right"||i.position=="top"||i.position=="bottom"}function R(e){if(i.showtext===true){var t=l[e];if(t){a.innerHTML="<h1>"+(t.title===undefined?"":t.title)+"</h1><h2>"+(t.description===undefined?"":t.description)+"</h2>"}}for(var o=0;o<g.length;o++){g[o](e)}}function M(e){if(i.rotatedelay>0&&d){n.stopRotation()}if(i.file===undefined){if(f[e]!=t.getCurrentItem())t.playlistItem(f[e]);else if(t.getState()=="PLAYING")t.pause(true);else t.play(true)}else{if(l[e].link)window.open(l[e].link,t.config.linktarget);if(l[e].file){t.load({file:l[e].file,image:l[e].image});t.play()}}for(var o=0;o<m.length;o++){m[o](e)}}function N(e){if(e.target==o){if(parseInt(o.style.opacity,10)===0){I()}else{S()}}}function F(){p=false;n.resize()}function L(){if(h||H()===false)return;h=true;if(T()){new TWEEN.Tween(i).to({size:0},400).easing(TWEEN.Easing.Cubic.EaseOut).onUpdate(F).onComplete(I).start()}else{setTimeout(function(){if(i.showtext===true){a.style.opacity=0}s.hide(D)},100);k()}for(var e=0;e<v.length;e++){v[e]()}}function D(){o.style.opacity=0}function I(){W(false);h=false}function P(){if(h||H()===true)return;h=true;W(true);if(T()){i.size=1;F();new TWEEN.Tween(i).to({size:c},400).easing(TWEEN.Easing.Cubic.EaseOut).onUpdate(F).onComplete(_).start()}else{setTimeout(function(){o.style.opacity=1},100)}for(var e=0;e<w.length;e++){w[e]()}}function S(){if(i.showtext===true){a.style.opacity=1}s.show(_)}function _(){h=false;if(!T()){x()}}function z(n){r=n.playlist;i.coverheight=i.coverheight=="auto"?t.config.height:i.coverheight;if(i.file===undefined){l=[];f=[];var a=0;for(var h=0;h<r.length;h++){var d=r[h];if(!d["ova.hidden"]&&d.image){l[a]={title:d.title,description:d.description};l[a].image=d.image;if(i.showduration){l[a].duration=d.duration}f[a]=h;a++}}if(s)s.destroy();s=new CoverFlow(o,l,i.coverwidth,i.coverheight,i.covergap,i.coverangle,i.coverdepth,i.coveroffset,i.opacitydecrease,i.backgroundcolor,i.reflectionopacity,i.reflectionratio,i.reflectionoffset,i.removeblackborder,i.fixedsize,i.tweentime,i.focallength);o.appendChild(s.domElement);O()}else{e.utils.ajax(i.file,G)}}function G(t){try{var i=e.utils.parsers.rssparser.parse(t.responseXML.firstChild);if(i.length>0){X(i)}}catch(o){}}function X(e){l=[];for(var t=0;t<e.length;t++){var n=e[t];l[t]={title:n.title,description:n.description,link:n.link,file:n.file};l[t].image=n.image;if(i.showduration){l[t].duration=n.duration}}if(s)s.destroy();s=new CoverFlow(o,l,i.coverwidth,i.coverheight,i.covergap,i.coverangle,i.coverdepth,i.coveroffset,i.opacitydecrease,i.backgroundcolor,i.reflectionopacity,i.reflectionratio,i.reflectionoffset,i.removeblackborder,i.fixedsize,i.tweentime,i.focallength);o.appendChild(s.domElement);O();s.to(0)}function O(){s.onFocus(R);s.onClick(M);if(a)o.removeChild(a);if(i.showtext===true){a=document.createElement("div");a.setAttribute("id","flow_textfield");o.appendChild(a)}n.resize();B();o.style.display="block";if(i.onidle=="hide"){o.style.display="none";W(false);o.style.opacity=0;s.hide(null);a.style.opacity=0}if(i.rotatedelay>0){if(d)n.stopRotation();d=setInterval(j,i.rotatedelay);o.addEventListener("touchstart",n.stopRotation,false);o.addEventListener("mousedown",n.stopRotation,false)}h=false;if(i.file!==undefined){if(t.getState()=="PLAYING"||t.getState()=="BUFFERING"){if(i.onplaying=="show")n.show();else if(i.onplaying=="hide")n.hide()}}}function B(e){if(r[t.getCurrentItem()]["ova.hidden"]){n.hide()}else if(i.file===undefined){s.to(f.indexOf(t.getCurrentItem()))}}function Y(e){if(i.oncompleted=="show")n.show();else if(i.oncompleted=="hide")n.hide()}function U(e){switch(t.getState()){case"PAUSED":if(i.onpaused=="show")n.show();else if(i.onpaused=="hide")n.hide();break;case"BUFFERING":case"PLAYING":if(i.onplaying=="show")n.show();else if(i.onplaying=="hide")n.hide();break}}function H(){return o.style.display!="none"}function W(e){if(e){o.style.display="block"}else{o.style.display="none"}}t.onReady(E);this.stopRotation=function(){o.removeEventListener("touchstart",n.stopRotation,false);o.removeEventListener("mousedown",n.stopRotation,false);clearInterval(d)};function j(){s.next()}this.left=function(){if(t.getRenderingMode()=="html5"){s.left()}else if(t.getRenderingMode()=="flash"){t.getContainer().flowLeft()}};this.right=function(){if(t.getRenderingMode()=="html5"){s.right()}else if(t.getRenderingMode()=="flash"){t.getContainer().flowRight()}};this.prev=function(){if(t.getRenderingMode()=="html5"){s.prev()}else if(t.getRenderingMode()=="flash"){t.getContainer().flowPrev()}};this.next=function(){if(t.getRenderingMode()=="html5"){s.next()}else if(t.getRenderingMode()=="flash"){t.getContainer().flowNext()}};this.to=function(e){if(t.getRenderingMode()=="html5"){s.to(e)}else if(t.getRenderingMode()=="flash"){t.getContainer().flowTo(e)}};this.onFocus=function(e){if(t.getRenderingMode()=="html5"){g.push(e)}else if(t.getRenderingMode()=="flash"){t.getContainer().flowOnFocus(e.toString())}};this.onClick=function(e){if(t.getRenderingMode()=="html5"){m.push(e)}else if(t.getRenderingMode()=="flash"){t.getContainer().flowOnClick(e.toString())}};this.hide=function(){if(t.getRenderingMode()=="html5"){L()}else if(t.getRenderingMode()=="flash"){t.getContainer().flowHide()}};this.show=function(){if(t.getRenderingMode()=="html5"){P()}else if(t.getRenderingMode()=="flash"){t.getContainer().flowShow()}};this.onHide=function(e){if(t.getRenderingMode()=="html5"){v.push(e)}else if(t.getRenderingMode()=="flash"){t.getContainer().flowOnHide(e.toString())}};this.onShow=function(e){if(t.getRenderingMode()=="html5"){w.push(e)}else if(t.getRenderingMode()=="flash"){t.getContainer().flowOnShow(e.toString())}};this.getDisplayElement=function(){return o};function Q(e,i){if(!p){p=true;if(u){u=false;setTimeout(function(){t.resize(e,i)},0)}else{t.resize(e,i)}}}this.resize=function(e,r){if(t.getRenderingMode()=="html5"){if(e)n.width=e;if(r)n.height=r;var l=n.width;var f=n.height;if(T()&&i.size>0){if(i.position=="left"||i.position=="right"){l=i.size;f=t.config.height;Q(t.config.width-l,t.config.height);o.style[i.position]=-i.size+"px"}else if(i.position=="top"||i.position=="bottom"){l=t.config.width;f=i.size;Q(t.config.width,t.config.height-f);if(i.position=="top"){o.style.top=-f+"px"}else if(i.position=="bottom"){o.style.top=t.config.height-f+"px"}}t.getContainer().style["margin"+V(i.position)]=i.size+"px"}o.style.width=l+"px";o.style.height=f+"px";if(s){s.domElement.style.left=l*.5+i.xposition+"px";s.domElement.style.top=f*.5+i.yposition+"px"}if(a){a.style.top=f-i.textoffset+"px"}}else{if(o.parentNode){o.parentNode.removeChild(o)}}};function V(e){return e.substr(0,1).toUpperCase()+e.substr(1)}function q(){window.requestAnimationFrame(q);TWEEN.update()}q()};e().registerPlugin("flow","6.0",t,"./flow.swf")})(jwplayer)