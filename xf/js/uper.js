$(function ()
{

	var product_str='{"0":[{"speed":"1000M","type":"臻宽带UR1S新","price":"149元/月","des_p":"1主卡+2副卡（每月共享50G流量、1000分钟通话）","des_f1":"含FTTR一主一从","des_f2":"IPTV免月租（调测费100元先收取后返还）","sales":"36个月","store":"1000元合约预存款+300元基础调测费"},{"speed":"1000M","type":"臻宽带UR2C档","price":"179元/月","des_p":"1主卡+2副卡（每月共享70G流量、1500分钟通话）","des_f1":"含FTTR一主一从","des_f2":"IPTV免月租（调测费100元先收取后返还）","sales":"36个月","store":"1000元合约预存款+300元基础调测费"},{"speed":"1000M","type":"臻宽带UR2S新","price":"199元/月","des_p":"1主卡+2副卡（每月共享80G流量、1500分钟通话）","des_f1":"含FTTR一主一从","des_f2":"IPTV免月租（调测费100元先收取后返还）","sales":"36个月","store":"1000元合约预存款+300元基础调测费"},{"speed":"1000M","type":"臻宽带UR3C档","price":"219元/月","des_p":"1主卡+3副卡（每月共享100G流量、2000分钟通话）","des_f1":"含FTTR一主一从","des_f2":"IPTV免月租（调测费100元先收取后返还）","sales":"36个月","store":"1000元合约预存款+300元基础调测费"},{"speed":"1000M","type":"臻宽带UR3S新","price":"239元/月","des_p":"1主卡+3副卡（每月共享120G流量、2000分钟通话）","des_f1":"含FTTR一主二从","des_f2":"IPTV免月租（调测费100元先收取后返还）","sales":"36个月","store":"1000元合约预存款+300元基础调测费"},{"speed":"2000M","type":"臻宽带UR6S档","price":"359元/月","des_p":"1主卡+4副卡（每月共享200G流量、2500分钟通话）","des_f1":"含FTTR一主三从","des_f2":"IPTV免月租（调测费100元先收取后返还）","sales":"36个月","store":"1000元合约预存款+300元基础调测费"}]}';
	var product=JSON.parse(product_str);
	var selectid=0;
	var stype=0;

	
	for(var i=0;i<product[stype].length;i++){
		$(".meal-content").append('<li class="tcDiv midbg"><span class="speed-no">'+product[stype][i].speed+'</span><span class="speed-no no-top">'+product[stype][i].type+'</span><span class="prePrice"><span class="price-text">【'+product[stype][i].price+'】 </span></span></li>');
	}

　　$(".meal-content li").click(function ()
　　{
　　　　$(this).addClass("check_on").siblings().removeClass("check_on");
　　　　var index = $(this).index();
		selectid = index;
		$("#price").text(product[stype][index].price);
		$("#speed").text(product[stype][index].speed);
		$("#des_p").text(product[stype][index].des_p);
		$("#des_f1").text(product[stype][index].des_f1);
		$("#des_f2").text(product[stype][index].des_f2);
		$("#sales").text(product[stype][index].sales);
		$("#store").text(product[stype][index].store);
		if(index<2){
			$("#hd").text("");
		}else{
			$("#hd").text("");
		}
		
　　});

	$(".meal-content").children().eq(1).click();






$("#quick").click(function ()
　　{
		top.location="xufei_one.html#"+product[stype][selectid].price;

　　});
})

