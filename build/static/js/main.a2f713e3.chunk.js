(this.webpackJsonpv221=this.webpackJsonpv221||[]).push([[0],{12:function(e,t,i){e.exports={root:"aboutPage_root__33B6t",header:"aboutPage_header__272d5",mainphoto:"aboutPage_mainphoto__2UIoi",item_photo:"aboutPage_item_photo__3RcxN",item_text:"aboutPage_item_text__31ILX",buttons:"aboutPage_buttons__12sym",content:"aboutPage_content__2lKMQ"}},13:function(e,t,i){e.exports={root:"mainMenu_root__14Noo",toggle:"mainMenu_toggle__3otll",logo:"mainMenu_logo__2_DTK",menu:"mainMenu_menu__Skdps",visible:"mainMenu_visible___DWTm",active:"mainMenu_active__NmEuU"}},16:function(e,t,i){e.exports={root:"highlight_root__2Y9jY",hlbox:"highlight_hlbox__2rjr7",svgimg:"highlight_svgimg__AGhdW",m_root:"highlight_m_root__1MCnl",upper:"highlight_upper__HL17H",lower:"highlight_lower__3qCcV"}},17:function(e,t,i){e.exports={item:"infoItem_item__KYJ_l",title:"infoItem_title__3rhC1",body:"infoItem_body__3GwHV"}},20:function(e,t,i){e.exports={root:"linkSection_root__1llBA",item:"linkSection_item__2I7Gi"}},21:function(e,t,i){e.exports={root:"filterLink_root__ow_6v",active:"filterLink_active__3FNNq",dot:"filterLink_dot__2x_aU"}},24:function(e,t,i){e.exports={root:"galleryView_root__2ELhF",img_container:"galleryView_img_container__36H_f"}},25:function(e,t,i){e.exports={root:"allStudiesPage_root__7LJjy",title:"allStudiesPage_title__2Q6ZL",filterlinks:"allStudiesPage_filterlinks__3Bzu1"}},26:function(e,t,i){e.exports={root:"socButton_root__3Ndf5",linkcontainer:"socButton_linkcontainer__3MAcv",icon:"socButton_icon__2ivzj"}},31:function(e,t,i){e.exports={root:"footer_root__1s_BB",smbuttons:"footer_smbuttons__qnv9f"}},32:function(e,t,i){e.exports={root:"studyPage_root__28qpd",header:"studyPage_header__3ydck",content:"studyPage_content__3Y3fE"}},47:function(e,t,i){e.exports={root:"hero_root__1b85R"}},49:function(e,t,i){e.exports={root:"mainButton_root__1-pWN"}},50:function(e,t,i){},51:function(e,t,i){e.exports={root:"tags_root__2zw0l"}},52:function(e,t,i){e.exports={root:"separatorImg_root__1oTrM"}},53:function(e,t,i){e.exports={root:"textPage_root__mV3Ti"}},59:function(e,t,i){},68:function(e,t,i){e.exports={title:"homePage_title__2oyQe",hero1:"homePage_hero1__3ZO0n"}},99:function(e,t,i){"use strict";i.r(t);var n=i(1),o=i.n(n),c=i(43),a=i.n(c),r=i(10),s=i(3),l=(i(59),i(13)),d=i.n(l),j=i(0),u=function(e,t){return Object(j.jsx)(r.c,{exact:!0,to:e,activeClassName:d.a.active,children:Object(j.jsx)("li",{children:t},e)},e)},b=function(){return[{link:"/",text:"Highlights"},{link:"/casestudies",text:"Case Studies"},{link:"/page/augmented-reality",text:"Augmented Reality"},{link:"/page/deliverables",text:"Deliverables"},{link:"/about",text:"About me"}]},h=function(){return[{link:"/",logo:"main"},{link:"{portPth}",logo:"main"},{link:"/casestudies/",logo:"allcases"},{link:"/study/:id",logo:"allcases"},{link:"/page/augmented-reality",logo:"ar"},{link:"/page/deliverables",logo:"deliverables"},{link:"/about",logo:"about"}]},m=function(){var e=b(),t=o.a.createRef(),i=e.map((function(e){return u(e.link,e.text)})),n=h().map((function(e){return Object(j.jsx)(s.a,{exact:!0,path:e.link,render:function(){return Object(j.jsx)("img",{src:""+"/icons/logos/".concat(e.logo,".svg")})}})})),c=Object(j.jsx)(r.a,{children:Object(j.jsxs)(s.c,{children:[n,Object(j.jsx)(s.a,{children:Object(j.jsx)("img",{src:"/icons/logos/main.svg"})})]})});return Object(j.jsxs)("nav",{className:d.a.root,children:[Object(j.jsx)("div",{className:d.a.toggle,onClick:function(){t.current.classList.toggle(d.a.visible)},children:Object(j.jsx)("img",{src:"/icons/menu.svg"})}),Object(j.jsx)("a",{href:"/",className:d.a.logo,children:c}),Object(j.jsx)("ul",{className:d.a.menu,ref:t,children:i})]})},g=i(31),p=i.n(g),x=function(){return Object(j.jsxs)("footer",{className:p.a.root,children:[Object(j.jsx)("a",{href:"mailto:mail@victorduco.com",children:"mail@victorduco.com"}),Object(j.jsxs)("div",{className:p.a.smbuttons,children:[Object(j.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/victorducov/",children:"LinkedIn"}),Object(j.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/victorducov/",children:"Instagram"})]})]})},_=i(19),O=i(8),f=(i(68),i(47)),v=i.n(f),y=function(e){return Object(j.jsx)("div",{className:v.a.root,children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]})})},k=i(16),w=i.n(k),N=i(11),I=i(48),X=i.n(I),S="https://victorduco.com",P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=Object(n.useState)([]),o=Object(N.a)(i,2),c=o[0],a=o[1],r=Object(n.useState)(!1),s=Object(N.a)(r,2),l=s[0],d=s[1],j=Object(n.useState)(null),u=Object(N.a)(j,2),b=u[0],h=u[1],m="".concat(S,"/api/").concat(e,"/").concat(t);return console.log(m),Object(n.useEffect)((function(){X.a.get(m).then((function(e){d(!0),a(e.data)})).catch((function(e){h(e)}))}),[m]),{error:b,isLoaded:l,data:c,setData:a}},C=function(e){var t=e.imgX1,i=e.imgX2;return Object(j.jsxs)("picture",{children:[Object(j.jsx)("source",{srcSet:"".concat(S).concat(t,".webp 1x, ").concat(S).concat(i,".webp 2x"),type:"image/webp"}),Object(j.jsx)("source",{srcSet:"".concat(S).concat(t," 1x, ").concat(S).concat(i," 2x"),type:"image/png"}),Object(j.jsx)("img",{})]})},T=i(49),A=i.n(T),D=function(e){var t="44px",i="100%";return e.height&&(t=e.height),e.width&&(i=e.width),Object(j.jsx)("a",{href:e.link,children:Object(j.jsxs)("div",{className:A.a.root,style:{width:i,height:t},children:[Object(j.jsx)("div",{children:e.text}),Object(j.jsx)("img",{src:"/icons/button_arrow.svg"})]})})},L=i(15),M=i(22),H=o.a.forwardRef((function(e,t){L.a.registerPlugin(M.a);var i=Object(n.useRef)(null),o=Object(n.useRef)(null),c=Object(n.useRef)(null);return Object(n.useEffect)((function(){console.log(i.current),L.a.timeline({scrollTrigger:{trigger:i.current,start:"top bottom",end:"bottom bottom",markers:false,scrub:1}}).fromTo(i.current,{opacity:"0",scale:"0.9"},{opacity:"1",scale:"1",ease:"power3.easeOut"}).fromTo(o.current,{opacity:"-1"},{opacity:"1",ease:"expo.easeOut"},"<")}),[]),Object(n.useEffect)((function(){L.a.timeline({scrollTrigger:{trigger:c.current,start:"top bottom",end:"bottom bottom",markers:false,scrub:1}}).fromTo(c.current,{opacity:"0",scale:"1.1"},{opacity:"1",scale:"1",ease:"power4.easeOut"})}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(_.b,{breakpoint:"mediumAndBelow",children:Object(j.jsx)("div",{className:w.a.root,ref:i,children:Object(j.jsx)(r.c,{exact:!0,to:"/study/".concat(e.id,"/"),children:Object(j.jsxs)("div",{className:w.a.hlbox,children:[Object(j.jsx)("div",{ref:o,children:Object(j.jsx)("img",{src:"".concat(S).concat(e.prsvg),className:w.a.svgimg})}),Object(j.jsx)(C,{imgX1:e.prdX1,imgX2:e.prdX2})]})},e.id)})}),Object(j.jsx)(_.c,{breakpoint:"mediumAndBelow",children:Object(j.jsxs)(r.b,{to:"/study/".concat(e.id,"/"),className:w.a.m_root,children:[Object(j.jsx)("div",{className:w.a.upper,ref:c,style:{backgroundImage:"url('".concat(S).concat(e.prmX1,"')")}}),Object(j.jsxs)("div",{className:w.a.lower,children:[Object(j.jsx)("h3",{children:e.title}),Object(j.jsx)(D,{text:"Open study",height:"44px"})]})]})})]})})),E=i(20),R=i.n(E),B=function(){return Object(j.jsxs)("div",{className:R.a.root,children:[Object(j.jsxs)("div",{className:R.a.item,children:[Object(j.jsx)("h3",{children:"All Studies"}),Object(j.jsx)("p",{children:"I believe that flexibility is one of the main skills for a UX designer. Check my experience in working in different set-ups and on different types of designs tasks."}),Object(j.jsx)(D,{link:"/casestudies",text:"Show all",width:"180px"})]}),Object(j.jsxs)("div",{className:R.a.item,children:[Object(j.jsx)("h3",{children:"About me"}),Object(j.jsx)("p",{children:"Stuff that is not related to work. Here you can find more about my values, life goals, and interests that give me the motivation to do what I do every day."}),Object(j.jsx)(D,{link:"/about",text:"Open page",width:"180px"})]}),Object(j.jsxs)("div",{className:R.a.item,children:[Object(j.jsx)("h3",{children:"Mentoring"}),Object(j.jsx)("p",{children:"This world is built on mutual help to each other. I like to help beginner designers. And this helps me to rethink some foundation bricks of my knowledge."}),Object(j.jsx)(D,{link:"/page/mentoring",text:"Learn more",width:"180px"})]})]})},V=function(){var e=window.location.host.split(".");return e.length>=3?e[0]:"public"},z=i(50),G=i.n(z),U=function(e){return Object(j.jsxs)("div",{className:"".concat(G.a.root),children:[Object(j.jsxs)(O.a,{children:[Object(j.jsx)("title",{children:"404 - Ducov"}),Object(j.jsx)("meta",{name:"keywords",description:"error"})]}),Object(j.jsx)(y,{title:"Page not found",description:"Sorry, this page isn't available. You can go to <a href='/'>Home Page</a>,  check <a href='/casestudies'>Cases Studies</a> I worked on, or learn a bit more about me <a href='/about'>here</a>."})]})},F=function(){var e=P("highlights",V()),t=e.data,i=e.error,n=e.isLoaded;if(null!==i)return Object(j.jsx)(U,{type:"homePage"});if(!n||Array.isArray(t)&&!t.length)return Object(j.jsx)("div",{});var o=t.customisation.highlight.map((function(e){return Object(j.jsx)(H,{prdX1:e.preview_deskX1,prdX2:e.preview_deskX2,prmX1:e.preview_mobileX1,prmX2:e.preview_mobileX2,prsvg:e.preview_svg_deskX2,tags:e.tag,title:e.title,id:e.id},e.id)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)(O.a,{children:Object(j.jsx)("title",{children:"Home - Ducov"})}),Object(j.jsx)(y,{title:t.customisation.intro_header,description:t.customisation.intro_description}),o,Object(j.jsx)(B,{})]})},Y=i(32),q=i.n(Y),J=i(17),Q=i.n(J),K=(i(87),i(88),i(23)),W=i(24),Z=i.n(W),$=function(e){var t=e.images.map((function(e){return Object(j.jsx)(K.Item,{className:Z.a.item,original:S+e.imageX2+".webp",thumbnail:S+e.previewX2+".webp",width:"1288",height:"800",children:function(t){var i=t.ref,n=t.open;return Object(j.jsx)("div",{className:Z.a.img_container,children:Object(j.jsx)("img",{ref:i,onClick:n,src:S+e.previewX2+".webp"})})}})}));return t.length>0?Object(j.jsx)("div",{className:Z.a.root,children:Object(j.jsx)(K.Gallery,{options:{preload:[3,3],fullscreenEl:!1,zoomEl:!1,shareEl:!1,tapToClose:!0},children:t})}):null},ee=function(e){return e.gallery?e.body&&e.body.length>0?Object(j.jsxs)("div",{className:Q.a.item,children:[Object(j.jsx)("div",{className:Q.a.title,children:e.title}),Object(j.jsx)("div",{className:Q.a.body,children:Object(j.jsx)($,{images:e.body})})]}):"":Object(j.jsxs)("div",{className:Q.a.item,children:[Object(j.jsx)("div",{className:Q.a.title,children:e.title}),Object(j.jsx)("div",{className:Q.a.body,dangerouslySetInnerHTML:{__html:e.body}})]})},te=i(51),ie=i.n(te),ne=function(e){var t=e.list.map((function(e){return Object(j.jsx)("div",{children:e.name})}));return Object(j.jsx)("div",{className:"".concat(ie.a.root),children:t})},oe=i(52),ce=i.n(oe),ae=function(e){var t=e.imgX1,i=e.imgX2;L.a.registerPlugin(M.a);var o=Object(n.useRef)(null);return Object(n.useEffect)((function(){L.a.timeline({scrollTrigger:{trigger:o.current,start:"top bottom",end:"bottom bottom",markers:false,scrub:!0}}).fromTo(o.current,{scale:"0.9",opacity:"0.1"},{scale:"1",opacity:"1",ease:"power3.easeOut"})}),[]),Object(j.jsx)("div",{ref:o,className:ce.a.root,children:Object(j.jsx)(C,{imgX1:t,imgX2:i})})},re=function(){var e=Object(s.f)().id,t=P("case",e),i=t.data,n=t.error,o=t.isLoaded;t.setData;return null!==n?Object(j.jsx)(U,{type:"studyPage"}):!o||Array.isArray(i)&&!i.length?Object(j.jsx)("div",{}):Object(j.jsxs)("div",{children:[Object(j.jsx)(O.a,{children:Object(j.jsx)("title",{children:"".concat(i.title," - Ducov")})}),Object(j.jsxs)("div",{className:"all_pages_container ".concat(q.a.header),children:[Object(j.jsx)(ne,{list:i.tag}),Object(j.jsx)("h1",{children:i.title}),Object(j.jsx)("p",{children:i.description})]}),Object(j.jsx)(ae,{imgX1:i.separatorImg_deskX1,imgX2:i.separatorImg_deskX2}),Object(j.jsxs)("div",{className:"all_pages_container ".concat(q.a.content),children:[i.caseInfoSection.map((function(e){return Object(j.jsx)(ee,{title:e.title,body:e.body})})),Object(j.jsx)(ee,{title:"Designs",gallery:"true",body:i.caseImage})]})]})},se=i(25),le=i.n(se),de=i(21),je=i.n(de),ue=function(e){var t=e.onClick,i=je.a.nonactive;return e.active&&(i=je.a.active),Object(j.jsxs)("div",{className:"".concat(je.a.root," ").concat(i),children:[Object(j.jsx)("button",{onClick:t,children:e.name}),Object(j.jsx)("div",{className:je.a.dot,children:" "})]})},be=function(e){return function(t){if(-1==e)return!0;for(var i=t.tag,n=!1,o=0;o<i.length;o++)i[o].id===e&&(n=!0);return n}},he=function(e){var t=Object(n.useState)([-1]),i=Object(N.a)(t,2),o=i[0],c=i[1],a=P("cases",V()),r=a.data,s=a.error,l=a.isLoaded;a.setData;if(null!==s)return Object(j.jsx)(U,{type:"allStudies"});if(!l||!r.length)return Object(j.jsx)("div",{});var d=[{name:"All studies",id:-1},{name:"FinTech",id:1},{name:"MedTech",id:2},{name:"Design System",id:3},{name:"Mobile",id:4},{name:"User Research",id:5}].map((function(e){var t=o==e.id;return Object(j.jsx)(ue,{onClick:function(){return c(e.id)},name:e.name,active:t})}));console.log(r.filter(be(o)));var u=r.filter(be(o)).map((function(e){return Object(j.jsx)(H,{prdX1:e.preview_deskX1,prdX2:e.preview_deskX2,prmX1:e.preview_mobileX1,prmX2:e.preview_mobileX2,prsvg:e.preview_svg_deskX2,tags:e.tag,title:e.title,id:e.id},"".concat(o,"_").concat(e.id))}));return Object(j.jsxs)("div",{className:le.a.root,children:[Object(j.jsx)(O.a,{children:Object(j.jsx)("title",{children:"Case Studies - Ducov"})}),Object(j.jsxs)("div",{className:"all_pages_container ".concat(le.a.title),children:[Object(j.jsx)("h1",{children:"Case Studies"}),Object(j.jsx)("div",{className:le.a.filterlinks,children:d})]}),u,Object(j.jsx)(B,{})]})},me=i(12),ge=i.n(me),pe=i(26),xe=i.n(pe),_e=function(e){return Object(j.jsx)("div",{className:xe.a.root,children:Object(j.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.link,children:Object(j.jsxs)("div",{className:xe.a.linkcontainer,children:[Object(j.jsx)("img",{className:xe.a.icon,src:e.icon,height:"28",width:"28"}),Object(j.jsx)("div",{children:e.text})]})})})},Oe=function(){return Object(j.jsxs)("div",{className:ge.a.root,children:[Object(j.jsx)(O.a,{children:Object(j.jsx)("title",{children:"About Me - Ducov"})}),Object(j.jsxs)("div",{className:ge.a.header,children:[Object(j.jsx)("div",{class:ge.a.item_photo,children:Object(j.jsx)("img",{class:ge.a.mainphoto,src:"/images/about.png",alt:""})}),Object(j.jsxs)("div",{class:ge.a.item_text,children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Here's my story. Designer, father, mother"})}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Hey, I'm Victor, a product designer based in Helsinki, Finland. Coming from a product management background, I firmly grasp the importance of applying human-centered design methods and processes to make informed decisions. I\u2019m passionate about participating in all phases of creating a product\u2014from discovery to delivery. I'm always trying to grow and learn something new."})}),Object(j.jsxs)("div",{class:ge.a.buttons,children:[Object(j.jsx)(_e,{text:"LinkedIn",icon:"".concat("","/icons/soc/halo.png"),link:"https://www.linkedin.com/in/viktordyukov/"}),Object(j.jsx)(_e,{text:"Instagram",icon:"".concat("","/icons/soc/love.png"),link:"https://www.instagram.com/victorducov/"}),Object(j.jsx)(_e,{text:"Download CV",icon:"".concat("","/icons/soc/smirking.png"),link:"files/viktordyukov-cv.pdf"}),Object(j.jsx)(_e,{text:"Send email",icon:"".concat("","/icons/soc/winking.png"),link:"mailto:me@viktorducov.com"})]})]})]}),Object(j.jsxs)("div",{className:"all_pages_container ".concat(ge.a.content),children:[Object(j.jsx)(ee,{title:"Experience",body:"During the past 8+ years of working as a designer in diverse industries including FinTech, MedTech, SaaS, and Internal communication, I created UX for customers and users of companies from small startups to S&P 500 corporations. "}),Object(j.jsx)(ee,{title:"Values",body:"I believe that the work I do should have a positive impact on people. There are more and more advanced technologies in the world, and my role as a designer is to create the bridge between people and this new world of innovation. "}),Object(j.jsx)(ee,{title:"Hobbies",body:"I like coding. This website is the product of this hobby \u2014 I created it with Python (Django Rest API) and React. Now I\u2019m working on an AR project, a prototype of the app for Vuzix Smartglasses so I\u2019m learning to create apps for Android. And yes, I have a dream to find more hobbies that aren\u2019t behind the keyboard. "})]}),Object(j.jsx)("div",{className:ge.a.photos})]})},fe=i(53),ve=i.n(fe),ye=[{path:"/",Component:F},{path:"/casestudies/",Component:he},{path:"/study/:id",Component:re},{path:"/about/",Component:Oe},{path:"/page/:purl",Component:function(e){var t=Object(s.f)().purl,i=P("page",t),n=i.data,o=i.error,c=i.isLoaded;i.setData;return null!==o?Object(j.jsx)(U,{type:"studyPage"}):!c||Array.isArray(n)&&!n.length?Object(j.jsx)("div",{}):Object(j.jsxs)("div",{className:"".concat(ve.a.root," all_pages_container"),children:[Object(j.jsx)(O.a,{children:Object(j.jsx)("title",{children:"".concat(n.title," - Ducov")})}),Object(j.jsx)("h1",{children:n.title}),Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:n.body}})]})}}];new(i(54).a)("G-G57HD6TQE7").initialize();var ke={small:468,medium:560,large:1024,xlarge:1/0},we=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(s.a,{path:"/",render:function(){return Object(j.jsx)(m,{},window.location.pathname)}}),Object(j.jsx)("div",{id:"body_content",className:"container",children:Object(j.jsxs)(s.c,{children:[ye.map((function(e){var t=e.path,i=e.Component;return Object(j.jsx)(s.a,{exact:!0,path:t,children:Object(j.jsx)("div",{className:"page",children:Object(j.jsx)(i,{},window.location.pathname)})},t)})),Object(j.jsx)(s.a,{component:U})]})}),Object(j.jsx)(x,{})]})};t.default=we;a.a.render(Object(j.jsx)(_.a,{breakpoints:ke,children:Object(j.jsx)(we,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.a2f713e3.chunk.js.map