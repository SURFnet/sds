"use strict";(self.webpackChunk_surfnet_sds=self.webpackChunk_surfnet_sds||[]).push([[1876],{"./src/components/MetaDataList/MetaDataList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultTemplate:()=>DefaultTemplate,NoCutOffTemplate:()=>NoCutOffTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MetaDataList_stories});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/common/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var MetaDataList=function MetaDataList(props){var _useState2=_slicedToArray((0,react.useState)({}),2),showMoreLess=_useState2[0],setShowMoreOrLess=_useState2[1];(0,react.useEffect)((function(){setShowMoreOrLess(Object.fromEntries([props.items.map((function(item,index){return[index,!1]}))]))}),[props]);var cutOffNumber=props.cutOffNumber||2,toggleMoreLess=function toggleMoreLess(event,index){(0,utils.p7)(event),showMoreLess[index]=!showMoreLess[index],setShowMoreOrLess(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},showMoreLess))},cutOffItems=props.moreLabel&&props.lessLabel;return(0,jsx_runtime.jsx)("dl",{className:"sds--metadata-list",children:props.items.map((function(item,index){return(0,jsx_runtime.jsxs)("div",{className:"sds--metadata-list--item",children:[(0,jsx_runtime.jsx)("dt",{children:item.label}),item.values.slice(0,showMoreLess[index]||!cutOffItems?item.values.length:cutOffNumber).map((function(val,i){return(0,jsx_runtime.jsx)("dd",{children:val},i)})),!showMoreLess[index]&&item.values.length===cutOffNumber+1&&cutOffItems&&(0,jsx_runtime.jsx)("dd",{children:item.values[cutOffNumber+1]},cutOffNumber+1),item.values.length>cutOffNumber+1&&cutOffItems&&(0,jsx_runtime.jsx)("a",{href:"#".concat(showMoreLess[index]?props.lessLabel:props.moreLabel),onClick:function onClick(e){return toggleMoreLess(e,index)},children:showMoreLess[index]?props.lessLabel:props.moreLabel})]},index)}))})};MetaDataList.displayName="MetaDataList";const MetaDataList_MetaDataList=MetaDataList;try{MetaDataList.displayName="MetaDataList",MetaDataList.__docgenInfo={description:"",displayName:"MetaDataList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MetaDataListItem[]"}},moreLabel:{defaultValue:null,description:"",name:"moreLabel",required:!1,type:{name:"string"}},lessLabel:{defaultValue:null,description:"",name:"lessLabel",required:!1,type:{name:"string"}},cutOffNumber:{defaultValue:null,description:"",name:"cutOffNumber",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MetaDataList/MetaDataList.tsx#MetaDataList"]={docgenInfo:MetaDataList.__docgenInfo,name:"MetaDataList",path:"src/components/MetaDataList/MetaDataList.tsx#MetaDataList"})}catch(__react_docgen_typescript_loader_error){}var _DefaultTemplate$para,_DefaultTemplate$para2,_NoCutOffTemplate$par,_NoCutOffTemplate$par2;function MetaDataList_stories_typeof(obj){return MetaDataList_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},MetaDataList_stories_typeof(obj)}function MetaDataList_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function MetaDataList_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?MetaDataList_stories_ownKeys(Object(source),!0).forEach((function(key){MetaDataList_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):MetaDataList_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function MetaDataList_stories_defineProperty(obj,key,value){return(key=function MetaDataList_stories_toPropertyKey(arg){var key=function MetaDataList_stories_toPrimitive(input,hint){if("object"!==MetaDataList_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==MetaDataList_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===MetaDataList_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const MetaDataList_stories={title:"ReactComponentLibrary/MetaDataList",component:MetaDataList_MetaDataList,args:{lessLabel:"Less...",moreLabel:"More..."}};var Template=function Template(args){return(0,jsx_runtime.jsx)(MetaDataList_MetaDataList,MetaDataList_stories_objectSpread({},args))};Template.displayName="Template";var DefaultTemplate=Template.bind({});DefaultTemplate.args={items:[{label:"Access",values:[(0,jsx_runtime.jsx)("a",{href:"https://surf.nl",children:"Login"}),(0,jsx_runtime.jsx)("a",{href:"https://surf.nl",children:"Website"})]},{label:"Policies",values:[(0,jsx_runtime.jsx)("a",{href:"https://surf.nl",children:"Privacy policy"}),(0,jsx_runtime.jsx)("a",{href:"https://surf.nl",children:"Acceptable use policy"})]},{label:"Administrative contact",values:[(0,jsx_runtime.jsx)("a",{href:"mailto:jdoe@surf.nl",children:"jdoe@surf.nl"}),(0,jsx_runtime.jsx)("a",{href:"mailto:mdoe@surf.nl",children:"mdoe@surf.nl"}),(0,jsx_runtime.jsx)("a",{href:"mailto:hdoe@surf.nl",children:"hdoe@surf.nl"}),(0,jsx_runtime.jsx)("a",{href:"mailto:wdoe@surf.nl",children:"wdoe@surf.nl"}),(0,jsx_runtime.jsx)("a",{href:"mailto:tdoe@surf.nl",children:"tdoe@surf.nl"})]},{label:"Support contact",values:[(0,jsx_runtime.jsx)("a",{href:"mailto:tdoe@surf.nl",children:"support@surf.nl"})]},{label:"Policy compliance",values:["Sirtfi, CoCo and R&S"]}],cutOffNumber:2};var NoCutOffTemplate=Template.bind({});NoCutOffTemplate.args={items:[{label:"Access",values:[(0,jsx_runtime.jsx)("a",{href:"https://surf.nl",children:"Login"}),(0,jsx_runtime.jsx)("a",{href:"https://surf.nl",children:"Website"})]},{label:"Policies",values:[(0,jsx_runtime.jsx)("a",{href:"https://surf.nl",children:"Privacy policy"}),(0,jsx_runtime.jsx)("a",{href:"https://surf.nl",children:"Acceptable use policy"})]},{label:"Administrative contact",values:[(0,jsx_runtime.jsx)("a",{href:"mailto:jdoe@surf.nl",children:"jdoe@surf.nl"}),(0,jsx_runtime.jsx)("a",{href:"mailto:mdoe@surf.nl",children:"mdoe@surf.nl"}),(0,jsx_runtime.jsx)("a",{href:"mailto:hdoe@surf.nl",children:"hdoe@surf.nl"}),(0,jsx_runtime.jsx)("a",{href:"mailto:wdoe@surf.nl",children:"wdoe@surf.nl"}),(0,jsx_runtime.jsx)("a",{href:"mailto:tdoe@surf.nl",children:"tdoe@surf.nl"})]},{label:"Support contact",values:[(0,jsx_runtime.jsx)("a",{href:"mailto:tdoe@surf.nl",children:"support@surf.nl"})]},{label:"Policy compliance",values:["Sirtfi, CoCo and R&S"]}],moreLabel:void 0,lessLabel:void 0},DefaultTemplate.parameters=MetaDataList_stories_objectSpread(MetaDataList_stories_objectSpread({},DefaultTemplate.parameters),{},{docs:MetaDataList_stories_objectSpread(MetaDataList_stories_objectSpread({},null===(_DefaultTemplate$para=DefaultTemplate.parameters)||void 0===_DefaultTemplate$para?void 0:_DefaultTemplate$para.docs),{},{source:MetaDataList_stories_objectSpread({originalSource:"args => <MetaDataList {...args} />"},null===(_DefaultTemplate$para2=DefaultTemplate.parameters)||void 0===_DefaultTemplate$para2||null===(_DefaultTemplate$para2=_DefaultTemplate$para2.docs)||void 0===_DefaultTemplate$para2?void 0:_DefaultTemplate$para2.source)})}),NoCutOffTemplate.parameters=MetaDataList_stories_objectSpread(MetaDataList_stories_objectSpread({},NoCutOffTemplate.parameters),{},{docs:MetaDataList_stories_objectSpread(MetaDataList_stories_objectSpread({},null===(_NoCutOffTemplate$par=NoCutOffTemplate.parameters)||void 0===_NoCutOffTemplate$par?void 0:_NoCutOffTemplate$par.docs),{},{source:MetaDataList_stories_objectSpread({originalSource:"args => <MetaDataList {...args} />"},null===(_NoCutOffTemplate$par2=NoCutOffTemplate.parameters)||void 0===_NoCutOffTemplate$par2||null===(_NoCutOffTemplate$par2=_NoCutOffTemplate$par2.docs)||void 0===_NoCutOffTemplate$par2?void 0:_NoCutOffTemplate$par2.source)})});var __namedExportsOrder=["DefaultTemplate","NoCutOffTemplate"]},"./src/common/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nw:()=>sanitize,p7:()=>stopEvent,xb:()=>isEmpty});var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/isomorphic-dompurify/browser.js"),isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__);function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function stopEvent(e){return null==e||(e.preventDefault(),e.stopPropagation(),!1)}function isEmpty(obj){return null==obj||(Array.isArray(obj)?0===obj.length:"string"==typeof obj?0===obj.trim().length:"object"===_typeof(obj)&&0===Object.keys(obj).length)}function sanitize(text){return isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default().sanitize(text,{ADD_ATTR:["target"]})}}}]);