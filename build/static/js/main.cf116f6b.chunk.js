(this.webpackJsonpv221=this.webpackJsonpv221||[]).push([[0],{12:function(e,t,n){e.exports={root:"aboutPage_root__33B6t",header:"aboutPage_header__272d5",mainphoto:"aboutPage_mainphoto__2UIoi",item_photo:"aboutPage_item_photo__3RcxN",item_text:"aboutPage_item_text__31ILX",buttons:"aboutPage_buttons__12sym"}},13:function(e,t,n){e.exports={root:"mainMenu_root__14Noo",toggle:"mainMenu_toggle__3otll",logo:"mainMenu_logo__2_DTK",menu:"mainMenu_menu__Skdps",visible:"mainMenu_visible___DWTm",active:"mainMenu_active__NmEuU"}},16:function(e,t,n){e.exports={item:"infoItem_item__KYJ_l",title:"infoItem_title__3rhC1",body:"infoItem_body__3GwHV"}},17:function(e,t,n){e.exports={root:"highlight_root__2Y9jY",hlbox:"highlight_hlbox__2rjr7",m_root:"highlight_m_root__1MCnl",upper:"highlight_upper__HL17H",lower:"highlight_lower__3qCcV"}},20:function(e,t,n){e.exports={root:"studyPage_root__28qpd",imgSeparator:"studyPage_imgSeparator__tjna9",header:"studyPage_header__3ydck",title:"studyPage_title__27_AC",content:"studyPage_content__3Y3fE"}},21:function(e,t,n){e.exports={root:"linkSection_root__1llBA",item:"linkSection_item__2I7Gi"}},22:function(e,t,n){e.exports={root:"filterLink_root__ow_6v",active:"filterLink_active__3FNNq",dot:"filterLink_dot__2x_aU"}},25:function(e,t,n){e.exports={root:"allStudiesPage_root__7LJjy",title:"allStudiesPage_title__2Q6ZL",filterlinks:"allStudiesPage_filterlinks__3Bzu1"}},26:function(e,t,n){e.exports={root:"socButton_root__3Ndf5",linkcontainer:"socButton_linkcontainer__3MAcv",icon:"socButton_icon__2ivzj"}},32:function(e,t,n){e.exports={root:"footer_root__1s_BB",smbuttons:"footer_smbuttons__qnv9f"}},47:function(e,t,n){e.exports={root:"galleryView_root__2ELhF"}},49:function(e,t,n){e.exports={root:"hero_root__1b85R"}},50:function(e,t,n){e.exports={root:"mainButton_root__1-pWN"}},51:function(e,t,n){e.exports={root:"textPage_root__mV3Ti"}},94:function(e,t,n){},95:function(e,t,n){e.exports={title:"homePage_title__2oyQe",hero1:"homePage_hero1__3ZO0n"}},96:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n(1),c=n.n(o),a=n(43),s=n.n(a),r=n(11),l=n(3),d=n(10),j=n(15),h=n(46),b=n.n(h),u="https://victorduco.com/api",m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(o.useState)([]),i=Object(j.a)(n,2),c=i[0],a=i[1],s=Object(o.useState)(!1),r=Object(j.a)(s,2),l=r[0],d=r[1],h=Object(o.useState)(null),m=Object(j.a)(h,2),x=m[0],p=m[1],g="".concat(u,"/").concat(e,"/").concat(t);return Object(o.useEffect)((function(){b.a.get(g).then((function(e){d(!0),a(e.data)})).catch((function(e){p(e)}))}),[g]),{error:x,isLoaded:l,data:c,setData:a}},x=n(20),p=n.n(x),g=n(9),_=n(16),O=n.n(_),v=(n(81),n(82),n(24)),f=n(47),y=n.n(f),w=function(e){var t=e.images.map((function(e){return Object(i.jsx)(v.Item,{original:u+e.imageX2,thumbnail:u+e.previewX1,width:"1288",height:"800",children:function(t){var n=t.ref,o=t.open;return Object(i.jsx)("img",{ref:n,onClick:o,src:u+e.previewX1})}})}));return t.length>0?Object(i.jsx)("div",{className:y.a.root,children:Object(i.jsx)(v.Gallery,{options:{preload:[3,3],fullscreenEl:!1,zoomEl:!1,shareEl:!1,tapToClose:!0},children:t})}):null},k=function(e){return e.gallery?e.body&&e.body.length>0?Object(i.jsxs)("div",{className:O.a.item,children:[Object(i.jsx)("div",{className:O.a.title,children:e.title}),Object(i.jsx)("div",{className:O.a.body,children:Object(i.jsx)(w,{images:e.body})})]}):"":Object(i.jsxs)("div",{className:O.a.item,children:[Object(i.jsx)("div",{className:O.a.title,children:e.title}),Object(i.jsx)("div",{className:O.a.body,dangerouslySetInnerHTML:{__html:e.body}})]})},N=function(){var e=Object(l.e)().id,t=m("case",e),n=t.data,o=t.error,c=t.isLoaded;t.setData;return null!==o?Object(i.jsxs)("div",{children:["Error: ",o.message]}):!c||Array.isArray(n)&&!n.length?Object(i.jsx)("div",{children:"loading"}):Object(i.jsxs)("div",{children:[Object(i.jsx)(d.a,{children:Object(i.jsx)("title",{children:"".concat(n.title," - Ducov")})}),Object(i.jsx)("div",{className:p.a.root}),Object(i.jsxs)("div",{className:"all_pages_container ".concat(p.a.content),children:[Object(i.jsx)("h1",{children:n.title}),n.caseInfoSection.slice(0,2).map((function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsx)("p",{children:e.body})]})}))]}),Object(i.jsx)(g.a,{start:"center center",end:"bottom center",pin:!0,pinSpacing:"margin",scrub:.5,children:Object(i.jsx)(g.b,{target:Object(i.jsx)("div",{className:p.a.imgSeparator,children:Object(i.jsx)("img",{src:"https://dummyimage.com/1200x600/00FF00/00FF00.png"})}),children:Object(i.jsx)(g.c,{to:{opacity:"1",scale:"0.75"},duration:.7,ease:"Power2.easeIn"})})}),Object(i.jsxs)("div",{className:"all_pages_container ".concat(p.a.content),children:[n.caseInfoSection.slice(2).map((function(e){return Object(i.jsx)(k,{title:e.title,body:e.body})})),Object(i.jsx)(k,{title:"Designs",gallery:"true",body:n.caseImage})]})]})},I=(n(94),n(13)),S=n.n(I),P=function(e,t){return Object(i.jsx)(r.c,{exact:!0,to:e,activeClassName:S.a.active,children:Object(i.jsx)("li",{children:t},e)},e)},C=function(){return[{link:"/",text:"Highlights"},{link:"/casestudies",text:"Case Studies"},{link:"/page/augmented-reality",text:"Augmented Reality"},{link:"/page/mentoring",text:"Mentoring"},{link:"/about",text:"About me"}]},A=function(){return[{link:"/",logo:"main"},{link:"{portPth}",logo:"main"},{link:"/casestudies/",logo:"allcases"},{link:"/study/:id",logo:"allcases"},{link:"/page/augmented-reality",logo:"ar"},{link:"/page/mentoring",logo:"mentoring"},{link:"/about",logo:"about"}]},D=function(){var e=C(),t=c.a.createRef(),n=e.map((function(e){return P(e.link,e.text)})),o=A().map((function(e){return Object(i.jsx)(l.a,{exact:!0,path:e.link,render:function(){return Object(i.jsx)("img",{src:""+"/icons/logos/".concat(e.logo,".svg")})}})})),a=Object(i.jsx)(r.a,{children:o});return Object(i.jsxs)("nav",{className:S.a.root,children:[Object(i.jsx)("div",{className:S.a.toggle,onClick:function(){t.current.classList.toggle(S.a.visible)},children:Object(i.jsx)("img",{src:"/icons/menu.svg"})}),Object(i.jsx)("a",{href:"http://"+window.location.host,className:S.a.logo,children:a}),Object(i.jsx)("ul",{className:S.a.menu,ref:t,children:n})]})},L=n(32),T=n.n(L),E=function(){return Object(i.jsxs)("footer",{className:T.a.root,children:[Object(i.jsx)("a",{href:"mailto:mail@dviktorducov.com",children:"mail@dviktorducov.com"}),Object(i.jsxs)("div",{className:T.a.smbuttons,children:[Object(i.jsx)("a",{href:"/about",children:"LinkedIn"}),Object(i.jsx)("a",{href:"/about",children:"Instagram"})]})]})},M=n(19),X=(n(95),n(49)),V=n.n(X),B=function(e){return Object(i.jsx)("div",{className:V.a.root,children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:e.title}),Object(i.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]})})},F=n(17),H=n.n(F),R=n(50),U=n.n(R),q=function(e){var t="100%";return e.width&&(t=e.width),Object(i.jsx)("button",{className:U.a.root,style:{width:t},children:e.text})},z=c.a.forwardRef((function(e,t){var n=u+e.prdX1,o=u+e.prdX2;return Object(i.jsxs)("div",{children:[Object(i.jsx)(M.b,{breakpoint:"mediumAndBelow",children:Object(i.jsx)(g.a,{start:"top bottom",end:"top 200px",scrub:.5,children:Object(i.jsx)(g.b,{target:Object(i.jsx)("div",{className:H.a.root,children:Object(i.jsx)(r.c,{exact:!0,to:"/study/".concat(e.id,"/"),children:Object(i.jsx)("div",{className:H.a.hlbox,children:Object(i.jsx)("img",{srcSet:"".concat(n," 1x, ").concat(o," 2x,"),src:n})})},e.id)}),children:Object(i.jsx)(g.c,{from:{opacity:"0.2",scale:"0.98"},duration:1.5,ease:"power2.inOut"})})})}),Object(i.jsx)(M.c,{breakpoint:"mediumAndBelow",children:Object(i.jsx)("div",{children:Object(i.jsx)(g.a,{start:"top top",end:"bottom -200px",pin:!0,scrub:.5,children:Object(i.jsx)(g.b,{target:Object(i.jsxs)(r.b,{to:"".concat(window.location.host,"/study/").concat(e.id,"/"),className:H.a.m_root,children:[Object(i.jsx)("div",{className:H.a.upper}),Object(i.jsx)("div",{className:H.a.lower,children:Object(i.jsxs)("h3",{children:["Validation of a P2P lending agregator business idea"," "]})})]}),children:Object(i.jsx)(g.c,{to:{opacity:"0.75",scale:"0.75"},duration:1,ease:"power4.inOut"})})})})})]})})),J=n(21),Y=n.n(J),G=function(){return Object(i.jsxs)("div",{className:Y.a.root,children:[Object(i.jsxs)("div",{className:Y.a.item,children:[Object(i.jsx)("h3",{children:"All Projects"}),Object(i.jsx)("p",{children:"Enchansing IDT internal tools with the consistent employee experience. Vitya is a designer and art director who loves to craft a good story. I do FinTech design"}),Object(i.jsx)(q,{text:"Show more",width:"180px"})]}),Object(i.jsxs)("div",{className:Y.a.item,children:[Object(i.jsx)("h3",{children:"Who is Viktor"}),Object(i.jsx)("p",{children:"Enchansing IDT internal tools with the consistent employee experience. Vitya is a designer and art director who loves to craft a good story. I do FinTech design"}),Object(i.jsx)(q,{text:"Show more",width:"180px"})]}),Object(i.jsxs)("div",{className:Y.a.item,children:[Object(i.jsx)("h3",{children:"QA Section"}),Object(i.jsx)("p",{children:"Enchansing IDT internal tools with the consistent employee experience. Vitya is a designer and art director who loves to craft a good story. I do FinTech design"}),Object(i.jsx)(q,{text:"Show more",width:"180px"})]})]})},Q=function(){var e=window.location.host.split(".");return e.length>=3?e[0]:"public"},W=function(){var e=m("highlights",Q()),t=e.data,n=e.error,o=e.isLoaded;if(null!==n)return Object(i.jsxs)("div",{children:["Error: ",n.message]});if(!o||Array.isArray(t)&&!t.length)return Object(i.jsx)("div",{});var c=t.customisation.highlight.map((function(e){return Object(i.jsx)(z,{prdX1:e.preview_deskX1,prdX2:e.preview_deskX2,id:e.id},e.id)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)(d.a,{children:Object(i.jsx)("title",{children:"Home - Ducov"})}),Object(i.jsx)(B,{title:t.customisation.intro_header,description:t.customisation.intro_description}),c,Object(i.jsx)(G,{})]})},K=n(25),Z=n.n(K),$=n(22),ee=n.n($),te=function(e){var t=e.onClick,n=ee.a.nonactive;return e.active&&(n=ee.a.active),Object(i.jsxs)("div",{className:"".concat(ee.a.root," ").concat(n),children:[Object(i.jsx)("button",{onClick:t,children:e.name}),Object(i.jsx)("div",{className:ee.a.dot,children:" "})]})},ne=function(e){var t=Object(o.useState)([]),n=Object(j.a)(t,2),c=n[0],a=n[1],s=Object(o.useState)([-1]),r=Object(j.a)(s,2),l=r[0],h=r[1],b=m("cases"),u=b.data,x=b.error,p=b.isLoaded,g=b.setData;if(Object(o.useEffect)((function(){0==c&&a(u)}),[u]),null!==x)return Object(i.jsxs)("div",{children:["Error: ",x.message]});if(!p||!u.length)return Object(i.jsx)("div",{});var _=u.map((function(e){return Object(i.jsx)(z,{prdX1:e.preview_deskX1,prdX2:e.preview_deskX2,id:e.id},e.id)})),O=[{name:"All studies",id:-1},{name:"FinTech",id:1},{name:"MedTech",id:2},{name:"Design System",id:3},{name:"Mobile",id:4},{name:"User Research",id:5}].map((function(e){var t=!1;return l==e.id&&(t=!0),Object(i.jsx)(te,{onClick:function(){return v(e.id)},name:e.name,active:t})})),v=function(e){-1!==e?(g(c.filter(function(e){return function(t){for(var n=t.tag,i=!1,o=0;o<n.length;o++)n[o].id===e&&(i=!0);return i}}(e))),h(e)):(g(c),h(e))};return Object(i.jsxs)("div",{className:Z.a.root,children:[Object(i.jsx)(d.a,{children:Object(i.jsx)("title",{children:"Case Studies - Ducov"})}),Object(i.jsxs)("div",{className:"all_pages_container ".concat(Z.a.title),children:[Object(i.jsx)("h1",{children:"Case Studies"}),Object(i.jsx)("div",{className:Z.a.filterlinks,children:O})]}),_,Object(i.jsx)(G,{})]})},ie=n(12),oe=n.n(ie),ce=n(26),ae=n.n(ce),se=function(e){return Object(i.jsx)("div",{className:ae.a.root,children:Object(i.jsx)("a",{href:e.link,children:Object(i.jsxs)("div",{className:ae.a.linkcontainer,children:[Object(i.jsx)("img",{className:ae.a.icon,src:e.icon,height:"28",width:"28"}),Object(i.jsx)("div",{children:e.text})]})})})},re=function(){return Object(i.jsxs)("div",{className:oe.a.root,children:[Object(i.jsx)(d.a,{children:Object(i.jsx)("title",{children:"About Me - Ducov"})}),Object(i.jsxs)("div",{className:oe.a.header,children:[Object(i.jsx)("div",{class:oe.a.item_photo,children:Object(i.jsx)("img",{class:oe.a.mainphoto,src:"/images/about.png",alt:""})}),Object(i.jsxs)("div",{class:oe.a.item_text,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Here's my story. Designer, father, mother"})}),Object(i.jsx)("div",{children:Object(i.jsx)("p",{children:"Hey, I'm Victor, a product designer based in Helsinki, Finland. Coming from a product management background, I firmly grasp the importance of applying human-centered design methods and processes to make informed decisions. I\u2019m passionate about participating in all phases of creating a product\u2014from discovery to delivery. I'm always trying to grow and learn something new."})}),Object(i.jsxs)("div",{class:oe.a.buttons,children:[Object(i.jsx)(se,{text:"LinkedIn",icon:"".concat("","/icons/soc/halo.png"),link:"https://www.linkedin.com/in/viktordyukov/"}),Object(i.jsx)(se,{text:"Instagram",icon:"".concat("","/icons/soc/love.png"),link:"https://www.instagram.com/victorducov/"}),Object(i.jsx)(se,{text:"Download CV",icon:"".concat("","/icons/soc/smirking.png"),link:"files/viktordyukov-cv.pdf"}),Object(i.jsx)(se,{text:"Send email",icon:"".concat("","/icons/soc/winking.png"),link:"mailto:me@viktorducov.com"})]})]})]}),Object(i.jsxs)("div",{className:"all_pages_container ".concat(oe.a.content),children:[Object(i.jsx)(k,{title:"Experience",body:"During the past 8+ years of working as a designer in diverse industries including FinTech, MedTech, SaaS, and Internal communication, I created UX for customers and users of companies from small startups to S&P 500 corporations. "}),Object(i.jsx)(k,{title:"Values",body:"I believe that the work I do should have a positive impact on people. There are more and more advanced technologies in the world, and my role as a designer is to create the bridge between people and this new world of innovation. "}),Object(i.jsx)(k,{title:"Hobbies",body:"I like coding. This website is the product of this hobby \u2014 I created it with Python (Django Rest API) and React. Now I\u2019m working on an AR project, a prototype of the app for Vuzix Smartglasses so I\u2019m learning to create apps for Android. And yes, I have a dream to find more hobbies that aren\u2019t behind the keyboard. "})]}),Object(i.jsx)("div",{className:oe.a.photos})]})},le=n(51),de=n.n(le),je=[{path:"/",Component:W},{path:"/casestudies/",Component:ne},{path:"/study/:id",Component:N},{path:"/about/",Component:re},{path:"/page/:purl",Component:function(e){var t=Object(l.e)().purl,n=m("page",t),o=n.data,c=n.error,a=n.isLoaded;n.setData;return null!==c?Object(i.jsxs)("div",{children:["Error: ",c.message]}):!a||Array.isArray(o)&&!o.length?Object(i.jsx)("div",{children:"loading"}):Object(i.jsxs)("div",{className:"".concat(de.a.root," all_pages_container"),children:[Object(i.jsx)(d.a,{children:Object(i.jsx)("title",{children:"".concat(o.title," - Ducov")})}),Object(i.jsx)("h1",{children:o.title}),Object(i.jsx)("div",{dangerouslySetInnerHTML:{__html:o.body}})]})}}],he={small:468,medium:560,large:1024,xlarge:1/0},be=function(){return Object(i.jsxs)(r.a,{children:[Object(i.jsx)(l.a,{path:"/",render:function(){return Object(i.jsx)(D,{},window.location.pathname)}}),Object(i.jsx)("div",{id:"body_content",className:"container",children:je.map((function(e){var t=e.path,n=e.Component;return Object(i.jsx)(l.a,{exact:!0,path:t,children:Object(i.jsx)("div",{className:"page",children:Object(i.jsx)(n,{},window.location.pathname)})},t)}))}),Object(i.jsx)(E,{})]})};t.default=be;s.a.render(Object(i.jsx)(M.a,{breakpoints:he,children:Object(i.jsx)(be,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.cf116f6b.chunk.js.map