(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(18),r=n.n(o),s=n(8),i=(n(29),n(22)),l=n(2),u=n(3),p="https://auth.nomoreparties.co",d=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},j=n(19),m=n(20),b=new(function(){function e(t){Object(j.a)(this,e),this._url=t.url,this.headers=t.headers}return Object(m.a)(e,[{key:"_onError",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this.headers}).then(this._onError)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this.headers}).then(this._onError)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._onError)}},{key:"postNewCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._onError)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this.headers}).then(this._onError)}},{key:"putLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._onError)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._onError)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then(this._onError)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-20/",headers:{authorization:"4ea02280-fa61-4e20-88ce-aa4e93f95126","Content-Type":"application/json"}}),_=c.a.createContext(),h=n(23),f=n(24),O=n(0),v=function(e){var t=e.component,n=Object(f.a)(e,["component"]);return Object(O.jsx)(u.b,{children:function(){return n.loggedIn?Object(O.jsx)(t,Object(h.a)({},n)):Object(O.jsx)(u.a,{to:"./sign-in"})}})};var x=function(e){return Object(O.jsxs)("div",{className:"navbar__popup-menu ".concat(e.isOpen&&"navbar__popup-menu_opened"),children:[Object(O.jsx)("p",{className:"navbar__email navbar__email_visible",children:e.email}),Object(O.jsx)(s.b,{to:"",onClick:e.onSignOut,className:"navbar__link navbar__link_visible navbar__link_popup-menu",children:"\u0412\u044b\u0439\u0442\u0438"})]})},g=n.p+"static/media/logo.be5c04b7.svg";var N=function(e){var t=Object(u.h)().pathname,n="/sign-in"===t?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438",a="/sign-in"===t?"/sign-up":"/sign-in";return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)("img",{className:"header__logo",src:g,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430"}),Object(O.jsx)("nav",{className:"navbar",children:e.loggedIn?Object(O.jsxs)(O.Fragment,{children:[e.isMenuPopupOpen?Object(O.jsx)("button",{className:"navbar__close-menu-button",onClick:e.onCloseMenuPopup}):Object(O.jsx)("button",{className:"navbar__open-menu-button",onClick:e.onOpenMenuPopup}),Object(O.jsx)("p",{className:"navbar__email",children:e.email}),Object(O.jsx)(s.b,{to:"",onClick:e.onSignOut,className:"navbar__link",children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(O.jsx)(s.b,{to:a,className:"navbar__link navbar__link_visible",children:n})})]})};var k=function(e){var t=Object(a.useContext)(_),n=e.card.owner._id===t._id,c="card__delete-button ".concat(n&&"card__delete-button_visible"),o=e.card.likes.some((function(e){return e._id===t._id})),r="card__like-button ".concat(o&&"card__like-button_active");return Object(O.jsxs)("article",{className:"card",children:[Object(O.jsx)("div",{className:"card__photo",style:{backgroundImage:"url(".concat(e.card.link,")")},onClick:function(){e.onCardClick(e.card)}}),Object(O.jsxs)("div",{className:"card__photo-info",children:[Object(O.jsx)("h2",{className:"card__text",children:e.card.name}),Object(O.jsxs)("div",{className:"card__like-container",children:[Object(O.jsx)("button",{type:"button","aria-label":"like",className:r,onClick:function(){e.onCardLike(e.card)}}),Object(O.jsx)("p",{className:"card__likes-number",children:e.card.likes.length})]})]}),Object(O.jsx)("button",{type:"button","aria-label":"delete",className:c,onClick:function(){e.onCardDelete(e.card)}})]})};var C=function(e){var t=Object(a.useContext)(_);return Object(O.jsxs)("main",{className:"content",children:[Object(O.jsxs)("section",{className:"profile",children:[Object(O.jsxs)("div",{className:"profile__avatar-wrapper",onClick:e.onEditAvatar,children:[Object(O.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(t.avatar,")")}}),Object(O.jsx)("div",{className:"profile__avatar-change"})]}),Object(O.jsxs)("div",{className:"profile__info",children:[Object(O.jsxs)("div",{className:"profile__info-edit",children:[Object(O.jsx)("h1",{className:"profile__name",children:t.name}),Object(O.jsx)("button",{type:"button","aria-label":"edit",className:"profile__edit-button",onClick:e.onEditProfile})]}),Object(O.jsx)("p",{className:"profile__description",children:t.about})]}),Object(O.jsx)("button",{type:"button","aria-label":"add",className:"profile__add-button",onClick:e.onAddPlace})]}),Object(O.jsx)("section",{className:"cards",children:e.cards.map((function(t){return Object(O.jsx)(k,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var y=function(){return Object(O.jsx)("footer",{className:"footer",children:Object(O.jsx)("p",{className:"footer__author",children:"\xa9 2020. \u041f\u043e\u043d\u043e\u043c\u0430\u0440\u0435\u0432\u0430 \u041f\u043e\u043b\u0438\u043d\u0430"})})};var S=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),i=s[0],u=s[1];return Object(O.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e.onLogin({password:c,email:i})},noValidate:!0,children:[Object(O.jsx)("h2",{className:"form__header form__header_type_enter-page",children:"\u0412\u0445\u043e\u0434"}),Object(O.jsx)("input",{id:"email-input",type:"email",value:i,onChange:function(e){u(e.target.value)},className:"form__item form__item_type_enter-page",name:"email",required:!0,placeholder:"Email"}),Object(O.jsx)("span",{id:"email-input-error",className:"form__item-error"}),Object(O.jsx)("input",{id:"password-input",type:"password",value:c,onChange:function(e){o(e.target.value)},className:"form__item form__item_type_enter-page",name:"password",required:!0,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(O.jsx)("span",{id:"password-input-error",className:"form__item-error"}),Object(O.jsx)("button",{type:"submit",className:"form__save-button form__save-button_type_enter-page",children:"\u0412\u043e\u0439\u0442\u0438"})]})};var E=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),u=i[0],p=i[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e.onRegister({password:c,email:u})},noValidate:!0,children:[Object(O.jsx)("h2",{className:"form__header form__header_type_enter-page",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(O.jsx)("input",{id:"email-input",type:"email",value:u,onChange:function(e){p(e.target.value)},className:"form__item form__item_type_enter-page",name:"email",required:!0,placeholder:"Email"}),Object(O.jsx)("span",{id:"email-input-error",className:"form__item-error"}),Object(O.jsx)("input",{id:"password-input",type:"password",value:c,onChange:function(e){o(e.target.value)},className:"form__item form__item_type_enter-page",name:"password",required:!0,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(O.jsx)("span",{id:"password-input-error",className:"form__item-error"}),Object(O.jsx)("button",{type:"submit",className:"form__save-button form__save-button_type_enter-page",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(O.jsxs)("div",{className:"redirection",children:[Object(O.jsx)("p",{className:"redirection__text",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\xa0"}),Object(O.jsx)(s.b,{to:"/sign-in",className:"redirection__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},w=n.p+"static/media/ok_icon.a9eb6caf.svg",P=n.p+"static/media/error_icon.d0f413bf.svg";var I=function(e){return Object(O.jsx)("div",{className:"popup popup_type_tip ".concat(e.isOpen&&"popup_opened"),children:Object(O.jsxs)("div",{className:"popup__container",children:[Object(O.jsx)("button",{type:"button","aria-label":"close",className:"popup__close-button popup__close-button_type_tip",onClick:e.onClose}),Object(O.jsx)("div",{className:"popup__form-background popup__form-background_type_tip",children:e.isRegistrationSuccessful?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"popup__tip-icon",style:{backgroundImage:"url(".concat(w,")")}}),Object(O.jsx)("p",{className:"popup__tip-text",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"popup__tip-icon",style:{backgroundImage:"url(".concat(P,")")}}),Object(O.jsx)("p",{className:"popup__tip-text",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})]})})};var L=function(e){return Object(O.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(O.jsxs)("div",{className:"popup__container",children:[Object(O.jsx)("button",{type:"button","aria-label":"close",className:"popup__close-button",onClick:e.onClose}),Object(O.jsx)("div",{className:"popup__form-background",children:Object(O.jsxs)("form",{className:"form",name:"".concat(e.name,"-form"),onSubmit:e.onSubmit,noValidate:!0,children:[Object(O.jsx)("h2",{className:"form__header",children:e.title}),e.children,Object(O.jsx)("button",{type:"submit",className:"form__save-button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})]})})};var T=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){e.isOpen||(t.current.value="")}),[e.isOpen]),Object(O.jsxs)(L,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},onClose:e.onClose,children:[Object(O.jsx)("input",{id:"avatar-link-input",ref:t,type:"url",className:"form__item",name:"link",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e"}),Object(O.jsx)("span",{id:"avatar-link-input-error",className:"form__item-error"})]})};var A=function(e){var t=Object(a.useContext)(_),n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],r=c[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),u=i[0],p=i[1];return Object(a.useEffect)((function(){t.name&&r(t.name),t.about&&p(t.about)}),[t,e.isOpen]),Object(O.jsxs)(L,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:u})},onClose:e.onClose,children:[Object(O.jsx)("input",{id:"name-input",type:"text",value:o,onChange:function(e){r(e.target.value)},className:"form__item form__item_value_name",name:"name",minLength:2,maxLength:40,required:!0,placeholder:"\u0418\u043c\u044f"}),Object(O.jsx)("span",{id:"name-input-error",className:"form__item-error"}),Object(O.jsx)("input",{id:"description-input",type:"text",value:u,onChange:function(e){p(e.target.value)},className:"form__item form__item_value_description",name:"description",minLength:2,maxLength:200,required:!0,placeholder:"\u041e \u0441\u0435\u0431\u0435"}),Object(O.jsx)("span",{id:"description-input-error",className:"form__item-error"})]})};var D=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),i=s[0],u=s[1];return Object(a.useEffect)((function(){e.isOpen||(o(""),u(""))}),[e.isOpen]),Object(O.jsxs)(L,{name:"cards",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:c,link:i})},onClose:e.onClose,children:[Object(O.jsx)("input",{id:"place-name-input",type:"text",value:c,onChange:function(e){o(e.target.value)},className:"form__item form__item_value_place-name",name:"title",minLength:2,maxLength:30,required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(O.jsx)("span",{id:"place-name-input-error",className:"form__item-error"}),Object(O.jsx)("input",{id:"link-input",type:"url",value:i,onChange:function(e){u(e.target.value)},className:"form__item form__item_value_link",name:"link",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),Object(O.jsx)("span",{id:"link-input-error",className:"form__item-error"})]})};var U=function(e){return Object(O.jsx)("div",{className:"popup popup_type_image ".concat(e.card.isOpen&&"popup_opened"),children:Object(O.jsxs)("div",{className:"popup__container",children:[Object(O.jsx)("button",{type:"button","aria-label":"close",className:"popup__close-button",onClick:e.onClose}),Object(O.jsx)("img",{className:"popup__photo",src:e.card.link,alt:""}),Object(O.jsx)("p",{className:"popup__photo-name",children:e.card.name})]})})};var q=function(){var e=Object(u.g)(),t=Object(a.useState)({}),n=Object(l.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(!1),s=Object(l.a)(r,2),j=s[0],m=s[1],h=Object(a.useState)(""),f=Object(l.a)(h,2),g=f[0],k=f[1],w=Object(a.useState)(!1),P=Object(l.a)(w,2),q=P[0],J=P[1],M=Object(a.useState)(!1),R=Object(l.a)(M,2),F=R[0],G=R[1],V=Object(a.useState)(!1),z=Object(l.a)(V,2),B=z[0],H=z[1],K=Object(a.useState)(!1),Q=Object(l.a)(K,2),W=Q[0],X=Q[1],Y=Object(a.useState)(!1),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=Object(a.useState)(!1),ne=Object(l.a)(te,2),ae=ne[0],ce=ne[1],oe=Object(a.useState)({isOpen:!1,link:"",name:""}),re=Object(l.a)(oe,2),se=re[0],ie=re[1],le=Object(a.useState)([]),ue=Object(l.a)(le,2),pe=ue[0],de=ue[1];Object(a.useEffect)((function(){Promise.all([b.getUserInfo(),b.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];o(n),de(a)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){me()}),[j]);var je=function(){J(!1),H(!1),X(!1),ee(!1),ce(!1),ie({isOpen:!1})},me=function(){if(localStorage.getItem("jwt")){var t=localStorage.getItem("jwt");t&&(n=t,fetch("".concat(p,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then(d)).then((function(t){t.data.email&&(k(t.data.email),m(!0),e.push("/"))})).catch((function(e){console.log(e)}))}var n},be=function(){localStorage.removeItem("jwt"),H(!1),m(!1),k(""),e.push("/sign-in")};return Object(O.jsx)(_.Provider,{value:c,children:Object(O.jsxs)("div",{className:"page",children:[Object(O.jsx)(x,{isOpen:B,email:g,onSignOut:be}),Object(O.jsx)(N,{loggedIn:j,email:g,onSignOut:be,onOpenMenuPopup:function(){H(!0)},onCloseMenuPopup:je,isMenuPopupOpen:B}),Object(O.jsxs)(u.d,{children:[Object(O.jsx)(v,{exact:!0,path:"/",loggedIn:j,component:C,onEditAvatar:function(){X(!0)},onEditProfile:function(){ee(!0)},onAddPlace:function(){ce(!0)},onCardClick:function(e){ie({isOpen:!0,link:e.link,name:e.name})},cards:pe,onCardLike:function(e){e.likes.some((function(e){return e._id===c._id}))?b.deleteLike(e._id).then((function(t){de((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)})):b.putLike(e._id).then((function(t){de((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){e.owner._id===c._id&&b.deleteCard(e._id).then((function(t){de((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){console.log(e)}))}}),Object(O.jsx)(u.b,{path:"/sign-in",children:Object(O.jsx)(S,{onLogin:function(t){(function(e){var t=e.password,n=e.email;return fetch("".concat(p,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(d)})(t).then((function(t){t.token&&(localStorage.setItem("jwt",t.token),m(!0),e.push("/"))})).catch((function(e){console.log(e)}))}})}),Object(O.jsx)(u.b,{path:"/sign-up",children:Object(O.jsx)(E,{onRegister:function(t){(function(e){var t=e.password,n=e.email;return fetch("".concat(p,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(d)})(t).then((function(t){t&&(G(!0),J(!0),e.push("/sign-in"))})).catch((function(e){G(!1),J(!0),console.log(e)}))}})}),Object(O.jsx)(u.b,{children:j?Object(O.jsx)(u.a,{to:"/"}):Object(O.jsx)(u.a,{to:"/sign-in"})})]}),Object(O.jsx)(y,{}),Object(O.jsx)(I,{isOpen:q,isRegistrationSuccessful:F,onClose:je}),Object(O.jsx)(T,{isOpen:W,onUpdateAvatar:function(e){b.changeAvatar(e).then((function(e){o(e),je()})).catch((function(e){console.log(e)}))},onClose:je}),Object(O.jsx)(A,{isOpen:$,onUpdateUser:function(e){b.setUserInfo(e).then((function(e){o(e),je()})).catch((function(e){console.log(e)}))},onClose:je}),Object(O.jsx)(D,{isOpen:ae,onAddPlace:function(e){b.postNewCard(e).then((function(e){de([e].concat(Object(i.a)(pe))),je()})).catch((function(e){console.log(e)}))},onClose:je}),Object(O.jsx)(L,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(O.jsx)(U,{card:se,onClose:je})]})})};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(s.a,{children:Object(O.jsx)(q,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.664c2af7.chunk.js.map