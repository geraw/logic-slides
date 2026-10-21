import{C as e,Ct as t,E as n,U as r,V as i,_ as a,b as o,m as s,v as c,w as l,x as u,yt as d}from"../modules/shiki-BK8XS0ol.js";import{q as f}from"./state-gzKW5I_C.js";import{x as p}from"../modules/vue-Dse5hRf0.js";import{W as m,v as h}from"../index-C-UIiWsr.js";import{t as g}from"./NoteDisplay-C8mq_eqe.js";var _={id:`page-root`},v={class:`m-4`},y={class:`mb-10`},b={class:`text-4xl font-bold mt-2`},x={class:`opacity-50`},S={class:`text-lg`},C={class:`font-bold flex gap-2`},w={class:`opacity-50`},T={key:0,class:`border-main mb-8`},E=n({__name:`print`,setup(n){let{slides:E,total:D}=h();p(`
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
`),m({title:`Notes - ${f.title}`});let O=a(()=>E.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==``));return(n,a)=>(i(),u(`div`,_,[c(`div`,v,[c(`div`,y,[c(`h1`,b,t(d(f).title),1),c(`div`,x,t(new Date().toLocaleString()),1)]),(i(!0),u(s,null,r(O.value,(n,r)=>(i(),u(`div`,{key:r,class:`flex flex-col gap-4 break-inside-avoid-page`},[c(`div`,null,[c(`h2`,S,[c(`div`,C,[c(`div`,w,t(n?.no)+`/`+t(d(D)),1),e(` `+t(n?.title)+` `,1),a[0]||=c(`div`,{class:`flex-auto`},null,-1)])]),l(g,{"note-html":n.noteHTML,class:`max-w-full`},null,8,[`note-html`])]),r<O.value.length-1?(i(),u(`hr`,T)):o(`v-if`,!0)]))),128))])]))}});export{E as default};