#pragma strict

function Start () {

}

function Update () {

}
function OnControllerColliderHit(hit:ControllerColliderHit){
	if(hit.gameObject.tag=="bigstone"&&collectpower.stonecount==10){
		gameObject.GetComponent(CharacterController).slopeLimit=90;
		Destroy(gameObject.Find("stonecount"));
	}
}