(this["webpackJsonpbookSwitch-client"]=this["webpackJsonpbookSwitch-client"]||[]).push([[0],{72:function(e,t,a){},73:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(30),o=a.n(r),s=(a(71),a(72),a(73),a(16)),i=a(47),l=a(9),d=a(10),j=a(12),h=a(11),u="https://book-switch.herokuapp.com",b=a(14),O=a(13),m=a(106),p=a(105),x=a(64),g=a(0),f=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsxs)(m.a,{className:"hor-ver-2 justify-content-between body-width",bg:"light",children:[Object(g.jsx)(m.a.Brand,{className:"justify-content-center",children:Object(g.jsx)(O.b,{className:"logo",to:"/",children:Object(g.jsxs)("h1",{children:["Book",Object(g.jsx)("span",{children:"Switch"})]})})}),Object(g.jsxs)(p.a,{className:"hor-ver-2 justify-content-end justify-content-around",activeKey:"/",children:[Object(g.jsx)(p.a.Item,{children:Object(g.jsxs)(O.b,{className:"navbar-item",to:"/",children:[Object(g.jsx)("img",{src:"/assets/home.png",alt:"home-icon"}),Object(g.jsx)("br",{}),"Home"]})}),this.props.user&&Object(g.jsx)(p.a.Item,{children:Object(g.jsxs)(O.b,{to:"/messages",children:[Object(g.jsx)("img",{src:"/assets/002-speech-bubble.png",alt:"messages-icon"}),Object(g.jsx)("br",{}),"Messages"]})}),this.props.user&&Object(g.jsx)(p.a.Item,{children:Object(g.jsxs)(O.b,{to:"/profile",children:[Object(g.jsx)("img",{src:"/assets/005-like.png",alt:"profile-icon"}),Object(g.jsx)("br",{}),"Profile"]})}),this.props.user&&Object(g.jsx)(p.a.Item,{children:Object(g.jsxs)(O.b,{onClick:this.props.handleLogout,children:[Object(g.jsx)("img",{src:"/assets/016-shortcut-script-app.png",alt:"logout-icon"}),Object(g.jsx)("br",{}),"Log Out"]})}),!this.props.user&&Object(g.jsx)(p.a.Item,{children:Object(g.jsx)(O.b,{to:"/signup",children:Object(g.jsx)(x.a,{className:"btn-primary",variant:"primary",children:"Signup"})})}),!this.props.user&&Object(g.jsx)(p.a.Item,{children:Object(g.jsx)(O.b,{to:"/login",children:Object(g.jsx)(x.a,{className:"btn-primary",variant:"primary",children:"Login"})})})]})]})})}}]),a}(n.Component),v=a(8),y=a(7),w=a.n(y),k=a(32);var S=function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),s=Object(v.a)(o,2),i=s[0],l=s[1],d=Object(n.useState)(""),j=Object(v.a)(d,2),h=j[0],b=j[1],O=Object(n.useState)(""),m=Object(v.a)(O,2),p=m[0],f=m[1],y=Object(n.useState)(""),S=Object(v.a)(y,2),C=S[0],N=S[1],I=Object(n.useState)(""),L=Object(v.a)(I,2),E=L[0],B=L[1],U=Object(n.useState)(""),F=Object(v.a)(U,2),_=F[0],T=F[1];return Object(n.useEffect)((function(){var e=!0;return w.a.get("".concat(u,"/api/location")).then((function(t){e&&r(t.data)})).catch((function(e){console.log(e)})),function(){return e=!1}}),[]),Object(g.jsxs)(k.a,{className:"body-width",onSubmit:e.handleSubmit,children:[Object(g.jsxs)(k.a.Group,{children:[Object(g.jsx)(k.a.Label,{children:"Username"}),Object(g.jsx)(k.a.Control,{required:!0,name:"username",type:"text",placeholder:"Enter username",onChange:function(e){return b(e.target.value)},value:h})]}),Object(g.jsxs)(k.a.Group,{children:[Object(g.jsx)(k.a.Label,{children:"Name"}),Object(g.jsx)(k.a.Control,{name:"name",type:"text",placeholder:"Enter name",onChange:function(e){return l(e.target.value)},value:i})]}),Object(g.jsxs)(k.a.Group,{children:[Object(g.jsx)(k.a.Label,{children:"Last Name"}),Object(g.jsx)(k.a.Control,{name:"lastName",type:"text",placeholder:"Enter last name",onChange:function(e){return f(e.target.value)},value:p})]}),Object(g.jsxs)(k.a.Group,{controlId:"formBasicEmail",children:[Object(g.jsx)(k.a.Label,{children:"Email address"}),Object(g.jsx)(k.a.Control,{required:!0,name:"email",type:"email",placeholder:"Enter email",onChange:function(e){return B(e.target.value)},value:E}),Object(g.jsx)(k.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(g.jsxs)(k.a.Group,{controlId:"formBasicPassword",children:[Object(g.jsx)(k.a.Label,{children:"Password"}),Object(g.jsx)(k.a.Control,{required:!0,name:"password",type:"password",placeholder:"Password",onChange:function(e){return T(e.target.value)},value:_})]}),Object(g.jsxs)(k.a.Group,{children:[Object(g.jsx)(k.a.Label,{children:"City"}),Object(g.jsx)(k.a.Control,{as:"select",placeholder:"Select your city",name:"location",onChange:function(e){return N(e.target.value)},value:C,children:c.map((function(e,t){return Object(g.jsx)("option",{value:e._id,children:e.city},t)}))})]}),Object(g.jsx)(x.a,{variant:"primary",size:"lg",block:!0,type:"submit",children:"Submit"})]})},C=a(101),N=a(107),I=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e,t=this.props.book,a=t.switchMode[0].toUpperCase()+t.switchMode.slice(1),n="/book/"+t._id;return Object(g.jsx)(O.b,{to:n,children:Object(g.jsxs)(N.a,{children:[Object(g.jsx)(N.a.Img,{style:{width:"120px",margin:"0 auto"},variant:"top",src:t.photo}),Object(g.jsxs)(N.a.Body,{children:[Object(g.jsx)(N.a.Title,{children:t.title}),Object(g.jsx)(N.a.Title,{children:t.author}),Object(g.jsx)(N.a.Text,{children:t.language}),Object(g.jsx)(N.a.Text,{children:a})]}),Object(g.jsx)(N.a.Footer,{children:Object(g.jsx)("small",{classNameName:"text-muted",children:null===(e=t.owner.location)||void 0===e?void 0:e.city})})]})},t._id)}}]),a}(n.Component),L=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.forSearch;return Object(g.jsx)("section",{className:"searchbar body-width",children:Object(g.jsxs)("form",{className:"d-flex",action:"/home",method:"GET",children:[Object(g.jsx)("img",{width:"30px",src:"/assets/006-search.png",alt:"searchicon"}),Object(g.jsx)("input",{name:"searchedToy",className:"search-input form-control me-2",type:"search",placeholder:"Search by Author or Title","aria-label":"Search",onChange:e})]})})}}]),a}(n.Component),E=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={books:[],filtered:[],mode:"all",searchText:""},e.handleSwitchMode=function(t){e.setState({mode:t},e.updateFilter)},e.handleSearch=function(t){var a=t.target.value.toLowerCase();e.setState({searchText:a},e.updateFilter)},e.updateFilter=function(){var t=e.state,a=t.searchText,n=t.mode,c=t.books.filter((function(e){return(e.title.toLowerCase().includes(a)||e.author.toLowerCase().includes(a))&&("all"===n||e.switchMode===n)}));e.setState({filtered:c})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.a.get("".concat(u,"/api/book")).then((function(t){e.setState({books:t.data,filtered:t.data})})).catch((function(){console.log("Fetching failed")}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.books,n=t.filtered;return 0===a.length?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C.a,{animation:"border",variant:"secondary"}),Object(g.jsx)(C.a,{animation:"border",variant:"secondary"}),Object(g.jsx)(C.a,{animation:"border",variant:"secondary"})]}):Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsxs)("section",{className:"categories",children:[Object(g.jsx)(x.a,{onClick:function(){return e.handleSwitchMode("all")},className:"btn btn-primary",children:"All"}),Object(g.jsx)(x.a,{onClick:function(){return e.handleSwitchMode("switch")},className:"btn btn-primary",children:"Switch"}),Object(g.jsx)(x.a,{onClick:function(){return e.handleSwitchMode("gift")},className:"btn btn-primary",children:"Gift"}),Object(g.jsx)(x.a,{onClick:function(){return e.handleSwitchMode("temporary-switch")},className:"btn btn-primary",children:"Temporary Switch"}),Object(g.jsx)(x.a,{className:"btn btn-primary",children:Object(g.jsx)(O.b,{to:"/book/random",children:"Random Book"})})]}),Object(g.jsx)(L,{forSearch:this.handleSearch}),Object(g.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:n.map((function(e){return Object(g.jsx)(I,{book:e})}))})]})}}]),a}(n.Component),B=a(104);function U(e){return Object(g.jsxs)(B.a,Object(s.a)(Object(s.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(g.jsx)(B.a.Header,{style:{padding:"0.4em 0.4em",textAlign:"center"},closeButton:!0,children:Object(g.jsx)(B.a.Title,{id:"contained-modal-title-vcenter",children:Object(g.jsx)("h2",{children:"Welcome to Book Switch!"})})}),Object(g.jsxs)(B.a.Body,{className:"hor-ver-2",children:[Object(g.jsx)(N.a.Img,{className:"modal-img",src:"assets/welcomepage.jpg",alt:"Card image"}),Object(g.jsxs)("div",{children:[Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{className:"cl-1",children:"Book"}),Object(g.jsx)("span",{className:"cl-2",children:"Switch"})," is an app where you can switch books with other people in your city."]}),Object(g.jsx)("p",{children:"Sign up and start switching!"})]})]}),Object(g.jsxs)(B.a.Footer,{children:[Object(g.jsx)(O.b,{to:"/signup",children:Object(g.jsx)(x.a,{onClick:e.onHide,children:"Sign Up"})}),Object(g.jsx)(O.b,{to:"/login",children:Object(g.jsx)(x.a,{onClick:e.onHide,children:"Log In"})}),Object(g.jsx)(x.a,{onClick:e.onHide,children:"Close"})]})]}))}var F=function(e){var t=c.a.useState(!0),a=Object(v.a)(t,2),n=a[0],r=a[1];return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(U,{handleFirstEdit:e.handleFirstEdit,show:n,onHide:function(){return r(!1)}})})},_=a(102),T=a(103),M=a(65);var A=function(e){var t=Object(n.useState)(""),a=Object(v.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(e.book.title),i=Object(v.a)(o,2),l=i[0],d=i[1],j=Object(n.useState)(e.book.author),h=Object(v.a)(j,2),b=h[0],O=h[1],m=Object(n.useState)(e.book.description),p=Object(v.a)(m,2),f=p[0],y=p[1],S=Object(n.useState)(e.book.language),C=Object(v.a)(S,2),N=C[0],I=C[1],L=Object(n.useState)(e.book.category),E=Object(v.a)(L,2),U=E[0],F=E[1],_=Object(n.useState)(e.book.switchMode),T=Object(v.a)(_,2),M=(T[0],T[1]),A=Object(n.useState)([]),D=Object(v.a)(A,2),P=D[0],H=D[1];return Object(n.useEffect)((function(){if(l||b){var e=l?"/"+l:"";e=b?e+"/"+b:e,setTimeout((function(){w.a.get("".concat(u,"/api/book/search").concat(e),{withCredentials:!0}).then((function(e){H(e.data)})).catch((function(){}))}),500)}}),[l,b]),Object(g.jsxs)(B.a,Object(s.a)(Object(s.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(g.jsx)(B.a.Header,{closeButton:!0}),Object(g.jsx)("div",{className:"google-book-card",children:P&&P.filter((function(e,t){return t<3})).filter((function(e){return e.volumeInfo.imageLinks})).filter((function(e){return e.volumeInfo.authors})).map((function(e){var t=e.volumeInfo.title.length>15?e.volumeInfo.title.slice(0,15)+"...":e.volumeInfo.title;return Object(g.jsx)("a",{onClick:function(){d(e.volumeInfo.title),O(e.volumeInfo.authors[0]),y(e.volumeInfo.description.slice(0,400)),F(e.volumeInfo.categories[0]),r(e.volumeInfo.imageLinks.thumbnail)},children:Object(g.jsx)("div",{class:"col",children:Object(g.jsxs)("div",{class:"card",children:[Object(g.jsx)("img",{src:e.volumeInfo.imageLinks.smallThumbnail,alt:"book-cover"}),Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("h5",{children:t}),Object(g.jsxs)("h5",{className:"text-muted",children:["by ",e.volumeInfo.authors[0]]})]})]})})})}))}),Object(g.jsx)(B.a.Body,{className:"hor-ver-2",children:Object(g.jsxs)(k.a,{onSubmit:function(t){e.onHide(),e.handleAddorEditBook(t)},children:[Object(g.jsxs)(k.a.Group,{children:[Object(g.jsx)(k.a.Label,{children:"Title"}),Object(g.jsx)(k.a.Control,{onChange:function(e){return d(e.target.value)},value:l,name:"title",required:!0,type:"text",placeholder:"Enter title"}),Object(g.jsx)(k.a.Control,{value:c,name:"photo",hidden:!0,type:"text",placeholder:"Enter title"})]}),Object(g.jsxs)(k.a.Group,{children:[Object(g.jsx)(k.a.Label,{children:"Author"}),Object(g.jsx)(k.a.Control,{onChange:function(e){return O(e.target.value)},value:b,name:"author",required:!0,type:"text",placeholder:"Enter author(s)"})]}),Object(g.jsxs)(k.a.Group,{children:[Object(g.jsx)(k.a.Label,{children:"Description"}),Object(g.jsx)(k.a.Control,{onChange:function(e){return y(e.target.value)},value:f,name:"description",type:"text",placeholder:"Enter description"})]}),Object(g.jsxs)(k.a.Group,{children:[Object(g.jsx)(k.a.Label,{children:"Language"}),Object(g.jsx)(k.a.Control,{onChange:function(e){return I(e.target.value)},value:N,name:"language",type:"text",placeholder:"Enter language"})]}),Object(g.jsxs)(k.a.Group,{children:[Object(g.jsx)(k.a.Label,{children:"Category"}),Object(g.jsx)(k.a.Control,{onChange:function(e){return F(e.target.value)},value:U,name:"category",required:!0,type:"text",placeholder:"Enter category"})]}),Object(g.jsxs)(k.a.Group,{children:[Object(g.jsx)(k.a.Label,{children:"Switch Mode"}),Object(g.jsxs)(k.a.Control,{as:"select",placeholder:"Select your Switch Mode",onChange:function(e){return M(e.target.value)},name:"switchMode",required:!0,type:"text",children:[Object(g.jsx)("option",{value:"switch",children:"Switch"}),Object(g.jsx)("option",{value:"gift",children:"Gift"}),Object(g.jsx)("option",{value:"temporary-switch",children:"Temporary Switch"})]})]}),Object(g.jsx)(x.a,{variant:"primary",size:"lg",block:!0,type:"submit",children:"Save Book to Library"}),Object(g.jsx)(x.a,{onClick:e.onHide,children:"Close"})]})})]}))},D=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={showTextArea:!1,showEditBookForm:!1},e.onHide=function(){e.setState({showEditBookForm:!1,showTextArea:!1})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.showEditBookForm,n=t.showTextArea,c=this.props,r=c.book,o=c.user,s=c.handleDelete,i=c.handleEditBook,l=c.handleSendRequest,d=r.switchMode[0].toUpperCase()+r.switchMode.slice(1);return Object(g.jsxs)(_.a,{className:"body-width",children:[a&&Object(g.jsx)(A,{show:a,onHide:this.onHide,book:r,handleAddorEditBook:i}),Object(g.jsx)(N.a,{className:"text-center",children:Object(g.jsxs)(T.a,{className:"book-details",children:[Object(g.jsx)(M.a,{children:Object(g.jsx)(N.a.Img,{variant:"top",src:r.photo,alt:"book-cover"})}),Object(g.jsxs)(M.a,{children:[Object(g.jsxs)(N.a.Body,{children:[Object(g.jsx)(N.a.Title,{children:r.title}),Object(g.jsxs)(N.a.Title,{className:"text-muted",children:["by ",r.author]}),Object(g.jsx)(N.a.Text,{children:r.description}),Object(g.jsxs)(N.a.Text,{children:["Language: ",r.language]}),Object(g.jsxs)(N.a.Text,{children:["Category: ",r.category]}),Object(g.jsxs)(N.a.Text,{children:["Switch Mode: ",d]}),Object(g.jsxs)(N.a.Text,{children:["City: ",r.owner.location.city]})]}),Object(g.jsx)(N.a.Footer,{}),n&&Object(g.jsxs)("form",{id:"userform",class:"center",onSubmit:function(t){e.onHide(),l(t)},children:[Object(g.jsx)("textarea",{name:"text",form:"userform",cols:"60",rows:"4",placeholder:"Enter your message here..."}),Object(g.jsx)("button",{type:"submit",class:"btn btn-primary btn-del",children:"Send"})]}),Object(g.jsxs)("div",{children:[console.log("user:",o,"book:",r),o._id===r.owner._id&&Object(g.jsx)("img",{onClick:function(){return e.setState({showEditBookForm:!0})},style:{cursor:"pointer"},src:"/assets/008-edition.png",alt:"editbook-icon"}),o._id===r.owner._id&&Object(g.jsx)("img",{onClick:s,src:"/assets/032-delete-4.png",style:{cursor:"pointer"},alt:"deletebook-icon"}),o._id!==r.owner._id&&Object(g.jsx)(x.a,{onClick:function(){return e.setState({showTextArea:!0})},children:"Request Switch"})]})]})]})})]})}}]),a}(n.Component),P=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={book:null},e.handleSendRequest=function(t){t.preventDefault();var a=t.target.text.value,n=e.state.book,c={text:a,bookRelated:n._id,between:[e.props.user._id,n.owner._id]};w.a.post("".concat(u,"/api/message"),c,{withCredentials:!0}).then((function(e){})).catch((function(e){console.log("Fetching failed")}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.bookId;w.a.get("".concat(u,"/api/book/get/").concat(t)).then((function(t){e.setState({book:t.data})})).catch((function(e){console.log("Fetching failed")}))}},{key:"render",value:function(){var e=this.state.book,t=this.props,a=t.user,n=t.handleDelete,c=t.handleEditBook;if(!e||!a)return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C.a,{animation:"border",variant:"secondary"}),Object(g.jsx)(C.a,{animation:"border",variant:"secondary"}),Object(g.jsx)(C.a,{animation:"border",variant:"secondary"})]});e.owner._id;return Object(g.jsx)(D,{book:e,user:a,handleDelete:n,handleEditBook:c,handleSendRequest:this.handleSendRequest})}}]),a}(n.Component);var H=function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(e.user.name),i=Object(v.a)(o,2),l=i[0],d=i[1],j=Object(n.useState)(e.user.username),h=Object(v.a)(j,2),b=h[0],O=h[1],m=Object(n.useState)(e.user.lastName),p=Object(v.a)(m,2),f=p[0],y=p[1],S=Object(n.useState)(e.user.location),C=Object(v.a)(S,2),N=C[0],I=C[1];return Object(n.useEffect)((function(){var e=!0;return w.a.get("".concat(u,"/api/location")).then((function(t){e&&r(t.data)})).catch((function(e){console.log(e)})),function(){return e=!1}}),[]),Object(g.jsxs)(B.a,Object(s.a)(Object(s.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(g.jsx)(B.a.Header,{closeButton:!0,children:Object(g.jsx)(B.a.Title,{id:"contained-modal-title-vcenter",children:"Edit your Profile"})}),Object(g.jsx)(B.a.Body,{children:Object(g.jsxs)(k.a,{onSubmit:function(t){e.onHide(),e.handleProfileChange(t)},children:[Object(g.jsxs)(k.a.Group,{children:[Object(g.jsx)(k.a.Label,{children:"Username"}),Object(g.jsx)(k.a.Control,{name:"username",required:!0,type:"text",placeholder:"Enter username",onChange:function(e){return O(e.target.value)},value:b})]}),Object(g.jsxs)(k.a.Group,{children:[Object(g.jsx)(k.a.Label,{children:"Name"}),Object(g.jsx)(k.a.Control,{name:"name",type:"text",placeholder:"Enter your name",onChange:function(e){return d(e.target.value)},value:l})]}),Object(g.jsxs)(k.a.Group,{children:[Object(g.jsx)(k.a.Label,{children:"Last Name"}),Object(g.jsx)(k.a.Control,{name:"lastName",type:"text",placeholder:"Enter your last name",onChange:function(e){return y(e.target.value)},value:f})]}),Object(g.jsxs)(k.a.Group,{children:[Object(g.jsx)(k.a.Label,{children:"City"}),Object(g.jsx)(k.a.Control,{as:"select",placeholder:"Select your city",name:"location",onChange:function(e){return I(e.target.value)},value:N,children:c.map((function(e,t){return Object(g.jsx)("option",{value:e._id,children:e.city},t)}))})]}),Object(g.jsx)(x.a,{variant:"primary",size:"lg",type:"submit",children:"Save Changes"}),Object(g.jsx)(x.a,{onClick:e.onHide,children:"Close"})]})}),Object(g.jsx)(B.a.Footer,{})]}))};function G(e){return Object(g.jsxs)(B.a,Object(s.a)(Object(s.a)({},e),{},{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(g.jsx)(B.a.Header,{closeButton:!0,children:Object(g.jsx)(B.a.Title,{children:"Choose a photo to upload"})}),Object(g.jsxs)(k.a,{onSubmit:function(t){e.onHide(),e.handlePhoto(t)},enctype:"multipart/form-data",children:[Object(g.jsx)("input",{type:"file",name:"photo",accept:"image/png, image/jpg"}),Object(g.jsx)(x.a,{type:"submit",children:"Upload Photo"})]})]}))}var R=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={addFormShow:!1,profileFormShow:!1,showUploadPhotoForm:!1},e.onHide=function(){e.setState({addFormShow:!1})},e.handleProfileChange=function(t){t.preventDefault();var a={username:t.target.username.value,name:t.target.name.value,lastName:t.target.lastName.value,location:t.target.location.value,_id:e.props.user._id};w.a.post("".concat(u,"/api/auth/user"),a,{withCredentials:!0}).then((function(t){e.props.history.push("/profile")})).catch((function(e){console.log("Something went wrong",e)}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.addFormShow,n=t.profileFormShow,c=t.showUploadPhotoForm,r=this.props,o=r.userLibrary,s=r.user,i=r.handleDelete,l=r.handleEditBook,d=r.handleProfileChange,j=r.handleAddBook,h=r.handlePhoto;return s?Object(g.jsxs)("div",{className:"body-width",children:[a&&Object(g.jsx)(A,{show:a,onHide:this.onHide,book:{},handleAddorEditBook:j}),c&&Object(g.jsx)(G,{show:c,onHide:function(){return e.setState({showUploadPhotoForm:!1})},handlePhoto:h}),Object(g.jsxs)("h2",{children:["Hello ",s.name,"! ",Object(g.jsx)("br",{}),"Welcome to your profile"]}),Object(g.jsxs)(N.a,{className:"text-center",style:{width:"18rem",margin:"1em auto"},children:[Object(g.jsx)(N.a.Img,{variant:"top",src:s.photo,roundedCircle:!0}),Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:"/assets/003-camera.png",style:{cursor:"pointer"},onClick:function(){return e.setState({showUploadPhotoForm:!0})},alt:"uploadphoto-icon"}),Object(g.jsx)("img",{style:{cursor:"pointer"},src:"/assets/008-edition.png",alt:"editprofile-icon",onClick:function(){return e.setState({profileFormShow:!0})}})]}),Object(g.jsxs)(N.a.Body,{children:[Object(g.jsx)(N.a.Title,{children:"Your details"}),Object(g.jsx)("table",{children:Object(g.jsxs)("tbody",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Username:"}),Object(g.jsx)("td",{children:s.username})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Name:"}),Object(g.jsx)("td",{children:s.name})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Last name:"}),Object(g.jsx)("td",{children:s.lastName})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"City:"}),Object(g.jsx)("td",{children:s.location.city})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Email:"}),Object(g.jsx)("td",{children:s.email})]})]})})]}),Object(g.jsx)(N.a.Footer,{}),n&&Object(g.jsx)(H,{show:n,user:s,handleProfileChange:d,onHide:function(){return e.setState({profileFormShow:!1})}})]}),Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:"/assets/library.png",alt:"libraryicon"})}),!o.length&&Object(g.jsx)("h1",{children:"You have no books yet in your Library"}),Object(g.jsx)("img",{style:{cursor:"pointer"},src:"/assets/026-library-2.png",alt:"addbook-icon",onClick:function(){return e.setState({addFormShow:!0})}}),o.map((function(e){return Object(g.jsx)(D,{handleDelete:function(t){i(e._id,t)},handleEditBook:function(t){l(e._id,t)},user:s,book:e},e._id)}))]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C.a,{animation:"border",variant:"secondary"}),Object(g.jsx)(C.a,{animation:"border",variant:"secondary"}),Object(g.jsx)(C.a,{animation:"border",variant:"secondary"})]})}}]),a}(n.Component),q=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)("div",{className:"container-fluid pb-0 mb-0 justify-content-center body-width",children:Object(g.jsxs)("footer",{children:[Object(g.jsx)("div",{className:"row justify-content-center py-5",children:Object(g.jsxs)("div",{className:"col-xl-8 col-sm-4 mb-2 my-auto mx-auto a",children:[Object(g.jsxs)("h3",{className:"mb-md-0 mb-5 logo",children:["Book",Object(g.jsx)("span",{children:"Switch"})]}),Object(g.jsxs)("small",{className:"rights",children:[Object(g.jsx)("span",{children:"\xae"})," All Rights Reserved."]}),Object(g.jsx)("br",{}),Object(g.jsx)("h6",{className:"mb-2 bold-text py-2",children:Object(g.jsx)("b",{children:"Contact Us"})}),Object(g.jsx)("p",{className:"mb-1",children:"contact@bookswitch.com"})]})}),Object(g.jsxs)("div",{className:"row justify-content-center",children:[Object(g.jsxs)("p",{children:[Object(g.jsx)("img",{className:"my-3 ",width:"90px",src:"/assets/800px-MERN-logo.png",alt:"mernlogo"}),Object(g.jsx)("span",{className:"bold-text py-1",children:"IRONHACKERS"})]}),Object(g.jsxs)("div",{className:"col-md-4 py-1 ",children:[Object(g.jsx)("h6",{className:"mb-2 bold-text",children:Object(g.jsx)("b",{children:"Georgina Morales"})}),Object(g.jsx)("small",{children:" georgina@bookswitch.com"})]}),Object(g.jsxs)("div",{className:"col-md-4 py-1 ",children:[Object(g.jsx)("h6",{className:"mb-2 bold-text",children:Object(g.jsx)("b",{children:"Erdem Taskin"})}),Object(g.jsx)("small",{children:"erdem@bookswitch.com"})]})]})]})})})}}]),a}(n.Component);var z=function(e){var t=Object(n.useState)(""),a=Object(v.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),s=Object(v.a)(o,2),i=s[0],l=s[1];return Object(g.jsx)("div",{children:Object(g.jsxs)(k.a,{className:"body-width",onSubmit:e.handleSubmit,children:[Object(g.jsxs)(k.a.Group,{controlId:"formBasicEmail",children:[Object(g.jsx)(k.a.Label,{children:"Email address"}),Object(g.jsx)(k.a.Control,{required:!0,name:"email",type:"email",placeholder:"Enter email",onChange:function(e){return r(e.target.value)},value:c})]}),Object(g.jsxs)(k.a.Group,{controlId:"formBasicPassword",children:[Object(g.jsx)(k.a.Label,{children:"Password"}),Object(g.jsx)(k.a.Control,{required:!0,name:"password",type:"password",placeholder:"Password",onChange:function(e){return l(e.target.value)},value:i})]}),Object(g.jsx)(x.a,{variant:"primary",size:"lg",block:!0,type:"submit",children:"Submit"})]})})},W=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={messages:null,loggedInUser:null},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.loggedInUser||w.a.get("".concat(u,"/api/auth/user"),{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data})})).catch((function(){})),w.a.get("".concat(u,"/api/message"),{withCredentials:!0}).then((function(t){e.setState({messages:t.data})})).catch((function(){console.log("Fetching failed")}))}},{key:"render",value:function(){var e=this.state,t=e.messages,a=e.loggedInUser;if(!t||!a)return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C.a,{animation:"border",variant:"secondary"}),Object(g.jsx)(C.a,{animation:"border",variant:"secondary"}),Object(g.jsx)(C.a,{animation:"border",variant:"secondary"})]});var n=[],c=[];return t.filter((function(e){return e.bookRelated})).forEach((function(e){var t=e.between[0]._id===a._id?e.between[1]:e.between[0];if(!n.includes(t._id)){var r={contact:t,bookRelated:e.bookRelated,date:e.date.toString().substring(4,9)+e.date.toString().substring(14,21),text:e.text};n.push(t._id),c.push(r)}})),Object(g.jsxs)("div",{children:[c.length?Object(g.jsx)("h1",{children:"Your Messages"}):Object(g.jsx)("h1",{children:"You have no Messages yet"}),Object(g.jsx)("div",{className:"list-group",children:c.map((function(e){var t="/messages/"+e.contact._id;return Object(g.jsx)(O.b,{to:t,class:"list-group-item-action",children:Object(g.jsx)("div",{className:"card mb-3 body-width",children:Object(g.jsxs)("div",{className:"row g-0 hor-ver-2",children:[Object(g.jsx)("div",{className:"col-md-4",children:Object(g.jsx)("img",{className:"small-image",src:e.bookRelated.photo,alt:"bookImage"})}),Object(g.jsx)("div",{className:"col-md-8",children:Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsxs)("h5",{className:"card-title",children:["Messages with ",Object(g.jsx)("span",{children:e.contact.username})]}),Object(g.jsxs)("h5",{className:"card-title",children:["Book to Switch ",Object(g.jsx)("span",{children:e.bookRelated.title})]}),Object(g.jsxs)("h5",{className:"card-title",children:["Book to Switch ",Object(g.jsx)("span",{children:e.bookRelated.author})]}),Object(g.jsx)("p",{className:"card-text",children:e.text}),Object(g.jsx)("p",{className:"text-muted",children:e.date})]})})]})})},e.contact._id)}))})]})}}]),a}(n.Component),Y=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={messages:[],book:"",contact:"",loggedInUser:"",input:""},e.handleSubmit=function(t){t.preventDefault();var a=t.target.text.value;t.target.reset();var n={text:a,between:[e.state.loggedInUser._id,e.state.contact._id],bookRelated:e.state.book};w.a.post("".concat(u,"/api/message"),n,{withCredentials:!0}).then((function(t){e.setState({messages:[].concat(Object(i.a)(e.state.messages),[t.data])},(function(){e.props.history.push("/messages/".concat(e.state.contact._id))}))})).catch((function(e){console.log(e)}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.state.loggedInUser||w.a.get("".concat(u,"/api/auth/user"),{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data})})).catch((function(){}));var t=this.props.match.params.contactId;w.a.get("".concat(u,"/api/message/").concat(t),{withCredentials:!0}).then((function(a){var n=a.data[0].between[0]._id===t?a.data[0].between[0]:a.data[0].between[1];e.setState({messages:a.data,book:a.data[0].bookRelated,contact:n},(function(){return console.log(e.state.book,e.state.contact)}))})).catch((function(){console.log("Fetching failed")}))}},{key:"render",value:function(){var e=this.state,t=e.messages,a=e.book,n=e.contact,c=(e.input,"/book/"+a._id);return Object(g.jsxs)("div",{className:"div-message",children:[Object(g.jsx)(O.b,{className:"book-link",to:c,children:Object(g.jsx)("div",{className:"messages-div list-group",children:Object(g.jsx)("div",{className:"card mb-3",style:{maxWidth:"800px"},children:Object(g.jsxs)("div",{className:"row g-0",children:[Object(g.jsx)("div",{className:"col-md-4",children:Object(g.jsx)("img",{className:"small-image",src:this.state.book.photo,alt:"book-cover"})}),Object(g.jsx)("div",{className:"col-md-8",children:Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("h4",{className:"card-title",children:this.state.book.title}),Object(g.jsxs)("h5",{className:"card-title",children:["by ",this.state.book.author," "]}),Object(g.jsxs)("h5",{className:"card-title",children:["to ",this.state.book.switchMode]}),Object(g.jsx)("p",{className:"card-text",children:this.state.book.description})]})})]})})})}),Object(g.jsxs)("h2",{children:["Messages with ",n.username]}),t.map((function(e){var t=e.date,a=e.between[1]._id===n._id?"div-right":"div-left";return Object(g.jsxs)("div",{className:a,children:[e.text,Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"small text-muted",children:t})]})})),Object(g.jsxs)("form",{className:"message-form",onSubmit:this.handleSubmit,children:[Object(g.jsx)("input",{name:"text",required:"true",type:"text",className:"form-control"}),Object(g.jsx)("button",{type:"submit",className:"btn btn-primary btn-del",children:"Send"})]})]})}}]),a}(n.Component),J=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.error?this.props.error.massage:"Uh oh, we can\u2019t seem to find the page you\u2019re looking for. Try going back to the previous page";return Object(g.jsxs)(N.a,{className:"bg-dark text-white body-width",children:[Object(g.jsx)(N.a.Img,{src:"/assets/404page.jpg",alt:"Card image"}),Object(g.jsxs)(N.a.ImgOverlay,{children:[Object(g.jsx)(N.a.Title,{children:Object(g.jsx)("h1",{children:"Error Found"})}),Object(g.jsx)(N.a.Text,{children:e}),Object(g.jsx)(N.a.Text,{children:"Our apologies for the inconvenience."})]})]})}}]),a}(n.Component),K=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={loggedInUser:"",nouser:!0,userLibrary:[],error:null},e.handlePhoto=function(t){t.preventDefault();var a=t.target.photo.files[0],n=new FormData;n.append("imageUrl",a),w.a.post("".concat(u,"/api/cloudinary/upload"),n).then((function(t){var a=t.data.photo,n={_id:e.state.loggedInUser._id,username:e.state.loggedInUser.username,name:e.state.loggedInUser.name,lastName:e.state.loggedInUser.lastName,location:e.state.loggedInUser.location._id,photo:a};w.a.post("".concat(u,"/api/auth/user"),n,{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/profile")}))})).catch((function(t){e.setState({error:t},(function(){return e.props.history.push("/err")}))}))})).catch((function(t){e.setState({error:t},(function(){return e.props.history.push("/err")}))}))},e.handleSignUp=function(t){t.preventDefault();var a={username:t.target.username.value,name:t.target.name.value,lastName:t.target.lastName.value,email:t.target.email.value,password:t.target.password.value,location:t.target.location.value};w.a.post("".concat(u,"/api/auth/signup"),a,{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/")}))})).catch((function(t){e.setState({error:t},(function(){return e.props.history.push("/err")}))}))},e.handleLogIn=function(t){t.preventDefault();var a={email:t.target.email.value,password:t.target.password.value};w.a.post("".concat(u,"/api/auth/login"),a,{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/")}))})).catch((function(t){e.setState({error:t},(function(){return e.props.history.push("/err")}))}))},e.handleLogout=function(){w.a.post("".concat(u,"/api/auth/logout"),{},{withCredentials:!0}).then((function(){e.setState({loggedInUser:null},(function(){e.props.history.push("/")}))}))},e.handleEditBook=function(t,a){a.preventDefault();var n=a.target.title.value,c=a.target.author.value,r=a.target.description.value,o=(a.target.photo.value,{title:n,author:c,description:r,language:a.target.language.value,category:a.target.category.value,switchMode:a.target.switchMode.value});w.a.post("".concat(u,"/api/book/edit/").concat(t),o,{withCredentials:!0}).then((function(a){var n=a.data,c=e.state.userLibrary.map((function(e){return e._id===n._id?(n.owner=e.owner,n):e}));e.setState({userLibrary:c},(function(){e.props.history.push("/book/".concat(t))}))})).catch((function(t){e.setState({error:t},(function(){return e.props.history.push("/err")}))}))},e.handleAddBook=function(t){t.preventDefault();var a=t.target.photo.value,n={title:t.target.title.value,author:t.target.author.value,description:t.target.description.value,language:t.target.language.value,category:t.target.category.value,photo:a,switchMode:t.target.switchMode.value};w.a.post("".concat(u,"/api/book/add"),n,{withCredentials:!0}).then((function(t){var a=t.data;e.setState({userLibrary:[a].concat(Object(i.a)(e.state.userLibrary))})})).catch((function(t){e.setState({error:t},(function(){return e.props.history.push("/err")}))}))},e.handleDelete=function(t){w.a.delete("".concat(u,"/api/book/delete/").concat(t),{withCredentials:!0}).then((function(){var a=e.state.userLibrary.filter((function(e){return e._id!==t}));e.setState({userLibrary:a},(function(){e.props.history.push("/profile")}))})).catch((function(e){console.log("Delete failed",e)}))},e.handleProfileChange=function(t){t.preventDefault();var a={username:t.target.username.value,name:t.target.name.value,lastName:t.target.lastName.value,location:t.target.location.value,_id:e.state.loggedInUser._id,photo:e.state.loggedInUser.photo};w.a.post("".concat(u,"/api/auth/user"),a,{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/profile")}))})).catch((function(t){e.setState({error:t},(function(){return e.props.history.push("/err")}))}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.a.get("".concat(u,"/api/auth/user"),{withCredentials:!0}).then((function(t){e.setState({nouser:!1,loggedInUser:t.data},(function(){w.a.get("".concat(u,"/api/book/user/").concat(e.state.loggedInUser._id)).then((function(t){e.setState({userLibrary:t.data})}))}))})).catch((function(t){e.setState({nouser:!0})}))}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(f,{handleLogout:this.handleLogout,handleLogIn:this.handleLogIn,handleSignUp:this.handleSignUp,user:this.state.loggedInUser}),!this.state.loggedInUser&&Object(g.jsx)(F,{handleFirstEdit:this.handleFirstEdit}),Object(g.jsxs)(b.c,{children:[Object(g.jsx)(b.a,{path:"/signup",render:function(t){return Object(g.jsx)(S,Object(s.a)({handleSubmit:e.handleSignUp},t))}}),Object(g.jsx)(b.a,{path:"/login",render:function(t){return Object(g.jsx)(z,Object(s.a)({handleSubmit:e.handleLogIn},t))}}),Object(g.jsx)(b.a,{exact:!0,path:"/",render:function(e){return Object(g.jsx)(E,Object(s.a)({},e))}}),Object(g.jsx)(b.a,{path:"/book/:bookId",render:function(t){return Object(g.jsx)(P,Object(s.a)({user:e.state.loggedInUser,handleAddBook:e.handleAddBook,handleDelete:e.handleDelete,handleEditBook:e.handleEditBook},t))}}),Object(g.jsx)(b.a,{exact:!0,path:"/messages",render:function(e){return Object(g.jsx)(W,Object(s.a)({},e))}}),Object(g.jsx)(b.a,{path:"/messages/:contactId",render:function(e){return Object(g.jsx)(Y,Object(s.a)({},e))}}),Object(g.jsx)(b.a,{exact:!0,path:"/profile",render:function(t){return Object(g.jsx)(R,Object(s.a)({userLibrary:e.state.userLibrary,user:e.state.loggedInUser,handleAddBook:e.handleAddBook,handleDelete:e.handleDelete,handleEditBook:e.handleEditBook,handleProfileChange:e.handleProfileChange,handlePhoto:e.handlePhoto},t))}}),Object(g.jsx)(b.a,{path:"/error",render:function(t){return Object(g.jsx)(J,Object(s.a)({error:e.state.error},t))}}),Object(g.jsx)(b.a,{component:J})]}),Object(g.jsx)(q,{})]})}}]),a}(n.Component),Q=Object(b.f)(K);o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(O.a,{children:Object(g.jsx)(Q,{})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.9305e2da.chunk.js.map