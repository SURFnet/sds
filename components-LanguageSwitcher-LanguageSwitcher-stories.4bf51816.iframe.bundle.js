"use strict";(self.webpackChunk_surfnet_sds=self.webpackChunk_surfnet_sds||[]).push([[911],{"./src/components/LanguageSwitcher/LanguageSwitcher.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/LanguageSwitcher/LanguageSwitcher.tsx"),_common_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/utils.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"ReactComponentLibrary/LanguageSwitcher",component:_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_1__.A},Example=(args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_1__.A,args)).bind({});Example.args={languages:["nl","en"],currentLanguage:"nl",onLanguageSwitch:e=>(0,_common_utils__WEBPACK_IMPORTED_MODULE_2__.jo)(e)};const __namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"args => <LanguageSwitcher {...args} />",...Example.parameters?.docs?.source}}}},"./src/common/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HU:()=>sortObjects,Im:()=>isEmpty,Zc:()=>valueForSort,aj:()=>sanitize,jo:()=>stopEvent,uJ:()=>pseudoGuid});var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/isomorphic-dompurify/browser.js"),isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__);function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function stopEvent(e){return null==e||(e.preventDefault(),e.stopPropagation(),!1)}function isEmpty(obj){return null==obj||(Array.isArray(obj)?0===obj.length:"string"==typeof obj?0===obj.trim().length:obj&&obj.getTime&&"function"==typeof obj.getTime?obj.getTime()!=obj.getTime():"object"===_typeof(obj)&&0===Object.keys(obj).length)}function sanitize(text){return isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default().sanitize(text,{ADD_ATTR:["target"]})}function pseudoGuid(){return crypto.randomUUID&&"function"==typeof crypto.randomUUID&&crypto.randomUUID()||Math.round((new Date).getTime()*Math.random()*1e3).toString()}function sortObjects(objects,attribute,reverse){return _toConsumableArray(objects).sort((function(a,b){var val1=valueForSort(attribute,a),val2=valueForSort(attribute,b);if("number"==typeof val1&&"number"==typeof val2)return(val1-val2)*(reverse?-1:1);var aS=val1.toString(),bS=val2.toString();return 0===aS.length?reverse?-1:1:0===bS.length?reverse?1:-1:aS.localeCompare(bS)*(reverse?-1:1)}))}function valueForSort(attribute,obj){if(attribute.endsWith("_date"))return obj[attribute]||Number.MAX_SAFE_INTEGER;var val=obj[attribute];return val.getTime&&"function"==typeof val.getTime?val.getTime():isEmpty(val)?attribute.replace(/__/g,".").split(".").reduce((function(acc,e){return isEmpty(acc)?"":acc[e]}),obj)||"":val}},"./src/components/LanguageSwitcher/LanguageSwitcher.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_LanguageSwitcher_LanguageSwitcher});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LanguageSwitcher=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/LanguageSwitcher/LanguageSwitcher.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LanguageSwitcher.A,options);LanguageSwitcher.A&&LanguageSwitcher.A.locals&&LanguageSwitcher.A.locals;var utils=__webpack_require__("./src/common/utils.ts"),LanguageSwitcher_LanguageSwitcher_LanguageSwitcher=function LanguageSwitcher(props){return react.createElement("nav",{className:"sds--language-switcher sds--text--body--small","aria-label":"Language"},react.createElement("ul",null,props.languages.map((function(lang,index){return react.createElement("li",{key:lang},react.createElement("a",{href:"/".concat(lang),hrefLang:lang,className:lang===props.currentLanguage?"is-active":"",onClick:function onClick(e){return function onLanguageSwitchInner(e,lang){(0,utils.jo)(e),props.onLanguageSwitch(lang)}(e,lang)}},lang.toUpperCase(),react.createElement("span",{className:"sds--visually-hidden"},lang.toUpperCase())),index<props.languages.length-1&&react.createElement("span",{className:"sds--language-sds--divider"},"|"))}))))};const components_LanguageSwitcher_LanguageSwitcher=LanguageSwitcher_LanguageSwitcher_LanguageSwitcher;try{LanguageSwitcher_LanguageSwitcher_LanguageSwitcher.displayName="LanguageSwitcher",LanguageSwitcher_LanguageSwitcher_LanguageSwitcher.__docgenInfo={description:"",displayName:"LanguageSwitcher",props:{currentLanguage:{defaultValue:null,description:"",name:"currentLanguage",required:!0,type:{name:"string"}},languages:{defaultValue:null,description:"",name:"languages",required:!0,type:{name:"string[]"}},onLanguageSwitch:{defaultValue:null,description:"",name:"onLanguageSwitch",required:!0,type:{name:"Function"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LanguageSwitcher/LanguageSwitcher.tsx#LanguageSwitcher"]={docgenInfo:LanguageSwitcher_LanguageSwitcher_LanguageSwitcher.__docgenInfo,name:"LanguageSwitcher",path:"src/components/LanguageSwitcher/LanguageSwitcher.tsx#LanguageSwitcher"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/LanguageSwitcher/LanguageSwitcher.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sds--language-switcher ul li{flex-shrink:0}.sds--language-switcher ul .sds--visually-hidden{position:absolute !important;height:0;width:0;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);white-space:nowrap}.sds--language-switcher ul a:link:not(.is-active),.sds--language-switcher ul a:visited:not(.is-active){font-weight:600}","",{version:3,sources:["webpack://./src/components/LanguageSwitcher/LanguageSwitcher.scss"],names:[],mappings:"AAII,8BAEE,aAAA,CAGF,iDACE,4BAAA,CACA,QAAA,CACA,OAAA,CACA,eAAA,CACA,6BAAA,CACA,kBAAA,CAQE,uGACE,eAAA",sourcesContent:[".sds--language-switcher {\n  ul {\n    //@include align-icon-defaults(em(9px, 14), center);\n\n    li {\n      //@include align-icon-defaults(em(9px, 14), center);\n      flex-shrink: 0;\n    }\n\n    .sds--visually-hidden {\n      position: absolute !important;\n      height: 0;\n      width: 0;\n      overflow: hidden;\n      clip: rect(1px, 1px, 1px, 1px);\n      white-space: nowrap\n    }\n\n    a {\n      &:link,\n      &:visited {\n        //@include lnk-decoration(show);\n\n        &:not(.is-active) {\n          font-weight: 600;\n          //@include lnk-color(var(--sds--palette--main-color--400));\n        }\n\n        &.is-active {\n          //@include lnk-color();\n        }\n      }\n    }\n  }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);