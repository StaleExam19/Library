var s=document.querySelector(".modal-container"),m=document.querySelector(".overlay"),g=document.getElementById("add-book-form"),d=document.querySelector(".book-container"),l=document.getElementById("ind");var S=e=>`
    <div class="book-card" data-toggle="dialog" id="${e.id}">
        <h3 class="text-2xl pointer-events-none">${e.title}</h3>
        <p class="pointer-events-none">${e.author}</p>
        <p class="pointer-events-none">${e.pages} pages</p>
        <p class="pointer-events-none">Read: 
        <span class="${e.read?"text-green-500":"text-rose-500"}">
        ${e.read?"Yes":"Not Yet"}
        </span></p>
    </div>
`,n=()=>{d.innerHTML="";let e=JSON.parse(localStorage.getItem("books"));e.length!==0&&(l?.classList.add("hidden"),e.map(t=>{d.innerHTML+=S(t)}))},p=()=>{let e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t="";for(let o=0;o<16;o++)t+=e[Math.floor(Math.random()*e.length-1)];return t},u=e=>{s?.classList.replace("hidden","flex"),document.querySelectorAll(".dialog").forEach(t=>t.classList.replace("flex","hidden")),document.getElementById(e)?.classList.replace("hidden","flex")};var i=localStorage.getItem("books");i||(localStorage.setItem("books",JSON.stringify([])),i=localStorage.getItem("books"),l?.classList.remove("hidden"));JSON.parse(i).length!==0&&(l?.classList.add("hidden"),n());var k,f=e=>k=e,c=()=>k;m?.addEventListener("click",e=>{s?.classList.add("hidden")});document.addEventListener("click",e=>{if(e.target.matches("[data-toggle]")){let t=e.target.getAttribute("data-toggle");if(u(t),t==="dialog"){let o=e.target,a=JSON.parse(localStorage.getItem("books")).find(r=>r.id==o.id);f(a)}}});g?.addEventListener("submit",e=>{e.preventDefault();let t=document.getElementById("title"),o=document.getElementById("author"),a=document.getElementById("pages"),r=JSON.parse(localStorage.getItem("books"));r.push({title:t.value,author:o.value,pages:a.value,read:!1,id:p()}),localStorage.setItem("books",JSON.stringify(r)),t.value="",o.value="",a.value="",s?.classList.add("hidden"),n()});var h=document.getElementById("read"),B=document.getElementById("delete");h?.addEventListener("click",e=>{let t=c(),o=JSON.parse(localStorage.getItem("books")),a=o.findIndex(r=>r.id==t.id);o[a]={id:t.id,author:t.author,read:!0,title:t.title,pages:t.pages},localStorage.setItem("books",JSON.stringify(o)),n(),s?.classList.replace("flex","hidden")});B?.addEventListener("click",e=>{let t=c(),o=JSON.parse(localStorage.getItem("books")).filter(a=>a.id!==t.id);localStorage.setItem("books",JSON.stringify(o)),n(),s?.classList.replace("flex","hidden")});
//# sourceMappingURL=index.js.map