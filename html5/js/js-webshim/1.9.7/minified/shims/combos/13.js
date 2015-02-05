(function(e,t,i){"use strict";var a,n,r=t.audio&&t.video,o=!1,s=i.bugs,l="mediaelement-jaris",u=function(){i.ready(l,function(){i.mediaelement.createSWF||(i.mediaelement.loadSwf=!0,i.reTest([l],r))})},c=i.cfg.mediaelement;if(!c)return i.error("mediaelement wasn't implemented but loaded"),void 0;if(r){var d=document.createElement("video");if(t.videoBuffered="buffered"in d,o="loop"in d,i.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),t.videoBuffered||(i.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),i.loader.loadList(["mediaelement-native-fix"])),!c.preferFlash){var p={1:1,2:1},h=function(t){var a,r,o;if(!c.preferFlash&&(e(t.target).is("audio, video")||(o=t.target.parentNode)&&e("source:last",o)[0]==t.target)&&(a=e(t.target).closest("audio, video"))&&!p[r=a.prop("error")]){if(null==r)return i.warn("There was an unspecified error on a mediaelement"),void 0;e(function(){n&&!c.preferFlash?(u(),i.ready("WINDOWLOAD "+l,function(){setTimeout(function(){c.preferFlash||!i.mediaelement.createSWF||a.is(".nonnative-api-active")||(c.preferFlash=!0,document.removeEventListener("error",h,!0),e("audio, video").each(function(){i.mediaelement.selectSource(this)}),i.error("switching mediaelements option to 'preferFlash', due to an error with native player: "+t.target.src+" Mediaerror: "+a.prop("error")))},9)})):document.removeEventListener("error",h,!0)})}};document.addEventListener("error",h,!0),e("audio, video").each(function(){var t=e.prop(this,"error");return t&&!p[t]?(h({target:this}),!1):void 0})}}t.track&&!s.track&&function(){if(s.track||(s.track="number"!=typeof e("<track />")[0].readyState),!s.track)try{new TextTrackCue(2,3,"")}catch(t){s.track=!0}}(),a=t.track&&!s.track,i.register("mediaelement-core",function(e,t,i,s,d){n=swfmini.hasFlashPlayerVersion("9.0.115"),e("html").addClass(n?"swf":"no-swf");var p=t.mediaelement;p.parseRtmp=function(e){var i,a,n,r=e.src.split("://"),o=r[1].split("/");for(e.server=r[0]+"://"+o[0]+"/",e.streamId=[],i=1,a=o.length;a>i;i++)n||-1===o[i].indexOf(":")||(o[i]=o[i].split(":")[1],n=!0),n?e.streamId.push(o[i]):e.server+=o[i]+"/";e.streamId.length||t.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var h=function(t,i){t=e(t);var a,n={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return n.src?(a=t.attr("data-server"),null!=a&&(n.server=a),a=t.attr("type"),a?(n.type=a,n.container=e.trim(a.split(";")[0])):(i||(i=t[0].nodeName.toLowerCase(),"source"==i&&(i=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),n.server?(n.type=i+"/rtmp",n.container=i+"/rtmp"):(a=p.getTypeForSrc(n.src,i,n),a&&(n.type=a,n.container=a))),a=t.attr("media"),a&&(n.media=a),("audio/rtmp"==n.type||"video/rtmp"==n.type)&&(n.server?n.streamId=n.src:p.parseRtmp(n)),n):n},f=!n&&"postMessage"in i&&r,m=function(){m.loaded||(m.loaded=!0,t.ready("WINDOWLOAD",function(){g(),t.loader.loadList(["track-ui"])}))},v=function(){var i;return function(){!i&&f&&(i=!0,t.loader.loadScript("https://www.youtube.com/player_api"),e(function(){t._polyfill(["mediaelement-yt"])}))}}(),g=function(){n?u():v()};t.addPolyfill("mediaelement-yt",{test:!f,d:["dom-support"]}),p.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},p.mimeTypes.source=e.extend({},p.mimeTypes.audio,p.mimeTypes.video),p.getTypeForSrc=function(t,i){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(0===t.indexOf("rtmp"))return i+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var a;return e.each(p.mimeTypes[i],function(e,i){return-1!==i.indexOf(t)?(a=e,!1):d}),a},p.srces=function(t,i){if(t=e(t),!i){i=[];var a=t[0].nodeName.toLowerCase(),n=h(t,a);return n.src?i.push(n):e("source",t).each(function(){n=h(this,a),n.src&&i.push(n)}),i}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(i)||(i=[i]),i.forEach(function(e){var i=s.createElement("source");"string"==typeof e&&(e={src:e}),i.setAttribute("src",e.src),e.type&&i.setAttribute("type",e.type),e.media&&i.setAttribute("media",e.media),t.append(i)})},e.fn.loadMediaSrc=function(t,i){return this.each(function(){i!==d&&(e(this).removeAttr("poster"),i&&e.attr(this,"poster",i)),p.srces(this,t),e(this).mediaLoad()})},p.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],p.canThirdPlaySrces=function(t,i){var a="";return(n||f)&&(t=e(t),i=i||p.srces(t),e.each(i,function(e,t){return t.container&&t.src&&(n&&-1!=p.swfMimeTypes.indexOf(t.container)||f&&"video/youtube"==t.container)?(a=t,!1):d})),a};var y={};p.canNativePlaySrces=function(t,i){var a="";if(r){t=e(t);var n=(t[0].nodeName||"").toLowerCase(),o=(y[n]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return a;i=i||p.srces(t),e.each(i,function(e,i){return i.type&&o.call(t[0],i.type)?(a=i,!1):d})}return a};var b=/^\s*application\/octet\-stream\s*$/i,w=function(){var t=b.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};p.setError=function(i,a){if(e("source",i).filter(w).length){t.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(i).mediaLoad()}catch(n){}}else a||(a="can't play sources"),e(i).pause().data("mediaerror",a),t.error("mediaelementError: "+a),setTimeout(function(){e(i).data("mediaerror")&&e(i).trigger("mediaerror")},1)};var x=function(){var e;return function(i,a,r){t.ready(n?l:"mediaelement-yt",function(){p.createSWF?p.createSWF(i,a,r):e||(e=!0,g(),x(i,a,r))}),e||!f||p.createSWF||v()}}(),k=function(e,t,i,a,n){var r;i||i!==!1&&t&&"third"==t.isActive?(r=p.canThirdPlaySrces(e,a),r?x(e,r,t):n?p.setError(e,!1):k(e,t,!1,a,!0)):(r=p.canNativePlaySrces(e,a),r?t&&"third"==t.isActive&&p.setActive(e,"html5",t):n?(p.setError(e,!1),t&&"third"==t.isActive&&p.setActive(e,"html5",t)):k(e,t,!0,a,!0))},T=/^(?:embed|object|datalist)$/i,C=function(i,a){var n=t.data(i,"mediaelementBase")||t.data(i,"mediaelementBase",{}),r=p.srces(i),o=i.parentNode;clearTimeout(n.loadTimer),e.data(i,"mediaerror",!1),r.length&&o&&1==o.nodeType&&!T.test(o.nodeName||"")&&(a=a||t.data(i,"mediaelement"),k(i,a,c.preferFlash||d,r))};p.selectSource=C,e(s).on("ended",function(i){var a=t.data(i.target,"mediaelement");(!o||a&&"html5"!=a.isActive||e.prop(i.target,"loop"))&&setTimeout(function(){!e.prop(i.target,"paused")&&e.prop(i.target,"loop")&&e(i.target).prop("currentTime",0).play()},1)});var E=!1,A=function(){var s=function(){if(t.implement(this,"mediaelement")&&(C(this),r&&(!o||"ActiveXObject"in i))){var a,n,s=this,l=function(){var t=e.prop(s,"buffered");if(t){for(var i="",a=0,n=t.length;n>a;a++)i+=t.end(a);return i}},u=function(){var i=l();i!=n&&(n=i,t.info("needed to trigger progress manually"),e(s).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){"progress"==e.type&&(n=l()),clearTimeout(a),a=setTimeout(u,400)},"emptied stalled mediaerror abort suspend":function(e){"emptied"==e.type&&(n=!1),clearTimeout(a)}}),"ActiveXObject"in i&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay],.nonnative-api-active)')&&e(this).prop("preload","metadata").mediaLoad()}};t.ready("dom-support",function(){E=!0,o||t.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(i){var a=t.defineNodeNameProperty(i,"load",{prop:{value:function(){var e=t.data(this,"mediaelement");C(this,e),!r||e&&"html5"!=e.isActive||!a.prop._supvalue||a.prop._supvalue.apply(this,arguments)}}});y[i]=t.defineNodeNameProperty(i,"canPlayType",{prop:{value:function(t){var a="";return r&&y[i].prop._supvalue&&(a=y[i].prop._supvalue.call(this,t),"no"==a&&(a="")),!a&&n&&(t=e.trim((t||"").split(";")[0]),-1!=p.swfMimeTypes.indexOf(t)&&(a="maybe")),a}}})}),t.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,i=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{});clearTimeout(i.loadTimer),i.loadTimer=setTimeout(function(){C(e),e=null},9)}}),t.addReady(function(t,i){var a=e("video, audio",t).add(i.filter("video, audio")).each(s);!m.loaded&&e("track",a).length&&m(),a=null})}),r&&!E&&t.addReady(function(i,n){E||e("video, audio",i).add(n.filter("video, audio")).each(function(){return p.canNativePlaySrces(this)?(a&&!t.modules.track.options.override||m.loaded||!e("track",this).length||m(),d):(g(),E=!0,!1)})})};a&&t.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),r?(t.isReady("mediaelement-core",!0),A(),t.ready("WINDOWLOAD mediaelement",g)):t.ready(l,A),t.ready("track",m)})})(jQuery,Modernizr,webshims),webshims.register("track",function(e,t,i,a){"use strict";var n=t.mediaelement;(new Date).getTime();var r=e.fn.addBack?"addBack":"andSelf",o={subtitles:1,captions:1,descriptions:1},s=e("<track />"),l=Modernizr.ES5&&Modernizr.objectAccessor,u=function(e){var i={};return e.addEventListener=function(e,a){i[e]&&t.error("always use $.on to the shimed event: "+e+" already bound fn was: "+i[e]+" your fn was: "+a),i[e]=a},e.removeEventListener=function(e,a){i[e]&&i[e]!=a&&t.error("always use $.on/$.off to the shimed event: "+e+" already bound fn was: "+i[e]+" your fn was: "+a),i[e]&&delete i[e]},e},c={getCueById:function(e){for(var t=null,i=0,a=this.length;a>i;i++)if(this[i].id===e){t=this[i];break}return t}},d={0:"disabled",1:"hidden",2:"showing"},p={shimActiveCues:null,_shimActiveCues:null,activeCues:null,cues:null,kind:"subtitles",label:"",language:"",mode:"disabled",readyState:0,oncuechange:null,toString:function(){return"[object TextTrack]"},addCue:function(e){if(this.cues){var i=this.cues[this.cues.length-1];i&&i.startTime>e.startTime&&t.error("cue startTime higher than previous cue's startTime")}else this.cues=n.createCueList();e.track&&e.track.removeCue&&e.track.removeCue(e),e.track=this,this.cues.push(e)},removeCue:function(e){var i=this.cues||[],a=0,n=i.length;if(e.track!=this)return t.error("cue not part of track"),undefined;for(;n>a;a++)if(i[a]===e){i.splice(a,1),e.track=null;break}return e.track?(t.error("cue not part of track"),undefined):undefined},DISABLED:"disabled",OFF:"disabled",HIDDEN:"hidden",SHOWING:"showing",ERROR:3,LOADED:2,LOADING:1,NONE:0},h=["kind","label","srclang"],f={srclang:"language"},m=Function.prototype.call.bind(Object.prototype.hasOwnProperty),v=function(i,a){var n,r,o=[],s=[],l=[];if(i||(i=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{})),a||(i.blockTrackListUpdate=!0,a=e.prop(this,"textTracks"),i.blockTrackListUpdate=!1),clearTimeout(i.updateTrackListTimer),e("track",this).each(function(){var t=e.prop(this,"track");l.push(t),-1==a.indexOf(t)&&s.push(t)}),i.scriptedTextTracks)for(n=0,r=i.scriptedTextTracks.length;r>n;n++)l.push(i.scriptedTextTracks[n]),-1==a.indexOf(i.scriptedTextTracks[n])&&s.push(i.scriptedTextTracks[n]);for(n=0,r=a.length;r>n;n++)-1==l.indexOf(a[n])&&o.push(a[n]);if(o.length||s.length){for(a.splice(0),n=0,r=l.length;r>n;n++)a.push(l[n]);for(n=0,r=o.length;r>n;n++)e([a]).triggerHandler(e.Event({type:"removetrack",track:o[n]}));for(n=0,r=s.length;r>n;n++)e([a]).triggerHandler(e.Event({type:"addtrack",track:s[n]}));(i.scriptedTextTracks||o.length)&&e(this).triggerHandler("updatetrackdisplay")}},g=function(i,a){a||(a=t.data(i,"trackData")),a&&!a.isTriggering&&(a.isTriggering=!0,setTimeout(function(){(a.track||{}).readyState?e(i).closest("audio, video").triggerHandler("updatetrackdisplay"):e(i).triggerHandler("checktrackmode"),a.isTriggering=!1},1))},y=e("<div />")[0];i.TextTrackCue=function(e,i,a){3!=arguments.length&&t.error("wrong arguments.length for TextTrackCue.constructor"),this.startTime=e,this.endTime=i,this.text=a,this.id="",this.pauseOnExit=!1,u(this)},i.TextTrackCue.prototype={onenter:null,onexit:null,pauseOnExit:!1,getCueAsHTML:function(){var e,t="",i="",r=a.createDocumentFragment();return m(this,"getCueAsHTML")||(e=this.getCueAsHTML=function(){var e,a;if(t!=this.text)for(t=this.text,i=n.parseCueTextToHTML(t),y.innerHTML=i,e=0,a=y.childNodes.length;a>e;e++)r.appendChild(y.childNodes[e].cloneNode(!0));return r.cloneNode(!0)}),e?e.apply(this,arguments):r.cloneNode(!0)},track:null,id:""},n.createCueList=function(){return e.extend([],c)},n.parseCueTextToHTML=function(){var e=/(<\/?[^>]+>)/gi,t=/^(?:c|v|ruby|rt|b|i|u)/,i=/\<\s*\//,a=function(e,t,a,n){var r;return i.test(n)?r="</"+e+">":(a.splice(0,1),r="<"+e+" "+t+'="'+a.join(" ").replace(/\"/g,"&#34;")+'">'),r},n=function(e){var i=e.replace(/[<\/>]+/gi,"").split(/[\s\.]+/);return i[0]&&(i[0]=i[0].toLowerCase(),t.test(i[0])?"c"==i[0]?e=a("span","class",i,e):"v"==i[0]&&(e=a("q","title",i,e)):e=""),e};return function(t){return t.replace(e,n)}}(),n.loadTextTrack=function(i,a,r,s){var l="play playing timeupdate updatetrackdisplay",u=r.track,c=function(){var r,o,s=e.prop(a,"src");if("disabled"!=u.mode&&s&&e.attr(a,"src")&&(e(i).unbind(l,c),e(a).unbind("checktrackmode",c),!u.readyState)){r=function(){u.readyState=3,u.cues=null,u.activeCues=u.shimActiveCues=u._shimActiveCues=null,e(a).triggerHandler("error")},u.readyState=1;try{u.cues=n.createCueList(),u.activeCues=u.shimActiveCues=u._shimActiveCues=n.createCueList(),o=e.ajax({dataType:"text",url:s,success:function(s){"text/vtt"!=o.getResponseHeader("content-type")&&t.error("set the mime-type of your WebVTT files to text/vtt. see: http://dev.w3.org/html5/webvtt/#text/vtt"),n.parseCaptions(s,u,function(t){t&&"length"in t?(u.readyState=2,e(a).triggerHandler("load"),e(i).triggerHandler("updatetrackdisplay")):r()})},error:r})}catch(d){r(),t.warn(d)}}};u.readyState=0,u.shimActiveCues=null,u._shimActiveCues=null,u.activeCues=null,u.cues=null,e(i).unbind(l,c),e(a).unbind("checktrackmode",c),e(i).on(l,c),e(a).on("checktrackmode",c),s&&(u.mode=o[u.kind]?"showing":"hidden",c())},n.createTextTrack=function(i,a){var o,s;return a.nodeName&&(s=t.data(a,"trackData"),s&&(g(a,s),o=s.track)),o||(o=u(t.objectCreate(p)),l||h.forEach(function(t){var i=e.prop(a,t);i&&(o[f[t]||t]=i)}),a.nodeName?(l&&h.forEach(function(i){t.defineProperty(o,f[i]||i,{get:function(){return e.prop(a,i)}})}),s=t.data(a,"trackData",{track:o}),n.loadTextTrack(i,a,s,e.prop(a,"default")&&e(a).siblings("track[default]")[r]()[0]==a)):(l&&h.forEach(function(e){t.defineProperty(o,f[e]||e,{value:a[e],writeable:!1})}),o.cues=n.createCueList(),o.activeCues=o._shimActiveCues=o.shimActiveCues=n.createCueList(),o.mode="hidden",o.readyState=2)),o},n.parseCaptionChunk=function(){var e=/^(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s+\-\-\>\s+(\d{2})?:?(\d{2}):(\d{2})\.(\d+)\s*(.*)/,i=/^(DEFAULTS|DEFAULT)\s+\-\-\>\s+(.*)/g,a=/^(STYLE|STYLES)\s+\-\-\>\s*\n([\s\S]*)/g,n=/^(COMMENT|COMMENTS)\s+\-\-\>\s+(.*)/g;return function(r){var o,s,l,u,c,d,p,h,f,m;if(h=i.exec(r))return null;if(h=a.exec(r))return null;if(h=n.exec(r))return null;for(o=r.split(/\n/g);!o[0].replace(/\s+/gi,"").length&&o.length>0;)o.shift();for(o[0].match(/^\s*[a-z0-9-\_]+\s*$/gi)&&(p=o.shift().replace(/\s*/gi,"")+""),d=0;o.length>d;d++){var v=o[d];(f=e.exec(v))&&(c=f.slice(1),s=parseInt(60*60*(c[0]||0),10)+parseInt(60*(c[1]||0),10)+parseInt(c[2]||0,10)+parseFloat("0."+(c[3]||0)),l=parseInt(60*60*(c[4]||0),10)+parseInt(60*(c[5]||0),10)+parseInt(c[6]||0,10)+parseFloat("0."+(c[7]||0))),o=o.slice(0,d).concat(o.slice(d+1));break}return s||l?(u=o.join("\n"),m=new TextTrackCue(s,l,u),p&&(m.id=p),m):(t.warn("couldn't extract time information: "+[s,l,o.join("\n"),p].join(" ; ")),null)}}(),n.parseCaptions=function(e,i,a){n.createCueList();var r,o,s,l,u;e?(s=/^WEBVTT(\s*FILE)?/gi,o=function(c,d){for(;d>c;c++){if(r=e[c],s.test(r))u=!0;else if(r.replace(/\s*/gi,"").length){if(!u){t.error("please use WebVTT format. This is the standard"),a(null);break}r=n.parseCaptionChunk(r,c),r&&i.addCue(r)}if((new Date).getTime()-30>l){c++,setTimeout(function(){l=(new Date).getTime(),o(c,d)},90);break}}c>=d&&(u||t.error("please use WebVTT format. This is the standard"),a(i.cues))},e=e.replace(/\r\n/g,"\n"),setTimeout(function(){e=e.replace(/\r/g,"\n"),setTimeout(function(){l=(new Date).getTime(),e=e.split(/\n\n+/g),o(0,e.length)},9)},9)):t.error("Required parameter captionData not supplied.")},n.createTrackList=function(e,i){return i=i||t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),i.textTracks||(i.textTracks=[],t.defineProperties(i.textTracks,{onaddtrack:{value:null},onremovetrack:{value:null}}),u(i.textTracks)),i.textTracks},Modernizr.track||(t.defineNodeNamesBooleanProperty(["track"],"default"),t.reflectProperties(["track"],["srclang","label"]),t.defineNodeNameProperties("track",{src:{reflect:!0,propType:"src"}})),t.defineNodeNameProperties("track",{kind:{attr:Modernizr.track?{set:function(e){var i=t.data(this,"trackData");this.setAttribute("data-kind",e),i&&(i.attrKind=e)},get:function(){var e=t.data(this,"trackData");return e&&"attrKind"in e?e.attrKind:this.getAttribute("kind")}}:{},reflect:!0,propType:"enumarated",defaultValue:"subtitles",limitedTo:["subtitles","captions","descriptions","chapters","metadata"]}}),e.each(h,function(i,a){var n=f[a]||a;t.onNodeNamesPropertyModify("track",a,function(){var i=t.data(this,"trackData"),r=this;i&&("kind"==a&&g(this,i),l||(i.track[n]=e.prop(this,a)),clearTimeout(i.changedTrackPropTimer),i.changedTrackPropTimer=setTimeout(function(){e(r).trigger("updatesubtitlestate")},1))})}),t.onNodeNamesPropertyModify("track","src",function(i){if(i){var a,r=t.data(this,"trackData");r&&(a=e(this).closest("video, audio"),a[0]&&n.loadTextTrack(a,this,r))}}),t.defineNodeNamesProperties(["track"],{ERROR:{value:3},LOADED:{value:2},LOADING:{value:1},NONE:{value:0},readyState:{get:function(){return(e.prop(this,"track")||{readyState:0}).readyState},writeable:!1},track:{get:function(){return n.createTextTrack(e(this).closest("audio, video")[0],this)},writeable:!1}},"prop"),t.defineNodeNamesProperties(["audio","video"],{textTracks:{get:function(){var e=this,i=t.data(e,"mediaelementBase")||t.data(e,"mediaelementBase",{}),a=n.createTrackList(e,i);return i.blockTrackListUpdate||v.call(e,i,a),a},writeable:!1},addTextTrack:{value:function(e,i,a){var r=n.createTextTrack(this,{kind:s.prop("kind",e||"").prop("kind"),label:i||"",srclang:a||""}),o=t.data(this,"mediaelementBase")||t.data(this,"mediaelementBase",{});return o.scriptedTextTracks||(o.scriptedTextTracks=[]),o.scriptedTextTracks.push(r),v.call(this),r}}},"prop"),e(a).on("emptied ended updatetracklist",function(i){if(e(i.target).is("audio, video")){var a=t.data(i.target,"mediaelementBase");a&&(clearTimeout(a.updateTrackListTimer),a.updateTrackListTimer=setTimeout(function(){v.call(i.target,a)},0))}});var b=function(e,t){return t.readyState||e.readyState},w=function(e){e.originalEvent&&e.stopImmediatePropagation()},x=function(){if(t.implement(this,"track")){var i,a,n=e.prop(this,"track"),r=this.track;r&&(i=e.prop(this,"kind"),a=b(this,r),(r.mode||a)&&(n.mode=d[r.mode]||r.mode),"descriptions"!=i&&(r.mode="string"==typeof r.mode?"disabled":0,this.kind="metadata",e(this).attr({kind:i}))),e(this).on("load error",w)}};t.addReady(function(i,a){var n=a.filter("video, audio, track").closest("audio, video");e("video, audio",i).add(n).each(function(){v.call(this)}).each(function(){if(Modernizr.track){var i=e.prop(this,"textTracks"),a=this.textTracks;i.length!=a.length&&t.error("textTracks couldn't be copied"),e("track",this).each(x)}}),n.each(function(){var e=this,i=t.data(e,"mediaelementBase");i&&(clearTimeout(i.updateTrackListTimer),i.updateTrackListTimer=setTimeout(function(){v.call(e,i)},9))})}),Modernizr.track&&e("video, audio").trigger("trackapichange")});