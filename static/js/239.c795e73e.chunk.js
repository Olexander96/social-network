"use strict";(self.webpackChunk_1_project=self.webpackChunk_1_project||[]).push([[239],{1239:function(t,e,s){s.r(e),s.d(e,{default:function(){return tt}});var r,o=s(1413),n=s(5671),i=s(3144),a=s(136),l=s(516),c=s(2791),u={content:"Profile_content__njilw"},f=s(9439),d=s(8992),p={descriptionBlock:"ProfileInfo_descriptionBlock__AO4M2",avatarBlock:"ProfileInfo_avatarBlock__Nm38g",downloadIcon:"ProfileInfo_downloadIcon__3Q9Fj",status:"ProfileInfo_status__qnPE3",statusIcon:"ProfileInfo_statusIcon__WOwxZ",profileData:"ProfileInfo_profileData__Rdqog",profileEditBlock:"ProfileInfo_profileEditBlock__8ABpp",EditProfileDataIcon:"ProfileInfo_EditProfileDataIcon__vbBDp",profileDataList:"ProfileInfo_profileDataList__q1mGc",profileContacts:"ProfileInfo_profileContacts__ZS7UU",profileContactsList:"ProfileInfo_profileContactsList__r5nMj",dataEditForm:"ProfileInfo_dataEditForm__XmcH0",contactsBlock:"ProfileInfo_contactsBlock__3SxfA",contactItem:"ProfileInfo_contactItem__AP9ai"},h=s(8478),m=["title","titleId"];function j(){return j=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t},j.apply(this,arguments)}function v(t,e){if(null==t)return{};var s,r,o=function(t,e){if(null==t)return{};var s,r,o={},n=Object.keys(t);for(r=0;r<n.length;r++)s=n[r],e.indexOf(s)>=0||(o[s]=t[s]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)s=n[r],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(o[s]=t[s])}return o}function x(t,e){var s=t.title,o=t.titleId,n=v(t,m);return c.createElement("svg",j({id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 122.88 121.51",ref:e,"aria-labelledby":o},n),void 0===s?c.createElement("title",{id:o},"edit"):s?c.createElement("title",{id:o},s):null,r||(r=c.createElement("path",{d:"M28.66,1.64H58.88L44.46,16.71H28.66a13.52,13.52,0,0,0-9.59,4l0,0a13.52,13.52,0,0,0-4,9.59v76.14H91.21a13.5,13.5,0,0,0,9.59-4l0,0a13.5,13.5,0,0,0,4-9.59V77.3l15.07-15.74V92.85a28.6,28.6,0,0,1-8.41,20.22l0,.05a28.58,28.58,0,0,1-20.2,8.39H11.5a11.47,11.47,0,0,1-8.1-3.37l0,0A11.52,11.52,0,0,1,0,110V30.3A28.58,28.58,0,0,1,8.41,10.09L8.46,10a28.58,28.58,0,0,1,20.2-8.4ZM73,76.47l-29.42,6,4.25-31.31L73,76.47ZM57.13,41.68,96.3.91A2.74,2.74,0,0,1,99.69.38l22.48,21.76a2.39,2.39,0,0,1-.19,3.57L82.28,67,57.13,41.68Z"})))}var P,g=c.forwardRef(x),b=(s.p,s(184)),_=function(t){var e=(0,c.useState)(!1),s=(0,f.Z)(e,2),r=s[0],o=s[1],n=(0,c.useState)(t.status),i=(0,f.Z)(n,2),a=i[0],l=i[1];(0,c.useEffect)((function(){l(t.status)}),[t.status]);return(0,b.jsx)("div",{className:p.status,children:r?(0,b.jsx)("input",{autoFocus:!0,onBlur:function(){o(!1),t.updateUserStatus(a)},value:a,onChange:function(t){l(t.currentTarget.value)}}):(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{children:t.status||"-------"}),(0,b.jsx)(g,{onClick:function(){o(!0)},className:p.statusIcon})]})})},I=function(t){var e=t.contactTitle,s=t.contactValue;return(0,b.jsxs)("li",{className:p.contactItem,children:[e,": ",(0,b.jsx)("span",{children:s})]})},y=function(t){var e=t.profile,s=t.isOwner,r=t.activateEditMode,o=[];for(var n in e.contacts)e.contacts[n]&&o.push((0,b.jsx)(I,{contactTitle:n,contactValue:e.contacts[n]},n));return(0,b.jsxs)("div",{className:p.profileData,children:[(0,b.jsxs)("div",{className:p.profileEditBlock,children:[(0,b.jsx)("h2",{children:"Profile info:"}),s?(0,b.jsx)(g,{className:p.EditProfileDataIcon,onClick:r}):null]}),(0,b.jsxs)("ul",{className:p.profileDataList,children:[(0,b.jsxs)("li",{children:["Full name: ",(0,b.jsx)("span",{children:e.fullName})]}),(0,b.jsxs)("li",{children:["About me: ",(0,b.jsx)("span",{children:e.aboutMe})]}),(0,b.jsxs)("li",{children:["Looking for a job: ",(0,b.jsx)("span",{children:e.lookingForAJob?"yes":"no"})]}),e.lookingForAJob?(0,b.jsxs)("li",{children:["My professional skills: ",(0,b.jsx)("span",{children:e.lookingForAJobDescription})]}):null]}),(0,b.jsxs)("div",{className:p.profileContacts,children:[(0,b.jsx)("h3",{children:"Contacts:"}),(0,b.jsx)("ul",{className:p.profileContactsList,children:o})]})]})},k=s(1595),S=s(704),w=s(9058),O=(0,S.Z)({form:"profile-form"})((function(t){var e=t.handleSubmit,s=t.profile,r=t.error;t.editModeStatus;return(0,b.jsxs)("form",{className:p.dataEditForm,onSubmit:e,children:[(0,b.jsx)("button",{children:"Save"}),r?(0,b.jsx)("div",{className:w.Z.formErrorSummary,children:r}):null,(0,b.jsxs)("label",{children:["Full name:",(0,k.Gr)(k.II,"Full name","fullName",[])]}),(0,b.jsxs)("label",{children:["About me:",(0,k.Gr)(k.gx,"About me","aboutMe",[])]}),(0,b.jsxs)("label",{className:p.jobCheck,children:["Looking for a job:",(0,k.Gr)(k.II,"","lookingForAJob",[],{type:"checkbox"})]}),(0,b.jsxs)("label",{children:["My professional skills:",(0,k.Gr)(k.gx,"My professional skills","lookingForAJobDescription",[])]}),(0,b.jsxs)("div",{className:p.contactsBlock,children:[(0,b.jsx)("span",{children:"Contacts:"}),Object.keys(s.contacts).map((function(t){return(0,b.jsxs)("label",{className:p.contactItem,children:[t,(0,k.Gr)(k.II,t,"contacts."+t,[])]},t)}))]})]})})),N=["title","titleId"];function M(){return M=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r])}return t},M.apply(this,arguments)}function Z(t,e){if(null==t)return{};var s,r,o=function(t,e){if(null==t)return{};var s,r,o={},n=Object.keys(t);for(r=0;r<n.length;r++)s=n[r],e.indexOf(s)>=0||(o[s]=t[s]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)s=n[r],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(o[s]=t[s])}return o}function C(t,e){var s=t.title,r=t.titleId,o=Z(t,N);return c.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality",fillRule:"evenodd",clipRule:"evenodd",viewBox:"0 0 512 342.06",ref:e,"aria-labelledby":r},o),s?c.createElement("title",{id:r},s):null,P||(P=c.createElement("path",{d:"M271.14 2.64c50.45 8.83 86.48 38.5 110.54 83.1l4.51-.45c18.95-1.39 38.61 1.62 56.18 8.84 34.63 14.2 55.57 42.42 64.44 77.79 6.76 26.89 7.34 56.62-.79 83.27-12.47 41.01-42.09 62.32-81.01 75.68l-.42.13c-8.15 2.76-16.46 5.06-24.56 6.93-39.29 6.93-249.08 3.73-296.18.56l-2.4-.26c-8.02-1.07-15.95-2.77-23.54-5.15-35.34-11.01-60.51-35.03-72.13-70.51-7.96-24.36-7.56-50.6.37-74.93 6.68-20.46 16.3-34.33 29.63-44.85 15.76-12.45 37.62-20.69 57.19-26.21C115.68 34.94 187.54-11.94 271.14 2.64zm55.11 186.93c5.19.22 8.87 1.94 11 5.17 5.77 8.66-2.11 17.21-7.58 23.23l-67.7 59.77c-5.8 6.41-14.06 6.41-19.86 0l-61.25-61.4c-5.11-5.77-11.43-13.62-6.12-21.6 2.19-3.23 5.83-4.95 11.01-5.17h34.9v-55.43c0-7.86 6.47-14.37 14.36-14.37h41.98c7.89 0 14.35 6.7 14.35 14.37v55.43h34.91z"})))}var E=c.forwardRef(C),A=(s.p,function(t){var e=t.profile,s=t.status,r=t.updateUserStatus,o=t.isOwner,n=t.savePhoto,i=t.saveProfileFormData,a=t.editModeStatus,l=(0,c.useState)(!1),u=(0,f.Z)(l,2),m=u[0],j=u[1];return e?(0,b.jsx)("div",{children:(0,b.jsxs)("div",{className:p.descriptionBlock,children:[(0,b.jsxs)("div",{className:p.avatarBlock,children:[(0,b.jsx)("img",{src:e.photos.large||h,alt:"user-avatar"}),o?(0,b.jsxs)("label",{children:[(0,b.jsx)(E,{className:p.downloadIcon}),(0,b.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&n(t.target.files[0])}})]}):null]}),o?(0,b.jsx)(_,{status:s,updateUserStatus:r}):null,m?(0,b.jsx)(O,{initialValues:e,onSubmit:function(t){i(t),"SUCCESS"===a&&j(!1)},profile:e,editModeStatus:a}):(0,b.jsx)(y,{profile:e,isOwner:o,activateEditMode:function(){j(!0)}})]})}):(0,b.jsx)(d.Z,{})}),B="Post_item__wd+99",D=function(t){return(0,b.jsxs)("div",{className:B,children:[(0,b.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4JmSLi5dZYfNLYBW-LtPGbN4W571XtNMVQ&usqp=CAU",alt:"avatar"}),(0,b.jsx)("span",{children:t.message}),(0,b.jsxs)("span",{children:["likes ",t.likesCount]})]})},F="MyPosts_postsBlock__Tyn6L",L="MyPosts_writePost__YGPfE",U="MyPosts_posts__W1RuA",R=s(6139),G=s(5304),q=(0,G.BS)(15),J=(0,S.Z)({form:"post"})((function(t){return(0,b.jsxs)("form",{onSubmit:t.handleSubmit,className:L,children:[(0,b.jsx)(R.Z,{component:k.gx,name:"newPost",validate:[G.C1,q],placeholder:"Post message"}),(0,b.jsxs)("div",{children:[(0,b.jsx)("button",{children:"Add Post"}),(0,b.jsx)("button",{children:"Remove Post"})]})]})})),V=function(t){var e=t.profilePage.posts.map((function(t){return(0,b.jsx)(D,{message:t.message,likesCount:t.likesCount},t.id)}));return(0,b.jsxs)("div",{className:F,children:[(0,b.jsx)(J,{onSubmit:function(e){t.addPost(e.newPost)}}),(0,b.jsx)("div",{className:U,children:e})]})},z=c.memo(V),H=s(6070),T=s(8687),W=(0,T.$j)((function(t){return{profilePage:t.profilePage}}),(function(t){return{addPost:function(e){t((0,H.WA)(e))}}}))(z),Y=function(t){return(0,b.jsxs)("div",{className:u.content,children:[(0,b.jsx)(A,{className:u.ProfileInfo,profile:t.profile,status:t.status,updateUserStatus:t.updateUserStatus,isOwner:t.isOwner,savePhoto:t.savePhoto,saveProfileFormData:t.saveProfileFormData,editModeStatus:t.editModeStatus}),t.isOwner?(0,b.jsx)(W,{}):null]})},Q=s(3636),$=s(7781),X=s(4776),K=function(t){(0,a.Z)(s,t);var e=(0,l.Z)(s);function s(){return(0,n.Z)(this,s),e.apply(this,arguments)}return(0,i.Z)(s,[{key:"refreshProfile",value:function(){var t=this.props.params.userId;null==t&&((t=this.props.authorizedUserId)||this.props.history.push("/login")),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.params.userId!==t.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,b.jsx)(Y,(0,o.Z)((0,o.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,isOwner:!this.props.params.userId,savePhoto:this.props.savePhoto,saveProfileFormData:this.props.saveProfileFormData,editModeStatus:this.props.editModeStatus}))}}]),s}(c.Component),tt=(0,$.qC)((0,T.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth,editModeStatus:t.profilePage.editModeStatus}}),{getUserProfile:H.et,getUserStatus:H.Tq,updateUserStatus:H.OL,savePhoto:H.Ju,saveProfileFormData:H.od}),X.E,Q.Z)(K)},3636:function(t,e,s){var r=s(1413),o=s(5671),n=s(3144),i=s(136),a=s(516),l=s(2791),c=s(7689),u=s(8687),f=s(184),d=function(t){return{isAuth:t.auth.isAuth}};e.Z=function(t){var e=function(e){(0,i.Z)(l,e);var s=(0,a.Z)(l);function l(){return(0,o.Z)(this,l),s.apply(this,arguments)}return(0,n.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,f.jsx)(t,(0,r.Z)({},this.props)):(0,f.jsx)(c.Fg,{to:"/login"})}}]),l}(l.Component);return(0,u.$j)(d)(e)}}}]);
//# sourceMappingURL=239.c795e73e.chunk.js.map