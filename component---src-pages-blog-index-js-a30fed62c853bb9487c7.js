webpackJsonp([0x8a675b55feca],{30:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Link=t.Timestamp=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(1),o=n(l),u=a(14),s=n(u),i=a(66),c=n(i),d=(0,u.css)("color:#767676;font-size:0.9rem;font-family:'Cousine',monospace;margin:0 0 15px;display:block;"),f=(0,s.default)("time",{target:"css-11hp2160"})(d,";"),m=(0,u.css)("box-shadow:inset 0 -5px 0 rgba(0,96,193,0.25);-webkit-transition:box-shadow 0.4s ease-in-out;transition:box-shadow 0.4s ease-in-out;&:hover{box-shadow:inset 0 -300px 0 rgba(0,96,193,0.25);}&:focus{outline:0;}"),p=function(e){return o.default.createElement(c.default,r({className:m},e),e.children)};t.Timestamp=f,t.Link=p},209:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var r=a(1),l=n(r),o=a(30),u=a(29),s=a(14),i=(0,s.css)("box-shadow:none;"),c=function(e){var t=e.data,a=t.allMarkdownRemark.edges;return l.default.createElement(u.Box,null,l.default.createElement(u.Box,{width:[1,1,720],m:["3.5rem 0 0 0","3.5rem 0 0 0","3.5rem auto 0 auto"],px:[3,3,0]},l.default.createElement("h1",null,"Blog"),l.default.createElement(u.Box,null,a.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e,t){var a=e.node;return l.default.createElement(u.Box,{key:a.id},l.default.createElement(o.Link,{to:a.fields.slug,className:i},l.default.createElement(o.Timestamp,null,a.frontmatter.date),l.default.createElement("h3",null,a.frontmatter.title),l.default.createElement("p",null,a.excerpt)))}))))};t.pageQuery="** extracted graphql fragment **";t.default=c}});
//# sourceMappingURL=component---src-pages-blog-index-js-a30fed62c853bb9487c7.js.map