(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-qimenpan-qimenpan"],{"0760":function(t,i,e){"use strict";e("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("64aa");var a={data:function(){return{}},externalClasses:["i-class"],props:{content:{type:String,default:""},height:{type:Number,default:48},color:{type:String,default:"#80848f"},lineColor:{type:String,default:"#e9eaec"},size:{type:String,default:"12"}},methods:{},created:function(){}};i.default=a},"3e80":function(t,i,e){var a=e("46f0");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("967d").default;n("1436a977",a,!0,{sourceMap:!1,shadowMode:!1})},"46f0":function(t,i,e){var a=e("c86c");i=a(!1),i.push([t.i,".i-divider[data-v-490b1755]{width:100%;text-align:center;font-size:12px;position:relative;display:flex;align-items:center;justify-content:center}.i-divider-line[data-v-490b1755]{position:absolute;left:0;width:100%;height:%?1?%;background-color:#f7f7f7;top:50%}.i-divider-content[data-v-490b1755]{background:#fff;position:relative;z-index:1;display:inline-block;padding:0 10px}",""]),t.exports=i},5689:function(t,i,e){"use strict";e("6a54");var a=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("5ef2");var n=a(e("5de6")),s=a(e("80b1")),o=a(e("efe5")),r=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;(0,s.default)(this,t),this.syear=i,this.smonth=e,this.sday=a,this.stime=n,this.smin=o}return(0,o.default)(t,[{key:"getYearGanzhiDetail",value:function(){var t,i,e,a,n,s,o,r;return t=(this.syear-3)%60,i=t>60?t-60:t,(1==this.smonth&&this.sday>=1&&this.sday<=31||2==this.smonth&&this.sday>=1&&this.sday<=4)&&(i-=1),e=i%10,a=10*Math.round(i/10),i<=10?n=i:i>10&&0==e?n=10:i>10&&(n=i-a),n<0&&(n+=10),o=i%12,r=12*Math.round(i/12),s=i<=12?i:i>12&&0==o?12:i-r,s<0&&(s+=12),[n,s]}},{key:"getYearGanzhi",value:function(){var i=this.getYearGanzhiDetail(),e=(0,n.default)(i,2),a=e[0],s=e[1],o=t.nga[a-1]+t.nza[s-1];return o}},{key:"getMonthGanzhi",value:function(){var i,e,a,s,o;(2==this.smonth&&this.sday>4&&this.sday<=31||3==this.smonth&&this.sday<=5)&&(i="寅",e=1),(3==this.smonth&&this.sday>5&&this.sday<=31||4==this.smonth&&this.sday<=4)&&(i="卯",e=2),(4==this.smonth&&this.sday>4&&this.sday<=31||5==this.smonth&&this.sday<=5)&&(i="辰",e=3),(5==this.smonth&&this.sday>5&&this.sday<=31||6==this.smonth&&this.sday<=5)&&(i="巳",e=4),(6==this.smonth&&this.sday>5&&this.sday<=31||7==this.smonth&&this.sday<=7)&&(i="午",e=5),(7==this.smonth&&this.sday>7&&this.sday<=31||8==this.smonth&&this.sday<=7)&&(i="未",e=6),(8==this.smonth&&this.sday>7&&this.sday<=31||9==this.smonth&&this.sday<=7)&&(i="申",e=7),(9==this.smonth&&this.sday>7&&this.sday<=31||10==this.smonth&&this.sday<=8)&&(i="酉",e=8),(10==this.smonth&&this.sday>8&&this.sday<=31||11==this.smonth&&this.sday<=7)&&(i="戌",e=9),(11==this.smonth&&this.sday>7&&this.sday<=31||12==this.smonth&&this.sday<=7)&&(i="亥",e=10),(12==this.smonth&&this.sday>7&&this.sday<=31||1==this.smonth&&this.sday<=31)&&(i="子",e=11),(1==this.smonth&&this.sday>6&&this.sday<=31||2==this.smonth&&this.sday<=4)&&(i="丑",e=12);var r=this.getYearGanzhi(),c=(0,n.default)(r,2),d=c[0];c[1];return"甲"!=d&&"己"!=d||(a=0),"乙"!=d&&"庚"!=d||(a=2),"丙"!=d&&"辛"!=d||(a=4),"丁"!=d&&"壬"!=d||(a=6),"戊"!=d&&"癸"!=d||(a=-2),s=e+2+a<=10?e+2+a-1:e+2+a-10-1,o=t.nga[s]+i,o}},{key:"_getDaySeriesNum",value:function(){var i,e,a,n;return i=1==this.smonth||2==this.smonth?t.ym[this.syear-1-2e3]:t.ym[this.syear-2e3],e=this.smonth-3<0?t.mm[this.smonth-3+12]:t.mm[this.smonth-3],a=i+e+this.sday,n=a<=60?a:a-60,23==this.stime&&n++,n}},{key:"_getDayGanZhiNum",value:function(){var t,i,e;return t=this._getDaySeriesNum(),i=t<=10?t:t>10&&t%10==0?10:t-10*Math.round(t/10),i<0&&(i+=10),e=t<=12?t:t>12&&t%12==0?12:t-12*Math.round(t/12),e<0&&(e+=12),[i,e]}},{key:"getDayGanzhi",value:function(){var i=this._getDayGanZhiNum(),e=(0,n.default)(i,2),a=e[0],s=e[1];return t.nga[a-1]+t.nza[s-1]}},{key:"getChinaTime",value:function(){var t;return 1!=this.stime&&2!=this.stime||(t=2),3!=this.stime&&4!=this.stime||(t=3),5!=this.stime&&6!=this.stime||(t=4),7!=this.stime&&8!=this.stime||(t=5),9!=this.stime&&10!=this.stime||(t=6),11!=this.stime&&12!=this.stime||(t=7),13!=this.stime&&14!=this.stime||(t=8),15!=this.stime&&16!=this.stime||(t=9),17!=this.stime&&18!=this.stime||(t=10),19!=this.stime&&20!=this.stime||(t=11),21!=this.stime&&22!=this.stime||(t=12),23!=this.stime&&0!=this.stime||(t=1),t}},{key:"getHourGanzhi",value:function(){var i,e,a,s,o,r,c;i=this.getChinaTime(),e=t.nza[i-1];var d=this.getDayGanzhi(),u=(0,n.default)(d,2),l=u[0];u[1];return"甲"!=l&&"己"!=l||(a=0),"乙"!=l&&"庚"!=l||(a=2),"丙"!=l&&"辛"!=l||(a=4),"丁"!=l&&"壬"!=l||(a=6),"戊"!=l&&"癸"!=l||(a=8),o=a+i,s=o>10?o-10:a+i,r=t.nga[s-1],c=r+e,c}},{key:"getDaysAbsent",value:function(){var t,i=this._getDaySeriesNum();return i>=1&&i<=10&&(t="戌亥|甲子旬"),i>=11&&i<=20&&(t="申酉|甲戌旬"),i>=21&&i<=30&&(t="午未|甲申旬"),i>=31&&i<=40&&(t="辰巳|甲午旬"),i>=41&&i<=50&&(t="寅卯|甲辰旬"),i>=51&&i<=60&&(t="子丑|甲寅旬"),t}},{key:"getHoursAbsent",value:function(){var i,e,a,s=this.getHourGanzhi(),o=(0,n.default)(s,2),r=o[0];o[1];return i=this.getChinaTime(),r=t.nga.indexOf(r)+1,e=i-r,e<0&&(e+=12),0==e&&(r,1,a="戌亥|甲子旬"),10==e&&(r+10,2,a="申酉|甲戌旬"),8==e&&(r+20,3,a="午未|甲申旬"),6==e&&(r+30,4,a="辰巳|甲午旬"),4==e&&(r+40,5,a="寅卯|甲辰旬"),2==e&&(r+50,6,a="子丑|甲寅旬"),a}},{key:"getShensha",value:function(){var t=this._getDayGanZhiNum(),i=(0,n.default)(t,2),e=i[0],a=i[1],s=["寅","亥","申","巳","寅","亥","申","巳","寅","亥","申","巳"][a-1],o=["酉","午","卯","子","酉","午","卯","子","酉","午","卯","子"][a-1],r=["寅","卯","巳","午","巳","午","申","寅","亥","寅"][e-1],c=["丑.未","子.申","亥.酉","亥.酉","丑.未","子.申","丑.未","午.寅","巳,卯","巳.卯"][e-1],d=["己","午","申","酉","申","酉","亥","子","寅","卯"][e-1];return"日禄－"+r+"、驿马－"+s+"、桃花－"+o+"、贵人－"+c+"、文昌-"+d}}],[{key:"getHourNum",value:function(t){return 1==t||2==t?2:3==t||4==t?3:5==t||6==t?4:7==t||8==t?5:9==t||10==t?6:11==t||12==t?7:13==t||14==t?8:15==t||16==t?9:17==t||18==t?10:19==t||20==t?11:21==t||22==t?12:23==t||0==t?1:void 0}},{key:"getGanzhiByHour",value:function(i){return t.nza[i-1]}}]),t}();i.default=r,r.ym=[54,59,4,9,15,20,25,30,36,41,46,51,57,2,7,12,18,23,28,33,39,44,49,54,0,5,10,15,21,26,31,36,42,47,52,57,3,8,13,18,24,29,34,39,45,50,55,0,6,11],r.mm=[0,31,1,32,2,33,4,34,5,35,6,37],r.nga=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],r.nza=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]},"5ce5":function(t,i,e){"use strict";e.r(i);var a=e("7f18"),n=e("cc52");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("8428");var o=e("828b"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"5c7c24c1",null,!1,a["a"],void 0);i["default"]=r.exports},"7f18":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"all-page"},[e("i-row",{staticClass:"time-info"},[t.zhanwenTag?e("i-row",{attrs:{"i-class":"row-class"}},[e("v-uni-text",{staticClass:"time-info-title"},[t._v("性别:")]),t._v(t._s(t.genderMsg)),e("v-uni-text",{staticClass:"time-info-title time-info-title-right"},[t._v("占问:")]),t._v(t._s(t.zhanwenMsg))],1):t._e(),e("i-row",{staticClass:"row-class"},[e("v-uni-text",{staticClass:"time-info-title"},[t._v("公元:")]),t._v(t._s(t.dayStr))],1),e("i-row",{staticClass:"row-class"},[e("v-uni-text",{staticClass:"time-info-title"},[t._v("农历:")]),t._v(t._s(t.lunardayStr)),e("v-uni-text",{staticClass:"time-info-title",staticStyle:{"margin-left":"10px"}},[t._v("第"),e("v-uni-text",{staticStyle:{color:"red","font-size":"13px"}},[t._v(t._s(t.hourNum))]),t._v("局")],1)],1),e("i-row",{staticClass:"row-class"},[e("v-uni-text",{staticClass:"time-info-title"},[t._v("干支:")]),t._v(t._s(t.ygz)+"年、"+t._s(t.mgz)+"月、"+t._s(t.dgz)+"日、"+t._s(t.hgz)+"时"),e("v-uni-text",{staticStyle:{"font-size":"10px"}},[t._v("(真太阳时)")])],1),e("i-row",{staticClass:"row-class"},[e("v-uni-text",{staticClass:"time-info-title"},[t._v("神煞:")]),e("v-uni-text",{staticStyle:{"font-size":"11px"}},[t._v(t._s(t.shensha))])],1),e("i-row",{staticClass:"row-class"},[e("v-uni-text",{staticClass:"time-info-title"},[t._v("日空:")]),e("v-uni-text",{staticClass:"gong-info-title",staticStyle:{"font-weight":"bolder"}},[t._v(t._s(t.dayAbsent))]),e("v-uni-text",{staticClass:"time-info-title time-info-title-right"},[t._v("时空:")]),e("v-uni-text",{staticClass:"gong-info-title",staticStyle:{"font-weight":"bolder"}},[t._v(t._s(t.hourAbsent))])],1),e("i-row",{staticClass:"row-class"},[e("v-uni-text",{staticClass:"time-info-title-small"},[t._v("当月节气:")]),e("v-uni-text",{staticStyle:{"font-size":"10px"}},[t._v(t._s(t.curMonthJq[0]))]),e("v-uni-text",{staticStyle:{"font-size":"10px","margin-left":"5px"}},[t._v(t._s(t.curMonthJq[1]))])],1),e("i-row",{staticClass:"row-class"},[e("v-uni-text",{staticClass:"time-info-title-small"},[t._v("下月节气:")]),e("v-uni-text",{staticStyle:{"font-size":"10px"}},[t._v(t._s(t.nextMonthJq[0]))]),e("v-uni-text",{staticStyle:{"font-size":"10px","margin-left":"5px"}},[t._v(t._s(t.nextMonthJq[1]))])],1)],1),e("i-row",[e("v-uni-view",{staticClass:"qimen-table-wrap"},[e("v-uni-view",{staticClass:"table"},[e("v-uni-view",{staticClass:"tr"},[e("v-uni-view",{staticClass:"top-td1-left"},[e("v-uni-view",{staticClass:"left-top-oblique-line"})],1),e("v-uni-view",{staticClass:"td td2"},[e("v-uni-view",{staticClass:"left-top-txt-left"},[t._v(t._s(t.yuanshenList[5]))]),e("v-uni-view",{staticClass:"left-top-txt-right"},[t._v(t._s(t.tianxingList[5]))])],1),e("v-uni-view",{staticClass:"td td2"},[e("v-uni-view",[t._v(t._s(t.yuanshenList[6])+" "+t._s(t.tianxingList[6]))])],1),e("v-uni-view",{staticClass:"td2-right"},[e("v-uni-view",{staticClass:"right-top-txt-left"},[t._v(t._s(t.yuanshenList[7]))]),e("v-uni-view",{staticClass:"right-top-txt-right"},[t._v(t._s(t.tianxingList[7]))])],1),e("v-uni-view",{staticClass:"top-td1-right"},[e("v-uni-view",{staticClass:"right-top-oblique-line"})],1)],1),e("v-uni-view",{staticClass:"tr"},[e("v-uni-view",{staticClass:"td td1"},[e("v-uni-view",[t._v(t._s(t.yuanshenList[4]))]),e("v-uni-view",[t._v(t._s(t.tianxingList[4]))])],1),e("v-uni-view",{staticClass:"td td2"},[e("v-uni-view",[t._v(t._s(t.ganzhiList[3]))]),e("v-uni-view",[t._v(t._s(t.menList[3]))])],1),e("v-uni-view",{staticClass:"td td2"},[e("v-uni-view",[t._v(t._s(t.ganzhiList[8]))]),e("v-uni-view",[t._v(t._s(t.menList[4]))])],1),e("v-uni-view",{staticClass:"td td2"},[e("v-uni-view",[t._v(t._s(t.ganzhiList[1]))]),e("v-uni-view",[t._v(t._s(t.menList[5]))])],1),e("v-uni-view",{staticClass:"td td1"},[e("v-uni-view",[t._v(t._s(t.yuanshenList[8]))]),e("v-uni-view",[t._v(t._s(t.tianxingList[8]))])],1)],1),e("v-uni-view",{staticClass:"tr"},[e("v-uni-view",{staticClass:"td td1"},[e("v-uni-view",[t._v(t._s(t.yuanshenList[3]))]),e("v-uni-view",[t._v(t._s(t.tianxingList[3]))])],1),e("v-uni-view",{staticClass:"td td2"},[e("v-uni-view",[t._v(t._s(t.ganzhiList[2]))]),e("v-uni-view",[t._v(t._s(t.menList[2]))])],1),e("v-uni-view",{staticClass:"td td2"},[e("v-uni-view",[t._v(t._s(t.ganzhiList[9]))]),e("v-uni-view",[t._v(t._s(t.ganzhiList[4]))])],1),e("v-uni-view",{staticClass:"td td2"},[e("v-uni-view",[t._v(t._s(t.ganzhiList[6]))]),e("v-uni-view",[t._v(t._s(t.menList[6]))])],1),e("v-uni-view",{staticClass:"td td1"},[e("v-uni-view",[t._v(t._s(t.yuanshenList[9]))]),e("v-uni-view",[t._v(t._s(t.tianxingList[9]))])],1)],1),e("v-uni-view",{staticClass:"tr"},[e("v-uni-view",{staticClass:"td1-no-bottom"},[e("v-uni-view",[t._v(t._s(t.yuanshenList[2]))]),e("v-uni-view",[t._v(t._s(t.tianxingList[2]))])],1),e("v-uni-view",{staticClass:"td td2"},[e("v-uni-view",[t._v(t._s(t.ganzhiList[7]))]),e("v-uni-view",[t._v(t._s(t.menList[1]))])],1),e("v-uni-view",{staticClass:"td td2"},[e("v-uni-view",[t._v(t._s(t.ganzhiList[0]))]),e("v-uni-view",[t._v(t._s(t.menList[0]))])],1),e("v-uni-view",{staticClass:"td td2"},[e("v-uni-view",[t._v(t._s(t.ganzhiList[5]))]),e("v-uni-view",[t._v(t._s(t.menList[7]))])],1),e("v-uni-view",{staticClass:"td1-no-bottom"},[e("v-uni-view",[t._v(t._s(t.yuanshenList[10]))]),e("v-uni-view",[t._v(t._s(t.tianxingList[10]))])],1)],1),e("v-uni-view",{staticClass:"tr"},[e("v-uni-view",{staticClass:"td1-no-top-right"},[e("v-uni-view",{staticClass:"left-bottom-oblique-line"})],1),e("v-uni-view",{staticClass:"td td2"},[e("v-uni-view",{staticClass:"left-top-txt-left"},[t._v(t._s(t.yuanshenList[1]))]),e("v-uni-view",{staticClass:"left-top-txt-right"},[t._v(t._s(t.tianxingList[1]))])],1),e("v-uni-view",{staticClass:"td td2"},[e("v-uni-view",[t._v(t._s(t.yuanshenList[0])+" "+t._s(t.tianxingList[0]))])],1),e("v-uni-view",{staticClass:"td2-right"},[e("v-uni-view",{staticClass:"right-top-txt-left"},[t._v(t._s(t.yuanshenList[11]))]),e("v-uni-view",{staticClass:"right-top-txt-right"},[t._v(t._s(t.tianxingList[11]))])],1),e("v-uni-view",{staticClass:"td td1"},[e("v-uni-view",{staticClass:"right-bottom-oblique-line"})],1)],1)],1)],1)],1),e("i-row",{staticClass:"row-class"},[e("v-uni-text",{staticClass:"time-info-title"},[t._v("用局:")])],1),e("i-row",{staticClass:"row-class"},[t._v(t._s(t.juInfo[0]))]),e("i-row",{staticClass:"row-class"},[t._v(t._s(t.juInfo[1]))])],1)},n=[]},8428:function(t,i,e){"use strict";var a=e("9669"),n=e.n(a);n.a},9669:function(t,i,e){var a=e("a673");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("967d").default;n("231f2d54",a,!0,{sourceMap:!1,shadowMode:!1})},a07b:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"i-divider i-class",style:t.parse.getStyle(t.color,t.size,t.height)},[""!==t.content?e("v-uni-view",{staticClass:"i-divider-content"},[t._v(t._s(t.content))]):e("v-uni-view",{staticClass:"i-divider-content"},[t._t("default")],2),e("v-uni-view",{staticClass:"i-divider-line",style:"background:"+t.lineColor})],1)},n=[]},a2fa:function(t,i,e){"use strict";e("6a54");var a=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("f7a5"),e("c223");var n=a(e("5de6")),s=a(e("80b1")),o=a(e("efe5")),r=a(e("5689")),c=function(){function t(){(0,s.default)(this,t)}return(0,o.default)(t,null,[{key:"process",value:function(i){var e=t.getYuanShenList(i),a=t.getTianXingList(i),n=t.getGanzhiList(i),s=t.getMenList(i);return[e,a,n,s]}},{key:"getMenList",value:function(i){var e=t.getStartGong(i);4==e?e=6:e+=1;var a=t.getGongPosition(e);return t.getMenPanList(a)}},{key:"getMenPanList",value:function(i){var e=t.men.slice(8-(i-1)),a=t.men.slice(0,8-(i-1));return e.concat(a)}},{key:"getGongPosition",value:function(t){return{1:1,2:6,3:3,4:4,6:8,7:7,8:2,9:5}[t]}},{key:"getGanzhiList",value:function(i){var e=t.getStartGong(i);return t.getGanList(e)}},{key:"getGanList",value:function(i){var e=t.gan.slice(10-(i-1)),a=t.gan.slice(0,10-(i-1));return e.concat(a)}},{key:"getStartGong",value:function(t){return 1==t?1:2==t||3==t?8:4==t?3:5==t||6==t?4:7==t?9:8==t||9==t?2:10==t?7:11==t||12==t?6:void 0}},{key:"getTianXingList",value:function(i){var e=t.getTianxingStart(r.default.getGanzhiByHour(i)),a=(0,n.default)(e,2),s=(a[0],a[1]),o=t.tianxing.slice(12-(s-1)),c=t.tianxing.slice(0,12-(s-1));return o.concat(c)}},{key:"getYuanShenList",value:function(i){var e=t.yuanshen.slice(12-(i-1)),a=t.yuanshen.slice(0,12-(i-1));return e.concat(a)}},{key:"getTianxingStart",value:function(t){return"子"==t||"午"==t?["申",9]:"卯"==t||"酉"==t?["寅",3]:"寅"==t||"申"==t?["子",1]:"巳"==t||"亥"==t?["午",7]:"丑"==t||"未"==t?["戌",11]:"辰"==t||"戌"==t?["辰",5]:void 0}}]),t}();i.default=c,c.yuanshen=["青龙","明堂","天刑","朱雀","金匮","天德","白虎","玉堂","天牢","玄武","司命","勾陈"],c.tianxing=["建","除","满","平","定","执","破","危","成","收","开","闭"],c.gan=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],c.men=["休门","生门","伤门","杜门","景门","死门","惊门","开门"],c.juInfo=["子上起青龙，申上起建星;甲干一宫立，休门二宫居","丑上起青龙，戌上起建星;甲干八艮位，休门九宫居","寅上起青龙，子上起建星;甲干艮八位，休门九宫立","卯上起青龙，寅上起建星;甲从青龙起，休从乙位定","辰上起青龙，辰上起建星;甲干四宫立，休门六宫起","巳上起青龙，午上起建星;甲干巽四上，休门乾宫居","午上起青龙，申上起建星;甲干九离位，休门一坎寻","未上起青龙，戌上起建星;甲干二坤位，休门震三居","申上起青龙，子上起建星;甲干二坤位，休门震三随","酉上起青龙，寅上起建星;甲干七兑上，休门艮八存","戌上起青龙，辰上起建星;甲干乾六上，休门兑七临","亥上起青龙，午上起建星;甲干六乾上，休门兑七临"]},a673:function(t,i,e){var a=e("c86c");i=a(!1),i.push([t.i,".all-page[data-v-5c7c24c1]{width:95%;margin-left:auto;margin-right:auto}.row-class[data-v-5c7c24c1]{width:100%;margin-left:5px;margin-right:5px;margin-top:2px;margin-bottom:2px;font-size:15px}.time-info[data-v-5c7c24c1]{margin-top:10px;margin-bottom:10px}.pan-info[data-v-5c7c24c1]{margin-left:30px;margin-right:30px;margin-bottom:20px;color:#80848f}.my-grid[data-v-5c7c24c1]{border-top:%?1?% solid #80848f;border-left:%?1?% solid #80848f}.my-grid-item[data-v-5c7c24c1]{border-right:%?1?% solid #80848f;border-bottom:%?1?% solid #80848f}.bak-info .row-class[data-v-5c7c24c1]{margin-left:8px}.time-info-title[data-v-5c7c24c1]{font-size:16px;font-weight:bolder;margin-right:5px}.time-info-title-right[data-v-5c7c24c1]{margin-left:14px}.gua-divider[data-v-5c7c24c1]{font-size:12px;height:10px;text-align:center;position:relative;display:flex;align-items:center;justify-content:center}.yangyao-divider-line[data-v-5c7c24c1]{left:0;width:100%;height:%?10?%;top:50%;background-color:#e9eaec}.yinyao-divider-left-line[data-v-5c7c24c1]{left:0;width:40%;height:%?10?%;top:50%;background-color:#e9eaec;margin-right:10%}.yinyao-divider-right-line[data-v-5c7c24c1]{right:0;width:40%;height:%?10?%;top:50%;background-color:#e9eaec;margin-left:10%}uni-page-body[data-v-5c7c24c1]{background-color:#272c34;color:#a2a9b6}body.?%PAGE?%[data-v-5c7c24c1]{background-color:#272c34}.gong-info-title[data-v-5c7c24c1]{color:red;font-size:12px}.jt-up[data-v-5c7c24c1]{position:relative;top:-40px;left:30px}.jt-down[data-v-5c7c24c1]{position:relative;top:-40px;left:30px}.jt-yin[data-v-5c7c24c1]{color:#fff}.jt-yang[data-v-5c7c24c1]{color:red}.gc-txt[data-v-5c7c24c1]{position:relative;color:#fff;font-size:13px}.guicang-info[data-v-5c7c24c1]{display:inline}.fugua[data-v-5c7c24c1]{margin-bottom:10px}\n\n/* 奇门盘样式 */.qimen-table-wrap[data-v-5c7c24c1]{position:relative;width:%?668?%;height:%?600?%;left:50%;margin-top:20px;margin-left:%?-334?%;top:40%;overflow-y:scroll;overflow-x:hidden}\n\n/* 表格代码   */.table[data-v-5c7c24c1]{border:1px solid #dadada;border-right:0;border-bottom:0;width:98%;margin-left:1%}.tr[data-v-5c7c24c1]{width:100%;display:flex;justify-content:space-between}.th[data-v-5c7c24c1],\n.td[data-v-5c7c24c1]{padding:10px;border-bottom:1px solid #dadada;border-right:1px solid #dadada;text-align:center;width:100%}.top-td1-left[data-v-5c7c24c1]{padding:10px;text-align:center;width:40px}.top-td1-right[data-v-5c7c24c1]{padding:10px;border-right:1px solid #dadada;text-align:center;width:40px}.td1-no-bottom[data-v-5c7c24c1]{padding:10px;border-right:1px solid #dadada;text-align:center;width:40px}.td1-no-top-right[data-v-5c7c24c1]{padding:10px;border-bottom:1px solid #dadada;text-align:center;width:40px}.td2-right[data-v-5c7c24c1]{padding:10px;border-bottom:1px solid #dadada;text-align:center;width:60px}.th1[data-v-5c7c24c1],\n.th2[data-v-5c7c24c1],\n.td1[data-v-5c7c24c1]{width:40px}.td2[data-v-5c7c24c1]{width:60px}.th[data-v-5c7c24c1]{font-weight:bolder;background-color:#b66242;font-size:12px;color:#e9eaec}.td[data-v-5c7c24c1],\n.td2-right[data-v-5c7c24c1],\n.td1-no-bottom[data-v-5c7c24c1],\n.td1-no-top-right[data-v-5c7c24c1]{font-weight:bolder;font-size:12px;color:#e9eaec}.left-top-txt-left[data-v-5c7c24c1]{display:inline;position:relative;left:-15px}.left-top-txt-right[data-v-5c7c24c1]{display:inline;position:relative;left:-5px}.right-top-txt-left[data-v-5c7c24c1]{display:inline;position:relative;left:10px}.right-top-txt-right[data-v-5c7c24c1]{display:inline;position:relative;left:20px}.left-top-oblique-line[data-v-5c7c24c1]{position:relative;width:20px;height:20px;left:5px;top:-10px;box-sizing:border-box;border-bottom:1px solid #e9eaec;-webkit-transform-origin:bottom center;transform-origin:bottom center;-webkit-transform:rotate(45deg) scale(1.414);transform:rotate(45deg) scale(1.414)}.right-top-oblique-line[data-v-5c7c24c1]{position:relative;width:20px;height:20px;left:5px;top:-10px;box-sizing:border-box;border-bottom:1px solid #e9eaec;-webkit-transform-origin:bottom center;transform-origin:bottom center;-webkit-transform:rotate(135deg) scale(1.414);transform:rotate(135deg) scale(1.414)}.left-bottom-oblique-line[data-v-5c7c24c1]{position:relative;width:20px;height:20px;left:5px;top:-10px;box-sizing:border-box;border-bottom:1px solid #e9eaec;-webkit-transform-origin:bottom center;transform-origin:bottom center;-webkit-transform:rotate(135deg) scale(1.414);transform:rotate(135deg) scale(1.414)}.right-bottom-oblique-line[data-v-5c7c24c1]{position:relative;width:20px;height:20px;left:5px;top:-10px;box-sizing:border-box;border-bottom:1px solid #e9eaec;-webkit-transform-origin:bottom center;transform-origin:bottom center;-webkit-transform:rotate(45deg) scale(1.414);transform:rotate(45deg) scale(1.414)}.yongju-info[data-v-5c7c24c1]{position:fixed;bottom:%?25?%;width:100%}",""]),t.exports=i},a6e0:function(t,i,e){"use strict";e.r(i);var a=e("0760"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},b128:function(t,i,e){"use strict";var a=e("3e80"),n=e.n(a);n.a},bdc1:function(t,i,e){"use strict";i["a"]=function(t){(t.options.wxs||(t.options.wxs={}))["parse"]=function(t){return t.exports={getStyle:function(t,i,e){t="color:"+t+";",i="font-size:"+i+"px;",e="height:"+e+"px;";return t+i+e}},t.exports}({exports:{}})}},c634:function(t,i,e){"use strict";e.r(i);var a=e("a07b"),n=e("a6e0");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("b128");var o=e("828b"),r=e("bdc1"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"490b1755",null,!1,a["a"],void 0);"function"===typeof r["a"]&&Object(r["a"])(c),i["default"]=c.exports},cc52:function(t,i,e){"use strict";e.r(i);var a=e("eefa"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},d241:function(t,i,e){e("fd3c"),e("c9b5"),e("bf0f"),e("ab80"),e("aa9c"),e("3efd");var a=function(t){return t=t.toString(),t[1]?t:"0"+t};t.exports={formatTime:function(t){var i=t.getFullYear(),e=t.getMonth()+1,n=t.getDate(),s=t.getHours(),o=t.getMinutes(),r=t.getSeconds();return[i,e,n].map(a).join("/")+" "+[s,o,r].map(a).join(":")},isEmpty:function(t){return"undefined"==typeof t||null==t||""==t},Queue:function(t){var i=[];this.push=function(e){return null!=e&&(null==t||isNaN(t)||i.length==t&&this.pop(),i.unshift(e),!0)},this.pop=function(){return i.pop()},this.clear=function(){return i=[],!0},this.size=function(){return i.length},this.quere=function(){return i}}}},eefa:function(t,i,e){"use strict";e("6a54");var a=e("f5bd").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e("5de6")),s=a(e("a807")),o=a(e("f778")),r=a(e("0e3f")),c=a(e("a634")),d=a(e("33ac")),u=a(e("bc53")),l=a(e("40d5")),v=a(e("503c")),h=a(e("64bd")),f=a(e("1f6a")),g=a(e("0c63")),p=a(e("c634")),m=a(e("7e9f")),x=(a(e("7e15")),a(e("655c")),a(e("a2fa"))),w=a(e("b8ed")),y=a(e("a807")),b=a(e("f778")),_=a(e("0e3f")),C=a(e("a634")),z=a(e("33ac")),L=a(e("bc53")),k=a(e("40d5")),S=a(e("503c")),M=a(e("64bd")),j=a(e("1f6a")),G=a(e("0c63")),q=a(e("c634")),O=a(e("7e9f")),D=(e("d241"),{components:{iTabs:s.default,iTab:o.default,iGrid:r.default,iGridItem:c.default,iGridIcon:d.default,iGridLabel:u.default,iIcon:l.default,iRow:v.default,iInput:h.default,iButton:f.default,iPanel:g.default,iDivider:p.default,iCol:m.default},data:function(){return{paramObj:"",lunardayStr:"",dayStr:"",hourNum:1,ygz:"",mgz:"",dgz:"",hgz:"",dayAbsent:"",hourAbsent:"",shensha:"",curMonthJq:"",nextMonthJq:"",yuanshenList:"",tianxingList:"",ganzhiList:"",menList:"",genderMsg:"",zhanwenMsg:"",juInfo:"",zhanwenTag:!1}},onLoad:function(t){var i=JSON.parse(t.dataObj);this.setData({paramObj:t});var e=[i.year,i.month,i.day,i.hour,i.minute,i.hourNum,i.genderMsg,i.zhanwenMsg,i.zhanwenTag],a=e[0],s=e[1],o=e[2],r=e[3],c=e[4],d=e[5],u=e[6],l=e[7],v=e[8],h=x.default.process(d),f=(0,n.default)(h,4),g=f[0],p=f[1],m=f[2],y=f[3],b=x.default.juInfo[d-1].split(";"),_=a+"年"+s+"月"+o+"日"+r+"时"+c+"分",C=new w.default(a,s,o,r,c),z=C.getGanzhi(),L=(0,n.default)(z,4),k=L[0],S=L[1],M=L[2],j=L[3],G=C.getLunar(),q=k+"年"+G[0]+"月"+G[1]+"日",O=C.getAbsent(),D=(0,n.default)(O,2),N=D[0],T=D[1],J=C.getShenSha(),A=C.getJieqi(),P=(0,n.default)(A,2),I=P[0],H=P[1],Y=I.split("|"),B=H.split("|");this.setData({lunardayStr:q,dayStr:_,ygz:k,mgz:S,dgz:M,hgz:j,hourNum:d,dayAbsent:N,hourAbsent:T,shensha:J,curMonthJq:Y,nextMonthJq:B,yuanshenList:g,tianxingList:p,ganzhiList:m,menList:y,genderMsg:u,zhanwenMsg:l,juInfo:b,zhanwenTag:v})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:"快来分析这个小奇门盘面~",path:"/pages/qimenpan/qimenpan?dataObj="+this.paramObj.dataObj}},methods:{}});i.default=D,i.default.components=Object.assign({"i-tabs":y.default,"i-tab":b.default,"i-grid":_.default,"i-grid-item":C.default,"i-grid-icon":z.default,"i-grid-label":L.default,"i-icon":k.default,"i-row":S.default,"i-input":M.default,"i-button":j.default,"i-panel":G.default,"i-divider":q.default,"i-col":O.default},i.default.components||{})}}]);