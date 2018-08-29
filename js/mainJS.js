map=new GMaps({div:"#map",zoom:16,lat:-12.043333,lng:-77.028333}),map2=new GMaps({div:"#map2",zoom:16,lat:-12.043333,lng:-77.028333}),map2.drawRoute({origin:[-12.044012922866312,-77.02470665341184],destination:[-12.090814532191756,-77.02271108990476],travelMode:"driving",strokeColor:"#131540",strokeOpacity:.6,strokeWeight:6});
window.onload=function(){new CanvasJS.Chart("chartContainer1",{animationEnabled:!0,theme:"light2",title:{text:"Grafico de colunas"},data:[{type:"column",showInLegend:!0,legendMarkerColor:"grey",legendText:"MMbbl = one million barrels",dataPoints:[{y:300878,label:"Venezuela"},{y:266455,label:"Saudi"},{y:169709,label:"Canada"},{y:158400,label:"Iran"},{y:142503,label:"Iraq"},{y:101500,label:"Kuwait"},{y:97800,label:"UAE"},{y:8e4,label:"Russia"}]}]}).render(),new CanvasJS.Chart("chartContainer2",{animationEnabled:!0,title:{text:"Despesas do Mês"},axisY:{includeZero:!1,prefix:"$"},toolTip:{shared:!0},legend:{fontSize:13},data:[{type:"splineArea",showInLegend:!0,name:"Salaries",yValueFormatString:"$#,##0",xValueFormatString:"MMM YYYY",dataPoints:[{x:new Date(2018,2),y:3e4},{x:new Date(2018,3),y:35e3},{x:new Date(2018,4),y:3e4},{x:new Date(2018,5),y:30400},{x:new Date(2018,6),y:20900},{x:new Date(2018,7),y:31e3},{x:new Date(2018,8),y:30200},{x:new Date(2018,9),y:3e4},{x:new Date(2018,10),y:33e3},{x:new Date(2018,11),y:38e3},{x:new Date(2019,0),y:38900},{x:new Date(2019,1),y:39e3}]},{type:"splineArea",showInLegend:!0,name:"Office Cost",yValueFormatString:"$#,##0",dataPoints:[{x:new Date(2018,2),y:20100},{x:new Date(2018,3),y:16e3},{x:new Date(2018,4),y:14e3},{x:new Date(2018,5),y:18e3},{x:new Date(2018,6),y:18e3},{x:new Date(2018,7),y:21e3},{x:new Date(2018,8),y:22e3},{x:new Date(2018,9),y:25e3},{x:new Date(2018,10),y:23e3},{x:new Date(2018,11),y:25e3},{x:new Date(2019,0),y:26e3},{x:new Date(2019,1),y:25e3}]},{type:"splineArea",showInLegend:!0,name:"Entertainment",yValueFormatString:"$#,##0",dataPoints:[{x:new Date(2018,2),y:10100},{x:new Date(2018,3),y:6e3},{x:new Date(2018,4),y:3400},{x:new Date(2018,5),y:4e3},{x:new Date(2018,6),y:9e3},{x:new Date(2018,7),y:3900},{x:new Date(2018,8),y:4200},{x:new Date(2018,9),y:5e3},{x:new Date(2018,10),y:14300},{x:new Date(2018,11),y:12300},{x:new Date(2019,0),y:8300},{x:new Date(2019,1),y:6300}]},{type:"splineArea",showInLegend:!0,yValueFormatString:"$#,##0",name:"Maintenance",dataPoints:[{x:new Date(2018,2),y:1700},{x:new Date(2018,3),y:2600},{x:new Date(2018,4),y:1e3},{x:new Date(2018,5),y:1400},{x:new Date(2018,6),y:900},{x:new Date(2018,7),y:1e3},{x:new Date(2018,8),y:1200},{x:new Date(2018,9),y:5e3},{x:new Date(2018,10),y:1300},{x:new Date(2018,11),y:2300},{x:new Date(2019,0),y:2800},{x:new Date(2019,1),y:1300}]}]}).render()};
var ctx=document.getElementById("myChart1").getContext("2d"),chart=new Chart(ctx,{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:[0,10,5,2,20,30,45]}]},options:{}}),myChart=(ctx=document.getElementById("myChart2"),new Chart(ctx,{type:"bar",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}));
!function(a){"use strict";a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=a(this.hash);if((e=e.length?e:a("[name="+this.hash.slice(1)+"]")).length)return a("html, body").animate({scrollTop:e.offset().top-48},1e3,"easeInOutExpo"),!1}}),a(".js-scroll-trigger").click(function(){a(".navbar-collapse").collapse("hide")}),a("body").scrollspy({target:"#mainNav",offset:54});var e=function(){a("#mainNav").offset().top>100?a("#mainNav").addClass("navbar-shrink"):a("#mainNav").removeClass("navbar-shrink")};e(),a(window).scroll(e)}(jQuery);