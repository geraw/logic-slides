import{C as e,S as t,T as n,V as r,_ as i,_t as a,b as o,g as s,p as c,xt as l,y as u,z as d}from"../modules/shiki-Nj4t7Qu0.js";import{et as f,n as p}from"../useNav-KUhNwyH2.js";import{x as m}from"../modules/vue-vKh1VAmY.js";import{p as h}from"../index-Cl8f9P1x.js";import{t as g}from"./NoteDisplay-DIBAmq-Y.js";var _={id:`page-root`},v={class:`m-4`},y={class:`mb-10`},b={class:`text-4xl font-bold mt-2`},x={class:`opacity-50`},S={class:`text-lg`},C={class:`font-bold flex gap-2`},w={class:`opacity-50`},T={key:0,class:`border-main mb-8`},E=n({__name:`print`,setup(n){let{slides:E,total:D}=p();m(`
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
`),h({title:`Notes - ${f.title}`});let O=s(()=>E.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==``));return(n,s)=>(d(),o(`div`,_,[i(`div`,v,[i(`div`,y,[i(`h1`,b,l(a(f).title),1),i(`div`,x,l(new Date().toLocaleString()),1)]),(d(!0),o(c,null,r(O.value,(n,r)=>(d(),o(`div`,{key:r,class:`flex flex-col gap-4 break-inside-avoid-page`},[i(`div`,null,[i(`h2`,S,[i(`div`,C,[i(`div`,w,l(n?.no)+`/`+l(a(D)),1),t(` `+l(n?.title)+` `,1),s[0]||=i(`div`,{class:`flex-auto`},null,-1)])]),e(g,{"note-html":n.noteHTML,class:`max-w-full`},null,8,[`note-html`])]),r<O.value.length-1?(d(),o(`hr`,T)):u(`v-if`,!0)]))),128))])]))}});export{E as default};