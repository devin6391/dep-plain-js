"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["app-shell-d1c3df367d75e8d347d2.js","ea6f9a3ea55fd5a35c05885dafa96973"],["app-shell-d1c3df367d75e8d347d2.js.gz","3552f87f5f2359dfa60ed6ba81d93228"],["commons.chunk.js-168a9450ccf5d1e22775.js","ccfc2caa8ba7b46f3314139c7d3e0c6c"],["custom-jq-95e7575f4b953c92c7f8.js","b1f7936ecc4ce37be8d97a1e2e3fa47b"],["custom-jq-95e7575f4b953c92c7f8.js.gz","b2bc69a8c0c28c8d82abb86f9a87d6d0"],["fonts/Roboto-Bold.woff","eed9aab5449cc9c8430d7d258108f602"],["fonts/Roboto-Bold.woff2","c0f1e4a4fdfb8048c72e86aadb2a247d"],["fonts/Roboto-Light.woff","ea36cd9a0e9eee97012a67b8a4570d7b"],["fonts/Roboto-Light.woff2","3c37aa69cd77e6a53a067170fa8fe2e9"],["fonts/Roboto-Medium.woff","cf4d60bc0b1d4b2314085919a00e1724"],["fonts/Roboto-Medium.woff2","1561b424aaef2f704bbd89155b3ce514"],["fonts/Roboto-Regular.woff","3cf6adf61054c328b1b0ddcd8f9ce24d"],["fonts/Roboto-Regular.woff2","5136cbe62a63604402f2fedb97f246f8"],["fonts/Roboto-Thin.woff","44b78f142603eb69f593ed4002ed7a4a"],["fonts/Roboto-Thin.woff2","1f35e6a11d27d2e10d28946d42332dc5"],["icons-0cded3a3276425911d55a2552bf361bf/.cache","05c99d8506ff90dcb293d1213ab707a0"],["icons-0cded3a3276425911d55a2552bf361bf/android-chrome-144x144.png","7976f9458d0530957d639fb87fc32817"],["icons-0cded3a3276425911d55a2552bf361bf/android-chrome-192x192.png","8729e6ee2fcc7a4c2e8acd2f7ab0e02a"],["icons-0cded3a3276425911d55a2552bf361bf/android-chrome-256x256.png","d5afb26eb738ae2e37d33e8b9f01b64f"],["icons-0cded3a3276425911d55a2552bf361bf/android-chrome-36x36.png","e1e0bde32d259dc78261dfa2fc4eac8a"],["icons-0cded3a3276425911d55a2552bf361bf/android-chrome-384x384.png","527bd6a6894d83cf429a2e86665a080d"],["icons-0cded3a3276425911d55a2552bf361bf/android-chrome-48x48.png","d769a34aa3881cb34cc1e8088953bcb0"],["icons-0cded3a3276425911d55a2552bf361bf/android-chrome-512x512.png","e06115cd51a4d53cce85e23df38929fc"],["icons-0cded3a3276425911d55a2552bf361bf/android-chrome-72x72.png","3a4a3c95372b98b924f1491db2226d0d"],["icons-0cded3a3276425911d55a2552bf361bf/android-chrome-96x96.png","03afe3f13c570a2b8bc55293115b33d2"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-icon-114x114.png","790e4cc8467f81ed28bf0c095c887d68"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-icon-120x120.png","f17653e915e58cab2f254d1ce796f8a0"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-icon-144x144.png","7976f9458d0530957d639fb87fc32817"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-icon-152x152.png","9415cfb6198a907bcca5ca0fb681d3de"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-icon-167x167.png","62d40638045a673d1aa8b1a160680e33"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-icon-180x180.png","b0977b25063dc73604d20b168b889b3c"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-icon-57x57.png","d6ddf82b9617a8b4589c6fb6541752c0"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-icon-60x60.png","de81f0b0a02e9b2704a2bfb32ec4076a"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-icon-72x72.png","3a4a3c95372b98b924f1491db2226d0d"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-icon-76x76.png","ac1128f52ab5e7a85c2a217d245513d7"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-icon-precomposed.png","b0977b25063dc73604d20b168b889b3c"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-icon.png","b0977b25063dc73604d20b168b889b3c"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-startup-image-1182x2208.png","49965b31afd99a27ec0c5320fde204a9"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-startup-image-1242x2148.png","7805eb905552c5e393bd46bb125ac8c6"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-startup-image-1496x2048.png","c57ca111b8708d10a9415871ccedf91e"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-startup-image-1536x2008.png","0a329db55d5088c4b11e1224c21b9445"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-startup-image-320x460.png","37aa840541f8e62d8b6965cc8a852a9c"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-startup-image-640x1096.png","1e6119fe45dfb5024c81b680062f9f92"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-startup-image-640x920.png","524995c5d9a7844a8c336706b7fca7d4"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-startup-image-748x1024.png","6a5c24a793b386e17205e2c2f3f41706"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-startup-image-750x1294.png","2a00bfbaaa08ccd1acf92a8941d3af26"],["icons-0cded3a3276425911d55a2552bf361bf/apple-touch-startup-image-768x1004.png","bb4b2b67e8c3dd891cb2a37680082242"],["icons-0cded3a3276425911d55a2552bf361bf/favicon-16x16.png","8e16488349bd6ca3c8f5b978a794c4af"],["icons-0cded3a3276425911d55a2552bf361bf/favicon-230x230.png","66a8d677567a0ea764aa3fd3029224ae"],["icons-0cded3a3276425911d55a2552bf361bf/favicon-32x32.png","42a3bb35a8f41eb44648d51b349a5143"],["icons-0cded3a3276425911d55a2552bf361bf/favicon-96x96.png","03afe3f13c570a2b8bc55293115b33d2"],["icons-0cded3a3276425911d55a2552bf361bf/favicon.ico","ba9e80f77c8eb501e7d7e1c6618d289e"],["icons-0cded3a3276425911d55a2552bf361bf/firefox_app_128x128.png","ba1304d7a0d6d2f3d81021d7ca89dd91"],["icons-0cded3a3276425911d55a2552bf361bf/firefox_app_512x512.png","862656c908c75b26272e54828f97bb6c"],["icons-0cded3a3276425911d55a2552bf361bf/firefox_app_60x60.png","9786cf94ea39b5e8e5d357d617715d13"],["icons-0cded3a3276425911d55a2552bf361bf/manifest.json","0a4a6aafc9dff67ec414bd87c9494996"],["icons-0cded3a3276425911d55a2552bf361bf/manifest.webapp","9e12dd0968ad8e16d769714e263e6688"],["images/back-arrow.png","613f92b18df032463cd8270a2a218718"],["images/check.png","13ab9fe50321ece5252d8bf0602f1df4"],["images/email1.png","86fe280ad7d80e514b4e856d79172933"],["images/email2.png","2729e85e9d864de5c210fe7efa539fcd"],["images/eye.png","5da8554c06c229ae341878a4b6c9fa62"],["images/facebook.png","968f23c33e3e914f309a4ed7d0eba419"],["images/footer-logo.png","e1ee95f16ad7a47b1eaa124f50701f03"],["images/googleplus.png","017c7a44797ae68ab5b43936999741c6"],["images/info.png","116e338383181eba187d490682bcb589"],["images/logo_JavaScript.png","0cded3a3276425911d55a2552bf361bf"],["images/offer.png","1df98d7bd737b4d7d59b13f43adc5a80"],["images/password-off.png","05c7be0092476d00412a5d03bcd37e77"],["images/password-on.png","027236b8b040f74e872cf53574b9c401"],["images/phone.png","bd839c2dc3d09e56ef027e4181531892"],["images/popup-arrow.png","40cc58bcd3e3cc3f49de984ed89e381b"],["images/user1.png","73749b55faa8479ae2e4a66d8d95ffc9"],["images/user2.png","4b8875fcf5a85fb21a9fbf4b5466efa3"],["index.html","bb33df79e2a5bb4e0e2d40f890fa43a3"],["polyfills-7c0648c2eebbf7114ea9.js","b8f2570cd733d3f391f123a1537d9144"],["polyfills-7c0648c2eebbf7114ea9.js.gz","f51edbb17b018c02669d0f0e82d975cc"]],cacheName="sw-precache-v3-plain-js-webpack-babel-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),a.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],r=new URL(n,self.location),a=createCacheKey(r,hashParamName,t,!1);return[r.toString(),a]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);n=urlsToCacheKeys.has(t);n||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.toolbox=e()}}(function(){return function e(n,t,r){function a(c,i){if(!t[c]){if(!n[c]){var s="function"==typeof require&&require;if(!i&&s)return s(c,!0);if(o)return o(c,!0);var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f}var u=t[c]={exports:{}};n[c][0].call(u.exports,function(e){var t=n[c][1][e];return a(t?t:e)},u,u.exports,e,n,t,r)}return t[c].exports}for(var o="function"==typeof require&&require,c=0;c<r.length;c++)a(r[c]);return a}({1:[function(e,n,t){function r(e,n){n=n||{},(n.debug||b.debug)&&console.log("[sw-toolbox] "+e)}function a(e){var n;return e&&e.cache&&(n=e.cache.name),n=n||b.cache.name,caches.open(n)}function o(e,n){n=n||{};var t=n.successResponses||b.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&t.test(r.status)&&a(n).then(function(t){t.put(e,r).then(function(){var r=n.cache||b.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,t,r)})}),r.clone()})}function c(e,n,t){var r=i.bind(null,e,n,t);l=l?l.then(r):r()}function i(e,n,t){var a=e.url,o=t.maxAgeSeconds,c=t.maxEntries,i=t.name,s=Date.now();return r("Updating LRU order for "+a+". Max entries is "+c+", max age is "+o),g.getDb(i).then(function(e){return g.setTimestampForUrl(e,a,s)}).then(function(e){return g.expireEntries(e,c,o,s)}).then(function(e){r("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function s(e,n,t){return r("Renaming cache: ["+e+"] to ["+n+"]",t),caches.delete(n).then(function(){return Promise.all([caches.open(e),caches.open(n)]).then(function(n){var t=n[0],r=n[1];return t.keys().then(function(e){return Promise.all(e.map(function(e){return t.match(e).then(function(n){return r.put(e,n)})}))}).then(function(){return caches.delete(e)})})})}function f(e,n){return a(n).then(function(n){return n.add(e)})}function u(e,n){return a(n).then(function(n){return n.delete(e)})}function d(e){e instanceof Promise||p(e),b.preCacheItems=b.preCacheItems.concat(e)}function p(e){var n=Array.isArray(e);if(n&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(n=!1)}),!n)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function h(e,n,t){if(!e)return!1;if(n){var r=e.headers.get("date");if(r){if(new Date(r).getTime()+1e3*n<t)return!1}}return!0}var l,b=e("./options"),g=e("./idb-cache-expiration");n.exports={debug:r,fetchAndCache:o,openCache:a,renameCache:s,cache:f,uncache:u,precache:d,validatePrecacheInput:p,isResponseFresh:h}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,n,t){function r(e){return new Promise(function(n,t){var r=indexedDB.open(f+e,u);r.onupgradeneeded=function(){r.result.createObjectStore(d,{keyPath:p}).createIndex(h,h,{unique:!1})},r.onsuccess=function(){n(r.result)},r.onerror=function(){t(r.error)}})}function a(e){return e in l||(l[e]=r(e)),l[e]}function o(e,n,t){return new Promise(function(r,a){var o=e.transaction(d,"readwrite");o.objectStore(d).put({url:n,timestamp:t}),o.oncomplete=function(){r(e)},o.onabort=function(){a(o.error)}})}function c(e,n,t){return n?new Promise(function(r,a){var o=1e3*n,c=[],i=e.transaction(d,"readwrite"),s=i.objectStore(d);s.index(h).openCursor().onsuccess=function(e){var n=e.target.result;if(n&&t-o>n.value[h]){var r=n.value[p];c.push(r),s.delete(r),n.continue()}},i.oncomplete=function(){r(c)},i.onabort=a}):Promise.resolve([])}function i(e,n){return n?new Promise(function(t,r){var a=[],o=e.transaction(d,"readwrite"),c=o.objectStore(d),i=c.index(h),s=i.count();i.count().onsuccess=function(){var e=s.result;e>n&&(i.openCursor().onsuccess=function(t){var r=t.target.result;if(r){var o=r.value[p];a.push(o),c.delete(o),e-a.length>n&&r.continue()}})},o.oncomplete=function(){t(a)},o.onabort=r}):Promise.resolve([])}function s(e,n,t,r){return c(e,t,r).then(function(t){return i(e,n).then(function(e){return t.concat(e)})})}var f="sw-toolbox-",u=1,d="store",p="url",h="timestamp",l={};n.exports={getDb:a,setTimestampForUrl:o,expireEntries:s}},{}],3:[function(e,n,t){function r(e){var n=s.match(e.request);n?e.respondWith(n(e.request)):s.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(s.default(e.request))}function a(e){i.debug("activate event fired");var n=f.cache.name+"$$$inactive$$$";e.waitUntil(i.renameCache(n,f.cache.name))}function o(e){return e.reduce(function(e,n){return e.concat(n)},[])}function c(e){var n=f.cache.name+"$$$inactive$$$";i.debug("install event fired"),i.debug("creating cache ["+n+"]"),e.waitUntil(i.openCache({cache:{name:n}}).then(function(e){return Promise.all(f.preCacheItems).then(o).then(i.validatePrecacheInput).then(function(n){return i.debug("preCache list: "+(n.join(", ")||"(none)")),e.addAll(n)})}))}e("serviceworker-cache-polyfill");var i=e("./helpers"),s=e("./router"),f=e("./options");n.exports={fetchListener:r,activateListener:a,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,n,t){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,n.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,n,t){var r=new URL("./",self.location),a=r.pathname,o=e("path-to-regexp"),c=function(e,n,t,r){n instanceof RegExp?this.fullUrlRegExp=n:(0!==n.indexOf("/")&&(n=a+n),this.keys=[],this.regexp=o(n,this.keys)),this.method=e,this.options=r,this.handler=t};c.prototype.makeHandler=function(e){var n;if(this.regexp){var t=this.regexp.exec(e);n={},this.keys.forEach(function(e,r){n[e.name]=t[r+1]})}return function(e){return this.handler(e,n,this.options)}.bind(this)},n.exports=c},{"path-to-regexp":15}],6:[function(e,n,t){function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var a=e("./route"),o=e("./helpers"),c=function(e,n){for(var t=e.entries(),r=t.next(),a=[];!r.done;){new RegExp(r.value[0]).test(n)&&a.push(r.value[1]),r=t.next()}return a},i=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){i.prototype[e]=function(n,t,r){return this.add(e,n,t,r)}}),i.prototype.add=function(e,n,t,c){c=c||{};var i;n instanceof RegExp?i=RegExp:(i=c.origin||self.location.origin,i=i instanceof RegExp?i.source:r(i)),e=e.toLowerCase();var s=new a(e,n,t,c);this.routes.has(i)||this.routes.set(i,new Map);var f=this.routes.get(i);f.has(e)||f.set(e,new Map);var u=f.get(e),d=s.regexp||s.fullUrlRegExp;u.has(d.source)&&o.debug('"'+n+'" resolves to same regex as existing route.'),u.set(d.source,s)},i.prototype.matchMethod=function(e,n){var t=new URL(n),r=t.origin,a=t.pathname;return this._match(e,c(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],n)},i.prototype._match=function(e,n,t){if(0===n.length)return null;for(var r=0;r<n.length;r++){var a=n[r],o=a&&a.get(e.toLowerCase());if(o){var i=c(o,t);if(i.length>0)return i[0].makeHandler(t)}}return null},i.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},n.exports=new i},{"./helpers":1,"./route":5}],7:[function(e,n,t){function r(e,n,t){return t=t||{},o.debug("Strategy: cache first ["+e.url+"]",t),o.openCache(t).then(function(n){return n.match(e).then(function(n){var r=t.cache||a.cache,c=Date.now();return o.isResponseFresh(n,r.maxAgeSeconds,c)?n:o.fetchAndCache(e,t)})})}var a=e("../options"),o=e("../helpers");n.exports=r},{"../helpers":1,"../options":4}],8:[function(e,n,t){function r(e,n,t){return t=t||{},o.debug("Strategy: cache only ["+e.url+"]",t),o.openCache(t).then(function(n){return n.match(e).then(function(e){var n=t.cache||a.cache,r=Date.now();if(o.isResponseFresh(e,n.maxAgeSeconds,r))return e})})}var a=e("../options"),o=e("../helpers");n.exports=r},{"../helpers":1,"../options":4}],9:[function(e,n,t){function r(e,n,t){return a.debug("Strategy: fastest ["+e.url+"]",t),new Promise(function(r,c){var i=!1,s=[],f=function(e){s.push(e.toString()),i?c(new Error('Both cache and network failed: "'+s.join('", "')+'"')):i=!0},u=function(e){e instanceof Response?r(e):f("No result returned")};a.fetchAndCache(e.clone(),t).then(u,f),o(e,n,t).then(u,f)})}var a=e("../helpers"),o=e("./cacheOnly");n.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,n,t){n.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,n,t){function r(e,n,t){t=t||{};var r=t.successResponses||a.successResponses,c=t.networkTimeoutSeconds||a.networkTimeoutSeconds;return o.debug("Strategy: network first ["+e.url+"]",t),o.openCache(t).then(function(n){var i,s,f=[];if(c){var u=new Promise(function(r){i=setTimeout(function(){n.match(e).then(function(e){var n=t.cache||a.cache,c=Date.now(),i=n.maxAgeSeconds;o.isResponseFresh(e,i,c)&&r(e)})},1e3*c)});f.push(u)}var d=o.fetchAndCache(e,t).then(function(e){if(i&&clearTimeout(i),r.test(e.status))return e;throw o.debug("Response was an HTTP error: "+e.statusText,t),s=e,new Error("Bad response")}).catch(function(r){return o.debug("Network or response error, fallback to cache ["+e.url+"]",t),n.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return f.push(d),Promise.race(f)})}var a=e("../options"),o=e("../helpers");n.exports=r},{"../helpers":1,"../options":4}],12:[function(e,n,t){function r(e,n,t){return a.debug("Strategy: network only ["+e.url+"]",t),fetch(e)}var a=e("../helpers");n.exports=r},{"../helpers":1}],13:[function(e,n,t){var r=e("./options"),a=e("./router"),o=e("./helpers"),c=e("./strategies"),i=e("./listeners");o.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),n.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:a,options:r,cache:o.cache,uncache:o.uncache,precache:o.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,n,t){n.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,n,t){function r(e,n){for(var t,r=[],a=0,o=0,c="",i=n&&n.delimiter||"/";null!=(t=x.exec(e));){var u=t[0],d=t[1],p=t.index;if(c+=e.slice(o,p),o=p+u.length,d)c+=d[1];else{var h=e[o],l=t[2],b=t[3],g=t[4],m=t[5],v=t[6],w=t[7];c&&(r.push(c),c="");var y=null!=l&&null!=h&&h!==l,R="+"===v||"*"===v,E="?"===v||"*"===v,C=t[2]||i,k=g||m;r.push({name:b||a++,prefix:l||"",delimiter:C,optional:E,repeat:R,partial:y,asterisk:!!w,pattern:k?f(k):w?".*":"[^"+s(C)+"]+?"})}}return o<e.length&&(c+=e.substr(o)),c&&r.push(c),r}function a(e,n){return i(r(e,n))}function o(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function i(e){for(var n=new Array(e.length),t=0;t<e.length;t++)"object"==typeof e[t]&&(n[t]=new RegExp("^(?:"+e[t].pattern+")$"));return function(t,r){for(var a="",i=t||{},s=r||{},f=s.pretty?o:encodeURIComponent,u=0;u<e.length;u++){var d=e[u];if("string"!=typeof d){var p,h=i[d.name];if(null==h){if(d.optional){d.partial&&(a+=d.prefix);continue}throw new TypeError('Expected "'+d.name+'" to be defined')}if(m(h)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var l=0;l<h.length;l++){if(p=f(h[l]),!n[u].test(p))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but received `'+JSON.stringify(p)+"`");a+=(0===l?d.prefix:d.delimiter)+p}}else{if(p=d.asterisk?c(h):f(h),!n[u].test(p))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but received "'+p+'"');a+=d.prefix+p}}else a+=d}return a}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function f(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,n){return e.keys=n,e}function d(e){return e.sensitive?"":"i"}function p(e,n){var t=e.source.match(/\((?!\?)/g);if(t)for(var r=0;r<t.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,n)}function h(e,n,t){for(var r=[],a=0;a<e.length;a++)r.push(g(e[a],n,t).source);return u(new RegExp("(?:"+r.join("|")+")",d(t)),n)}function l(e,n,t){return b(r(e,t),n,t)}function b(e,n,t){m(n)||(t=n||t,n=[]),t=t||{};for(var r=t.strict,a=t.end!==!1,o="",c=0;c<e.length;c++){var i=e[c];if("string"==typeof i)o+=s(i);else{var f=s(i.prefix),p="(?:"+i.pattern+")";n.push(i),i.repeat&&(p+="(?:"+f+p+")*"),p=i.optional?i.partial?f+"("+p+")?":"(?:"+f+"("+p+"))?":f+"("+p+")",o+=p}}var h=s(t.delimiter||"/"),l=o.slice(-h.length)===h;return r||(o=(l?o.slice(0,-h.length):o)+"(?:"+h+"(?=$))?"),o+=a?"$":r&&l?"":"(?="+h+"|$)",u(new RegExp("^"+o,d(t)),n)}function g(e,n,t){return m(n)||(t=n||t,n=[]),t=t||{},e instanceof RegExp?p(e,n):m(e)?h(e,n,t):l(e,n,t)}var m=e("isarray");n.exports=g,n.exports.parse=r,n.exports.compile=a,n.exports.tokensToFunction=i,n.exports.tokensToRegExp=b;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,n,t){!function(){var e=Cache.prototype.addAll,n=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(n)var t=n[1],r=parseInt(n[2]);e&&(!n||"Firefox"===t&&r>=46||"Chrome"===t&&r>=50)||(Cache.prototype.addAll=function(e){function n(e){this.name="NetworkError",this.code=19,this.message=e}var t=this;return n.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new n("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new n("Incorrect response status");return Promise.all(r.map(function(n,r){return t.put(e[r],n)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/[.]mp3$/,toolbox.cacheFirst,{});