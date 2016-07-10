#pragma strict

function Start () {

}

function Update () {

}

function OnMouseDown(){

	guitest.talk=true;
	guitest.rolename="聪明兔";
	switch(collectpower.charge){
		case 0: guitest.info="我想出海看一看\n你能带我出去看看吗?";break;
		case 1: guitest.info="你有第一个能量源了？\n我知道第二个在哪\n在上坡下的一棵树上\n但是我们拿不到你\n你需要找到10跟木柴做成长杆把能量源打下来";break;
		case 2: guitest.info="第3个能量源在一个高山上,但是我们上不去\n你可以去问问那边的那个神秘人";break;
		case 3: guitest.info="oh，再找到一个能量源我就可以出海了";break;
		case 4: guitest.info="4个能量源都找到了我们出海吧";break;
		default:guitest.info="可以回家时记得叫上我哈！！！";break;
}}