$(document).ready(function(){
	 $('.chart-percent').easyPieChart({
            //your options goes here
            animate:{
                duration:2000,
                enabled:true
            },
            barColor:'rgb(151, 218, 228)',
            scaleColor:false,
            size: 150,
            lineWidth:15,
            lineCap:'circle',
           
        });
});