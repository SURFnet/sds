"use strict";(self.webpackChunk_surfnet_sds=self.webpackChunk_surfnet_sds||[]).push([[151],{"./src/components/BlockSwitch/BlockSwitch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActiveHorizontal:()=>ActiveHorizontal,ActiveVertical:()=>ActiveVertical,NotActiveHorizontal:()=>NotActiveHorizontal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_BlockSwitch__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/BlockSwitch/BlockSwitch.tsx"),_BlockSwitchType__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/BlockSwitch/BlockSwitchType.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"ReactComponentLibrary/BlockSwitch",component:_BlockSwitch__WEBPACK_IMPORTED_MODULE_1__.A,args:{active:!0,disabled:!1,setValue:()=>!0,title:"Public team",txt:"List team in public teams index. Others can request membership.",type:_BlockSwitchType__WEBPACK_IMPORTED_MODULE_2__.A.Horizontal}},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BlockSwitch__WEBPACK_IMPORTED_MODULE_1__.A,args),ActiveHorizontal=Template.bind({});ActiveHorizontal.args={value:"value"};const NotActiveHorizontal=Template.bind({});NotActiveHorizontal.args={active:!1,value:"value"};const ActiveVertical=Template.bind({});ActiveVertical.args={type:_BlockSwitchType__WEBPACK_IMPORTED_MODULE_2__.A.Vertical,value:"value"};const __namedExportsOrder=["ActiveHorizontal","NotActiveHorizontal","ActiveVertical"];ActiveHorizontal.parameters={...ActiveHorizontal.parameters,docs:{...ActiveHorizontal.parameters?.docs,source:{originalSource:"args => <BlockSwitch {...args} />",...ActiveHorizontal.parameters?.docs?.source}}},NotActiveHorizontal.parameters={...NotActiveHorizontal.parameters,docs:{...NotActiveHorizontal.parameters?.docs,source:{originalSource:"args => <BlockSwitch {...args} />",...NotActiveHorizontal.parameters?.docs?.source}}},ActiveVertical.parameters={...ActiveVertical.parameters,docs:{...ActiveVertical.parameters?.docs,source:{originalSource:"args => <BlockSwitch {...args} />",...ActiveVertical.parameters?.docs?.source}}}},"./src/common/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HU:()=>sortObjects,Im:()=>isEmpty,Zc:()=>valueForSort,aj:()=>sanitize,jo:()=>stopEvent,uJ:()=>pseudoGuid});var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/isomorphic-dompurify/browser.js"),isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__);function _toConsumableArray(r){return function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}(r)||function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function stopEvent(e){return null==e||(e.preventDefault(),e.stopPropagation(),!1)}function isEmpty(obj){return null==obj||(Array.isArray(obj)?0===obj.length:"string"==typeof obj?0===obj.trim().length:obj&&obj.getTime&&"function"==typeof obj.getTime?obj.getTime()!=obj.getTime():"object"===_typeof(obj)&&0===Object.keys(obj).length)}function sanitize(text){return isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default().sanitize(text,{ADD_ATTR:["target"]})}function pseudoGuid(){return crypto.randomUUID&&"function"==typeof crypto.randomUUID&&crypto.randomUUID()||Math.round((new Date).getTime()*Math.random()*1e3).toString()}function sortObjects(objects,attribute,reverse){return _toConsumableArray(objects).sort((function(a,b){var val1=valueForSort(attribute,a),val2=valueForSort(attribute,b);if("number"==typeof val1&&"number"==typeof val2)return(val1-val2)*(reverse?-1:1);var aS=val1.toString(),bS=val2.toString();return 0===aS.length?reverse?-1:1:0===bS.length?reverse?1:-1:aS.localeCompare(bS)*(reverse?-1:1)}))}function valueForSort(attribute,obj){if(attribute.endsWith("_date"))return obj[attribute]||Number.MAX_SAFE_INTEGER;var val=obj[attribute];return val.getTime&&"function"==typeof val.getTime?val.getTime():isEmpty(val)?attribute.replace(/__/g,".").split(".").reduce((function(acc,e){return isEmpty(acc)?"":acc[e]}),obj)||"":val}},"./src/components/BlockSwitch/BlockSwitch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_BlockSwitch_BlockSwitch});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/common/utils.ts"),BlockSwitchType=__webpack_require__("./src/components/BlockSwitch/BlockSwitchType.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),BlockSwitch=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/BlockSwitch/BlockSwitch.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(BlockSwitch.A,options);BlockSwitch.A&&BlockSwitch.A.locals&&BlockSwitch.A.locals;var BlockSwitch_BlockSwitch_BlockSwitch=function BlockSwitch(props){var innerBlockHorizontal=function innerBlockHorizontal(){return react.createElement(react.Fragment,null,react.createElement("span",{className:"sds--block-switch--title  ".concat(props.icon?"":"no-icon"),key:(0,utils.uJ)()},react.createElement("span",{className:"icon ".concat(props.active?"is-active":""," ").concat(props.icon?"":"no-icon")},props.icon&&props.icon),react.createElement("span",{className:"text sds--text--h3"},props.title&&(0,utils.aj)(props.title))),react.createElement("span",{className:"sds--text--body--small"},props.txt&&(0,utils.aj)(props.txt)))},innerBlockVertical=function innerBlockVertical(){return react.createElement(react.Fragment,null,react.createElement("span",{className:"sds--block-switch--visual ".concat(props.icon?"":"no-icon")},react.createElement("span",{className:"icon ".concat(props.active?"is-active":"")},props.icon&&props.icon)),react.createElement("span",{className:"sds--block-switch--textual"},react.createElement("span",{className:"sds--block-switch--title sds--text--h3"},props.title&&(0,utils.aj)(props.title)),react.createElement("span",{className:"sds--text--body--small"},props.txt&&(0,utils.aj)(props.txt))))},type=props.type||BlockSwitchType.A.Horizontal,active="".concat(props.active?"is-active":""),disabled="".concat(props.disabled?"is-disabled":""),className="sds--block-switch  ".concat(type.toLowerCase()," ").concat(active," ").concat(disabled);return react.createElement("div",{className:"sds--block-switch-parent ".concat(active)},props.active&&react.createElement("button",{className},type===BlockSwitchType.A.Horizontal?innerBlockHorizontal():innerBlockVertical()),!props.active&&react.createElement("a",{href:"/#",onClick:function setValueInternal(e){(0,utils.jo)(e),!props.disabled&&props.setValue&&props.setValue(props.value)},className},type===BlockSwitchType.A.Horizontal?innerBlockHorizontal():innerBlockVertical()))};const components_BlockSwitch_BlockSwitch=BlockSwitch_BlockSwitch_BlockSwitch;try{BlockSwitch_BlockSwitch_BlockSwitch.displayName="BlockSwitch",BlockSwitch_BlockSwitch_BlockSwitch.__docgenInfo={description:"",displayName:"BlockSwitch",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"any"}},setValue:{defaultValue:null,description:"",name:"setValue",required:!1,type:{name:"Function"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},txt:{defaultValue:null,description:"",name:"txt",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"sds--block-switch--vertical"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/BlockSwitch/BlockSwitch.tsx#BlockSwitch"]={docgenInfo:BlockSwitch_BlockSwitch_BlockSwitch.__docgenInfo,name:"BlockSwitch",path:"src/components/BlockSwitch/BlockSwitch.tsx#BlockSwitch"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/BlockSwitch/BlockSwitchType.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function(BlockSwitchType){return BlockSwitchType.Horizontal="",BlockSwitchType.Vertical="sds--block-switch--vertical",BlockSwitchType}({})},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/BlockSwitch/BlockSwitch.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sds--block-switch-parent:not(.is-active):hover{background-color:var(--sds--palette--support-color--100)}.sds--block-switch .sds--block-switch--title.no-icon,.sds--block-switch .sds--block-switch--visual.no-icon{gap:0}.sds--block-switch .icon.is-active{color:var(--sds--palette--support-color--400)}.sds--block-switch.is-disabled{background-color:var(--sds--color--gray--100)}.sds--block-switch svg{width:2em;height:2em}a.sds--block-switch.is-disabled{color:var(--sds--color--gray--500);cursor:not-allowed}","",{version:3,sources:["webpack://./src/components/BlockSwitch/BlockSwitch.scss"],names:[],mappings:"AAEQ,gDACI,wDAAA,CAOR,2GACI,KAAA,CAGJ,mCACI,6CAAA,CAGJ,+BACI,6CAAA,CAIJ,uBACI,SAAA,CACA,UAAA,CAMR,gCACI,kCAAA,CACA,kBAAA",sourcesContent:[".sds--block-switch-parent {\n    &:not(.is-active) {\n        &:hover {\n            background-color: var(--sds--palette--support-color--100);\n        }\n    }\n}\n\n.sds--block-switch {\n\n    .sds--block-switch--title.no-icon, .sds--block-switch--visual.no-icon {\n        gap: 0;\n    }\n\n    .icon.is-active {\n        color: var(--sds--palette--support-color--400);\n    }\n\n    &.is-disabled {\n        background-color: var(--sds--color--gray--100);\n\n    }\n\n    svg {\n        width: calc(32em / 16);\n        height: calc(32em / 16)\n    }\n\n}\n\n\na.sds--block-switch.is-disabled {\n    color: var(--sds--color--gray--500);\n    cursor: not-allowed;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);