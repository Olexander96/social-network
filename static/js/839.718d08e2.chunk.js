"use strict";(self.webpackChunk_1_project=self.webpackChunk_1_project||[]).push([[839],{1839:function(e,s,n){n.r(s),n.d(s,{default:function(){return b}});var a=n(2807),i=(n(2791),"Dialogs_dialogs__iXlGP"),t="Dialogs_dialogsItems__19VYj",r="Dialogs_messagesItems__2QhQp",o="DialogItem_dialog__LaM1t",u=n(1087),c=n(184),d=function(e){var s="/dialogs/"+e.id,n=e.name+" avatar";return(0,c.jsxs)("div",{className:o,children:[(0,c.jsx)("img",{src:e.avatar,alt:n}),(0,c.jsx)(u.OL,{to:s,children:e.name})]})},l={},g=function(e){return(0,c.jsx)("div",{className:l.message,children:e.message})},m=n(6139),h=n(704),f=n(1595),j=n(5304),v=(0,j.BS)(50),x=(0,h.Z)({form:"dialog"})((function(e){return(0,c.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,c.jsx)("div",{children:(0,c.jsx)(m.Z,{component:f.gx,name:"newMessage",validate:[j.C1,v],placeholder:"New message"})}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{children:"Send Message"})})]})})),p=function(e){var s=e.dialogsPage.dialogs.map((function(e){return(0,c.jsx)(d,{id:e.id,name:e.name,avatar:e.avatar},e.id)})),n=e.dialogsPage.messages.map((function(e){return(0,c.jsx)(g,{message:e.message},e.id)}));return(0,c.jsxs)("div",{className:i,children:[(0,c.jsx)("div",{className:t,children:s}),(0,c.jsxs)("div",{className:r,children:[n,(0,c.jsx)(x,{onSubmit:function(s){e.sendMessage(s.newMessage)}})]})]})},_=n(8687),Z=n(3636),b=(0,n(7781).qC)((0,_.$j)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(s){e((0,a.X)(s))}}})),Z.Z)(p)},3636:function(e,s,n){var a=n(1413),i=n(5671),t=n(3144),r=n(136),o=n(516),u=n(2791),c=n(7689),d=n(8687),l=n(184),g=function(e){return{isAuth:e.auth.isAuth}};s.Z=function(e){var s=function(s){(0,r.Z)(u,s);var n=(0,o.Z)(u);function u(){return(0,i.Z)(this,u),n.apply(this,arguments)}return(0,t.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,l.jsx)(e,(0,a.Z)({},this.props)):(0,l.jsx)(c.Fg,{to:"/login"})}}]),u}(u.Component);return(0,d.$j)(g)(s)}}}]);
//# sourceMappingURL=839.718d08e2.chunk.js.map