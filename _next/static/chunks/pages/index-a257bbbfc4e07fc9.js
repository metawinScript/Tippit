(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(79664)}])},79664:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return v}});var n=s(85893),i=s(67294),a=s(58739),l=s(92321),r=s(91444),o=s(24697),d=JSON.parse('{"L":"0x53589131A91918F3F9450eF2E07969Aa64FA4faF","M":[{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"deleteNews","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"likeAndDislikeNews","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_title","type":"string"},{"internalType":"string","name":"_description","type":"string"}],"name":"postNews","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"tipCreator","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getNews","outputs":[{"internalType":"address payable","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNewsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"likers","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}');let c=()=>{let[e,t]=(0,i.useState)(!1),[s,c]=(0,i.useState)(""),[u,p]=(0,i.useState)(""),[m]=(0,o.Nr)(s,500),[g]=(0,o.Nr)(u,500),[x,h]=(0,i.useState)(""),[b,y]=(0,i.useState)(!1),[w,f]=(0,i.useState)(!1),N=s&&u,v=()=>{c(""),p("")},{writeContractAsync:j,isPending:k,isSuccess:L}=(0,a.S)(),C=async e=>{e.preventDefault();try{if(!N)throw Error("Please fill all fields");y(!0),await j({address:d.L,abi:d.M,functionName:"postNews",args:[m,g]}),h("Waiting for confirmation..."),t(!1),v(),r.Am.success("News created successfully ...")}catch(e){console.log({e}),r.Am.error((null==e?void 0:e.message)||"Something went wrong. Try again.")}finally{y(!1),h("")}},{address:S,isConnected:T}=(0,l.m)();return(0,i.useEffect)(()=>{if(T){f(!0);return}f(!1)},[T]),(0,n.jsx)("div",{className:"flex flex-row w-full justify-between",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("button",{type:"button",onClick:()=>t(!0),className:"inline-block ml-4 px-6 py-2.5 bg-black text-white font-medium text-md leading-tight rounded-2xl shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out","data-bs-toggle":"modal","data-bs-target":"#exampleModalCenter",children:(0,n.jsx)("p",{children:"Add News (sports, entertainment, etc.) + "})}),e&&(0,n.jsx)("div",{className:"fixed z-40 overflow-y-auto top-0 w-full left-0",id:"modal",children:(0,n.jsx)("form",{onSubmit:C,children:(0,n.jsxs)("div",{className:"flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,n.jsx)("div",{className:"fixed inset-0 transition-opacity",children:(0,n.jsx)("div",{className:"absolute inset-0 bg-gray-900 opacity-75"})}),(0,n.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen",children:"​"}),(0,n.jsxs)("div",{className:"inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline",children:[(0,n.jsxs)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:[(0,n.jsx)("label",{children:"Title"}),(0,n.jsx)("input",{onChange:e=>{c(e.target.value)},required:!0,type:"text",className:"w-full bg-gray-100 p-2 mt-2 mb-3"}),(0,n.jsx)("label",{children:"Description"}),(0,n.jsx)("input",{onChange:e=>{p(e.target.value)},required:!0,type:"text",className:"w-full bg-gray-100 p-2 mt-2 mb-3"})]}),(0,n.jsxs)("div",{className:"bg-gray-200 px-4 py-3 text-right",children:[(0,n.jsxs)("button",{type:"button",className:"py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2",onClick:()=>t(!1),children:[(0,n.jsx)("i",{className:"fas fa-times"})," Cancel"]}),(0,n.jsx)("button",{type:"submit",disabled:!!x||!N||!C,className:"py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2",children:b?"Creating...":"Create"})]})]})]})})})]})})};var u=s(62542),p=s(52766),m=s(89810),g=s(46828);let x=e=>{let{id:t,setError:s,setLoading:o,clear:c}=e,[x,h]=(0,i.useState)(null),[b,y]=(0,i.useState)(0),{address:w}=(0,l.m)(),{writeContractAsync:f}=(0,a.S)(),{writeContractAsync:N}=(0,a.S)(),{data:v,refetch:j}=(0,m.u)({abi:d.M,address:d.L,functionName:"getNews",args:[Number(t)]}),{openConnectModal:k}=(0,p.We)(),L=(0,i.useCallback)(()=>{if(!v)return null;h({owner:v[0],title:v[1],description:v[2],likes:Number(v[3]),tips:Number(v[4])}),console.log({owner:v[0],title:v[1],description:v[2],likes:Number(v[3]),tips:Number(v[4])})},[v]);(0,i.useEffect)(()=>{L()},[L]);let C=async()=>{if(!N)throw"Failed to like this news";await N({address:d.L,abi:d.M,functionName:"likeAndDislikeNews",args:[Number(t)]}),await j(),o("Liking news...")},S=async()=>{o("Approving ..."),c();try{if(!w&&k){k();return}await r.Am.promise(C(),{pending:"Liking news...",success:"News liked successfully",error:"Failed to like news"})}catch(e){console.log({e}),s((null==e?void 0:e.reason)||(null==e?void 0:e.message)||"Something went wrong. Try again.")}finally{o(null)}},T=async()=>{if(!f)throw"Failed to tip this news creator";console.log({tipAmount_:(0,g.f)(String(b))}),await f({address:d.L,abi:d.M,functionName:"tipCreator",args:[Number(t)],value:(0,g.f)(String(b))}),await j(),o("Tipping news...")},M=async()=>{o("Approving ..."),c();try{if(!w&&k){k();return}await r.Am.promise(T(),{pending:"Tipping news creator...",success:"News creator tipped successfully",error:"Failed to tip news creator"})}catch(e){console.log({e}),s((null==e?void 0:e.reason)||(null==e?void 0:e.message)||"Something went wrong. Try again.")}finally{o(null)}};return x?(0,n.jsx)("div",{className:"shadow-lg relative rounded-b-lg",children:(0,n.jsxs)("div",{className:"group",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsxs)("div",{className:"ml-4 mt-4 bg-amber-400 text-black p-1 rounded-l-lg px-4",children:[x.likes," Likes"]}),(0,n.jsxs)("div",{className:"mr-4 mt-4 bg-amber-400 text-black p-1 rounded-l-lg px-4",children:[u.dF(x.tips.toString())," TEA"]})]}),(0,n.jsxs)("div",{className:"m-5",children:[(0,n.jsxs)("div",{className:"pt-1",children:[(0,n.jsx)("p",{className:"mt-4 text-2xl font-bold",children:x.title}),(0,n.jsx)("div",{className:"h-40 overflow-y-hidden scrollbar-hide",children:(0,n.jsx)("h3",{className:"mt-4 text-sm text-gray-700",children:x.description})})]}),(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)("input",{type:"number",onChange:e=>{y(e.target.value),console.log(e.target.value)},placeholder:"Enter amount in eth",className:"h-10 pl-4 w-[100%]"}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("div",{className:"basis-[80%] mr-8",children:(0,n.jsx)("button",{onClick:M,className:"mt-4 h-14 w-full border-[1px] border-gray-500 text-black p-2 rounded-lg hover:bg-black hover:text-white ",children:"Tip Creator"})}),(0,n.jsx)("div",{className:"basis-[20%]",children:(0,n.jsx)("button",{className:"bg-[#000000] text-[#ffffff] p-4 mt-4 rounded-lg",onClick:S,children:(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd","clip-rule":"evenodd",d:"M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z",fill:"currentColor"})})})})]})]})]})]})}):null},h=e=>{let{message:t,clear:s}=e;return(0,n.jsxs)("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert",children:[(0,n.jsx)("span",{className:"block sm:inline",children:t}),(0,n.jsx)("span",{className:"absolute top-0 bottom-0 right-0 px-4 py-3",children:(0,n.jsxs)("svg",{className:"fill-current h-6 w-6 text-red-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",onClick:s,children:[(0,n.jsx)("title",{children:"Close"}),(0,n.jsx)("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})]})})]})},b=e=>{let{message:t}=e;return(0,n.jsxs)("div",{className:"bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3",role:"alert",children:[(0,n.jsx)("p",{className:"font-bold",children:t||"Loading..."}),(0,n.jsx)("p",{className:"text-sm",children:"Interacting with smart contract."})]})},y=e=>{let{message:t}=e;return(0,n.jsx)("div",{className:"bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md",role:"alert",children:(0,n.jsx)("div",{className:"flex",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"font-bold",children:"Success"}),(0,n.jsx)("p",{className:"text-sm",children:t})]})})})},w=()=>{let{data:e,refetch:t}=(0,m.u)({abi:d.M,address:d.L,functionName:"getNewsLength",args:[]}),s=e?Number(e.toString()):0,[a,l]=(0,i.useState)(""),[r,o]=(0,i.useState)(""),[c,u]=(0,i.useState)(""),p=()=>{l(""),o(""),u("")};return(0,n.jsxs)("div",{children:[a&&(0,n.jsx)(h,{message:a,clear:p}),r&&(0,n.jsx)(y,{message:r}),c&&(0,n.jsx)(b,{message:c}),(0,n.jsxs)("div",{className:"mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8",children:[(0,n.jsx)("h2",{className:"sr-only",children:"News"}),(0,n.jsx)("div",{className:"grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8",children:(()=>{if(!s)return null;let e=[];for(let t=0;t<s;t++)e.push((0,n.jsx)(x,{id:t,setSuccess:o,setError:l,setLoading:u,loading:c,clear:p},t));return e})()})]})]})};var f=s(9008),N=s.n(f);function v(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(N(),{children:[(0,n.jsx)("title",{children:"Tippit"}),(0,n.jsx)("meta",{httpEquiv:"Content-Security-Policy",content:"upgrade-insecure-requests"})]}),(0,n.jsx)(c,{}),(0,n.jsx)(w,{})]})}},46601:function(){}},function(e){e.O(0,[3550,664,9774,2888,179],function(){return e(e.s=48312)}),_N_E=e.O()}]);