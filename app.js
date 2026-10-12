(() => {
"use strict";
const state={category:"all",query:""};
const categoryNames={games:"游戏与模拟",science:"科学与复杂系统",art:"交互艺术与 3D",learning:"教育与学习工具",agents:"AI Agent 与开发工具"};
const grid=document.getElementById("projectGrid"), filters=document.getElementById("filters");
const create=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e;};
function card(p){
const el=create("article","project");
const top=create("div","project-top");top.append(create("span","cat-tag",categoryNames[p.category]||p.category),create("span","stage",p.stage));el.append(top);
el.append(create("h3","",p.name),create("p","summary",p.summary));
const v=create("p","value");v.append(create("strong","",p.tier==="featured"?"重点展示 · ":p.tier==="strong"?"值得展示 · ":"探索阶段 · "),document.createTextNode(p.value));el.append(v);
const meta=create("div","meta");meta.append(create("span","stack",p.stack));
const href=p.url||p.repo;
if(href){const a=create("a","project-link",p.url?"在线体验 ↗":"查看仓库 ↗");a.href=href;a.target="_blank";a.rel="noopener noreferrer";meta.append(a)}
else meta.append(create("span","no-link","尚未公开"));
el.append(meta);return el;
}
function render(ps){
const q=state.query.trim().toLocaleLowerCase("zh-CN");
const matched=ps.filter(p=>(state.category==="all"||p.category===state.category)&&(!q||[p.name,p.summary,p.value,p.stack,p.stage,p.category].some(t=>(t||"").toLocaleLowerCase("zh-CN").includes(q))));
document.getElementById("resultLabel").textContent="显示 "+matched.length+" / "+ps.length+" 个项目";
grid.replaceChildren(...matched.map(card));
if(!matched.length)grid.append(create("p","no-results","没有匹配的项目。请尝试其他关键词或分类。"));
for(const b of filters.querySelectorAll("button")){const active=b.dataset.category===state.category;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active));}
}
async function main(){
try{
const res=await fetch("./data/projects.json",{cache:"no-cache"});if(!res.ok)throw new Error("目录 HTTP "+res.status);
const {projects, categories}=await res.json();
if(!Array.isArray(projects)||!Array.isArray(categories))throw new Error("数据格式不正确");
document.getElementById("total").textContent=String(projects.length).padStart(2,"0");
document.getElementById("publicCount").textContent=String(projects.filter(p=>p.url&&p.url.startsWith("https://")).length).padStart(2,"0");
for(const c of categories){const b=create("button","",c.title+" · "+projects.filter(p=>p.category===c.id).length);b.type="button";b.dataset.category=c.id;b.setAttribute("aria-pressed","false");b.addEventListener("click",()=>{state.category=c.id;render(projects)});filters.append(b)}
filters.querySelector('[data-category="all"]').addEventListener("click",()=>{state.category="all";render(projects)});
document.getElementById("search").addEventListener("input",e=>{state.query=e.target.value;render(projects)});
render(projects);
}catch(err){grid.replaceChildren(create("p","no-results","作品目录读取失败。请使用静态 HTTP 服务访问，或从 GitHub 打开 README。"));console.error(err)}
}
main();
})();