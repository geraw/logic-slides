import{B as e,R as t,S as n,bt as r,g as i,gt as a,h as o,p as s,v as c,w as l,x as u,y as d}from"../modules/shiki-BDKXeZq2.js";import{q as f}from"./state-C4h_Q74N.js";import{n as p}from"../useNav-B1WUr7s6.js";import{x as m}from"../modules/vue-DluyLhvW.js";import{m as h}from"../index-bZVnv0AV.js";import{t as g}from"./NoteDisplay-BeSZRiAm.js";var _={id:`page-root`},v={class:`m-4`},y={class:`mb-10`},b={class:`text-4xl font-bold mt-2`},x={class:`opacity-50`},S={class:`text-lg`},C={class:`font-bold flex gap-2`},w={class:`opacity-50`},T={key:0,class:`border-main mb-8`},E=l({__name:`print`,setup(l){let{slides:E,total:D}=p();m(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${f.title}`});let O=o(()=>E.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==``));return(o,l)=>(t(),d(`div`,_,[i(`div`,v,[i(`div`,y,[i(`h1`,b,r(a(f).title),1),i(`div`,x,r(new Date().toLocaleString()),1)]),(t(!0),d(s,null,e(O.value,(e,o)=>(t(),d(`div`,{key:o,class:`flex flex-col gap-4 break-inside-avoid-page`},[i(`div`,null,[i(`h2`,S,[i(`div`,C,[i(`div`,w,r(e?.no)+`/`+r(a(D)),1),u(` `+r(e?.title)+` `,1),l[0]||=i(`div`,{class:`flex-auto`},null,-1)])]),n(g,{"note-html":e.noteHTML,class:`max-w-full`},null,8,[`note-html`])]),o<O.value.length-1?(t(),d(`hr`,T)):c(`v-if`,!0)]))),128))])]))}});export{E as default};