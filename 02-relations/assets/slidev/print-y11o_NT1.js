import{B as e,C as t,Ct as n,H as r,S as i,T as a,_ as o,b as s,g as c,m as l,y as u,yt as d}from"../modules/shiki-B9EyrtVu.js";import{c as f}from"./env-RzY25XZq.js";import{n as p}from"../useNav-DlomrTnY.js";import{S as m}from"../modules/vue-B-FRBeCN.js";import{h}from"../index-CjOhHEo_.js";import{t as g}from"./NoteDisplay-CntFxvsF.js";var _={id:`page-root`},v={class:`m-4`},y={class:`mb-10`},b={class:`text-4xl font-bold mt-2`},x={class:`opacity-50`},S={class:`text-lg`},C={class:`font-bold flex gap-2`},w={class:`opacity-50`},T={key:0,class:`border-main mb-8`},E=a({__name:`print`,setup(a){let{slides:E,total:D}=p();m(`
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
`),h({title:`Notes - ${f.title}`});let O=c(()=>E.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==``));return(a,c)=>(e(),s(`div`,_,[o(`div`,v,[o(`div`,y,[o(`h1`,b,n(d(f).title),1),o(`div`,x,n(new Date().toLocaleString()),1)]),(e(!0),s(l,null,r(O.value,(r,a)=>(e(),s(`div`,{key:a,class:`flex flex-col gap-4 break-inside-avoid-page`},[o(`div`,null,[o(`h2`,S,[o(`div`,C,[o(`div`,w,n(r?.no)+`/`+n(d(D)),1),i(` `+n(r?.title)+` `,1),c[0]||=o(`div`,{class:`flex-auto`},null,-1)])]),t(g,{"note-html":r.noteHTML,class:`max-w-full`},null,8,[`note-html`])]),a<O.value.length-1?(e(),s(`hr`,T)):u(`v-if`,!0)]))),128))])]))}});export{E as default};