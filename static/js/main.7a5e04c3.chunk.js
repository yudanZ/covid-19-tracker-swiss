(this["webpackJsonpcovid-ch"]=this["webpackJsonpcovid-ch"]||[]).push([[0],{34:function(e,a,t){e.exports=t(77)},39:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(32),l=t.n(o),i=(t(39),t(8)),s=t(9),c=t(11),m=t(10),u=t(14),d=t(1),h=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#1"},"Covid-19 Switzerland"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item "},r.a.createElement(u.b,{className:"nav-link",to:"/"},"Overview Situation ",r.a.createElement("span",{className:"sr-only"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/list"},"List of countries and areas")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/symptions"},"Symptoms")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.b,{className:"nav-link",to:"/provention"},"Protections")))))},p=t(3),f=t.n(p),g=t(12),v=t(17),E=t.n(v),b=(t(63),function(e){return r.a.createElement("div",{className:"overview-container"},r.a.createElement("h2",null,"New Coronavirus:Situation in Switzerland "),r.a.createElement("table",{className:"table table-bordered overview-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},e.latestInfo.date),r.a.createElement("th",{scope:"col"},"New Cases"),r.a.createElement("th",{scope:"col"},"Total since the beginning the epidemic"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Laboratory Confirmed Infections"),r.a.createElement("td",null,0===e.latestInfo.news?"--":e.latestInfo.news),r.a.createElement("td",null,0===e.latestInfo.totalconfirmed?"--":e.latestInfo.totalconfirmed)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Recovered"),r.a.createElement("td",null,0===e.latestInfo.newrecovered?"--":e.latestInfo.newrecovered),r.a.createElement("td",null,e.latestInfo.totalrecovered)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Deaths"),r.a.createElement("td",null,"0"===e.latestInfo.newdeath?"--":e.latestInfo.newdeath),r.a.createElement("td",null,e.latestInfo.totaldeath)),r.a.createElement("tr",null))))}),w=t(13),y=t.n(w),N=t(18),C=t.n(N),k=(t(64),function(e){var a={title:{text:"Laboratory confirmed cases: evolution of geographical spread over time"},xAxis:{type:"datetime",labels:{format:"{value: %m/%Y}",align:"right",rotation:-30},title:{text:"date"},tickInterval:1296e6},plotOptions:{series:{pointStart:e.earliestDate,pointInterval:864e5}},yAxis:{lineWidth:1,tickWidth:1,title:{align:"high",offset:0,text:"numbers of cases",rotation:0,y:-10}},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},series:e.options,responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{align:"center",verticalAlign:"bottom",layout:"horizontal"},yAxis:{labels:{align:"left",x:0,y:-5},title:{text:null}},subtitle:{text:null},credits:{enabled:!1}}}]}};return r.a.createElement("div",{className:"linechart-container"},e.earliestDate?r.a.createElement(C.a,{highcharts:y.a,options:a}):r.a.createElement("div",null,"Loading..."))}),D=(t(65),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).fetchData=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E.a.get("https://api.covid19api.com/total/country/switzerland").then((function(e){var a=e.data;n.setState({isLoading:!n.state.isLoading}),n.setState({totalStatus:a});var t=a.slice(a.length-2,a.length);n.calculateStatus(t),n.generateLineChartsData(a)})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)}))),n.calculateStatus=function(e){var a={news:0,totalconfirmed:0,totaldeath:0,totalrecovered:0,newdeath:0,newrecovered:0,date:"--"};e.length>=2&&(a.news=e[1].Confirmed-e[0].Confirmed,a.totalconfirmed=e[1].Confirmed,a.totaldeath=e[1].Deaths,a.totalrecovered=e[1].Recovered,a.newdeath=e[1].Deaths-e[0].Deaths,a.newrecovered=e[1].Recovered-e[0].Recovered,a.date=n.formateDate(e[1].Date)),n.setState({newStatus:a})},n.formateDate=function(e){var a=e.split("-"),t=a[0],n=a[1],r=a[2].slice(0,a[2].indexOf("T",0));return"".concat(r,".").concat(n,".").concat(t)},n.generateLineChartsData=function(e){var a=[],t={name:"total confirmed number",data:[]},r={name:"total death number",data:[],color:"#FF0000"},o={name:"total recovered number",data:[],color:"#008000"};e.forEach((function(e){t.data.push([n.formateDate(e.Date),e.Confirmed]),r.data.push([n.formateDate(e.Date),e.Deaths]),o.data.push([n.formateDate(e.Date),e.Recovered])})),a.push(t),a.push(r),a.push(o),n.setState({options:a})},n.state={isLoading:!1,totalStatus:[],newStatus:null,options:[],earliestDate:15796512e5},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.state,a=e.newStatus,t=e.options;return r.a.createElement("div",{className:"section-overview"},a?r.a.createElement(b,{latestInfo:a}):r.a.createElement("div",null,"Loading..."),t?r.a.createElement(k,{options:t,earliestDate:this.state.earliestDate}):r.a.createElement("div",null,"Loading..."))}}]),t}(r.a.Component)),B=function(){var e=Object(g.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://code.highcharts.com/mapdata/countries/ch/ch-all.geo.json");case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t(66);t(67)(y.a);var S=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).setSeriesData=function(e){var a=[];return e.forEach((function(e){var t=e.fields.abbreviation_canton_and_fl;t="ch-"+t.toLowerCase(),a.push([t,e.fields.ncumul_conf])})),a},n.setOptions=function(e,a,t){return{chart:{map:e},title:{text:"Laboratory Confirmed Cases: Geographical Distribution"},subtitle:{text:"Update Time :  "+t},mapNavigation:{enabled:!0,buttonOptions:{verticalAlign:"bottom"}},colorAxis:{min:0},series:[{data:a,name:"Laboratory Confirmed Cases",states:{hover:{color:"#BADA55"}},dataLabels:{enabled:!0,format:"{point.name}"}}]}},n.getMapData=Object(g.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B();case 3:a=e.sent,n.setState({mapData:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),n.state={mapData:null},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getMapData()}},{key:"render",value:function(){var e=this.props.contonsData,a=this.state.mapData,t=this.setSeriesData(e),n=this.setOptions(a,t,e[0].fields.date);return r.a.createElement("div",{className:"mapchart-container"},r.a.createElement(C.a,{highcharts:y.a,constructorType:"mapChart",options:n}))}}]),t}(r.a.Component),O=function(e){return r.a.createElement("div",{className:"dropdown"},r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Select Contons"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Gen\xe8ve"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Aargau"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Graub\xfcnden"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Basel-Stadt"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Jura"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Z\xfcrich"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Valais"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Zug"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Fribourg"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Vaud"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Neuch\xe2tel"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"St. Gallen"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Thurgau"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Nidwalden"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Bern"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Schwyz"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Ticino"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Schaffhausen"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Glarus"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Luzern"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Solothurn"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Uri"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Obwalden"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Appenzell Innerrhoden"),r.a.createElement("a",{className:"dropdown-item",href:"#1",onClick:e.onButtonClick},"Appenzell Ausserrhoden"))))},x=function(e){return r.a.createElement("div",{className:"conton-cart"},r.a.createElement("h2",null,e.latestInfoByName.name,": situation"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Laboratory Confirmed Infections : ",e.latestInfoByName.ncumul_conf),r.a.createElement("li",{className:"list-group-item"},"Current Hospital : ",e.latestInfoByName.current_hosp),r.a.createElement("li",{className:"list-group-item"},"Current isolated: ",e.latestInfoByName.current_isolated),r.a.createElement("li",{className:"list-group-item"},"current quarantined: ",e.latestInfoByName.current_quarantined),r.a.createElement("li",{className:"list-group-item"},"current released: ",e.latestInfoByName.current_vent),r.a.createElement("li",{className:"list-group-item"},"Total death: ",e.latestInfoByName.ncumul_deceased)))},I=(t(68),function(e){return r.a.createElement("div",{className:"contondetails-container"},r.a.createElement("div",{className:"contondetails-left"},r.a.createElement(O,{onButtonClick:e.getContonName}),e.latestInfoByName?r.a.createElement(x,{latestInfoByName:e.latestInfoByName}):r.a.createElement("div",null,"Loading ...")),r.a.createElement(k,{className:"conton-line-chart",options:e.chartOptins,earliestDate:e.earliestDate}))}),L=function(e){var a=e.split("-");return Date.UTC(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2]))},_=(t(69),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).getLineChartsOptions=function(e){var a=e.reverse(),t=[],r={name:"total confirmed number",data:[]},o={name:"Numbers of Hospital",data:[]},l={name:"total death number",data:[],color:"#FF0000"},i=e[0].fields.date;a.forEach((function(e){r.data.push([e.fields.date,e.fields.ncumul_conf?e.fields.ncumul_conf:0]),o.data.push([e.fields.dat,e.fields.ncumul_hosp?e.fields.ncumul_hosp:0]),l.data.push([e.fields.dat,e.fields.ncumul_deceased?e.fields.ncumul_deceased:0])})),t.push(r),t.push(o),t.push(l),n.setState({lineChartOptions:t}),n.setState({earliestDate:L(i)})},n.getCurrentDate=function(){var e=new Date,a=e.getFullYear(),t=e.getMonth()+1,n=e.getDate();return"".concat(a,"-").concat(t,"-").concat(n)},n.getContonName=function(e){n.setState({name:e.target.text}),n.fetchContonData(e.target.text)},n.fetchData=Object(g.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.state.latestRecordDate.split("-"),n.setState({isLoading:!n.state.isLoading}),E.a.get("https://data.bs.ch/api/records/1.0/search/?dataset=100077&q=&rows=30&sort=update&facet=date&facet=name&facet=abbreviation_canton_and_fl&refine.date=".concat(a[0],"%2F").concat(a[1],"%2F").concat(a[2])).then((function(e){var a=e.data.records;n.setState({data:a})}));case 3:case"end":return e.stop()}}),e)}))),n.getLatestInfoByName=function(e){var a=e[e.length-1];a&&(n.setState({latestInfoByName:a.fields}),n.setState({latestRecordDate:a.fields.date}))},n.fetchContonData=Object(g.a)(f.a.mark((function e(){var a,t=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.length>0&&void 0!==t[0]?t[0]:n.state.name,E.a.get("https://data.bs.ch/api/records/1.0/search/?dataset=100077&q=&rows=300&sort=update&facet=date&facet=name&facet=abbreviation_canton_and_fl&refine.name=".concat(a)).then((function(e){var a=e.data.records;n.setState({contonData:a}),n.getLineChartsOptions(a),n.getLatestInfoByName(a),n.fetchData()})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),n.state={data:[],isLoading:!1,name:"Z\xfcrich",contonData:[],lineChartOptions:[],xAxisArr:[],latestInfoByName:null,latestRecordDate:n.getCurrentDate()},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchContonData(),this.fetchData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"section-map"},r.a.createElement("h2",null,"New Coronavirus:Situation in Contons"),this.state.data.length?r.a.createElement(S,{contonsData:this.state.data}):r.a.createElement("div",null,"Loading"),r.a.createElement(I,{getContonName:this.getContonName,chartOptins:this.state.lineChartOptions,earliestDate:this.state.earliestDate,latestInfoByName:this.state.latestInfoByName}))}}]),t}(r.a.Component)),A=function(){return r.a.createElement("div",{className:"overview-page"},r.a.createElement(D,null),r.a.createElement(_,null))},R=(t(70),function(e){var a=e.searchChange;return r.a.createElement("div",{className:"input_container"},r.a.createElement("input",{className:"form-control",type:"search",placeholder:"search countries and areas",onChange:a}))}),j=(t(71),[{name:"Germany",region:["Land Berlin","Land Hamburg"]},{name:"France",region:["Region Bretagne","Region Centre-Val de Loire","Region Corse","Region Hauts-de-France","Region \xcele de France","Region Normandie","Region Nouvelle-Aquitaine","Region Occitanie","Region Pays de la Loire","Region Provence-Alpes-C\xf4te d\u2019Azur","Overseas area French Guyana","Overseas area French Polynesia","Overseas area Guadeloupe","Overseas area La R\xe9union","Overseas area Martinique","Overseas area Mayotte","Overseas area Saint-Barth\xe9lemy","Overseas area Saint-Martin"]},{name:"Italy",region:["Region Campania","Region Liguria","Region Sardinia","Region Veneto"]},{name:"Austria",region:["Land Burgenland","Land Burgenland","Land Burgenland","Land Burgenland"]}]),T=["Albania","Andorra","Argentina","Armenia","The Bahamas","Bahrain","Belgium","Belize","Bosnia and Herzegovina","Brazil","Canada","Cape Verde","Chile","Colombia","Costa Rica","Croatia","Czech Republic","Kingdom of Denmark","Ecuador","Georgia","Guyana","Honduras","Hungary","Iceland","India","Iran","Iraq","Ireland","Israel","Jamaica","Jordan","Kuwait","Lebanon","Libya","Luxemburg","Maldives","Malta","Morocco","Moldova","Monaco","Montenegro","Nepal","Kingdom of the Netherlands","North Macedonia","Occupied Palestinian Territory","Oman","Panama","Paraguay","Peru","Portugal","Qatar","Romania","Russia","Slovakia","Slovenia","Spain","Tunisia","Ukraine","United Arab Emirates","United Kingdom of Great Britain","United States of America"],M=[{imageUrl:"./images/1.png",description:"Keep a distance."},{imageUrl:"./images/2.png",description:"Wear a face mask if it is impossible to maintain that distance."},{imageUrl:"./images/3.png",description:"Wash your hands thoroughly."},{imageUrl:"./images/4.png",description:"If you experience symptoms, get tested immediately and stay at home."},{imageUrl:"./images/5.png",description:"To enable contact tracing, always provide your complete contact information."},{imageUrl:"./images/6.png",description:"To break infection chains: download and activate the SwissCovid app."},{imageUrl:"./images/7.png",description:"If you test positive: isolate. If you have had contact with a confirmed case: quarantine."},{imageUrl:"./images/8.png",description:"Do not shake hands."},{imageUrl:"./images/9.png",description:"Cough and sneeze into your elbow."},{imageUrl:"./images/9.png",description:"Only visit a doctor\u2019s office or an accident and emergency department after making an appointment by phone."}],z=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).onSearchChange=function(e){n.setState({searchFields:e.target.value})},n.state={listCountries:j,otherCountries:T,searchFields:""},n}return Object(s.a)(t,[{key:"render",value:function(){var e,a=this.state,t=a.listCountries,n=a.searchFields,o=a.otherCountries,l=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));l.length||(e=t.filter((function(e){return e.region.some((function(e){return e.toLowerCase().includes(n.toLowerCase())}))})));var i=l.length?l:e,s=o.filter((function(e){return e.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"container list-container"},r.a.createElement("h2",null,"New coronavirus: Mandatory quarantine for persons arriving in Switzerland"),r.a.createElement("p",{className:""},"The countries and areas with a high risk of infection are set down in the Covid-19 Ordinance on International Passenger Transport Measures. This list is regularly updated. The decisive factor in whether a country is included on the list or not is the data of ECDC (European Centre for Disease Prevention and Control). Areas bordering Switzerland can be exempted from inclusion on the list despite a corresponding incidence of the new coronavirus."),r.a.createElement("p",null,"If a country is on the list, this includes all of its areas, islands and overseas territories \u2013 even if they are not listed separately. Switzerland\u2019s neighbouring countries are exempted from this regulation. In the case of these countries, it is not the entire country that is listed, but rather regions. Further information in this regard can be found on the page"),r.a.createElement("p",null,r.a.createElement("strong",null," List of countries and areas shows below")),r.a.createElement("p",null,r.a.createElement("strong",null," List valid upon arriving in Switzerland from 12.10.2020")),r.a.createElement("p",null,r.a.createElement("strong",null,r.a.createElement("a",{href:"https://www.bag.admin.ch/bag/en/home/krankheiten/ausbrueche-epidemien-pandemien/aktuelle-ausbrueche-epidemien/novel-cov/empfehlungen-fuer-reisende/quarantaene-einreisende.html"},"More Info Here"))),r.a.createElement("div",null,r.a.createElement("p",{className:"text-center"},r.a.createElement("a",{className:"btn btn-light mr-2","data-toggle":"collapse",href:"#neighbour",role:"button","aria-expanded":"false","aria-controls":"neighbour"},"Areas of neighbouring countries"),r.a.createElement("a",{className:"btn btn-light mr-2","data-toggle":"collapse",href:"#all",role:"button","aria-expanded":"false","aria-controls":"all"},"Countries and areas")),r.a.createElement("div",{className:"",id:"neighbour"},r.a.createElement(R,{searchChange:this.onSearchChange}),r.a.createElement("div",{className:"card card-body"},r.a.createElement("ul",{className:"list-group"},i.map((function(e,a){return r.a.createElement("li",{key:"country-".concat(a),className:"list-group-item"},r.a.createElement("strong",null,e.name),r.a.createElement("ul",{className:"list-group"},e.region.map((function(e,a){return r.a.createElement("li",{key:"region-".concat(a),className:"list-group-item"},e)}))))}))))),r.a.createElement("div",{className:"collapse",id:"all"},r.a.createElement(R,{searchChange:this.onSearchChange}),r.a.createElement("div",{className:"card card-body"},r.a.createElement("ul",{className:"list-group"},s.map((function(e,a){return r.a.createElement("li",{key:"otherCountries-".concat(a),className:"list-group-item"},e)})))))))}}]),t}(r.a.Component),F=(t(72),function(){return r.a.createElement("div",{className:"symptions-page"},r.a.createElement("div",{className:"symptions-head-info"},r.a.createElement("h2",null,"Symptoms of coronavirus disease"),r.a.createElement("div",{className:"check-symptions"},r.a.createElement("a",{className:"text-center",target:"_blank",rel:"noopener noreferrer",href:"https://check.foph-coronavirus.ch/screening"}," Are you experiencing symptoms? Take the coronavirus check"))),r.a.createElement("div",{className:"symptions-container"},r.a.createElement("div",{className:"vaccine-info"},r.a.createElement("p",null,"There is currently no authorised vaccine against the new coronavirus. Many research institutions around the world are working on the development of a vaccine against Covid-19. At present, it cannot be said exactly when a vaccine will be available.")),r.a.createElement("p",null,"There is a very wide range of symptoms caused by the new coronavirus."),r.a.createElement("p",null,"Symptoms can vary in severity and can even be mild. Complications, such as pneumonia, are also possible."),r.a.createElement("p",null,"Contact your doctor if you have any symptoms about which you are concerned."),r.a.createElement("p",null,r.a.createElement("strong",null,"The most common symptoms are:")),r.a.createElement("ul",{className:"text-left"},r.a.createElement("li",null,"Respiratory illness symptoms (sore throat, cough (usually dry), shortness of breath, chest pain)"),r.a.createElement("li",null,"High temperature"),r.a.createElement("li",null,"Sudden loss of sense of smell and/or taste")),r.a.createElement("p",null,r.a.createElement("strong",null,"Other symptoms may include:")),r.a.createElement("ul",{className:"text-left"},r.a.createElement("li",null,"Headache"),r.a.createElement("li",null,"General weakness, feeling unwell"),r.a.createElement("li",null,"Aching muscles"),r.a.createElement("li",null,"Gastrointestinal symptoms (nausea, vomiting, diarrhoea, stomach ache)"),r.a.createElement("li",null,"Head cold"),r.a.createElement("li",null,"Skin rash")),r.a.createElement("p",{styple:{fontSize:"10px"}},"These are for informational purposes only. Consult your local medical authority for advice. (Source: Federal Office of Public Health FOPH)")))}),U=(t(73),function(e){var a=e.rule;return r.a.createElement("div",{className:"hygie-cart",style:{width:"16rem"}},r.a.createElement("img",{src:a.imageUrl,className:"",alt:"..."}),r.a.createElement("div",{class:"hygie-text"},r.a.createElement("p",null,a.description)))}),G=(t(74),function(){return r.a.createElement("div",{className:"provention-page"},r.a.createElement("h2",null,"Protect yourself and others"),r.a.createElement("p",null,"Continue to follow the hygiene and social distancing rules. You can best protect yourself from infection by regularly washing your hands with soap and following the rules on social distancing. "),r.a.createElement("div",{className:"rules-container"},r.a.createElement("h2",null,"Hygiene rules and how to behave"),r.a.createElement("p",null,"The Federal Office of Public Health recommends simple measures to prevent the spread of the new coronavirus."),r.a.createElement("div",{className:"carts-container"},M.map((function(e){return r.a.createElement(U,{rule:e})})))))}),H=(t(75),function(){return r.a.createElement("div",{className:"text-center footer-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"footer__icons__container"},r.a.createElement("a",{type:"button",className:"btn btn-secondary",href:"https://github.com/yudanZ/covid-19-tracker-swiss",target:"_blank",rel:"noopener noreferrer"},"Contribute on Github"),r.a.createElement("a",{type:"button",className:"btn btn-primary",href:"https://twitter.com/intent/tweet?text=Get the latest Covid-19 updates with Covid-19 Swiss Tracker!&url=https://yudanz.github.io/covid-19-tracker-swiss/",target:"_blank",rel:"noopener noreferrer"},"Share on Twitter"),r.a.createElement("a",{type:"button",className:"btn btn-warning",href:"https://github.com/yudanZ/covid-19-tracker-swiss/issues/new",target:"_blank",rel:"noopener noreferrer"},"Report an Issue")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"text-center col-12"},r.a.createElement("div",{className:"footer__text"},r.a.createElement("p",{className:"mb-0"},"Copyright \xa9 2020 by Yudan Zhai . ",r.a.createElement("a",{href:"https://www.yudan.ch/"},"Designed by Yudan Zhai"))))))}),P=(t(76),function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={data:[],isLoading:!1},n}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{basename:"/covid-19-tracker-swiss"},r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(d.a,{exact:!0,path:"/",component:A}),r.a.createElement(d.a,{exact:!0,path:"/list",component:z}),r.a.createElement(d.a,{exact:!0,path:"/symptions",component:F}),r.a.createElement(d.a,{exact:!0,path:"/provention",component:G}),r.a.createElement(H,null)))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.7a5e04c3.chunk.js.map