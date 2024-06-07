(function(){"use strict";var T={2609:function(T,A,G){var C=G(5130),e=G(6768);function t(T,A,G,C,t,n){const i=(0,e.g2)("IndexVue");return(0,e.uX)(),(0,e.Wv)(i)}var n=G(4880),i=(G(5331),G(5436),G(4968),G(4853),G(9437)),l=(G(5550),G(7456),G(4114),G.p+"img/logo.89e9e287.png");const o=T=>((0,e.Qi)("data-v-43535aa7"),T=T(),(0,e.jt)(),T),r={class:"common-layout"},a=o((()=>(0,e.Lk)("img",{src:l,alt:"Vue logo",style:{width:"50%","margin-top":"8%"}},null,-1)));function s(T,A,G,C,t,l){const o=i.ct,s=i.lj,c=n.Mb,u=(0,e.g2)("router-view"),p=n.ZO,d=n.lX;return(0,e.uX)(),(0,e.CE)("div",r,[(0,e.bF)(d,null,{default:(0,e.k6)((()=>[(0,e.bF)(c,{width:"18%"},{default:(0,e.k6)((()=>[(0,e.bF)(s,{"default-active":"/HOME",class:"el-menu-vertical-demo"},{default:(0,e.k6)((()=>[a,(0,e.bF)(o,{index:"/home",onClick:A[0]||(A[0]=A=>T.$router.push("/home"))},{default:(0,e.k6)((()=>[(0,e.eW)(" HOME ")])),_:1}),(0,e.bF)(o,{index:"/introduction",onClick:A[1]||(A[1]=A=>T.$router.push("/introduction"))},{default:(0,e.k6)((()=>[(0,e.eW)("INTRODUCTION")])),_:1}),(0,e.bF)(o,{index:"/predict",onClick:A[2]||(A[2]=A=>T.$router.push("/predict"))},{default:(0,e.k6)((()=>[(0,e.eW)("PREDICT")])),_:1}),(0,e.bF)(o,{index:"/contact",onClick:A[3]||(A[3]=A=>T.$router.push("/contact"))},{default:(0,e.k6)((()=>[(0,e.eW)("CONTACT US")])),_:1})])),_:1})])),_:1}),(0,e.bF)(p,{ref:"main"},{default:(0,e.k6)((()=>[(0,e.bF)(u)])),_:1},512)])),_:1})])}var c={name:"IndexVue"},u=G(1241);const p=(0,u.A)(c,[["render",s],["__scopeId","data-v-43535aa7"]]);var d=p,m={name:"App",components:{IndexVue:d}};const f=(0,u.A)(m,[["render",t]]);var b=f,h=G(1387),g=G(5199),k=(G(8450),G(683)),v=(G(5385),G(1702)),_=(G(9648),G(4232));const y=T=>((0,e.Qi)("data-v-2693c058"),T=T(),(0,e.jt)(),T),R={class:"container"},w=y((()=>(0,e.Lk)("p",{class:"text"},"Introduction",-1))),N={style:{fontSize:"30px",fontWeight:"bold",textAlign:"left",marginTop:"0"}},F={style:{fontSize:"18px",textAlign:"left"}},x={style:{"font-family":"Georgia, 'Times New Roman', Times, serif","margin-left":"2%"}},L={class:"container"},O=y((()=>(0,e.Lk)("p",{class:"text"},"Guide",-1))),I={class:"container"},E=y((()=>(0,e.Lk)("p",{class:"text"},"Architecture",-1)));function P(T,A,C,t,n,i){const l=(0,e.g2)("icon-info-circle-fill"),o=v.S2,r=k.Ik,a=(0,e.g2)("icon-menu"),s=(0,e.g2)("icon-bar-chart"),c=g.Zq;return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.bF)(r,{class:"card-style",shadow:"hover"},{default:(0,e.k6)((()=>[(0,e.Lk)("div",R,[(0,e.bF)(l,{class:"icon"}),w]),(0,e.Lk)("p",N,(0,_.v_)(n.subtitle),1),(0,e.Lk)("div",F,[(0,e.Lk)("ul",x,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(n.list,((T,A)=>((0,e.uX)(),(0,e.CE)("li",{key:A,style:{"margin-bottom":"10px"}},(0,_.v_)(T),1)))),128))]),((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(n.buttons,((T,A)=>((0,e.uX)(),(0,e.Wv)(o,{plain:"",size:"small ",key:A,style:(0,_.Tr)({backgroundColor:T.color,color:"black",fontWeight:"bold"}),onClick:A=>i.handleClick(T.label)},{default:(0,e.k6)((()=>[(0,e.eW)((0,_.v_)(T.label),1)])),_:2},1032,["style","onClick"])))),128))])])),_:1}),(0,e.bF)(r,{class:"card-style",shadow:"hover"},{default:(0,e.k6)((()=>[(0,e.Lk)("div",L,[(0,e.bF)(a,{class:"icon"}),O])])),_:1}),(0,e.bF)(r,{class:"card-style",shadow:"hover"},{default:(0,e.k6)((()=>[(0,e.Lk)("div",I,[(0,e.bF)(s,{class:"icon"}),E]),(0,e.bF)(c,{style:{width:"100%"},src:G(8543),fit:T.fit,"preview-src-list":[G(8543)]},null,8,["src","fit","preview-src-list"])])),_:1})],64)}var V=G(5078),z=G(7589),U=G(1681),W={components:{IconInfoCircleFill:V.A,IconMenu:z.A,IconBarChart:U.A},name:"HomeComponent",data(){return{title:"LATnet",subtitle:"RNA Subcellular Localization Prediction Based on Improved Transformer",list:["A novel RNA subcellular localization prediction model termed LATnet.","Enhanced feature extraction through five encoding strategies and a dual-path parallel structur.","Significant outperformance of existing methods in predicting RNA localization.","In-depth analysis using the Occlusion algorithm to identify key nucleotide combinations ."],buttons:[{label:"Deep Learning",color:"#51cbce"},{label:"Attention Mechanism",color:"#6bd098"},{label:"Subcellular Localization",color:"#f5593d"},{label:"Bioinformatics",color:"#fbc658"}]}},methods:{handleClick(T){console.log(T)}}};const q=(0,u.A)(W,[["render",P],["__scopeId","data-v-2693c058"]]);var S=q;const j=T=>((0,e.Qi)("data-v-6685e26c"),T=T(),(0,e.jt)(),T),X=j((()=>(0,e.Lk)("h1",{style:{color:"white"}},"ANALYSIS",-1))),K={class:"card-container"},M={class:"card-container"},Q={style:{"margin-left":"8%","margin-right":"8%","margin-top":"2%"}},$={class:"card-container"},B={class:"card-container"};function D(T,A,G,C,t,n){const i=k.Ik,l=g.Zq;return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.bF)(i,{shadow:"never",style:{"margin-left":"8%","margin-right":"8%","margin-top":"2%","background-color":"#333333"}},{default:(0,e.k6)((()=>[X])),_:1}),(0,e.Lk)("div",K,[(0,e.bF)(i,{shadow:"hover",style:{"margin-right":"2%"}},{default:(0,e.k6)((()=>[(0,e.bF)(l,{style:{width:"113%",margin:"-5%","margin-top":"-10%"},src:t.images.lncRNA_AUROC,fit:T.fit,"preview-src-list":[t.images.lncRNA_AUROC],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1}),(0,e.bF)(i,{shadow:"hover"},{default:(0,e.k6)((()=>[(0,e.bF)(l,{style:{width:"113%",margin:"-5%","margin-top":"-10%"},src:t.images.mRNA_AUROC,fit:T.fit,"preview-src-list":[t.images.mRNA_AUROC],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1})]),(0,e.Lk)("div",M,[(0,e.bF)(i,{shadow:"hover",style:{"margin-right":"2%"}},{default:(0,e.k6)((()=>[(0,e.bF)(l,{style:{width:"100%"},src:t.images.lncRNA_barplot,fit:T.fit,"preview-src-list":[t.images.lncRNA_barplot],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1}),(0,e.bF)(i,{shadow:"hover"},{default:(0,e.k6)((()=>[(0,e.bF)(l,{style:{width:"100%"},src:t.images.mRNA_barplot,fit:T.fit,"preview-src-list":[t.images.mRNA_barplot],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1})]),(0,e.Lk)("div",Q,[(0,e.bF)(i,{shadow:"hover"},{default:(0,e.k6)((()=>[(0,e.bF)(l,{style:{width:"100%"},src:t.images.combined_heatmaps_with_colorbar,fit:T.fit,"preview-src-list":[t.images.combined_heatmaps_with_colorbar],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1}),(0,e.bF)(i,{shadow:"hover",style:{"margin-top":"2%"}},{default:(0,e.k6)((()=>[(0,e.bF)(l,{style:{width:"100%"},src:t.images.mRNA_combined_heatmaps_with_colorbar,fit:T.fit,"preview-src-list":[t.images.mRNA_combined_heatmaps_with_colorbar],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1})]),(0,e.Lk)("div",$,[(0,e.bF)(i,null,{default:(0,e.k6)((()=>[(0,e.bF)(l,{style:{width:"100%"},src:t.images.circRNAs,fit:T.fit,"preview-src-list":[t.images.circRNAs],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1}),(0,e.bF)(i,null,{default:(0,e.k6)((()=>[(0,e.bF)(l,{style:{width:"100%"},src:t.images.ciRNAs,fit:T.fit,"preview-src-list":[t.images.ciRNAs],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1}),(0,e.bF)(i,null,{default:(0,e.k6)((()=>[(0,e.bF)(l,{style:{width:"100%"},src:t.images.lncRNAs,fit:T.fit,"preview-src-list":[t.images.lncRNAs],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1})]),(0,e.Lk)("div",B,[(0,e.bF)(i,null,{default:(0,e.k6)((()=>[(0,e.bF)(l,{style:{width:"100%"},src:t.images.snoRNAs,fit:T.fit,"preview-src-list":[t.images.snoRNAs],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1}),(0,e.bF)(i,null,{default:(0,e.k6)((()=>[(0,e.bF)(l,{style:{width:"100%"},src:t.images.snRNAs,fit:T.fit,"preview-src-list":[t.images.snRNAs],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1}),(0,e.bF)(i,null,{default:(0,e.k6)((()=>[(0,e.bF)(l,{style:{width:"100%"},src:t.images.mRNAs,fit:T.fit,"preview-src-list":[t.images.mRNAs],lazy:""},null,8,["src","fit","preview-src-list"])])),_:1})])],64)}var H={name:"IntroductionComponent",data(){return{images:{lncRNA_AUROC:G(6455),mRNA_AUROC:G(9995),lncRNA_barplot:G(7903),mRNA_barplot:G(2891),combined_heatmaps_with_colorbar:G(1107),mRNA_combined_heatmaps_with_colorbar:G(3510),circRNAs:G(4938),mRNAs:G(5250),lncRNAs:G(2178),ciRNAs:G(3748),snoRNAs:G(8145),snRNAs:G(5556),lncRNA_kmer_attribution:G(6208),mRNA_kmer_attribution:G(8404),lncRNA_cytoplasm_kmer:G(3814),mRNA_cytoplasm_kmer:G(6538),lncRNA_nucleus_kmer:G(2201),mRNA_nucleus_kmer:G(6181)}}}};const Z=(0,u.A)(H,[["render",D],["__scopeId","data-v-6685e26c"]]);var J=Z,Y=G(5306);G(1008),G(7410);const TT=(0,e.Lk)("h1",{style:{color:"white"}},"PREDICT",-1),AT=(0,e.Lk)("span",{class:"custom-tab-label"},"LncRNA",-1),GT=(0,e.Lk)("span",{class:"custom-tab-label"},"mRNA",-1);function CT(T,A,G,C,t,n){const i=k.Ik,l=(0,e.g2)("LncRNAComponent"),o=Y.v$,r=(0,e.g2)("mRNAComponent"),a=Y.q;return(0,e.uX)(),(0,e.CE)(e.FK,null,[(0,e.bF)(i,{shadow:"never",style:{"margin-left":"8%","margin-right":"8%","margin-top":"2%","background-color":"#333333"}},{default:(0,e.k6)((()=>[TT])),_:1}),(0,e.bF)(a,{type:"border-card",class:"custom-tabs"},{default:(0,e.k6)((()=>[(0,e.bF)(o,null,{label:(0,e.k6)((()=>[AT])),default:(0,e.k6)((()=>[(0,e.bF)(l)])),_:1}),(0,e.bF)(o,null,{label:(0,e.k6)((()=>[GT])),default:(0,e.k6)((()=>[(0,e.bF)(r)])),_:1})])),_:1})],64)}var eT=G(7139),tT=(G(132),G(9023),G(3382));G(9092);const nT=(0,e.Lk)("div",{style:{"font-size":"13px","text-align":"left"}},[(0,e.Lk)("p",null,'1. Enter your RNA sequence in the text box. Please note that each sequence should start with ">", followed by the sequence name, and then the sequence itself.'),(0,e.Lk)("p",null,'2. Click the "Predict" button, and the system will start predicting your sequence.'),(0,e.Lk)("p",null,"3. The prediction results will be displayed in the table below."),(0,e.Lk)("p",null,"4. If you have multiple sequences to predict, you can enter them all at once, separated by blank lines between each sequence.")],-1),iT={style:{"text-align":"left","margin-top":"2%"}},lT={style:{"margin-top":"3%"}},oT={key:0};function rT(T,A,G,C,t,n){const i=tT.WK,l=v.S2,o=eT.o8,r=eT.Up;return(0,e.uX)(),(0,e.CE)(e.FK,null,[nT,(0,e.Lk)("div",null,[(0,e.bF)(i,{type:"textarea",modelValue:t.lncRNAinputValue,"onUpdate:modelValue":A[0]||(A[0]=T=>t.lncRNAinputValue=T),rows:7,placeholder:"请输入内容"},null,8,["modelValue"]),(0,e.Lk)("div",iT,[(0,e.bF)(l,{onClick:n.predict,class:"custom-button"},{default:(0,e.k6)((()=>[(0,e.eW)("Predict")])),_:1},8,["onClick"]),(0,e.bF)(l,{onClick:n.clear,class:"custom-button"},{default:(0,e.k6)((()=>[(0,e.eW)("Clear")])),_:1},8,["onClick"]),(0,e.bF)(l,{onClick:n.example,class:"custom-button"},{default:(0,e.k6)((()=>[(0,e.eW)("Example")])),_:1},8,["onClick"])]),(0,e.Lk)("div",lT,[t.isPredicting?((0,e.uX)(),(0,e.CE)("div",oT,"正在预测...")):(0,e.Q3)("",!0),t.predictionResult?((0,e.uX)(),(0,e.Wv)(r,{key:1,data:t.predictionResult,border:"",stripe:""},{default:(0,e.k6)((()=>[(0,e.bF)(o,{prop:"name",label:"name"}),(0,e.bF)(o,{prop:"nucleus",label:"nucleus"}),(0,e.bF)(o,{prop:"cytoplasm",label:"cytoplasm"}),(0,e.bF)(o,{prop:"location",label:"location"})])),_:1},8,["data"])):(0,e.Q3)("",!0)])])],64)}var aT=G(1078),sT={name:"LncRNAComponent",data(){return{defaultInput:">DLEU2L\nGAAAGTTTTCACTGCATCTCTTGTGGGATACGTATAATGTTTGGCAGATGATACTTTTAAATGACAATAACAATAGTTATTTTTCAGAGAGAGGAATCAAGATAGCCCTGCAAATTCAGTGTAGTTGTTAATTCTCTGTATTCTTATTAACAAGATTCCTTTATTCATTTATTTATCAAATAGTTATCGAGGGCCTTATATACCAGACATCAGTTTAGGTGTTTAGGATACATTAGAGTTAAAAAAAGACAAAAATCCCTGCCCTCGTCAACTTAAATTTTAGTGAGGGAAACAATACATAATAAACATAATAAATAGTAAATGACATGGTATGTAGGAAAGTGATAAGTGTTATGGGAAAATCAGAGGGAAAGGGGGTTAGTGAGTGCTGAGGGAATGTGGGTTGCCATTGAAATGGAGTGGTTAGTATATGCTTCATTAAGAAGGTGTCATATGAATAAAGACTTTGAAAGAGATGTATGAGTTACCAACTGCTACATAAAAAACTACCCCAAAACTCAGTGGCTTAAAACAATTAAACATTTGTTCACTCATGAATCAGTAGATCTGTTAGTTCTTAGTCTGAGCCAGGCTTGTTTTTTCTCTATAGGGCTTGCTCACACAGTTATGGTTAGCTACAGGTTAGCTGGTGGCTGGCTTTGCTAATCTTGGCTGGGTTCTTTCTTACGTATGAAGTCCCATCTGGGACAACTTGACTCAGCCTCATATGATCTTTAATAATCCTTCAGTAAACTAGCCTGGACCTGTTCTCTTGGCACAATAGGATCTCCTGAGGTTTGGGCTCAGAACCAGCACAATGTTACTTCGTTATATTCTGTTGCTCACAGAAAGTCACAAGGCAAGTCCAGATTCATAGGCTGGGGAAATAGACTTGATCTCTTGATGGAAAAGCTGCAAAGTCACATTGCAAAAGGCTGTAGATACTGAGGGGGACAGCCATTTTTGCTGTCTTCCACAGAAGGCAAGGGAGTAAGCCTTGTGGGTGTATGGTGCTGGAAGGGATGGGTGAAGAGTGGAGGAGGTGGCAGAGTATTCCAGGTAGACAGAATACTCTGTGCAGAGGCTCTGTGAGAGTGTACTGGTGTTAAAAGAACAGAGGCTAGAGTGTCTCAAATGGAGTAAGTGAGGAGAGAGTTGTAGGAGATGAAACCAGGGAGAAACAAGGACAAAATCAGGAAGAGGTTTCTTTTTGCCATAATTAGGACTTGGGCTTTTGATCAGAGAAATGAGGTTTCCCCCTCGTTTTTTGTGAGTTTTATTCTCCATATATAAGGTCAAGATTTTATCTTAATCTTTCATTTTCAGCAGTTTGACTGTGTGTCTAGGTAGTTTTTGTTTTTGTTGTTGATGCTGTTGCCTGGGTTTTTTTGTTTTTTGGTATTAATCCTGCTTGGGGTTCTCTGAGCTTCTTGGATATGTGGCTTGTTGCCTTTCATTATTTTTAGAAAATCCTCTGCCTTATTTCTTCAAATATTTCTTCTGCCCTCTTTCTTCTTCTTCCACTTGTATGGTACCTGACATCTCTTCCTGTTCTGCTCCACCACAGGTAAGCCAGTGCTTGCATCTCGTCTCTCCTGGGAAAGATCTGTCTTTCCTTGGATTTTAAGCTTATAGTTGTCCTGTAACCCCAGCTCTGATGGGATCAAGAAAAGTTATGATTTTGTAGTTCATTAACTTTTTCTTATTGTTAGGAAAGGAGCAATATTCTCCCAACTCTGCTCCATTAGAGGGTTTTGAGTAGAAGGCAGGACATAATCTGATTTATATTTTAACAAGAGCAGTTAGGTTACTGTATTGAAAGTAGGTAGAAGGCAGGGTTGGCTCTAACGAATTTGAATGAGGAGCCTCAGCACTTTTCGGCGCCATTTTCGAGTGATACCTGATCTCATCAATCTAGCGGAAGAGACAGGATAACCTATCCAAGAGTATAGCGCCACTATGACTCCGCCGGAAAAATTACTTTAAAAATCGCCAAAAATTACTTGGAGCAAAGGGCAGTAGGCGGAGCTTCGCCAAGGCTGGCGCAGTCGGTTTTGACCTGTAGCAGAGAACCAATTCTGGAGAACAGCCTCACTTCTTTGATTGAATACTCACATAATGCTTTGGAACAGGACATGAGATTAAGGTTTAATAATGATAGAATGAAGACCATAATAAAAGAGACCTCTACTTACCTCAGCAATTCTTACCTTTCTTACCTATTTGATGAAGATGTCTTTTGAAAGGTGTACTGCAAGGAACAAAATGTTTGTAAATTCTGCTTTTACCAAGGTTTCTTTTTTAGTTGATGCCAAAGAGTTCCAATATTGAACATCTTAAGTCTGTTACTTGGAGTATGGATTGAGTTTGGAGCTTACTCAGAGGACTACAGGAGAGTATCCAGGAGGTGGATAATTACTGTACCTTCCTCATGGAAAAAGTTTTATTTAAAGTGTTATTTCTCGTTGAATACTATCAAAAAGGAAAAAAAAATGACCTAAACTTTTGAGACAGATTTGGCTCTAGTAAGTATTTAGATATATCGCTTGCATATCTGGGAGAAGAAATAAGAGACTATCATCAATACATTCCCATCTACTAAAAAATTTTATTTTACACATGTCAAGGGATTACTTATAACTTCCATTGTCTTTTTTTTAAGCCTATATGCAATGAAAAATATATTGGCAAAATAAATATTTAAACCTTTTATGTTAAAATTACTGTGAAAGATGACAAGTTAGCTGCTGTTTTTGTCTACATTATACTGAAATTAAATGTTTATAATTTATATTTTGGGTTTATTTATTTATAAATCATGGAATTTATGCAAAAAACATGAGTAGTACAGATTCTCCTCTAATTCTGTAGGACTTTGAATAATGTGATATTTTTCTTATAGTTGGACCCTTGTGTTTTGAAGAAATGCCAACTGCTTGAAGAATTTCCTTGTTATTTGTATTATTTGCTATAGGGTTAGATGTTGAGAAATTCTTCTGACAAAAAATTTTAAGCCAGTTTTACACTAAATATTCCTTAGTCTGATTAATTTGTTATTGGATGTATTCTGTATCTTTCTTTTGTAATTTGTAACTTTTATCCACTTAGCACGAATGATTCTATTGAAGAAAATCTTTAGGAAGTGGTAGAAACTTTAAATCGCCCCATAGTTTGCCTGTTTCCACATTTTATTATCTTATAATCTTTGGGAGTGCTTACACTTATGGAGCTAACATTTTCAGAGATACAGGTTCTCATAGTACTACTAAAACTTTTTTCCTCTTTGGACTGAATACCTATGATTATAACTATACAGTAGTTTAAGTTTCCTTGTGATTAGTCAAAAATACCATTTTAGTATGAAGCAATGAAGTCTATTATTTGTTGTCCCATAATTGAGAAACTTAGATACACCTTTTATTAAGAGTTTGTAAATTCTAGCTTAGTCTACACAGATTTTTATATCAATTTGTTTATATTTTTATTAATGTCATTTCTGGAATTGTGAAAATGTTAATGTTCGACAAGCAACATTAAAAATAGATTTGAAACATT",lncRNAinputValue:"",isPredicting:!1,predictionResult:null}},created(){this.lncRNAinputValue=this.defaultInput},methods:{async predict(){let T=!0;const A=this.lncRNAinputValue.split(">").filter(Boolean).map((A=>{const[G,...C]=A.split("\n");let e=C.join("").trim().toUpperCase();return/^[ATCGU]*$/.test(e)?(e=e.replace(/U/g,"T"),{name:G.trim(),sequence:e}):(aT.nk.error("The input sequence is invalid."),void(T=!1))}));if(!T)return;const G=await fetch("https://latnet.wsleepybear.cn/lncrna-predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A)});this.isPredicting=!0;const C=await G.json();this.predictionResult=C.result,this.isPredicting=!1},clear(){this.lncRNAinputValue="",this.predictionResult=null},example(){this.lncRNAinputValue=this.defaultInput}}};const cT=(0,u.A)(sT,[["render",rT]]);var uT=cT;const pT=(0,e.Lk)("div",{style:{"font-size":"13px","text-align":"left"}},[(0,e.Lk)("p",null,'1. Enter your RNA sequence in the text box. Please note that each sequence should start with ">", followed by the sequence name, and then the sequence itself.'),(0,e.Lk)("p",null,'2. Click the "Predict" button, and the system will start predicting your sequence.'),(0,e.Lk)("p",null,"3. The prediction results will be displayed in the table below."),(0,e.Lk)("p",null,"4. If you have multiple sequences to predict, you can enter them all at once, separated by blank lines between each sequence.")],-1),dT={style:{"text-align":"left","margin-top":"2%"}},mT={style:{"margin-top":"3%"}},fT={key:0};function bT(T,A,G,C,t,n){const i=tT.WK,l=v.S2,o=eT.o8,r=eT.Up;return(0,e.uX)(),(0,e.CE)(e.FK,null,[pT,(0,e.Lk)("div",null,[(0,e.bF)(i,{type:"textarea",modelValue:t.mRNAinputValue,"onUpdate:modelValue":A[0]||(A[0]=T=>t.mRNAinputValue=T),rows:7,placeholder:"请输入内容"},null,8,["modelValue"]),(0,e.Lk)("div",dT,[(0,e.bF)(l,{onClick:n.predict,class:"custom-button"},{default:(0,e.k6)((()=>[(0,e.eW)("Predict")])),_:1},8,["onClick"]),(0,e.bF)(l,{onClick:n.clear,class:"custom-button"},{default:(0,e.k6)((()=>[(0,e.eW)("Clear")])),_:1},8,["onClick"]),(0,e.bF)(l,{onClick:n.example,class:"custom-button"},{default:(0,e.k6)((()=>[(0,e.eW)("Example")])),_:1},8,["onClick"])]),(0,e.Lk)("div",mT,[t.isPredicting?((0,e.uX)(),(0,e.CE)("div",fT,"正在预测...")):(0,e.Q3)("",!0),t.predictionResult?((0,e.uX)(),(0,e.Wv)(r,{key:1,data:t.predictionResult,border:"",stripe:""},{default:(0,e.k6)((()=>[(0,e.bF)(o,{prop:"name",label:"name"}),(0,e.bF)(o,{prop:"nucleus",label:"nucleus"}),(0,e.bF)(o,{prop:"cytoplasm",label:"cytoplasm"}),(0,e.bF)(o,{prop:"location",label:"location"})])),_:1},8,["data"])):(0,e.Q3)("",!0)])])],64)}var hT={name:"mRNAComponent",data(){return{defaultInput:">RAD52\nTTCCCAGAGACGCTCGCGCACCCTTCCCATTCTCCTCTGCGCGGCCTCCATCTAAGATCTCTTCCCCTTGTCCATAGCCTAGATCGAGCTCCCTGTGTGCACCGCGCGCTGCCCGAGGCGCAGGTCAACCAGAATCAAGATGTCTGGGACTGAGGAAGCAATTCTTGGAGGACGTGACAGCCATCCTGCTGCTGGCGGCGGCTCAGTGTTATGCTTTGGACAGTGCCAGTACACAGCAGAAGAGTACCAGGCCATCCAGAAGGCCCTGAGGCAGAGGCTGGGCCCAGAATACATAAGTAGCCGCATGGCTGGCGGAGGCCAGAAGGTGTGCTACATTGAGGGTCATCGGGTAATTAATCTGGCCAATGAGATGTTTGGTTACAATGGCTGGGCACACTCCATCACGCAGCAGAATGTGGATTTTGTTGACCTCAACAATGGCAAGTTCTACGTGGGAGTCTGTGCATTTGTGAGGGTCCAGCTGAAGGATGGTTCATATCATGAAGATGTTGGTTATGGTGTTAGTGAGGGCCTCAAGTCCAAGGCTTTATCTTTGGAGAAGGCAAGGAAGGAGGCGGTGACAGACGGGCTGAAGCGAGCCCTCAGGAGTTTTGGGAATGCACTTGGAAACTGTATTCTGGACAAAGACTACCTGAGATCACTAAATAAGCTTCCACGCCAGTTGCCTCTTGAAGTGGATTTAACTAAAGCGAAGAGACAAGATCTTGAACCGTCTGTGGAGGAGGCAAGATACAACAGCTGCCGACCGAACATGGCCCTGGGACACCCACAGCTGCAGCAGGTGACCTCCCCTTCCAGACCCAGCCATGCTGTGATACCGGCGGACCAGGACTGCAGCTCCCGAAGCCTGAGCTCATCCGCCGTGGAGAGCGAGGCCACGCACCAGCGGAAGCTCCGGCAGAAGCAGCTGCAGCAGCAGTTCCGGGAGCGGATGGAGAAGCAGCAGGTTCGAGTCTCCACGCCGTCAGCTGAGAAGAGTGAGGCAGCGCCTCCGGCCCCTCCTGTGACGCACAGCACTCCTGTAACTGTCTCAGAACCACTCCTGGAGAAAGACTTCCTTGCAGGAGTGACTCAAGAATTAATCAAGACTCTTGAAGACAACTCTGAAAAGTGGGCTGTGACTCCCGATGCAGGGGATGGTGTGGTCAAGCCCTCGTCTAGAGCAGACCCAGCCCAGACCTCTGACACATTAGCCTTGAACAACCAGATGGTGACCCAGAACAGGACTCCACACAGCGTTTGCCACCAGAAACCACAAGCAAAATCTGGATCTTGGGACCTCCAAACTTATAGCGCTGACCAACGCACAACAGGAAACTGGGAATCTCATAGGAAGAGCCAGGACATGAAGAAAAGGAAATATGATCCATCTTAACTGAGGCTCAGGCCACATAATTGGACTCTGTCACAAAGGGACTTTGGAAAACTACTTTTTGGTCATGAAATTGTTCATCGCTGCTGGAGAATGAACGTCATTGCGATTTATCTTGCTTCATTCTGAACCTTATCAAGAGGATCTGACTGAGAGCCCACTGCAGTTAGAGCTGAGCACTTTTGAAAAGCTTGTCCATCACTCTAGTAGGGAGAGGCTCTGGACAGATGAATACCTTTTCTTCGGCTTGTGAGGCTTCCCACTATTTATTACTGAACTATTATGTTAATGAAGATGGACATTTTAGGAATCACCAATGGCTCCTTGCCCTCAAGCAATATAGGCCAGACTTGGTCCTAAGCACCTGCCTCAGCAATTGTCTACATTCAGTTGTTTTGCATAACGTCTGCCTTCTTTCCTTTACGGTCCATGCCTTTAATGTTGCCCACATTAAGCACTGTGGATCACGACAGGAAAAAGGTTGGAGCAGTGCTTTTCACTACTTTGTATCAATCCAGGCTACAATCTTCATTTAATATAAATAATTTATGGATTTATGACATTACAATCCTGCATTGTTTCAAGACTGACATTTTTTCCTAAGGAAGGAAATAATCATCTAAGACCACGAAAAAAGGCTGTTTTTTGTTTTTTTTTTTTTTTTTTTTTTTGAGACGGGGTCTGGCTGTGTTGCCCTGACTGGAGTTCAGTGGTGCAAACACAGCTCTCTCCACAACCTCTTGGGCCCAAGTGATACTCCCACCTCTGCCTTACAAAATACAGGGATTACTGGTGTGAGCCACTGTGTCTGGCCAGAAAAGGCATTTTTGAGAAAGCAAATCGTATACCTTATTAACAAAATAGAATATATATATATTGCTTATCTGAAATGCTTGAAACCAGAATTGTTTTGCATTTTTTGAATATTTGTATACACATAATGAGACCTTGGGGATGGGACCCAAGTCTGAACGTGGAATTCACCTGTGTTTCGTGTATATGCCTCATACACATAATTTTGTGCATGAAACAGAGTTTTTGTATAAGAAGATACACTGCAGCTGAAGAGGGCTGGGTTTTTTTTTCTCTTAGGGTCGCTGCATAAACTGTTGTATGCCTGGTGCTTTGCGACTTGTCACACGAGGTCACGTGTGGAATTTTCCACTTCTGGCATCACGTCAGTGCTCAGAAATTTTCTGATCTCAGAGCATTTCAATTAGGGATGCTCAAACGCAACTGTTTCTACTTCCCCATTTCAGGTGTGAGATGTAACCCACCTTGACCATAAATTGGCTTTTCATAGTGCTCAGATGTTTC",mRNAinputValue:"",isPredicting:!1,predictionResult:null}},created(){this.mRNAinputValue=this.defaultInput},methods:{async predict(){let T=!0;const A=this.mRNAinputValue.split(">").filter(Boolean).map((A=>{const[G,...C]=A.split("\n");let e=C.join("").trim().toUpperCase();return/^[ATCGU]*$/.test(e)?(e=e.replace(/U/g,"T"),{name:G.trim(),sequence:e}):(aT.nk.error("The input sequence is invalid."),void(T=!1))}));if(!T)return;const G=await fetch("https://latnet.wsleepybear.cn/mrna-predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A)});this.isPredicting=!0;const C=await G.json();this.predictionResult=C.result,this.isPredicting=!1},clear(){this.mRNAinputValue="",this.predictionResult=null},example(){this.mRNAinputValue=this.defaultInput}}};const gT=(0,u.A)(hT,[["render",bT]]);var kT=gT,vT={name:"PredictComponent",components:{LncRNAComponent:uT,mRNAComponent:kT}};const _T=(0,u.A)(vT,[["render",CT]]);var yT=_T;const RT=(0,e.Lk)("h1",null,"CONTACT US",-1),wT=(0,e.Lk)("br",null,null,-1);function NT(T,A,G,C,t,n){const i=(0,e.g2)("H2"),l=(0,e.g2)("H4"),o=k.Ik;return(0,e.uX)(),(0,e.Wv)(o,{shadow:"never",style:{"margin-left":"8%","margin-right":"8%","margin-top":"2%","text-align":"left"}},{default:(0,e.k6)((()=>[RT,wT,(0,e.bF)(i,null,{default:(0,e.k6)((()=>[(0,e.eW)("Corresponding Email:")])),_:1}),(0,e.bF)(l,null,{default:(0,e.k6)((()=>[(0,e.eW)("lizhong@zjhu.edu.cn")])),_:1})])),_:1})}var FT={name:"ContactComponent"};const xT=(0,u.A)(FT,[["render",NT]]);var LT=xT;const OT=[{path:"/home",name:"home",component:S},{path:"/",redirect:"/home"},{path:"/introduction",name:"introduction",component:J},{path:"/predict",name:"predict",component:yT},{path:"/contact",name:"contact",component:LT}],IT=(0,h.aE)({history:(0,h.Bt)(),base:"/",mode:"hash",routes:OT});var ET=IT,PT=G(7477),VT=(G(4188),G(4379)),zT=(G(426),G(5847));const UT=(0,C.Ef)(b).use(ET).use(VT.A).use(zT.A);for(const[WT,qT]of Object.entries(PT))UT.component(WT,qT);UT.mount("#app")},6455:function(T,A,G){T.exports=G.p+"img/lncRNA_AUROC.38b5e914.png"},9995:function(T,A,G){T.exports=G.p+"img/mRNA_AUROC.321aebcc.png"},7903:function(T,A,G){T.exports=G.p+"img/lncRNA_barplot.989c6cef.png"},2891:function(T,A,G){T.exports=G.p+"img/mRNA_barplot.38488cb3.png"},1107:function(T,A,G){T.exports=G.p+"img/combined_heatmaps_with_colorbar.7d1964c3.png"},3510:function(T,A,G){T.exports=G.p+"img/mRNA_combined_heatmaps_with_colorbar.c5cdf3e2.png"},3814:function(T,A,G){T.exports=G.p+"img/lncRNA_cytoplasm_k-mer.e0344ba3.png"},6208:function(T,A,G){T.exports=G.p+"img/lncRNA_kmer_attribution.a343bb9d.png"},2201:function(T,A,G){T.exports=G.p+"img/lncRNA_nucleus_k-mer.d1c2518c.png"},6538:function(T,A,G){T.exports=G.p+"img/mRNA_cytoplasm_k-mer.164c0385.png"},8404:function(T,A,G){T.exports=G.p+"img/mRNA_kmer_attribution.552dd437.png"},6181:function(T,A,G){T.exports=G.p+"img/mRNA_nucleus_k-mer.9d47a3db.png"},3748:function(T,A,G){T.exports=G.p+"img/ciRNAs.f0962dca.png"},4938:function(T,A,G){T.exports=G.p+"img/circRNAs.8b16caac.png"},2178:function(T,A,G){T.exports=G.p+"img/lncRNAs.c73cd1ec.png"},5250:function(T,A,G){T.exports=G.p+"img/mRNAs.ef1686ce.png"},5556:function(T,A,G){T.exports=G.p+"img/snRNAs.e48c4bc1.png"},8145:function(T,A,G){T.exports=G.p+"img/snoRNAs.11d68f46.png"},8543:function(T,A,G){T.exports=G.p+"img/大论文框架图.875658af.png"}},A={};function G(C){var e=A[C];if(void 0!==e)return e.exports;var t=A[C]={exports:{}};return T[C].call(t.exports,t,t.exports,G),t.exports}G.m=T,function(){var T=[];G.O=function(A,C,e,t){if(!C){var n=1/0;for(r=0;r<T.length;r++){C=T[r][0],e=T[r][1],t=T[r][2];for(var i=!0,l=0;l<C.length;l++)(!1&t||n>=t)&&Object.keys(G.O).every((function(T){return G.O[T](C[l])}))?C.splice(l--,1):(i=!1,t<n&&(n=t));if(i){T.splice(r--,1);var o=e();void 0!==o&&(A=o)}}return A}t=t||0;for(var r=T.length;r>0&&T[r-1][2]>t;r--)T[r]=T[r-1];T[r]=[C,e,t]}}(),function(){G.n=function(T){var A=T&&T.__esModule?function(){return T["default"]}:function(){return T};return G.d(A,{a:A}),A}}(),function(){G.d=function(T,A){for(var C in A)G.o(A,C)&&!G.o(T,C)&&Object.defineProperty(T,C,{enumerable:!0,get:A[C]})}}(),function(){G.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(T){if("object"===typeof window)return window}}()}(),function(){G.o=function(T,A){return Object.prototype.hasOwnProperty.call(T,A)}}(),function(){G.r=function(T){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(T,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(T,"__esModule",{value:!0})}}(),function(){G.p=""}(),function(){var T={524:0};G.O.j=function(A){return 0===T[A]};var A=function(A,C){var e,t,n=C[0],i=C[1],l=C[2],o=0;if(n.some((function(A){return 0!==T[A]}))){for(e in i)G.o(i,e)&&(G.m[e]=i[e]);if(l)var r=l(G)}for(A&&A(C);o<n.length;o++)t=n[o],G.o(T,t)&&T[t]&&T[t][0](),T[t]=0;return G.O(r)},C=self["webpackChunklatnet"]=self["webpackChunklatnet"]||[];C.forEach(A.bind(null,0)),C.push=A.bind(null,C.push.bind(C))}();var C=G.O(void 0,[504],(function(){return G(2609)}));C=G.O(C)})();
//# sourceMappingURL=app.2de09b0c.js.map