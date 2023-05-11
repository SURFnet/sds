"use strict";(self.webpackChunk_surfnet_sds=self.webpackChunk_surfnet_sds||[]).push([[937],{"./src/components/ToasterContainer/ToasterContainer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ToasterContainerDefault:()=>ToasterContainerDefault,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ToasterContainer_stories});__webpack_require__("./node_modules/react/index.js");var Toaster=__webpack_require__("./src/components/Toaster/Toaster.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ToasterContainer=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ToasterContainer/ToasterContainer.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ToasterContainer.Z,options);ToasterContainer.Z&&ToasterContainer.Z.locals&&ToasterContainer.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ToasterContainer_ToasterContainer_ToasterContainer=function ToasterContainer(props){return(0,jsx_runtime.jsx)("div",{className:"sds--toaster-container",children:props.children})};ToasterContainer_ToasterContainer_ToasterContainer.displayName="ToasterContainer";const components_ToasterContainer_ToasterContainer=ToasterContainer_ToasterContainer_ToasterContainer;try{ToasterContainer_ToasterContainer_ToasterContainer.displayName="ToasterContainer",ToasterContainer_ToasterContainer_ToasterContainer.__docgenInfo={description:"",displayName:"ToasterContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ToasterContainer/ToasterContainer.tsx#ToasterContainer"]={docgenInfo:ToasterContainer_ToasterContainer_ToasterContainer.__docgenInfo,name:"ToasterContainer",path:"src/components/ToasterContainer/ToasterContainer.tsx#ToasterContainer"})}catch(__react_docgen_typescript_loader_error){}var _ToasterContainerDefa,_ToasterContainerDefa2,_ToasterContainerDefa3,ToasterType=__webpack_require__("./src/components/Toaster/ToasterType.tsx");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const ToasterContainer_stories={title:"ReactComponentLibrary/ToasterContainer",component:components_ToasterContainer_ToasterContainer};var Template=function Template(args){return(0,jsx_runtime.jsx)(components_ToasterContainer_ToasterContainer,_objectSpread({},args))};Template.displayName="Template";var ToasterContainerDefault=Template.bind({});ToasterContainerDefault.args={children:(0,jsx_runtime.jsx)(Toaster.Z,{message:"Hello world!",toasterType:ToasterType.Z.Info})},ToasterContainerDefault.parameters=_objectSpread(_objectSpread({},ToasterContainerDefault.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ToasterContainerDefa=ToasterContainerDefault.parameters)||void 0===_ToasterContainerDefa?void 0:_ToasterContainerDefa.docs),{},{source:_objectSpread({originalSource:"args => <ToasterContainer {...args} />"},null===(_ToasterContainerDefa2=ToasterContainerDefault.parameters)||void 0===_ToasterContainerDefa2||null===(_ToasterContainerDefa3=_ToasterContainerDefa2.docs)||void 0===_ToasterContainerDefa3?void 0:_ToasterContainerDefa3.source)})});var __namedExportsOrder=["ToasterContainerDefault"]},"./src/common/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nw:()=>sanitize,p7:()=>stopEvent,xb:()=>isEmpty});var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/isomorphic-dompurify/browser.js"),isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__);function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function stopEvent(e){return null==e||(e.preventDefault(),e.stopPropagation(),!1)}function isEmpty(obj){return null==obj||(Array.isArray(obj)?0===obj.length:"string"==typeof obj?0===obj.trim().length:"object"===_typeof(obj)&&0===Object.keys(obj).length)}function sanitize(text){return isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default().sanitize(text,{ADD_ATTR:["target"]})}},"./src/components/Toaster/Toaster.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Toaster_Toaster});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Toaster=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Toaster/Toaster.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Toaster.Z,options);Toaster.Z&&Toaster.Z.locals&&Toaster.Z.locals;var info=__webpack_require__("./src/icons/functional-icons/info.svg"),success=__webpack_require__("./src/icons/functional-icons/success.svg"),alert_triangle=__webpack_require__("./src/icons/functional-icons/alert-triangle.svg"),ToasterType=__webpack_require__("./src/components/Toaster/ToasterType.tsx"),utils=__webpack_require__("./src/common/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Toaster_Toaster_Toaster=function Toaster(props){var type="".concat(props.toasterType.toLowerCase()),large=props.large?"sds--toaster--full-width":"",action=props.action?"sds--toaster--has-action":"",className="sds--toaster ".concat(type," ").concat(action," ").concat(large);return(0,jsx_runtime.jsxs)("div",{className,children:[(0,jsx_runtime.jsxs)("div",{className:"sds--toaster--visual",children:[[ToasterType.Z.Error,ToasterType.Z.Warning].includes(props.toasterType)&&(0,jsx_runtime.jsx)(alert_triangle.r,{}),[ToasterType.Z.Default,ToasterType.Z.Info].includes(props.toasterType)&&(0,jsx_runtime.jsx)(info.r,{}),[ToasterType.Z.Success].includes(props.toasterType)&&(0,jsx_runtime.jsx)(success.r,{})]}),(0,jsx_runtime.jsxs)("div",{className:"sds--toaster--textual",children:[(0,jsx_runtime.jsx)("p",{dangerouslySetInnerHTML:{__html:(0,utils.Nw)(props.message)}}),props.action&&(0,jsx_runtime.jsx)("button",{type:"button",onClick:props.action,className:"sds--btn sds--btn--ghost--dark sds--btn--small",children:props.actionLabel})]})]})};Toaster_Toaster_Toaster.displayName="Toaster";const components_Toaster_Toaster=Toaster_Toaster_Toaster;try{Toaster_Toaster_Toaster.displayName="Toaster",Toaster_Toaster_Toaster.__docgenInfo={description:"",displayName:"Toaster",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},toasterType:{defaultValue:null,description:"",name:"toasterType",required:!0,type:{name:"enum",value:[{value:'"sds--toaster--status-default"'},{value:'"sds--toaster--status-success"'},{value:'"sds--toaster--status-warning"'},{value:'"sds--toaster--status-error"'},{value:'"sds--toaster--status-info"'}]}},action:{defaultValue:null,description:"",name:"action",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!1,type:{name:"string"}},large:{defaultValue:null,description:"",name:"large",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toaster/Toaster.tsx#Toaster"]={docgenInfo:Toaster_Toaster_Toaster.__docgenInfo,name:"Toaster",path:"src/components/Toaster/Toaster.tsx#Toaster"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Toaster/ToasterType.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function(ToasterType){return ToasterType.Default="sds--toaster--status-default",ToasterType.Success="sds--toaster--status-success",ToasterType.Warning="sds--toaster--status-warning",ToasterType.Error="sds--toaster--status-error",ToasterType.Info="sds--toaster--status-info",ToasterType}({})},"./src/icons/functional-icons/alert-triangle.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgAlertTriangle});var _path,_path2,_path3,_path4,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgAlertTriangle=function SvgAlertTriangle(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:22.6,height:22.6,viewBox:"0 0 22.6 22.6"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{className:"bg",d:"M12.8 1.8c-.1-.3-.4-.6-.6-.7-.3-.2-.6-.3-.9-.3-.4 0-.7.1-.9.3s-.5.3-.7.6L.9 19.9c-.1.2-.2.5-.2.7 0 .3.1.5.2.7.1.2.3.4.6.5.2.1.5.2.7.2h18.3c.3 0 .5-.1.7-.2.2-.1.4-.3.6-.5.1-.2.2-.5.2-.7 0-.3 0-.5-.2-.7l-9-18.1z",fill:"none"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12.8 1.8c-.1-.3-.4-.6-.6-.7-.3-.2-.6-.3-.9-.3-.4 0-.7.1-.9.3s-.5.3-.7.6L.9 19.9c-.1.2-.2.5-.2.7 0 .3.1.5.2.7.1.2.3.4.6.5.2.1.5.2.7.2h18.3c.3 0 .5-.1.7-.2.2-.1.4-.3.6-.5.1-.2.2-.5.2-.7 0-.3 0-.5-.2-.7l-9-18.1z",fill:"none",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11.3 17.7c-.1 0-.1 0-.2.1-.1 0-.1.1-.1.2v.2c0 .1.1.1.1.2.1.1.1.1.2.1h.2c.1 0 .1-.1.2-.1 0-.1.1-.1.1-.2s0-.2-.1-.3c-.2-.2-.3-.2-.4-.2z",fill:"none",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11.3 14.9V7.8",fill:"none",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeMiterlimit:10})))};__webpack_require__.p},"./src/icons/functional-icons/info.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgInfo});var _circle,_g,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgInfo=function SvgInfo(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({className:"info-svg",xmlns:"http://www.w3.org/2000/svg",width:22.5,height:22.5,viewBox:"0 0 22.5 22.5"},props),_circle||(_circle=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{className:"bg",cx:11.2,cy:11.2,r:11.2,fill:"none"})),_g||(_g=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{fill:"none"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M21.8 11.2c0 5.8-4.7 10.5-10.5 10.5C5.5 21.8.8 17 .8 11.2S5.5.7 11.3.7c5.7.1 10.5 4.8 10.5 10.5z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M21.8 11.2c0 5.8-4.7 10.5-10.5 10.5C5.5 21.8.8 17 .8 11.2S5.5.7 11.3.7c5.7.1 10.5 4.8 10.5 10.5z",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M13.5 15.8h-.8c-.4 0-.8-.2-1.1-.4-.3-.3-.4-.7-.4-1.1v-3.8c0-.2-.1-.4-.2-.5-.1-.1-.3-.2-.5-.2h-.7M10.9 6c-.1 0-.1 0-.2.1-.1 0-.1.1-.1.2v.2c0 .1.1.1.1.2.1.1.1.1.2.1h.2c.1 0 .1-.1.2-.1 0-.1.1-.1.1-.2s0-.2-.1-.3c-.2-.2-.3-.2-.4-.2z",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))))};__webpack_require__.p},"./src/icons/functional-icons/success.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgSuccess});var _circle,_g,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgSuccess=function SvgSuccess(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:22.5,height:22.5,viewBox:"0 0 22.5 22.5"},props),_circle||(_circle=react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{className:"bg",cx:11.2,cy:11.2,r:11.2,fill:"none"})),_g||(_g=react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{fill:"none",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11.2 21.8c5.8 0 10.5-4.7 10.5-10.6C21.7 5.4 17 .7 11.2.7S.7 5.5.7 11.3s4.7 10.5 10.5 10.5z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"m5.6 12.4 2.2 3.3c.2.1.4.3.4.3.1.1.3.1.5.1s.3 0 .5-.1.3-.2.4-.3l7.3-9.3"}))))};__webpack_require__.p},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Toaster/Toaster.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sds--toaster.sds--toaster--full-width{max-width:initial}.sds--toaster .sds--toaster--visual svg{width:1.40625em;height:1.40625em}","",{version:3,sources:["webpack://./src/components/Toaster/Toaster.scss"],names:[],mappings:"AAEE,uCACE,iBAAA,CAGF,wCACE,eAAA,CACA,gBAAA",sourcesContent:[".sds--toaster {\n\n  &.sds--toaster--full-width {\n    max-width: initial;\n  }\n\n  .sds--toaster--visual svg {\n    width: calc(22.5em / 16);\n    height: calc(22.5em / 16);\n  }\n\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ToasterContainer/ToasterContainer.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sds--toaster-container{bottom:15px;right:15px;position:fixed;z-index:9;padding:10px 16px;border-radius:6px;max-width:400px;opacity:.97;display:flex}.sds--toaster-container.hide{opacity:0}","",{version:3,sources:["webpack://./src/components/ToasterContainer/ToasterContainer.scss"],names:[],mappings:"AAAA,wBACE,WAAA,CACA,UAAA,CACA,cAAA,CACA,SAAA,CACA,iBAAA,CACA,iBAAA,CACA,eAAA,CACA,WAAA,CACA,YAAA,CAEA,6BACE,SAAA",sourcesContent:[".sds--toaster-container {\n  bottom: 15px;\n  right: 15px;\n  position: fixed;\n  z-index: 9;\n  padding: 10px 16px;\n  border-radius: 6px;\n  max-width: 400px;\n  opacity: .97;\n  display: flex;\n\n  &.hide {\n    opacity: 0;\n  }\n\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);