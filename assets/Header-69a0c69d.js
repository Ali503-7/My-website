import{r as s,P as C,a as l,j as e,p as c,F as f}from"./index-29449b23.js";import{H as h}from"./hackingTransition-bdcf8f99.js";function v({showManu:a,Toggle:d}){const r=s.useRef(null),{whereAMi:E}=s.useContext(C),[o,i]=s.useState({zIndex:-1});return s.useEffect(()=>{const t=r.current.children;for(let n=0;n<10;n++){const N=t[n].dataset.delay;document.documentElement.style.setProperty(`--delay-${n}`,N)}},[]),s.useEffect(()=>{setTimeout(()=>{a||i({zIndex:-1})},1e3),a&&i({zIndex:1e3})},[a]),l("div",{className:a?"nav show":"nav",ref:r,style:o,children:[e("div",{className:"bar","data-delay":".4s"}),e("div",{className:"bar","data-delay":".5s"}),e("div",{className:"bar","data-delay":".6s"}),e("div",{className:"bar","data-delay":".7s",children:e("a",{href:"#ABOUT",onClick:()=>{E(c.HOME_PAGE.NAME,c.HOME_PAGE.NUM),d()},children:"ABOUT"})}),e("div",{className:"bar","data-delay":".8s",children:e("a",{href:"#SKILLS",onClick:()=>{E(c.SKILLS_PAGE.NAME,c.SKILLS_PAGE.NUM),d()},children:"SKILLS"})}),e("div",{className:"bar","data-delay":".9s",children:e("a",{href:"#EXPERIENCE",onClick:()=>{E(c.EXPERIENCE_PAGE.NAME,c.EXPERIENCE_PAGE.NUM),d()},children:"EXPERIENCE"})}),e("div",{className:"bar","data-delay":"1.1s",children:e("a",{href:"#CONTACT",onClick:()=>{E(c.CONTACT_PAGE.NAME,c.CONTACT_PAGE.NUM),d()},children:"CONTACT"})}),e("div",{className:"bar","data-delay":"1.2s"}),e("div",{className:"bar","data-delay":"1.3s"}),e("div",{className:"bar","data-delay":"1.5s"})]})}function S({currentPage:a}){const[d,r]=s.useState(!1),[E,o]=s.useState(!1),{whereAMi:i}=s.useContext(C),t=s.useRef(null),n=s.useRef(null),N=s.useRef(null);s.useEffect(()=>{h(t,6),h(n,6),h(N,6)},[]);function m(){r(A=>!A),o(A=>!A)}return l(f,{children:[e(v,{showManu:d,Toggle:m}),e("header",{className:"header",children:l("div",{className:"container",children:[e("div",{className:"logo",onClick:()=>i(a.HOME_PAGE.NAME,a.HOME_PAGE.NUM),children:e("img",{src:"./imgs/logs/logo.png",alt:"#"})}),l("div",{className:"right",children:[l("div",{className:E?"burger burger-clicked":"burger",onClick:()=>{m()},children:[e("span",{}),e("span",{}),e("span",{})]}),e("div",{className:"links",children:e("div",{className:"link",children:l("ol",{children:[e("li",{children:l("a",{href:"#About",onClick:()=>i(a.HOME_PAGE.NAME,a.HOME_PAGE.NUM),children:[e("span",{className:"navNumber",children:"01."})," ",e("span",{"data-value":"About",ref:t,className:a.HOME_PAGE.STATE?"active":"",children:"About"})]})}),e("li",{children:l("a",{href:"#Skills",onClick:()=>i(a.SKILLS_PAGE.NAME,a.SKILLS_PAGE.NUM),children:[e("span",{className:"navNumber",children:"02."})," ",e("span",{"data-value":"Skills",ref:t,className:a.SKILLS_PAGE.STATE?"active":"",children:"Skills"})]})}),e("li",{children:l("a",{href:"#Experience",onClick:()=>i(a.EXPERIENCE_PAGE.NAME,a.EXPERIENCE_PAGE.NUM),children:[e("span",{className:"navNumber",children:"03. "}),e("span",{"data-value":"Experience",ref:n,className:a.EXPERIENCE_PAGE.STATE?"active":"",children:"Experience"})]})}),e("li",{children:l("a",{href:"#Contact",onClick:()=>i(a.CONTACT_PAGE.NAME,a.CONTACT_PAGE.NUM),children:[e("span",{className:"navNumber",children:"04."}),e("span",{"data-value":"Contact",ref:N,className:a.CONTACT_PAGE.STATE?"active":"",children:"Contact"})]})})]})})})]})]})})]})}export{S as default};