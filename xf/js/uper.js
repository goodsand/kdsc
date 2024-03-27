$(function ()
{

	var product_str='{"0":[{"speed":"500M","type":"臻宽带UC2档","price":"139元/月","des_p":"1主卡+3副卡（每月共享80G流量、1000分钟通话）","des_f1":"含1台WiFi6路由器","des_f2":"","sales":"12个月","store":"300元合约预存款+299元一次性费用"},{"speed":"1000M","type":"臻宽带UC5档","price":"179元/月","des_p":"1主卡+3副卡（每月共享100G流量、1500分钟通话）","des_f1":"含1台WiFi6路由器","des_f2":"","sales":"12个月","store":"300元合约预存款+299元一次性费用"},{"speed":"500M","type":"臻宽带UR1S档","price":"209元/月","des_p":"1主卡+3副卡（每月共享100G流量、1000分钟通话）","des_f1":"含FTTR一主一从","des_f2":"含1台室内看家摄像头两年服务，到期停","sales":"24个月","store":"700元合约预存款+300元一次性费用"},{"speed":"1000M","type":"臻宽带UR2S档","price":"239元/月","des_p":"1主卡+3副卡（每月共享160G流量、1500分钟通话）","des_f1":"含FTTR一主一从","des_f2":"含1台室内看家摄像头两年服务，到期停","sales":"24个月","store":"700元合约预存款+300元一次性费用"},{"speed":"2000M","type":"臻宽带UR6S档","price":"499元/月","des_p":"1主卡+4副卡（每月共享300G流量、3000分钟通话）","des_f1":"含FTTR一主二从","des_f2":"含1台室内看家摄像头两年服务，到期停","sales":"36个月","store":"700元合约预存款+300元一次性费用"},{"speed":"2000M","type":"臻宽带UR7S档","price":"599元/月","des_p":"1主卡+4副卡（每月共享1000G流量、4000分钟通话）","des_f1":"含FTTR一主三从","des_f2":"含1台室内看家摄像头两年服务，到期停","sales":"36个月","store":"700元合约预存款+300元一次性费用"}]}';
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
			$("#hd").text("宽带网龄5年以上老用户，299元一次性费用优惠至99元");
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

