(self.webpackChunkblog=self.webpackChunkblog||[]).push([[84],{120:function(e,t,n){var r=n(7833),o=function(e){var t="",n=Object.keys(e);return n.forEach((function(o,i){var a=e[o];(function(e){return/[height|width]$/.test(e)})(o=r(o))&&"number"==typeof a&&(a+="px"),t+=!0===a?o:!1===a?"not "+o:"("+o+": "+a+")",i<n.length-1&&(t+=" and ")})),t};e.exports=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach((function(n,r){t+=o(n),r<e.length-1&&(t+=", ")})),t):o(e)}},2993:function(e){"use strict";var t=Array.isArray,n=Object.keys,r=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){var u,c,s,l=t(e),f=t(a);if(l&&f){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(l!=f)return!1;var p=e instanceof Date,T=a instanceof Date;if(p!=T)return!1;if(p&&T)return e.getTime()==a.getTime();var d=e instanceof RegExp,E=a instanceof RegExp;if(d!=E)return!1;if(d&&E)return e.toString()==a.toString();var h=n(e);if((c=h.length)!==n(a).length)return!1;for(u=c;0!=u--;)if(!r.call(a,h[u]))return!1;if(o&&e instanceof Element&&a instanceof Element)return e===a;for(u=c;0!=u--;)if(!("_owner"===(s=h[u])&&e.$$typeof||i(e[s],a[s])))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},7701:function(e,t,n){var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n(7294)),a=f(n(5697)),u=f(n(4839)),c=f(n(2993)),s=n(1640),l=n(286);function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var T,d,E,h=(0,u.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),m=(T=h,E=d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=u,t.titleAttributes=r({},a),t));case l.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case l.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=p(o,["children"]),u=(0,s.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(T,o)},o(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(i.default.Component),d.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=T.peek,d.rewind=function(){var e=T.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);m.renderStatic=m.rewind,t.ZP=m},286:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},1640:function(e,t,n){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n(7294)),a=c(n(6494)),u=n(286);function c(e){return e&&e.__esModule?e:{default:e}}var s,l=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=h(e,u.TAG_NAMES.TITLE),n=h(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=h(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},d=function(e,t){return t.filter((function(e){return void 0!==e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},E=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===u.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var s=i[c],l=(0,a.default)({},o[s],r[s]);o[s]=l}return e}),[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){m(e)}),0)}),A=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:n.g.requestAnimationFrame||m,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:n.g.cancelAnimationFrame||A,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,f=e.styleTags,p=e.title,T=e.titleAttributes;O(u.TAG_NAMES.BODY,r),O(u.TAG_NAMES.HTML,o),M(p,T);var d={baseTag:R(u.TAG_NAMES.BASE,n),linkTags:R(u.TAG_NAMES.LINK,i),metaTags:R(u.TAG_NAMES.META,a),noscriptTags:R(u.TAG_NAMES.NOSCRIPT,c),scriptTags:R(u.TAG_NAMES.SCRIPT,l),styleTags:R(u.TAG_NAMES.STYLE,f)},E={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,E,h)},_=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),O(u.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var f=i.indexOf(s);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},R=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},P=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t}),t)},w=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,o=C(n,r),[i.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=P(n),i=_(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+l(i,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+l(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return C(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+l(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){v&&b(v),e.defer?v=y((function(){g(e,(function(){v=null}))})):(g(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,f=e.title,p=void 0===f?"":f,T=e.titleAttributes;return{base:w(u.TAG_NAMES.BASE,t,r),bodyAttributes:w(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:w(u.ATTRIBUTE_NAMES.HTML,o,r),link:w(u.TAG_NAMES.LINK,i,r),meta:w(u.TAG_NAMES.META,a,r),noscript:w(u.TAG_NAMES.NOSCRIPT,c,r),script:w(u.TAG_NAMES.SCRIPT,s,r),style:w(u.TAG_NAMES.STYLE,l,r),title:w(u.TAG_NAMES.TITLE,{title:p,titleAttributes:T},r)}},t.reducePropsToState=function(e){return{baseTag:d([u.TAG_PROPERTIES.HREF],e),bodyAttributes:T(u.ATTRIBUTE_NAMES.BODY,e),defer:h(e,u.HELMET_PROPS.DEFER),encode:h(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(u.ATTRIBUTE_NAMES.HTML,e),linkTags:E(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:E(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=S},4839:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n(7294),i=r(o),a=r(n(6872));function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function f(){s=e(l.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var u=o.prototype;return u.shouldComponentUpdate=function(e){return!a(e,this.props)},u.componentWillMount=function(){l.push(this),f()},u.componentDidUpdate=function(){f()},u.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),f()},u.render=function(){return i.createElement(r,this.props)},o}(o.Component);return u(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),u(p,"canUseDOM",c),p}}},6872:function(e){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var s=i[c];if(!u(s))return!1;var l=e[s],f=t[s];if(!1===(o=n?n.call(r,l,f,s):void 0)||void 0===o&&l!==f)return!1}return!0}},7833:function(e){e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},8537:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var r=n(7294),o=n(1082),i=n(7701);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}var u=n(1721),c=n(7326);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}function f(e,t,n){return(t=l(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=n(5697),T=n.n(p),d=n(1143),E=n.n(d),h=n(120),m=n.n(h),A=function(){function e(e,t,n){var r=this;this.nativeMediaQueryList=e.matchMedia(t),this.active=!0,this.cancellableListener=function(){r.matches=r.nativeMediaQueryList.matches,r.active&&n.apply(void 0,arguments)},this.nativeMediaQueryList.addListener(this.cancellableListener),this.matches=this.nativeMediaQueryList.matches}return e.prototype.cancel=function(){this.active=!1,this.nativeMediaQueryList.removeListener(this.cancellableListener)},e}(),y=T().oneOfType([T().string,T().object,T().arrayOf(T().object.isRequired)]),b=function(e){function t(t){var n,r;return n=e.call(this,t)||this,f((0,c.Z)((0,c.Z)(n)),"queries",[]),f((0,c.Z)((0,c.Z)(n)),"getMatches",(function(){return function(e){var t=Object.keys(e);if(1===t.length&&"__DEFAULT__"===t[0])return e.__DEFAULT__;return e}(n.queries.reduce((function(e,t){var n,r=t.name,o=t.mqListener;return a({},e,((n={})[r]=o.matches,n))}),{}))})),f((0,c.Z)((0,c.Z)(n)),"updateMatches",(function(){var e=n.getMatches();n.setState((function(){return{matches:e}}),n.onChange)})),t.query||t.queries||t.query&&t.queries||E()(!1),void 0!==t.defaultMatches&&t.query&&"boolean"!=typeof t.defaultMatches&&E()(!1),void 0!==t.defaultMatches&&t.queries&&"object"!=typeof t.defaultMatches&&E()(!1),"object"!=typeof window?(r=void 0!==t.defaultMatches?t.defaultMatches:!!t.query||Object.keys(n.props.queries).reduce((function(e,t){var n;return a({},e,((n={})[t]=!0,n))}),{}),n.state={matches:r},(0,c.Z)(n)):(n.initialize(),n.state={matches:void 0!==n.props.defaultMatches?n.props.defaultMatches:n.getMatches()},n.onChange(),n)}(0,u.Z)(t,e);var n=t.prototype;return n.initialize=function(){var e=this,t=this.props.targetWindow||window;"function"!=typeof t.matchMedia&&E()(!1);var n=this.props.queries||{__DEFAULT__:this.props.query};this.queries=Object.keys(n).map((function(r){var o=n[r],i="string"!=typeof o?m()(o):o;return{name:r,mqListener:new A(t,i,e.updateMatches)}}))},n.componentDidMount=function(){this.initialize(),void 0!==this.props.defaultMatches&&this.updateMatches()},n.onChange=function(){var e=this.props.onChange;e&&e(this.state.matches)},n.componentWillUnmount=function(){this.queries.forEach((function(e){return e.mqListener.cancel()}))},n.render=function(){var e=this.props,t=e.children,n=e.render,o=this.state.matches,i="object"==typeof o?Object.keys(o).some((function(e){return o[e]})):o;return n?i?n(o):null:t?"function"==typeof t?t(o):(!Array.isArray(t)||t.length)&&i?r.Children.only(t)&&"string"==typeof r.Children.only(t).type?r.Children.only(t):r.cloneElement(r.Children.only(t),{matches:o}):null:null},t}(r.Component);f(b,"propTypes",{defaultMatches:T().oneOfType([T().bool,T().objectOf(T().bool)]),query:y,queries:T().objectOf(y),render:T().func,children:T().oneOfType([T().node,T().func]),targetWindow:T().object,onChange:T().func});var S=b,v=function(){return r.createElement("div",{style:{background:"#f5f5f5",marginBottom:"3rem",borderBottom:"2px solid #e6e6e6",boxShadow:"6px 2px 24px 8px rgba(0,0,0,.08)",position:"sticky",top:0}},r.createElement("header",{id:"home"},r.createElement("nav",{id:"nav-wrap"},r.createElement("a",{className:"mobileButton",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.createElement("a",{className:"mobileButton",href:"#home",title:"Hide navigation"},"Hide navigation"),r.createElement("ul",{id:"nav",className:"nav"},r.createElement("li",null,r.createElement("a",{href:"https://enphnt.github.io"},"Home")),r.createElement("li",null,r.createElement("a",{href:"https://enphnt.github.io/#about"},"About")),r.createElement("li",null,r.createElement("a",{href:"https://enphnt.github.io/#resume"},"Resume")),r.createElement("li",null,r.createElement("a",{href:"https://enphnt.github.io/#portfolio"},"Works")),r.createElement("li",null,r.createElement("a",{href:"https://enphnt.github.io/#testimonials"},"Testimonials")),r.createElement("li",{className:"current"},r.createElement("a",{href:"https://enphnt.github.io/blog"},"Blog")),r.createElement("li",null,r.createElement("a",{href:"https://enphnt.github.io/#contact"},"Contact"))))))},g=function(e){return r.createElement("div",{className:"sidebar"},r.createElement("strong",{style:{textAlign:"center"}},e.title),e.description,r.createElement("div",null))},_=r.createElement("div",{style:{flex:.66}},r.createElement(g,{title:"Hi, I'm Nathan   👋🏻",description:r.createElement(r.Fragment,null,r.createElement("img",{style:{height:190,width:190,objectFit:"contain",borderRadius:19,padding:10,marginBottom:0},src:"images/profile-pic.png",onerror:"this.src='/images/profile-pic.png'",alt:"profile-pic"}),r.createElement("div",{style:{padding:"0 10px"}},r.createElement("p",{style:{fontSize:13}},"I use this space for writing down things I want to remember for future reference."),r.createElement("strong",{style:{fontSize:13}},"Who am I?"),r.createElement("p",{style:{fontSize:13}},"From 9-5, I develop software but after hours I'm playing guitar, drums or keys as a DIY producer. I'm always learning about random things and some end up here.")))})),M=function(e){var t=e.children;return r.createElement(o.i1,{render:function(e){var n=e.site.siteMetadata.title;return r.createElement(r.Fragment,null,r.createElement(i.ZP,{htmlAttributes:{lang:"en"},title:n,meta:[{name:"google-site-verification",content:"5ZNFoMSu47B0gw6uoo6zFERaJU0fE6Sphks60z0AtYc"},{name:"description",content:n},{name:"keywords",content:"software testing, software development, javascript, software engineer in test"}]}),r.createElement(v,null),r.createElement("div",{style:{margin:"0 auto",maxWidth:1500,display:"flex",flexDirection:"row",justifyContent:"space-between",height:"100%"}},r.createElement(S,{query:{maxWidth:848}},(function(e){return e?r.createElement("div",{style:{margin:"0 auto",maxWidth:980,display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",padding:"0 25px"}},r.createElement("div",{style:{flex:1}},t),_):r.createElement("div",{style:{margin:"0 auto",maxWidth:1500,display:"flex",flexDirection:"row",justifyContent:"space-between",height:"100%",padding:"0 25px 75px 25px"}},r.createElement("div",{style:{flex:2.5,paddingRight:"30px"}},t),_)}))))},query:"3868140423"})}}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-e6e878970770e414da43.js.map