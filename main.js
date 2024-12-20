(()=>{"use strict";function e(e,t,n){e.validity.valid&&""!==e.value.trim()?(t.textContent="",e.classList.remove(n.inputErrorClass)):(t.textContent=e.validationMessage||"Поле не может быть пустым",e.classList.add(n.inputErrorClass))}function t(e,t,n){t.disabled=!e.checkValidity(),e.checkValidity()?t.classList.remove(n.inactiveButtonClass):t.classList.add(n.inactiveButtonClass)}function n(n){Array.from(document.querySelectorAll(n.formSelector)).forEach((function(o){!function(n,o){var r=Array.from(n.querySelectorAll(o.inputSelector)),c=n.querySelector(o.submitButtonSelector);r.forEach((function(r){var i=n.querySelector(".".concat(r.id,"-error"));r.validity.valid||e(r,i,o),r.addEventListener("input",(function(){e(r,i,o),t(n,c,o)}))})),t(n,c,o)}(o,n)}))}function o(e,t,n,o,r,c,i,u){var a=e.name,l=e.link,s=e.likes,d=void 0===s?[]:s,p=e._id,_=e.owner,f=t.cloneNode(!0),y=f.querySelector(".card__image"),v=f.querySelector(".card__title"),m=f.querySelector(".card__like-button"),h=f.querySelector(".card__delete-button"),S=f.querySelector(".card__like-count");return y.src=l,y.alt=a,v.textContent=a,S.textContent=d.length,_._id!==c&&(h.style.display="none"),d.some((function(e){return e._id===c}))&&m.classList.add("card__like-button_is-active"),m.addEventListener("click",(function(){var e=m.classList.contains("card__like-button_is-active");u(p,e).then((function(t){S.textContent=t.likes.length,m.classList.toggle("card__like-button_is-active",!e)})).catch((function(e){console.error("Ошибка при обновлении лайка: ".concat(e))}))})),h.addEventListener("click",(function(){i(p).then((function(){f.remove()})).catch((function(e){console.error("Не удалось удалить карточку: ".concat(e))}))})),y.addEventListener("click",(function(){n.src=l,n.alt=a,o.textContent=a,r(n.closest(".popup"))})),f}function r(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&i(t)}}function c(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",r)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",r)}function u(e){e.target===e.currentTarget&&i(e.currentTarget)}var a={baseUrl:"https://nomoreparties.co/v1/apf-cohort-202",headers:{authorization:"f0defe3b-9d16-4b99-9650-9956ef7ef83b","Content-Type":"application/json"}};function l(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function s(){return fetch("".concat(a.baseUrl,"/users/me"),{headers:a.headers}).then(l)}function d(e){return fetch("".concat(a.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:a.headers}).then(l).catch((function(e){console.error("Ошибка при удалении карточки: ".concat(e))}))}function p(e,t){var n=t?"DELETE":"PUT";return fetch("".concat(a.baseUrl,"/cards/").concat(e,"/likes"),{method:n,headers:a.headers}).then(l).catch((function(e){console.error("Ошибка: ".concat(e))}))}var _={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_invalid",errorClass:"popup__error_visible"};function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";t?(e.textContent=n,e.disabled=!0):(e.textContent=e.dataset.defaultText||"Сохранить",e.disabled=!1)}document.addEventListener("DOMContentLoaded",(function(){n(_)}));var y=document.querySelectorAll(".popup");y.forEach((function(e){e.classList.add("popup_is-animated")}));var v=document.querySelector(".places__list"),m=document.querySelector("#card-template").content.querySelector(".places__item"),h=document.querySelector(".popup_type_edit"),S=document.querySelector(".popup_type_new-card"),b=document.querySelector(".popup_type_image"),q=document.querySelector(".popup_type_avatar-edit"),k=document.querySelector(".profile__edit-button"),E=document.querySelector(".profile__add-button"),L=h.querySelector(".popup__close"),C=S.querySelector(".popup__close"),g=b.querySelector(".popup__close"),x=document.querySelector(".profile__edit-image-button"),T=document.querySelector(".profile__avatar-edit-icon"),w=q.querySelector(".popup__close"),U=h.querySelector(".popup__input_type_name"),A=h.querySelector(".popup__input_type_description"),D=h.querySelector(".popup__form"),O=S.querySelector(".popup__form"),B=S.querySelector(".popup__input_type_card-name"),P=S.querySelector(".popup__input_type_url"),N=q.querySelector(".popup__form"),j=q.querySelector(".popup__input_type_url"),J=b.querySelector(".popup__image"),M=b.querySelector(".popup__caption");k.addEventListener("click",(function(){U.value=document.querySelector(".profile__title").textContent,A.value=document.querySelector(".profile__description").textContent,c(h)})),x.addEventListener("click",(function(){N.reset(),c(q)})),T.addEventListener("click",(function(){N.reset(),c(q)})),N.addEventListener("submit",(function(e){e.preventDefault();var t=N.querySelector(".popup__button");f(t,!0);var n,o=j.value;(n=o,fetch("".concat(a.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:a.headers,body:JSON.stringify({avatar:n})}).then(l).catch((function(e){console.error("Ошибка при обновлении аватара: ".concat(e))}))).then((function(){document.querySelector(".profile__image").style.backgroundImage="url(".concat(o,")"),i(q)})).catch((function(e){console.error("Ошибка при обновлении аватара:",e)})).finally((function(){f(t,!1)}))})),D.addEventListener("submit",(function(e){e.preventDefault();var t,n,o=D.querySelector(".popup__button");f(o,!0),(t=U.value,n=A.value,fetch("".concat(a.baseUrl,"/users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify({name:t,about:n})}).then(l)).then((function(){s().then((function(e){document.querySelector(".profile__title").textContent=e.name,document.querySelector(".profile__description").textContent=e.about,i(h)})).catch((function(e){console.error("Ошибка при получении данных профиля:",e)}))})).catch((function(e){console.error("Ошибка при обновлении данных профиля на сервере:",e)})).finally((function(){f(o,!1)}))})),O.addEventListener("submit",(function(e){e.preventDefault();var t,n,r=s().then((function(e){r=e._id})),u=O.querySelector(".popup__button");f(u,!0),(t=B.value,n=P.value,fetch("".concat(a.baseUrl,"/cards"),{method:"POST",headers:a.headers,body:JSON.stringify({name:t,link:n})}).then(l).catch((function(e){console.error("Ошибка при добавлении карточки:",e)}))).then((function(e){var t=o({name:e.name,link:e.link,likes:e.likes,_id:e._id,owner:e.owner},m,J,M,c,r,d,p);v.prepend(t),i(S),O.reset()})).catch((function(e){console.error("Ошибка при добавлении карточки:",e)})).finally((function(){f(u,!1)}))})),E.addEventListener("click",(function(){O.reset(),c(S)})),L.addEventListener("click",(function(){return i(h)})),C.addEventListener("click",(function(){return i(S)})),g.addEventListener("click",(function(){return i(b)})),w.addEventListener("click",(function(){return i(q)})),y.forEach((function(e){e.addEventListener("mousedown",u)})),document.addEventListener("DOMContentLoaded",(function(){var e,t=document.querySelector(".profile__image"),r=document.querySelector(".profile__title"),i=document.querySelector(".profile__description");r.style.visibility="hidden",i.style.visibility="hidden",t.style.validationSettings="hidden",s().then((function(e){r.textContent=e.name,i.textContent=e.about,t.style.backgroundImage="url(".concat(e.avatar,")"),r.style.visibility="visible",i.style.visibility="visible",t.style.visibility="visible"})).catch((function(e){console.error("Ошибка при загрузке данных профиля:",e)})),n(_),s().then((function(t){return e=t._id,fetch("".concat(a.baseUrl,"/cards"),{headers:a.headers}).then(l)})).then((function(t){t.forEach((function(t){var n=o({name:t.name,link:t.link,likes:t.likes,_id:t._id,owner:t.owner},m,J,M,c,e,d,p);v.append(n)}))})).catch((function(e){console.error("Ошибка при загрузке карточек: ".concat(e))}))}))})();