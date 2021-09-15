(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var i=a(2),s=a.n(i),c=a(14),o=a.n(c),r=(a(20),a(9)),n=a(10),d=a(3),l=a(12),h=a(11),g=(a(21),a(7)),u=a(8),m=a(0),j=[{id:"Pad-1",triggerKey:"Q",jskeycode:81,name:"Crash",icon:"",url:"tama/crash_10.ogg"},{id:"Pad-2",triggerKey:"W",jskeycode:87,name:"HiHat Open",icon:"",url:"tama/hh_pedal.ogg"},{id:"Pad-3",triggerKey:"E",jskeycode:69,name:"HiHat Closed",icon:"",url:"tama/hh_closed_2.ogg"},{id:"Pad-4",triggerKey:"A",jskeycode:65,name:"Tom 1",icon:"",url:"tama/tom_8.ogg"},{id:"Pad-5",triggerKey:"S",jskeycode:83,name:"Tom 2",icon:"",url:"tama/tom_10.ogg"},{id:"Pad-6",triggerKey:"D",jskeycode:68,name:"Snare",icon:"",url:"tama/snare_1.ogg"},{id:"Pad-7",triggerKey:"Z",jskeycode:90,name:"Kick",icon:"",url:"tama/kick_1.ogg"},{id:"Pad-8",triggerKey:"X",jskeycode:88,name:"Floor Tom",icon:"",url:"tama/tom_13.ogg"},{id:"Pad-9",triggerKey:"C",jskeycode:67,name:"Ride",icon:"",url:"tama/ride.ogg"}],p=[{id:"Pad-1",triggerKey:"Q",jskeycode:81,name:"Loop 1",icon:"",url:"tr808/loop1-85bpm.ogg"},{id:"Pad-2",triggerKey:"W",jskeycode:87,name:"Loop 2",icon:"",url:"tr808/loop2-85bpm.ogg"},{id:"Pad-3",triggerKey:"E",jskeycode:69,name:"Loop 3",icon:"",url:"tr808/loop3-85bpm.ogg"},{id:"Pad-4",triggerKey:"A",jskeycode:65,name:"Loop 4",icon:"",url:"tr808/loop4-85bpm.ogg"},{id:"Pad-5",triggerKey:"S",jskeycode:83,name:"Cymbal",icon:"",url:"tr808/cymbal.ogg"},{id:"Pad-6",triggerKey:"D",jskeycode:68,name:"Snare",icon:"",url:"tr808/snare.ogg"},{id:"Pad-7",triggerKey:"Z",jskeycode:90,name:"Kick",icon:"",url:"tr808/kick.ogg"},{id:"Pad-8",triggerKey:"X",jskeycode:88,name:"Power Snare",icon:"",url:"tr808/power-snare.ogg"},{id:"Pad-9",triggerKey:"C",jskeycode:67,name:"Open Hihat",icon:"",url:"tr808/open-snare.ogg"}],b=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={power:!0,volume:.8,patch:j,patchName:"Trad Kit"},i.togglePower=i.togglePower.bind(Object(d.a)(i)),i.handleVolumeClick=i.handleVolumeClick.bind(Object(d.a)(i)),i.patchManager=i.patchManager.bind(Object(d.a)(i)),i}return Object(n.a)(a,[{key:"patchManager",value:function(e){var t={trad:["trad",j],tr808:["tr808",p]};e.target.id===t.trad[0]?this.setState((function(e){return{patch:t.trad[1],patchName:"Trad Kit"}})):e.target.id===t.tr808[0]&&this.setState((function(e){return{patch:t.tr808[1],patchName:"TR-808"}}))}},{key:"handleVolumeClick",value:function(e){var t="up",a="down",i=.9,s=.1,c=.1;e.currentTarget.id===t&&this.state.volume<=i?this.setState((function(e){return{volume:e.volume+c}})):e.currentTarget.id===a&&this.state.volume>=s&&this.setState((function(e){return{volume:e.volume-c}}))}},{key:"togglePower",value:function(){console.log(this.state.power,this.state.volume),!1===this.state.power?(this.setState({power:!0,volume:.8}),document.getElementById("display").textContent="---"):(this.setState({power:!1,volume:0}),document.getElementById("display").textContent="OFF"),console.log(this.state.power,this.state.volume)}},{key:"render",value:function(){var e;e=this.state.volume,[].slice.call(document.getElementsByClassName("clip")).forEach((function(t){return t.volume=e})),console.log(this.state.volume);var t=Math.floor(10*this.state.volume);return console.log(t),Object(m.jsx)("div",{className:"App",id:"drum-machine",children:Object(m.jsx)("div",{className:"DmWrapper",children:Object(m.jsxs)("div",{className:"Interface",children:[Object(m.jsx)(y,{}),Object(m.jsx)(O,{arg:this.state.patch[0],pow:this.state.power}),Object(m.jsx)(O,{arg:this.state.patch[1],pow:this.state.power}),Object(m.jsx)(O,{arg:this.state.patch[2],pow:this.state.power}),Object(m.jsx)(O,{arg:this.state.patch[3],pow:this.state.power}),Object(m.jsx)(O,{arg:this.state.patch[4],pow:this.state.power}),Object(m.jsx)(O,{arg:this.state.patch[5],pow:this.state.power}),Object(m.jsx)(O,{arg:this.state.patch[6],pow:this.state.power}),Object(m.jsx)(O,{arg:this.state.patch[7],pow:this.state.power}),Object(m.jsx)(O,{arg:this.state.patch[8],pow:this.state.power}),Object(m.jsxs)("div",{className:"Controls",children:[Object(m.jsxs)("div",{className:"logo",children:[Object(m.jsx)("h2",{children:"Boland"}),Object(m.jsx)("h3",{children:"PAD-9"})]}),Object(m.jsxs)("div",{className:"display",children:[Object(m.jsx)("p",{children:"DISPLAY"}),Object(m.jsxs)("div",{id:"display-screen",children:[Object(m.jsx)("p",{className:"display-info",id:"kit",children:this.state.patchName}),Object(m.jsx)("p",{className:"display-info",id:"display",children:"---"}),Object(m.jsxs)("p",{className:"display-info",id:"level",children:["Vol ",t]})]})]}),Object(m.jsxs)("div",{className:"patch",id:"patch",children:[Object(m.jsx)("p",{className:"control-label",children:"PATCH"}),Object(m.jsx)("button",{className:"patch-button",id:"trad",onClick:this.patchManager,children:"TRAD"}),Object(m.jsx)("button",{className:"patch-button",id:"tr808",onClick:this.patchManager,children:"808"})]}),Object(m.jsxs)("div",{className:"patch",id:"volume",children:[Object(m.jsx)("p",{className:"control-label",children:"VOLUME"}),Object(m.jsx)("button",{className:"patch-button",id:"up",onClick:this.handleVolumeClick,children:Object(m.jsx)(g.a,{icon:u.c})}),Object(m.jsx)("button",{className:"patch-button",id:"down",onClick:this.handleVolumeClick,children:Object(m.jsx)(g.a,{icon:u.b})})]}),Object(m.jsxs)("div",{className:"patch",id:"power",children:[Object(m.jsx)("p",{className:"control-label",children:"POWER"}),Object(m.jsx)("button",{className:"patch-button",onClick:this.togglePower,children:Object(m.jsx)(g.a,{icon:u.a})})]})]})]})})})}}]),a}(s.a.Component);function y(){return Object(m.jsx)("div",{className:"Header",children:Object(m.jsx)("h1",{children:"NONAPAD"})})}var O=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={},i.triggerAudio=i.triggerAudio.bind(Object(d.a)(i)),i.handleKeyPress=i.handleKeyPress.bind(Object(d.a)(i)),i}return Object(n.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){var t=this.props.arg;e.keyCode===t.jskeycode&&this.triggerAudio()}},{key:"triggerAudio",value:function(){var e=this.props.arg,t=document.getElementById(e.triggerKey);t.currentTime=0,t.play(),this.props.pow&&(document.getElementById("display").textContent=e.name),document.getElementById(e.id).classList.add("pad-active"),setTimeout((function(){document.getElementById(e.id).classList.remove("pad-active")}),101)}},{key:"render",value:function(){var e=this.props.arg;return Object(m.jsxs)("div",{className:"drum-pad",id:e.id,onClick:this.triggerAudio,role:"button",children:[Object(m.jsx)("audio",{id:e.triggerKey,className:"clip",src:e.url,preload:"auto",type:"audio/wav"}),Object(m.jsx)("p",{className:"padTriggerKey",children:e.triggerKey})]})}}]),a}(s.a.Component);var v=b,k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),i(e),s(e),c(e),o(e)}))},x=a(15),w=a.n(x);o.a.render(Object(m.jsxs)(s.a.StrictMode,{children:[Object(m.jsx)(v,{}),Object(m.jsx)(w.a,{})]}),document.getElementById("root")),k()}},[[33,1,2]]]);
//# sourceMappingURL=main.b0b55bbf.chunk.js.map