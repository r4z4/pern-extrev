(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{161:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){},264:function(e,t,a){},289:function(e,t){},291:function(e,t){},299:function(e,t){},301:function(e,t){},311:function(e,t){},313:function(e,t){},338:function(e,t){},340:function(e,t){},341:function(e,t){},346:function(e,t){},348:function(e,t){},367:function(e,t){},379:function(e,t){},382:function(e,t){},388:function(e,t){},396:function(e,t){},424:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(25),r=a.n(s),i=(a(244),a(23)),l=a(24),o=a(29),d=a(27),j=(a(245),a(1)),u=(n.Component,a(70)),b=a.n(u),O=(a(264),function(){return Object(j.jsx)(n.Fragment,{children:Object(j.jsx)("h1",{className:"text-center mt-5",children:"External Review Case List"})})}),h=a(3),m=a(9),x=a.n(m),f=a(17),p=a(15),g=(a(114),a(22)),v=a(83);a(268),a(269),a(161);function y(e){if(null===e)return null;var t=String(e).split(" "),a=new Date(t[0]),n=a.getDate(),c=a.getMonth()+1,s=a.getFullYear();return n<10&&(n="0"+n),c<10&&(c="0"+c),(a=s+"-"+c+"-"+n).toString()}var S=[{id:"null",name:"Unassigned"},{id:"iro01",name:"MCMC Services"},{id:"iro02",name:"Medical Consultants Network"},{id:"iro03",name:"H.H.C Group"},{id:"iro04",name:"HHC Group"},{id:"iro05",name:"MET Healthcare Solutions"},{id:"iro06",name:"NMR"},{id:"iro07",name:"Network Medical Review"},{id:"iro08",name:"MCN"},{id:"iro09",name:"National Medical Review"}],C=[{id:"ins01",name:"Blue Cross"},{id:"ins02",name:"Golden Rule"},{id:"ins03",name:"Bright Health"},{id:"ins04",name:"Cigna"},{id:"ins05",name:"Blue Cross"},{id:"ins06",name:"Golden Rule"},{id:"ins07",name:"Bright Health"},{id:"ins08",name:"Cigna"},{id:"ins09",name:"Federated Insurance"},{id:"ins10",name:"Golden Rule"},{id:"ins11",name:"Bright Health"},{id:"ins12",name:"National Health Insurance Company"}],N=["No Decision Yet","Upheld","Overturned","Partially Overturned"],D=function(e){var t=e.id,a=e.name,n=e.checked,c=e.onChangeFunction;return Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"checkbox",id:t,name:a,checked:n,onChange:c})})},w=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(h.a)(s,2),i=r[0],l=r[1],o=Object(n.useState)(""),d=Object(h.a)(o,2),u=d[0],b=d[1],O=Object(n.useState)(""),m=Object(h.a)(O,2),y=(m[0],m[1],Object(n.useState)("")),w=Object(h.a)(y,2),k=w[0],F=w[1],I=Object(n.useState)(""),E=Object(h.a)(I,2),V=E[0],R=E[1],T=Object(n.useState)(""),P=Object(h.a)(T,2),A=P[0],M=P[1],H=Object(n.useState)(!1),L=Object(h.a)(H,2),U=L[0],_=L[1],B=Object(n.useState)(""),K=Object(h.a)(B,2),J=K[0],G=K[1],Y=Object(n.useState)(""),z=Object(h.a)(Y,2),W=z[0],q=z[1],Q=Object(n.useState)(""),X=Object(h.a)(Q,2),Z=X[0],$=X[1],ee=Object(n.useState)(""),te=Object(h.a)(ee,2),ae=te[0],ne=te[1],ce=Object(n.useState)(""),se=Object(h.a)(ce,2),re=se[0],ie=se[1],le=Object(n.useState)(""),oe=Object(h.a)(le,2),de=oe[0],je=oe[1],ue=Object(n.useState)(""),be=Object(h.a)(ue,2),Oe=be[0],he=be[1],me=Object(n.useState)(""),xe=Object(h.a)(me,2),fe=xe[0],pe=xe[1],ge=function(){var e=Object(f.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={dateforwarded:a,caseid:i,patientid:u,insurerid:k,providerid:V,iroid:A,denialreason:J,eligibilitynotice:W,eligiblecorrespondence:Z,insurernotified:ae,decisiondate:de,irodecision:re,fileclosed:Oe,invoiceamount:fe},e.next=5,fetch("http://localhost:3001/eligibilecases",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:c=e.sent,console.log("OnSubForm"+c),Window.location="/",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(f.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={dateforwarded:a,caseid:i,patientid:u,insurerid:k,providerid:V,iroid:A,denialreason:J,eligibilitynotice:W,eligiblecorrespondence:Z,insurernotified:ae,decisiondate:de,irodecision:re,fileclosed:Oe,invoiceamount:fe},e.next=5,fetch("http://localhost:3001/eligiblecases",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:c=e.sent,console.log("addCase"+c),alert("Sucessfully Added Case # "+i),window.location.reload(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0.message),alert("Unable to Add Case # "+i+"; Message = "+e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)(n.Fragment,{children:Object(j.jsxs)("form",{className:"modal-form",onSubmit:ge,children:[Object(j.jsxs)("div",{className:"leftInputCase",children:[Object(j.jsx)("label",{children:"Date Forwarded"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:new Date,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return c(e)}}),Object(j.jsx)("label",{children:"Case ID"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:i,onChange:function(e){return l(e.target.value)}}),Object(j.jsx)("label",{for:"modal_chkbx",children:"Expedited"}),Object(j.jsx)(D,{id:"modal_chkbx",className:"form-control",name:"expedited",checked:U,onChangeFunction:function(){return _(!U)}}),Object(j.jsx)("label",{children:"Patient ID"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:u,onChange:function(e){return b(e.target.value)}}),Object(j.jsx)("label",{children:"Insurer"}),Object(j.jsx)(g.a,{className:"form-control",defaultValue:"ins01",data:C,dataKey:"id",textField:"name",onChange:function(e){return F(e.id)}}),Object(j.jsx)("label",{children:"Provider ID"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:V,onChange:function(e){return R(e.target.value)}}),Object(j.jsx)("label",{children:"Denial Reason"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:J,onChange:function(e){return G(e.target.value)}}),Object(j.jsx)("label",{children:"Eligibility Notice"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:new Date,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return q(e)}})]}),Object(j.jsxs)("div",{className:"rightInputCase",children:[Object(j.jsx)("label",{children:"Eligibility Correspondence"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:new Date,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return $(e)}}),Object(j.jsx)("label",{children:"Insurer Notified"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:new Date,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return ne(e)}}),Object(j.jsx)("label",{children:"IRO"}),Object(j.jsx)(g.a,{className:"form-control",defaultValue:"null",data:S,dataKey:"id",textField:"name",onChange:function(e){return M(e.id)}}),Object(j.jsx)("label",{children:"Decision Date"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:new Date,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return je(e)}}),Object(j.jsx)("label",{children:"IRO Decision"}),Object(j.jsx)(g.a,{className:"form-control",defaultValue:"No Decision Yet",data:N,onChange:function(e){return ie(e)}}),Object(j.jsx)("label",{children:"File Closed"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:new Date,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return he(e)}}),Object(j.jsx)("label",{children:"Invoice Amount"}),Object(j.jsx)(v.a,{className:"form-control",defaultValue:500,step:50,max:2e3,min:0,format:{style:"currency",currency:"USD"},onChange:function(e){return pe(e)}})]}),Object(j.jsx)("button",{className:"btn btn-success",onClick:ve,children:"Add"})]})})},k=a(60),F=a(87),I=a(429),E=a(430),V=a(40),R=function(e){var t=e.extcase,a=Object(n.useState)(t.dateforwarded),c=Object(h.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(t.caseid),l=Object(h.a)(i,2),o=l[0],d=l[1],u=Object(n.useState)(t.patientid),b=Object(h.a)(u,2),O=b[0],m=b[1],y=Object(n.useState)(t.rep),D=Object(h.a)(y,2),w=(D[0],D[1],Object(n.useState)(t.insurerid)),k=Object(h.a)(w,2),F=k[0],I=k[1],E=Object(n.useState)(t.providerid),R=Object(h.a)(E,2),T=R[0],P=R[1],A=Object(n.useState)(t.denialreason),M=Object(h.a)(A,2),H=M[0],L=M[1],U=Object(n.useState)(t.iroid),_=Object(h.a)(U,2),B=_[0],K=_[1],J=Object(n.useState)(t.expedited),G=Object(h.a)(J,2),Y=G[0],z=G[1],W=Object(n.useState)(t.irodecision),q=Object(h.a)(W,2),Q=q[0],X=q[1],Z=Object(n.useState)(t.decisiondate),$=Object(h.a)(Z,2),ee=$[0],te=$[1],ae=Object(n.useState)(t.eligibilitynotice),ne=Object(h.a)(ae,2),ce=ne[0],se=ne[1],re=Object(n.useState)(t.eligiblecorrespondence),ie=Object(h.a)(re,2),le=ie[0],oe=ie[1],de=Object(n.useState)(t.insurernotified),je=Object(h.a)(de,2),ue=je[0],be=je[1],Oe=Object(n.useState)(t.fileclosed),he=Object(h.a)(Oe,2),me=he[0],xe=he[1],fe=Object(n.useState)(parseInt(t.invoiceamount)),pe=Object(h.a)(fe,2),ge=pe[0],ve=pe[1],ye=Object(n.useState)(!1),Se=Object(h.a)(ye,2),Ce=Se[0],Ne=Se[1],De=function(){Ne(!1)},we=t.caseid,ke=function(){var e=Object(f.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a={id_to_edit:we,dateforwarded:s,caseid:o,patientid:O,insurerid:F,providerid:T,iroid:B,denialreason:H,eligibilitynotice:ce,eligiblecorrespondence:le,insurernotified:ue,decisiondate:ee,irodecision:Q,fileclosed:me,invoiceamount:ge},e.next=5,fetch("/eligiblecases",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 5:n=e.sent,console.log("updateCase"+n),alert("Sucessfully Updated Case # "+we),window.location.reload(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0.message),alert("Unable to Update.  Please Check SQL");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){return Ne(!0)},value:we,children:"Edit"}),Object(j.jsxs)(V.a,{show:Ce,onHide:De,backdrop:"static",keyboard:!1,size:"lg",style:{content:{display:"inline"}},children:[Object(j.jsx)(V.a.Header,{closeButton:!0,children:Object(j.jsx)(V.a.Title,{children:"Edit Case"})}),Object(j.jsx)(V.a.Body,{children:Object(j.jsxs)("div",{className:"mb-container",children:[Object(j.jsxs)("div",{className:"flex-row",children:[Object(j.jsx)("label",{children:"Date Forwarded"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:new Date(t.dateforwarded),valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return r(new Date(e))}})]}),Object(j.jsxs)("div",{class:"flex-row",children:[Object(j.jsx)("label",{children:"Case ID"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:o,onChange:function(e){return d(e.target.value)}})]}),Object(j.jsxs)("div",{class:"flex-row",children:[Object(j.jsx)("label",{children:"Expedited"}),Object(j.jsx)("input",{type:"checkbox",style:{display:"inline"},className:"form-control",name:"expedited",checked:Y,onChange:function(e){return z(!Y)}})]}),Object(j.jsxs)("div",{class:"flex-row",children:[Object(j.jsx)("label",{children:"Patient ID"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:O,onChange:function(e){return m(e.target.value)}})]}),Object(j.jsxs)("div",{class:"flex-row",children:[Object(j.jsx)("label",{children:"Insurer ID"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:F,onChange:function(e){return I(e.target.value)}})]}),Object(j.jsxs)("div",{class:"flex-row",children:[Object(j.jsx)("label",{children:"Provider ID"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:T,onChange:function(e){return P(e.target.value)}})]}),Object(j.jsxs)("div",{class:"flex-row",children:[Object(j.jsx)("label",{children:"IRO"}),Object(j.jsx)(g.a,{className:"form-control",defaultValue:t.iroid,data:S,dataKey:"id",textField:"name",onChange:function(e){return K(e.id)}})]}),Object(j.jsxs)("div",{class:"flex-row",children:[Object(j.jsx)("label",{children:"Insurer"}),Object(j.jsx)(g.a,{className:"form-control",defaultValue:t.insurerid,data:C,dataKey:"id",textField:"name",onChange:function(e){return I(e.id)}})]}),Object(j.jsxs)("div",{class:"flex-row",children:[Object(j.jsx)("label",{children:"Denial Reason"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:H,onChange:function(e){return L(e.target.value)}})]}),Object(j.jsxs)("div",{class:"flex-row",children:[Object(j.jsx)("label",{children:"Eligibility Notice"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:ce?new Date(t.eligibilitynotice):null,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return se(new Date(e))}})]}),Object(j.jsxs)("div",{class:"flex-row",children:[Object(j.jsx)("label",{children:"Eligibility Correspondence"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:t.eligiblecorrespondence?new Date(t.eligiblecorrespondence):null,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return oe(new Date(e))}})]}),Object(j.jsxs)("div",{class:"flex-row",children:[Object(j.jsx)("label",{children:"Insurer Notified"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:t.insurernotified?new Date(t.insurernotified):null,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return be(new Date(e))}})]}),Object(j.jsxs)("div",{class:"flex-row",children:[Object(j.jsx)("label",{children:"Decision Date"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:t.decisiondate?new Date(t.decisiondate):null,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return te(new Date(e))}})]}),Object(j.jsxs)("div",{class:"flex-row",children:[Object(j.jsx)("label",{children:"IRO Decision"}),Object(j.jsx)(g.a,{className:"form-control",defaultValue:t.irodecision,data:N,onChange:function(e){return X(e)}})]}),Object(j.jsxs)("div",{class:"flex-row",children:[Object(j.jsx)("label",{children:"File Closed"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:me?new Date(t.fileclosed):null,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return xe(e)}})]}),Object(j.jsxs)("div",{class:"flex-row",children:[Object(j.jsx)("label",{children:"Invoice Amount"}),Object(j.jsx)(v.a,{className:"form-control",defaultValue:parseInt(ge),step:50,max:2e3,min:0,format:{style:"currency",currency:"USD"},onChange:function(e){return ve(parseInt(e))}})]})]})}),Object(j.jsxs)(V.a.Footer,{children:[Object(j.jsx)("button",{type:"button",className:"btn btn-dark",onClick:De,children:"Close"}),Object(j.jsx)("button",{type:"button",className:"btn btn-info",onClick:ke,children:"Update"})]})]})]})},T=function(e){var t=e.extcase,a=Object(n.useState)(t.dateforwarded),c=Object(h.a)(a,2),s=(c[0],c[1],Object(n.useState)(t.caseid)),r=Object(h.a)(s,2),i=(r[0],r[1],Object(n.useState)(t.patientid)),l=Object(h.a)(i,2),o=(l[0],l[1],Object(n.useState)(t.rep)),d=Object(h.a)(o,2),u=(d[0],d[1],Object(n.useState)(t.insurerid)),b=Object(h.a)(u,2),O=(b[0],b[1],Object(n.useState)(t.providerid)),m=Object(h.a)(O,2),x=(m[0],m[1],Object(n.useState)(t.denialreason)),f=Object(h.a)(x,2),p=(f[0],f[1],Object(n.useState)(t.iroid)),g=Object(h.a)(p,2),v=(g[0],g[1],Object(n.useState)(t.expedited)),S=Object(h.a)(v,2),C=(S[0],S[1],Object(n.useState)(t.irodecision)),N=Object(h.a)(C,2),D=(N[0],N[1],Object(n.useState)(t.decisiondate)),w=Object(h.a)(D,2),k=(w[0],w[1],Object(n.useState)(t.eligibilitynotice)),F=Object(h.a)(k,2),I=(F[0],F[1],Object(n.useState)(t.eligiblecorrespondence)),E=Object(h.a)(I,2),R=(E[0],E[1],Object(n.useState)(t.insurernotified)),T=Object(h.a)(R,2),P=(T[0],T[1],Object(n.useState)(t.fileclosed)),A=Object(h.a)(P,2),M=(A[0],A[1],Object(n.useState)(parseInt(t.invoiceamount))),H=Object(h.a)(M,2),L=(H[0],H[1],Object(n.useState)(!1)),U=Object(h.a)(L,2),_=U[0],B=U[1],K=function(){B(!1)},J=t.caseid;return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("a",{onClick:function(){return B(!0)},value:J,style:{cursor:"pointer",color:"blue",fontWeight:"bold"},children:t.caseid}),Object(j.jsxs)(V.a,{show:_,onHide:K,backdrop:"static",keyboard:!1,size:"md",style:{content:{display:"inline"}},children:[Object(j.jsx)(V.a.Header,{closeButton:!0,children:Object(j.jsx)(V.a.Title,{children:"Case Details"})}),Object(j.jsx)(V.a.Body,{children:Object(j.jsxs)("div",{className:"mb-container",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"teal","margin-right":"20px"},children:"Date Forwarded:"})," ",y(t.dateforwarded)]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"teal","margin-right":"20px"},children:"Case ID:"})," ",t.caseid]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"teal","margin-right":"20px"},children:"Expedited:"})," ",t.expedited]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"teal","margin-right":"20px"},children:"Patient ID:"})," ",t.patientid]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"teal","margin-right":"20px"},children:"Insurer ID:"})," ",t.insurerid]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"teal","margin-right":"20px"},children:"Provider ID:"})," ",t.providerid]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"teal","margin-right":"20px"},children:"IRO ID:"})," ",t.iroid]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"teal","margin-right":"20px"},children:"Denial Reason:"})," ",t.denialreason]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"teal","margin-right":"20px"},children:"Eligibility Notice:"})," ",y(t.eligibilitynotice)]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"teal","margin-right":"20px"},children:"Eligibility Correspondence:"})," ",y(t.eligiblecorrespondence)]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"teal","margin-right":"20px"},children:"Insurer Notified:"})," ",y(t.insurernotified)]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"teal","margin-right":"20px"},children:"Decision Date:"})," ",y(t.decisiondate)]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"teal","margin-right":"20px"},children:"IRO Decision:"})," ",t.irodecision]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"teal","margin-right":"20px"},children:"File Closed:"})," ",y(t.fileclosed)]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{style:{color:"teal","margin-right":"20px"},children:"Invoice Amount:"})," ",t.invoiceamount]})]})}),Object(j.jsx)(V.a.Footer,{children:Object(j.jsx)("button",{type:"button",className:"btn btn-dark",onClick:K,children:"Close"})})]})]})},P=a(152),A=a.n(P),M=function(e){var t=e.extcase,a=Object(n.useState)(t.caseid),c=Object(h.a)(a,2),s=(c[0],c[1],function(){var e=Object(f.a)(x.a.mark((function e(t){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={caseid:t},e.next=4,fetch("http://localhost:3001/eligiblecases",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 4:n=e.sent,console.log("deleteCase"+n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}());return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("button",{type:"button",className:"btn btn-danger","data-toggle":"modal","data-target":"#id_".concat(t.caseid),children:"Delete"}),Object(j.jsx)("div",{className:"modal",id:"id_".concat(t.caseid),children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsx)("div",{className:"modal-header",children:Object(j.jsxs)("h2",{className:"modal-title",children:["Confirm Delete - Case ","".concat(t.caseid)]})}),Object(j.jsxs)("div",{className:"modal-footer",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:function(e){return s(t.caseid)},children:"Delete"}),Object(j.jsx)("button",{type:"button",className:"btn btn-warning","data-dismiss":"modal",children:"Close"})]})]})})})]})},H=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(h.a)(s,2),i=r[0],l=r[1],o=Object(n.useState)(),d=Object(h.a)(o,2),u=d[0],b=d[1],O=Object(n.useState)(),m=Object(h.a)(O,2),p=m[0],g=m[1],v=function(e){return Object(j.jsx)(I.a,Object(F.a)(Object(F.a)({id:"button-tooltip"},e),{},{children:e}))},S=function(){var e=Object(f.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/eligiblecases");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c(a.rows),l(a.rows),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){S()}),[]),Object(j.jsx)("div",{className:"listcase_frag",children:Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("p",{style:{"font-weight":"bold","margin-top":"30px","margin-bottom":"-50px","margin-left":"400px"},children:"Filter via Denial Reason or Name (Case Sensative):"}),Object(j.jsxs)("form",{className:"d-flex mt-5",children:[Object(j.jsx)("input",{type:"text",className:"form-control",value:u,onChange:function(e){return g(e.target.value)}}),Object(j.jsx)("button",{className:"btn btn-success",onClick:function(e){e.preventDefault(),console.log(p),function(e){var t=e;console.log(t);var n=Object(k.a)(a).filter((function(e){return e.denialreason.includes(t)||e.patientlname.includes(t)||e.patientfname.includes(t)}));console.log("Filtered:"+n),l(n)}(p)},children:"Filter"})," ",Object(j.jsx)("button",{className:"btn btn-dark",onClick:function(e){e.preventDefault(),l(a),b(null)},children:"Reset List"})]})," ",Object(j.jsxs)("table",{className:"table mt-5 text-center",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)(E.a,{placement:"right",delay:{show:250,hide:400},overlay:v("Click Case ID for Case Details"),children:Object(j.jsx)("th",{children:"Case ID"})}),Object(j.jsx)("th",{children:"Patient"}),Object(j.jsx)("th",{children:"Insurer"}),Object(j.jsx)("th",{children:"Provider"}),Object(j.jsx)("th",{children:"Denial Reason"}),Object(j.jsx)("th",{children:"Date Forwarded"}),Object(j.jsx)("th",{children:"Decision Date"}),Object(j.jsx)("th",{children:"IRO"}),Object(j.jsx)("th",{children:"IRO Decision"}),Object(j.jsx)("th",{children:"Edit"}),Object(j.jsx)("th",{children:"Delete"})]})}),Object(j.jsx)("tbody",{children:i.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)(T,{extcase:e})}),Object(j.jsxs)("td",{children:[e.patientfname," ",e.patientlname]}),Object(j.jsx)(E.a,{placement:"right",delay:{show:250,hide:400},overlay:v(e.insurerid),children:Object(j.jsx)("td",{children:e.insurername})}),Object(j.jsx)(E.a,{placement:"right",delay:{show:250,hide:400},overlay:v(e.providerid),children:Object(j.jsx)("td",{children:e.providername})}),Object(j.jsx)("td",{children:e.denialreason}),Object(j.jsx)("td",{children:y(e.dateforwarded)}),Object(j.jsx)("td",{children:y(e.decisiondate)}),Object(j.jsx)(E.a,{placement:"right",delay:{show:250,hide:400},overlay:v(e.iroid),children:Object(j.jsx)("td",{children:e.ironame})}),Object(j.jsx)("td",{children:e.irodecision}),Object(j.jsx)("td",{children:Object(j.jsx)(R,{extcase:e})}),Object(j.jsx)("td",{children:Object(j.jsx)(M,{extcase:e})})]},e.caseid)}))})]})]})})},L=a(71),U=(c.a.Component,function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(h.a)(s,2),i=r[0],l=r[1],o=Object(n.useState)(""),d=Object(h.a)(o,2),u=d[0],b=d[1],O=Object(n.useState)(""),m=Object(h.a)(O,2),v=m[0],y=m[1],S=Object(n.useState)(""),N=Object(h.a)(S,2),w=(N[0],N[1],Object(n.useState)("")),k=Object(h.a)(w,2),F=k[0],I=k[1],E=Object(n.useState)(""),V=Object(h.a)(E,2),R=V[0],T=V[1],P=Object(n.useState)(""),A=Object(h.a)(P,2),M=A[0],H=A[1],L=function(){var e=Object(f.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={caseid:u,dateforwarded:i,patientid:v,insurerid:F,providerid:R,denialreason:a},e.next=5,fetch("/eligiblecases",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:c=e.sent,console.log("addCase"+c),window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("button",{type:"button",className:"btn btn-dark","data-toggle":"modal","data-target":"#add-initial",style:{"margin-bottom":"30px","margin-left":"80px"},children:"Add Initial"}),Object(j.jsx)("div",{className:"modal",id:"add-initial",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h4",{className:"modal-title",children:"Add Initial Case"}),Object(j.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:"\xd7"})]}),Object(j.jsxs)("table",{className:"modal-body",style:{"margin-top":"10px"},children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Date Forwarded"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:new Date,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return l(e)}})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Case ID"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(j.jsx)("tr",{children:Object(j.jsx)("li",{className:"exp",children:Object(j.jsxs)("label",{for:"exp_chk",style:{"word-wrap":"break-word"},children:["Expedited",Object(j.jsx)(D,{id:"exp_chk",className:"form-control_exp",name:"expedited",checked:M,onChangeFunction:function(e){return H(!M)}})]})})}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Patient ID"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:v,onChange:function(e){return y(e.target.value)}})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Provider ID"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:R,onChange:function(e){return T(e.target.value)}})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Insurer"}),Object(j.jsx)(g.a,{className:"form-control",defaultValue:F,data:C,dataKey:"id",textField:"name",onChange:function(e){return I(e.id)}})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Denial Reason"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:a,onChange:function(e){return c(e.target.value)}})]})]}),Object(j.jsxs)("div",{className:"modal-footer",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:L,children:"Add Initial"}),Object(j.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"})]})]})})})]})}),_=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(h.a)(s,2),i=r[0],l=r[1],o=Object(n.useState)(""),d=Object(h.a)(o,2),u=d[0],b=d[1],O=Object(n.useState)(""),m=Object(h.a)(O,2),y=(m[0],m[1],Object(n.useState)("")),w=Object(h.a)(y,2),k=w[0],F=w[1],I=Object(n.useState)(""),E=Object(h.a)(I,2),V=E[0],R=E[1],T=Object(n.useState)(""),P=Object(h.a)(T,2),A=P[0],M=P[1],H=Object(n.useState)(!1),L=Object(h.a)(H,2),U=L[0],_=L[1],B=Object(n.useState)(""),K=Object(h.a)(B,2),J=K[0],G=K[1],Y=Object(n.useState)(""),z=Object(h.a)(Y,2),W=z[0],q=(z[1],Object(n.useState)("")),Q=Object(h.a)(q,2),X=Q[0],Z=Q[1],$=Object(n.useState)(""),ee=Object(h.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),ce=Object(h.a)(ne,2),se=ce[0],re=ce[1],ie=Object(n.useState)(""),le=Object(h.a)(ie,2),oe=le[0],de=le[1],je=Object(n.useState)(""),ue=Object(h.a)(je,2),be=ue[0],Oe=ue[1],he=Object(n.useState)(""),me=Object(h.a)(he,2),xe=me[0],fe=me[1],pe=function(){var e=Object(f.a)(x.a.mark((function e(t){var n,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={dateforwarded:a,caseid:i,patientid:u,insurerid:k,providerid:V,iroid:A,denialreason:J,eligibilitynotice:W,eligiblecorrespondence:X,insurernotified:te,decisiondate:oe,irodecision:se,fileclosed:be,invoiceamount:xe},e.next=5,fetch("http://localhost:3001/eligiblecases",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 5:c=e.sent,console.log("addCase"+c),alert("Sucessfully Added Case # "+i),window.location.reload(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0.message),alert("Unable to Add Case # "+i+"; Message = "+e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("button",{type:"button",className:"btn btn-dark","data-toggle":"modal","data-target":"#add-initial",style:{"margin-bottom":"10px","margin-left":"80px"},children:"Add Full Case"}),Object(j.jsx)("div",{className:"modal",id:"add-initial",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h4",{className:"modal-title",children:"Add Full Case"}),Object(j.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:"\xd7"})]}),Object(j.jsxs)("table",{className:"modal-body",style:{"margin-top":"10px"},children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Date Forwarded"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:new Date,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return c(e)}})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Case ID"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(j.jsx)("tr",{children:Object(j.jsx)("li",{className:"exp",children:Object(j.jsxs)("label",{for:"exp_chk",style:{"word-wrap":"break-word"},children:["Expedited",Object(j.jsx)(D,{id:"exp_chk",className:"form-control_exp",name:"expedited",checked:U,onChangeFunction:function(e){return _(!U)}})]})})}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Patient ID"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:u,onChange:function(e){return b(e.target.value)}})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Provider ID"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:V,onChange:function(e){return R(e.target.value)}})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Insurer"}),Object(j.jsx)(g.a,{className:"form-control",defaultValue:k,data:C,dataKey:"id",textField:"name",onChange:function(e){return F(e.id)}})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Denial Reason"}),Object(j.jsx)("input",{type:"text",className:"form-control",value:J,onChange:function(e){return G(e.target.value)}})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Eligibility Corr."}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:new Date,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return Z(e)}})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Insurer Notified"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:new Date,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return ae(e)}})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"IRO"}),Object(j.jsx)(g.a,{className:"form-control",defaultValue:"null",data:S,dataKey:"id",textField:"name",onChange:function(e){return M(e.id)}})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Decision Date"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:new Date,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return de(e)}})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"IRO Decision"}),Object(j.jsx)(g.a,{className:"form-control",defaultValue:"No Decision Yet",data:N,onChange:function(e){return re(e)}})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"File Closed"}),Object(j.jsx)(p.a,{className:"form-control",defaultValue:new Date,valueEditFormat:{dateStyle:"short"},valueDisplayFormat:{dateStyle:"medium"},onChange:function(e){return Oe(e)}})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("label",{children:"Invoice Amount"}),Object(j.jsx)(v.a,{className:"form-control",defaultValue:500,step:50,max:2e3,min:0,format:{style:"currency",currency:"USD"},onChange:function(e){return fe(e)}})]})]}),Object(j.jsxs)("div",{className:"modal-footer",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:pe,children:"Add Case"}),Object(j.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Close"})]})]})})})]})},B=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={modal:!1},n.toggleMenu=n.toggleMenu.bind(Object(L.a)(n)),n}return Object(l.a)(a,[{key:"toggleMenu",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this.state.modal?"show":"";return Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"/",children:"Navbar"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button",onClick:this.toggleMenu,children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse "+e,children:Object(j.jsxs)("div",{className:"navbar-nav",children:[Object(j.jsxs)("a",{className:"nav-item nav-link active",href:"/",children:["Home ",Object(j.jsx)("span",{className:"sr-only",children:"(current)"})]}),Object(j.jsx)("a",{className:"nav-item nav-link",href:"/",children:"Features"}),Object(j.jsx)("a",{className:"nav-item nav-link",href:"/",children:"Pricing"}),Object(j.jsx)("a",{className:"nav-item nav-link",href:"/",children:"logout"})]})})]})}}]),a}(n.Component),K=(a(274),new A.a("../keycloak.json")),J=K.login,G=K.logout,Y={initKeycloak:function(e){K.init({onLoad:"check-sso",silentCheckSsoRedirectUri:"http://localhost:3000/eligiblecases",silentCheckSsoFallback:!1,pkceMethod:"S256"}).then((function(e){e?console.log("authenticated"):J()})).catch((function(e){return console.log("keycloak init exception: ".concat(e))}))},doLogin:J,doLogout:G,isLoggedIn:function(){return!!K.token},getToken:function(){return K.token},updateToken:function(e){return K.updateToken(5).then(e).catch(J)},getUsername:function(){var e;return null===(e=K.tokenParsed)||void 0===e?void 0:e.preferred_username},hasRole:function(e){return e.some((function(e){return K.hasRealmRole(e)}))}},z=function(){return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("button",{onClick:Y.doLogout,style:{float:"left","margin-left":"80px"},children:"Logout"}),Object(j.jsx)("label",{children:"Signed in as: KeycloakUser"})]})},W=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={message:""},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"mainPage",children:[Object(j.jsx)(O,{className:"header"}),Object(j.jsxs)("div",{style:{"margin-bottom":"70px",width:"100%"},children:[Object(j.jsx)(z,{}),Object(j.jsxs)("div",{style:{float:"right"},children:[Object(j.jsx)(_,{style:{float:"right"}}),Object(j.jsx)("br",{}),Object(j.jsx)(U,{style:{float:"right"}})]})]}),Object(j.jsx)(H,{}),Object(j.jsx)(B,{})]})}}]),a}(n.Component),q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,431)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},Q=b.a.create(),X={HttpMethods:{GET:"GET",POST:"POST",DELETE:"DELETE"},configure:function(){Q.interceptors.request.use((function(e){if(Y.isLoggedIn()){return Y.updateToken((function(){return e.headers.Authorization="Bearer ".concat(Y.getToken()),Promise.resolve(e)}))}}))},getAxiosClient:function(){return Q}},Z=r.a.render(Object(j.jsx)(W,{}),document.getElementById("root"));Y.initKeycloak(Z),X.configure(),q()}},[[424,1,2]]]);
//# sourceMappingURL=main.45de07f8.chunk.js.map