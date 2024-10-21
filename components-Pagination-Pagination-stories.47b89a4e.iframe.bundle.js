"use strict";(self.webpackChunk_surfnet_sds=self.webpackChunk_surfnet_sds||[]).push([[234],{"./src/components/Pagination/Pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithChildren:()=>WithChildren,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Default$parameters,_Default$parameters2,_WithChildren$paramet,_WithChildren$paramet2,_Pagination__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Pagination/Pagination.tsx"),_common_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"ReactComponentLibrary/Pagination",component:_Pagination__WEBPACK_IMPORTED_MODULE_1__.Z};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Pagination__WEBPACK_IMPORTED_MODULE_1__.Z,_objectSpread({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={currentPage:6,onChange:function onChange(e){return(0,_common_utils__WEBPACK_IMPORTED_MODULE_2__.p7)(e)},total:120,pageCount:10};var WithChildren=Template.bind({});WithChildren.args={currentPage:6,onChange:function onChange(e){return(0,_common_utils__WEBPACK_IMPORTED_MODULE_2__.p7)(e)},total:120,pageCount:10,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Showing 60 to 69 from total of 120"})},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Pagination {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),WithChildren.parameters=_objectSpread(_objectSpread({},WithChildren.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithChildren$paramet=WithChildren.parameters)||void 0===_WithChildren$paramet?void 0:_WithChildren$paramet.docs),{},{source:_objectSpread({originalSource:"args => <Pagination {...args} />"},null===(_WithChildren$paramet2=WithChildren.parameters)||void 0===_WithChildren$paramet2||null===(_WithChildren$paramet2=_WithChildren$paramet2.docs)||void 0===_WithChildren$paramet2?void 0:_WithChildren$paramet2.source)})});var __namedExportsOrder=["Default","WithChildren"]},"./src/common/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cf:()=>valueForSort,KE:()=>pseudoGuid,N5:()=>sortObjects,Nw:()=>sanitize,p7:()=>stopEvent,xb:()=>isEmpty});var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/isomorphic-dompurify/browser.js"),isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function stopEvent(e){return null==e||(e.preventDefault(),e.stopPropagation(),!1)}function isEmpty(obj){return null==obj||(Array.isArray(obj)?0===obj.length:"string"==typeof obj?0===obj.trim().length:obj&&obj.getTime&&"function"==typeof obj.getTime?obj.getTime()!=obj.getTime():"object"===_typeof(obj)&&0===Object.keys(obj).length)}function sanitize(text){return isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default().sanitize(text,{ADD_ATTR:["target"]})}function pseudoGuid(){return crypto.randomUUID&&"function"==typeof crypto.randomUUID&&crypto.randomUUID()||Math.round((new Date).getTime()*Math.random()*1e3).toString()}function sortObjects(objects,attribute,reverse){return _toConsumableArray(objects).sort((function(a,b){var val1=valueForSort(attribute,a),val2=valueForSort(attribute,b);if("number"==typeof val1&&"number"==typeof val2)return(val1-val2)*(reverse?-1:1);var aS=val1.toString(),bS=val2.toString();return 0===aS.length?reverse?-1:1:0===bS.length?reverse?1:-1:aS.localeCompare(bS)*(reverse?-1:1)}))}function valueForSort(attribute,obj){if(attribute.endsWith("_date"))return obj[attribute]||Number.MAX_SAFE_INTEGER;var val=obj[attribute];return val.getTime&&"function"==typeof val.getTime?val.getTime():isEmpty(val)?attribute.replace(/__/g,".").split(".").reduce((function(acc,e){return isEmpty(acc)?"":acc[e]}),obj)||"":val}},"./src/components/Pagination/Pagination.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Pagination_Pagination});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Pagination=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Pagination/Pagination.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Pagination.Z,options);Pagination.Z&&Pagination.Z.locals&&Pagination.Z.locals;var _path;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgArrowLeft2=function SvgArrowLeft2(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:12.4,height:24,viewBox:"0 0 12.4 24"},props),_path||(_path=react.createElement("path",{fill:"none",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",d:"M11.7 23.2 1 12.5c-.1-.1-.1-.2-.2-.2 0-.1-.1-.2-.1-.3s0-.2.1-.3c0-.1.1-.2.2-.2L11.7.8"})))};__webpack_require__.p;var arrow_right_2=__webpack_require__("./src/icons/functional-icons/arrow-right-2.svg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Pagination_Pagination_Pagination=function Pagination(props){var nbrPages=Math.ceil(props.total/props.pageCount),rangeWithDots=function pagination(page,totalResults){for(var l,left=page-2,right=page+2+1,range=[],rangeWithDots=[],i=1;i<=totalResults;i++)(1===i||i===totalResults||i>=left&&i<right)&&range.push(i);for(var _i=0,_range=range;_i<_range.length;_i++){var _i2=_range[_i];l&&(_i2-l==2?rangeWithDots.push(l+1):_i2-l!=1&&rangeWithDots.push("...")),rangeWithDots.push(_i2),l=_i2}return rangeWithDots}(props.currentPage,nbrPages);if(props.total<=props.pageCount)return null;return(0,jsx_runtime.jsxs)("div",{className:"sds--pagination",children:[(0,jsx_runtime.jsx)("nav",{className:"sds--pagination--nav sds--text--body--large","aria-label":"pagination",children:(0,jsx_runtime.jsxs)("ul",{children:[nbrPages>1&&1!==props.currentPage&&(0,jsx_runtime.jsx)("li",{onClick:function onClick(){return props.onChange(props.currentPage-1)},children:(0,jsx_runtime.jsx)("a",{href:"#",children:(0,jsx_runtime.jsx)(SvgArrowLeft2,{})})}),rangeWithDots.map((function(nbr,index){return function ranges(nbr,index){var key="".concat(nbr,"_").concat(index,"}}");return"string"==typeof nbr||nbr instanceof String?(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("span",{className:"link-placeholder",children:"..."})},key):nbr===props.currentPage?(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{href:"#",className:"is-active","aria-current":"page",children:nbr})},key):(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)("a",{href:"#",onClick:function onClick(){return props.onChange(nbr)},"aria-current":"page",children:nbr})},key)}(nbr,index)})),nbrPages>1&&props.currentPage!==nbrPages&&(0,jsx_runtime.jsx)("li",{onClick:function onClick(){return props.onChange(props.currentPage+1)},children:(0,jsx_runtime.jsx)("a",{href:"#",children:(0,jsx_runtime.jsx)(arrow_right_2.r,{})})})]})}),props.children&&props.children]})};Pagination_Pagination_Pagination.displayName="Pagination";const components_Pagination_Pagination=Pagination_Pagination_Pagination;try{Pagination_Pagination_Pagination.displayName="Pagination",Pagination_Pagination_Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"",name:"currentPage",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"Function"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},pageCount:{defaultValue:null,description:"",name:"pageCount",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:Pagination_Pagination_Pagination.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/functional-icons/arrow-right-2.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgArrowRight2});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgArrowRight2=function SvgArrowRight2(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:12.4,height:24,viewBox:"0 0 12.4 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"none",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",d:"m.8.8 10.7 10.7c.1.1.1.2.2.2 0 .1.1.2.1.3s0 .2-.1.3c0 .1-.1.2-.2.2L.8 23.2"})))};__webpack_require__.p},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Pagination/Pagination.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sds--pagination--nav svg{width:.405em;height:.8333333333em}","",{version:3,sources:["webpack://./src/components/Pagination/Pagination.scss"],names:[],mappings:"AACE,0BACE,YAAA,CACA,oBAAA",sourcesContent:[".sds--pagination--nav {\n  svg {\n    width: calc(7.29em / 18);\n    height: calc(15em / 18);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);