"use strict";(self.webpackChunk_1_project=self.webpackChunk_1_project||[]).push([[842],{3842:function(s,t,e){e.r(t),e.d(t,{default:function(){return Y}});var r=e(8683),n=e(5671),i=e(3144),o=e(136),u=e(516),a=e(2791),l="Profile_content__njilw",p=e(8992),c="ProfileInfo_descriptionBlock__AO4M2",d="ProfileInfo_profileStatus__j6o9c",h=e(8478),f=e(9439),j=e(184),v=function(s){var t=(0,a.useState)(!1),e=(0,f.Z)(t,2),r=e[0],n=e[1],i=(0,a.useState)(s.status),o=(0,f.Z)(i,2),u=o[0],l=o[1];(0,a.useEffect)((function(){l(s.status)}),[s.status]);return(0,j.jsx)("div",{children:r?(0,j.jsx)("div",{children:(0,j.jsx)("input",{autoFocus:!0,onBlur:function(){n(!1),s.updateUserStatus(u)},value:u,onChange:function(s){l(s.currentTarget.value)}})}):(0,j.jsx)("div",{children:(0,j.jsx)("span",{className:d,onDoubleClick:function(){n(!0)},children:s.status||"-------"})})})},m=function(s){var t=s.profile,e=s.status,r=s.updateUserStatus,n=s.isOwner,i=s.savePhoto;return t?(0,j.jsx)("div",{children:(0,j.jsxs)("div",{className:c,children:[(0,j.jsx)("img",{src:t.photos.large||h,alt:"user-avatar"}),n?(0,j.jsx)("input",{type:"file",onChange:function(s){s.target.files.length&&i(s.target.files[0])}}):null,(0,j.jsx)("div",{children:(0,j.jsx)("span",{children:t.fullName})}),(0,j.jsx)(v,{status:e,updateUserStatus:r}),(0,j.jsx)("div",{children:(0,j.jsx)("span",{children:t.aboutMe})})]})}):(0,j.jsx)(p.Z,{})},x="Post_item__wd+99",P=function(s){return(0,j.jsxs)("div",{className:x,children:[(0,j.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4JmSLi5dZYfNLYBW-LtPGbN4W571XtNMVQ&usqp=CAU",alt:"avatar"}),(0,j.jsx)("span",{children:s.message}),(0,j.jsxs)("span",{children:["likes ",s.likesCount]})]})},g="MyPosts_postsBlock__Tyn6L",_="MyPosts_writePost__YGPfE",S="MyPosts_posts__W1RuA",Z=e(6139),k=e(704),U=e(5304),y=e(3143),C=(0,U.BS)(15),b=(0,k.Z)({form:"post"})((function(s){return(0,j.jsxs)("form",{onSubmit:s.handleSubmit,className:_,children:[(0,j.jsx)(Z.Z,{component:y.gx,name:"newPost",validate:[U.C1,C],placeholder:"Post message"}),(0,j.jsxs)("div",{children:[(0,j.jsx)("button",{children:"Add Post"}),(0,j.jsx)("button",{children:"Remove Post"})]})]})})),N=function(s){var t=s.profilePage.posts.map((function(s){return(0,j.jsx)(P,{message:s.message,likesCount:s.likesCount},s.id)}));return(0,j.jsxs)("div",{className:g,children:[(0,j.jsx)(b,{onSubmit:function(t){s.addPost(t.newPost)}}),(0,j.jsx)("div",{className:S,children:t})]})},w=a.memo(N),A=e(6070),I=e(8687),M=(0,I.$j)((function(s){return{profilePage:s.profilePage}}),(function(s){return{addPost:function(t){s((0,A.WA)(t))}}}))(w),O=function(s){return(0,j.jsxs)("div",{className:l,children:[(0,j.jsx)(m,{profile:s.profile,status:s.status,updateUserStatus:s.updateUserStatus,isOwner:s.isOwner,savePhoto:s.savePhoto}),(0,j.jsx)(M,{})]})},B=e(3636),L=e(7781),q=e(4776),W=function(s){(0,o.Z)(e,s);var t=(0,u.Z)(e);function e(){return(0,n.Z)(this,e),t.apply(this,arguments)}return(0,i.Z)(e,[{key:"refreshProfile",value:function(){var s=this.props.params.userId;null==s&&((s=this.props.authorizedUserId)||this.props.history.push("/login")),this.props.getUserProfile(s),this.props.getUserStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,t){this.props.params.userId!==s.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,j.jsx)(O,(0,r.Z)((0,r.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus,isOwner:!this.props.params.userId,savePhoto:this.props.savePhoto}))}}]),e}(a.Component),Y=(0,L.qC)((0,I.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:A.et,getUserStatus:A.Tq,updateUserStatus:A.OL,savePhoto:A.Ju}),q.E,B.Z)(W)},3636:function(s,t,e){var r=e(8683),n=e(5671),i=e(3144),o=e(136),u=e(516),a=e(2791),l=e(7689),p=e(8687),c=e(184),d=function(s){return{isAuth:s.auth.isAuth}};t.Z=function(s){var t=function(t){(0,o.Z)(a,t);var e=(0,u.Z)(a);function a(){return(0,n.Z)(this,a),e.apply(this,arguments)}return(0,i.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,c.jsx)(s,(0,r.Z)({},this.props)):(0,c.jsx)(l.Fg,{to:"/login"})}}]),a}(a.Component);return(0,p.$j)(d)(t)}}}]);
//# sourceMappingURL=842.87a389fd.chunk.js.map