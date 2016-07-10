#pragma strict
static var canfirecoconut:boolean=false;
var mat1:UI.Text;
function Start () {

}

function Update () {

}
function OnTriggerEnter(col:Collider){
	if(col.gameObject.tag=="Player"){
		canfirecoconut=true;
		
		mat1.enabled=false;
	}

}
function OnTriggerExit(col:Collider){
	if(col.gameObject.tag=="Player"){
		canfirecoconut=false;
		
	//	mat1.enabled=false;
	}

}