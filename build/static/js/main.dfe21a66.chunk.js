(this.webpackJsonpv221=this.webpackJsonpv221||[]).push([[0],{11:function(e,t,n){e.exports={modalTemp:"studyPagePresentation_modalTemp__E3c5v",modalHeader:"studyPagePresentation_modalHeader__2Dg2U",modalItem1:"studyPagePresentation_modalItem1__2zRHr",modalItem2:"studyPagePresentation_modalItem2__38nHK",modalItem3:"studyPagePresentation_modalItem3__2gj1O",modalItem4:"studyPagePresentation_modalItem4__3GHnG",topBar:"studyPagePresentation_topBar__2xdLX",startButton:"studyPagePresentation_startButton__YXYEy",hiddenButton:"studyPagePresentation_hiddenButton__1UBvW"}},116:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i),a=n(33),c=n.n(a),s=n(12),r=n(3),l=(n(67),n(14)),d=n.n(l),j=n(0),u=function(e,t){return Object(j.jsx)(s.c,{exact:!0,to:e,activeClassName:d.a.active,children:Object(j.jsx)("li",{children:t},e)},e)},m=function(){return[{link:"/",text:"Highlights"},{link:"/casestudies",text:"Case Studies"},{link:"/page/deliverables",text:"Deliverables"},{link:"/page/augmented-reality",text:"Augmented Reality"},{link:"/about",text:"About Me"}]},b=function(){return[{link:"/",logo:"main"},{link:"{portPth}",logo:"main"},{link:"/casestudies/",logo:"allcases"},{link:"/study/:id",logo:"allcases"},{link:"/page/augmented-reality",logo:"ar"},{link:"/page/deliverables",logo:"deliverables"},{link:"/about",logo:"about"}]},h=function(){var e=m(),t=o.a.createRef(),n=e.map((function(e){return u(e.link,e.text)})),i=b().map((function(e){return Object(j.jsx)(r.a,{exact:!0,path:e.link,render:function(){return Object(j.jsx)("img",{src:""+"/icons/logos/".concat(e.logo,".svg")})}})})),a=Object(j.jsx)(s.a,{children:Object(j.jsxs)(r.c,{children:[i,Object(j.jsx)(r.a,{children:Object(j.jsx)("img",{src:"/icons/logos/main.svg"})})]})});return Object(j.jsxs)("nav",{className:d.a.root,children:[Object(j.jsx)("div",{className:d.a.toggle,onClick:function(){t.current.classList.toggle(d.a.visible)},children:Object(j.jsx)("img",{src:"/icons/menu.svg"})}),Object(j.jsx)("a",{href:"/",className:d.a.logo,children:a}),Object(j.jsx)("ul",{className:d.a.menu,ref:t,children:n})]})},g=n(37),p=n.n(g),x=function(){return Object(j.jsxs)("footer",{className:p.a.root,children:[Object(j.jsx)("a",{href:"mailto:mail@victorduco.com",children:"mail@victorduco.com"}),Object(j.jsxs)("div",{className:p.a.smbuttons,children:[Object(j.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/victorduco/",children:"LinkedIn"}),Object(j.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/victorducov/",children:"Instagram"})]})]})},_=n(20),O=n(8),f=(n(76),n(55)),v=n.n(f),y=function(e){return Object(j.jsx)("div",{className:v.a.root,children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]})})},w=n(17),k=n.n(w),N=n(9),I=n(56),P=n.n(I),X="https://victorduco.com",S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(i.useState)([]),o=Object(N.a)(n,2),a=o[0],c=o[1],s=Object(i.useState)(!1),r=Object(N.a)(s,2),l=r[0],d=r[1],j=Object(i.useState)(null),u=Object(N.a)(j,2),m=u[0],b=u[1],h="".concat(X,"/api/").concat(e,"/").concat(t);return console.log(h),Object(i.useEffect)((function(){P.a.get(h).then((function(e){d(!0),c(e.data)})).catch((function(e){b(e)}))}),[h]),{error:m,isLoaded:l,data:a,setData:c}},L=function(e){var t=e.imgX1,n=e.imgX2;return Object(j.jsxs)("picture",{children:[Object(j.jsx)("source",{srcSet:"".concat(X).concat(t,".webp 1x, ").concat(X).concat(n,".webp 2x"),type:"image/webp"}),Object(j.jsx)("source",{srcSet:"".concat(X).concat(t," 1x, ").concat(X).concat(n," 2x"),type:"image/png"}),Object(j.jsx)("img",{})]})},C=n(57),T=n.n(C),A=function(e){var t="44px",n="100%";return e.height&&(t=e.height),e.width&&(n=e.width),Object(j.jsx)("a",{href:e.link,children:Object(j.jsxs)("div",{className:T.a.root,style:{width:n,height:t},children:[Object(j.jsx)("div",{children:e.text}),Object(j.jsx)("img",{src:"/icons/button_arrow.svg"})]})})},D=n(16),B=n(23),H=o.a.forwardRef((function(e,t){D.a.registerPlugin(B.a);var n=Object(i.useRef)(null),o=Object(i.useRef)(null),a=Object(i.useRef)(null);return Object(i.useLayoutEffect)((function(){console.log(n.current),D.a.timeline({scrollTrigger:{trigger:n.current,start:"top bottom",end:"bottom bottom",markers:false,scrub:1}}).fromTo(n.current,{opacity:"0",scale:"0.9"},{opacity:"1",scale:"1",ease:"power3.easeOut"}).fromTo(o.current,{opacity:"-1"},{opacity:"1",ease:"expo.easeOut"},"<")}),[]),Object(i.useLayoutEffect)((function(){D.a.timeline({scrollTrigger:{trigger:a.current,start:"top bottom",end:"bottom bottom",markers:false,scrub:1}}).fromTo(a.current,{opacity:"0",scale:"1.1"},{opacity:"1",scale:"1",ease:"power4.easeOut"})}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(_.b,{breakpoint:"mediumAndBelow",children:Object(j.jsx)("div",{className:k.a.root,ref:n,children:Object(j.jsx)(s.c,{exact:!0,to:"/study/".concat(e.id,"/"),children:Object(j.jsxs)("div",{className:k.a.hlbox,children:[Object(j.jsx)("div",{ref:o,children:Object(j.jsx)("img",{src:"".concat(X).concat(e.prsvg),className:k.a.svgimg})}),Object(j.jsx)(L,{imgX1:e.prdX1,imgX2:e.prdX2})]})},e.id)})}),Object(j.jsx)(_.c,{breakpoint:"mediumAndBelow",children:Object(j.jsxs)(s.b,{to:"/study/".concat(e.id,"/"),className:k.a.m_root,children:[Object(j.jsx)("div",{className:k.a.upper,ref:a,style:{backgroundImage:"url('".concat(X).concat(e.prmX1,"')")}}),Object(j.jsxs)("div",{className:k.a.lower,children:[Object(j.jsx)("h3",{children:e.title}),Object(j.jsx)(A,{text:"Open study",height:"44px"})]})]})})]})})),M=n(21),R=n.n(M),E=function(){return Object(j.jsxs)("div",{className:R.a.root,children:[Object(j.jsxs)("div",{className:R.a.item,children:[Object(j.jsx)("h3",{children:"All Studies"}),Object(j.jsx)("p",{children:"I believe flexibility is one of the main skills for a UX designer. Check out my experience in working in various setups and on different types of tasks."}),Object(j.jsx)(A,{link:"/casestudies",text:"Show all",width:"180px"})]}),Object(j.jsxs)("div",{className:R.a.item,children:[Object(j.jsx)("h3",{children:"About me"}),Object(j.jsx)("p",{children:"Not related to work. Here you can find more about my values, life goals, and interests that give me the motivation to do what I do every day."}),Object(j.jsx)(A,{link:"/about",text:"Open page",width:"180px"})]}),Object(j.jsxs)("div",{className:R.a.item,children:[Object(j.jsx)("h3",{children:"Deliverables"}),Object(j.jsx)("p",{children:"Here you can find some examples of deliverables I\u2019ve made to represent findings, improve my work visibility, and be on the same page with the team."}),Object(j.jsx)(A,{link:"/page/deliverables",text:"Learn more",width:"180px"})]})]})},U=function(){var e=window.location.host.split(".");return e.length>=3?e[0]:"public"},V=n(58),G=n.n(V),z=function(e){return Object(j.jsxs)("div",{className:"".concat(G.a.root),children:[Object(j.jsxs)(O.a,{children:[Object(j.jsx)("title",{children:"404 - Ducov"}),Object(j.jsx)("meta",{name:"keywords",description:"error"})]}),Object(j.jsx)(y,{title:"Page not found",description:"Sorry, this page isn't available. You can go to <a href='/'>Home Page</a>,  check <a href='/casestudies'>Cases Studies</a> I worked on, or learn a bit more about me <a href='/about'>here</a>."})]})},Y=function(){var e=S("highlights",U()),t=e.data,n=e.error,i=e.isLoaded;if(null!==n)return Object(j.jsx)(z,{type:"homePage"});if(!i||Array.isArray(t)&&!t.length)return Object(j.jsx)("div",{});var o=t.customisation.highlight.map((function(e){return Object(j.jsx)(H,{prdX1:e.preview_deskX1,prdX2:e.preview_deskX2,prmX1:e.preview_mobileX1,prmX2:e.preview_mobileX2,prsvg:e.preview_svg_deskX2,tags:e.tag,title:e.title,id:e.id},e.id)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)(O.a,{children:Object(j.jsx)("title",{children:"Home - Ducov"})}),Object(j.jsx)(y,{title:t.customisation.intro_header,description:t.customisation.intro_description}),o,Object(j.jsx)(E,{})]})},q=n(38),F=n.n(q),K=n(18),J=n.n(K),Q=(n(95),n(96),n(24)),W=n(26),Z=n.n(W),$=function(e){var t=e.images.map((function(e){return Object(j.jsx)(Q.Item,{className:Z.a.item,original:X+e.imageX2+".webp",thumbnail:X+e.previewX2+".webp",width:"1288",height:"800",children:function(t){var n=t.ref,i=t.open;return Object(j.jsx)("div",{className:Z.a.img_container,children:Object(j.jsx)("img",{ref:n,onClick:i,src:X+e.previewX2+".webp"})})}})}));return t.length>0?Object(j.jsx)("div",{className:Z.a.root,children:Object(j.jsx)(Q.Gallery,{options:{preload:[3,3],fullscreenEl:!1,zoomEl:!1,shareEl:!1,tapToClose:!0},children:t})}):null},ee=function(e){return e.gallery?e.body&&e.body.length>0?Object(j.jsxs)("div",{className:J.a.item,children:[Object(j.jsx)("div",{className:J.a.title,children:e.title}),Object(j.jsx)("div",{className:J.a.body,children:Object(j.jsx)($,{images:e.body})})]}):"":Object(j.jsxs)("div",{className:J.a.item,children:[Object(j.jsx)("div",{className:J.a.title,children:e.title}),Object(j.jsx)("div",{className:J.a.body,dangerouslySetInnerHTML:{__html:e.body}})]})},te=n(59),ne=n.n(te),ie=function(e){var t=e.list.map((function(e){return Object(j.jsx)("div",{children:e.name})}));return Object(j.jsx)("div",{className:"".concat(ne.a.root),children:t})},oe=n(60),ae=n.n(oe),ce=function(e){var t=e.imgX1,n=e.imgX2;D.a.registerPlugin(B.a);var o=Object(i.useRef)(null);return Object(i.useLayoutEffect)((function(){D.a.timeline({scrollTrigger:{trigger:o.current,start:"top bottom",end:"bottom bottom",markers:false,scrub:!0}}).fromTo(o.current,{scale:"0.9",opacity:"0.1"},{scale:"1",opacity:"1",ease:"power3.easeOut"})}),[]),Object(j.jsx)("div",{ref:o,className:ae.a.root,children:Object(j.jsx)(L,{imgX1:t,imgX2:n})})},se=n(25),re=n.n(se),le=n(34),de=n.n(le),je=n(11),ue=n.n(je),me={content:{top:"0",left:"0",width:"100%",height:"100%",background:"#111111",transform:"translate(0%, 0%)",textAlign:"left",border:"0"}},be=function(e){var t,n,i,a,c,s,r=o.a.useState(!1),l=Object(N.a)(r,2),d=l[0],u=l[1],m=o.a.useState(!1),b=Object(N.a)(m,2),h=b[0],g=b[1];if(""==e.link)return"";function p(){u(!1)}return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){u(!0)},className:ue.a.hiddenButton,children:"Start presentation mode"}),Object(j.jsxs)(re.a,{isOpen:d,onAfterOpen:function(){t.style.opacity="1",n.style.opacity="1",i.style.opacity="1",a.style.opacity="1",c.style.opacity="1",s.style.opacity="1"},onRequestClose:p,style:me,contentLabel:"Presentation Mode",children:[Object(j.jsx)("div",{className:ue.a.topBar,children:Object(j.jsx)("a",{href:"#",onClick:function(){g(!0)},children:Object(j.jsxs)("div",{className:ue.a.startButton,ref:function(e){return s=e},style:{width:"120px",height:"44px"},children:[Object(j.jsx)("div",{children:"Start"}),Object(j.jsx)("img",{src:"/icons/button_arrow.svg"})]})})}),Object(j.jsxs)("div",{className:ue.a.modalTemp,children:[Object(j.jsx)("h1",{className:ue.a.modalHeader,ref:function(e){return t=e},children:"Presentation Mode"}),Object(j.jsx)("h2",{className:ue.a.modalItem1,ref:function(e){return n=e},children:"Project background"}),Object(j.jsx)("h2",{className:ue.a.modalItem2,ref:function(e){return i=e},children:"Task description"}),Object(j.jsx)("h2",{className:ue.a.modalItem3,ref:function(e){return a=e},children:"Design process"}),Object(j.jsx)("h2",{className:ue.a.modalItem4,ref:function(e){return c=e},children:"Key results"})]})]}),Object(j.jsx)(re.a,{isOpen:h,onRequestClose:function(){g(!1)},style:me,contentLabel:"Presentation Mode",children:Object(j.jsx)(de.a,{width:"100%",height:"100%",slidesLink:e.link,position:1})})]})},he=function(){var e=Object(r.f)().id,t=S("case",e),n=t.data,i=t.error,o=t.isLoaded;t.setData;return null!==i?Object(j.jsx)(z,{type:"studyPage"}):!o||Array.isArray(n)&&!n.length?Object(j.jsx)("div",{}):Object(j.jsxs)("div",{children:[Object(j.jsx)(O.a,{children:Object(j.jsx)("title",{children:"".concat(n.title," - Ducov")})}),Object(j.jsxs)("div",{className:"all_pages_container ".concat(F.a.header),children:[Object(j.jsx)(ie,{list:n.tag}),Object(j.jsx)("h1",{children:n.title}),Object(j.jsx)("p",{children:n.description})]}),Object(j.jsx)(ce,{imgX1:n.separatorImg_deskX1,imgX2:n.separatorImg_deskX2}),Object(j.jsxs)("div",{className:"all_pages_container ".concat(F.a.content),children:[n.caseInfoSection.map((function(e){return Object(j.jsx)(ee,{title:e.title,body:e.body})})),Object(j.jsx)(ee,{title:"Designs",gallery:"true",body:n.caseImage})]}),Object(j.jsx)(be,{link:n.slidesLink})]})},ge=n(27),pe=n.n(ge),xe=n(22),_e=n.n(xe),Oe=function(e){var t=e.onClick,n=_e.a.nonactive;return e.active&&(n=_e.a.active),Object(j.jsxs)("div",{className:"".concat(_e.a.root," ").concat(n),children:[Object(j.jsx)("button",{onClick:t,children:e.name}),Object(j.jsx)("div",{className:_e.a.dot,children:" "})]})},fe=function(e){return function(t){if(-1==e)return!0;for(var n=t.tag,i=!1,o=0;o<n.length;o++)n[o].id===e&&(i=!0);return i}},ve=function(e){var t=Object(i.useState)([-1]),n=Object(N.a)(t,2),o=n[0],a=n[1],c=S("cases",U()),s=c.data,r=c.error,l=c.isLoaded;c.setData;if(null!==r)return Object(j.jsx)(z,{type:"allStudies"});if(!l||!s.length)return Object(j.jsx)("div",{});var d=[{name:"All studies",id:-1},{name:"FinTech",id:1},{name:"MedTech",id:2},{name:"Design System",id:3},{name:"Mobile",id:4},{name:"User Research",id:5}].map((function(e){var t=o==e.id;return Object(j.jsx)(Oe,{onClick:function(){return a(e.id)},name:e.name,active:t})}));console.log(s.filter(fe(o)));var u=s.filter(fe(o)).map((function(e){return Object(j.jsx)(H,{prdX1:e.preview_deskX1,prdX2:e.preview_deskX2,prmX1:e.preview_mobileX1,prmX2:e.preview_mobileX2,prsvg:e.preview_svg_deskX2,tags:e.tag,title:e.title,id:e.id},"".concat(o,"_").concat(e.id))}));return Object(j.jsxs)("div",{className:pe.a.root,children:[Object(j.jsx)(O.a,{children:Object(j.jsx)("title",{children:"Case Studies - Ducov"})}),Object(j.jsxs)("div",{className:"all_pages_container ".concat(pe.a.title),children:[Object(j.jsx)("h1",{children:"Case Studies"}),Object(j.jsx)("div",{className:pe.a.filterlinks,children:d})]}),u,Object(j.jsx)(E,{})]})},ye=n(13),we=n.n(ye),ke=n(28),Ne=n.n(ke),Ie=function(e){return Object(j.jsx)("div",{className:Ne.a.root,children:Object(j.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.link,children:Object(j.jsxs)("div",{className:Ne.a.linkcontainer,children:[Object(j.jsx)("img",{className:Ne.a.icon,src:e.icon,height:"28",width:"28"}),Object(j.jsx)("div",{children:e.text})]})})})},Pe=function(){return Object(j.jsxs)("div",{className:we.a.root,children:[Object(j.jsx)(O.a,{children:Object(j.jsx)("title",{children:"About Me - Ducov"})}),Object(j.jsxs)("div",{className:we.a.header,children:[Object(j.jsx)("div",{class:we.a.item_photo,children:Object(j.jsx)("img",{class:we.a.mainphoto,src:"/images/about.png",alt:""})}),Object(j.jsxs)("div",{class:we.a.item_text,children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"UX Designer with the Passion for Technology"})}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Hey, I'm Victor, a product designer based in Helsinki, Finland. Coming from a product management background, I firmly grasp the importance of applying human-centered design methods and processes to make informed decisions. I\u2019m passionate about participating in all phases of creating a product\u2014from discovery to delivery. I'm always trying to grow and learn something new."})}),Object(j.jsxs)("div",{class:we.a.buttons,children:[Object(j.jsx)(Ie,{text:"LinkedIn",icon:"".concat("","/icons/soc/halo.png"),link:"https://www.linkedin.com/in/victorduco/"}),Object(j.jsx)(Ie,{text:"Instagram",icon:"".concat("","/icons/soc/love.png"),link:"https://www.instagram.com/victorducov/"}),Object(j.jsx)(Ie,{text:"Download CV",icon:"".concat("","/icons/soc/smirking.png"),link:"".concat(X,"/api/cv/").concat(U())}),Object(j.jsx)(Ie,{text:"Send email",icon:"".concat("","/icons/soc/winking.png"),link:"mailto:me@viktorducov.com"})]})]})]}),Object(j.jsxs)("div",{className:"all_pages_container ".concat(we.a.content),children:[Object(j.jsx)(ee,{title:"Experience",body:"During the past 8+ years of working as a designer in diverse industries including FinTech, MedTech, SaaS, and Internal communication, I created UX for customers and users of companies from small startups to S&P 500 corporations."}),Object(j.jsx)(ee,{title:"Values",body:"It's important for me that the work I do should have a positive impact on people and the world. There are more and more advanced technologies around us, and my role as a designer is to build the bridge between people and this new world of innovation."}),Object(j.jsx)(ee,{title:"Hobbies",body:"I like coding. This website is the product of that hobby \u2014 I created it with Python (Django Rest API) and React. Now, I\u2019m working on my personal AR project, a prototype of the app for Vuzix Smartglasses so I\u2019m learning to create apps for Android. And yes, I do have a dream to find more hobbies that aren\u2019t behind the keyboard."})]}),Object(j.jsx)("div",{className:we.a.photos})]})},Xe=n(61),Se=n.n(Xe),Le=[{path:"/",Component:Y},{path:"/casestudies/",Component:ve},{path:"/study/:id",Component:he},{path:"/about/",Component:Pe},{path:"/page/:purl",Component:function(e){var t=Object(r.f)().purl,n=S("page",t),i=n.data,o=n.error,a=n.isLoaded;n.setData;return null!==o?Object(j.jsx)(z,{type:"studyPage"}):!a||Array.isArray(i)&&!i.length?Object(j.jsx)("div",{}):Object(j.jsxs)("div",{className:"".concat(Se.a.root," all_pages_container"),children:[Object(j.jsx)(O.a,{children:Object(j.jsx)("title",{children:"".concat(i.title," - Ducov")})}),Object(j.jsx)("h1",{children:i.title}),Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:i.body}})]})}}],Ce=n(29),Te=n.n(Ce);new(n(62).a)("G-G57HD6TQE7").initialize();var Ae={small:468,medium:560,large:1024,xlarge:1/0},De=function(){var e=window.location.host.split("."),t=3==e.length&&e[0],n=3==e.length?".".concat(e[1],".").concat(e[2]):".".concat(window.location.host);return["public","www","portfolio",!1].includes(t)?Te.a.get("instance")&&"undefined"!==typeof window&&(window.location.href="//"+Te.a.get("instance")+n+"/"):Te.a.set("instance",t,{domain:n}),Object(j.jsxs)(s.a,{children:[Object(j.jsx)(r.a,{path:"/",render:function(){return Object(j.jsx)(h,{},window.location.pathname)}}),Object(j.jsx)("div",{id:"body_content",className:"container",children:Object(j.jsxs)(r.c,{children:[Le.map((function(e){var t=e.path,n=e.Component;return Object(j.jsx)(r.a,{exact:!0,path:t,children:Object(j.jsx)("div",{className:"page",children:Object(j.jsx)(n,{},window.location.pathname)})},t)})),Object(j.jsx)(r.a,{component:z})]})}),Object(j.jsx)(x,{})]})};t.default=De;c.a.render(Object(j.jsx)(_.a,{breakpoints:Ae,children:Object(j.jsx)(De,{})}),document.getElementById("root"))},13:function(e,t,n){e.exports={root:"aboutPage_root__33B6t",header:"aboutPage_header__272d5",mainphoto:"aboutPage_mainphoto__2UIoi",item_photo:"aboutPage_item_photo__3RcxN",item_text:"aboutPage_item_text__31ILX",buttons:"aboutPage_buttons__12sym",content:"aboutPage_content__2lKMQ"}},14:function(e,t,n){e.exports={root:"mainMenu_root__14Noo",toggle:"mainMenu_toggle__3otll",logo:"mainMenu_logo__2_DTK",menu:"mainMenu_menu__Skdps",visible:"mainMenu_visible___DWTm",active:"mainMenu_active__NmEuU"}},17:function(e,t,n){e.exports={root:"highlight_root__2Y9jY",hlbox:"highlight_hlbox__2rjr7",svgimg:"highlight_svgimg__AGhdW",m_root:"highlight_m_root__1MCnl",upper:"highlight_upper__HL17H",lower:"highlight_lower__3qCcV"}},18:function(e,t,n){e.exports={item:"infoItem_item__KYJ_l",title:"infoItem_title__3rhC1",body:"infoItem_body__3GwHV"}},21:function(e,t,n){e.exports={root:"linkSection_root__1llBA",item:"linkSection_item__2I7Gi"}},22:function(e,t,n){e.exports={root:"filterLink_root__ow_6v",active:"filterLink_active__3FNNq",dot:"filterLink_dot__2x_aU"}},26:function(e,t,n){e.exports={root:"galleryView_root__2ELhF",img_container:"galleryView_img_container__36H_f"}},27:function(e,t,n){e.exports={root:"allStudiesPage_root__7LJjy",title:"allStudiesPage_title__2Q6ZL",filterlinks:"allStudiesPage_filterlinks__3Bzu1"}},28:function(e,t,n){e.exports={root:"socButton_root__3Ndf5",linkcontainer:"socButton_linkcontainer__3MAcv",icon:"socButton_icon__2ivzj"}},37:function(e,t,n){e.exports={root:"footer_root__1s_BB",smbuttons:"footer_smbuttons__qnv9f"}},38:function(e,t,n){e.exports={root:"studyPage_root__28qpd",header:"studyPage_header__3ydck",content:"studyPage_content__3Y3fE"}},55:function(e,t,n){e.exports={root:"hero_root__1b85R"}},57:function(e,t,n){e.exports={root:"mainButton_root__1-pWN"}},58:function(e,t,n){},59:function(e,t,n){e.exports={root:"tags_root__2zw0l"}},60:function(e,t,n){e.exports={root:"separatorImg_root__1oTrM"}},61:function(e,t,n){e.exports={root:"textPage_root__mV3Ti"}},67:function(e,t,n){},76:function(e,t,n){e.exports={title:"homePage_title__2oyQe",hero1:"homePage_hero1__3ZO0n"}}},[[116,1,2]]]);
//# sourceMappingURL=main.dfe21a66.chunk.js.map