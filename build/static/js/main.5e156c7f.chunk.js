(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{289:function(e,n,t){"use strict";t.r(n);var i=t(2),r=t(3),c=t.n(r),s=t(79),a=t.n(s),o=(t(94),t(87)),l=t(11),u=t(12),j=t(14),d=t(13),b=t(19),x=t(20);function p(){var e=Object(b.a)(["\n    padding: 15px 50px;\n    margin: 10px;\n    border: 2px solid #db7093;\n    background: none;\n    border-radius: 30px;\n    cursor: pointer;\n    color: #fff;\n"]);return p=function(){return e},e}function f(){var e=Object(b.a)(["\n    width: 50%;\n    margin: 10px 0;\n    font-size: 1.5em;\n    padding: 10px;\n    background: none;\n    outline: none;\n    border: 1px solid #fff;\n    color: #fff;\n"]);return f=function(){return e},e}function h(){var e=Object(b.a)(["\n    width: 50%;\n    margin: 10px 0;\n    font-size: 1.5em;\n    padding: 10px;\n    background: none;\n    outline: none;\n    border: 1px solid #fff;\n    color: #fff;\n"]);return h=function(){return e},e}function O(){var e=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    align-items: center;\n"]);return O=function(){return e},e}function g(){var e=Object(b.a)(["\n    height: 60px;\n    margin: 15px;\n"]);return g=function(){return e},e}function m(){var e=Object(b.a)(["\n    width: 65%; \n    color: #fff;\n    text-align: center;\n    margin: auto;\n"]);return m=function(){return e},e}function v(){var e=Object(b.a)(["\n    width: 100%;\n    background-color: rgba(255, 255, 255, 0.2);\n    padding: 40px 0;\n"]);return v=function(){return e},e}function y(){var e=Object(b.a)(["\n    width: 65%; \n    color: #fff;\n    text-align: center;\n    margin: auto;\n"]);return y=function(){return e},e}function k(){var e=Object(b.a)(["\n    width: 100%;\n    background-color: rgba(255, 255, 255, 0.1);\n    padding: 40px 0;\n"]);return k=function(){return e},e}function w(){var e=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    align-items: center;\n"]);return w=function(){return e},e}function C(){var e=Object(b.a)(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    padding: 60px;\n"]);return C=function(){return e},e}var S=x.a.div(C()),F=(x.a.form(w()),x.a.div(k())),z=x.a.div(y()),E=x.a.div(v()),D=x.a.div(m()),R=x.a.img(g()),M=x.a.form(O()),A=x.a.input(h()),H=x.a.textarea(f()),B=x.a.button(p()),N=t(88),q=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(i.jsxs)(N.a,{children:[Object(i.jsx)("span",{style:{color:"#EE9785"},children:"MERN Stack Devloper"}),Object(i.jsx)("span",{style:{color:"#76F9A5"},children:"Mongo Developer"}),Object(i.jsx)("span",{style:{color:"#85A3EE"},children:"Express Developer"}),Object(i.jsx)("span",{style:{color:"#d3d083"},children:"React Developer"}),Object(i.jsx)("span",{style:{color:"#f05600"},children:"NodeJS Developer"})]})}}]),t}(c.a.Component),J=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(i.jsxs)(S,{children:[Object(i.jsxs)("div",{style:{flex:"0.7",margin:"0"},children:[Object(i.jsx)("h1",{children:Object(i.jsx)("span",{style:{textAlign:"center",fontSize:"2em",fontWeight:"bold"},children:"Hello"})}),Object(i.jsx)("h1",{children:"My name is Rohan..."}),Object(i.jsx)("div",{children:Object(i.jsxs)("h2",{children:["I am a",Object(i.jsx)("p",{style:{display:"inline"},children:" "}),Object(i.jsx)(q,{})]})}),Object(i.jsx)("h2",{children:"seeking job oppurtunities"})]}),Object(i.jsx)("div",{style:{flex:"0.2"},children:Object(i.jsx)("img",{src:"logo192.png",alt:"dp"})})]})}}]),t}(c.a.Component),W=t(22),I=t.n(W),T=t(84),L=t(85),P=t.n(L),_=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={name:"",email:"",message:"",status:""},e.sendMsg=function(){var n=Object(T.a)(I.a.mark((function n(t){var i,r,c,s;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),i=e.state,r=i.name,c=i.email,s=i.message,r&&c&&s){n.next=4;break}return n.abrupt("return",{status:"unsuccess",state:"Empty Fields"});case 4:return n.next=6,P()({method:"post",url:"http://rohan-blog-network.herokuapp.com/message",data:{name:r,email:c,message:s}});case 6:console.log("Message sent"),e.setState({name:"",email:"",message:"",status:"Message Sent"}),setTimeout((function(){e.setState({status:""})}),1e4);case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(i.jsxs)(M,{onSubmit:this.sendMsg,children:[Object(i.jsx)("h4",{children:this.state.status}),Object(i.jsx)(A,{value:this.state.name,onChange:function(n){e.setState({name:n.target.value})},type:"text",placeholder:"Name",autoComplete:"off"}),Object(i.jsx)(A,{value:this.state.email,onChange:function(n){e.setState({email:n.target.value})},type:"text",placeholder:"Email",autoComplete:"off"}),Object(i.jsx)(H,{value:this.state.message,onChange:function(n){e.setState({message:n.target.value})},placeholder:"Message"}),Object(i.jsx)(B,{type:"submit",children:"Submit"})]})}}]),t}(c.a.Component),G=t(86),K=t.n(G),Q=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(i.jsx)(K.a,{id:"particles",options:{background:{color:{value:"#000"}},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:4},repulse:{distance:100,duration:.4}}},particles:{color:{value:["#3998D0","#2EB6AF","#A9BD33","#FEC73B","#F89930","#F45623","#D62E32","#EB586E","#9952CF"]},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:2,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.7},shape:{type:"circle"},size:{random:!0,value:4}},detectRetina:!0}})}}]),t}(c.a.Component),U=function(){return Object(i.jsx)(F,{children:Object(i.jsxs)(z,{children:[Object(i.jsx)("h1",{style:{fontSize:"2em"},children:"Technologies I know of"}),Object(i.jsxs)("div",{style:{margin:"0 10px"},children:[Object(i.jsx)(R,{src:"./images/nodejs.svg",alt:"linux-icon"}),Object(i.jsx)(R,{src:"./images/react.svg",alt:"linux-icon"}),Object(i.jsx)(R,{src:"./images/redux.svg",alt:"linux-icon"}),Object(i.jsx)(R,{src:"./images/mongodb.svg",alt:"linux-icon"}),Object(i.jsx)(R,{src:"./images/javascript.svg",alt:"linux-icon"}),Object(i.jsx)(R,{src:"./images/python.svg",alt:"linux-icon"}),Object(i.jsx)(R,{src:"./images/git.svg",alt:"linux-icon"}),Object(i.jsx)(R,{src:"./images/mysql.svg",alt:"linux-icon"}),Object(i.jsx)(R,{src:"./images/ubuntu.svg",alt:"ubuntu-icon"}),Object(i.jsx)(R,{src:"./images/linux.svg",alt:"linux-icon"}),Object(i.jsx)(R,{src:"./images/rabbitmq.svg",alt:"linux-icon"}),Object(i.jsx)(R,{src:"./images/vscode.svg",alt:"linux-icon"}),Object(i.jsx)(R,{src:"./images/css3.svg",alt:"linux-icon"}),Object(i.jsx)(R,{src:"./images/html5.svg",alt:"linux-icon"}),Object(i.jsx)(R,{src:"./images/mocha.svg",alt:"linux-icon"})]})]})})},V=function(){return Object(i.jsxs)("div",{className:"social",children:[Object(i.jsx)("a",{href:"https://github.com/riskyMachine",style:{filter:"invert(100%)",opacity:"0.6"},children:Object(i.jsx)("img",{style:{height:"60px"},src:"./images/social-icon/github.png",alt:"github"})}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/rohan-kanojia-77b55b15a/",style:{filter:"invert(100%)",opacity:"0.6"},children:Object(i.jsx)("img",{style:{height:"60px"},src:"./images/social-icon/linkedin.png",alt:"github"})})]})},X=t(18),Y=t.n(X),Z=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{style:{padding:"10px"},children:Object(i.jsxs)(Y.a,{flipOnHover:!0,flipOnClick:!0,flipDirection:"horizontal",ref:function(n){return e.flippy=n},style:{width:"300px",height:"400px"},children:[Object(i.jsx)(X.FrontSide,{style:{fontFamily:"sans-serif",backgroundColor:"rgba(255, 255, 255,0.1)",borderRadius:"4px"},children:$()}),Object(i.jsx)(X.BackSide,{style:{fontFamily:"sans-serif",backgroundColor:"rgba(255, 0, 0, 0.2)",borderRadius:"4px"}})]})})}}]),t}(c.a.Component),$=function(){return Object(i.jsxs)("div",{style:ee,children:[Object(i.jsx)("div",{children:Object(i.jsx)("span",{style:{margin:"0",fontSize:"130%",opacity:"0.6"},children:"Professional"})}),Object(i.jsx)("div",{children:Object(i.jsx)(R,{src:"./images/social-icon/portfolio.svg",alt:"icon"})})]})},ee={minWidth:"100%",minHeight:"100%",color:"#000",display:"flex",flexFlow:"column wrap",justifyContent:"center"},ne=Z,te=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{style:{padding:"10px"},children:Object(i.jsxs)(Y.a,{flipOnHover:!0,flipOnClick:!0,flipDirection:"horizontal",ref:function(n){return e.flippy=n},style:{width:"300px",height:"400px"},children:[Object(i.jsx)(X.FrontSide,{style:{fontFamily:"sans-serif",backgroundColor:"rgba(255, 255, 255,0.1)",borderRadius:"4px"},children:ie()}),Object(i.jsx)(X.BackSide,{style:{fontFamily:"sans-serif",backgroundColor:"rgba(255, 0, 0, 0.2)",borderRadius:"4px"}})]})})}}]),t}(c.a.Component),ie=function(){return Object(i.jsxs)("div",{style:re,children:[Object(i.jsx)("div",{children:Object(i.jsx)("span",{style:{margin:"0",fontSize:"130%",opacity:"0.6"},children:"NodeJS"})}),Object(i.jsx)("div",{children:Object(i.jsx)(R,{src:"./images/social-icon/node.svg",alt:"Node"})})]})},re={minWidth:"100%",minHeight:"100%",color:"#000",display:"flex",flexFlow:"column wrap",justifyContent:"center"},ce=te,se=function(e){Object(j.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{style:{padding:"10px"},children:Object(i.jsxs)(Y.a,{flipOnHover:!0,flipOnClick:!0,flipDirection:"horizontal",ref:function(n){return e.flippy=n},style:{width:"300px",height:"400px"},children:[Object(i.jsx)(X.FrontSide,{style:{fontFamily:"sans-serif",backgroundColor:"rgba(255, 255, 255,0.1)",borderRadius:"4px"},children:ae()}),Object(i.jsx)(X.BackSide,{style:{fontFamily:"sans-serif",backgroundColor:"rgba(255, 0, 0, 0.2)",borderRadius:"4px"}})]})})}}]),t}(c.a.Component),ae=function(){return Object(i.jsxs)("div",{style:oe,children:[Object(i.jsx)("div",{children:Object(i.jsx)("span",{style:{margin:"0",fontSize:"130%",opacity:"0.6"},children:"ReactJS"})}),Object(i.jsx)("div",{children:Object(i.jsx)(R,{src:"logo192.png",alt:"React"})})]})},oe={minWidth:"100%",minHeight:"100%",color:"#000",display:"flex",flexFlow:"column wrap",justifyContent:"center"},le=se,ue={margin:"0 10px",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"},je=function(){return Object(i.jsx)(E,{children:Object(i.jsxs)(D,{children:[Object(i.jsx)("h1",{style:{fontSize:"2em"},children:"Experience"}),Object(i.jsxs)("div",{style:ue,children:[Object(i.jsx)(ne,{}),Object(i.jsx)(ce,{}),Object(i.jsx)(le,{})]})]})})},de=function(){return Object(i.jsx)(o.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(Q,{}),Object(i.jsx)(J,{}),Object(i.jsx)(U,{}),Object(i.jsx)(je,{}),Object(i.jsx)("h1",{style:{textAlign:"center"},children:"Have any queries?"}),Object(i.jsx)(_,{}),Object(i.jsx)("h1",{style:{textAlign:"center"},children:"Contact Me"}),Object(i.jsx)(V,{})]})})};a.a.render(Object(i.jsx)(de,{}),document.querySelector("#root"))},94:function(e,n,t){}},[[289,1,2]]]);
//# sourceMappingURL=main.5e156c7f.chunk.js.map