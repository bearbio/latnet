(function(){"use strict";var t={7999:function(t,e,n){var i=n(5130),l=n(6768);function o(t,e,n,i,o,r){const a=(0,l.g2)("IndexVue");return(0,l.uX)(),(0,l.Wv)(a)}var r=n(4880),a=(n(5331),n(5436),n(4968),n(4853),n(9437)),s=(n(5550),n(7456),n(4114),n.p+"img/logo.89e9e287.png");const c=t=>((0,l.Qi)("data-v-c193bda2"),t=t(),(0,l.jt)(),t),u={class:"common-layout"},p=c((()=>(0,l.Lk)("img",{src:s,alt:"Vue logo",style:{width:"50%","margin-top":"8%"}},null,-1)));function d(t,e,n,i,o,s){const c=a.ct,d=a.lj,m=r.Mb,f=(0,l.g2)("router-view"),b=r.ZO,A=r.lX;return(0,l.uX)(),(0,l.CE)("div",u,[(0,l.bF)(A,null,{default:(0,l.k6)((()=>[(0,l.bF)(m,{width:"18%"},{default:(0,l.k6)((()=>[(0,l.bF)(d,{"default-active":"/HOME",class:"el-menu-vertical-demo"},{default:(0,l.k6)((()=>[p,(0,l.bF)(c,{index:"/home",onClick:e[0]||(e[0]=e=>t.$router.push("/home"))},{default:(0,l.k6)((()=>[(0,l.eW)(" HOME ")])),_:1}),(0,l.bF)(c,{index:"/introduction",onClick:e[1]||(e[1]=e=>t.$router.push("/introduction"))},{default:(0,l.k6)((()=>[(0,l.eW)("INTRODUCTION")])),_:1}),(0,l.bF)(c,{index:"/predict",onClick:e[2]||(e[2]=e=>t.$router.push("/predict"))},{default:(0,l.k6)((()=>[(0,l.eW)("PREDICT")])),_:1}),(0,l.bF)(c,{index:"/contact"},{default:(0,l.k6)((()=>[(0,l.eW)("CONTACT US")])),_:1})])),_:1})])),_:1}),(0,l.bF)(b,{ref:"main"},{default:(0,l.k6)((()=>[(0,l.bF)(f)])),_:1},512)])),_:1})])}var m={name:"IndexVue"},f=n(1241);const b=(0,f.A)(m,[["render",d],["__scopeId","data-v-c193bda2"]]);var A=b,g={name:"App",components:{IndexVue:A}};const h=(0,f.A)(g,[["render",o]]);var _=h,k=n(1387),v=n(5199),R=(n(8450),n(683)),y=(n(5385),n(2781)),N=(n(9648),n(4232));const w=t=>((0,l.Qi)("data-v-2693c058"),t=t(),(0,l.jt)(),t),F={class:"container"},C=w((()=>(0,l.Lk)("p",{class:"text"},"Introduction",-1))),x={style:{fontSize:"30px",fontWeight:"bold",textAlign:"left",marginTop:"0"}},O={style:{fontSize:"18px",textAlign:"left"}},L={style:{"font-family":"Georgia, 'Times New Roman', Times, serif","margin-left":"2%"}},I={class:"container"},V=w((()=>(0,l.Lk)("p",{class:"text"},"Guide",-1))),T={class:"container"},E=w((()=>(0,l.Lk)("p",{class:"text"},"Architecture",-1)));function P(t,e,i,o,r,a){const s=(0,l.g2)("icon-info-circle-fill"),c=y.S2,u=R.Ik,p=(0,l.g2)("icon-menu"),d=(0,l.g2)("icon-bar-chart"),m=v.Zq;return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(u,{class:"card-style",shadow:"hover"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",F,[(0,l.bF)(s,{class:"icon"}),C]),(0,l.Lk)("p",x,(0,N.v_)(r.subtitle),1),(0,l.Lk)("div",O,[(0,l.Lk)("ul",L,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(r.list,((t,e)=>((0,l.uX)(),(0,l.CE)("li",{key:e,style:{"margin-bottom":"10px"}},(0,N.v_)(t),1)))),128))]),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(r.buttons,((t,e)=>((0,l.uX)(),(0,l.Wv)(c,{plain:"",size:"small ",key:e,style:(0,N.Tr)({backgroundColor:t.color,color:"black",fontWeight:"bold"}),onClick:e=>a.handleClick(t.label)},{default:(0,l.k6)((()=>[(0,l.eW)((0,N.v_)(t.label),1)])),_:2},1032,["style","onClick"])))),128))])])),_:1}),(0,l.bF)(u,{class:"card-style",shadow:"hover"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",I,[(0,l.bF)(p,{class:"icon"}),V])])),_:1}),(0,l.bF)(u,{class:"card-style",shadow:"hover"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",T,[(0,l.bF)(d,{class:"icon"}),E]),(0,l.bF)(m,{style:{width:"100%"},src:n(8543),fit:t.fit,"preview-src-list":[n(8543)]},null,8,["src","fit","preview-src-list"])])),_:1})],64)}var S=n(5078),j=n(7589),z=n(1681),W={components:{IconInfoCircleFill:S.A,IconMenu:j.A,IconBarChart:z.A},name:"HomeComponent",data(){return{title:"LATnet",subtitle:"RNA Subcellular Localization Prediction Based on Improved Transformer",list:["A novel RNA subcellular localization prediction model termed LATnet.","Enhanced feature extraction through five encoding strategies and a dual-path parallel structur.","Significant outperformance of existing methods in predicting RNA localization.","In-depth analysis using the Occlusion algorithm to identify key nucleotide combinations ."],buttons:[{label:"Deep Learning",color:"#51cbce"},{label:"Attention Mechanism",color:"#6bd098"},{label:"Subcellular Localization",color:"#f5593d"},{label:"Bioinformatics",color:"#fbc658"}]}},methods:{handleClick(t){console.log(t)}}};const X=(0,f.A)(W,[["render",P],["__scopeId","data-v-2693c058"]]);var U=X;const M=t=>((0,l.Qi)("data-v-6685e26c"),t=t(),(0,l.jt)(),t),q=M((()=>(0,l.Lk)("h1",{style:{color:"white"}},"ANALYSIS",-1))),K={class:"card-container"},Q={class:"card-container"},B={style:{"margin-left":"8%","margin-right":"8%","margin-top":"2%"}},D={class:"card-container"},$={class:"card-container"};function H(t,e,n,i,o,r){const a=R.Ik,s=v.Zq;return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(a,{shadow:"never",style:{"margin-left":"8%","margin-right":"8%","margin-top":"2%","background-color":"#333333"}},{default:(0,l.k6)((()=>[q])),_:1}),(0,l.Lk)("div",K,[(0,l.bF)(a,{shadow:"hover",style:{"margin-right":"2%"}},{default:(0,l.k6)((()=>[(0,l.bF)(s,{style:{width:"113%",margin:"-5%","margin-top":"-10%"},src:o.images.lncRNA_AUROC,fit:t.fit,"preview-src-list":[o.images.lncRNA_AUROC],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1}),(0,l.bF)(a,{shadow:"hover"},{default:(0,l.k6)((()=>[(0,l.bF)(s,{style:{width:"113%",margin:"-5%","margin-top":"-10%"},src:o.images.mRNA_AUROC,fit:t.fit,"preview-src-list":[o.images.mRNA_AUROC],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1})]),(0,l.Lk)("div",Q,[(0,l.bF)(a,{shadow:"hover",style:{"margin-right":"2%"}},{default:(0,l.k6)((()=>[(0,l.bF)(s,{style:{width:"100%"},src:o.images.lncRNA_barplot,fit:t.fit,"preview-src-list":[o.images.lncRNA_barplot],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1}),(0,l.bF)(a,{shadow:"hover"},{default:(0,l.k6)((()=>[(0,l.bF)(s,{style:{width:"100%"},src:o.images.mRNA_barplot,fit:t.fit,"preview-src-list":[o.images.mRNA_barplot],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1})]),(0,l.Lk)("div",B,[(0,l.bF)(a,{shadow:"hover"},{default:(0,l.k6)((()=>[(0,l.bF)(s,{style:{width:"100%"},src:o.images.combined_heatmaps_with_colorbar,fit:t.fit,"preview-src-list":[o.images.combined_heatmaps_with_colorbar],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1}),(0,l.bF)(a,{shadow:"hover",style:{"margin-top":"2%"}},{default:(0,l.k6)((()=>[(0,l.bF)(s,{style:{width:"100%"},src:o.images.mRNA_combined_heatmaps_with_colorbar,fit:t.fit,"preview-src-list":[o.images.mRNA_combined_heatmaps_with_colorbar],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1})]),(0,l.Lk)("div",D,[(0,l.bF)(a,null,{default:(0,l.k6)((()=>[(0,l.bF)(s,{style:{width:"100%"},src:o.images.circRNAs,fit:t.fit,"preview-src-list":[o.images.circRNAs],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1}),(0,l.bF)(a,null,{default:(0,l.k6)((()=>[(0,l.bF)(s,{style:{width:"100%"},src:o.images.ciRNAs,fit:t.fit,"preview-src-list":[o.images.ciRNAs],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1}),(0,l.bF)(a,null,{default:(0,l.k6)((()=>[(0,l.bF)(s,{style:{width:"100%"},src:o.images.lncRNAs,fit:t.fit,"preview-src-list":[o.images.lncRNAs],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1})]),(0,l.Lk)("div",$,[(0,l.bF)(a,null,{default:(0,l.k6)((()=>[(0,l.bF)(s,{style:{width:"100%"},src:o.images.snoRNAs,fit:t.fit,"preview-src-list":[o.images.snoRNAs],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1}),(0,l.bF)(a,null,{default:(0,l.k6)((()=>[(0,l.bF)(s,{style:{width:"100%"},src:o.images.snRNAs,fit:t.fit,"preview-src-list":[o.images.snRNAs],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1}),(0,l.bF)(a,null,{default:(0,l.k6)((()=>[(0,l.bF)(s,{style:{width:"100%"},src:o.images.mRNAs,fit:t.fit,"preview-src-list":[o.images.mRNAs],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1})])],64)}var Z={name:"IntroductionComponent",data(){return{images:{lncRNA_AUROC:n(6455),mRNA_AUROC:n(9995),lncRNA_barplot:n(7903),mRNA_barplot:n(2891),combined_heatmaps_with_colorbar:n(1107),mRNA_combined_heatmaps_with_colorbar:n(3510),circRNAs:n(4938),mRNAs:n(5250),lncRNAs:n(2178),ciRNAs:n(3748),snoRNAs:n(8145),snRNAs:n(5556),lncRNA_kmer_attribution:n(6208),mRNA_kmer_attribution:n(8404),lncRNA_cytoplasm_kmer:n(3814),mRNA_cytoplasm_kmer:n(6538),lncRNA_nucleus_kmer:n(2201),mRNA_nucleus_kmer:n(6181)}}}};const G=(0,f.A)(Z,[["render",H],["__scopeId","data-v-6685e26c"]]);var J=G,Y=n(5306);n(1008),n(7410);const tt=(0,l.Lk)("h1",{style:{color:"white","text-align":"left"}},"PREDICT",-1),et=(0,l.Lk)("span",{class:"custom-tab-label"},"LncRNA",-1),nt=(0,l.Lk)("span",{class:"custom-tab-label"},"mRNA",-1);function it(t,e,n,i,o,r){const a=R.Ik,s=(0,l.g2)("LncRNAComponent"),c=Y.v$,u=(0,l.g2)("mRNAComponent"),p=Y.q;return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.bF)(a,{shadow:"never",style:{"margin-left":"8%","margin-right":"8%","margin-top":"2%","background-color":"#333333"}},{default:(0,l.k6)((()=>[tt])),_:1}),(0,l.bF)(p,{type:"border-card",class:"custom-tabs"},{default:(0,l.k6)((()=>[(0,l.bF)(c,null,{label:(0,l.k6)((()=>[et])),default:(0,l.k6)((()=>[(0,l.bF)(s)])),_:1}),(0,l.bF)(c,null,{label:(0,l.k6)((()=>[nt])),default:(0,l.k6)((()=>[(0,l.bF)(u)])),_:1})])),_:1})],64)}var lt=n(7139),ot=(n(132),n(9023),n(3382));n(9092);const rt=(0,l.Lk)("h2",null,"TODO",-1),at={style:{"text-align":"left","margin-top":"2%"}},st={style:{"margin-top":"3%"}},ct={key:0};function ut(t,e,n,i,o,r){const a=ot.WK,s=y.S2,c=lt.o8,u=lt.Up;return(0,l.uX)(),(0,l.CE)("div",null,[rt,(0,l.bF)(a,{type:"textarea",modelValue:o.lncRNAinputValue,"onUpdate:modelValue":e[0]||(e[0]=t=>o.lncRNAinputValue=t),rows:7,placeholder:"请输入内容"},null,8,["modelValue"]),(0,l.Lk)("div",at,[(0,l.bF)(s,{onClick:r.predict,class:"custom-button"},{default:(0,l.k6)((()=>[(0,l.eW)("Predict")])),_:1},8,["onClick"]),(0,l.bF)(s,{onClick:r.clear,class:"custom-button"},{default:(0,l.k6)((()=>[(0,l.eW)("Clear")])),_:1},8,["onClick"]),(0,l.bF)(s,{onClick:r.example,class:"custom-button"},{default:(0,l.k6)((()=>[(0,l.eW)("Example")])),_:1},8,["onClick"])]),(0,l.Lk)("div",st,[o.isPredicting?((0,l.uX)(),(0,l.CE)("div",ct,"正在预测...")):(0,l.Q3)("",!0),o.predictionResult?((0,l.uX)(),(0,l.Wv)(u,{key:1,data:o.predictionResult,border:"",stripe:""},{default:(0,l.k6)((()=>[(0,l.bF)(c,{prop:"name",label:"name"}),(0,l.bF)(c,{prop:"nucleus",label:"nucleus"}),(0,l.bF)(c,{prop:"cytoplasm",label:"cytoplasm"}),(0,l.bF)(c,{prop:"location",label:"location"})])),_:1},8,["data"])):(0,l.Q3)("",!0)])])}var pt={name:"LncRNAComponent",data(){return{defaultInput:">seq1\n  AAAAAAAAAAAAAAAAAAAAAAAA",lncRNAinputValue:"",isPredicting:!1,predictionResult:null}},created(){this.lncRNAinputValue=this.defaultInput},methods:{async predict(){const t=this.lncRNAinputValue.split(">").filter(Boolean).map((t=>{const[e,...n]=t.split("\n");return{name:e.trim(),sequence:n.join("").trim()}})),e=await fetch("https://latnet.wsleepybear.cn/lncrna-predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});this.isPredicting=!0;const n=await e.json();this.predictionResult=n.result,this.isPredicting=!1},clear(){this.lncRNAinputValue="",this.predictionResult=null},example(){this.lncRNAinputValue=this.defaultInput}}};const dt=(0,f.A)(pt,[["render",ut]]);var mt=dt;const ft=(0,l.Lk)("h2",null,"TODO",-1),bt={style:{"text-align":"left","margin-top":"2%"}},At={style:{"margin-top":"3%"}},gt={key:0};function ht(t,e,n,i,o,r){const a=ot.WK,s=y.S2,c=lt.o8,u=lt.Up;return(0,l.uX)(),(0,l.CE)("div",null,[ft,(0,l.bF)(a,{type:"textarea",modelValue:o.mRNAinputValue,"onUpdate:modelValue":e[0]||(e[0]=t=>o.mRNAinputValue=t),rows:7,placeholder:"请输入内容"},null,8,["modelValue"]),(0,l.Lk)("div",bt,[(0,l.bF)(s,{onClick:r.predict,class:"custom-button"},{default:(0,l.k6)((()=>[(0,l.eW)("Predict")])),_:1},8,["onClick"]),(0,l.bF)(s,{onClick:r.clear,class:"custom-button"},{default:(0,l.k6)((()=>[(0,l.eW)("Clear")])),_:1},8,["onClick"]),(0,l.bF)(s,{onClick:r.example,class:"custom-button"},{default:(0,l.k6)((()=>[(0,l.eW)("Example")])),_:1},8,["onClick"])]),(0,l.Lk)("div",At,[o.isPredicting?((0,l.uX)(),(0,l.CE)("div",gt,"正在预测...")):(0,l.Q3)("",!0),o.predictionResult?((0,l.uX)(),(0,l.Wv)(u,{key:1,data:o.predictionResult,border:"",stripe:""},{default:(0,l.k6)((()=>[(0,l.bF)(c,{prop:"name",label:"name"}),(0,l.bF)(c,{prop:"nucleus",label:"nucleus"}),(0,l.bF)(c,{prop:"cytoplasm",label:"cytoplasm"}),(0,l.bF)(c,{prop:"location",label:"location"})])),_:1},8,["data"])):(0,l.Q3)("",!0)])])}var _t={name:"mRNAComponent",data(){return{defaultInput:">seq1\n  AAAAAAAAAAAAAAAAAAAAAAAA",mRNAinputValue:"",isPredicting:!1,predictionResult:null}},created(){this.mRNAinputValue=this.defaultInput},methods:{async predict(){const t=this.mRNAinputValue.split(">").filter(Boolean).map((t=>{const[e,...n]=t.split("\n");return{name:e.trim(),sequence:n.join("").trim()}})),e=await fetch("https://latnet.wsleepybear.cn/mrna-predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});this.isPredicting=!0;const n=await e.json();this.predictionResult=n.result,this.isPredicting=!1},clear(){this.mRNAinputValue="",this.predictionResult=null},example(){this.mRNAinputValue=this.defaultInput}}};const kt=(0,f.A)(_t,[["render",ht]]);var vt=kt,Rt={name:"PredictComponent",components:{LncRNAComponent:mt,mRNAComponent:vt}};const yt=(0,f.A)(Rt,[["render",it]]);var Nt=yt;const wt=[{path:"/home",name:"home",component:U},{path:"/",redirect:"/home"},{path:"/introduction",name:"introduction",component:J},{path:"/predict",name:"predict",component:Nt}],Ft=(0,k.aE)({history:(0,k.Bt)(),base:"/",mode:"hash",routes:wt});var Ct=Ft,xt=n(7477),Ot=n(4379),Lt=(n(426),n(5847));const It=(0,i.Ef)(_).use(Ct).use(Ot.A).use(Lt.A);for(const[Vt,Tt]of Object.entries(xt))It.component(Vt,Tt);It.mount("#app")},6455:function(t,e,n){t.exports=n.p+"img/lncRNA_AUROC.38b5e914.png"},9995:function(t,e,n){t.exports=n.p+"img/mRNA_AUROC.321aebcc.png"},7903:function(t,e,n){t.exports=n.p+"img/lncRNA_barplot.989c6cef.png"},2891:function(t,e,n){t.exports=n.p+"img/mRNA_barplot.38488cb3.png"},1107:function(t,e,n){t.exports=n.p+"img/combined_heatmaps_with_colorbar.7d1964c3.png"},3510:function(t,e,n){t.exports=n.p+"img/mRNA_combined_heatmaps_with_colorbar.c5cdf3e2.png"},3814:function(t,e,n){t.exports=n.p+"img/lncRNA_cytoplasm_k-mer.e0344ba3.png"},6208:function(t,e,n){t.exports=n.p+"img/lncRNA_kmer_attribution.a343bb9d.png"},2201:function(t,e,n){t.exports=n.p+"img/lncRNA_nucleus_k-mer.d1c2518c.png"},6538:function(t,e,n){t.exports=n.p+"img/mRNA_cytoplasm_k-mer.164c0385.png"},8404:function(t,e,n){t.exports=n.p+"img/mRNA_kmer_attribution.552dd437.png"},6181:function(t,e,n){t.exports=n.p+"img/mRNA_nucleus_k-mer.9d47a3db.png"},3748:function(t,e,n){t.exports=n.p+"img/ciRNAs.f0962dca.png"},4938:function(t,e,n){t.exports=n.p+"img/circRNAs.8b16caac.png"},2178:function(t,e,n){t.exports=n.p+"img/lncRNAs.c73cd1ec.png"},5250:function(t,e,n){t.exports=n.p+"img/mRNAs.ef1686ce.png"},5556:function(t,e,n){t.exports=n.p+"img/snRNAs.e48c4bc1.png"},8145:function(t,e,n){t.exports=n.p+"img/snoRNAs.11d68f46.png"},8543:function(t,e,n){t.exports=n.p+"img/大论文框架图.875658af.png"}},e={};function n(i){var l=e[i];if(void 0!==l)return l.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,l,o){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],l=t[u][1],o=t[u][2];for(var a=!0,s=0;s<i.length;s++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[s])}))?i.splice(s--,1):(a=!1,o<r&&(r=o));if(a){t.splice(u--,1);var c=l();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,l,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var l,o,r=i[0],a=i[1],s=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(l in a)n.o(a,l)&&(n.m[l]=a[l]);if(s)var u=s(n)}for(e&&e(i);c<r.length;c++)o=r[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},i=self["webpackChunklatnet"]=self["webpackChunklatnet"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(7999)}));i=n.O(i)})();
//# sourceMappingURL=app.d07a92ff.js.map