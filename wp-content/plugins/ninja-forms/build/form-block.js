!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=43)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.React},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){e.exports=r(40)()},,,function(e,t,r){var n=r(15),o=r(16),i=r(13),a=r(17);e.exports=function(e,t){return n(e)||o(e,t)||i(e,t)||a()}},function(e,t){e.exports=window.wp.i18n},,,function(e,t){e.exports=window.wp.blockEditor},,function(e,t,r){var n=r(14);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t){e.exports=window.wp.blocks},,,,,,,,,,,,,,function(e,t,r){var n=r(37),o=r(38),i=r(13),a=r(39);e.exports=function(e){return n(e)||o(e)||i(e)||a()}},function(e){e.exports=JSON.parse('{"icon":"feedback","category":"common","attributes":{"formID":{"type":"integer"},"formTitle":{"type":"string"}}}')},,,,function(e,t,r){var n=r(14);e.exports=function(e){if(Array.isArray(e))return n(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,r){"use strict";var n=r(41);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,function(e,t,r){"use strict";r.r(t);var n=r(3),o=r.n(n),i=r(1),a=r.n(i),c=r(32),l=r.n(c),u=r(0),f=r(2),s=r(11),p=r(7),m=r.n(p),b=function(e){var t=a.a.useState((function(){return Array.isArray(e.forms)?e.forms:Object.values(e.forms)})),r=m()(t,1)[0];return{getFormTitle:function(e){if(e=parseInt(e,10),r.length){var t=r.find((function(t){return t.formID===e}));return t?t.formTitle:void 0}},asSelectOptions:function(){return r.length?r.map((function(e){return{label:e.formTitle,value:e.formID}})):[]}}},d=r(4),y=r.n(d);function v(e){var t=e.formID,r=e.homeUrl,n=e.previewToken,o=a.a.useRef(),i=a.a.useState(!0),c=m()(i,2),l=c[0],s=c[1],p=a.a.useState(0),b=m()(p,2),d=b[0],y=b[1],v=a.a.useState("auto"),O=m()(v,2),h=O[0],g=O[1];return Object(u.createElement)("div",{className:"nf-iframe-container"},Object(u.createElement)("div",{className:"nf-iframe-overlay"},l&&Object(u.createElement)(f.Spinner,null),Object(u.createElement)("iframe",{src:"".concat(r,"?nf_preview_form=").concat(t,"&nf_iframe=").concat(n),ref:function(e){return o.current=e},style:{width:"initial",pointerEvents:"none"},onLoad:function(){s(!1);var e=o.current.contentWindow.document.getElementById("nf-form-".concat(t,"-cont")),r=e.querySelectorAll(".ninja-forms-form-wrap");r&&r.length?(g(r[0].scrollWidth),y(r[0].scrollHeight)):(g(e.scrollWidth),y(e.scrollHeight))},scrolling:"no",height:d||0,width:h||"auto"})))}v.propTypes={formID:y.a.number.isRequired,homeUrl:y.a.string.isRequired,previewToken:y.a.string.isRequired};var O=Object(u.createElement)("svg",{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",width:"30px",height:"30px",viewBox:"0 0 29.93 13.43"},Object(u.createElement)("path",{fill:"#fff",d:"M22,21.7a4.72,4.72,0,0,0-2.44-4,14.44,14.44,0,0,0-13.38-.06,4.61,4.61,0,0,0-2.53,4Z",transform:"translate(-0.03 -8.27)"}),Object(u.createElement)("path",{fill:"#414242",d:"M3.68,21.7a4.6,4.6,0,0,1,2.53-4,14.44,14.44,0,0,1,13.38,0,4.73,4.73,0,0,1,2.44,4h3.65v-.37a12.76,12.76,0,0,0-1.2-5.42A7.59,7.59,0,0,0,24,15a31.79,31.79,0,0,1,4.14-1c1.36-.28,2.14-.46,1.68-.83-1-.81-2.24-1.68-2.24-1.68s5.05-4.18,0-2.91a9.62,9.62,0,0,0-2.53,1,10.69,10.69,0,0,0-3.13,2.76,12.83,12.83,0,0,0-21.9,9,3.15,3.15,0,0,0,0,.37Z",transform:"translate(-0.03 -8.27)"}),Object(u.createElement)("path",{fill:"#414242",d:"M9.3,21.7c0-1-.58-1.81-1.29-1.81s-1.27.81-1.29,1.81Z",transform:"translate(-0.03 -8.27)"}),Object(u.createElement)("path",{fill:"#414242",d:"M19,21.7c0-1-.59-1.81-1.29-1.81s-1.27.81-1.29,1.81Z",transform:"translate(-0.03 -8.27)"})),h=function(e){return Object(u.createElement)(f.Placeholder,{icon:Object(u.createElement)("div",null,e.icon?e.icon:O),instructions:"Display a form",style:{alignItems:"center"}},Object(u.createElement)("div",{style:{margin:"auto",width:"50%"}},e.children))};h.propTypes={children:y.a.element.isRequired};var g=function(e){var t=e.formID,r=e.forms,n=e.onChange,o=e.labelText,i=b({forms:r}).asSelectOptions,c=a.a.useMemo((function(){var e=i();return[{label:"---"}].concat(l()(e))}),[r,i]);return Object(u.createElement)(f.SelectControl,{label:o||"Select Form",value:t,onChange:n,options:c})};function j(e){var t=e.formID,r=e.forms,n=e.labelText,o=e.setAttributes,i=e.homeUrl,c=e.previewToken,l=e.icon,f=b({forms:r}).getFormTitle,p=function(e){var t=e?f(e):"";o({formID:parseInt(e),formTitle:t})};return t?Object(u.createElement)(a.a.Fragment,null,Object(u.createElement)(s.InspectorControls,null,Object(u.createElement)(g,{formID:t,forms:r,onChange:p,labelText:n})),Object(u.createElement)(v,{homeUrl:i,previewToken:c,formID:t})):Object(u.createElement)(h,{icon:l},Object(u.createElement)(g,{label:n||"Select Form",formID:t,forms:r,onChange:p,labelText:n}))}g.propTypes={formID:y.a.PropTypes.number,forms:y.a.oneOfType([y.a.array,y.a.object]).isRequired,onChange:y.a.func.isRequired,labelText:y.a.string},j.propTypes={formID:y.a.number,forms:y.a.oneOfType([y.a.array,y.a.object]).isRequired,labelText:y.a.string,setAttributes:y.a.func.isRequired,homeUrl:y.a.string.isRequired,previewToken:y.a.string.isRequired};var w=r(33),T=r(8),x=r(18);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=window.nfFormsBlock||{},D=S.forms,P=S.homeUrl,_=S.previewToken;Object(x.registerBlockType)("ninja-forms/form",I(I({},w),{},{title:Object(T.__)("Ninja Form","ninja-forms"),edit:function(e){var t=e.attributes,r=e.setAttributes;return Object(u.createElement)(j,{forms:D,formID:t.formID,formTitle:t.formTitle,setAttributes:r,homeUrl:P,previewToken:_})},save:function(){return null},deprecated:[{attributes:{formID:{type:"integer",default:0},formName:{type:"string",default:""}},save:function(e){var t=e.attributes.formID;if(!t)return"";var r="[ninja_forms id="+parseInt(t)+"]";return Object(u.createElement)("div",null,r)}}]}))}]);