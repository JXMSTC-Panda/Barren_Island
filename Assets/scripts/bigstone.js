#pragma strict

function Start () {

}

function Update () {

}
function OnControllerColliderHit(hit:ControllerColliderHit){
	if(hit.gameObject.tag=="bigstone"&&collectpower.stonecount==10){
		guitest.talk=true;
		guitest.rolename="大石头";
		gameObject.GetComponent(CharacterController).slopeLimit=90;
		guitest.info="习得飞檐走壁";
	
	}
}