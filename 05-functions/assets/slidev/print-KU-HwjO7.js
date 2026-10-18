import{D as e,H as t,S as n,T as r,W as i,bt as a,m as o,v as s,w as c,wt as l,x as u,y as d}from"../modules/shiki-DMBwwXBO.js";import{Z as f,n as p}from"../useNav-BfnJAM8M.js";import{x as m}from"../modules/vue-CEscsQt1.js";import{m as h}from"../index-BWtTHYCp.js";import{t as g}from"./NoteDisplay-BoOG6sNZ.js";var _={id:`page-root`},v={class:`m-4`},y={class:`mb-10`},b={class:`text-4xl font-bold mt-2`},x={class:`opacity-50`},S={class:`text-lg`},C={class:`font-bold flex gap-2`},w={class:`opacity-50`},T={key:0,class:`border-main mb-8`},E=e({__name:`print`,setup(e){let{slides:E,total:D}=p();m(`
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
`),h({title:`Notes - ${f.title}`});let O=s(()=>E.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==``));return(e,s)=>(t(),n(`div`,_,[d(`div`,v,[d(`div`,y,[d(`h1`,b,l(a(f).title),1),d(`div`,x,l(new Date().toLocaleString()),1)]),(t(!0),n(o,null,i(O.value,(e,i)=>(t(),n(`div`,{key:i,class:`flex flex-col gap-4 break-inside-avoid-page`},[d(`div`,null,[d(`h2`,S,[d(`div`,C,[d(`div`,w,l(e?.no)+`/`+l(a(D)),1),c(` `+l(e?.title)+` `,1),s[0]||=d(`div`,{class:`flex-auto`},null,-1)])]),r(g,{"note-html":e.noteHTML,class:`max-w-full`},null,8,[`note-html`])]),i<O.value.length-1?(t(),n(`hr`,T)):u(`v-if`,!0)]))),128))])]))}});export{E as default};