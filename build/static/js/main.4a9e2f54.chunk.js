(this.webpackJsonpv221=this.webpackJsonpv221||[]).push([[0],{11:function(e,t,n){e.exports={root:"aboutPage_root__33B6t",header:"aboutPage_header__272d5",mainphoto:"aboutPage_mainphoto__2UIoi",item_photo:"aboutPage_item_photo__3RcxN",item_text:"aboutPage_item_text__31ILX",buttons:"aboutPage_buttons__12sym",content:"aboutPage_content__2lKMQ"}},12:function(e,t,n){e.exports={root:"mainMenu_root__14Noo",toggle:"mainMenu_toggle__3otll",logo:"mainMenu_logo__2_DTK",menu:"mainMenu_menu__Skdps",visible:"mainMenu_visible___DWTm",active:"mainMenu_active__NmEuU"}},15:function(e,t,n){e.exports={item:"infoItem_item__KYJ_l",title:"infoItem_title__3rhC1",body:"infoItem_body__3GwHV"}},16:function(e,t,n){e.exports={root:"highlight_root__2Y9jY",hlbox:"highlight_hlbox__2rjr7",svgimg:"highlight_svgimg__AGhdW",m_root:"highlight_m_root__1MCnl",upper:"highlight_upper__HL17H",lower:"highlight_lower__3qCcV"}},19:function(e,t,n){e.exports={root:"linkSection_root__1llBA",item:"linkSection_item__2I7Gi"}},20:function(e,t,n){e.exports={root:"filterLink_root__ow_6v",active:"filterLink_active__3FNNq",dot:"filterLink_dot__2x_aU"}},24:function(e,t,n){e.exports={root:"allStudiesPage_root__7LJjy",title:"allStudiesPage_title__2Q6ZL",filterlinks:"allStudiesPage_filterlinks__3Bzu1","example-appear":"allStudiesPage_example-appear__2Q0Jm","example-appear-active":"allStudiesPage_example-appear-active__AFvpi"}},25:function(e,t,n){e.exports={root:"socButton_root__3Ndf5",linkcontainer:"socButton_linkcontainer__3MAcv",icon:"socButton_icon__2ivzj"}},28:function(e,t,n){e.exports={root:"studyPage_root__28qpd",header:"studyPage_header__3ydck",content:"studyPage_content__3Y3fE"}},29:function(e,t,n){e.exports={root:"galleryView_root__2ELhF"}},32:function(e,t,n){e.exports={root:"footer_root__1s_BB",smbuttons:"footer_smbuttons__qnv9f"}},48:function(e,t,n){e.exports={root:"tags_root__2zw0l"}},49:function(e,t,n){e.exports={root:"separatorImg_root__1oTrM"}},51:function(e,t,n){e.exports={root:"hero_root__1b85R"}},52:function(e,t,n){e.exports={root:"mainButton_root__1-pWN"}},53:function(e,t,n){e.exports={root:"textPage_root__mV3Ti"}},96:function(e,t,n){},97:function(e,t,n){e.exports={title:"homePage_title__2oyQe",hero1:"homePage_hero1__3ZO0n"}},98:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n(1),c=n.n(o),a=n(44),r=n.n(a),s=n(10),l=n(3),d=n(9),j=n(17),u=n(47),h=n.n(u),m="https://victorduco.com",b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(o.useState)([]),i=Object(j.a)(n,2),c=i[0],a=i[1],r=Object(o.useState)(!1),s=Object(j.a)(r,2),l=s[0],d=s[1],u=Object(o.useState)(null),b=Object(j.a)(u,2),g=b[0],p=b[1],x="".concat(m,"/api/").concat(e,"/").concat(t);return console.log(x),Object(o.useEffect)((function(){h.a.get(x).then((function(e){d(!0),a(e.data)})).catch((function(e){p(e)}))}),[x]),{error:g,isLoaded:l,data:c,setData:a}},g=n(28),p=n.n(g),x=n(15),_=n.n(x),O=(n(82),n(83),n(22)),v=n(29),f=n.n(v),k=function(e){var t=e.images.map((function(e){return Object(i.jsx)(O.Item,{className:f.a.item,original:m+e.imageX2+".webp",thumbnail:m+e.previewX1+".webp",width:"1288",height:"800",children:function(t){var n=t.ref,o=t.open;return Object(i.jsx)("img",{ref:n,onClick:o,src:m+e.previewX1+".webp"})}})}));return t.length>0?Object(i.jsx)("div",{className:f.a.root,children:Object(i.jsx)(O.Gallery,{options:{preload:[3,3],fullscreenEl:!1,zoomEl:!1,shareEl:!1,tapToClose:!0},children:t})}):null},y=function(e){return e.gallery?e.body&&e.body.length>0?Object(i.jsxs)("div",{className:_.a.item,children:[Object(i.jsx)("div",{className:_.a.title,children:e.title}),Object(i.jsx)("div",{className:_.a.body,children:Object(i.jsx)(k,{images:e.body})})]}):"":Object(i.jsxs)("div",{className:_.a.item,children:[Object(i.jsx)("div",{className:_.a.title,children:e.title}),Object(i.jsx)("div",{className:_.a.body,dangerouslySetInnerHTML:{__html:e.body}})]})},w=n(48),N=n.n(w),I=function(e){var t=e.list.map((function(e){return Object(i.jsx)("div",{children:e.name})}));return Object(i.jsx)("div",{className:"".concat(N.a.root),children:t})},X=n(49),S=n.n(X),P=function(e){var t=e.imgX1,n=e.imgX2;return Object(i.jsxs)("picture",{children:[Object(i.jsx)("source",{srcSet:"".concat(m).concat(t,".webp 1x, ").concat(m).concat(n,".webp 2x"),type:"image/webp"}),Object(i.jsx)("source",{srcSet:"".concat(m).concat(t," 1x, ").concat(m).concat(n," 2x"),type:"image/png"}),Object(i.jsx)("img",{})]})},A=n(14),C=n(23),L=function(e){var t=e.imgX1,n=e.imgX2;A.a.registerPlugin(C.a);var c=Object(o.useRef)(null);return Object(o.useEffect)((function(){A.a.timeline({scrollTrigger:{trigger:c.current,start:"top bottom",end:"bottom bottom",markers:false,scrub:!0}}).from(c.current,{scale:"0.9",opacity:"0.1",ease:"power3.easeOut"})}),[]),Object(i.jsx)("div",{ref:c,className:S.a.root,children:Object(i.jsx)(P,{imgX1:t,imgX2:n})})},M=function(){var e=Object(l.e)().id,t=b("case",e),n=t.data,o=t.error,c=t.isLoaded;t.setData;return null!==o?Object(i.jsxs)("div",{children:["Error: ",o.message]}):!c||Array.isArray(n)&&!n.length?Object(i.jsx)("div",{}):Object(i.jsxs)("div",{children:[Object(i.jsx)(d.a,{children:Object(i.jsx)("title",{children:"".concat(n.title," - Ducov")})}),Object(i.jsxs)("div",{className:"all_pages_container ".concat(p.a.header),children:[Object(i.jsx)(I,{list:n.tag}),Object(i.jsx)("h1",{children:n.title}),Object(i.jsx)("p",{children:n.description})]}),Object(i.jsx)(L,{imgX1:n.separatorImg_deskX1,imgX2:n.separatorImg_deskX2}),Object(i.jsxs)("div",{className:"all_pages_container ".concat(p.a.content),children:[n.caseInfoSection.map((function(e){return Object(i.jsx)(y,{title:e.title,body:e.body})})),Object(i.jsx)(y,{title:"Designs",gallery:"true",body:n.caseImage})]})]})},T=(n(96),n(12)),D=n.n(T),E=function(e,t){return Object(i.jsx)(s.c,{exact:!0,to:e,activeClassName:D.a.active,children:Object(i.jsx)("li",{children:t},e)},e)},B=function(){return[{link:"/",text:"Highlights"},{link:"/casestudies",text:"Case Studies"},{link:"/page/augmented-reality",text:"Augmented Reality"},{link:"/page/mentoring",text:"Mentoring"},{link:"/about",text:"About me"}]},H=function(){return[{link:"/",logo:"main"},{link:"{portPth}",logo:"main"},{link:"/casestudies/",logo:"allcases"},{link:"/study/:id",logo:"allcases"},{link:"/page/augmented-reality",logo:"ar"},{link:"/page/mentoring",logo:"mentoring"},{link:"/about",logo:"about"}]},R=function(){var e=B(),t=c.a.createRef(),n=e.map((function(e){return E(e.link,e.text)})),o=H().map((function(e){return Object(i.jsx)(l.a,{exact:!0,path:e.link,render:function(){return Object(i.jsx)("img",{src:""+"/icons/logos/".concat(e.logo,".svg")})}})})),a=Object(i.jsx)(s.a,{children:o});return Object(i.jsxs)("nav",{className:D.a.root,children:[Object(i.jsx)("div",{className:D.a.toggle,onClick:function(){t.current.classList.toggle(D.a.visible)},children:Object(i.jsx)("img",{src:"/icons/menu.svg"})}),Object(i.jsx)("a",{href:"",className:D.a.logo,children:a}),Object(i.jsx)("ul",{className:D.a.menu,ref:t,children:n})]})},V=n(32),F=n.n(V),U=function(){return Object(i.jsxs)("footer",{className:F.a.root,children:[Object(i.jsx)("a",{href:"mailto:mail@victorduco.com",children:"mail@victorduco.com"}),Object(i.jsxs)("div",{className:F.a.smbuttons,children:[Object(i.jsx)("a",{href:"https://www.linkedin.com/in/victorducov/",children:"LinkedIn"}),Object(i.jsx)("a",{href:"https://www.instagram.com/victorducov/",children:"Instagram"})]})]})},z=n(18),J=(n(97),n(51)),q=n.n(J),G=function(e){return Object(i.jsx)("div",{className:q.a.root,children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:e.title}),Object(i.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]})})},Q=n(16),Y=n.n(Q),K=n(52),W=n.n(K),Z=function(e){var t="44px",n="100%";return e.height&&(t=e.height),e.width&&(n=e.width),Object(i.jsx)("a",{href:e.link,children:Object(i.jsxs)("div",{className:W.a.root,style:{width:n,height:t},children:[Object(i.jsx)("div",{children:e.text}),Object(i.jsx)("img",{src:"/icons/button_arrow.svg"})]})})},$=c.a.forwardRef((function(e,t){A.a.registerPlugin(C.a);var n=Object(o.useRef)(null),c=Object(o.useRef)(null),a=Object(o.useRef)(null);return Object(o.useEffect)((function(){console.log(n.current),A.a.timeline({scrollTrigger:{trigger:n.current,start:"top bottom",end:"bottom bottom",markers:false,scrub:1}}).from(n.current,{opacity:"0",scale:"0.9",ease:"power3.easeOut"}).from(c.current,{opacity:"-1",ease:"expo.easeOut"},"<")}),[]),Object(o.useEffect)((function(){A.a.from(a.current,{opacity:"0",scale:"1.1",ease:"power4.easeOut",scrollTrigger:{trigger:a.current,start:"top bottom",end:"bottom center",markers:false,scrub:.5}})}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)(z.b,{breakpoint:"mediumAndBelow",children:Object(i.jsx)("div",{className:Y.a.root,ref:n,children:Object(i.jsx)(s.c,{exact:!0,to:"/study/".concat(e.id,"/"),children:Object(i.jsxs)("div",{className:Y.a.hlbox,children:[Object(i.jsx)("div",{ref:c,children:Object(i.jsx)("img",{src:"".concat(m).concat(e.prsvg),className:Y.a.svgimg})}),Object(i.jsx)(P,{imgX1:e.prdX1,imgX2:e.prdX2})]})},e.id)})}),Object(i.jsx)(z.c,{breakpoint:"mediumAndBelow",children:Object(i.jsxs)(s.b,{to:"/study/".concat(e.id,"/"),className:Y.a.m_root,children:[Object(i.jsx)("div",{className:Y.a.upper,ref:a,style:{backgroundImage:"url('".concat(m).concat(e.prdX2,"')"),backgroundPosition:"".concat(e.prBgPos," 0%")}}),Object(i.jsxs)("div",{className:Y.a.lower,children:[Object(i.jsx)("h3",{children:e.title}),Object(i.jsx)(Z,{text:"Open study",height:"44px"})]})]})})]})})),ee=n(19),te=n.n(ee),ne=function(){return Object(i.jsxs)("div",{className:te.a.root,children:[Object(i.jsxs)("div",{className:te.a.item,children:[Object(i.jsx)("h3",{children:"All Studies"}),Object(i.jsx)("p",{children:"I believe that flexibility is one of the main skills for a UX designer. Check my experience in working in different set-ups and on different types of designs tasks."}),Object(i.jsx)(Z,{link:"/casestudies",text:"Show all",width:"180px"})]}),Object(i.jsxs)("div",{className:te.a.item,children:[Object(i.jsx)("h3",{children:"About me"}),Object(i.jsx)("p",{children:"Stuff that is not related to work. Here you can find more about my values, life goals, and interests that give me the motivation to do what I do every day."}),Object(i.jsx)(Z,{link:"/about",text:"Open page",width:"180px"})]}),Object(i.jsxs)("div",{className:te.a.item,children:[Object(i.jsx)("h3",{children:"Mentoring"}),Object(i.jsx)("p",{children:"This world is built on mutual help to each other. I like to help beginner designers. And this helps me to rethink some foundation bricks of my knowledge."}),Object(i.jsx)(Z,{link:"/page/mentoring",text:"Learn more",width:"180px"})]})]})},ie=function(){var e=window.location.host.split(".");return e.length>=3?e[0]:"public"},oe=function(){var e=b("highlights",ie()),t=e.data,n=e.error,o=e.isLoaded;if(null!==n)return Object(i.jsxs)("div",{children:["Error: ",n.message]});if(!o||Array.isArray(t)&&!t.length)return Object(i.jsx)("div",{});var c=t.customisation.highlight.map((function(e){return Object(i.jsx)($,{prdX1:e.preview_deskX1,prdX2:e.preview_deskX2,prsvg:e.preview_svg_deskX2,prBgPos:e.preview_bgposition,tags:e.tag,title:e.title,id:e.id},e.id)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)(d.a,{children:Object(i.jsx)("title",{children:"Home - Ducov"})}),Object(i.jsx)(G,{title:t.customisation.intro_header,description:t.customisation.intro_description}),c,Object(i.jsx)(ne,{})]})},ce=n(24),ae=n.n(ce),re=n(20),se=n.n(re),le=function(e){var t=e.onClick,n=se.a.nonactive;return e.active&&(n=se.a.active),Object(i.jsxs)("div",{className:"".concat(se.a.root," ").concat(n),children:[Object(i.jsx)("button",{onClick:t,children:e.name}),Object(i.jsx)("div",{className:se.a.dot,children:" "})]})},de=function(e){return function(t){if(-1==e)return!0;for(var n=t.tag,i=!1,o=0;o<n.length;o++)n[o].id===e&&(i=!0);return i}},je=function(e){var t=Object(o.useState)([-1]),n=Object(j.a)(t,2),c=n[0],a=n[1],r=b("cases",ie()),s=r.data,l=r.error,u=r.isLoaded;r.setData;if(null!==l)return Object(i.jsxs)("div",{children:["Error: ",l.message]});if(!u||!s.length)return Object(i.jsx)("div",{});var h=[{name:"All studies",id:-1},{name:"FinTech",id:1},{name:"MedTech",id:2},{name:"Design System",id:3},{name:"Mobile",id:4},{name:"User Research",id:5}].map((function(e){var t=c==e.id;return Object(i.jsx)(le,{onClick:function(){return a(e.id)},name:e.name,active:t})}));console.log(s.filter(de(c)));var m=s.filter(de(c)).map((function(e){return Object(i.jsx)($,{prdX1:e.preview_deskX1,prdX2:e.preview_deskX2,prsvg:e.preview_svg_deskX2,prBgPos:e.preview_bgposition,tags:e.tag,title:e.title,id:e.id},"".concat(c,"_").concat(e.id))}));return Object(i.jsxs)("div",{className:ae.a.root,children:[Object(i.jsx)(d.a,{children:Object(i.jsx)("title",{children:"Case Studies - Ducov"})}),Object(i.jsxs)("div",{className:"all_pages_container ".concat(ae.a.title),children:[Object(i.jsx)("h1",{children:"Case Studies"}),Object(i.jsx)("div",{className:ae.a.filterlinks,children:h})]}),m,Object(i.jsx)(ne,{})]})},ue=n(11),he=n.n(ue),me=n(25),be=n.n(me),ge=function(e){return Object(i.jsx)("div",{className:be.a.root,children:Object(i.jsx)("a",{href:e.link,children:Object(i.jsxs)("div",{className:be.a.linkcontainer,children:[Object(i.jsx)("img",{className:be.a.icon,src:e.icon,height:"28",width:"28"}),Object(i.jsx)("div",{children:e.text})]})})})},pe=function(){return Object(i.jsxs)("div",{className:he.a.root,children:[Object(i.jsx)(d.a,{children:Object(i.jsx)("title",{children:"About Me - Ducov"})}),Object(i.jsxs)("div",{className:he.a.header,children:[Object(i.jsx)("div",{class:he.a.item_photo,children:Object(i.jsx)("img",{class:he.a.mainphoto,src:"/images/about.png",alt:""})}),Object(i.jsxs)("div",{class:he.a.item_text,children:[Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Here's my story. Designer, father, mother"})}),Object(i.jsx)("div",{children:Object(i.jsx)("p",{children:"Hey, I'm Victor, a product designer based in Helsinki, Finland. Coming from a product management background, I firmly grasp the importance of applying human-centered design methods and processes to make informed decisions. I\u2019m passionate about participating in all phases of creating a product\u2014from discovery to delivery. I'm always trying to grow and learn something new."})}),Object(i.jsxs)("div",{class:he.a.buttons,children:[Object(i.jsx)(ge,{text:"LinkedIn",icon:"".concat("","/icons/soc/halo.png"),link:"https://www.linkedin.com/in/viktordyukov/"}),Object(i.jsx)(ge,{text:"Instagram",icon:"".concat("","/icons/soc/love.png"),link:"https://www.instagram.com/victorducov/"}),Object(i.jsx)(ge,{text:"Download CV",icon:"".concat("","/icons/soc/smirking.png"),link:"files/viktordyukov-cv.pdf"}),Object(i.jsx)(ge,{text:"Send email",icon:"".concat("","/icons/soc/winking.png"),link:"mailto:me@viktorducov.com"})]})]})]}),Object(i.jsxs)("div",{className:"all_pages_container ".concat(he.a.content),children:[Object(i.jsx)(y,{title:"Experience",body:"During the past 8+ years of working as a designer in diverse industries including FinTech, MedTech, SaaS, and Internal communication, I created UX for customers and users of companies from small startups to S&P 500 corporations. "}),Object(i.jsx)(y,{title:"Values",body:"I believe that the work I do should have a positive impact on people. There are more and more advanced technologies in the world, and my role as a designer is to create the bridge between people and this new world of innovation. "}),Object(i.jsx)(y,{title:"Hobbies",body:"I like coding. This website is the product of this hobby \u2014 I created it with Python (Django Rest API) and React. Now I\u2019m working on an AR project, a prototype of the app for Vuzix Smartglasses so I\u2019m learning to create apps for Android. And yes, I have a dream to find more hobbies that aren\u2019t behind the keyboard. "})]}),Object(i.jsx)("div",{className:he.a.photos})]})},xe=n(53),_e=n.n(xe),Oe=[{path:"/",Component:oe},{path:"/casestudies/",Component:je},{path:"/study/:id",Component:M},{path:"/about/",Component:pe},{path:"/page/:purl",Component:function(e){var t=Object(l.e)().purl,n=b("page",t),o=n.data,c=n.error,a=n.isLoaded;n.setData;return null!==c?Object(i.jsxs)("div",{children:["Error: ",c.message]}):!a||Array.isArray(o)&&!o.length?Object(i.jsx)("div",{}):Object(i.jsxs)("div",{className:"".concat(_e.a.root," all_pages_container"),children:[Object(i.jsx)(d.a,{children:Object(i.jsx)("title",{children:"".concat(o.title," - Ducov")})}),Object(i.jsx)("h1",{children:o.title}),Object(i.jsx)("div",{dangerouslySetInnerHTML:{__html:o.body}})]})}}],ve={small:468,medium:560,large:1024,xlarge:1/0},fe=function(){return Object(i.jsxs)(s.a,{children:[Object(i.jsx)(l.a,{path:"/",render:function(){return Object(i.jsx)(R,{},window.location.pathname)}}),Object(i.jsx)("div",{id:"body_content",className:"container",children:Oe.map((function(e){var t=e.path,n=e.Component;return Object(i.jsx)(l.a,{exact:!0,path:t,children:Object(i.jsx)("div",{className:"page",children:Object(i.jsx)(n,{},window.location.pathname)})},t)}))}),Object(i.jsx)(U,{})]})};t.default=fe;r.a.render(Object(i.jsx)(z.a,{breakpoints:ve,children:Object(i.jsx)(fe,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.4a9e2f54.chunk.js.map