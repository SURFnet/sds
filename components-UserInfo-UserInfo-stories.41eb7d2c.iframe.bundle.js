"use strict";(self.webpackChunk_surfnet_sds=self.webpackChunk_surfnet_sds||[]).push([[859],{"./src/components/UserInfo/UserInfo.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UserInfoActiveTemplate:()=>UserInfoActiveTemplate,UserInfoTemplate:()=>UserInfoTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_UserInfo__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/UserInfo/UserInfo.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"ReactComponentLibrary/UserInfo",component:_UserInfo__WEBPACK_IMPORTED_MODULE_1__.A},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_UserInfo__WEBPACK_IMPORTED_MODULE_1__.A,args),UserInfoTemplate=Template.bind({});UserInfoTemplate.args={userName:"John Doe",organisationName:"example.com",isOpen:!1,toggle:()=>!0,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},"Mijn contacthistorie")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},"Mijn gegevens"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},"Uitloggen"))))};const UserInfoActiveTemplate=Template.bind({});UserInfoActiveTemplate.args={userName:"John Doe",organisationName:"example.com",isOpen:!0,toggle:()=>!0,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},"Mijn contacthistorie")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},"Mijn gegevens"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",{href:"#"},"Uitloggen"))))};const __namedExportsOrder=["UserInfoTemplate","UserInfoActiveTemplate"];UserInfoTemplate.parameters={...UserInfoTemplate.parameters,docs:{...UserInfoTemplate.parameters?.docs,source:{originalSource:"args => <UserInfo {...args} />",...UserInfoTemplate.parameters?.docs?.source}}},UserInfoActiveTemplate.parameters={...UserInfoActiveTemplate.parameters,docs:{...UserInfoActiveTemplate.parameters?.docs,source:{originalSource:"args => <UserInfo {...args} />",...UserInfoActiveTemplate.parameters?.docs?.source}}}},"./src/icons/functional-icons/arrow-down-2.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgArrowDown2});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgArrowDown2=function SvgArrowDown2(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:12.4,viewBox:"0 0 24 12.4"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M23.2.8 12.5 11.5c-.1.1-.2.1-.2.2-.1 0-.2.1-.3.1s-.2 0-.3-.1c-.1 0-.2-.1-.2-.2L.8.8"})))};__webpack_require__.p},"./src/components/UserInfo/UserInfo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_UserInfo_UserInfo});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),UserInfo=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UserInfo/UserInfo.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(UserInfo.A,options);UserInfo.A&&UserInfo.A.locals&&UserInfo.A.locals;var arrow_down_2=__webpack_require__("./src/icons/functional-icons/arrow-down-2.svg"),UserInfo_UserInfo_UserInfo=function UserInfo(props){return react.createElement("nav",{className:"sds--user-info ".concat(props.isOpen?"is-open":"")},react.createElement("div",{className:"sds--user-info--textual"},react.createElement("p",{className:"name"},props.userName),react.createElement("p",{className:"role sds--text--body--small"},props.organisationName)),react.createElement("button",{type:"button",className:"sds--user-info--button",onClick:props.toggle},react.createElement(arrow_down_2.h,null)),react.createElement("div",{className:"sds--user-info--dropdown"},props.children&&props.children))};const components_UserInfo_UserInfo=UserInfo_UserInfo_UserInfo;try{UserInfo_UserInfo_UserInfo.displayName="UserInfo",UserInfo_UserInfo_UserInfo.__docgenInfo={description:"",displayName:"UserInfo",props:{userName:{defaultValue:null,description:"",name:"userName",required:!0,type:{name:"string"}},organisationName:{defaultValue:null,description:"",name:"organisationName",required:!0,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},toggle:{defaultValue:null,description:"",name:"toggle",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UserInfo/UserInfo.tsx#UserInfo"]={docgenInfo:UserInfo_UserInfo_UserInfo.__docgenInfo,name:"UserInfo",path:"src/components/UserInfo/UserInfo.tsx#UserInfo"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UserInfo/UserInfo.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sds--user-info .sds--user-info--button svg{width:.703125em;height:.341875em}","",{version:3,sources:["webpack://./src/components/UserInfo/UserInfo.scss"],names:[],mappings:"AAAA,4CACI,eAAA,CACA,gBAAA",sourcesContent:[".sds--user-info .sds--user-info--button svg {\n    width: calc(11.25em/16);\n    height: calc(5.47em/16)\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);