(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qimencalc-qimencalc"],{"24ee":function(e,t,a){"use strict";var i=a("9e9f"),n=a.n(i);n.a},"2ea6":function(e,t,a){"use strict";a("6a54");var i=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("39d8")),d=i(a("5de6"));a("e966"),a("d4b5");var r,s=i(a("a807")),o=i(a("f778")),l=i(a("0e3f")),u=i(a("a634")),c=i(a("33ac")),h=i(a("bc53")),f=i(a("40d5")),m=i(a("503c")),v=i(a("64bd")),p=i(a("1f6a")),g=i(a("0c63")),T=i(a("732a")),b=i(a("5b16")),w=i(a("7e9f")),x=(i(a("7e15")),i(a("5689"))),y=(i(a("dd05")),i(a("655c")),i(a("a807"))),z=i(a("f778")),C=i(a("0e3f")),A=i(a("a634")),_=i(a("33ac")),D=i(a("bc53")),k=i(a("40d5")),I=i(a("503c")),M=i(a("64bd")),F=i(a("1f6a")),H=i(a("0c63")),S=i(a("732a")),E=i(a("5b16")),$=i(a("7e9f")),N=a("4a0b"),P={components:{iTabs:s.default,iTab:o.default,iGrid:l.default,iGridItem:u.default,iGridIcon:c.default,iGridLabel:h.default,iIcon:f.default,iRow:m.default,iInput:v.default,iButton:p.default,iPanel:g.default,iActionSheet:T.default,iMessage:b.default,iCol:w.default},data:function(){return{current:"0",tab1:!0,tdnum:"",date:"2019-01-01",time:"12:00",dateTimeArray:null,dateTime:null,dateTimeHuman:null,startYear:1e3,endYear:3e3,genderMsg:"",zhanwenMsg:"",gender:[{id:1,name:"男"},{id:2,name:"女"}],zhanwenTag:!1,tab2:!1,tabsCtrl:[{name:"时间起局"},{name:"报数起局"}]}},onLoad:function(e){this.setCurDateTimeFun()},onReady:function(){},onShow:function(){this.setCurDateTimeFun()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:(r={setCurDateTimeFun:function(){var e=N.dateTimePicker(this.startYear,this.endYear),t=N.dateTimePicker(this.startYear,this.endYear);t.dateTimeArray.pop(),t.dateTime.pop();this.setData({dateTime:e.dateTime,dateTimeArray:e.dateTimeArray}),this.humanDateTimeFun()},humanDateTimeFun:function(){var e=this.dateTime[0],t=this.dateTime[1],a=this.dateTime[2],i=this.dateTime[3],n=this.dateTime[4],d=this.dateTimeArray[0][e],r=this.dateTimeArray[1][t],s=this.dateTimeArray[2][a],o=this.dateTimeArray[3][i],l=this.dateTimeArray[4][n];this.setData({dateTimeHuman:[parseInt(d),parseInt(r),parseInt(s),parseInt(o),parseInt(l)]})},handleChange:function(e){var t=e.index;this.setData({current:e.index}),0==t?this.setData({tab1:!0,tab2:!1}):1==t&&this.setData({tab1:!1,tab2:!0}),this.setCurDateTimeFun()},userInput:function(e){this.setData({tdnum:e.detail.detail.value})},handleNumClick:function(){var e=parseInt(this.tdnum);if(isNaN(e)){var t=(0,d.default)(this.dateTimeHuman,5),a=(t[0],t[1],t[2],t[3]);t[4];e=x.default.getHourNum(a)}this.redirectToPanFun(e)},handleTimeClick:function(){var e=(0,d.default)(this.dateTimeHuman,5),t=(e[0],e[1],e[2],e[3]),a=(e[4],x.default.getHourNum(t));this.redirectToPanFun(a)},redirectToPanFun:function(e){e>12&&(e%=12);var t=(0,d.default)(this.dateTimeHuman,5),a=t[0],i=t[1],n=t[2],r=t[3],s=t[4];this.getZhanwenTag();var o={year:a,month:i,day:n,hour:r,minute:s,hourNum:e,genderMsg:this.genderMsg,zhanwenMsg:this.zhanwenMsg,zhanwenTag:this.zhanwenTag};uni.navigateTo({url:"/pages/qimenpan/qimenpan?dataObj="+JSON.stringify(o)})},changeDateTime:function(e){this.setData({dateTime:e.detail.value}),this.humanDateTimeFun()}},(0,n.default)(r,"humanDateTimeFun",(function(){var e=this.dateTime[0],t=this.dateTime[1],a=this.dateTime[2],i=this.dateTime[3],n=this.dateTime[4],d=this.dateTimeArray[0][e],r=this.dateTimeArray[1][t],s=this.dateTimeArray[2][a],o=this.dateTimeArray[3][i],l=this.dateTimeArray[4][n];this.setData({dateTimeHuman:[parseInt(d),parseInt(r),parseInt(s),parseInt(o),parseInt(l)]})})),(0,n.default)(r,"changeDateTimeColumn",(function(e){var t=this.dateTime,a=this.dateTimeArray;t[e.detail.column]=e.detail.value,a[2]=N.getMonthDay(a[0][t[0]],a[1][t[1]]),this.setData({dateTimeArray:a,dateTime:t})})),(0,n.default)(r,"changeSex",(function(e){var t=e.detail,a=void 0===t?{}:t;this.setData({genderMsg:a.value})})),(0,n.default)(r,"zhanwenUserInput",(function(e){this.setData({zhanwenMsg:e.detail.detail.value})})),(0,n.default)(r,"getZhanwenTag",(function(){""==this.genderMsg&&""==this.zhanwenMsg||this.setData({zhanwenTag:!0})})),r)};t.default=P,t.default.components=Object.assign({"i-tabs":y.default,"i-tab":z.default,"i-grid":C.default,"i-grid-item":A.default,"i-grid-icon":_.default,"i-grid-label":D.default,"i-icon":k.default,"i-row":I.default,"i-input":M.default,"i-button":F.default,"i-panel":H.default,"i-action-sheet":S.default,"i-message":E.default,"i-col":$.default},t.default.components||{})},7768:function(e,t,a){"use strict";a.r(t);var i=a("bcc0"),n=a("bfe2");for(var d in n)["default"].indexOf(d)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(d);a("24ee");var r=a("828b"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"1e75524e",null,!1,i["a"],void 0);t["default"]=s.exports},"9e9f":function(e,t,a){var i=a("c51e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("967d").default;n("ec47c94c",i,!0,{sourceMap:!1,shadowMode:!1})},bcc0:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return i}));var i={uTabs:a("76cf").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("u-tabs",{staticClass:"tabs",attrs:{list:e.tabsCtrl,current:e.current,lineColor:"#000000",itemStyle:"width:40%; height: 42px;",lineHeight:"2",lineWidth:"50"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleChange.apply(void 0,arguments)}}}),e.tab1?a("v-uni-view",{staticClass:"tab1"},[a("v-uni-view",{staticStyle:{padding:"0 15px 15px 12%","margin-top":"5%"}},[a("v-uni-picker",{attrs:{mode:"multiSelector",value:e.dateTime,range:e.dateTimeArray},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeDateTime.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"time-select-info"},[a("i-icon",{attrs:{type:"time"}}),a("v-uni-text",{staticClass:"hint-title-info"},[e._v("点击选择日期:")]),e._v(e._s(e.dateTimeArray[0][e.dateTime[0]])+"-"+e._s(e.dateTimeArray[1][e.dateTime[1]])+"-"+e._s(e.dateTimeArray[2][e.dateTime[2]])+"\n\t\t\t\t\t\t"+e._s(e.dateTimeArray[3][e.dateTime[3]])+":"+e._s(e.dateTimeArray[4][e.dateTime[4]]))],1)],1)],1),a("i-button",{attrs:{shape:"circle",size:"small"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleTimeClick.apply(void 0,arguments)}}},[e._v("点击起局")])],1):e._e(),e.tab2?a("v-uni-view",{staticClass:"tab2"},[a("v-uni-view",{staticClass:"time-select-view"},[a("v-uni-picker",{attrs:{mode:"multiSelector",value:e.dateTime,range:e.dateTimeArray},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeDateTime.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"time-select-info"},[a("i-icon",{attrs:{type:"time"}}),a("v-uni-text",{staticClass:"hint-title-info"},[e._v("点击选择日期:")]),e._v(e._s(e.dateTimeArray[0][e.dateTime[0]])+"-"+e._s(e.dateTimeArray[1][e.dateTime[1]])+"-"+e._s(e.dateTimeArray[2][e.dateTime[2]])+"\n\t\t\t\t\t\t"+e._s(e.dateTimeArray[3][e.dateTime[3]])+":"+e._s(e.dateTimeArray[4][e.dateTime[4]]))],1)],1)],1),a("v-uni-view",{staticClass:"time-select-view"},[a("i-input",{attrs:{value:e.tdnum,type:"number",title:"起卦",placeholder:"请输入1到12某一个数字",maxlength:2},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.userInput.apply(void 0,arguments)}}})],1),a("i-button",{attrs:{shape:"circle",size:"small"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleNumClick.apply(void 0,arguments)}}},[e._v("点击起局")])],1):e._e(),a("v-uni-view",{staticClass:"zhanwen-info"},[a("v-uni-view",{staticClass:"zhanwen-info-title"},[e._v("占问详情")]),a("i-panel",{attrs:{title:"","i-class":"zhanwen-info-title"}},[a("v-uni-view",{staticClass:"zhanwen-item zhanwen-item-cell"},[a("v-uni-view",{staticClass:"zhanwen-item-title"},[e._v("占者性别:")]),a("v-uni-radio-group",{staticClass:"radio-group",on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeSex.apply(void 0,arguments)}}},e._l(e.gender,(function(t,i){return a("v-uni-label",{key:t.id,staticClass:"radio"},[a("v-uni-radio",{attrs:{value:t.name,checked:t.checked}}),e._v(e._s(t.name))],1)})),1)],1),a("v-uni-view",{staticClass:"zhanwen-item-input-item"},[a("i-input",{attrs:{title:"占问事宜:",placeholder:"请简要说明占问事项...",maxlength:100},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.zhanwenUserInput.apply(void 0,arguments)}}})],1)],1)],1)],1)},d=[]},bfe2:function(e,t,a){"use strict";a.r(t);var i=a("2ea6"),n=a.n(i);for(var d in i)["default"].indexOf(d)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(d);t["default"]=n.a},c51e:function(e,t,a){var i=a("c86c");t=i(!1),t.push([e.i,"/* pages/calc/calc.wxss */.tabs[data-v-1e75524e]{box-sizing:border-box;border:0 solid #e9eaec;border-bottom-width:1px}.time-select-view[data-v-1e75524e]{padding:0 15px 15px 12%;margin-top:5%}.row-class[data-v-1e75524e]{background:#fff}.col-class[data-v-1e75524e]{height:32px;line-height:32px;color:#fff;text-align:center;background:#19be6b;font-size:12px}.col-class.light[data-v-1e75524e]{background:#19be6b}.random-run[data-v-1e75524e]{position:absolute;z-index:3;top:30%;left:50%;margin-left:%?-50?%}.random-img[data-v-1e75524e]{width:%?150?%;height:%?150?%}.random-txt[data-v-1e75524e]{margin-left:%?25?%;font-size:10px}.row-gm[data-v-1e75524e]{padding-left:12px;color:red;font-weight:bolder;font-size:16px;margin-bottom:20px}.time-select-info[data-v-1e75524e]{color:#a2a9b6}.hint-title-info[data-v-1e75524e]{margin-right:20px;font-size:13px;color:#000;font-weight:bolder}\n/* 占问事项样式 */.zhanwen-info[data-v-1e75524e]{position:fixed;bottom:%?25?%;width:100%;display:none}\n/* 自定义 radio 样式 */uni-radio[data-v-1e75524e]{width:%?38?%}uni-radio .wx-radio-input[data-v-1e75524e]{border-radius:50%;width:%?28?%;height:%?28?%}\n/* 选中后的样式 （可根据设计稿需求自己修改） */uni-radio .wx-radio-input.wx-radio-input-checked[data-v-1e75524e]::before{border-radius:50%;width:%?44?%;height:%?44?%;line-height:%?44?%;text-align:center;font-size:%?26?%; /* 对勾大小 26rpx */color:#fff; /* 对勾颜色 */background:#2facff;border-color:#2facff}.zhanwen-item[data-v-1e75524e]{padding:7px 15px;color:#495060}.zhanwen-item-cell[data-v-1e75524e]{position:relative;display:flex;background:#fff;align-items:center;line-height:1.4;font-size:14px;overflow:hidden}.zhanwen-item-title[data-v-1e75524e]{color:#495060;min-width:65px;padding-right:10px}.zhanwen-item-item[data-v-1e75524e]{flex:1;line-height:1.6;padding:4px 0;min-height:22px;height:auto;font-size:14px}.zhanwen-info-title[data-v-1e75524e]{font-size:15px;color:#000;font-weight:bolder;padding:0 15px}.zhanwen-item-input-item[data-v-1e75524e]{margin-top:-5px}",""]),e.exports=t}}]);