(this.webpackJsonpv221=this.webpackJsonpv221||[]).push([[0],{12:function(e,t,n){e.exports={root:"aboutPage_root__33B6t",header:"aboutPage_header__272d5",mainphoto:"aboutPage_mainphoto__2UIoi",item_photo:"aboutPage_item_photo__3RcxN",item_text:"aboutPage_item_text__31ILX",buttons:"aboutPage_buttons__12sym",content:"aboutPage_content__2lKMQ"}},13:function(e,t,n){e.exports={root:"mainMenu_root__14Noo",toggle:"mainMenu_toggle__3otll",logo:"mainMenu_logo__2_DTK",menu:"mainMenu_menu__Skdps",visible:"mainMenu_visible___DWTm",active:"mainMenu_active__NmEuU"}},16:function(e,t,n){e.exports={item:"infoItem_item__KYJ_l",title:"infoItem_title__3rhC1",body:"infoItem_body__3GwHV"}},17:function(e,t,n){e.exports={root:"highlight_root__2Y9jY",hlbox:"highlight_hlbox__2rjr7",m_root:"highlight_m_root__1MCnl",upper:"highlight_upper__HL17H",lower:"highlight_lower__3qCcV",svgimg:"highlight_svgimg__AGhdW"}},20:function(e,t,n){e.exports={root:"linkSection_root__1llBA",item:"linkSection_item__2I7Gi"}},21:function(e,t,n){e.exports={root:"filterLink_root__ow_6v",active:"filterLink_active__3FNNq",dot:"filterLink_dot__2x_aU"}},24:function(e,t,n){e.exports={root:"studyPage_root__28qpd",header:"studyPage_header__3ydck",content:"studyPage_content__3Y3fE",imgSeparator:"studyPage_imgSeparator__tjna9"}},25:function(e,t,n){e.exports={root:"allStudiesPage_root__7LJjy",title:"allStudiesPage_title__2Q6ZL",filterlinks:"allStudiesPage_filterlinks__3Bzu1"}},26:function(e,t,n){e.exports={root:"socButton_root__3Ndf5",linkcontainer:"socButton_linkcontainer__3MAcv",icon:"socButton_icon__2ivzj"}},30:function(e,t,n){e.exports={root:"galleryView_root__2ELhF"}},33:function(e,t,n){e.exports={root:"footer_root__1s_BB",smbuttons:"footer_smbuttons__qnv9f"}},48:function(e,t,n){e.exports={root:"tags_root__2zw0l"}},50:function(e,t,n){e.exports={root:"hero_root__1b85R"}},51:function(e,t,n){e.exports={root:"mainButton_root__1-pWN"}},52:function(e,t,n){e.exports={root:"textPage_root__mV3Ti"}},95:function(e,t,n){},96:function(e,t,n){e.exports={title:"homePage_title__2oyQe",hero1:"homePage_hero1__3ZO0n"}},97:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n(1),c=n.n(o),a=n(44),s=n.n(a),r=n(11),l=n(3),d=n(10),j=n(15),h=n(47),b=n.n(h),u="https://victorduco.com",m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(o.useState)([]),i=Object(j.a)(n,2),c=i[0],a=i[1],s=Object(o.useState)(!1),r=Object(j.a)(s,2),l=r[0],d=r[1],h=Object(o.useState)(null),m=Object(j.a)(h,2),x=m[0],g=m[1],p="".concat(u,"/api/").concat(e,"/").concat(t);return console.log(p),Object(o.useEffect)((function(){b.a.get(p).then((function(e){d(!0),a(e.data)})).catch((function(e){g(e)}))}),[p]),{error:x,isLoaded:l,data:c,setData:a}},x=n(24),g=n.n(x),p=n(9),_=n(16),O=n.n(_),v=(n(82),n(83),n(23)),f=n(30),w=n.n(f),y=function(e){var t=e.images.map((function(e){return Object(i.jsx)(v.Item,{className:w.a.item,original:u+e.imageX2+".webp",thumbnail:u+e.previewX1+".webp",width:"1288",height:"800",children:function(t){var n=t.ref,o=t.open;return Object(i.jsx)("img",{ref:n,onClick:o,src:u+e.previewX1+".webp"})}})}));return t.length>0?Object(i.jsx)("div",{className:w.a.root,children:Object(i.jsx)(v.Gallery,{options:{preload:[3,3],fullscreenEl:!1,zoomEl:!1,shareEl:!1,tapToClose:!0},children:t})}):null},k=function(e){return e.gallery?e.body&&e.body.length>0?Object(i.jsxs)("div",{className:O.a.item,children:[Object(i.jsx)("div",{className:O.a.title,children:e.title}),Object(i.jsx)("div",{className:O.a.body,children:Object(i.jsx)(y,{images:e.body})})]}):"":Object(i.jsxs)("div",{className:O.a.item,children:[Object(i.jsx)("div",{className:O.a.title,children:e.title}),Object(i.jsx)("div",{className:O.a.body,dangerouslySetInnerHTML:{__html:e.body}})]})},N=n(48),I=n.n(N),S=function(e){var t=e.list.map((function(e){return Object(i.jsx)("div",{children:e.name})}));return Object(i.jsx)("div",{className:I.a.root,children:t})},P=function(e){var t=e.imgX1,n=e.imgX2;return Object(i.jsxs)("picture",{children:[Object(i.jsx)("source",{srcSet:"".concat(u).concat(t,".webp 1x, ").concat(u).concat(n,".webp 2x"),type:"image/webp"}),Object(i.jsx)("source",{srcSet:"".concat(u).concat(t," 1x, ").concat(u).concat(n,"ebp 2x"),type:"image/png"}),Object(i.jsx)("img",{})]})},X=function(){var e=Object(l.e)().id,t=m("case",e),n=t.data,o=t.error,c=t.isLoaded;t.setData;return null!==o?Object(i.jsxs)("div",{children:["Error: ",o.message]}):!c||Array.isArray(n)&&!n.length?Object(i.jsx)("div",{}):Object(i.jsxs)("div",{children:[Object(i.jsx)(d.a,{children:Object(i.jsx)("title",{children:"".concat(n.title," - Ducov")})}),Object(i.jsxs)("div",{className:"all_pages_container ".concat(g.a.header),children:[Object(i.jsx)(S,{list:n.tag}),Object(i.jsx)("h1",{children:n.title}),Object(i.jsx)("p",{children:n.description})]}),Object(i.jsx)(p.a,{start:"top bottom",end:"bottom center",pin:!1,scrub:.5,children:Object(i.jsx)(p.b,{target:Object(i.jsx)("div",{id:"imgSeparator",className:g.a.imgSeparator,children:Object(i.jsx)(P,{imgX1:n.separatorImg_deskX1,imgX2:n.separatorImg_deskX2})}),children:Object(i.jsx)(p.c,{from:{scale:"0.9",opacity:"0.1"},duration:1,ease:"Power3.easeOut"})})}),Object(i.jsxs)("div",{className:"all_pages_container ".concat(g.a.content),children:[n.caseInfoSection.map((function(e){return Object(i.jsx)(k,{title:e.title,body:e.body})})),Object(i.jsx)(k,{title:"Designs",gallery:"true",body:n.caseImage})]})]})},A=(n(95),n(13)),C=n.n(A),D=function(e,t){return Object(i.jsx)(r.c,{exact:!0,to:e,activeClassName:C.a.active,children:Object(i.jsx)("li",{children:t},e)},e)},L=function(){return[{link:"/",text:"Highlights"},{link:"/casestudies",text:"Case Studies"},{link:"/page/augmented-reality",text:"Augmented Reality"},{link:"/page/mentoring",text:"Mentoring"},{link:"/about",text:"About me"}]},T=function(){return[{link:"/",logo:"main"},{link:"{portPth}",logo:"main"},{link:"/casestudies/",logo:"allcases"},{link:"/study/:id",logo:"allcases"},{link:"/page/augmented-reality",logo:"ar"},{link:"/page/mentoring",logo:"mentoring"},{link:"/about",logo:"about"}]},E=function(){var e=L(),t=c.a.createRef(),n=e.map((function(e){return D(e.link,e.text)})),o=T().map((function(e){return Object(i.jsx)(l.a,{exact:!0,path:e.link,render:function(){return Object(i.jsx)("img",{src:""+"/icons/logos/".concat(e.logo,".svg")})}})})),a=Object(i.jsx)(r.a,{children:o});return Object(i.jsxs)("nav",{className:C.a.root,children:[Object(i.jsx)("div",{className:C.a.toggle,onClick:function(){t.current.classList.toggle(C.a.visible)},children:Object(i.jsx)("img",{src:"/icons/menu.svg"})}),Object(i.jsx)("a",{href:"http://"+window.location.host,className:C.a.logo,children:a}),Object(i.jsx)("ul",{className:C.a.menu,ref:t,children:n})]})},M=n(33),V=n.n(M),B=function(){return Object(i.jsxs)("footer",{className:V.a.root,children:[Object(i.jsx)("a",{href:"mailto:mail@victorduco.com",children:"mail@victorduco.com"}),Object(i.jsxs)("div",{className:V.a.smbuttons,children:[Object(i.jsx)("a",{href:"https://www.linkedin.com/in/victorducov/",children:"LinkedIn"}),Object(i.jsx)("a",{href:"https://www.instagram.com/victorducov/",children:"Instagram"})]})]})},H=n(19),R=(n(96),n(50)),F=n.n(R),z=function(e){return Object(i.jsx)("div",{className:F.a.root,children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:e.title}),Object(i.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]})})},U=n(17),q=n.n(U),G=c.a.forwardRef((function(e,t){return Object(i.jsxs)("div",{children:[Object(i.jsx)(H.b,{breakpoint:"mediumAndBelow",children:Object(i.jsx)(p.a,{start:"top bottom",end:"bottom center",scrub:.5,children:Object(i.jsx)(p.b,{target:Object(i.jsx)("div",{className:q.a.root,children:Object(i.jsx)(r.c,{exact:!0,to:"/study/".concat(e.id,"/"),children:Object(i.jsxs)("div",{className:q.a.hlbox,children:[Object(i.jsx)("img",{src:"".concat(u).concat(e.prsvg),className:q.a.svgimg}),Object(i.jsx)(P,{imgX1:e.prdX1,imgX2:e.prdX2})]})},e.id)}),children:Object(i.jsx)(p.c,{from:{opacity:"0",scale:"0.9"},duration:1,ease:"Power3.easeOut"})})})}),Object(i.jsx)(H.c,{breakpoint:"mediumAndBelow",children:Object(i.jsx)("div",{children:Object(i.jsx)(p.a,{start:"top top",end:"bottom -200px",pin:!0,scrub:.5,children:Object(i.jsx)(p.b,{target:Object(i.jsxs)(r.b,{to:"".concat(window.location.host,"/study/").concat(e.id,"/"),className:q.a.m_root,children:[Object(i.jsx)("div",{className:q.a.upper,style:{backgroundImage:"url('".concat(u).concat(e.prdX1,"')")}}),Object(i.jsx)("div",{className:q.a.lower,children:Object(i.jsxs)("h3",{children:["Validation of a P2P lending agregator business idea"," "]})})]}),children:Object(i.jsx)(p.c,{to:{opacity:"0.75",scale:"0.75"},duration:1,ease:"power4.inOut"})})})})})]})})),J=n(20),Q=n.n(J),W=n(51),Y=n.n(W),K=function(e){var t="100%";return e.width&&(t=e.width),Object(i.jsx)("button",{className:Y.a.root,style:{width:t},children:e.text})},Z=function(){return Object(i.jsxs)("div",{className:Q.a.root,children:[Object(i.jsxs)("div",{className:Q.a.item,children:[Object(i.jsx)("h3",{children:"All Projects"}),Object(i.jsx)("p",{children:"Enchansing IDT internal tools with the consistent employee experience. Vitya is a designer and art director who loves to craft a good story. I do FinTech design"}),Object(i.jsx)(K,{text:"Show more",width:"180px"})]}),Object(i.jsxs)("div",{className:Q.a.item,children:[Object(i.jsx)("h3",{children:"Who is Viktor"}),Object(i.jsx)("p",{children:"Enchansing IDT internal tools with the consistent employee experience. Vitya is a designer and art director who loves to craft a good story. I do FinTech design"}),Object(i.jsx)(K,{text:"Show more",width:"180px"})]}),Object(i.jsxs)("div",{className:Q.a.item,children:[Object(i.jsx)("h3",{children:"QA Section"}),Object(i.jsx)("p",{children:"Enchansing IDT internal tools with the consistent employee experience. Vitya is a designer and art director who loves to craft a good story. I do FinTech design"}),Object(i.jsx)(K,{text:"Show more",width:"180px"})]})]})},$=function(){var e=window.location.host.split(".");return e.length>=3?e[0]:"public"},ee=function(){var e=m("highlights",$()),t=e.data,n=e.error,o=e.isLoaded;if(null!==n)return Object(i.jsxs)("div",{children:["Error: ",n.message]});if(!o||Array.isArray(t)&&!t.length)return Object(i.jsx)("div",{});var c=t.customisation.highlight.map((function(e){return Object(i.jsx)(G,{prdX1:e.preview_deskX1,prdX2:e.preview_deskX2,prsvg:e.preview_svg_deskX2,id:e.id},e.id)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)(d.a,{children:Object(i.jsx)("title",{children:"Home - Ducov"})}),Object(i.jsx)(z,{title:t.customisation.intro_header,description:t.customisation.intro_description}),c,Object(i.jsx)(Z,{})]})},te=n(25),ne=n.n(te),ie=n(21),oe=n.n(ie),ce=function(e){var t=e.onClick,n=oe.a.nonactive;return e.active&&(n=oe.a.active),Object(i.jsxs)("div",{className:"".concat(oe.a.root," ").concat(n),children:[Object(i.jsx)("button",{onClick:t,children:e.name}),Object(i.jsx)("div",{className:oe.a.dot,children:" "})]})},ae=function(e){var t=Object(o.useState)([]),n=Object(j.a)(t,2),c=n[0],a=n[1],s=Object(o.useState)([-1]),r=Object(j.a)(s,2),l=r[0],h=r[1],b=m("cases",$()),u=b.data,x=b.error,g=b.isLoaded,p=b.setData;if(Object(o.useEffect)((function(){0==c&&a(u)}),[u]),null!==x)return Object(i.jsxs)("div",{children:["Error: ",x.message]});if(!g||!u.length)return Object(i.jsx)("div",{});var _=u.map((function(e){return Object(i.jsx)(G,{prdX1:e.preview_deskX1,prdX2:e.preview_deskX2,prsvg:e.preview_svg_deskX2,id:e.id},e.id)})),O=[{name:"All studies",id:-1},{name:"FinTech",id:1},{name:"MedTech",id:2},{name:"Design System",id:3},{name:"Mobile",id:4},{name:"User Research",id:5}].map((function(e){var t=!1;return l==e.id&&(t=!0),Object(i.jsx)(ce,{onClick:function(){return v(e.id)},name:e.name,active:t})})),v=function(e){-1!==e?(p(c.filter(function(e){return function(t){for(var n=t.tag,i=!1,o=0;o<n.length;o++)n[o].id===e&&(i=!0);return i}}(e))),h(e)):(p(c),h(e))};return Object(i.jsxs)("div",{className:ne.a.root,children:[Object(i.jsx)(d.a,{children:Object(i.jsx)("title",{children:"Case Studies - Ducov"})}),Object(i.jsxs)("div",{className:"all_pages_container ".concat(ne.a.title),children:[Object(i.jsx)("h1",{children:"Case Studies"}),Object(i.jsx)("div",{className:ne.a.filterlinks,children:O})]}),_,Object(i.jsx)(Z,{})]})},se=n(12),re=n.n(se),le=n(26),de=n.n(le),je=function(e){return Object(i.jsx)("div",{className:de.a.root,children:Object(i.jsx)("a",{href:e.link,children:Object(i.jsxs)("div",{className:de.a.linkcontainer,children:[Object(i.jsx)("img",{className:de.a.icon,src:e.icon,height:"28",width:"28"}),Object(i.jsx)("div",{children:e.text})]})})})},he=function(){return Object(i.jsxs)("div",{className:re.a.root,children:[Object(i.jsx)(d.a,{children:Object(i.jsx)("title",{children:"About Me - Ducov"})}),Object(i.jsxs)("div",{className:re.a.header,children:[Object(i.jsx)("div",{class:re.a.item_photo,children:Object(i.jsx)("img",{class:re.a.mainphoto,src:"/images/about.png",alt:""})}),Object(i.jsxs)("div",{class:re.a.item_text,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Here's my story. Designer, father, mother"})}),Object(i.jsx)("div",{children:Object(i.jsx)("p",{children:"Hey, I'm Victor, a product designer based in Helsinki, Finland. Coming from a product management background, I firmly grasp the importance of applying human-centered design methods and processes to make informed decisions. I\u2019m passionate about participating in all phases of creating a product\u2014from discovery to delivery. I'm always trying to grow and learn something new."})}),Object(i.jsxs)("div",{class:re.a.buttons,children:[Object(i.jsx)(je,{text:"LinkedIn",icon:"".concat("","/icons/soc/halo.png"),link:"https://www.linkedin.com/in/viktordyukov/"}),Object(i.jsx)(je,{text:"Instagram",icon:"".concat("","/icons/soc/love.png"),link:"https://www.instagram.com/victorducov/"}),Object(i.jsx)(je,{text:"Download CV",icon:"".concat("","/icons/soc/smirking.png"),link:"files/viktordyukov-cv.pdf"}),Object(i.jsx)(je,{text:"Send email",icon:"".concat("","/icons/soc/winking.png"),link:"mailto:me@viktorducov.com"})]})]})]}),Object(i.jsxs)("div",{className:"all_pages_container ".concat(re.a.content),children:[Object(i.jsx)(k,{title:"Experience",body:"During the past 8+ years of working as a designer in diverse industries including FinTech, MedTech, SaaS, and Internal communication, I created UX for customers and users of companies from small startups to S&P 500 corporations. "}),Object(i.jsx)(k,{title:"Values",body:"I believe that the work I do should have a positive impact on people. There are more and more advanced technologies in the world, and my role as a designer is to create the bridge between people and this new world of innovation. "}),Object(i.jsx)(k,{title:"Hobbies",body:"I like coding. This website is the product of this hobby \u2014 I created it with Python (Django Rest API) and React. Now I\u2019m working on an AR project, a prototype of the app for Vuzix Smartglasses so I\u2019m learning to create apps for Android. And yes, I have a dream to find more hobbies that aren\u2019t behind the keyboard. "})]}),Object(i.jsx)("div",{className:re.a.photos})]})},be=n(52),ue=n.n(be),me=[{path:"/",Component:ee},{path:"/casestudies/",Component:ae},{path:"/study/:id",Component:X},{path:"/about/",Component:he},{path:"/page/:purl",Component:function(e){var t=Object(l.e)().purl,n=m("page",t),o=n.data,c=n.error,a=n.isLoaded;n.setData;return null!==c?Object(i.jsxs)("div",{children:["Error: ",c.message]}):!a||Array.isArray(o)&&!o.length?Object(i.jsx)("div",{}):Object(i.jsxs)("div",{className:"".concat(ue.a.root," all_pages_container"),children:[Object(i.jsx)(d.a,{children:Object(i.jsx)("title",{children:"".concat(o.title," - Ducov")})}),Object(i.jsx)("h1",{children:o.title}),Object(i.jsx)("div",{dangerouslySetInnerHTML:{__html:o.body}})]})}}],xe={small:468,medium:560,large:1024,xlarge:1/0},ge=function(){return Object(i.jsxs)(r.a,{children:[Object(i.jsx)(l.a,{path:"/",render:function(){return Object(i.jsx)(E,{},window.location.pathname)}}),Object(i.jsx)("div",{id:"body_content",className:"container",children:me.map((function(e){var t=e.path,n=e.Component;return Object(i.jsx)(l.a,{exact:!0,path:t,children:Object(i.jsx)("div",{className:"page",children:Object(i.jsx)(n,{},window.location.pathname)})},t)}))}),Object(i.jsx)(B,{})]})};t.default=ge;s.a.render(Object(i.jsx)(H.a,{breakpoints:xe,children:Object(i.jsx)(ge,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.0ac52695.chunk.js.map