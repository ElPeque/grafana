"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4301],{57738:(O,c,s)=>{s.r(c),s.d(c,{plugin:()=>N});var h=s(68256),d=s(35095),u=s(3091),o=s(27072),r=s(74848),l=s(96540),S=s(92955),m=s(2973);const v=({value:a,onChange:e,context:t})=>{const n=(0,l.useMemo)(()=>(0,o.L)(t.data[0]),[t.data]),[i,p]=(0,l.useState)(),[C,I]=(0,l.useState)({});return(0,l.useEffect)(()=>{a.tags||e({...a,tags:[m._g]})},[e,a]),n?(0,r.jsx)(S.T,{search:a,setSearch:e,trace:n,tagKeys:i,setTagKeys:p,tagValues:C,setTagValues:I}):null};var F=s(22803),T=s(16817),y=s(98437),V=s(62884);const g={wrapper:(0,F.css)({height:"100%",overflow:"scroll"})},L=({data:a,options:e,replaceVariables:t})=>{const n=(0,l.createRef)(),i=(0,l.useMemo)(()=>(0,o.L)(a.series[0]),[a.series]),p=(0,T.A)(async()=>await(0,y.l)().get(a.request?.targets[0].datasource?.uid));return!a||!a.series.length||!i?(0,r.jsx)("div",{className:"panel-empty",children:(0,r.jsx)("p",{children:"No data found in response"})}):(0,r.jsxs)("div",{className:g.wrapper,children:[(0,r.jsx)("div",{ref:n}),(0,r.jsx)(V.V,{dataFrames:a.series,scrollElementClass:g.wrapper,traceProp:i,datasource:p.value,topOfViewRef:n,createSpanLink:e.createSpanLink,focusedSpanId:e.focusedSpanId,createFocusSpanLink:e.createFocusSpanLink,spanFilters:(0,m.Qh)(t,e.spanFilters)})]})};var x=s(21288),f=s(18550);class j{getListWithDefaults(e){return e.getListAppender({name:f.m.Trace,pluginId:"traces"})}getSuggestionsForData(e){!e.data||!e.data.series[0]||e.data.series[0].meta?.preferredVisualisationType==="trace"&&this.getListWithDefaults(e).append({name:f.m.Trace,score:x.nQ.Best})}}const N=new h.m(L).setPanelOptions((a,e)=>{const t=["Span filters"],n=(0,o.L)(e?.data?.[0]);a.addTextInput({path:"spanFilters.query",name:"Find in trace",category:t}).addBooleanSwitch({path:"spanFilters.matchesOnly",name:"Show matches only",defaultValue:!1,category:t}).addBooleanSwitch({path:"spanFilters.criticalPathOnly",name:"Show critical path only",defaultValue:!1,category:t}),a.addSelect({path:"spanFilters.serviceName",name:"Service name",category:t,settings:{options:n?(0,u.pG)(n).map(d.z):[],allowCustomValue:!0,isClearable:!0}}).addRadio({path:"spanFilters.serviceNameOperator",name:"Service name operator",defaultValue:"=",settings:{options:[{value:"=",label:"="},{value:"!=",label:"!="}]},category:t}),a.addSelect({path:"spanFilters.spanName",name:"Span name",category:t,settings:{options:n?(0,u.m8)(n).map(d.z):[],allowCustomValue:!0,isClearable:!0}}).addRadio({path:"spanFilters.spanNameOperator",name:"Span name operator",defaultValue:"=",settings:{options:[{value:"=",label:"="},{value:"!=",label:"!="}]},category:t}),a.addTextInput({path:"spanFilters.from",name:"Min duration",category:t}).addTextInput({path:"spanFilters.to",name:"Max duration",category:t}),a.addCustomEditor({id:"tags",name:"Tags",path:"spanFilters",category:t,editor:v,defaultValue:void 0})}).setSuggestionsSupplier(new j)}}]);

//# sourceMappingURL=tracesPanel.f970148ec61a373aa04b.js.map