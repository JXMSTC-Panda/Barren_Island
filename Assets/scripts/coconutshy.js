#pragma strict
var mat:UI.Text;

function Start () {

}

function Update () {

}
function OnTriggerEnter(col:Collider){
	if(col.gameObject.tag=="Player"){
		mat.enabled=true;
		mat.text="只有在地毯上才能射击标靶，击中标靶10次即可成功";
		
	}

}
function OnTriggerExit(col:Collider){
	if(col.gameObject.tag=="Player"){
		mat.enabled=false;
	
	}

}