(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/components/Carousel/Carousel.less":function(e,t,n){},"./src/components/Carousel/Carousel.mdx":function(e,t,n){"use strict";n.r(t);var r=n("../../node_modules/react/index.js"),o=n.n(r),a=n("../../node_modules/@mdx-js/tag/dist/index.js"),s=n("../../node_modules/docz/dist/index.m.js"),i=n("./src/utils/cn.ts"),l=(n("./src/components/Carousel/Carousel.less"),n("./src/components/Carousel/CarouselArrow.less"),n("./src/icons/System/16/Arrow_forward_16.svg")),c=n("./src/icons/System/16/Arrow_right_16.svg");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=Object(i.a)("mfui-carousel-arrow"),h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r["Component"]),n=t,(o=[{key:"renderIcon",value:function(){switch(this.props.theme){case"showcase":case"landing":return r.createElement(c.default,null);default:return r.createElement(l.default,null)}}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.onClick;return r.createElement("div",{className:f("",{},t),onClick:n},r.createElement("div",{className:f("arrow-icon")},this.renderIcon()))}}])&&p(n.prototype,o),a&&p(n,a),t}(),v=h;try{h.displayName="CarouselArrow",h.__docgenInfo={description:"",displayName:"CarouselArrow",props:{className:{defaultValue:null,description:"",name:"className",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"any"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Carousel/CarouselArrow.tsx#CarouselArrow"]={docgenInfo:h.__docgenInfo,name:"CarouselArrow",path:"src/components/Carousel/CarouselArrow.tsx#CarouselArrow"})}catch(e){}var w=n("../../node_modules/react-slick/lib/index.js"),y=n.n(w),b=n("../../node_modules/lodash.throttle/index.js"),g=n.n(b);function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var _=Object(i.a)("mfui-carousel"),P=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),n=!o||"object"!==C(o)&&"function"!==typeof o?k(r):o,Object.defineProperty(k(n),"noPassiveOption",{configurable:!0,enumerable:!0,writable:!0,value:{passive:!1}}),Object.defineProperty(k(n),"getSlider",{configurable:!0,enumerable:!0,writable:!0,value:function(e){n.slider=e}}),Object.defineProperty(k(n),"handleClickNext",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=n.props.onClickNext;e&&e(),n.slider.slickNext()}}),Object.defineProperty(k(n),"handleClickPrev",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=n.props.onClickPrev;e&&e(),n.slider.slickPrev()}}),Object.defineProperty(k(n),"handleChange",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=n.props.onAfterChange;n.updateArrowsState(e),t&&t(e)}}),Object.defineProperty(k(n),"getResponsiveData",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t,n,r){var o=window.innerWidth,a=e.length,s={};return e.forEach(function(i,l){var c=i.breakpoint,u=i.settings,p=u.slidesToShow,d=u.arrows,m=l+1,f=c>=o,h=!!e[m]&&o>e[m].breakpoint,v=p||n,w=f&&i.settings.hasOwnProperty("arrows")?d:t;(h&&f||f&&m===a)&&(s={hasResponsiveArrows:w&&v<r,currentSlides:v})}),s}}),Object.defineProperty(k(n),"handleCarouselParams",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=n.props,t=e.children,r=e.options,o=r.slidesToShow,a=r.responsive,s=r.arrows,i=void 0===s||s,l=(n.slider||{innerSlider:{state:{}}}).innerSlider.state.currentSlide,c=t.length,u=n.getResponsiveData(a,i,o,c),p=u.hasResponsiveArrows,d=u.currentSlides,m=void 0!==p?p:i&&o<c,f=d||o;n.setState({isArrows:m,showSlides:f},function(){n.updateArrowsState(l)})}}),n.throttledHandleCarouselParams=g()(n.handleCarouselParams,20),n.state={isPrevActive:!1,isNextActive:!0,isArrows:!0,showSlides:0},n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.options.initialSlide,n=e.children,r=this.state.showSlides,o=t!==n.length-1-r;this.handleCarouselParams(),window.addEventListener("touchstart",this.touchStart),window.addEventListener("touchmove",this.preventTouch,this.noPassiveOption),window.addEventListener("resize",this.throttledHandleCarouselParams),this.setState({isPrevActive:!!t,isNextActive:o})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("touchstart",this.touchStart),window.removeEventListener("touchmove",this.preventTouch,this.noPassiveOption),window.removeEventListener("resize",this.throttledHandleCarouselParams)}},{key:"updateArrowsState",value:function(e){var t=this.props.children,n=e+this.state.showSlides<t.length;this.setState({isPrevActive:!!e,isNextActive:n})}},{key:"touchStart",value:function(e){this.firstClientX=e.touches[0].clientX}},{key:"preventTouch",value:function(e){if(this.clientX=e.touches[0].clientX-this.firstClientX,Math.abs(this.clientX)>5)return e.preventDefault(),e.returnValue=!1,!1}},{key:"renderArrows",value:function(){var e=this.props,t=e.theme,n=e.arrowColor,o=this.state,a=o.isPrevActive,s=o.isNextActive;return r.createElement("div",{className:_("arrows",{theme:t})},r.createElement(v,{className:_("arrow",{"arrow-prev":!0,disabled:!a,fill:n}),onClick:this.handleClickPrev,theme:t}),r.createElement(v,{className:_("arrow",{"arrow-next":!0,disabled:!s,fill:n}),onClick:this.handleClickNext,theme:t}))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.options,o=e.theme,a=e.children,s=this.state.isArrows,i=(n.arrows,E(n,["arrows"]));return r.createElement("div",{className:_("",{theme:o},t)},s&&this.renderArrows(),r.createElement(y.a,Object.assign({},i,{arrows:!1,ref:this.getSlider,afterChange:this.handleChange}),a))}}])&&S(n.prototype,o),a&&S(n,a),t}();Object.defineProperty(P,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{responsive:!0}});var N=P;try{P.displayName="Carousel",P.__docgenInfo={description:"",displayName:"Carousel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ICarouselOptions"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"string"}},arrowColor:{defaultValue:null,description:"",name:"arrowColor",required:!1,type:{name:"string"}},onClickNext:{defaultValue:null,description:"",name:"onClickNext",required:!1,type:{name:"() => void"}},onClickPrev:{defaultValue:null,description:"",name:"onClickPrev",required:!1,type:{name:"() => void"}},onAfterChange:{defaultValue:null,description:"",name:"onAfterChange",required:!1,type:{name:"(index: number) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:P.__docgenInfo,name:"Carousel",path:"src/components/Carousel/Carousel.tsx#Carousel"})}catch(e){}var A=n("./src/components/Logo/Logo.tsx");function T(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"Wrapper",function(){return j}),n.d(t,"carouselParams",function(){return x});var j=function(e){var t=e.children;return o.a.createElement("div",null,t)},x={dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1,variableWidth:!0,responsive:[{breakpoint:1e3,settings:{arrows:!1,dots:!0,slidesToShow:3}},{breakpoint:900,settings:{arrows:!0,dots:!0}},{breakpoint:860,settings:{arrows:!1,dots:!0}}]};t.default=function(e){var t=e.components;T(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"carousel"}},o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"h1",props:{"aria-hidden":!0,href:"#carousel"}},o.a.createElement(a.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Carousel"),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"properties-carousel"}},o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#properties-carousel"}},o.a.createElement(a.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Properties Carousel"),o.a.createElement(s.e,{of:N}),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"basic-usage"}},o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},o.a.createElement(a.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),o.a.createElement(s.d,{__position:1,__code:"<Carousel options={carouselParams} onClickNext={() => {}}>\n  <div style={{ width: 260 }}>\n    <Logo />\n  </div>\n  <div style={{ width: 260 }}>\n    <Logo />\n  </div>\n  <div style={{ width: 260 }}>\n    <Logo />\n  </div>\n  <div style={{ width: 260 }}>\n    <Logo />\n  </div>\n  <div style={{ width: 260 }}>\n    <Logo />\n  </div>\n  <div style={{ width: 260 }}>\n    <Logo />\n  </div>\n  <div style={{ width: 260 }}>\n    <Logo />\n  </div>\n  <div style={{ width: 260 }}>\n    <Logo />\n  </div>\n  <div style={{ width: 260 }}>\n    <Logo />\n  </div>\n</Carousel>",wrapper:j},o.a.createElement(N,{options:x,onClickNext:function(){}},o.a.createElement("div",{style:{width:260}},o.a.createElement(A.a,null)),o.a.createElement("div",{style:{width:260}},o.a.createElement(A.a,null)),o.a.createElement("div",{style:{width:260}},o.a.createElement(A.a,null)),o.a.createElement("div",{style:{width:260}},o.a.createElement(A.a,null)),o.a.createElement("div",{style:{width:260}},o.a.createElement(A.a,null)),o.a.createElement("div",{style:{width:260}},o.a.createElement(A.a,null)),o.a.createElement("div",{style:{width:260}},o.a.createElement(A.a,null)),o.a.createElement("div",{style:{width:260}},o.a.createElement(A.a,null)),o.a.createElement("div",{style:{width:260}},o.a.createElement(A.a,null)))),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"included-props"}},o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"h2",props:{"aria-hidden":!0,href:"#included-props"}},o.a.createElement(a.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon-link"}},"#")),"Included props"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-javascript"}},"const carouselParams = {\n    dots: false,\n    infinite: false,\n    speed: 500,\n    slidesToShow: 4,\n    slidesToScroll: 1,\n    responsive: [\n        {\n            breakpoint: 1024,\n            settings: {\n                slidesToShow: 3,\n            }\n        },\n        {\n            breakpoint: 720,\n            settings: {\n            slidesToShow: 2,\n                dots: true,\n            }\n        },\n        {\n            breakpoint: 479,\n            settings: {\n                slidesToShow: 1,\n                dots: true,\n            }\n        },\n    ]\n};\n")))}},"./src/components/Carousel/CarouselArrow.less":function(e,t,n){}}]);