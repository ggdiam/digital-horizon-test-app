(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e){e.exports=[{id:0,parentId:null,name:"Minerva",age:39},{id:38,parentId:null,name:"Ginger",age:67},{id:1,parentId:0,name:"Sib",age:68},{id:28,parentId:0,name:"Antonie",age:53},{id:9,parentId:0,name:"Martynne",age:70},{id:17,parentId:0,name:"Rori",age:46},{id:6,parentId:1,name:"Rosamund",age:50},{id:8,parentId:1,name:"Philis",age:20},{id:5,parentId:1,name:"Margy",age:31},{id:2,parentId:1,name:"Iormina",age:38},{id:3,parentId:2,name:"Sib",age:25},{id:4,parentId:2,name:"Toni",age:78},{id:7,parentId:6,name:"Hildegarde",age:51},{id:10,parentId:9,name:"Abagael",age:32},{id:11,parentId:10,name:"Charlot",age:79},{id:14,parentId:10,name:"Celene",age:62},{id:15,parentId:10,name:"Devora",age:47},{id:16,parentId:10,name:"Mignon",age:50},{id:13,parentId:11,name:"Sonnnie",age:20},{id:12,parentId:11,name:"Kyle",age:46},{id:22,parentId:17,name:"Del",age:35},{id:18,parentId:17,name:"Wilow",age:20},{id:25,parentId:17,name:"Marietta",age:73},{id:21,parentId:18,name:"Cassandre",age:58},{id:19,parentId:18,name:"Rosaleen",age:30},{id:20,parentId:18,name:"Collete",age:43},{id:24,parentId:22,name:"Jillane",age:58},{id:23,parentId:22,name:"Robby",age:24},{id:26,parentId:25,name:"Dionis",age:62},{id:27,parentId:25,name:"Marcelle",age:23},{id:29,parentId:28,name:"Maria",age:44},{id:35,parentId:28,name:"Alexia",age:77},{id:30,parentId:29,name:"Noelle",age:77},{id:33,parentId:30,name:"Twyla",age:20},{id:34,parentId:30,name:"Lillian",age:63},{id:31,parentId:30,name:"Suzann",age:70},{id:32,parentId:30,name:"Marney",age:52},{id:36,parentId:35,name:"Arlette",age:63},{id:37,parentId:36,name:"Felicity",age:22},{id:55,parentId:38,name:"Lianna",age:53},{id:62,parentId:38,name:"Brittany",age:75},{id:48,parentId:38,name:"Ashlee",age:39},{id:39,parentId:38,name:"Ekaterina",age:68},{id:44,parentId:39,name:"Kathe",age:22},{id:46,parentId:39,name:"Antoinette",age:75},{id:40,parentId:39,name:"Uta",age:21},{id:45,parentId:39,name:"Blakeley",age:29},{id:43,parentId:40,name:"Veda",age:70},{id:42,parentId:40,name:"Malia",age:64},{id:41,parentId:40,name:"Rhody",age:42},{id:47,parentId:46,name:"Wren",age:56},{id:49,parentId:48,name:"Agnes",age:62},{id:51,parentId:48,name:"Lenee",age:20},{id:54,parentId:48,name:"Ysabel",age:75},{id:50,parentId:49,name:"Jennette",age:52},{id:53,parentId:51,name:"Elfie",age:65},{id:52,parentId:51,name:"Nike",age:42},{id:56,parentId:55,name:"Donelle",age:72},{id:58,parentId:55,name:"Modesta",age:71},{id:61,parentId:55,name:"Estrellita",age:69},{id:57,parentId:56,name:"Alikee",age:33},{id:59,parentId:58,name:"Susannah",age:67},{id:60,parentId:58,name:"Korie",age:28},{id:63,parentId:62,name:"Roseline",age:29},{id:64,parentId:62,name:"Esta",age:53}]},13:function(e,n,a){e.exports=a(23)},19:function(e,n,a){},20:function(e,n,a){},23:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),i=a(9),l=a.n(i),d=(a(19),a(12)),o=a(1),c=a(2),s=a(4),u=a(3),m=a(5),p=(a(20),a(7)),f=a.n(p),g=a(10);function v(e){return new Promise(function(n){var a=new FileReader;a.onload=function(){var e=null;if(a.result)try{e=JSON.parse(a.result)}catch(t){}n(e)},a.readAsText(e)})}var h=function(e){function n(){var e,a;Object(o.a)(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).onDragOver=function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},a.onChange=function(){var e=Object(g.a)(f.a.mark(function e(n){var t,r,i,l;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.stopPropagation(),n.preventDefault(),t=n.dataTransfer.files||n.target.files,r=t.length?t[0]:null){e.next=6;break}return e.abrupt("return");case 6:if(!(i=a.props.onChange)){e.next=12;break}return e.next=10,v(r);case 10:l=e.sent,i(l);case 12:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}(),a}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"drop_zone",onDragOver:this.onDragOver,onDrop:this.onChange},"Drop json file here")}}]),n}(r.a.Component),I=a(6),y=[{field:"name",title:"By name"},{field:"age",title:"By age"}],b=function(e){function n(){var e,a;Object(o.a)(this,n);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(i)))).renderItem=function(e,n){var t=a.props.selectedSort,i=["sort-btn"];return t&&t.field===e.field&&i.push("selected"),r.a.createElement("div",{key:n,className:i.join(" "),onClick:a.onClick.bind(Object(I.a)(a),e)},e.title)},a.onClick=function(e){var n=a.props.onChange;n&&n(e)},a}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sort-panel"},r.a.createElement("div",{className:"lbl sort-lbl"},"Sort"),y.map(this.renderItem))}}]),n}(r.a.Component),S=function(e){function n(){var e,a;Object(o.a)(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).onClick=function(e){var n=a.props,t=n.onClick,r=n.item;t&&r.children.length&&t(r)},a}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.props,n=e.item,a=e.selected,t=n=n||{},i=t.name,l=t.age,d=t.children,o=["item"];return a&&o.push("selected"),d&&d.length&&o.push("has-children"),r.a.createElement("div",{className:o.join(" "),onClick:this.onClick},r.a.createElement("div",{className:"item-name"},i),r.a.createElement("div",{className:"item-age"},l))}}]),n}(r.a.Component),C=a(11),w={listToTree:function(e){var n=e.filter(function(e){return null===e.parentId}),a=0,t=!0,r=!1,i=void 0;try{for(var l,d=n[Symbol.iterator]();!(t=(l=d.next()).done);t=!0){var o=l.value;o.level=0,o.sortIx=a,a++,w.fillChildren(e,o)}}catch(c){r=!0,i=c}finally{try{t||null==d.return||d.return()}finally{if(r)throw i}}return n},fillChildren:function(e,n){n.children=e.filter(function(e){return e.parentId===n.id});var a=0,t=!0,r=!1,i=void 0;try{for(var l,d=n.children[Symbol.iterator]();!(t=(l=d.next()).done);t=!0){var o=l.value;o.level=n.level+1,o.sortIx=a,a++,w.fillChildren(e,o)}}catch(c){r=!0,i=c}finally{try{t||null==d.return||d.return()}finally{if(r)throw i}}},getColumns:function(e,n){var a=[];a.push({name:"Root",items:e});for(var t=e.find(function(e){return n.some(function(n){return n.id===e.id})});t;){var r=t.children;a.push({name:t.name,items:r}),t=r.find(function(e){return n.some(function(n){return n.id===e.id})})}return a},sortTree:function(e,n){n.children.sort(function(n,a){return n[e]<a[e]?-1:n[e]>a[e]?1:0});var a=!0,t=!1,r=void 0;try{for(var i,l=n.children[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var d=i.value;w.sortTree(e,d)}}catch(o){t=!0,r=o}finally{try{a||null==l.return||l.return()}finally{if(t)throw r}}},saveUrlState:function(e){var n=JSON.stringify(e);window.location.hash=n},getUrlState:function(){var e;try{var n=decodeURIComponent(window.location.hash);n=n.substring(1),e=JSON.parse(n)}catch(a){}return e}},O=w,k=function(e){function n(e){var a;Object(o.a)(this,n),(a=Object(s.a)(this,Object(u.a)(n).call(this,e))).renderColumn=function(e,n){var t=a.state.selectedIds,i=e.name,l=e.items;return r.a.createElement("div",{key:n,className:"tree-column"},r.a.createElement("div",{className:"lbl column-lbl"},i),l.map(function(e){return r.a.createElement(S,{key:e.id,item:e,selected:t.some(function(n){return n.id===e.id}),onClick:a.itemClick})}))},a.itemClick=function(e){var n=a.state,t=n.selectedIds,r=n.tree,i=n.selectedSort,l=t.findIndex(function(n){return n.id===e.id});-1!==l?t.splice(l,1):(t.push({id:e.id,level:e.level}),t=t.filter(function(n){return n.id===e.id||n.id!==e.id&&n.level<e.level})),O.saveUrlState({selectedIds:t,selectedSort:i});var d=O.getColumns(r,t);a.setState({selectedIds:t,columns:d})},a.onSortChange=function(e){var n=a.state,t=n.selectedSort,r=n.tree,i=n.selectedIds;if(t&&t.field===e.field&&(e=null),e){var l=!0,o=!1,c=void 0;try{for(var s,u=r[Symbol.iterator]();!(l=(s=u.next()).done);l=!0){var m=s.value;O.sortTree(e.field,m)}}catch(y){o=!0,c=y}finally{try{l||null==u.return||u.return()}finally{if(o)throw c}}}else{var p=!0,f=!1,g=void 0;try{for(var v,h=r[Symbol.iterator]();!(p=(v=h.next()).done);p=!0){var I=v.value;O.sortTree("sortIx",I)}}catch(y){f=!0,g=y}finally{try{p||null==h.return||h.return()}finally{if(f)throw g}}}O.saveUrlState({selectedIds:i,selectedSort:e}),a.setState({selectedSort:e,tree:Object(d.a)(r)})},a.onChangeData=function(e){var n=a.state.selectedSort;if(e){var t=O.listToTree(e),r=[],i=O.getColumns(t,r);if(n){var l=!0,d=!1,o=void 0;try{for(var c,s=t[Symbol.iterator]();!(l=(c=s.next()).done);l=!0){var u=c.value;O.sortTree(n.field,u)}}catch(m){d=!0,o=m}finally{try{l||null==s.return||s.return()}finally{if(d)throw o}}}O.saveUrlState({selectedIds:[],selectedSort:n}),a.setState({list:e,tree:t,selectedIds:r,columns:i})}};var t=O.getUrlState()||{},i=t.selectedIds,l=t.selectedSort;i=i||[];var c=C||[],m=O.listToTree(c);if(l){var p=!0,f=!1,g=void 0;try{for(var v,h=m[Symbol.iterator]();!(p=(v=h.next()).done);p=!0){var I=v.value;O.sortTree(l.field,I)}}catch(y){f=!0,g=y}finally{try{p||null==h.return||h.return()}finally{if(f)throw g}}}return a.state={tree:m,list:c,columns:O.getColumns(m,i),selectedIds:i,selectedSort:l},a}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.state,n=e.columns,a=e.selectedSort;return r.a.createElement("div",{className:"App"},r.a.createElement(h,{onChange:this.onChangeData}),r.a.createElement(b,{selectedSort:a,onChange:this.onSortChange}),r.a.createElement("div",{className:"tree-container"},n.map(this.renderColumn)))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.975ae00a.chunk.js.map