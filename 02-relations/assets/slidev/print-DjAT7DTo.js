import{C as e,E as t,U as n,V as r,_ as i,b as a,bt as o,m as s,v as c,w as l,wt as u,x as d}from"../modules/shiki-BKUVG0EK.js";import{x as f}from"../modules/vue-Cmo-u4eM.js";import{St as p,jt as m,v as h}from"../index-Cy54OcS9.js";import{t as g}from"./NoteDisplay-Bx2mjcmw.js";var _={id:`page-root`},v={class:`m-4`},y={class:`mb-10`},b={class:`text-4xl font-bold mt-2`},x={class:`opacity-50`},S={class:`text-lg`},C={class:`font-bold flex gap-2`},w={class:`opacity-50`},T={key:0,class:`border-main mb-8`},E=t({__name:`print`,setup(t){let{slides:E,total:D}=h();f(`
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
`),p({title:`Notes - ${m.title}`});let O=i(()=>E.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==``));return(t,i)=>(r(),d(`div`,_,[c(`div`,v,[c(`div`,y,[c(`h1`,b,u(o(m).title),1),c(`div`,x,u(new Date().toLocaleString()),1)]),(r(!0),d(s,null,n(O.value,(t,n)=>(r(),d(`div`,{key:n,class:`flex flex-col gap-4 break-inside-avoid-page`},[c(`div`,null,[c(`h2`,S,[c(`div`,C,[c(`div`,w,u(t?.no)+`/`+u(o(D)),1),e(` `+u(t?.title)+` `,1),i[0]||=c(`div`,{class:`flex-auto`},null,-1)])]),l(g,{"note-html":t.noteHTML,class:`max-w-full`},null,8,[`note-html`])]),n<O.value.length-1?(r(),d(`hr`,T)):a(`v-if`,!0)]))),128))])]))}});export{E as default};