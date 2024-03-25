/*! For license information please see 3557.f9ddbd14.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_surfnet_sds=self.webpackChunk_surfnet_sds||[]).push([[3557],{"./src/common/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Cf:()=>valueForSort,KE:()=>pseudoGuid,N5:()=>sortObjects,Nw:()=>sanitize,p7:()=>stopEvent,xb:()=>isEmpty});var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/isomorphic-dompurify/browser.js"),isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function stopEvent(e){return null==e||(e.preventDefault(),e.stopPropagation(),!1)}function isEmpty(obj){return null==obj||(Array.isArray(obj)?0===obj.length:"string"==typeof obj?0===obj.trim().length:obj&&obj.getTime&&"function"==typeof obj.getTime?obj.getTime()!=obj.getTime():"object"===_typeof(obj)&&0===Object.keys(obj).length)}function sanitize(text){return isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default().sanitize(text,{ADD_ATTR:["target"]})}function pseudoGuid(){return crypto.randomUUID&&"function"==typeof crypto.randomUUID&&crypto.randomUUID()||Math.round((new Date).getTime()*Math.random()*1e3).toString()}function sortObjects(objects,attribute,reverse){return _toConsumableArray(objects).sort((function(a,b){var val1=valueForSort(attribute,a),val2=valueForSort(attribute,b);if("number"==typeof val1&&"number"==typeof val2)return(val1-val2)*(reverse?-1:1);var aS=val1.toString(),bS=val2.toString();return 0===aS.length?reverse?-1:1:0===bS.length?reverse?1:-1:aS.localeCompare(bS)*(reverse?-1:1)}))}function valueForSort(attribute,obj){if(attribute.endsWith("_date"))return obj[attribute]||Number.MAX_SAFE_INTEGER;var val=obj[attribute];return val.getTime&&"function"==typeof val.getTime?val.getTime():isEmpty(val)?attribute.replace(/__/g,".").split(".").reduce((function(acc,e){return isEmpty(acc)?"":acc[e]}),obj)||"":val}},"./src/components/Tooltip/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>components_Tooltip_Tooltip});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Tooltip=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltip/Tooltip.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Tooltip.Z,options);Tooltip.Z&&Tooltip.Z.locals&&Tooltip.Z.locals;var floating_ui_core=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),process=__webpack_require__("./node_modules/process/browser.js");const y="react-tooltip-core-styles",h="react-tooltip-base-styles",w={core:!1,base:!1};function b({css:e,id:t=h,type:r="base",ref:o}){var n,l;if(!e||"undefined"==typeof document||w[r])return;if("core"===r&&void 0!==process&&(null===(n=null==process?void 0:process.env)||void 0===n?void 0:n.REACT_TOOLTIP_DISABLE_CORE_STYLES))return;if("base"!==r&&void 0!==process&&(null===(l=null==process?void 0:process.env)||void 0===l?void 0:l.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;"core"===r&&(t=y),o||(o={});const{insertAt:i}=o;if(document.getElementById(t))return void console.warn(`[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`);const c=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.id=t,s.type="text/css","top"===i&&c.firstChild?c.insertBefore(s,c.firstChild):c.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e)),w[r]=!0}const E=(e,t,r)=>{let o=null;return function(...n){const l=()=>{o=null,r||e.apply(this,n)};r&&!o&&(e.apply(this,n),o=setTimeout(l,t)),r||(o&&clearTimeout(o),o=setTimeout(l,t))}},g="DEFAULT_TOOLTIP_ID",_={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},A=(0,react.createContext)({getTooltipData:()=>_});function O(e=g){return(0,react.useContext)(A).getTooltipData(e)}const R="undefined"!=typeof window?react.useLayoutEffect:react.useEffect,C=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some((e=>{const r=t.getPropertyValue(e);return"auto"===r||"scroll"===r}))},N=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(C(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},k=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:r=null,place:o="top",offset:n=10,strategy:l="absolute",middlewares:i=[(0,floating_ui_core.cv)(Number(n)),(0,floating_ui_core.RR)(),(0,floating_ui_core.uY)({padding:5})],border:c})=>{if(!e)return{tooltipStyles:{},tooltipArrowStyles:{},place:o};if(null===t)return{tooltipStyles:{},tooltipArrowStyles:{},place:o};const s=i;return r?(s.push((0,floating_ui_core.x7)({element:r,padding:5})),(0,floating_ui_dom.oo)(e,t,{placement:o,strategy:l,middleware:s}).then((({x:e,y:t,placement:r,middlewareData:o})=>{var n,l;const i={left:`${e}px`,top:`${t}px`,border:c},{x:s,y:a}=null!==(n=o.arrow)&&void 0!==n?n:{x:0,y:0},u=null!==(l={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]])&&void 0!==l?l:"bottom",d=c&&{borderBottom:c,borderRight:c};let p=0;if(c){const e=`${c}`.match(/(\d+)px/);p=(null==e?void 0:e[1])?Number(e[1]):1}return{tooltipStyles:i,tooltipArrowStyles:{left:null!=s?`${s}px`:"",top:null!=a?`${a}px`:"",right:"",bottom:"",...d,[u]:`-${4+p}px`},place:r}}))):(0,floating_ui_dom.oo)(e,t,{placement:"bottom",strategy:l,middleware:s}).then((({x:e,y:t,placement:r})=>({tooltipStyles:{left:`${e}px`,top:`${t}px`},tooltipArrowStyles:{},place:r})))};var H={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const q=({id:t,className:n,classNameArrow:l,variant:s="dark",anchorId:a,anchorSelect:u,place:d="top",offset:p=10,events:v=["hover"],openOnClick:y=!1,positionStrategy:h="absolute",middlewares:w,wrapper:b,delayShow:S=0,delayHide:g=0,float:_=!1,hidden:A=!1,noArrow:T=!1,clickable:L=!1,closeOnEsc:C=!1,closeOnScroll:q=!1,closeOnResize:z=!1,style:M,position:W,afterShow:P,afterHide:F,content:K,contentWrapperRef:U,isOpen:X,setIsOpen:Y,activeAnchor:V,setActiveAnchor:Z,border:G,opacity:J,arrowColor:Q})=>{const ee=(0,react.useRef)(null),te=(0,react.useRef)(null),re=(0,react.useRef)(null),oe=(0,react.useRef)(null),[ne,le]=(0,react.useState)(d),[ie,ce]=(0,react.useState)({}),[se,ae]=(0,react.useState)({}),[ue,de]=(0,react.useState)(!1),[pe,ve]=(0,react.useState)(!1),me=(0,react.useRef)(!1),fe=(0,react.useRef)(null),{anchorRefs:ye,setActiveAnchor:he}=O(t),we=(0,react.useRef)(!1),[be,Se]=(0,react.useState)([]),Ee=(0,react.useRef)(!1),ge=y||v.includes("click");R((()=>(Ee.current=!0,()=>{Ee.current=!1})),[]),(0,react.useEffect)((()=>{if(!ue){const e=setTimeout((()=>{ve(!1)}),150);return()=>{clearTimeout(e)}}return()=>null}),[ue]);const _e=e=>{Ee.current&&(e&&ve(!0),setTimeout((()=>{Ee.current&&(null==Y||Y(e),void 0===X&&de(e))}),10))};(0,react.useEffect)((()=>{if(void 0===X)return()=>null;X&&ve(!0);const e=setTimeout((()=>{de(X)}),10);return()=>{clearTimeout(e)}}),[X]),(0,react.useEffect)((()=>{ue!==me.current&&(me.current=ue,ue?null==P||P():null==F||F())}),[ue]);const Ae=(e=g)=>{oe.current&&clearTimeout(oe.current),oe.current=setTimeout((()=>{we.current||_e(!1)}),e)},Te=e=>{var t;if(!e)return;const r=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==r?void 0:r.isConnected))return Z(null),void he({current:null});S?(re.current&&clearTimeout(re.current),re.current=setTimeout((()=>{_e(!0)}),S)):_e(!0),Z(r),he({current:r}),oe.current&&clearTimeout(oe.current)},Oe=()=>{L?Ae(g||100):g?Ae():_e(!1),re.current&&clearTimeout(re.current)},Le=({x:e,y:t})=>{k({place:d,offset:p,elementReference:{getBoundingClientRect:()=>({x:e,y:t,width:0,height:0,top:t,left:e,right:e,bottom:t})},tooltipReference:ee.current,tooltipArrowReference:te.current,strategy:h,middlewares:w,border:G}).then((e=>{Object.keys(e.tooltipStyles).length&&ce(e.tooltipStyles),Object.keys(e.tooltipArrowStyles).length&&ae(e.tooltipArrowStyles),le(e.place)}))},Re=e=>{if(!e)return;const t=e,r={x:t.clientX,y:t.clientY};Le(r),fe.current=r},Ce=e=>{Te(e),g&&Ae()},Ne=e=>{var t;[document.querySelector(`[id='${a}']`),...be].some((t=>null==t?void 0:t.contains(e.target)))||(null===(t=ee.current)||void 0===t?void 0:t.contains(e.target))||(_e(!1),re.current&&clearTimeout(re.current))},ke=E(Te,50,!0),xe=E(Oe,50,!0),$e=(0,react.useCallback)((()=>{W?Le(W):_?fe.current&&Le(fe.current):(null==V?void 0:V.isConnected)&&k({place:d,offset:p,elementReference:V,tooltipReference:ee.current,tooltipArrowReference:te.current,strategy:h,middlewares:w,border:G}).then((e=>{Ee.current&&(Object.keys(e.tooltipStyles).length&&ce(e.tooltipStyles),Object.keys(e.tooltipArrowStyles).length&&ae(e.tooltipArrowStyles),le(e.place))}))}),[ue,V,K,M,d,p,h,W,_]);(0,react.useEffect)((()=>{var e,t;const r=new Set(ye);be.forEach((e=>{r.add({current:e})}));const o=document.querySelector(`[id='${a}']`);o&&r.add({current:o});const n=()=>{_e(!1)},l=N(V),i=N(ee.current);q&&(window.addEventListener("scroll",n),null==l||l.addEventListener("scroll",n),null==i||i.addEventListener("scroll",n));let c=null;z?window.addEventListener("resize",n):V&&ee.current&&(c=(0,floating_ui_dom.Me)(V,ee.current,$e,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const s=e=>{"Escape"===e.key&&_e(!1)};C&&window.addEventListener("keydown",s);const u=[];ge?(window.addEventListener("click",Ne),u.push({event:"click",listener:Ce})):(u.push({event:"mouseenter",listener:ke},{event:"mouseleave",listener:xe},{event:"focus",listener:ke},{event:"blur",listener:xe}),_&&u.push({event:"mousemove",listener:Re}));const d=()=>{we.current=!0},p=()=>{we.current=!1,Oe()};return L&&!ge&&(null===(e=ee.current)||void 0===e||e.addEventListener("mouseenter",d),null===(t=ee.current)||void 0===t||t.addEventListener("mouseleave",p)),u.forEach((({event:e,listener:t})=>{r.forEach((r=>{var o;null===(o=r.current)||void 0===o||o.addEventListener(e,t)}))})),()=>{var e,t;q&&(window.removeEventListener("scroll",n),null==l||l.removeEventListener("scroll",n),null==i||i.removeEventListener("scroll",n)),z?window.removeEventListener("resize",n):null==c||c(),ge&&window.removeEventListener("click",Ne),C&&window.removeEventListener("keydown",s),L&&!ge&&(null===(e=ee.current)||void 0===e||e.removeEventListener("mouseenter",d),null===(t=ee.current)||void 0===t||t.removeEventListener("mouseleave",p)),u.forEach((({event:e,listener:t})=>{r.forEach((r=>{var o;null===(o=r.current)||void 0===o||o.removeEventListener(e,t)}))}))}}),[V,$e,pe,ye,be,C,v]),(0,react.useEffect)((()=>{let e=null!=u?u:"";!e&&t&&(e=`[data-tooltip-id='${t}']`);const r=new MutationObserver((r=>{const o=[],n=[];r.forEach((r=>{if("attributes"===r.type&&"data-tooltip-id"===r.attributeName&&r.target.getAttribute("data-tooltip-id")===t&&o.push(r.target),"childList"===r.type){if(V){const t=[...r.removedNodes].filter((e=>1===e.nodeType));if(e)try{n.push(...t.filter((t=>t.matches(e)))),n.push(...t.flatMap((t=>[...t.querySelectorAll(e)])))}catch(e){}t.some((e=>{var t;return!!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,V))&&(ve(!1),_e(!1),Z(null),re.current&&clearTimeout(re.current),oe.current&&clearTimeout(oe.current),!0)}))}if(e)try{const t=[...r.addedNodes].filter((e=>1===e.nodeType));o.push(...t.filter((t=>t.matches(e)))),o.push(...t.flatMap((t=>[...t.querySelectorAll(e)])))}catch(e){}}})),(o.length||n.length)&&Se((e=>[...e.filter((e=>!n.includes(e))),...o]))}));return r.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"]}),()=>{r.disconnect()}}),[t,u,V]),(0,react.useEffect)((()=>{$e()}),[$e]),(0,react.useEffect)((()=>{if(!(null==U?void 0:U.current))return()=>null;const e=new ResizeObserver((()=>{$e()}));return e.observe(U.current),()=>{e.disconnect()}}),[K,null==U?void 0:U.current]),(0,react.useEffect)((()=>{var e;const t=document.querySelector(`[id='${a}']`),r=[...be,t];V&&r.includes(V)||Z(null!==(e=be[0])&&void 0!==e?e:t)}),[a,be,V]),(0,react.useEffect)((()=>()=>{re.current&&clearTimeout(re.current),oe.current&&clearTimeout(oe.current)}),[]),(0,react.useEffect)((()=>{let e=u;if(!e&&t&&(e=`[data-tooltip-id='${t}']`),e)try{const t=Array.from(document.querySelectorAll(e));Se(t)}catch(e){Se([])}}),[t,u]);const Ie=!A&&K&&ue&&Object.keys(ie).length>0;return pe?react.createElement(b,{id:t,role:"tooltip",className:classnames_default()("react-tooltip","core-styles-module_tooltip__3vRRp",H.tooltip,H[s],n,`react-tooltip__place-${ne}`,{"react-tooltip__show":Ie,"core-styles-module_show__Nt9eE":Ie,"core-styles-module_fixed__pcSol":"fixed"===h,"core-styles-module_clickable__ZuTTB":L}),style:{...M,...ie,opacity:void 0!==J&&Ie?J:void 0},ref:ee},K,react.createElement(b,{className:classnames_default()("react-tooltip-arrow","core-styles-module_arrow__cvMwQ",H.arrow,l,{"core-styles-module_noArrow__xock6":T}),style:{...se,background:Q?`linear-gradient(to right bottom, transparent 50%, ${Q} 50%)`:void 0},ref:te})):null},z=({content:t})=>react.createElement("span",{dangerouslySetInnerHTML:{__html:t}}),M=({id:t,anchorId:o,anchorSelect:n,content:l,html:s,render:a,className:u,classNameArrow:d,variant:p="dark",place:v="top",offset:m=10,wrapper:f="div",children:y=null,events:h=["hover"],openOnClick:w=!1,positionStrategy:b="absolute",middlewares:S,delayShow:E=0,delayHide:g=0,float:_=!1,hidden:A=!1,noArrow:T=!1,clickable:L=!1,closeOnEsc:R=!1,closeOnScroll:C=!1,closeOnResize:N=!1,style:k,position:x,isOpen:$,disableStyleInjection:I=!1,border:j,opacity:B,arrowColor:D,setIsOpen:H,afterShow:M,afterHide:W})=>{const[P,F]=(0,react.useState)(l),[K,U]=(0,react.useState)(s),[X,Y]=(0,react.useState)(v),[V,Z]=(0,react.useState)(p),[G,J]=(0,react.useState)(m),[Q,ee]=(0,react.useState)(E),[te,re]=(0,react.useState)(g),[oe,ne]=(0,react.useState)(_),[le,ie]=(0,react.useState)(A),[ce,se]=(0,react.useState)(f),[ae,ue]=(0,react.useState)(h),[de,pe]=(0,react.useState)(b),[ve,me]=(0,react.useState)(null),fe=(0,react.useRef)(I),{anchorRefs:ye,activeAnchor:he}=O(t),we=e=>null==e?void 0:e.getAttributeNames().reduce(((t,r)=>{var o;return r.startsWith("data-tooltip-")&&(t[r.replace(/^data-tooltip-/,"")]=null!==(o=null==e?void 0:e.getAttribute(r))&&void 0!==o?o:null),t}),{}),be=e=>{const t={place:e=>{var t;Y(null!==(t=e)&&void 0!==t?t:v)},content:e=>{F(null!=e?e:l)},html:e=>{U(null!=e?e:s)},variant:e=>{var t;Z(null!==(t=e)&&void 0!==t?t:p)},offset:e=>{J(null===e?m:Number(e))},wrapper:e=>{var t;se(null!==(t=e)&&void 0!==t?t:f)},events:e=>{const t=null==e?void 0:e.split(" ");ue(null!=t?t:h)},"position-strategy":e=>{var t;pe(null!==(t=e)&&void 0!==t?t:b)},"delay-show":e=>{ee(null===e?E:Number(e))},"delay-hide":e=>{re(null===e?g:Number(e))},float:e=>{ne(null===e?_:"true"===e)},hidden:e=>{ie(null===e?A:"true"===e)}};Object.values(t).forEach((e=>e(null))),Object.entries(e).forEach((([e,r])=>{var o;null===(o=t[e])||void 0===o||o.call(t,r)}))};(0,react.useEffect)((()=>{F(l)}),[l]),(0,react.useEffect)((()=>{U(s)}),[s]),(0,react.useEffect)((()=>{Y(v)}),[v]),(0,react.useEffect)((()=>{Z(p)}),[p]),(0,react.useEffect)((()=>{J(m)}),[m]),(0,react.useEffect)((()=>{ee(E)}),[E]),(0,react.useEffect)((()=>{re(g)}),[g]),(0,react.useEffect)((()=>{ne(_)}),[_]),(0,react.useEffect)((()=>{ie(A)}),[A]),(0,react.useEffect)((()=>{pe(b)}),[b]),(0,react.useEffect)((()=>{fe.current!==I&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")}),[I]),(0,react.useEffect)((()=>{"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:"core"===I,disableBase:I}}))}),[]),(0,react.useEffect)((()=>{var e;const r=new Set(ye);let l=n;if(!l&&t&&(l=`[data-tooltip-id='${t}']`),l)try{document.querySelectorAll(l).forEach((e=>{r.add({current:e})}))}catch(e){console.warn(`[react-tooltip] "${l}" is not a valid CSS selector`)}const i=document.querySelector(`[id='${o}']`);if(i&&r.add({current:i}),!r.size)return()=>null;const c=null!==(e=null!=ve?ve:i)&&void 0!==e?e:he.current,s=new MutationObserver((e=>{e.forEach((e=>{var t;if(!c||"attributes"!==e.type||!(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-")))return;const r=we(c);be(r)}))})),a={attributes:!0,childList:!1,subtree:!1};if(c){const e=we(c);be(e),s.observe(c,a)}return()=>{s.disconnect()}}),[ye,he,ve,o,n]),(0,react.useEffect)((()=>{(null==k?void 0:k.border)&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),j&&!CSS.supports("border",`${j}`)&&console.warn(`[react-tooltip] "${j}" is not a valid \`border\`.`),(null==k?void 0:k.opacity)&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),B&&!CSS.supports("opacity",`${B}`)&&console.warn(`[react-tooltip] "${B}" is not a valid \`opacity\`.`)}),[]);let Se=y;const Ee=(0,react.useRef)(null);if(a){const t=a({content:null!=P?P:null,activeAnchor:ve});Se=t?react.createElement("div",{ref:Ee,className:"react-tooltip-content-wrapper"},t):null}else P&&(Se=P);K&&(Se=react.createElement(z,{content:K}));const ge={id:t,anchorId:o,anchorSelect:n,className:u,classNameArrow:d,content:Se,contentWrapperRef:Ee,place:X,variant:V,offset:G,wrapper:ce,events:ae,openOnClick:w,positionStrategy:de,middlewares:S,delayShow:Q,delayHide:te,float:oe,hidden:le,noArrow:T,clickable:L,closeOnEsc:R,closeOnScroll:C,closeOnResize:N,style:k,position:x,isOpen:$,border:j,opacity:B,arrowColor:D,setIsOpen:H,afterShow:M,afterHide:W,activeAnchor:ve,setActiveAnchor:e=>me(e)};return react.createElement(q,{...ge})};"undefined"!=typeof window&&window.addEventListener("react-tooltip-inject-styles",(e=>{e.detail.disableCore||b({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9}.core-styles-module_tooltip__3vRRp{visibility:hidden;position:absolute;top:0;left:0;pointer-events:none;opacity:0;transition:opacity 0.3s ease-out;will-change:opacity,visibility}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{visibility:visible;opacity:var(--rt-opacity)}",type:"core"}),e.detail.disableBase||b({css:"\n.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}",type:"base"})}));var info=__webpack_require__("./src/icons/functional-icons/info.svg"),utils=__webpack_require__("./src/common/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Tooltip_Tooltip_Tooltip=function Tooltip(props){var uniqueAnchorId="A"+(0,utils.KE)();return(0,jsx_runtime.jsxs)("div",{id:uniqueAnchorId,className:"sds--tooltip-container ".concat(props.standalone?"":"sibbling"),children:[props.children?react.Children.map(props.children,(function(child){return child})):(0,jsx_runtime.jsx)(info.r,{}),(0,jsx_runtime.jsx)(M,{anchorSelect:"#"+uniqueAnchorId,place:props.place,clickable:props.clickable||!1,disableStyleInjection:"core",html:(0,utils.Nw)(props.tip)})]})};Tooltip_Tooltip_Tooltip.displayName="Tooltip";const components_Tooltip_Tooltip=Tooltip_Tooltip_Tooltip;try{Tooltip_Tooltip_Tooltip.displayName="Tooltip",Tooltip_Tooltip_Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{tip:{defaultValue:null,description:"",name:"tip",required:!0,type:{name:"string"}},clickable:{defaultValue:null,description:"",name:"clickable",required:!1,type:{name:"boolean"}},standalone:{defaultValue:null,description:"",name:"standalone",required:!1,type:{name:"boolean"}},place:{defaultValue:null,description:"",name:"place",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left"'},{value:'"left-start"'},{value:'"left-end"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip_Tooltip_Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/functional-icons/info.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>SvgInfo});var _circle,_g,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgInfo=function SvgInfo(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({className:"info-svg",xmlns:"http://www.w3.org/2000/svg",width:22.5,height:22.5,viewBox:"0 0 22.5 22.5"},props),_circle||(_circle=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{className:"bg",cx:11.2,cy:11.2,r:11.2,fill:"none"})),_g||(_g=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{fill:"none"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M21.8 11.2c0 5.8-4.7 10.5-10.5 10.5C5.5 21.8.8 17 .8 11.2S5.5.7 11.3.7c5.7.1 10.5 4.8 10.5 10.5z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M21.8 11.2c0 5.8-4.7 10.5-10.5 10.5C5.5 21.8.8 17 .8 11.2S5.5.7 11.3.7c5.7.1 10.5 4.8 10.5 10.5z",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M13.5 15.8h-.8c-.4 0-.8-.2-1.1-.4-.3-.3-.4-.7-.4-1.1v-3.8c0-.2-.1-.4-.2-.5-.1-.1-.3-.2-.5-.2h-.7M10.9 6c-.1 0-.1 0-.2.1-.1 0-.1.1-.1.2v.2c0 .1.1.1.1.2.1.1.1.1.2.1h.2c.1 0 .1-.1.2-.1 0-.1.1-.1.1-.2s0-.2-.1-.3c-.2-.2-.3-.2-.4-.2z",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))))};__webpack_require__.p},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Tooltip/Tooltip.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sds--tooltip-container{display:inline-block}.sds--tooltip-container.sibbling{margin-left:8px}.sds--tooltip-container svg.info-svg{width:14px;height:auto}.sds--tooltip-container .react-tooltip{text-align:center;background-color:var(--sds--color--gray--500);opacity:1;border-radius:6px;max-width:280px;word-break:break-word;font-size:.875rem;line-height:1.2857142857;font-weight:normal;z-index:9999}","",{version:3,sources:["webpack://./src/components/Tooltip/Tooltip.scss"],names:[],mappings:"AAAA,wBACE,oBAAA,CAEA,iCACE,eAAA,CAIF,qCACE,UAAA,CACA,WAAA,CAIF,uCACE,iBAAA,CACA,6CAAA,CACA,SAAA,CACA,iBAAA,CACA,eAAA,CACA,qBAAA,CACA,iBAAA,CACA,wBAAA,CACA,kBAAA,CACA,YAAA",sourcesContent:[".sds--tooltip-container {\n  display: inline-block;\n\n  &.sibbling {\n    margin-left: 8px;\n  }\n\n\n  svg.info-svg {\n    width: 14px;\n    height: auto;\n\n  }\n\n  .react-tooltip {\n    text-align: center;\n    background-color: var(--sds--color--gray--500);\n    opacity: 1;\n    border-radius: 6px;\n    max-width: 280px;\n    word-break: break-word;\n    font-size: .875rem;\n    line-height: calc(18 / 14);\n    font-weight: normal;\n    z-index: 9999;\n  }\n\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);