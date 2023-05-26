"use strict";(self.webpackChunk_1_project=self.webpackChunk_1_project||[]).push([[696],{3696:function(e,t,r){r.r(t),r.d(t,{default:function(){return Pe}});var n,o=r(1413),s=r(5671),i=r(3144),l=r(136),a=r(516),c=r(2791),u={content:"Profile_content__njilw"},f=r(9439),d=r(8992),p={descriptionBlock:"ProfileInfo_descriptionBlock__AO4M2",avatarBlock:"ProfileInfo_avatarBlock__Nm38g",downloadIcon:"ProfileInfo_downloadIcon__3Q9Fj",status:"ProfileInfo_status__qnPE3",statusIcon:"ProfileInfo_statusIcon__WOwxZ",profileData:"ProfileInfo_profileData__Rdqog",profileEditBlock:"ProfileInfo_profileEditBlock__8ABpp",EditProfileDataIcon:"ProfileInfo_EditProfileDataIcon__vbBDp",profileDataList:"ProfileInfo_profileDataList__q1mGc",profileContacts:"ProfileInfo_profileContacts__ZS7UU",profileContactsList:"ProfileInfo_profileContactsList__r5nMj",dataEditForm:"ProfileInfo_dataEditForm__XmcH0",contactsBlock:"ProfileInfo_contactsBlock__3SxfA",contactItem:"ProfileInfo_contactItem__AP9ai"},h=r(8478),m=["title","titleId"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}function j(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function g(e,t){var r=e.title,o=e.titleId,s=j(e,m);return c.createElement("svg",v({id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 122.88 121.51",ref:t,"aria-labelledby":o},s),void 0===r?c.createElement("title",{id:o},"edit"):r?c.createElement("title",{id:o},r):null,n||(n=c.createElement("path",{d:"M28.66,1.64H58.88L44.46,16.71H28.66a13.52,13.52,0,0,0-9.59,4l0,0a13.52,13.52,0,0,0-4,9.59v76.14H91.21a13.5,13.5,0,0,0,9.59-4l0,0a13.5,13.5,0,0,0,4-9.59V77.3l15.07-15.74V92.85a28.6,28.6,0,0,1-8.41,20.22l0,.05a28.58,28.58,0,0,1-20.2,8.39H11.5a11.47,11.47,0,0,1-8.1-3.37l0,0A11.52,11.52,0,0,1,0,110V30.3A28.58,28.58,0,0,1,8.41,10.09L8.46,10a28.58,28.58,0,0,1,20.2-8.4ZM73,76.47l-29.42,6,4.25-31.31L73,76.47ZM57.13,41.68,96.3.91A2.74,2.74,0,0,1,99.69.38l22.48,21.76a2.39,2.39,0,0,1-.19,3.57L82.28,67,57.13,41.68Z"})))}var x,b=c.forwardRef(g),P=(r.p,r(184)),y=function(e){var t=(0,c.useState)(!1),r=(0,f.Z)(t,2),n=r[0],o=r[1],s=(0,c.useState)(e.status),i=(0,f.Z)(s,2),l=i[0],a=i[1];(0,c.useEffect)((function(){a(e.status)}),[e.status]);return(0,P.jsx)("div",{className:p.status,children:n?(0,P.jsx)("input",{autoFocus:!0,onBlur:function(){o(!1),e.updateUserStatus(l)},value:l,onChange:function(e){a(e.currentTarget.value)}}):(0,P.jsxs)("div",{children:[(0,P.jsx)("span",{children:e.status||"-------"}),(0,P.jsx)(b,{onClick:function(){o(!0)},className:p.statusIcon})]})})},_=function(e){var t=e.contactTitle,r=e.contactValue;return(0,P.jsxs)("li",{className:p.contactItem,children:[t,": ",(0,P.jsx)("span",{children:r})]})},k=function(e){var t=e.profile,r=e.isOwner,n=e.activateEditMode,o=[];for(var s in t.contacts)t.contacts[s]&&o.push((0,P.jsx)(_,{contactTitle:s,contactValue:t.contacts[s]},s));return(0,P.jsxs)("div",{className:p.profileData,children:[(0,P.jsxs)("div",{className:p.profileEditBlock,children:[(0,P.jsx)("h2",{children:"Profile info:"}),r?(0,P.jsx)(b,{className:p.EditProfileDataIcon,onClick:n}):null]}),(0,P.jsxs)("ul",{className:p.profileDataList,children:[(0,P.jsxs)("li",{children:["Full name: ",(0,P.jsx)("span",{children:t.fullName})]}),(0,P.jsxs)("li",{children:["About me: ",(0,P.jsx)("span",{children:t.aboutMe})]}),(0,P.jsxs)("li",{children:["Looking for a job: ",(0,P.jsx)("span",{children:t.lookingForAJob?"yes":"no"})]}),t.lookingForAJob?(0,P.jsxs)("li",{children:["My professional skills: ",(0,P.jsx)("span",{children:t.lookingForAJobDescription})]}):null]}),(0,P.jsxs)("div",{className:p.profileContacts,children:[(0,P.jsx)("h3",{children:"Contacts:"}),(0,P.jsx)("ul",{className:p.profileContactsList,children:o})]})]})},w=r(1595),O=r(704),I=r(9058),S=(0,O.Z)({form:"profile-form"})((function(e){var t=e.handleSubmit,r=e.profile,n=e.error;e.editModeStatus;return(0,P.jsxs)("form",{className:p.dataEditForm,onSubmit:t,children:[(0,P.jsx)("button",{children:"Save"}),n?(0,P.jsx)("div",{className:I.Z.formErrorSummary,children:n}):null,(0,P.jsxs)("label",{children:["Full name:",(0,w.Gr)(w.II,"Full name","fullName",[])]}),(0,P.jsxs)("label",{children:["About me:",(0,w.Gr)(w.gx,"About me","aboutMe",[])]}),(0,P.jsxs)("label",{className:p.jobCheck,children:["Looking for a job:",(0,w.Gr)(w.II,"","lookingForAJob",[],{type:"checkbox"})]}),(0,P.jsxs)("label",{children:["My professional skills:",(0,w.Gr)(w.gx,"My professional skills","lookingForAJobDescription",[])]}),(0,P.jsxs)("div",{className:p.contactsBlock,children:[(0,P.jsx)("span",{children:"Contacts:"}),Object.keys(r.contacts).map((function(e){return(0,P.jsxs)("label",{className:p.contactItem,children:[e,(0,w.Gr)(w.II,e,"contacts."+e,[])]},e)}))]})]})})),E=["title","titleId"];function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},M.apply(this,arguments)}function L(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function N(e,t){var r=e.title,n=e.titleId,o=L(e,E);return c.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd",viewBox:"0 0 512 342.06",ref:t,"aria-labelledby":n},o),r?c.createElement("title",{id:n},r):null,x||(x=c.createElement("path",{d:"M271.14 2.64c50.45 8.83 86.48 38.5 110.54 83.1l4.51-.45c18.95-1.39 38.61 1.62 56.18 8.84 34.63 14.2 55.57 42.42 64.44 77.79 6.76 26.89 7.34 56.62-.79 83.27-12.47 41.01-42.09 62.32-81.01 75.68l-.42.13c-8.15 2.76-16.46 5.06-24.56 6.93-39.29 6.93-249.08 3.73-296.18.56l-2.4-.26c-8.02-1.07-15.95-2.77-23.54-5.15-35.34-11.01-60.51-35.03-72.13-70.51-7.96-24.36-7.56-50.6.37-74.93 6.68-20.46 16.3-34.33 29.63-44.85 15.76-12.45 37.62-20.69 57.19-26.21C115.68 34.94 187.54-11.94 271.14 2.64zm55.11 186.93c5.19.22 8.87 1.94 11 5.17 5.77 8.66-2.11 17.21-7.58 23.23l-67.7 59.77c-5.8 6.41-14.06 6.41-19.86 0l-61.25-61.4c-5.11-5.77-11.43-13.62-6.12-21.6 2.19-3.23 5.83-4.95 11.01-5.17h34.9v-55.43c0-7.86 6.47-14.37 14.36-14.37h41.98c7.89 0 14.35 6.7 14.35 14.37v55.43h34.91z"})))}var C,Z=c.forwardRef(N),D=(r.p,function(e){var t=e.profile,r=e.status,n=e.updateUserStatus,o=e.isOwner,s=e.savePhoto,i=e.saveProfileFormData,l=e.editModeStatus,a=(0,c.useState)(!1),u=(0,f.Z)(a,2),m=u[0],v=u[1];return t?(0,P.jsxs)("div",{className:p.descriptionBlock,children:[(0,P.jsxs)("div",{className:p.avatarBlock,children:[(0,P.jsx)("img",{src:t.photos.large||h,alt:"user-avatar"}),o?(0,P.jsxs)("label",{children:[(0,P.jsx)(Z,{className:p.downloadIcon}),(0,P.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&s(e.target.files[0])}})]}):null]}),o?(0,P.jsx)(y,{status:r,updateUserStatus:n}):null,m?(0,P.jsx)(S,{initialValues:t,onSubmit:function(e){i(e),"SUCCESS"===l&&v(!1)},profile:t,editModeStatus:l}):(0,P.jsx)(k,{profile:t,isOwner:o,activateEditMode:function(){v(!0)}})]}):(0,P.jsx)(d.Z,{})}),B=r(4942),A="Post_item__wd+99",F="Post_itemDeleting__g8dGJ",U="Post_rightBlock__T38sr",z="Post_likesBlock__g8Sa7",R="Post_likesIcon__P4v1-",H="Post_deletePostIcon__avVr-",V=["title","titleId"];function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},G.apply(this,arguments)}function J(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function T(e,t){var r=e.title,n=e.titleId,o=J(e,V);return c.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:256,height:256,viewBox:"0 0 256 256",xmlSpace:"preserve",ref:t,"aria-labelledby":n},o),r?c.createElement("title",{id:n},r):null,C||(C=c.createElement("defs",null)),c.createElement("g",{style:{stroke:"none",strokeWidth:0,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"none",fillRule:"nonzero",opacity:1},transform:"translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"},c.createElement("path",{d:"M 77.236 8.396 H 12.764 C 5.715 8.396 0 14.111 0 21.16 v 35.913 c 0 7.05 5.715 12.764 12.764 12.764 h 16.724 L 45 85.35 l 15.511 -15.511 h 16.724 c 7.05 0 12.764 -5.715 12.764 -12.764 V 21.16 C 90 14.111 84.285 8.396 77.236 8.396 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(238,81,98)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),c.createElement("path",{d:"M 61.031 28.502 L 61.031 28.502 c -3.612 -3.612 -9.468 -3.612 -13.079 0 L 45 31.454 l -2.952 -2.952 c -3.612 -3.612 -9.468 -3.612 -13.079 0 v 0 c -3.612 3.612 -3.612 9.468 0 13.079 l 2.952 2.952 L 45 57.613 L 58.08 44.533 l 0 0 l 2.952 -2.952 C 64.643 37.97 64.643 32.114 61.031 28.502 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(255,255,255)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"})))}var W,q,$=c.forwardRef(T),Q=(r.p,["title","titleId"]);function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},X.apply(this,arguments)}function Y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function K(e,t){var r=e.title,n=e.titleId,o=Y(e,Q);return c.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",id:"delete",ref:t,"aria-labelledby":n},o),r?c.createElement("title",{id:n},r):null,W||(W=c.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),q||(q=c.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zm3.17-7.83c.39-.39 1.02-.39 1.41 0L12 12.59l1.42-1.42c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 14l1.42 1.42c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L12 15.41l-1.42 1.42c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 14l-1.42-1.42c-.39-.38-.39-1.02 0-1.41zM15.5 4l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"})))}var ee=c.forwardRef(K),te=(r.p,r(1694)),re=r.n(te),ne=function(e){var t=(0,c.useState)(!1),r=(0,f.Z)(t,2),n=r[0],o=r[1];return(0,P.jsxs)("div",{className:re()(A,(0,B.Z)({},F,!0===n)),children:[(0,P.jsx)("img",{src:e.profilePhoto,alt:"avatar"}),(0,P.jsx)("span",{children:e.message}),(0,P.jsxs)("div",{className:U,children:[(0,P.jsxs)("div",{className:z,children:[(0,P.jsx)($,{className:R}),(0,P.jsx)("span",{children:e.likesCount})]}),(0,P.jsx)(ee,{className:H,onClick:function(){var t;o(!0),t=e.postId,e.onDeletePost(t)}})]})]})},oe="MyPosts_postsBlock__Tyn6L",se="MyPosts_writePost__YGPfE",ie="MyPosts_posts__W1RuA",le=r(6139),ae=r(5304),ce=(0,ae.BS)(15),ue=(0,O.Z)({form:"post"})((function(e){return(0,P.jsxs)("form",{onSubmit:e.handleSubmit,className:se,children:[(0,P.jsx)(le.Z,{component:w.gx,name:"newPost",validate:[ae.C1,ce],placeholder:"Post message"}),(0,P.jsx)("div",{children:(0,P.jsx)("button",{children:"Add Post"})})]})})),fe=function(e){var t=function(t){e.deletePost(t)},r=e.profilePage.posts.map((function(r){return(0,P.jsx)(ne,{message:r.message,likesCount:r.likesCount,profilePhoto:e.profilePage.profile?e.profilePage.profile.photos.large:null,onDeletePost:t,postId:r.id},r.id)}));return(0,P.jsxs)("div",{className:oe,children:[(0,P.jsx)("h2",{children:"My Posts"}),(0,P.jsx)(ue,{onSubmit:function(t){e.addPost(t.newPost)}}),(0,P.jsx)("div",{className:ie,children:r})]})},de=c.memo(fe),pe=r(6070),he=r(8687),me=(0,he.$j)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(t){e((0,pe.WA)(t))},deletePost:function(t){e((0,pe.kj)(t))}}}))(de),ve=function(e){return(0,P.jsxs)("div",{className:u.content,children:[(0,P.jsx)(D,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfileFormData:e.saveProfileFormData,editModeStatus:e.editModeStatus}),e.isOwner?(0,P.jsx)(me,{className:u.postsBlock}):null]})},je=r(3636),ge=r(7781),xe=r(4776),be=function(e){(0,l.Z)(r,e);var t=(0,a.Z)(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"refreshProfile",value:function(){var e=this.props.params.userId;null==e&&((e=this.props.authorizedUserId)||this.props.history.push("/login")),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.params.userId!==e.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,P.jsx)(ve,(0,o.Z)((0,o.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,isOwner:!this.props.params.userId,savePhoto:this.props.savePhoto,saveProfileFormData:this.props.saveProfileFormData,editModeStatus:this.props.editModeStatus}))}}]),r}(c.Component),Pe=(0,ge.qC)((0,he.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth,editModeStatus:e.profilePage.editModeStatus}}),{getUserProfile:pe.et,getUserStatus:pe.Tq,updateUserStatus:pe.OL,savePhoto:pe.Ju,saveProfileFormData:pe.od}),xe.E,je.Z)(be)},3636:function(e,t,r){var n=r(1413),o=r(5671),s=r(3144),i=r(136),l=r(516),a=r(2791),c=r(7689),u=r(8687),f=r(184),d=function(e){return{isAuth:e.auth.isAuth}};t.Z=function(e){var t=function(t){(0,i.Z)(a,t);var r=(0,l.Z)(a);function a(){return(0,o.Z)(this,a),r.apply(this,arguments)}return(0,s.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,f.jsx)(e,(0,n.Z)({},this.props)):(0,f.jsx)(c.Fg,{to:"/login"})}}]),a}(a.Component);return(0,u.$j)(d)(t)}}}]);
//# sourceMappingURL=696.545d419d.chunk.js.map