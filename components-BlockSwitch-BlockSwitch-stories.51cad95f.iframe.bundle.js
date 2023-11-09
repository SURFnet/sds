"use strict";(self.webpackChunk_surfnet_sds=self.webpackChunk_surfnet_sds||[]).push([[4296],{"./src/components/BlockSwitch/BlockSwitch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActiveHorizontal:()=>ActiveHorizontal,ActiveVertical:()=>ActiveVertical,NotActiveHorizontal:()=>NotActiveHorizontal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _ActiveHorizontal$par,_ActiveHorizontal$par2,_NotActiveHorizontal$,_NotActiveHorizontal$2,_ActiveVertical$param,_ActiveVertical$param2,_BlockSwitch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/BlockSwitch/BlockSwitch.tsx"),_BlockSwitchType__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/BlockSwitch/BlockSwitchType.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"ReactComponentLibrary/BlockSwitch",component:_BlockSwitch__WEBPACK_IMPORTED_MODULE_1__.Z,args:{active:!0,disabled:!1,setValue:function setValue(){return!0},title:"Public team",txt:"List team in public teams index. Others can request membership.",type:_BlockSwitchType__WEBPACK_IMPORTED_MODULE_2__.Z.Horizontal}};var Template=function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_BlockSwitch__WEBPACK_IMPORTED_MODULE_1__.Z,_objectSpread({},args))};Template.displayName="Template";var ActiveHorizontal=Template.bind({});ActiveHorizontal.args={value:"value"};var NotActiveHorizontal=Template.bind({});NotActiveHorizontal.args={active:!1,value:"value"};var ActiveVertical=Template.bind({});ActiveVertical.args={type:_BlockSwitchType__WEBPACK_IMPORTED_MODULE_2__.Z.Vertical,value:"value"},ActiveHorizontal.parameters=_objectSpread(_objectSpread({},ActiveHorizontal.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ActiveHorizontal$par=ActiveHorizontal.parameters)||void 0===_ActiveHorizontal$par?void 0:_ActiveHorizontal$par.docs),{},{source:_objectSpread({originalSource:"args => <BlockSwitch {...args} />"},null===(_ActiveHorizontal$par2=ActiveHorizontal.parameters)||void 0===_ActiveHorizontal$par2||null===(_ActiveHorizontal$par2=_ActiveHorizontal$par2.docs)||void 0===_ActiveHorizontal$par2?void 0:_ActiveHorizontal$par2.source)})}),NotActiveHorizontal.parameters=_objectSpread(_objectSpread({},NotActiveHorizontal.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NotActiveHorizontal$=NotActiveHorizontal.parameters)||void 0===_NotActiveHorizontal$?void 0:_NotActiveHorizontal$.docs),{},{source:_objectSpread({originalSource:"args => <BlockSwitch {...args} />"},null===(_NotActiveHorizontal$2=NotActiveHorizontal.parameters)||void 0===_NotActiveHorizontal$2||null===(_NotActiveHorizontal$2=_NotActiveHorizontal$2.docs)||void 0===_NotActiveHorizontal$2?void 0:_NotActiveHorizontal$2.source)})}),ActiveVertical.parameters=_objectSpread(_objectSpread({},ActiveVertical.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ActiveVertical$param=ActiveVertical.parameters)||void 0===_ActiveVertical$param?void 0:_ActiveVertical$param.docs),{},{source:_objectSpread({originalSource:"args => <BlockSwitch {...args} />"},null===(_ActiveVertical$param2=ActiveVertical.parameters)||void 0===_ActiveVertical$param2||null===(_ActiveVertical$param2=_ActiveVertical$param2.docs)||void 0===_ActiveVertical$param2?void 0:_ActiveVertical$param2.source)})});var __namedExportsOrder=["ActiveHorizontal","NotActiveHorizontal","ActiveVertical"]},"./src/common/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{KE:()=>pseudoGuid,Nw:()=>sanitize,p7:()=>stopEvent,xb:()=>isEmpty});var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/isomorphic-dompurify/browser.js"),isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__);function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function stopEvent(e){return null==e||(e.preventDefault(),e.stopPropagation(),!1)}function isEmpty(obj){return null==obj||(Array.isArray(obj)?0===obj.length:"string"==typeof obj?0===obj.trim().length:obj&&obj.getTime?obj.getTime()!=obj.getTime():"object"===_typeof(obj)&&0===Object.keys(obj).length)}function sanitize(text){return isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default().sanitize(text,{ADD_ATTR:["target"]})}function pseudoGuid(){return crypto.randomUUID&&crypto.randomUUID()||Math.round((new Date).getTime()*Math.random()*1e3).toString()}},"./src/components/BlockSwitch/BlockSwitch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_BlockSwitch_BlockSwitch});__webpack_require__("./node_modules/react/index.js");var utils=__webpack_require__("./src/common/utils.ts"),BlockSwitchType=__webpack_require__("./src/components/BlockSwitch/BlockSwitchType.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),BlockSwitch=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/BlockSwitch/BlockSwitch.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BlockSwitch.Z,options);BlockSwitch.Z&&BlockSwitch.Z.locals&&BlockSwitch.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),BlockSwitch_BlockSwitch_BlockSwitch=function BlockSwitch(props){var innerBlockHorizontal=function innerBlockHorizontal(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("span",{className:"sds--block-switch--title  ".concat(props.icon?"":"no-icon"),children:[(0,jsx_runtime.jsx)("span",{className:"icon ".concat(props.active?"is-active":""," ").concat(props.icon?"":"no-icon"),children:props.icon&&props.icon}),(0,jsx_runtime.jsx)("span",{className:"text sds--text--h3",children:props.title&&(0,utils.Nw)(props.title)})]},(0,utils.KE)()),(0,jsx_runtime.jsx)("span",{className:"sds--text--body--small",children:props.txt&&(0,utils.Nw)(props.txt)})]})},innerBlockVertical=function innerBlockVertical(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"sds--block-switch--visual ".concat(props.icon?"":"no-icon"),children:(0,jsx_runtime.jsx)("span",{className:"icon ".concat(props.active?"is-active":""),children:props.icon&&props.icon})}),(0,jsx_runtime.jsxs)("span",{className:"sds--block-switch--textual",children:[(0,jsx_runtime.jsx)("span",{className:"sds--block-switch--title sds--text--h3",children:props.title&&(0,utils.Nw)(props.title)}),(0,jsx_runtime.jsx)("span",{className:"sds--text--body--small",children:props.txt&&(0,utils.Nw)(props.txt)})]})]})},type=props.type||BlockSwitchType.Z.Horizontal,active="".concat(props.active?"is-active":""),disabled="".concat(props.disabled?"is-disabled":""),className="sds--block-switch  ".concat(type.toLowerCase()," ").concat(active," ").concat(disabled);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[props.active&&(0,jsx_runtime.jsx)("button",{className,children:type===BlockSwitchType.Z.Horizontal?innerBlockHorizontal():innerBlockVertical()}),!props.active&&(0,jsx_runtime.jsx)("a",{href:"/#",onClick:function setValueInternal(e){(0,utils.p7)(e),!props.disabled&&props.setValue&&props.setValue(props.value)},className,children:type===BlockSwitchType.Z.Horizontal?innerBlockHorizontal():innerBlockVertical()})]})};const components_BlockSwitch_BlockSwitch=BlockSwitch_BlockSwitch_BlockSwitch;try{BlockSwitch_BlockSwitch_BlockSwitch.displayName="BlockSwitch",BlockSwitch_BlockSwitch_BlockSwitch.__docgenInfo={description:"",displayName:"BlockSwitch",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"any"}},setValue:{defaultValue:null,description:"",name:"setValue",required:!1,type:{name:"Function"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},txt:{defaultValue:null,description:"",name:"txt",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"sds--block-switch--vertical"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BlockSwitch/BlockSwitch.tsx#BlockSwitch"]={docgenInfo:BlockSwitch_BlockSwitch_BlockSwitch.__docgenInfo,name:"BlockSwitch",path:"src/components/BlockSwitch/BlockSwitch.tsx#BlockSwitch"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/BlockSwitch/BlockSwitchType.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function(BlockSwitchType){return BlockSwitchType.Horizontal="",BlockSwitchType.Vertical="sds--block-switch--vertical",BlockSwitchType}({})},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/BlockSwitch/BlockSwitch.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sds--block-switch .sds--block-switch--title.no-icon,.sds--block-switch .sds--block-switch--visual.no-icon{gap:0}.sds--block-switch .icon.is-active{color:var(--sds--palette--support-color--400)}.sds--block-switch.is-disabled{background-color:var(--sds--color--gray--100)}.sds--block-switch svg{width:2em;height:2em}a.sds--block-switch.is-disabled{color:var(--sds--color--gray--500);cursor:not-allowed}","",{version:3,sources:["webpack://./src/components/BlockSwitch/BlockSwitch.scss"],names:[],mappings:"AAEI,2GACI,KAAA,CAGJ,mCACI,6CAAA,CAGJ,+BACI,6CAAA,CAIJ,uBACI,SAAA,CACA,UAAA,CAMR,gCACI,kCAAA,CACA,kBAAA",sourcesContent:[".sds--block-switch {\n\n    .sds--block-switch--title.no-icon, .sds--block-switch--visual.no-icon {\n        gap: 0;\n    }\n\n    .icon.is-active {\n        color: var(--sds--palette--support-color--400);\n    }\n\n    &.is-disabled {\n        background-color: var(--sds--color--gray--100);\n\n    }\n\n    svg {\n        width: calc(32em / 16);\n        height: calc(32em / 16)\n    }\n\n}\n\n\na.sds--block-switch.is-disabled {\n    color: var(--sds--color--gray--500);\n    cursor: not-allowed;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);