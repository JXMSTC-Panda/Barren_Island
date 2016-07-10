#pragma strict

function Start () {

}

function Update () {

}
function OnMouseDown(){

	guitest.talk=true;
	guitest.rolename="飞天侠";
	if(collectpower.stonecount<10){
	switch(collectpower.charge){
		case 0: guitest.info="这个岛景色真美啊";break;
		case 1: guitest.info="我有一门绝学,叫做飞檐走壁";break;
		case 2: guitest.info="给我找10个石头来我就教你飞檐走壁\n哪里都能去";break;
		case 3: guitest.info="给我找10个石头来我就教你飞檐走壁\n哪里都能去";break;
		case 4: guitest.info="给我找10个石头来我就教你飞檐走壁\n哪里都能去";break;
		default:guitest.info="！！！";break;
		}
		}
	else if(collectpower.stonecount==10&&collectpower.charge==2){
		
		guitest.info="山下的那块大石头有我刻下的秘籍\n自己去学吧";
		//transform.Find("Graphics").GetComponent(CharacterController).slopeLimit=90;//控制主角爬坡能力
	}
}
