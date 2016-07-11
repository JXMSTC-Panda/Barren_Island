#pragma strict


function OnMouseDown(){
	
	guitest.talk=true;
	guitest.rolename="工程师";
	switch(collectpower.charge){
		case 0: guitest.info="哈哈,终于看到人了！！！\n我困在这个岛上很多年了\n一直找不到能量源,那边射击处有一个能量源\n可是我射不中,你可以过去试一试.";break;
		case 1: guitest.info="你找到一个能量源了吗？\n第二个能量源我也不知道在哪\n你可以去那边的山坡上问问那只兔子他也许知道";break;
		case 2: guitest.info="你真厉害，这么快就找到两个能量源了";break;
		case 3: guitest.info="oh，再找到一个能量源我们就可以回家了";break;
		case 4: guitest.info="ok，4个能量源都找到了\n我们可以打开那边的房子就能自动发射信号\n再把火堆点燃就有人来救我们了";break;
	//	default:guitest.info="可以回家时记得叫上我哈！！！";break;
	}
}