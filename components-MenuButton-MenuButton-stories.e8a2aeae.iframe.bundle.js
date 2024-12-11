"use strict";(self.webpackChunk_surfnet_sds=self.webpackChunk_surfnet_sds||[]).push([[8562],{"./src/components/MenuButton/MenuButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MenuButtonActiveTemplate:()=>MenuButtonActiveTemplate,MenuButtonTemplate:()=>MenuButtonTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _MenuButtonTemplate$p,_MenuButtonTemplate$p2,_MenuButtonActiveTemp,_MenuButtonActiveTemp2,_MenuButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/MenuButton/MenuButton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"ReactComponentLibrary/MenuButton",component:_MenuButton__WEBPACK_IMPORTED_MODULE_1__.Z};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_MenuButton__WEBPACK_IMPORTED_MODULE_1__.Z,_objectSpread({},args))};Template.displayName="Template";var MenuButtonTemplate=Template.bind({});MenuButtonTemplate.args={txt:"Click me",isOpen:!1,toggle:function toggle(){return!0}};var MenuButtonActiveTemplate=Template.bind({});MenuButtonActiveTemplate.args={txt:"Click me",isOpen:!0,toggle:function toggle(){return!0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"Mijn contacthistorie"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"Mijn gegevens"})})]})})},MenuButtonTemplate.parameters=_objectSpread(_objectSpread({},MenuButtonTemplate.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MenuButtonTemplate$p=MenuButtonTemplate.parameters)||void 0===_MenuButtonTemplate$p?void 0:_MenuButtonTemplate$p.docs),{},{source:_objectSpread({originalSource:"args => <MenuButton {...args} />"},null===(_MenuButtonTemplate$p2=MenuButtonTemplate.parameters)||void 0===_MenuButtonTemplate$p2||null===(_MenuButtonTemplate$p2=_MenuButtonTemplate$p2.docs)||void 0===_MenuButtonTemplate$p2?void 0:_MenuButtonTemplate$p2.source)})}),MenuButtonActiveTemplate.parameters=_objectSpread(_objectSpread({},MenuButtonActiveTemplate.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MenuButtonActiveTemp=MenuButtonActiveTemplate.parameters)||void 0===_MenuButtonActiveTemp?void 0:_MenuButtonActiveTemp.docs),{},{source:_objectSpread({originalSource:"args => <MenuButton {...args} />"},null===(_MenuButtonActiveTemp2=MenuButtonActiveTemplate.parameters)||void 0===_MenuButtonActiveTemp2||null===(_MenuButtonActiveTemp2=_MenuButtonActiveTemp2.docs)||void 0===_MenuButtonActiveTemp2?void 0:_MenuButtonActiveTemp2.source)})});var __namedExportsOrder=["MenuButtonTemplate","MenuButtonActiveTemplate"]},"./src/common/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cf:()=>valueForSort,KE:()=>pseudoGuid,N5:()=>sortObjects,Nw:()=>sanitize,p7:()=>stopEvent,xb:()=>isEmpty});var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/isomorphic-dompurify/browser.js"),isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__);function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function stopEvent(e){return null==e||(e.preventDefault(),e.stopPropagation(),!1)}function isEmpty(obj){return null==obj||(Array.isArray(obj)?0===obj.length:"string"==typeof obj?0===obj.trim().length:obj&&obj.getTime&&"function"==typeof obj.getTime?obj.getTime()!=obj.getTime():"object"===_typeof(obj)&&0===Object.keys(obj).length)}function sanitize(text){return isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default().sanitize(text,{ADD_ATTR:["target"]})}function pseudoGuid(){return crypto.randomUUID&&"function"==typeof crypto.randomUUID&&crypto.randomUUID()||Math.round((new Date).getTime()*Math.random()*1e3).toString()}function sortObjects(objects,attribute,reverse){return _toConsumableArray(objects).sort((function(a,b){var val1=valueForSort(attribute,a),val2=valueForSort(attribute,b);if("number"==typeof val1&&"number"==typeof val2)return(val1-val2)*(reverse?-1:1);var aS=val1.toString(),bS=val2.toString();return 0===aS.length?reverse?-1:1:0===bS.length?reverse?1:-1:aS.localeCompare(bS)*(reverse?-1:1)}))}function valueForSort(attribute,obj){if(attribute.endsWith("_date"))return obj[attribute]||Number.MAX_SAFE_INTEGER;var val=obj[attribute];return val.getTime&&"function"==typeof val.getTime?val.getTime():isEmpty(val)?attribute.replace(/__/g,".").split(".").reduce((function(acc,e){return isEmpty(acc)?"":acc[e]}),obj)||"":val}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Button_Button,P:()=>defaultButtonProps});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button.Z,options);Button.Z&&Button.Z.locals&&Button.Z.locals;var _path;function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgBin=function SvgBin(props){return react.createElement("svg",_extends({className:"bin-svg",xmlns:"http://www.w3.org/2000/svg",width:22.5,height:22.5,viewBox:"0 0 22.5 22.5"},props),_path||(_path=react.createElement("path",{d:"M.8 3.8h21m-8.3-3H9c-.4 0-.8.2-1.1.4-.2.3-.4.7-.4 1v1.5H15V2.2c0-.4-.2-.8-.4-1.1-.3-.2-.7-.3-1.1-.3zM9 16.5V9m4.5 7.5V9m4.6 11.4c0 .4-.2.7-.5 1s-.6.4-1 .4H5.9c-.4 0-.7-.1-1-.4s-.4-.6-.5-1L3 3.8h16.5l-1.4 16.6z",fill:"none",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))};__webpack_require__.p;var utils=__webpack_require__("./src/common/utils.ts"),ButtonType=__webpack_require__("./src/components/Button/ButtonType.tsx"),ButtonSize=__webpack_require__("./src/components/Button/ButtonSize.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),defaultButtonProps={onClick:function onClick(e){return(0,utils.p7)(e)},txt:"",disabled:!1,type:ButtonType.Z.Primary,icon:null,size:ButtonSize.Z.Default},Button_Button_Button=function Button(props){var type="".concat((props.type||ButtonType.Z.Primary).toLowerCase()," ")+"".concat(props.type&&props.type===ButtonType.Z.DeleteSecondary?ButtonType.Z.Secondary.toLowerCase():""),size="".concat((props.size||ButtonSize.Z.Default).toLowerCase()),chevron=props.children?"sds--btn-chevron":"",active=props.active||!1,className="sds--btn ".concat(type," ").concat(size," ").concat(chevron," ").concat(active?"active":"");return(0,jsx_runtime.jsxs)("button",{type:"button",className,onClick:function onClickInternal(e){(0,utils.p7)(e),!props.disabled&&props.onClick&&props.onClick(e)},disabled:props.disabled,children:[props.children,props.txt&&(0,jsx_runtime.jsx)("span",{className:"textual",dangerouslySetInnerHTML:{__html:(0,utils.Nw)(props.txt||"")}}),props.type===ButtonType.Z.Delete?(0,jsx_runtime.jsx)(SvgBin,{}):props.icon]})};Button_Button_Button.displayName="Button";const components_Button_Button=Button_Button_Button;try{Button_Button_Button.displayName="Button",Button_Button_Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"Function"}},txt:{defaultValue:null,description:"",name:"txt",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"sds--btn--primary"'},{value:'"sds--btn--secondary"'},{value:'"sds--btn--tertiary"'},{value:'"sds--btn--ghost--dark"'},{value:'"sds--btn--ghost--light"'},{value:'"sds--btn--delete"'},{value:'"sds--btn--delete--secondary"'},{value:'"sds--btn--chevron"'},{value:'"sds--btn sds--btn-destructive--primary"'},{value:'"sds--btn sds--btn-destructive--secondary"'},{value:'"sds--btn sds--btn-destructive--tertiary"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"any"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"sds--btn--small"'},{value:'"sds--btn--full"'}]}},centralize:{defaultValue:null,description:"",name:"centralize",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button_Button_Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Button/ButtonSize.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function(ButtonSize){return ButtonSize.Default="",ButtonSize.Small="sds--btn--small",ButtonSize.Full="sds--btn--full",ButtonSize}({})},"./src/components/Button/ButtonType.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function(ButtonType){return ButtonType.Primary="sds--btn--primary",ButtonType.Secondary="sds--btn--secondary",ButtonType.Tertiary="sds--btn--tertiary",ButtonType.GhostDark="sds--btn--ghost--dark",ButtonType.GhostLight="sds--btn--ghost--light",ButtonType.Delete="sds--btn--delete",ButtonType.DeleteSecondary="sds--btn--delete--secondary",ButtonType.Chevron="sds--btn--chevron",ButtonType.DestructivePrimary="sds--btn sds--btn-destructive--primary",ButtonType.DestructiveSecondary="sds--btn sds--btn-destructive--secondary",ButtonType.DestructiveTertiary="sds--btn sds--btn-destructive--tertiary",ButtonType}({})},"./src/components/MenuButton/MenuButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_MenuButton_MenuButton});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),MenuButton=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MenuButton/MenuButton.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(MenuButton.Z,options);MenuButton.Z&&MenuButton.Z.locals&&MenuButton.Z.locals;var arrow_down_2=__webpack_require__("./src/icons/functional-icons/arrow-down-2.svg"),Button=__webpack_require__("./src/components/Button/Button.tsx"),ButtonType=__webpack_require__("./src/components/Button/ButtonType.tsx"),ButtonSize=__webpack_require__("./src/components/Button/ButtonSize.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),MenuButton_MenuButton_MenuButton=function MenuButton(props){return(0,jsx_runtime.jsxs)("nav",{className:"sds--menu-button ".concat(props.isOpen?"is-open":""),children:[(0,jsx_runtime.jsx)(Button.Z,{onClick:props.toggle,txt:props.txt,type:props.buttonType||ButtonType.Z.Primary,size:props.buttonSize||ButtonSize.Z.Default,children:(0,jsx_runtime.jsx)(arrow_down_2.r,{})}),(0,jsx_runtime.jsx)("div",{className:"sds--user-info--dropdown",children:props.children&&props.children})]})};MenuButton_MenuButton_MenuButton.displayName="MenuButton";const components_MenuButton_MenuButton=MenuButton_MenuButton_MenuButton;try{MenuButton_MenuButton_MenuButton.displayName="MenuButton",MenuButton_MenuButton_MenuButton.__docgenInfo={description:"",displayName:"MenuButton",props:{txt:{defaultValue:null,description:"",name:"txt",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},toggle:{defaultValue:null,description:"",name:"toggle",required:!0,type:{name:"any"}},buttonType:{defaultValue:null,description:"",name:"buttonType",required:!1,type:{name:"enum",value:[{value:'"sds--btn--primary"'},{value:'"sds--btn--secondary"'},{value:'"sds--btn--tertiary"'},{value:'"sds--btn--ghost--dark"'},{value:'"sds--btn--ghost--light"'},{value:'"sds--btn--delete"'},{value:'"sds--btn--delete--secondary"'},{value:'"sds--btn--chevron"'},{value:'"sds--btn sds--btn-destructive--primary"'},{value:'"sds--btn sds--btn-destructive--secondary"'},{value:'"sds--btn sds--btn-destructive--tertiary"'}]}},buttonSize:{defaultValue:null,description:"",name:"buttonSize",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"sds--btn--small"'},{value:'"sds--btn--full"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MenuButton/MenuButton.tsx#MenuButton"]={docgenInfo:MenuButton_MenuButton_MenuButton.__docgenInfo,name:"MenuButton",path:"src/components/MenuButton/MenuButton.tsx#MenuButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/functional-icons/arrow-down-2.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgArrowDown2});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgArrowDown2=function SvgArrowDown2(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:12.4,viewBox:"0 0 24 12.4"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"none",stroke:"#000",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",d:"M23.2.8 12.5 11.5c-.1.1-.2.1-.2.2-.1 0-.2.1-.3.1s-.2 0-.3-.1c-.1 0-.2-.1-.2-.2L.8.8"})))};__webpack_require__.p},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Button/Button.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sds--btn{cursor:pointer}.sds--btn.active{cursor:initial}.sds--btn:disabled{cursor:default}.sds--btn.sds--btn--delete{padding:0}.sds--btn.sds--btn--delete svg path{stroke-width:1.5}.sds--btn.sds--btn--delete:hover{color:var(--sds--color--red--400)}.sds--btn.sds--btn--delete:disabled{color:var(--sds--color--gray--300)}.sds--btn.sds--btn--delete:disabled:hover{color:var(--sds--color--gray--300)}.sds--btn.sds--btn--delete--secondary{color:var(--sds--palette--main-color--500)}.sds--btn.sds--btn-chevron svg{width:.703125em;height:.341875em}","",{version:3,sources:["webpack://./src/components/Button/Button.scss"],names:[],mappings:"AAAA,UACI,cAAA,CAEA,iBACI,cAAA,CAGJ,mBACI,cAAA,CAGJ,2BACI,SAAA,CAEA,oCACI,gBAAA,CAGJ,iCACI,iCAAA,CAGJ,oCACI,kCAAA,CAEA,0CACI,kCAAA,CAKZ,sCACI,0CAAA,CAIA,+BACI,eAAA,CACA,gBAAA",sourcesContent:[".sds--btn {\n    cursor: pointer;\n\n    &.active {\n        cursor: initial;\n    }\n\n    &:disabled {\n        cursor: default;\n    }\n\n    &.sds--btn--delete {\n        padding: 0;\n\n        svg path {\n            stroke-width: 1.5;\n        }\n\n        &:hover {\n            color: var(--sds--color--red--400);\n        }\n\n        &:disabled {\n            color: var(--sds--color--gray--300);\n\n            &:hover {\n                color: var(--sds--color--gray--300);\n            }\n        }\n    }\n\n    &.sds--btn--delete--secondary {\n        color: var(--sds--palette--main-color--500);\n    }\n\n    &.sds--btn-chevron {\n        svg {\n            width: calc(11.25em / 16);\n            height: calc(5.47em / 16)\n        }\n\n    }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/MenuButton/MenuButton.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sds--menu-button{position:relative}.sds--menu-button:not(.is-open) .sds--user-info--dropdown{display:none}.sds--menu-button.is-open svg{transform:rotate(180deg)}.sds--menu-button .sds--user-info--dropdown{right:initial}","",{version:3,sources:["webpack://./src/components/MenuButton/MenuButton.scss"],names:[],mappings:"AAAA,kBAGE,iBAAA,CAGE,0DACE,YAAA,CAKF,8BACE,wBAAA,CAIJ,4CACE,aAAA",sourcesContent:[".sds--menu-button {\n  $self: &;\n\n  position: relative;\n\n  &:not(.is-open) {\n    .sds--user-info--dropdown {\n      display: none;\n    }\n  }\n\n  &.is-open {\n    svg {\n      transform: rotate(180deg);\n    }\n  }\n\n  .sds--user-info--dropdown {\n    right: initial;\n  }\n\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);